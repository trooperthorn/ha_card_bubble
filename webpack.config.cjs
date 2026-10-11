const webpack = require ('webpack');
const path = require('path');

// Load local environment variables from .env (not committed to git)
try { require('fs').readFileSync('.env', 'utf8').split('\n').forEach(line => { const [k, v] = line.split('='); if (k && v) process.env[k.trim()] = v.trim(); }); } catch {}  

const rules = [
  {
     test: /\.css/,
     type: 'asset/source',
     // Fork patch (ha_card_bubble): see build/css-minify-loader.cjs.
     use: [require.resolve('./build/css-minify-loader.cjs')],
  },
  // Fork patch (ha_card_bubble): rename the removed ha-formfield element to the
  // fork's bubble-formfield in the bundle; see build/formfield-loader.cjs.
  {
    test: /\.(js|css)$/,
    include: path.resolve(__dirname, 'src'),
    exclude: path.resolve(__dirname, 'src/fork/bubble-formfield.js'),
    use: [require.resolve('./build/formfield-loader.cjs')],
  }
];

// Fork patch (ha_card_bubble): every `js-yaml` import in src resolves to the
// on-demand shim, except the shim's own, which reaches the real library and
// becomes a lazily loaded chunk. See src/fork/lazy-js-yaml.js.
const lazyYamlShim = path.resolve(__dirname, 'src/fork/lazy-js-yaml.js');
const lazyYamlPlugin = new webpack.NormalModuleReplacementPlugin(/^js-yaml$/, (resource) => {
  if (resource.contextInfo?.issuer !== lazyYamlShim) resource.request = lazyYamlShim;
});

// Fork patch (ha_card_bubble): pop-up/create.js imports the onboarding preview
// from ./editor.js, which drags every pop-up/button/slider editor into the
// runtime bundle. Only that importer is redirected; see lazy-popup-onboarding.js.
const popupCreate = path.resolve(__dirname, 'src/cards/pop-up/create.js');
const lazyOnboardingPlugin = new webpack.NormalModuleReplacementPlugin(/^\.\/editor\.js$/, (resource) => {
  if (resource.contextInfo?.issuer === popupCreate) resource.request = path.resolve(__dirname, 'src/fork/lazy-popup-onboarding.js');
});

const performance = {
  hints: false,
}

// Ships the per-language editor dictionaries (src/translations/editor/*.json)
// as bubble-card-<lang>.json next to the bundle. They are fetched locally by
// src/tools/localize.js when the editor opens; en.json is bundled so it is
// not emitted, and _-prefixed files are tooling artifacts.
//
// Flat, and not a translations/ subfolder, because that is the only layout
// HACS ships for a plugin: it only downloads files sitting directly in dist/
// (base.py gathers `treefile.path in ["", "dist"]`), so anything nested is
// silently left behind. The name is prefixed because the dev build writes
// into HA_PATH, which is a folder shared with every other custom card.
class EmitTranslationsPlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap('EmitTranslations', (compilation) => {
      compilation.hooks.processAssets.tap(
        { name: 'EmitTranslations', stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL },
        () => {
          const fs = require('fs');
          const dir = path.resolve(__dirname, 'src/translations/editor');
          for (const file of fs.readdirSync(dir)) {
            if (!file.endsWith('.json') || file.startsWith('_') || file === 'en.json') continue;
            const minified = JSON.stringify(JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')));
            compilation.emitAsset(
              `bubble-card-${file}`,
              new compiler.webpack.sources.RawSource(minified)
            );
          }
        }
      );
    });
  }
}

const plugins = [new EmitTranslationsPlugin(), lazyYamlPlugin, lazyOnboardingPlugin];

// Fork patch (ha_card_bubble): emit ES modules so lazily loaded chunks (the
// editor) are fetched with import() relative to import.meta.url, i.e. next to
// bubble-card.js under /hacsfiles/<repo>/. The dashboard already loads the
// resource as type "module". Chunk names carry a content hash because Home
// Assistant serves /hacsfiles with a 31-day cache and the ?hacstag cache
// buster only applies to the entry file; the fork changes chunks without
// upstream's version changing, so a version-based name could go stale.
const forkModuleOutput = {
  module: true,
  chunkFormat: 'module',
  chunkLoading: 'import',
  chunkFilename: 'bubble-card-chunk-[name].[contenthash:8].js',
  uniqueName: 'ha_card_bubble',
};
const experiments = { outputModule: true };

module.exports = [
  {
    mode: 'production',
    entry: {
      'bubble-card': './src/bubble-card.js'
    },
    module: {
      rules,
    },
    performance,
    plugins,
    experiments,
    output: {
      ...forkModuleOutput,
      // Fork patch: drop chunks from earlier builds (their names carry a
      // content hash). bubble-pop-up-fix.js is committed by upstream, not built.
      // Only the production build cleans; the dev build writes into HA_PATH,
      // a folder shared with other cards.
      clean: { keep: /^bubble-pop-up-fix\.js$/ },
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
    }
  },

  // My Home Assistant test server

  {
    mode: 'development',
    entry: {
      'bubble-card': './src/bubble-card.js'
    },
    module: {
      rules,
    },
    performance,
    plugins,
    experiments,
    output: {
      ...forkModuleOutput,
      path: process.env.HA_PATH || path.resolve(__dirname, 'www'),
      filename: '[name].js'
    }
  }
];
