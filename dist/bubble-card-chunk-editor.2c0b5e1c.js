export const __webpack_esm_id__=8;export const __webpack_esm_ids__=[8];export const __webpack_esm_modules__={4560(e,t,o){o.d(t,{K:()=>d});var i=o(6684),a=o(9533),n=o(2999),r=o(6331),s=o(1693),l=o(7190);function d(e){const t=(0,r.Ay)(e.hass),o="pop-up"===e._config.card_type;let d=e._config.button_action||"";const c=o&&(0,n.Az)(e._config);c||e._config.button_type||(e._config.button_type=o?"name":"switch");const u=(0,n.a9)(e._config);let p={};"slider"!==u||e._disableEntityFilter||(p={filter:[{domain:["light","media_player","cover","input_number","number","climate","fan"]},{domain:"sensor",device_class:"battery"}]});const h=o&&(0,n.hP)(e._config),b=c?"":e.makeDropdown(t("editor.common.button_type"),"button_type",function(e){return[{label:e("editor.button.type_switch"),value:"switch"},{label:e("editor.button.type_slider"),value:"slider"},{label:e("editor.button.type_state"),value:"state"},{label:e("editor.button.type_name_long"),value:"name"}]}(t));return i.qy`
        <div class="card-config">
            ${o?"":e.makeDropdown(t("editor.common.card_type"),"card_type",e.cardTypeList)}
            ${o?"":b}
            ${o?"":i.qy`
            <ha-form
                .hass=${e.hass}
                .data=${e._config}
                .schema=${[{name:"entity",label:t("slider"!==u?"editor.button.entity_toggle":"editor.button.entity_slider"),selector:{entity:p}}]}
                .computeLabel=${e._computeLabelCallback}
                .disabled="${"name"===u}"
                @value-changed=${e._valueChanged}
            ></ha-form>`}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:cog"></ha-icon>
                ${t(o?"editor.button.header_card_settings":"editor.common.card_settings")}
                </h4>
                <div class="content">
                    ${o?b:""}
                    ${o?i.qy`
                    <ha-form
                        .hass=${e.hass}
                        .data=${e._config}
                        .schema=${[{name:"entity",label:c?e._optionalLabel(t("editor.common.entity")):t("slider"!==u?"editor.button.entity_toggle":"editor.button.entity_slider"),selector:{entity:p}}]}
                        .computeLabel=${e._computeLabelCallback}
                        .disabled="${"name"===u}"
                        @value-changed=${e._valueChanged}
                    ></ha-form>`:""}
                    <ha-form
                        .hass=${e.hass}
                        .data=${{name:e._config?.name||""}}
                        .schema=${[{name:"name",selector:{text:{}}}]}
                        .computeLabel=${()=>e._optionalLabel(t("editor.common.name"))}
                        @value-changed=${t=>{e._valueChanged({target:{configValue:"name"},detail:{value:t.detail.value.name}})}}
                    ></ha-form>
                    ${e.makeDropdown(e._optionalLabel(t("editor.common.icon")),"icon",void 0,h)}
                    ${e.makeShowState()}
                </div>
            </ha-expansion-panel>
            ${(0,l.E9)(e)}
            ${c?"":i.qy`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap"></ha-icon>
                ${t("editor.actions.on_icon")}
                </h4>
                <div class="content">
                    ${e.makeActionPanel("tap")}
                    ${e.makeActionPanel("double_tap")}
                    ${e.makeActionPanel("hold")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined style="display: ${"slider"===u&&e._config.tap_to_slide?"none":""}">
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                ${t("editor.actions.on_card")}
                </h4>
                <div class="content">
                    <!--
                      Default button action mapping to match create.js defaults:
                      - name: tap="none", double="none", hold="none"
                      - state: tap="more-info", double="none", hold="more-info"
                      - slider: tap="more-info"(sensor)/"toggle"(others), double="none", hold="none"
                      - switch: tap="toggle", double="none", hold="more-info"
                    -->
                    ${e.makeActionPanel("tap",d,"name"===u?"none":"state"===u||"slider"===u&&(0,a.md)(e,"sensor",e._config.entity)?"more-info":"toggle","button_action")}
                    ${e.makeActionPanel("double_tap",d,"none","button_action")}
                    ${"slider"!==u||e._config.read_only_slider?i.qy`
                        ${e.makeActionPanel("hold",d,"name"===u?"none":"more-info","button_action")}
                    `:i.qy`
                        <div class="bubble-info">
                            <h4 class="bubble-section-title">
                                <ha-icon icon="mdi:information-outline"></ha-icon>
                                ${t("editor.actions.hold_disabled_title")}
                            </h4>
                            <div class="content">
                                <p>${t("editor.actions.hold_disabled_body")}</p>
                            </div>
                        </div>
                    `}
                </div>
            </ha-expansion-panel>
            `}
            ${e.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:palette"></ha-icon>
                ${t("editor.common.styling_layout_options")}
                </h4>
                <div class="content">
                    ${e.makeLayoutPanel()}
                    ${o?"":e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${o?"":e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    ${t("editor.button.info_title")} ${o?t("editor.button.info_title_popup_suffix"):""}
                </h4>
                <div class="content">
                    <p>${(0,s.T5)(t("editor.button.info_intro"),{switch:i.qy`<b>${t("editor.button.intro_switch")}</b>`,slider:i.qy`<b>${t("editor.button.intro_slider")}</b>`,state:i.qy`<b>${t("editor.button.intro_state")}</b>`,name:i.qy`<b>${t("editor.button.intro_name")}</b>`})}</p>

                    ${"switch"!==u&&u?"":i.qy`
                        <p><strong>${t("editor.button.switch_title")}</strong> ${(0,s.T5)(t("editor.button.switch_body"),{section:i.qy`<b>${t("editor.actions.on_card")}</b>`})}</p>
                    `}

                    ${"slider"===u?i.qy`
                        <p><strong>${t("editor.button.slider_title")}</strong> ${t("editor.button.slider_body")}</p>
                        <p>${t("editor.button.slider_supported")}</p>
                        <ul class="icon-list">
                            <li><ha-icon icon="mdi:lightbulb-outline"></ha-icon>${t("editor.button.slider_light")}</li>
                            <li><ha-icon icon="mdi:speaker"></ha-icon>${t("editor.button.slider_media")}</li>
                            <li><ha-icon icon="mdi:window-shutter"></ha-icon>${t("editor.button.slider_cover")}</li>
                            <li><ha-icon icon="mdi:fan"></ha-icon>${t("editor.button.slider_fan")}</li>
                            <li><ha-icon icon="mdi:thermometer"></ha-icon>${t("editor.button.slider_climate")}</li>
                            <li><ha-icon icon="mdi:numeric"></ha-icon>${t("editor.button.slider_number")}</li>
                            <li><ha-icon icon="mdi:battery-50"></ha-icon>${t("editor.button.slider_battery")}</li>
                        </ul>
                        <p>${(0,s.T5)(t("editor.button.slider_any"),{numeric:i.qy`<b>${t("editor.button.numeric_state")}</b>`,settings:i.qy`<b>${t("editor.button.slider_settings")}</b>`,min:i.qy`<b>min</b>`,max:i.qy`<b>max</b>`})}</p>
                    `:""}

                    ${"state"===u?i.qy`
                        <p><strong>${t("editor.button.state_title")}</strong> ${t("editor.button.state_body")}</p>
                    `:""}

                    ${"name"===u?i.qy`
                        <p><strong>${t("editor.button.name_title")}</strong> ${t("editor.button.name_body")}</p>
                    `:""}
                </div>
            </div>
            ${o?"":e.makeVersion()}
        </div>
    `}},2429(e,t,o){o.r(t),o.d(t,{applyPopupSlideToClose:()=>_,getPopUpHashInputState:()=>C,getPopupPerformanceModeValue:()=>m,getPopupSlideToCloseValue:()=>g,normalizePopUpHashInputValue:()=>x,renderPopUpEditor:()=>L,renderPopupOnboarding:()=>P});var i=o(6684),a=o(9533),n=o(6331),r=o(2999),s=o(1693),l=o(4560),d=o(3691),c=o(8786);const u="#";function p(e){return[{label:e("editor.common.default"),value:"default"},{label:e("editor.popup.mode_fit_content"),value:"fit-content"},{label:e("editor.popup.mode_centered"),value:"centered"},{label:e("editor.popup.mode_adaptive"),value:"adaptive-dialog"}]}function h(e){return[{label:e("editor.common.default"),value:"default"},{label:e("editor.popup.performance"),value:"performance"}]}function b(e){return"fit-content"===e?.popup_mode?"fit-content":"centered"===e?.popup_mode?"centered":"adaptive-dialog"===e?.popup_mode?"adaptive-dialog":"default"}function m(e){return"performance"===e?.performance_mode?"performance":"default"}function g(e){return!1===e?.slide_to_close?"disabled":"header"===e?.slide_to_close?"header":"auto"}function _(e,t){if("header"===t||"disabled"===t)return void e._valueChanged({target:{configValue:"slide_to_close"},detail:{value:"header"===t&&"header"}});const o={...e._config};delete o.slide_to_close,(0,a.rC)(e,"config-changed",{config:o})}function f(e){const t=(0,n.Ay)(e.hass),o=(0,r.hP)(e._config);return i.qy`
        <ha-form
            .hass=${e.hass}
            .disabled=${o}
            .data=${{popup_mode:o?"adaptive-dialog":b(e._config)}}
            .schema=${[{name:"popup_mode",selector:{select:{options:p(t),mode:"dropdown"}}}]}
            .computeLabel=${()=>t("editor.popup.mode")}
            @value-changed=${t=>{const o=t.detail.value.popup_mode;e._valueChanged({target:{configValue:"popup_mode"},detail:{value:o}})}}
        ></ha-form>
    `}function y(e){const t=b(e);return"fit-content"===t?{popup_mode:"fit-content",...e?.with_bottom_offset?{with_bottom_offset:!0}:{}}:"centered"===t?{popup_mode:"centered",...e?.full_width_on_mobile?{full_width_on_mobile:!0}:{}}:"adaptive-dialog"===t?{popup_mode:"adaptive-dialog",...e?.with_bottom_offset?{with_bottom_offset:!0}:{}}:{}}function v(e){return"performance"===m(e)?{performance_mode:"performance"}:{}}function $(e){const t=function(e,t="light",o=2){const i=[];return e&&e.states?(Object.keys(e.states).forEach(a=>{if(!(i.length>=o)&&a.startsWith(t+".")){let t=!1;"brightness"in e.states[a].attributes&&(t=!0),i.push({entity:a,supportsBrightness:t})}}),i):i}(e);return t.length>0?t.map(e=>({type:"custom:bubble-card",card_type:"button",button_type:e.supportsBrightness?"slider":"switch",entity:e.entity,show_state:!0,grid_options:{columns:6}})):[{type:"custom:bubble-card",card_type:"button",button_type:"name",name:(0,n.Ay)(e)("editor.popup.example_lamp"),icon:"mdi:floor-lamp-outline",grid_options:{columns:6}}]}function w(e,t=!1){return i.qy`
        <div id="duplicate-hash-warning" style=${t?"":"display: none;"}>
            <div class="bubble-info warning">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-outline"></ha-icon>
                    ${e("editor.popup.duplicate_hash_title")}
                </h4>
                <div class="content">
                    <p>${e("editor.popup.duplicate_hash_body")}</p>
                </div>
            </div>
        </div>
    `}function x(e){const t="string"==typeof e?e.trim():"";if(!t)return u;const o=t.replace(/^#+/,"");return o?`${u}${o}`:u}function k(e){return x(e).slice(1)}function C(e,t){const o=x(e),i=o===u,a=!i&&(0,d.QM)(o,t);return{normalizedValue:o,isEmpty:i,isDuplicate:a,isValid:!i&&!a}}function A(e){if("centered"!==b(e._config))return i.qy``;const t=(0,n.Ay)(e.hass);return i.qy`
        <bubble-formfield>
            <ha-switch
                aria-label="${t("editor.popup.full_width_mobile")}"
                .checked=${e._config?.full_width_on_mobile??!1}
                .configValue=${"full_width_on_mobile"}
                @change=${e._valueChanged}
            ></ha-switch>
            <div class="mdc-form-field">
                <label class="mdc-label">${t("editor.popup.full_width_mobile")}</label>
            </div>
        </bubble-formfield>
    `}function q(e){const t=b(e._config);if("fit-content"!==t&&"adaptive-dialog"!==t)return i.qy``;const o=(0,n.Ay)(e.hass);return i.qy`
        <bubble-formfield>
            <ha-switch
                aria-label="${o("editor.popup.bottom_offset_toggle")}"
                .checked=${e._config?.with_bottom_offset??!1}
                .configValue="${"with_bottom_offset"}"
                @change=${e._valueChanged}
            ></ha-switch>
            <div class="mdc-form-field">
                <label class="mdc-label">${o("editor.popup.bottom_offset_toggle")}</label>
            </div>
        </bubble-formfield>
        <div class="bubble-info">
            <h4 class="bubble-section-title">
                <ha-icon icon="mdi:information-outline"></ha-icon>
                ${o("editor.popup.bottom_offset_title")}
            </h4>
            <div class="content">
                <p>${o("editor.popup.bottom_offset_body")}</p>
            </div>
        </div>
    `}function S(e){const t=window.__bubbleEditorSession;if(t){if(t.originalHash===e)return t;if(t.lastChangedHash===e&&!t.committed)return t}return window.__bubbleEditorSession={originalHash:e,lastChangedHash:e,committed:!1},window.__bubbleEditorSession}function M(e,t,o){const i=e.shadowRoot?.querySelector("#hash-input"),a=e.shadowRoot?.querySelector("#duplicate-hash-warning"),n=o??i?.value??window.__bubbleEditorSession?.lastChangedHash??"",r=C(n,t);if(i){const e=k(n);i.value!==e&&(i.value=e)}a&&(a.style.display=r.isDuplicate?"":"none");const s=e.shadowRoot?.querySelector("#create-pop-up-button");return s&&(s.classList.toggle("disabled",!r.isValid),s.disabled=!r.isValid),r}function L(e){const t=(0,n.Ay)(e.hass),o=e._config?.trigger??[];if(e._config.button_action,"pop-up"===e._config.card_type&&!e._config.hash){const o=S(e._config?.hash||null),r=C(o.lastChangedHash||u,o.originalHash),s={...e._config};return e.createPopUpConfig=()=>function(e,t){try{const t={...y(o=e._config),...v(o)},i=e.shadowRoot.querySelector("#include-example")?.checked||!1;let r=u;const s=M(e);if(!s.isValid)return;if(r=s.normalizedValue,i){const o=(0,n.Ay)(e.hass);e._config={type:"custom:bubble-card",card_type:"pop-up",...t,name:o("editor.popup.example_room"),icon:"mdi:sofa-outline",hash:r,cards:[{type:"custom:bubble-card",card_type:"separator",name:o("editor.popup.example_lights"),icon:"mdi:lightbulb-outline"},...$(e.hass)]}}else e._config={type:"custom:bubble-card",card_type:"pop-up",...t,hash:r,cards:[]},window.bubbleNewlyCreatedHashes=window.bubbleNewlyCreatedHashes||new Set,window.bubbleNewlyCreatedHashes.add(r);(0,d.M6)(r,{name:e._config.name,icon:e._config.icon}),function(e){window.__bubbleEditorSession&&(window.__bubbleEditorSession.originalHash=e,window.__bubbleEditorSession.lastChangedHash=e,window.__bubbleEditorSession.committed=!0)}(r),(0,a.rC)(e,"config-changed",{config:e._config})}catch(o){console.error("Error creating pop-up:",o),e._config=t,e._config.hash=x(window.__bubbleEditorSession?.lastChangedHash||""),(0,d.M6)(e._config.hash,{name:e._config.name,icon:e._config.icon}),(0,a.rC)(e,"config-changed",{config:e._config})}var o}(e,s),i.qy`
            <div class="card-config">
                ${e.makeDropdown(t("editor.common.card_type"),"card_type",e.cardTypeList)}
                <ha-form
                    .hass=${e.hass}
                    .data=${{hash:k(o.lastChangedHash||u)}}
                    .schema=${[{name:"hash",selector:{text:{prefix:u}}}]}
                    .computeLabel=${()=>t("editor.popup.hash")}
                    @value-changed=${t=>{const i=t.detail.value.hash??"",a=M(e,o.originalHash,i);window.__bubbleEditorSession&&(window.__bubbleEditorSession.lastChangedHash=a.normalizedValue)}}
                ></ha-form>
                ${w(t,r.isDuplicate)}
                ${f(e)}
                ${q(e)}
                ${A(e)}
                <bubble-formfield>
                    <ha-switch
                        aria-label="${t("editor.popup.include_example")}"
                        .checked=${!1}
                        id="include-example"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label id="include-example-label" class="mdc-label">${t("editor.popup.include_example")}</label>
                    </div>
                </bubble-formfield>

                <button
                    id="create-pop-up-button"
                    class="icon-button ${r.isValid?"":"disabled"}"
                    ?disabled=${!r.isValid}
                    @click="${()=>e.createPopUpConfig()}"
                >
                    <ha-icon icon="mdi:plus"></ha-icon>
                    <span id="button-text">${t("editor.popup.create")}</span>
                </button>

                <hr />

                <div class="bubble-info">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        ${t("editor.popup.intro_title")}
                    </h4>
                    <div class="content">
                        <p>${t("editor.popup.intro1")}</p>
                        <p>${t("editor.popup.intro2")}</p>
                    </div>
                </div>

                ${e.makeVersion()}
            </div>
        `}const p=S(e._config?.hash||null),b=C(e._config?.hash||u,p.originalHash);return setTimeout(()=>M(e,p.originalHash),0),i.qy`
        <div class="card-config">
            ${e.makeDropdown(t("editor.common.card_type"),"card_type",e.cardTypeList)}
            ${(0,c.YW)(e,p.originalHash)}
            <ha-form
                .hass=${e.hass}
                .data=${{hash:k(e._config?.hash)||""}}
                .schema=${[{name:"hash",selector:{text:{prefix:u}}}]}
                .computeLabel=${()=>t("editor.popup.hash")}
                @value-changed=${t=>{const o=t.detail.value.hash??"",i=C(o,p.originalHash);k(o),e._config.hash=i.normalizedValue,window.__bubbleEditorSession&&(window.__bubbleEditorSession.lastChangedHash=i.normalizedValue,window.__bubbleEditorSession.committed=!0),(0,a.rC)(e,"config-changed",{config:e._config})}}
            ></ha-form>
            ${w(t,b.isDuplicate)}
            ${function(e){const t=(0,n.Ay)(e.hass);return i.qy`
        <ha-form
            .hass=${e.hass}
            .data=${{popup_style:e._config.popup_style??"bubble"}}
            .schema=${[{name:"popup_style",selector:{select:{options:[{label:t("editor.popup.style_bubble")+t("editor.common.default_suffix"),value:"bubble"},{label:t("editor.popup.style_classic"),value:"classic"},{label:t("editor.popup.style_home_assistant"),value:"home-assistant"}],mode:"dropdown"}}}]}
            .computeLabel=${()=>t("editor.popup.style")}
            @value-changed=${t=>{const o=t.detail.value.popup_style;if("bubble"!==o&&o)e._valueChanged({target:{configValue:"popup_style"},detail:{value:o}});else{const t={...e._config};delete t.popup_style,"classic"!==e._config.popup_style&&"home-assistant"!==e._config.popup_style||delete t.button_type,(0,a.rC)(e,"config-changed",{config:t})}}}
        ></ha-form>
    `}(e)}
            ${f(e)}
            ${q(e)}
            ${A(e)}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:dock-top"></ha-icon>
                  ${t("editor.popup.header_settings")}
                </h4>
                <div class="content">
                    <bubble-formfield>
                        <ha-switch
                            aria-label="${t("editor.popup.show_header")}"
                            .checked=${e._config.show_header??!0}
                            .configValue="${"show_header"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${t("editor.popup.show_header")}</label>
                        </div>
                    </bubble-formfield>
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            ${t("editor.popup.hidden_header_title")}
                        </h4>
                        <div class="content">
                            <p>${t("editor.popup.hidden_header_body")}</p>
                        </div>
                    </div>
                    <div style="${e._config?.show_header??1?"":"display: none;"}">
                        <hr />
                        <ha-expansion-panel outlined>
                            <h4 slot="header">
                              <ha-icon icon="mdi:close-circle-multiple-outline"></ha-icon>
                              ${t("editor.popup.buttons_settings")}
                            </h4>
                            <div class="content">
                                <bubble-formfield>
                                    <ha-switch
                                        aria-label="${t("editor.popup.show_previous")}"
                                        .checked=${e._config.show_previous_button??!1}
                                        .configValue="${"show_previous_button"}"
                                        @change=${e._valueChanged}
                                    ></ha-switch>
                                    <div class="mdc-form-field">
                                        <label class="mdc-label">${t("editor.popup.show_previous")}</label>
                                    </div>
                                </bubble-formfield>
                                <bubble-formfield>
                                    <ha-switch
                                        aria-label="${t("editor.popup.show_close")}"
                                        .checked=${e._config.show_close_button??!0}
                                        .configValue="${"show_close_button"}"
                                        @change=${e._valueChanged}
                                    ></ha-switch>
                                    <div class="mdc-form-field">
                                        <label class="mdc-label">${t("editor.popup.show_close")}</label>
                                    </div>
                                </bubble-formfield>
                                <ha-form
                                    .hass=${e.hass}
                                    .disabled=${(0,r.hP)(e._config)}
                                    .data=${{buttons_position:(0,r.hP)(e._config)?"left":e._config.buttons_position??"right"}}
                                    .schema=${[{name:"buttons_position",selector:{select:{options:[{label:t("editor.common.right"),value:"right"},{label:t("editor.common.left"),value:"left"}],mode:"dropdown"}}}]}
                                    .computeLabel=${()=>t("editor.popup.buttons_position")}
                                    @value-changed=${t=>{const o=t.detail.value.buttons_position;e._valueChanged({target:{configValue:"buttons_position"},detail:{value:o}})}}
                                ></ha-form>
                            </div>
                        </ha-expansion-panel>
                        ${(0,l.K)(e)}
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  ${t("editor.popup.settings")}
                </h4>
                <div class="content">
                    ${function(e){const t=(0,n.Ay)(e.hass),o="performance"===m(e._config);return i.qy`
        <ha-form
            .hass=${e.hass}
            .data=${{performance_mode:m(e._config)}}
            .schema=${[{name:"performance_mode",selector:{select:{options:h(t),mode:"dropdown"}}}]}
            .computeLabel=${()=>t("editor.popup.performance_mode")}
            @value-changed=${t=>{const o=t.detail.value.performance_mode;if("performance"===o)return void e._valueChanged({target:{configValue:"performance_mode"},detail:{value:o}});const i={...e._config};delete i.performance_mode,(0,a.rC)(e,"config-changed",{config:i})}}
        ></ha-form>
        ${o?i.qy`
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    ${t("editor.popup.performance_mode")}
                </h4>
                <div class="content">
                    <p>${t("editor.popup.performance_body")}</p>
                </div>
            </div>
        `:i.qy``}
    `}(e)}
                    <!-- Home Assistant's text input keeps 8px under the field for a hint this
                         one never shows, which spaced the next dropdown wider than the others -->
                    <ha-form
                        style="--ha-input-padding-bottom: 0px"
                        .hass=${e.hass}
                        .data=${{auto_close:e._config?.auto_close??""}}
                        .schema=${[{name:"auto_close",selector:{text:{type:"number"}},options:{min:0,step:1e3}}]}
                        .computeLabel=${()=>t("editor.popup.auto_close")}
                        @value-changed=${t=>{e._valueChanged({target:{configValue:"auto_close"},detail:{value:t.detail.value.auto_close}})}}
                    ></ha-form>
                    ${function(e){const t=(0,n.Ay)(e.hass);return i.qy`
        <ha-form
            .hass=${e.hass}
            .data=${{slide_to_close:g(e._config)}}
            .schema=${[{name:"slide_to_close",selector:{select:{options:[{label:t("editor.common.auto")+t("editor.common.default_suffix"),value:"auto"},{label:t("editor.popup.slide_to_close_header"),value:"header"},{label:t("editor.common.disabled"),value:"disabled"}],mode:"dropdown"}}}]}
            .computeLabel=${()=>t("editor.popup.slide_to_close")}
            @value-changed=${t=>_(e,t.detail.value.slide_to_close)}
        ></ha-form>
    `}(e)}
                    <bubble-formfield>
                        <ha-switch
                            aria-label="${t("editor.popup.close_outside")}"
                            .checked=${e._config?.close_by_clicking_outside??!0}
                            .configValue="${"close_by_clicking_outside"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${t("editor.popup.close_outside")}</label>
                        </div>
                    </bubble-formfield>
                    <bubble-formfield>
                        <ha-switch
                            aria-label="${t("editor.popup.close_on_click")}"
                            .checked=${e._config?.close_on_click||!1}
                            .configValue="${"close_on_click"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${t("editor.popup.close_on_click")}</label>
                        </div>
                    </bubble-formfield>
                    <bubble-formfield>
                        <ha-switch
                            aria-label="${t("editor.popup.background_update")}"
                            .checked=${e._config?.background_update||!1}
                            .configValue="${"background_update"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${t("editor.popup.background_update")}</label>
                        </div>
                    </bubble-formfield>
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            ${t("editor.popup.background_update_title")}
                        </h4>
                        <div class="content">
                            <p>${t("editor.popup.background_update_body")}</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:bell"></ha-icon>
                  ${t("editor.popup.trigger")}
                </h4>
                <div class="content">
                    <bubble-formfield>
                        <ha-switch
                            .checked=${e._config.trigger_close??!0}
                            .configValue="${"trigger_close"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${t("editor.popup.close_when_unmet")}</label>
                        </div>
                    </bubble-formfield>
                    <ha-card-conditions-editor
                        .hass=${e.hass}
                        .conditions=${o}
                        @value-changed=${t=>e._conditionChanged(t)}
                    >
                    </ha-card-conditions-editor>
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            ${t("editor.popup.conditions_title")}
                        </h4>
                        <div class="content">
                            <p>${t("editor.popup.conditions_body1")}</p>
                            <p>${(0,s.T5)(t("editor.popup.conditions_body2"),{code:i.qy`<code>input_boolean</code>`})}</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  ${t("editor.popup.open_close_action")}
                </h4>
                <div class="content">
                    ${e.makeActionPanel("open",e._config,"none")}
                    ${e.makeActionPanel("close",e._config,"none")}
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            ${t("editor.popup.actions_title")}
                        </h4>
                        <div class="content">
                            <p>${t("editor.popup.actions_body")}</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  ${t("editor.common.styling_layout_options")}
                </h4>
                <div class="content">
                    ${e.makeLayoutPanel()}
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:palette"></ha-icon>
                          ${t("editor.popup.styling")}
                        </h4>
                        <div class="content"> 
                            <!-- Margin -->
                            <ha-form
                                .hass=${e.hass}
                                .disabled=${(0,r.hP)(e._config)}
                                .data=${{margin:e._config?.margin||"7px"}}
                                .schema=${[{name:"margin",selector:{text:{}}}]}
                                .computeLabel=${()=>t("editor.popup.margin")}
                                @value-changed=${t=>{e._valueChanged({target:{configValue:"margin"},detail:{value:t.detail.value.margin}})}}
                            ></ha-form>
                            <!-- Top offset mobile -->
                            <ha-form
                                .hass=${e.hass}
                                .data=${{margin_top_mobile:e._config?.margin_top_mobile||"0px"}}
                                .schema=${[{name:"margin_top_mobile",selector:{text:{}}}]}
                                .computeLabel=${()=>t("editor.popup.top_offset_mobile")}
                                @value-changed=${t=>{e._valueChanged({target:{configValue:"margin_top_mobile"},detail:{value:t.detail.value.margin_top_mobile}})}}
                            ></ha-form>
                            <!-- Top offset desktop -->
                            <ha-form
                                .hass=${e.hass}
                                .data=${{margin_top_desktop:e._config?.margin_top_desktop||"0px"}}
                                .schema=${[{name:"margin_top_desktop",selector:{text:{}}}]}
                                .computeLabel=${()=>t("editor.popup.top_offset_desktop")}
                                @value-changed=${t=>{e._valueChanged({target:{configValue:"margin_top_desktop"},detail:{value:t.detail.value.margin_top_desktop}})}}
                            ></ha-form>
                            <!-- Width desktop -->
                            <ha-form
                                .hass=${e.hass}
                                .data=${{width_desktop:e._config?.width_desktop||(0,r.$Y)(e._config,"width_desktop")}}
                                .schema=${[{name:"width_desktop",selector:{text:{}}}]}
                                .computeLabel=${()=>t("editor.popup.width_desktop")}
                                @value-changed=${t=>{e._valueChanged({target:{configValue:"width_desktop"},detail:{value:t.detail.value.width_desktop}})}}
                            ></ha-form>
                            <!-- Background color -->
                            <ha-form
                                .hass=${e.hass}
                                .data=${{bg_color:e._config?.bg_color||""}}
                                .schema=${[{name:"bg_color",selector:{text:{}}}]}
                                .computeLabel=${()=>t("editor.popup.bg_color")}
                                @value-changed=${t=>{e._valueChanged({target:{configValue:"bg_color"},detail:{value:t.detail.value.bg_color}})}}
                            ></ha-form>
                            <!-- Background opacity -->
                            <ha-form
                                .hass=${e.hass}
                                .data=${{bg_opacity:void 0!==e._config?.bg_opacity?e._config?.bg_opacity:String((0,r.$Y)(e._config,"bg_opacity"))}}
                                .schema=${[{name:"bg_opacity",selector:{text:{type:"number"}},options:{min:0,max:100}}]}
                                .computeLabel=${()=>t("editor.popup.bg_opacity")}
                                @value-changed=${t=>{e._valueChanged({target:{configValue:"bg_opacity"},detail:{value:t.detail.value.bg_opacity}})}}
                            ></ha-form>
                            <!-- Background blur -->
                            <ha-form
                                .hass=${e.hass}
                                .data=${{bg_blur:void 0!==e._config?.bg_blur?e._config?.bg_blur:String((0,r.$Y)(e._config,"bg_blur"))}}
                                .schema=${[{name:"bg_blur",selector:{text:{type:"number"}},options:{min:0,max:100}}]}
                                .computeLabel=${()=>t("editor.popup.bg_blur")}
                                @value-changed=${t=>{e._valueChanged({target:{configValue:"bg_blur"},detail:{value:t.detail.value.bg_blur}})}}
                            ></ha-form>
                            <!-- Backdrop blur -->
                            <ha-form
                                .hass=${e.hass}
                                .data=${{backdrop_blur:void 0!==e._config?.backdrop_blur?e._config?.backdrop_blur:"0"}}
                                .schema=${[{name:"backdrop_blur",selector:{text:{type:"number"}},options:{min:0,max:100}}]}
                                .computeLabel=${()=>t("editor.popup.backdrop_blur")}
                                @value-changed=${t=>{e._valueChanged({target:{configValue:"backdrop_blur"},detail:{value:t.detail.value.backdrop_blur}})}}
                            ></ha-form>
                            <!-- Shadow opacity -->
                            <ha-form
                                .hass=${e.hass}
                                .data=${{shadow_opacity:void 0!==e._config?.shadow_opacity?e._config?.shadow_opacity:String((0,r.$Y)(e._config,"shadow_opacity"))}}
                                .schema=${[{name:"shadow_opacity",selector:{text:{type:"number"}},options:{min:0,max:100}}]}
                                .computeLabel=${()=>t("editor.popup.shadow_opacity")}
                                @value-changed=${t=>{e._valueChanged({target:{configValue:"shadow_opacity"},detail:{value:t.detail.value.shadow_opacity}})}}
                            ></ha-form>
                            <bubble-formfield>
                                <ha-switch
                                    aria-label="${t("editor.popup.hide_backdrop")}"
                                    .checked=${e._config.hide_backdrop??!1}
                                    .configValue="${"hide_backdrop"}"
                                    @change=${e._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">${t("editor.popup.hide_backdrop_short")}</label>
                                </div>
                            </bubble-formfield>
                            <div class="bubble-info">
                                <h4 class="bubble-section-title">
                                    <ha-icon icon="mdi:information-outline"></ha-icon>
                                    ${t("editor.popup.hide_backdrop_title")}
                                </h4>
                                <div class="content">
                                    <p>${t("editor.popup.hide_backdrop_body")}</p>
                                </div>
                            </div>
                        </div>
                    </ha-expansion-panel>
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info-container">
                <div class="bubble-info">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        ${t("editor.popup.how_to_title")}
                    </h4>
                    <div class="content">
                        <p>${(0,s.T5)(t("editor.popup.how_to_body"),{hidden_bold:i.qy`<b>${t("editor.popup.how_to_hidden_bold")}</b>`,open_bold:i.qy`<b>${t("editor.popup.how_to_open_bold")}</b>`,any_card_link:i.qy`<a href="https://github.com/Clooos/Bubble-Card#example" target="_blank" rel="noopener noreferrer">${t("editor.popup.how_to_any_card")}</a>`,navigate_code:i.qy`<code>navigate</code>`,action_link:i.qy`<a href="https://github.com/Clooos/Bubble-Card?tab=readme-ov-file#tap-double-tap-and-hold-actions" target="_blank" rel="noopener noreferrer">${t("editor.popup.how_to_action")}</a>`})}</p>
                    </div>
                </div>
            </div>
            ${e.makeVersion()}
      </div>
    `}function P(e){const t=e?._hass??e?.hass;(0,n.IM)(t);const o=(0,n.Ay)(t),a=e?.config?.popup_mode??"default",r=e?.config?.full_width_on_mobile?"true":"false",l=e?.config?.with_bottom_offset?"true":"false";return i.qy`
    <style>
      .bubble-popup-onboarding {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        padding: 16px 12px 8px;
        contain: layout paint style;
      }
      .bhp-visual {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        width: 100%;
        max-width: 280px;
        container-type: inline-size;
      }
      .bhp-screen {
        position: relative;
        width: 100%;
        aspect-ratio: 210 / 130;
        background: var(--primary-background-color);
        border: 1.5px solid var(--bubble-button-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));
        border-radius: 11.7cqw;
        overflow: hidden;
        container-type: inline-size;
      }
      .bhp-bg {
        position: absolute;
        inset: 3.81cqw;
        display: flex;
        flex-direction: column;
        gap: 3.81cqw;
      }
      .bhp-bg-row {
        flex: 1;
        border-radius: 9.52cqw;
        background: var(--bubble-button-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));
        opacity: 0.3;
      }
      .bhp-overlay {
        position: absolute;
        inset: 0;
        background: var(--bubble-backdrop-background-color, var(--bubble-default-backdrop-background-color));
        opacity: 0;
        animation: bhp-overlay 5s ease infinite;
      }
      /* === popup shell === */
      .bhp-popup {
        position: absolute;
        inset: auto 0 0;
        height: 48.57cqw;
        border-radius: 11.43cqw 11.43cqw 0 0;
        background: var(--ha-card-background, var(--card-background-color));
        display: flex;
        flex-direction: column;
        gap: 3.81cqw;
        padding: 5.71cqw;
        box-sizing: border-box;
        transform: translateY(100%);
        animation: bhp-slide 5s ease infinite;
      }
      /* header row */
      .bhp-popup-header {
        display: flex;
        align-items: center;
        gap: 3.81cqw;
        flex-shrink: 0;
        height: 16.67cqw;
      }
      /* placeholder for the header button/entity card */
      .bhp-popup-header-card {
        flex: 1;
        height: 16.67cqw;
        border-radius: 8.57cqw;
        background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));
      }
      /* close button — mirrors .bubble-header-action-button */
      .bhp-popup-close-btn {
        width: 16.67cqw;
        height: 16.67cqw;
        border-radius: 8.57cqw;
        background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));
        flex-shrink: 0;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .bhp-popup-close-btn::before,
      .bhp-popup-close-btn::after {
        content: '';
        position: absolute;
        width: 6.19cqw;
        height: 0.71cqw;
        border-radius: 0.48cqw;
        background: var(--primary-text-color);
        opacity: 0.55;
      }
      .bhp-popup-close-btn::before { transform: rotate(45deg); }
      .bhp-popup-close-btn::after  { transform: rotate(-45deg); }
      /* content rows */
      .bhp-popup-content {
        flex: 0 0 16.67cqw;
        display: flex;
        flex-direction: column;
      }
      .bubble-popup-onboarding[data-bottom-offset="true"] .bhp-popup-content {
        padding-bottom: 9.52cqw;
      }
      .bubble-popup-onboarding[data-bottom-offset="true"] .bhp-popup {
        height: 58.57cqw;
      }
      .bhp-popup-row {
        flex: 1;
        border-radius: 9.52cqw;
        background: var(--bubble-button-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));
      }
      /* === default mode (full-height bottom sheet) === */
      .bubble-popup-onboarding[data-mode="default"] .bhp-popup {
        inset: 0;
        height: auto;
      }
      /* === centered mode === */
      .bubble-popup-onboarding[data-mode="centered"] .bhp-popup {
        inset: 50% 4.76cqw auto;
        height: 48.57cqw;
        border-radius: 11.43cqw;
        transform: translateY(-50%) scale(0.85);
        opacity: 0;
        animation: bhp-center 5s ease infinite;
      }
      .bubble-popup-onboarding[data-mode="centered"][data-full-width="true"] .bhp-popup {
        inset: 50% 0 auto;
        border-radius: 11.43cqw;
      }
      /* === adaptive-dialog (alternates: centered dialog → bottom sheet) === */
      .bubble-popup-onboarding[data-mode="adaptive-dialog"] .bhp-popup {
        animation: bhp-adaptive 10s ease infinite;
      }
      .bubble-popup-onboarding[data-mode="adaptive-dialog"][data-bottom-offset="true"] .bhp-popup {
        animation: bhp-adaptive-offset 10s ease infinite;
      }
      @media (max-width: 767px) {
        .bubble-popup-onboarding[data-mode="centered"][data-full-width="true"] .bhp-popup {
          inset: auto 0 0;
          border-radius: 11.43cqw 11.43cqw 0 0;
        }
      }
      /* === trigger button === */
      .bhp-button {
        position: relative;
        display: flex;
        align-items: center;
        gap: 4.76cqw;
        width: 100%;
        height: 20.95cqw;
        border-radius: 10.48cqw;
        background: var(--bubble-button-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));
        padding: 0 4.29cqw;
        box-sizing: border-box;
        overflow: hidden;
        animation: bhp-press 5s ease infinite;
      }
      .bhp-icon {
        width: 13.33cqw;
        height: 13.33cqw;
        border-radius: 50%;
        background: var(--primary-background-color);
        flex-shrink: 0;
      }
      .bhp-text {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1.9cqw;
      }
      .bhp-text-line {
        height: 3.33cqw;
        border-radius: 1.9cqw;
        background: var(--primary-text-color);
        opacity: 0.12;
      }
      .bhp-text-line--long  { width: 65%; }
      .bhp-text-line--short { width: 42%; }
      .bhp-ripple {
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: var(--primary-text-color);
        opacity: 0;
        transform: scale(0);
        animation: bhp-ripple 5s ease infinite;
      }
      .bhp-desc {
        width: 100%;
        max-width: 280px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 32px;
      }
      .bhp-desc-body {
        margin: 0;
        line-height: 1.5;
        color: var(--secondary-text-color);
      }
      .bhp-step {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        background: var(--card-background-color, var(--primary-background-color));
        border: 1px solid var(--divider-color);
        border-radius: 12px;
        padding: 8px 10px;
      }
      .bhp-step-num {
        flex-shrink: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--primary-color);
        color: var(--on-primary-color, white);
        font-size: 12px;
        font-weight: 700;
        line-height: 20px;
        text-align: center;
        display: inline-block;
      }
      .bhp-step-text {
        line-height: 1.5;
        color: var(--secondary-text-color);
      }
      @keyframes bhp-slide {
        0%,  15% { transform: translateY(100%); }
        28%, 55% { transform: translateY(0); }
        65%, 100%{ transform: translateY(100%); }
      }
      @keyframes bhp-center {
        0%,  15% { transform: translateY(-50%) scale(0.85); opacity: 0; }
        28%, 55% { transform: translateY(-50%) scale(1);    opacity: 1; }
        65%, 100%{ transform: translateY(-50%) scale(0.85); opacity: 0; }
      }
      @keyframes bhp-adaptive {
        /* === centered dialog phase (first 5s mapped to 0-50%) === */
        /* 0%,15% of bhp-center → 0%,7.5% */
        0%, 7.5%   { inset: 50% 4.76cqw auto; height: 48.57cqw; border-radius: 11.43cqw; transform: translateY(-50%) scale(0.85); opacity: 0; }
        /* 28%,55% of bhp-center → 14%,27.5% */
        14%, 27.5% { inset: 50% 4.76cqw auto; height: 48.57cqw; border-radius: 11.43cqw; transform: translateY(-50%) scale(1);    opacity: 1; }
        /* 65%,100% of bhp-center → 32.5%,49% */
        32.5%, 49% { inset: 50% 4.76cqw auto; height: 48.57cqw; border-radius: 11.43cqw; transform: translateY(-50%) scale(0.85); opacity: 0; }
        /* snap to bottom while invisible */
        50%        { inset: auto 0 0; height: 48.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(100%); opacity: 0; }
        /* === bottom-sheet phase (second 5s mapped to 50-100%) === */
        /* 0%,15% of bhp-slide → 50%,57.5% */
        57.5%      { inset: auto 0 0; height: 48.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(100%); opacity: 1; }
        /* 28%,55% of bhp-slide → 64%,77.5% */
        64%, 77.5% { inset: auto 0 0; height: 48.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(0);    opacity: 1; }
        /* 65%,100% of bhp-slide → 82.5%,100% */
        82.5%, 100%{ inset: auto 0 0; height: 48.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(100%); opacity: 1; }
      }
      @keyframes bhp-adaptive-offset {
        /* === centered dialog phase — same as bhp-adaptive === */
        0%, 7.5%   { inset: 50% 4.76cqw auto; height: 48.57cqw; border-radius: 11.43cqw; transform: translateY(-50%) scale(0.85); opacity: 0; }
        14%, 27.5% { inset: 50% 4.76cqw auto; height: 48.57cqw; border-radius: 11.43cqw; transform: translateY(-50%) scale(1);    opacity: 1; }
        32.5%, 49% { inset: 50% 4.76cqw auto; height: 48.57cqw; border-radius: 11.43cqw; transform: translateY(-50%) scale(0.85); opacity: 0; }
        /* snap to bottom while invisible */
        50%        { inset: auto 0 0; height: 58.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(100%); opacity: 0; }
        /* === bottom-sheet phase — 58.57cqw to show offset === */
        57.5%      { inset: auto 0 0; height: 58.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(100%); opacity: 1; }
        64%, 77.5% { inset: auto 0 0; height: 58.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(0);    opacity: 1; }
        82.5%, 100%{ inset: auto 0 0; height: 58.57cqw; border-radius: 11.43cqw 11.43cqw 0 0; transform: translateY(100%); opacity: 1; }
      }
      @keyframes bhp-overlay {
        0%,  15% { opacity: 0; }
        28%, 55% { opacity: 1; }
        65%, 100%{ opacity: 0; }
      }
      @keyframes bhp-press {
        0%,  8%  { transform: scale(1); }
        12%      { transform: scale(0.93); }
        17%      { transform: scale(1); }
        100%     { transform: scale(1); }
      }
      @keyframes bhp-ripple {
        0%,  10% { opacity: 0;    transform: scale(0); }
        11%      { opacity: 0.12; transform: scale(0); }
        22%      { opacity: 0;    transform: scale(2); }
        100%     { opacity: 0;    transform: scale(0); }
      }
    </style>
    <div class="bubble-popup-onboarding" data-mode="${a}" data-full-width="${r}" data-bottom-offset="${l}">
      <div class="bhp-visual" aria-hidden="true">
        <div class="bhp-screen">
          <div class="bhp-bg">
            <div class="bhp-bg-row"></div>
            <div class="bhp-bg-row"></div>
            <div class="bhp-bg-row"></div>
          </div>
          <div class="bhp-overlay"></div>
          <div class="bhp-popup">
            <div class="bhp-popup-header">
              <div class="bhp-popup-header-card"></div>
              <div class="bhp-popup-close-btn"></div>
            </div>
            <div class="bhp-popup-content">
              <div class="bhp-popup-row"></div>
            </div>
          </div>
        </div>
        <div class="bhp-button">
          <div class="bhp-icon"></div>
          <div class="bhp-text">
            <div class="bhp-text-line bhp-text-line--long"></div>
            <div class="bhp-text-line bhp-text-line--short"></div>
          </div>
          <div class="bhp-ripple"></div>
        </div>
      </div>
      <div class="bhp-desc">
        <p class="bhp-desc-body">${(0,s.T5)(o("editor.popup.onboarding_body"),{bold:i.qy`<b>${o("editor.popup.onboarding_body_bold")}</b>`,navigate:i.qy`<b>${o("editor.popup.navigate")}</b>`})}</p>
        <div class="bhp-step">
          <span class="bhp-step-num">1</span>
          <span class="bhp-step-text"><b>${o("editor.popup.step1_title")}</b> ${(0,s.T5)(o("editor.popup.step1_body"),{code:i.qy`<code>#kitchen</code>`})}</span>
        </div>
        <div class="bhp-step">
          <span class="bhp-step-num">2</span>
          <span class="bhp-step-text"><b>${o("editor.popup.step2_title")}</b> ${(0,s.T5)(o("editor.popup.step2_body"),{navigate:i.qy`<b>${o("editor.popup.navigate")}</b>`})}</span>
        </div>
      </div>
    </div>
  `}},7190(e,t,o){o.d(t,{E9:()=>u,mI:()=>p});var i=o(6684),a=o(6358),n=o(6331),r=o(1693),s=o(2999);const l=e=>[{label:e("editor.common.auto")+e("editor.common.default_suffix"),value:"default"},{label:e("editor.slider.fill_left"),value:"left"},{label:e("editor.slider.fill_right"),value:"right"},{label:e("editor.slider.fill_top"),value:"top"},{label:e("editor.slider.fill_bottom"),value:"bottom"}],d=e=>[{label:e("editor.common.auto")+e("editor.common.default_suffix"),value:"default"},{label:e("editor.common.right"),value:"right"},{label:e("editor.common.left"),value:"left"},{label:e("editor.common.center"),value:"center"},{label:e("editor.common.hidden"),value:"hidden"}];function c(e){const t=e._config.entity;return(0,a.zD)(t)}function u(e){const t=(0,n.Ay)(e.hass);void 0===e._disableEntityFilter&&(e._disableEntityFilter=!1);const o="slider"===(0,s.a9)(e._config);return i.qy`
        <ha-expansion-panel outlined style="display: ${o?"":"none"}">
            <h4 slot="header">
            <ha-icon icon="mdi:tune-variant"></ha-icon>
            ${t("editor.button.slider_settings")}
            </h4>
            <div class="content">
                ${p({hass:e.hass,data:e._config,entity:e._config.entity,computeLabel:e._computeLabelCallback,onFormChange:e._valueChanged,onToggleChange:(t,o,i={})=>{if(!t)return;const a=(i.control||"").toUpperCase(),n=i.eventType||("HA-TEXTFIELD"===a?"input":"HA-COMBO-BOX"===a?"value-changed":"change"),r={configValue:t,tagName:a||"INPUT"};"HA-SWITCH"===a?r.checked=o:r.value=o;const s={type:n,target:r,detail:"value-changed"===n||"selected"===n?{value:o}:void 0};e._valueChanged(s)},isReadOnly:c(e),showEntityFilterToggle:!0,entityFilterValue:e._disableEntityFilter,onEntityFilterToggle:t=>{e._disableEntityFilter=t,e.requestUpdate()},showEntityFilterInfo:e._disableEntityFilter,rangeFormDisabled:"name"===(0,s.a9)(e._config)})}
            </div>
        </ha-expansion-panel>
    `}function p({hass:e,data:t={},entity:o,computeLabel:a,onFormChange:s,onToggleChange:c,isReadOnly:u,showEntityFilterToggle:p=!1,entityFilterValue:h=!1,onEntityFilterToggle:b,showEntityFilterInfo:m=h,rangeFormDisabled:g=!1,forceValuePositionRight:_=!1}){const f=(0,n.Ay)(e),y=o?.startsWith("light")&&["hue","saturation","white_temp"].includes(t.light_slider_type),v=y,$=(e,t,o={})=>{"function"==typeof c&&c(e,t,o)},w=(e,t)=>({control:e,eventType:t});return i.qy`

        <ha-expansion-panel outlined>
            <h4 slot="header">
                <ha-icon icon="mdi:gesture-swipe-horizontal"></ha-icon>
                ${f("editor.slider.behavior_title")}
            </h4>
            <div class="content">
                ${p?i.qy`
                    <div class="checkbox-wrapper">
                        <bubble-formfield label="${f("editor.slider.disable_filter")}">
                            <ha-switch
                                .checked=${h}
                                @change=${e=>{return t=e.target.checked,void("function"==typeof b&&b(t));var t}}
                            ></ha-switch>
                        </bubble-formfield>
                    </div>
                    <div class="bubble-info" style="display: ${m?"":"none"}">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            ${f("editor.slider.custom_title")}
                        </h4>
                        <div class="content">
                            <p>${(0,r.T5)(f("editor.slider.custom_body"),{entity:i.qy`<b>${f("editor.slider.custom_entity")}</b>`,min:i.qy`<b>min</b>`,max:i.qy`<b>max</b>`})}</p>
                            <p>${f("editor.slider.custom_example")}</p>
                        </div>
                    </div>
                `:""}
                <div class="range-inputs">
                    <ha-form
                        .hass=${e}
                        .data=${{min_value:t.min_value??""}}
                        .schema=${[{name:"min_value",selector:{text:{type:"number"}},options:{step:"any"}}]}
                        .disabled=${g}
                        .computeLabel=${()=>f("editor.slider.min_value")}
                        @value-changed=${e=>{const t=e.detail.value.min_value;$("min_value",void 0===t||""===t?void 0:Number(t),w("ha-textfield","input"))}}
                    ></ha-form>
                    <ha-form
                        .hass=${e}
                        .data=${{max_value:t.max_value??""}}
                        .schema=${[{name:"max_value",selector:{text:{type:"number"}},options:{step:"any"}}]}
                        .disabled=${g}
                        .computeLabel=${()=>f("editor.slider.max_value")}
                        @value-changed=${e=>{const t=e.detail.value.max_value;$("max_value",void 0===t||""===t?void 0:Number(t),w("ha-textfield","input"))}}
                    ></ha-form>
                    <ha-form
                        .hass=${e}
                        .data=${{step:t.step??""}}
                        .schema=${[{name:"step",selector:{text:{type:"number"}},options:{step:"any"}}]}
                        .disabled=${g}
                        .computeLabel=${()=>f("editor.common.step")}
                        @value-changed=${e=>{const t=e.detail.value.step;$("step",void 0===t||""===t?void 0:Number(t),w("ha-textfield","input"))}}
                    ></ha-form>
                </div>
                <bubble-formfield>
                    <ha-switch
                        .checked=${t.tap_to_slide&&!t.relative_slide}
                        @change=${e=>$("tap_to_slide",e.target.checked,w("ha-switch","change"))}
                        .disabled=${t.relative_slide||u}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">${f("editor.slider.tap_to_slide")}</label>
                    </div>
                </bubble-formfield>
                <bubble-formfield>
                    <ha-switch
                        .checked=${!t.tap_to_slide&&t.relative_slide}
                        @change=${e=>$("relative_slide",e.target.checked,w("ha-switch","change"))}
                        .disabled=${t.tap_to_slide||u}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">${f("editor.slider.relative_slide")}</label>
                    </div>
                </bubble-formfield>
                <bubble-formfield>
                    <ha-switch
                        .checked=${t.read_only_slider??u}
                        @change=${e=>$("read_only_slider",e.target.checked,w("ha-switch","change"))}
                        .disabled=${u}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">${f("editor.slider.read_only")}</label>
                    </div>
                </bubble-formfield>
                <bubble-formfield>
                    <ha-switch
                        .checked=${t.slider_live_update??!1}
                        @change=${e=>$("slider_live_update",e.target.checked,w("ha-switch","change"))}
                        .disabled=${u}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">${f("editor.slider.live_update")}</label>
                    </div>
                </bubble-formfield>
                <div class="bubble-info" style="display: ${t.slider_live_update?"":"none"}">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        ${f("editor.slider.live_update")}
                    </h4>
                    <div class="content">
                        <p>${f("editor.slider.live_update_body1")} <b>${f("editor.slider.live_update_body2")}</b></p>
                    </div>
                </div>
            </div>
        </ha-expansion-panel>
        <ha-expansion-panel outlined>
            <h4 slot="header">
                <ha-icon icon="mdi:view-grid"></ha-icon>
                ${f("editor.slider.layout_title")}
            </h4>
            <div class="content">
                <ha-form
                    .hass=${e}
                    .data=${{slider_fill_orientation:t.slider_fill_orientation||"default"}}
                    .schema=${[{name:"slider_fill_orientation",selector:{select:{options:l(f),mode:"dropdown"}}}]}
                    .computeLabel=${e=>"function"==typeof a?a(e):f("editor.slider.fill_orientation")}
                    @value-changed=${e=>{const t=e.detail.value.slider_fill_orientation;$("slider_fill_orientation","default"===t?void 0:t,w("ha-combo-box","value-changed"))}}
                ></ha-form>
                <div class="bubble-info" style="display: ${["top","bottom"].includes(t.slider_fill_orientation)?"":"none"}">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        ${f("editor.slider.vertical_title")}
                    </h4>
                    <div class="content">
                        <p>${f("editor.slider.vertical_body")}</p>
                    </div>
                </div>
                ${y?"":i.qy`
                    <ha-form
                        .hass=${e}
                        .data=${{slider_value_position:_?"right":t.slider_value_position||"default"}}
                        .schema=${[{name:"slider_value_position",disabled:_,selector:{select:{options:d(f),mode:"dropdown"}}}]}
                        .computeLabel=${e=>"function"==typeof a?a(e):f("editor.slider.value_position")}
                        @value-changed=${e=>{const t=e.detail.value.slider_value_position;$("slider_value_position","default"===t?void 0:t,w("ha-combo-box","value-changed"))}}
                    ></ha-form>
                    ${_?i.qy`
                        <div class="bubble-info">
                            <h4 class="bubble-section-title">
                                <ha-icon icon="mdi:information-outline"></ha-icon>
                                ${f("editor.slider.value_locked_title")}
                            </h4>
                            <div class="content">
                                <p>${f("editor.slider.value_locked_body")}</p>
                            </div>
                        </div>
                    `:""}
                `}
                <bubble-formfield style="display: ${v?"none":""}">
                    <ha-switch
                        .checked=${t.invert_slider_value??!1}
                        @change=${e=>$("invert_slider_value",e.target.checked,w("ha-switch","change"))}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">${f("editor.slider.invert")}</label>
                    </div>
                </bubble-formfield>
            </div>
        </ha-expansion-panel>
        ${o?.startsWith("light")?i.qy`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:lightbulb-outline"></ha-icon>
                    ${f("editor.slider.light_title")}
                </h4>
                <div class="content">
                    <ha-form
                        .hass=${e}
                        .data=${{light_slider_type:t.light_slider_type||"brightness"}}
                        .schema=${[{name:"light_slider_type",selector:{select:{options:[{value:"brightness",label:f("editor.slider.mode_brightness")+f("editor.common.default_suffix")},{value:"hue",label:f("editor.slider.mode_color")},{value:"saturation",label:f("editor.slider.mode_saturation")},{value:"white_temp",label:f("editor.slider.mode_white")}],mode:"dropdown"}}}]}
                        .computeLabel=${e=>"function"==typeof a?a(e):f("editor.slider.light_mode")}
                        @value-changed=${e=>$("light_slider_type",e.detail.value.light_slider_type,w("ha-combo-box","value-changed"))}
                    ></ha-form>
                    ${"hue"===t.light_slider_type?i.qy`
                        <bubble-formfield>
                            <ha-switch
                                .checked=${t.hue_force_saturation??!1}
                                @change=${e=>$("hue_force_saturation",e.target.checked,w("ha-switch","change"))}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">${f("editor.slider.force_saturation")}</label>
                            </div>
                        </bubble-formfield>
                        ${t.hue_force_saturation?i.qy`
                            <ha-form
                                .hass=${e}
                                .data=${{hue_force_saturation_value:String(t.hue_force_saturation_value??100)}}
                                .schema=${[{name:"hue_force_saturation_value",selector:{text:{type:"number"}},options:{min:0,max:100}}]}
                                .computeLabel=${()=>f("editor.slider.forced_saturation_value")}
                                @value-changed=${e=>$("hue_force_saturation_value",e.detail.value.hue_force_saturation_value,w("ha-textfield","input"))}
                            ></ha-form>
                        `:""}
                    `:""}
                    ${["hue","saturation","white_temp"].includes(t.light_slider_type)?i.qy``:i.qy`
                        <bubble-formfield>
                            <ha-switch
                                .checked=${t.use_accent_color??!1}
                                @change=${e=>$("use_accent_color",e.target.checked,w("ha-switch","change"))}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">${f("editor.show.accent_color")}</label>
                            </div>
                        </bubble-formfield>
                    `}
                    ${t.tap_to_slide?"":i.qy`
                        <bubble-formfield>
                            <ha-switch
                                .checked=${t.allow_light_slider_to_0??!1}
                                @change=${e=>$("allow_light_slider_to_0",e.target.checked,w("ha-switch","change"))}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">${f("editor.slider.allow_off")}</label>
                            </div>
                        </bubble-formfield>
                    `}
                    <bubble-formfield>
                        <ha-switch
                            .checked=${t.light_transition??!1}
                            @change=${e=>$("light_transition",e.target.checked,w("ha-switch","change"))}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${f("editor.slider.smooth_transitions")}</label>
                        </div>
                    </bubble-formfield>
                    ${t.light_transition?i.qy`
                        <div class="bubble-info">
                            <h4 class="bubble-section-title">
                                <ha-icon icon="mdi:information-outline"></ha-icon>
                                ${f("editor.slider.transition_title")}
                            </h4>
                            <div class="content">
                                <p><b>${f("editor.slider.transition_important")}</b> ${(0,r.T5)(f("editor.slider.transition_body1"),{attr:i.qy`<a target="_blank" rel="noopener noreferrer" href="https://www.home-assistant.io/integrations/light/#action-lightturn_on">light.turn_on</a> ${f("editor.slider.transition_attr")}`})}</p>
                                <p>${f("editor.slider.transition_body2")}</p>
                            </div>
                        </div>
                        <ha-form
                            .hass=${e}
                            .data=${{light_transition_time:t.light_transition_time??""}}
                            .schema=${[{name:"light_transition_time",selector:{text:{type:"number"}},options:{min:1,max:1e5}}]}
                            .computeLabel=${()=>f("editor.slider.transition_time")}
                            @value-changed=${e=>$("light_transition_time",e.detail.value.light_transition_time,w("ha-textfield","input"))}
                        ></ha-form>
                    `:""}
                </div>
            </ha-expansion-panel>
        `:""}
        ${o?.startsWith("cover")?i.qy`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:window-shutter"></ha-icon>
                    ${f("editor.slider.cover_title")}
                </h4>
                <div class="content">
                    <ha-form
                        .hass=${e}
                        .data=${{cover_slider_type:t.cover_slider_type||"position"}}
                        .schema=${[{name:"cover_slider_type",selector:{select:{options:[{value:"position",label:f("editor.slider.cover_position")+f("editor.common.default_suffix")},{value:"tilt_position",label:f("editor.slider.cover_tilt")}],mode:"dropdown"}}}]}
                        .computeLabel=${e=>"function"==typeof a?a(e):f("editor.slider.cover_mode")}
                        @value-changed=${e=>$("cover_slider_type",e.detail.value.cover_slider_type,w("ha-combo-box","value-changed"))}
                    ></ha-form>
                </div>
            </ha-expansion-panel>
        `:""}
    `}},8153(e,t,o){var i=o(6684),a=o(3090),n=o(9533),r=o(6331);class s extends i.WF{static properties={hass:{attribute:!1},data:{attribute:!1},schema:{attribute:!1},disabled:{type:Boolean},computeLabel:{attribute:!1},computeHelper:{attribute:!1},localizeValue:{attribute:!1}};render(){return i.qy`
      <ha-form
        .hass=${this.hass}
        .data=${this.data}
        .schema=${this.schema?.schema||[]}
        .warning=${this.schema?.warnings||{}}
        .computeWarning=${e=>e}
        .disabled=${this.disabled}
        .computeLabel=${this.computeLabel}
        .computeHelper=${this.computeHelper}
        .localizeValue=${this.localizeValue}
      ></ha-form>
    `}static styles=i.AH`
    :host {
      display: block;
      border-inline-start: 2px solid var(--divider-color, rgba(127, 127, 127, 0.4));
      padding-inline-start: 12px;
    }
  `}customElements.define("ha-form-bc_cluster",s);class l extends i.WF{static properties={hass:{attribute:!1},data:{attribute:!1},schema:{attribute:!1},disabled:{type:Boolean},computeLabel:{attribute:!1},computeHelper:{attribute:!1},localizeValue:{attribute:!1}};render(){return i.qy`
      <ha-expansion-panel outlined .expanded=${Boolean(this.schema?.expanded)}>
        ${this.schema?.icon?i.qy`<ha-icon slot="leading-icon" .icon=${this.schema.icon}></ha-icon>`:i.s6}
        <div slot="header" role="heading" aria-level="3">${this.schema?.title}</div>
        <div class="content">
          <ha-form
            .hass=${this.hass}
            .data=${this.data}
            .schema=${this.schema?.schema||[]}
            .warning=${this.schema?.warnings||{}}
            .computeWarning=${e=>e}
            .disabled=${this.disabled}
            .computeLabel=${this.computeLabel}
            .computeHelper=${this.computeHelper}
            .localizeValue=${this.localizeValue}
          ></ha-form>
        </div>
      </ha-expansion-panel>
    `}static styles=i.AH`
    :host {
      display: flex !important;
      flex-direction: column;
    }
    :host ha-form {
      display: block;
    }
    .content {
      padding: 12px;
    }
    ha-expansion-panel {
      display: block;
      --expansion-panel-content-padding: 0;
      border-radius: 6px;
      --ha-card-border-radius: 6px;
    }
    ha-icon[slot="leading-icon"] {
      color: var(--secondary-text-color);
    }
  `}customElements.define("ha-form-bc_group",l);class d extends i.WF{static properties={hass:{attribute:!1},selector:{attribute:!1},value:{attribute:!1},label:{},helper:{},disabled:{type:Boolean},required:{type:Boolean},localizeValue:{attribute:!1}};constructor(){super(),this.disabled=!1,this.required=!1}get _cardConfig(){let e=this;for(let t=0;e&&t<20;t++){const t=e.getRootNode?.()?.host;if(!t)return;if(t._config&&"object"==typeof t._config)return t._config;e=t}}_fieldVisible(e,t){if(!e.visible_if)return!0;try{return this._visibleIfCache=this._visibleIfCache||{},(this._visibleIfCache[e.visible_if]||(this._visibleIfCache[e.visible_if]=new Function("item","hass","card",`return !!(${e.visible_if});`)))(t||{},this.hass,this._cardConfig)}catch(e){return!0}}_fieldWarning(e,t){if(!e.warn_if)return"";try{return this._warnIfCache=this._warnIfCache||{},(this._warnIfCache[e.warn_if]||(this._warnIfCache[e.warn_if]=new Function("item","hass","card",`return !!(${e.warn_if});`)))(t||{},this.hass,this._cardConfig)?e.warn_text||(0,r.Ay)(this.hass)("editor.errors.check_value"):""}catch(e){return""}}_familiesBy(e,t){const o=Array.isArray(e)?e.map((e,t)=>[e.name||t,e]):Object.entries(e||{}),i={};for(const[a,n]of o)n[t]&&e[n[t]]&&(i[n[t]]=i[n[t]]||[]).push({key:a,field:n});return i}_variantFamilies(e){return this._familiesBy(e,"variant_of")}_clusterFamilies(e){return this._familiesBy(e,"cluster_of")}_variantHasData(e,t){const o=e?.[t];return null!=o&&""!==o&&!("object"==typeof o&&0===Object.keys(o).length)}_variantBaseLabel(e){return e?.variant||"Static"}_variantDefaults(e,t){const o={};for(const[i,a]of Object.entries(this._variantFamilies(e))){const n=a.find(e=>this._variantHasData(t,e.key));o[`__${i}_mode`]=n?n.field.variant||n.key:this._variantBaseLabel(e[i])}return o}_generateSchema(e,t,o=0){if(!e)return[];const i=Array.isArray(e)?e.map((e,t)=>[e.name||t,e]):Object.entries(e);let a=null;for(const[e,t]of i)if(t.selector&&t.selector.entity){a=e;break}const n=this._variantFamilies(e),r=this._clusterFamilies(e);this._variantMeta=this._variantMeta||{},this._warnTop=this._warnTop||{},this._warnTop[o]={};const s=(e,i)=>{let n=i.selector;void 0!==i.default&&n?.text&&void 0===n.text.placeholder&&(n={text:{...n.text,placeholder:String(i.default)}});const r={name:e,selector:n,required:i.required??!1};if(i.selector&&i.selector.attribute&&a){const e=t?.[a];r.selector={attribute:{...i.selector.attribute,entity_id:e||void 0}};const o=!e&&t?.__card_entity;r.context={filter_entity:o?"__card_entity":a}}const s=this._fieldWarning(i,t);return s&&(this._warnTop[o][e]=s),r},l=[],d=new Map,c=(e,t)=>{const i=e.group;if(!i)return void l.push(...t);let a=d.get(i);a?!a.icon&&e.group_icon&&(a.icon=e.group_icon):(a={name:`bc_group_${d.size}`,type:"bc_group",flatten:!0,title:i,expanded:!1,schema:[],warnings:this._warnTop[o]},e.group_icon&&(a.icon=e.group_icon),d.set(i,a),l.push(a)),a.schema.push(...t)};for(const[a,l]of i){if(l.variant_of&&e[l.variant_of])continue;if(l.cluster_of&&e[l.cluster_of])continue;if(!this._fieldVisible(l,t))continue;const i=(r[a]||[]).filter(e=>this._fieldVisible(e.field,t)).map(e=>s(e.key,e.field)),d=n[a];if(!d){if(!i.length){c(l,[s(a,l)]);continue}c(l,[{type:"bc_cluster",name:`__cluster_${a}`,flatten:!0,schema:[s(a,l),...i],warnings:this._warnTop[o]}]);continue}const u=`__${a}_mode`,p=this._variantBaseLabel(l),h=[p,...d.map(e=>e.field.variant||e.key)],b=h.includes(t?.[u])?t[u]:p,m=d.find(e=>(e.field.variant||e.key)===b),g=d.filter(e=>e!==m&&this._variantHasData(t,e.key)).map(e=>e.field.variant||e.key);b!==p&&this._variantHasData(t,a)&&g.unshift(p),this._variantMeta[`${o}:${u}`]={label:l.label||a,helper:g.length?`Other modes also set: ${g.join(", ")} — the module's priority decides which wins.`:""},c(l,[{type:"bc_cluster",name:`__cluster_${a}`,flatten:!0,schema:[{name:u,selector:{select:{options:h,multiple:!1,custom_value:!1,mode:"dropdown"}},required:!0},m?s(m.key,m.field):s(a,l),...i],warnings:this._warnTop[o]}])}return l}_computeLabel(e,t=0){if(this._variantMeta?.[`${t}:${e.name}`])return this._variantMeta[`${t}:${e.name}`].label;const o=this.selector?.bc_object?.fields?.[e.name];if(o?.label)return o.label;const i=this.selector?.bc_object?.translation_key;if(this.localizeValue&&i){const t=this.localizeValue(`${i}.fields.${e.name}.name`)||this.localizeValue(`${i}.fields.${e.name}`);if(t)return t}return e.name}_computeHelper(e,t=0){if(this._variantMeta?.[`${t}:${e.name}`])return this._variantMeta[`${t}:${e.name}`].helper;const o=this.selector?.bc_object?.fields?.[e.name];if(o?.description)return o.description;const i=this.selector?.bc_object?.translation_key;if(this.localizeValue&&i){const t=this.localizeValue(`${i}.fields.${e.name}.description`);if(t)return t}return""}_formatValue(e,t){if(!e||!this.hass)return"";const o=this.selector?.bc_object?.label_field||Object.keys(this.selector?.bc_object?.fields||{})[0];if(!o)return"";const i=e[o];if(null==i||""===i)return"";if(this.selector?.bc_object?.fields?.[o]?.selector?.entity){const e=this.hass.states[i];if(e)return e.attributes.friendly_name||i}return String(i)}_getDescription(e){const t=this.selector?.bc_object?.description_field;if(!t||!e)return"";for(const o of Array.isArray(t)?t:[t]){const t=e[o];if(Array.isArray(t)?t.length:t||0===t)return Array.isArray(t)?t.join(", "):t}return""}render(){const e=this.selector?.bc_object?.multiple||!1,t=this.selector?.bc_object?.fields;return t?e?this._renderMultiple():this._renderSingle():i.qy`<div>${(0,r.Ay)(this.hass)("editor.common.no_fields")}</div>`}_renderMultiple(){const e=Array.isArray(this.value)?this.value:[];return i.qy`
      ${this.label?i.qy`<label class="bc-object-label">${this.label}</label>`:i.s6}
      <ha-sortable
        handle-selector=".reorder-handle"
        draggable-selector=".bc-object-item"
        .disabled=${this.disabled}
        @item-moved=${this._itemMoved}
      >
        <div class="bc-object-items">
          ${e.map((e,t)=>this._renderItem(e,t))}
          <ha-button
            class="bc-object-add-button"
            @click=${this._addItem}
            ?disabled=${this.disabled}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
            ${this.hass?.localize?.("ui.common.add")||"Add"}
          </ha-button>
        </div>
      </ha-sortable>
      ${this.helper?i.qy`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:i.s6}
    `}_renderSingle(){return this.value?i.qy`
        ${this.label?i.qy`<label class="bc-object-label">${this.label}</label>`:i.s6}
        <div class="bc-object-items">
          ${this._renderItem(this.value,0)}
        </div>
        ${this.helper?i.qy`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:i.s6}
      `:i.qy`
      ${this.label?i.qy`<label class="bc-object-label">${this.label}</label>`:i.s6}
      <ha-button 
        class="bc-object-add-button"
        @click=${this._addItem}
        ?disabled=${this.disabled}
      >
        <ha-icon icon="mdi:plus"></ha-icon>
        ${this.hass?.localize?.("ui.common.add")||"Add"}
      </ha-button>
      ${this.helper?i.qy`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:i.s6}
    `}_selectDefaults(e,t){const o={},i=Array.isArray(e)?e.map((e,t)=>[e.name||t,e]):Object.entries(e||{});for(const[e,a]of i)void 0===a?.default||!a?.selector?.select||a.selector.select.multiple||null!=t?.[e]&&""!==t?.[e]||(o[e]=a.default);return o}_itemFormData(e,t){const o=this.selector?.bc_object?.fields,i={};for(const[e,o]of Object.entries(this._uiState?.[t]||{}))null!=o&&""!==o&&(i[e]=o);return{...e,...this._selectDefaults(o,e),...this._variantDefaults(o,e),...i,__card_entity:this._cardConfig?.entity}}_renderItem(e,t){const o=this._formatValue(e,this.selector)||`Item ${t+1}`,a=this._getDescription(e),n=this.selector?.bc_object?.multiple||!1,r=this._itemFormData(e,t);return i.qy`
      <ha-expansion-panel outlined class="bc-object-item">
        <h4 slot="header" class="bc-object-item-header">
          ${n?i.qy`
            <ha-icon-button
              class="reorder-handle"
              @click=${e=>e.stopPropagation()}
              .label="${this.hass?.localize?.("ui.common.move")||"Move"}"
            >
              <ha-icon icon="mdi:drag"></ha-icon>
            </ha-icon-button>
          `:i.s6}
          <div class="bc-object-item-title-container">
            <span class="bc-object-item-label">${o}</span>
            ${a?i.qy`<span class="bc-object-item-description">${a}</span>`:i.s6}
          </div>
          <div class="button-container" @click=${e=>e.stopPropagation()} @mousedown=${e=>e.stopPropagation()} @touchstart=${e=>e.stopPropagation()}>
            ${n?i.qy`
              <ha-icon-button
                class="duplicate-icon"
                @click=${()=>this._duplicateItem(t)}
                ?disabled=${this.disabled}
                .label="${this.hass?.localize?.("ui.common.duplicate")||"Duplicate"}"
              >
                <ha-icon icon="mdi:content-copy"></ha-icon>
              </ha-icon-button>
            `:i.s6}
            <ha-icon-button
              class="delete-icon"
              @click=${()=>this._deleteItem(t)}
              ?disabled=${this.disabled}
              .label="${this.hass?.localize?.("ui.common.delete")||"Delete"}"
            >
              <ha-icon icon="${n?"mdi:delete":"mdi:close"}"></ha-icon>
            </ha-icon-button>
          </div>
        </h4>
        <div class="bc-object-item-content">
          <ha-form
            .hass=${this.hass}
            .data=${r}
            .schema=${this._generateSchema(this.selector?.bc_object?.fields,r,t)}
            .warning=${this._warnTop?.[t]||{}}
            .computeWarning=${e=>e}
            .disabled=${this.disabled}
            .computeLabel=${e=>this._computeLabel(e,t)}
            .computeHelper=${e=>this._computeHelper(e,t)}
            .localizeValue=${this.localizeValue}
            @value-changed=${e=>this._itemChanged(e,t)}
          ></ha-form>
        </div>
      </ha-expansion-panel>
    `}_addItem(){if(this.selector?.bc_object?.multiple){const e=[...Array.isArray(this.value)?this.value:[],{}];(0,n.rC)(this,"value-changed",{value:e})}else(0,n.rC)(this,"value-changed",{value:{}})}_duplicateItem(e){const t=Array.isArray(this.value)?this.value:[],o=JSON.parse(JSON.stringify(t[e]||{}));if(this._uiState){const t={};for(const[o,i]of Object.entries(this._uiState)){const a=Number(o);t[a>e?a+1:a]=i}t[e+1]={...this._uiState[e]||{}},this._uiState=t}const i=[...t];i.splice(e+1,0,o),(0,n.rC)(this,"value-changed",{value:i})}_itemMoved(e){e.stopPropagation();const{oldIndex:t,newIndex:o}=e.detail;if(t===o)return;const i=[...Array.isArray(this.value)?this.value:[]],[a]=i.splice(t,1);if(i.splice(o,0,a),this._uiState){const e=e=>e===t?o:t<o?e>t&&e<=o?e-1:e:e>=o&&e<t?e+1:e,i={};for(const[t,o]of Object.entries(this._uiState))i[e(Number(t))]=o;this._uiState=i}(0,n.rC)(this,"value-changed",{value:i})}_deleteItem(e){const t=this.selector?.bc_object?.multiple||!1;if(this._uiState){const t={};for(const[o,i]of Object.entries(this._uiState)){const a=Number(o);a<e?t[a]=i:a>e&&(t[a-1]=i)}this._uiState=t}if(t){const t=[...this.value||[]];t.splice(e,1),(0,n.rC)(this,"value-changed",{value:t})}else(0,n.rC)(this,"value-changed",{value:void 0})}_itemChanged(e,t){e.stopPropagation();const o=this.selector?.bc_object?.multiple||!1,i={},a={};for(const[t,o]of Object.entries(e.detail.value||{}))(t.startsWith("__")?a:i)[t]=o;const r=o?(this.value||[])[t]:this.value;for(const[e,t]of Object.entries(this._selectDefaults(this.selector?.bc_object?.fields,r)))i[e]===t&&delete i[e];if(this._uiState={...this._uiState||{}},this._uiState[t]={...this._uiState[t]||{},...a},this.requestUpdate(),o){const e=[...this.value||[]];e[t]=i,(0,n.rC)(this,"value-changed",{value:e})}else(0,n.rC)(this,"value-changed",{value:i})}static styles=i.AH`
    :host {
      display: block;
    }

    .bc-object-label {
      display: block;
      margin-bottom: 8px;
      font-weight: var(--ha-font-weight-medium, 500);
    }

    .bc-object-items {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .bc-object-item {
      --expansion-panel-summary-padding: 0 16px;
      width: 100% !important;
      max-width: 100% !important;
    }

    .bc-object-item-header {
      display: flex;
      align-items: center;
      margin: 0;
      width: 100%;
      justify-content: space-between;
    }

    .bc-object-item-title-container {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 12px 0;
      overflow: hidden;
    }

    .bc-object-item-label {
      font-weight: var(--ha-font-weight-medium, 500);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .bc-object-item-description {
      font-size: 0.9em;
      color: var(--secondary-text-color);
      margin-top: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .bc-object-item-content {
      padding: 16px;
      width: 100% !important;
      box-sizing: border-box;
    }

    .button-container {
      display: flex;
      align-items: center;
      margin-inline-start: 8px;
    }

    .delete-icon,
    .duplicate-icon {
      color: var(--secondary-text-color);
    }

    .reorder-handle {
      color: var(--secondary-text-color);
      cursor: grab;
      margin-inline-end: 4px;
    }

    .reorder-handle ha-icon,
    .duplicate-icon ha-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .delete-icon ha-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .delete-icon[disabled] {
      color: var(--disabled-text-color);
      opacity: 0.5;
    }

    .bc-object-add-button {
      align-self: flex-start;
    }

    ha-input-helper-text {
      display: block;
      margin-top: 4px;
    }
  `}customElements.define("ha-selector-bc_object",d);var c=o(4560),u=o(2429),p=o(2999);function h(e,t){delete e._config[t+"_name"],delete e._config[t+"_icon"],delete e._config[t+"_link"],delete e._config[t+"_entity"],delete e._config[t+"_pir_sensor"];for(let o=t;o<e.buttonIndex;o++)e._config[o+"_name"]=e._config[o+1+"_name"],e._config[o+"_icon"]=e._config[o+1+"_icon"],e._config[o+"_link"]=e._config[o+1+"_link"],e._config[o+"_entity"]=e._config[o+1+"_entity"],e._config[o+"_pir_sensor"]=e._config[o+1+"_pir_sensor"];delete e._config[e.buttonIndex+"_name"],delete e._config[e.buttonIndex+"_icon"],delete e._config[e.buttonIndex+"_link"],delete e._config[e.buttonIndex+"_entity"],delete e._config[e.buttonIndex+"_pir_sensor"],e.buttonIndex--,(0,n.rC)(e,"config-changed",{config:e._config})}var b=o(9117),m=o(3061),g=o(2042);const _=e=>e.title||e.label;class f extends i.WF{getSchema(e){const t=(0,r.Ay)(this.hass);return[{type:"expandable",name:"",title:e?this.hass.states[e].attributes.friendly_name||e:t("editor.calendar.new_calendar"),schema:[{name:"entity",title:t("editor.calendar.entity"),selector:{entity:{domain:["calendar"]}}},{name:"color",title:t("editor.calendar.color"),selector:{ui_color:{}}}]}]}static properties={hass:{},value:{type:Array},label:{}};constructor(){super(),this.value=[]}render(){const e=(0,r.Ay)(this.hass),t=e=>()=>{const t=[...this.value||[]];t.splice(e,1),this.valueChanged({detail:{value:t}})},o=this.value??[];return i.qy`
      <ha-expansion-panel outlined style="--expansion-panel-summary-padding: 0 8px;">
        <h4 slot="header" style="display: flex; align-items: center; margin: 10px 0;">
          <ha-icon icon="mdi:calendar" style="margin: 8px;"></ha-icon>
          &nbsp;${e("editor.calendar.list_of_calendars")}
        </h4>
        <div class="content"> 
          ${o.map((o,a)=>i.qy`
              <div style="display: flex; align-items: center; margin: 12px 4px 14px 4px">
                <ha-form
                  .data=${o}
                  .schema=${this.getSchema(o.entity)}
                  .hass=${this.hass}
                  .computeLabel=${_}
                  @value-changed=${e=>{e.stopPropagation();const t=[...this.value||[]];t[a]=e.detail.value,this.valueChanged({detail:{value:t}})}}
                  style="flex-grow: 1;"
                ></ha-form>
                <ha-button @click=${t(a)}>
                  <ha-icon icon="mdi:calendar-remove"></ha-icon>&nbsp;
                  ${e("editor.calendar.remove_calendar")}
                </ha-button>
              </div>
            `)}
          <ha-button @click=${()=>{const e=[...this.value||[]];e.push({entity:"",color:""}),this.valueChanged({detail:{value:e}})}} style="margin: 12px 4px 14px 4px;">
            <ha-icon icon="mdi:calendar-plus"></ha-icon>&nbsp;
            ${e("editor.calendar.new_calendar")}
          </ha-button>
        </div>
      </ha-expansion-panel>
    `}valueChanged(e){const t=e.detail.value.map(e=>{const t=e.entity?(0,g.uh)((0,g.s5)(e.entity)):"";return{entity:e.entity,color:e.color||t}});(0,n.rC)(this,"value-changed",{value:t},void 0)}}customElements.define("ha-selector-calendar_entity",f);var y=o(1693),v=o(6358),$=o(7190);function w(e,t,o,a,n,s,l,d,c,u={}){const p=(0,r.Ay)(e.hass),{panelKeyPrefix:h="sub_button",buttonTitle:b=`${p("editor.sub_button.button_n").replace("{n}",o+1)}${t.name?` - ${t.name}`:""}`,arrayLength:m=null}=u;void 0===e._expandedPanelStates&&(e._expandedPanelStates={});const g=t.entity??e._config.entity,_=(0,v.zD)(g),f=g?.startsWith("input_select")||g?.startsWith("select")||t.select_attribute;if(!t.sub_button_type&&f)try{setTimeout(()=>n({sub_button_type:"select"}))}catch(e){}const w=e.hass.states[g]?.attributes,x=e._selectable_attributes.some(e=>w?.[e]),k=Object.keys(e.hass.states[g]?.attributes||{}).map(t=>{let o=e.hass.states[g];return{label:e.hass.formatEntityAttributeName(o,t),value:t}}).filter(t=>e._selectable_attributes.includes(t.value)),C=t.visibility??[],A=!_,q=f||x,S=[{label:p("editor.sub_button.type_default"),value:"default"},...A?[{label:p("editor.button.type_slider"),value:"slider"}]:[],...q?[{label:p("editor.sub_button.type_dropdown"),value:"select"}]:[]],M=`${h}_main_${o}`,L=`${h}_settings_${o}`,P=`${h}_actions_${o}`,E=`${h}_visibility_${o}`,T=`${h}_layout_${o}`,I=`${h}_type_slider_${o}`,j="slider"===t.sub_button_type&&t.always_visible,R="select"===t.sub_button_type||!t.sub_button_type&&f||j,D="string"==typeof a&&a.startsWith("sub_button.bottom"),z=null==t.fill_width?!!D:t.fill_width;let V=!1;if("string"==typeof a&&a.includes(".group")){const t=a.match(/^sub_button\.(main|bottom)\.(\d+)\.group$/);if(t){const[,o,i]=t,a=e._config.sub_button;if(a&&a[o]){const e=a[o][parseInt(i,10)];if(e&&e.justify_content){const t=e.justify_content.toLowerCase();V=["end","start","center"].includes(t)}}}}const O=null===m||o>0,U=null===m||o<m-1;return i.qy`
    <ha-expansion-panel 
      outlined
      @expanded-changed=${t=>{e._expandedPanelStates[M]=t.target.expanded,e.requestUpdate()}}
    >
      <h4 slot="header">
        <ha-icon icon="mdi:border-radius"></ha-icon>
        ${b}
        <div class="button-container" @click=${e=>e.stopPropagation()} @mousedown=${e=>e.stopPropagation()} @touchstart=${e=>e.stopPropagation()}>
          ${(0,y.kX)({trigger:i.qy`
              <ha-icon-button slot="trigger" class="icon-button header" title="${p("editor.common.options")}">
                <ha-icon style="display: flex" icon="mdi:dots-vertical"></ha-icon>
              </ha-icon-button>
            `,items:[{type:"item",icon:"mdi:arrow-left",label:p("editor.sub_button.move_left"),disabled:!O,onClick:e=>{e.stopPropagation(),O&&l(-1)}},{type:"item",icon:"mdi:arrow-right",label:p("editor.sub_button.move_right"),disabled:!U,onClick:e=>{e.stopPropagation(),U&&l(1)}},{type:"divider"},{type:"item",icon:"mdi:content-copy",label:p("editor.common.copy"),onClick:e=>{e.stopPropagation(),d(e)}},{type:"item",icon:"mdi:content-cut",label:p("editor.common.cut"),onClick:e=>{e.stopPropagation(),c(e)}},{type:"divider"},{type:"item",icon:"mdi:delete",label:p("editor.common.delete"),variant:"danger",onClick:e=>{e.stopPropagation(),s(e)}}]})}
        </div>
      </h4>
      <div class="content">
        ${(0,y.DW)(e,M,!!e._expandedPanelStates[M],()=>i.qy`
          <ha-expansion-panel 
            outlined
            @expanded-changed=${t=>{e._expandedPanelStates[L]=t.target.expanded,e.requestUpdate()}}
          >
            <h4 slot="header">
              <ha-icon icon="mdi:cog"></ha-icon>
              ${p("editor.sub_button.button_settings")}
            </h4>
            <div class="content">
              ${(0,y.DW)(e,L,!!e._expandedPanelStates[L],()=>i.qy` 
                <ha-form
                  .hass=${e.hass}
                  .data=${t}
                  .schema=${[{name:"entity",label:e._optionalLabel(p("editor.sub_button.entity_default")),selector:{entity:{}}}]}   
                  .computeLabel=${e._computeLabelCallback}
                  @value-changed=${e=>n(e.detail.value)}
                ></ha-form>
                <ha-form
                  .hass=${e.hass}
                  .data=${{sub_button_type:t.sub_button_type??"default"}}
                  .schema=${[{name:"sub_button_type",selector:{select:{options:S,mode:"dropdown"}}}]}
                  .computeLabel=${()=>p("editor.sub_button.type")}
                  @value-changed=${e=>n({sub_button_type:e.detail.value.sub_button_type})}
                ></ha-form>
                ${"slider"===t.sub_button_type?i.qy`
                  <div class="bubble-info">
                    <h4 class="bubble-section-title">
                      <ha-icon icon="mdi:information-outline"></ha-icon>
                      ${p("editor.slider.behavior_title")}
                    </h4>
                    <div class="content">
                      <p>${p("editor.sub_button.behavior_body")}</p>
                    </div>
                  </div>
                `:""}
                ${("select"===t.sub_button_type||!t.sub_button_type&&f)&&x?i.qy`
                  <ha-form
                    .hass=${e.hass}
                    .data=${{select_attribute:t.select_attribute}}
                    .schema=${[{name:"select_attribute",selector:{select:{options:k,mode:"dropdown"}}}]}
                    .computeLabel=${()=>e._optionalLabel(p("editor.select.select_menu"))}
                    @value-changed=${e=>n({select_attribute:e.detail.value.select_attribute})}
                  ></ha-form>
                `:""}
                <div class="ha-textfield">
                  <ha-form
                    .hass=${e.hass}
                    .data=${{name:t.name??""}}
                    .schema=${[{name:"name",selector:{text:{}}}]}
                    .computeLabel=${()=>e._optionalLabel(p("editor.common.name"))}
                    @value-changed=${e=>n({name:e.detail.value.name})}
                  ></ha-form>
                </div>
                <div class="ha-icon-picker">
                  <ha-icon-picker
                    label="${e._optionalLabel(p("editor.common.icon"))}"
                    .value="${t.icon}"
                    item-label-path="label"
                    item-value-path="value"
                    @value-changed="${e=>n({icon:e.detail.value})}"
                  ></ha-icon-picker>
                </div>
              `)}
              ${e.makeShowState(t,`${a}.${o}.`,a,o)}
            </div>
          </ha-expansion-panel>

          ${"slider"===t.sub_button_type?i.qy`
            <ha-expansion-panel 
              outlined
              @expanded-changed=${t=>{e._expandedPanelStates[I]=t.target.expanded,e.requestUpdate()}}
            >
              <h4 slot="header">
                <ha-icon icon="mdi:tune-variant"></ha-icon>
                ${p("editor.button.slider_settings")}
              </h4>
              <div class="content">
                ${(0,y.DW)(e,I,!!e._expandedPanelStates[I],()=>i.qy`
                  ${(0,$.mI)({hass:e.hass,data:t,entity:g,computeLabel:e._computeLabelCallback,onFormChange:e=>n(e.detail.value),onToggleChange:(e,t)=>n({[e]:t}),isReadOnly:_,forceValuePositionRight:!(!t.always_visible||!t.show_button_info)})}
                `)}
              </div>
            </ha-expansion-panel>
          `:""}

          <ha-expansion-panel 
            outlined 
            @expanded-changed=${t=>{e._expandedPanelStates[P]=t.target.expanded,e.requestUpdate()}}
          >
            <h4 slot="header">
              <ha-icon icon="mdi:gesture-tap"></ha-icon>
              ${p("editor.actions.on_button")}
            </h4>
            <div class="content">
              ${(0,y.DW)(e,P,!!e._expandedPanelStates[P],()=>i.qy`
                ${j?i.qy`
                  <div class="bubble-info">
                    <h4 class="bubble-section-title">
                      <ha-icon icon="mdi:information-outline"></ha-icon>
                      ${p("editor.sub_button.actions_disabled_title")}
                    </h4>
                    <div class="content">
                      <p>${p("editor.sub_button.actions_disabled_body")}</p>
                    </div>
                  </div>
                `:""}
                <div style="${R?"opacity: 0.5; pointer-events: none;":""}">
                  ${e.makeActionPanel("tap",t,"more-info",a,o)}
                </div>
                <div style="${R?"opacity: 0.5; pointer-events: none;":""}">
                  ${e.makeActionPanel("double_tap",t,"none",a,o)}
                </div>
                <div style="${R?"opacity: 0.5; pointer-events: none;":""}">
                  ${e.makeActionPanel("hold",t,"none",a,o)}
                </div>
              `)}
            </div>
          </ha-expansion-panel>

          <ha-expansion-panel 
            outlined
            @expanded-changed=${t=>{e._expandedPanelStates[E]=t.target.expanded,e.requestUpdate()}}
          >
            <h4 slot="header">
              <ha-icon icon="mdi:eye"></ha-icon>
              ${p("editor.common.visibility")}
            </h4>
            <div class="content">
              ${(0,y.DW)(e,E,!!e._expandedPanelStates[E],()=>i.qy`
                <bubble-formfield label="${p("editor.sub_button.hide_unavailable")}">
                  <ha-switch
                    .checked=${t.hide_when_parent_unavailable??!1}
                    @change=${e=>n({hide_when_parent_unavailable:e.target.checked})}
                  ></ha-switch>
                </bubble-formfield>
                <ha-card-conditions-editor
                  .hass=${e.hass}
                  .conditions=${C}
                  @value-changed=${e=>n({visibility:e.detail.value})}
                >
                </ha-card-conditions-editor>
                <ha-alert alert-type="info">
                  ${p("editor.sub_button.visibility_body")}
                </ha-alert>
              `)}
            </div>
          </ha-expansion-panel>

          <ha-expansion-panel 
            outlined
            @expanded-changed=${t=>{e._expandedPanelStates[T]=t.target.expanded,e.requestUpdate()}}
          >
            <h4 slot="header">
              <ha-icon icon="mdi:view-grid"></ha-icon>
              ${p("editor.common.layout")}
            </h4>
            <div class="content">
              ${(0,y.DW)(e,T,!!e._expandedPanelStates[T],()=>i.qy`
                ${D?i.qy`
                  <bubble-formfield label="${p("editor.sub_button.fill_width")}">
                    <ha-switch
                      .checked=${z??!0}
                      @change=${e=>n({fill_width:e.target.checked})}
                    ></ha-switch>
                  </bubble-formfield>
                `:""}
                ${"slider"===t.sub_button_type?i.qy`
                  <bubble-formfield label="${p("editor.sub_button.always_slider")}">
                    <ha-switch
                      .checked=${t.always_visible??!1}
                      @change=${e=>n({always_visible:e.target.checked})}
                    ></ha-switch>
                  </bubble-formfield>
                `:""}
                ${"slider"===t.sub_button_type&&t.always_visible?i.qy`
                  <bubble-formfield label="${p("editor.sub_button.show_info")}">
                    <ha-switch
                      .checked=${t.show_button_info??!1}
                      @change=${e=>n({show_button_info:e.target.checked})}
                    ></ha-switch>
                  </bubble-formfield>
                `:""}
                <ha-form
                  .hass=${e.hass}
                  .data=${{width:t.width??""}}
                  .schema=${[{name:"width",selector:{text:{type:"number"}},options:{min:D&&!V?0:"slider"===t.sub_button_type&&t.always_visible?68:36,max:D&&!V?100:600}}]}
                  .disabled=${!0===z}
                  .computeLabel=${()=>p(D&&!V?"editor.sub_button.custom_width_pct":"editor.sub_button.custom_width_px")}
                  @value-changed=${e=>{const t=e.detail.value.width;n({width:void 0===t||""===t?void 0:Number(t)})}}
                ></ha-form>
                <ha-form
                  .hass=${e.hass}
                  .data=${{custom_height:t.custom_height??""}}
                  .schema=${[{name:"custom_height",selector:{text:{type:"number"}},options:{min:20,max:600}}]}
                  .computeLabel=${()=>p("editor.sub_button.custom_height")}
                  @value-changed=${e=>{const t=e.detail.value.custom_height;n({custom_height:void 0===t||""===t?void 0:Number(t)})}}
                ></ha-form>
                ${"slider"===t.sub_button_type&&t.always_visible?"":i.qy`
                  <ha-form
                    .hass=${e.hass}
                    .data=${{content_layout:t.content_layout??"icon-left"}}
                    .schema=${[{name:"content_layout",selector:{select:{options:[{value:"icon-left",label:p("editor.sub_button.icon_left")+p("editor.common.default_suffix")},{value:"icon-top",label:p("editor.sub_button.icon_top")},{value:"icon-bottom",label:p("editor.sub_button.icon_bottom")},{value:"icon-right",label:p("editor.sub_button.icon_right")}],mode:"dropdown"}}}]}
                    .computeLabel=${()=>p("editor.sub_button.content_layout")}
                    @value-changed=${e=>n({content_layout:e.detail.value.content_layout})}
                  ></ha-form>
                `}
              `)}
            </div>
          </ha-expansion-panel>
        `)}
      </div>
    </ha-expansion-panel>
  `}function x(e,t,o){return i=>{if(i?.stopPropagation(),t){try{e._clipboardButton=JSON.parse(JSON.stringify(t))}catch(o){e._clipboardButton=t}o&&o(e._clipboardButton),e.requestUpdate()}}}function k(e,t,o,i){return a=>{a?.stopPropagation(),x(e,t,i)(a),o&&o(a)}}function C(e,t){return t===e._config.sub_button?.main?"main":t===e._config.sub_button?.bottom?"bottom":null}function A(e,t,o){try{e._config.sub_button[t]=o(e._config.sub_button[t])}catch(i){try{e._config.sub_button={...e._config.sub_button,[t]:o(e._config.sub_button[t])}}catch(i){e._config={...e._config,sub_button:{...e._config.sub_button,[t]:o(e._config.sub_button[t])}}}}}function q(e,t,o,i){return a=>{a?.stopPropagation();const n=C(e,t);if(!n)return[...t].splice(o,1),i&&i(e),void e.requestUpdate();const r=[...e._config.sub_button[n]];r.splice(o,1),A(e,n,()=>r),i&&i(e),e.requestUpdate()}}function S(e,t,o,i){return a=>{const n=o+a;if(n<0||n>=t.length)return;const r=C(e,t);if(!r){const a=[...t];return[a[o],a[n]]=[a[n],a[o]],i&&i(e),void e.requestUpdate()}const s=[...e._config.sub_button[r]];[s[o],s[n]]=[s[n],s[o]],A(e,r,()=>s),i&&i(e),e.requestUpdate()}}function M(e,t){const o=e.filter(e=>e&&!Array.isArray(e.group));if(0===o.length)return[...e];const i=e.filter(e=>e&&Array.isArray(e.group));return[{name:t?t("editor.sub_button.auto_grouped"):"Automatically grouped",buttons_layout:"inline",group:o},...i]}function L(e,t){const o=(0,r.Ay)(e.hass),i=e._clipboardButton||(t?t():null);return i?o("editor.sub_button.paste_named").replace("{name}",i.name||o("editor.sub_button.default_name")):o("editor.sub_button.paste")}const P="bubble-card-subbutton-clipboard";function E(){try{const e=localStorage.getItem(P);if(!e)return null;const t=JSON.parse(e);return t&&"object"==typeof t?t.payload??null:null}catch(e){return null}}function T(e){if(e)try{const t=JSON.parse(JSON.stringify(e)),o={type:t&&Array.isArray(t.buttons)?"group":"sub-button",savedAt:Date.now(),payload:t};localStorage.setItem(P,JSON.stringify(o))}catch(e){}}var I=o(2186);function j(e,t){if("sub-buttons"===e._config.card_type&&"main"===t)return[];if(Array.isArray(e._config.sub_button)){const t=(0,I.zD)(e._config.sub_button),o={};Array.isArray(t.main)&&t.main.length&&(o.main=t.main.slice()),Array.isArray(t.bottom)&&t.bottom.length&&(o.bottom=t.bottom.slice());try{e._config.sub_button=o}catch(t){e._config={...e._config,sub_button:o}}}if(!e._config.sub_button)try{e._config.sub_button={}}catch(t){e._config={...e._config,sub_button:{}}}if(!Array.isArray(e._config.sub_button[t]))try{e._config.sub_button[t]=[]}catch(o){try{e._config.sub_button={...e._config.sub_button,[t]:[]}}catch(o){e._config={...e._config,sub_button:{...e._config.sub_button,[t]:[]}}}}return e._config.sub_button[t]}function R(e,t,o,i){const a=o([...j(e,t)]);try{e._config.sub_button[t]=a}catch(o){try{e._config.sub_button={...e._config.sub_button,[t]:a}}catch(o){e._config={...e._config,sub_button:{...e._config.sub_button,[t]:a}}}}i&&i(e),e.requestUpdate()}function D(e,t,o,i,a){const n=[...j(e,t)],r=i({...n[o]});n[o]=r;try{e._config.sub_button[t]=n}catch(o){try{e._config.sub_button={...e._config.sub_button,[t]:n}}catch(o){e._config={...e._config,sub_button:{...e._config.sub_button,[t]:n}}}}a&&a(e),e.requestUpdate()}function z(e){const t=e._config.sub_button,o="sub-buttons"===e._config.card_type,i=e=>Array.isArray(e)&&e.some(e=>!!e&&(Array.isArray(e.group),!0)),a=!o&&i(t?.main),n=i(t?.bottom),r=!(!t||void 0===t.main_layout&&void 0===t.bottom_layout);if(!a&&!n&&!r){const t="climate"===e._config.card_type?{main:[]}:void 0;try{t?e._config.sub_button=t:delete e._config.sub_button}catch(o){e._config={...e._config},t?e._config.sub_button=t:delete e._config.sub_button}return void e._valueChanged({target:{configValue:"sub_button",value:t}})}if(n){e._firstRowsComputation=!0;const t=Boolean(window.isSectionView),o=Object.prototype.hasOwnProperty.call(e._config,"card_layout");if(t&&o&&"normal"===e._config.card_layout){try{delete e._config.card_layout}catch(t){const o={...e._config};delete o.card_layout,e._config=o}e._valueChanged({target:{configValue:"card_layout",value:void 0}})}}const s={};a&&(s.main=(t.main||[]).filter(e=>!!e)),n&&(s.bottom=(t.bottom||[]).filter(e=>!!e)),t&&void 0!==t.main_layout&&!o&&(s.main_layout=t.main_layout),t&&void 0!==t.bottom_layout&&(s.bottom_layout=t.bottom_layout),e._valueChanged({target:{configValue:"sub_button",value:s}})}function V(e,t){const o=(0,I.mg)(e._config),i=Array.isArray(o?.[t])?o[t]:[];return{items:i,hasGroups:i.some(e=>e&&Array.isArray(e.group)),hasIndividualButtons:i.some(e=>e&&!Array.isArray(e.group))}}function O(e,t){const o=(0,r.Ay)(e.hass);let{items:a,hasGroups:n,hasIndividualButtons:s}=V(e,t);n&&s&&(a=M(a,o),R(e,t,()=>a,z));const{isDismissed:l,dismiss:d}=function(e,t){const o=`bubble-card-groups-info-dismissed-${t}`;if(e._groupsInfoDismissed||(e._groupsInfoDismissed={}),void 0===e._groupsInfoDismissed[t])try{e._groupsInfoDismissed[t]="true"===localStorage.getItem(o)}catch(o){e._groupsInfoDismissed[t]=!1}return{isDismissed:e._groupsInfoDismissed[t],dismiss:()=>{e._groupsInfoDismissed[t]=!0;try{localStorage.setItem(o,"true")}catch(e){}e.requestUpdate()}}}(e,t),c=()=>{R(e,t,e=>{const t=M(e,o),i=t.filter(e=>e&&Array.isArray(e.group)).length;return[...t,{name:o("editor.sub_button.group_n").replace("{n}",i+1),buttons_layout:"inline",group:[]}]},z)};return i.qy`
    ${n&&!l?i.qy`
      <div class="bubble-info">
        <h4 class="bubble-section-title">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${o("editor.sub_button.groups_mode_title")}
          <div class="bubble-info-dismiss bubble-badge" @click=${d} title="${o("editor.common.dismiss")}"
            style="display: inline-flex; align-items: center; position: absolute; right: 16px; padding: 0 8px; cursor: pointer;">
            <ha-icon icon="mdi:close" style="margin: 0;"></ha-icon>
            ${o("editor.common.dismiss")}
          </div>
        </h4>
        <div class="content">
          <p>${(0,y.T5)(o("editor.sub_button.groups_mode_body"),{mode_bold:i.qy`<b>${o("editor.sub_button.groups_mode_bold")}</b>`})}</p>
        </div>
      </div>
    `:""}
    ${a.map((a,n)=>{if(!a)return null;if(Array.isArray(a.group))return function(e,t,o,a){const n=(0,r.Ay)(e.hass),s=`${a}_group_${o}`,l="main"===a?e._config.sub_button.main:e._config.sub_button.bottom,d=t=>{D(e,a,o,e=>{const o={...e},i=Array.isArray(e.group)?[...e.group]:[],n=i.some(e=>e&&!0===e.fill_width);if(Object.prototype.hasOwnProperty.call(t,"name")&&(o.name=t.name),Object.prototype.hasOwnProperty.call(t,"buttons_layout")&&(o.buttons_layout=t.buttons_layout),"bottom"===a&&Object.prototype.hasOwnProperty.call(t,"justify_content")){const e=t.justify_content;if("fill"===e){if(Object.prototype.hasOwnProperty.call(o,"justify_content")&&delete o.justify_content,Array.isArray(i)){for(let e=0;e<i.length;e+=1){const t=i[e];if(t)if("bottom"===a){if(!1===t.fill_width){const{fill_width:o,...a}=t;i[e]={...a}}}else!0!==t.fill_width&&(i[e]={...t,fill_width:!0})}o.group=i}}else if(n);else if(o.justify_content=e,Array.isArray(i)){for(let e=0;e<i.length;e+=1){const t=i[e];t&&!1!==t.fill_width&&(i[e]={...t,fill_width:!1})}o.group=i}}return o},z)},c=l[o],u=q(e,l,o,z),p=S(e,l,o,z),h=x(e,c,T),b=k(e,c,u,T),m=function(e,t,o,i,a){return()=>{const n=e._clipboardButton||(a?a():null);if(!n)return;e._clipboardButton=n;const r=C(e,t);if(!r)return;const s=[...e._config.sub_button[r]],l={...s[o]};Array.isArray(l.group)||(l.group=[]);const d="bottom"===r&&l.justify_content&&"fill"!==l.justify_content;if(Array.isArray(n?.buttons)||Array.isArray(n?.group)){let e=JSON.parse(JSON.stringify(n.buttons||n.group||[]));d&&(e=e.map(e=>e?{...e,fill_width:!1}:e)),l.group=[...l.group,...e]}else{let e=JSON.parse(JSON.stringify(n));d&&e&&(e.fill_width=!1),l.group=[...l.group,e]}s[o]=l,A(e,r,()=>s),i&&i(e),e.requestUpdate()}}(e,l,o,z,E),g=o>0,_=o<l.length-1;return i.qy`
    <ha-expansion-panel 
      outlined
      style="border-style: dashed;"
      @expanded-changed=${t=>{e._expandedPanelStates[s]=t.target.expanded,e.requestUpdate()}}
    >
      <h4 slot="header">
        <ha-icon icon="mdi:format-list-group"></ha-icon>
        ${t.name||n("editor.sub_button.group_n").replace("{n}",o+1)}
        <div class="button-container" @click=${e=>e.stopPropagation()} @mousedown=${e=>e.stopPropagation()} @touchstart=${e=>e.stopPropagation()}>
          ${(0,y.kX)({trigger:i.qy`
              <ha-icon-button slot="trigger" class="icon-button header" title="${n("editor.common.options")}">
                <ha-icon style="display: flex" icon="mdi:dots-vertical"></ha-icon>
              </ha-icon-button>
            `,items:[{type:"item",icon:"mdi:arrow-up",label:n("editor.common.move_up"),disabled:!g,onClick:e=>{e.stopPropagation(),g&&p(-1)}},{type:"item",icon:"mdi:arrow-down",label:n("editor.common.move_down"),disabled:!_,onClick:e=>{e.stopPropagation(),_&&p(1)}},{type:"divider"},{type:"item",icon:"mdi:content-copy",label:n("editor.sub_button.copy_group"),onClick:e=>{e.stopPropagation(),h(e)}},{type:"item",icon:"mdi:content-cut",label:n("editor.sub_button.cut_group"),onClick:e=>{e.stopPropagation(),b(e)}},{type:"divider"},{type:"item",icon:"mdi:delete",label:n("editor.common.delete"),variant:"danger",onClick:e=>{e.stopPropagation(),u(e)}}]})}
        </div>
      </h4>
      <div class="content">
        ${(0,y.DW)(e,s,!!e._expandedPanelStates[s],()=>i.qy`
          <ha-form
            .hass=${e.hass}
            .data=${{name:t.name??""}}
            .schema=${[{name:"name",label:n("editor.sub_button.group_name"),selector:{text:{}}}]}
            .computeLabel=${e._computeLabelCallback}
            @value-changed=${e=>d(e.detail.value)}
          ></ha-form>

          <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:view-grid"></ha-icon>
              ${n("editor.sub_button.group_layout")}
            </h4>
            <div class="content">
              <ha-form
                .hass=${e.hass}
                .data=${(()=>{const e=(Array.isArray(t.group)?t.group:[]).some(e=>e&&!0===e.fill_width)?"fill":t.justify_content??"fill";return{buttons_layout:t.buttons_layout??"inline",justify_content:e}})()}
                .schema=${(()=>{const e=(Array.isArray(t.group)?t.group:[]).some(e=>e&&!0===e.fill_width);let o=[{value:"fill",label:n("editor.sub_button.fill_width")+n("editor.common.default_suffix")},{value:"end",label:n("editor.common.right")},{value:"start",label:n("editor.common.left")},{value:"center",label:n("editor.common.center")},{value:"space-between",label:n("editor.sub_button.space_between")},{value:"space-around",label:n("editor.sub_button.space_around")},{value:"space-evenly",label:n("editor.sub_button.space_evenly")}];"column"===t.buttons_layout&&(o=o.filter(e=>!["space-between","space-around","space-evenly"].includes(e.value)));const i=[{name:"buttons_layout",label:n("editor.sub_button.buttons_layout"),selector:{select:{options:[{value:"inline",label:n("editor.common.inline")},{value:"column",label:n("editor.sub_button.column")}],mode:"dropdown"}}}];return"bottom"===a&&i.push({name:"justify_content",label:n("editor.sub_button.buttons_alignment"),selector:{select:{options:o,mode:"dropdown"}},disabled:e}),i})()}
                .computeLabel=${e._computeLabelCallback}
                @value-changed=${e=>d(e.detail.value)}
              ></ha-form>
              ${"bottom"!==a?"":(Array.isArray(t.group)?t.group:[]).some(e=>e&&!0===e.fill_width)?i.qy`
                  <div class="bubble-info">
                    <h4 class="bubble-section-title">
                      <ha-icon icon="mdi:information-outline"></ha-icon>
                      ${n("editor.sub_button.alignment_locked_title")}
                    </h4>
                    <div class="content">
                      <p>${n("editor.sub_button.alignment_locked_body")}</p>
                    </div>
                  </div>
                `:""}
            </div>
          </ha-expansion-panel>

          <h4 class="group-buttons-header">${n("editor.sub_button.group_sub_buttons")}</h4>
          ${Array.isArray(t.group)?t.group.map((i,r)=>{if(!i)return null;const s=t=>{t?.stopPropagation(),D(e,a,o,e=>{const t={...e},o=Array.isArray(t.group)?[...t.group]:[];return o.splice(r,1),t.group=o,t},z)},l=Array.isArray(t.group)?t.group[r]:null,d=x(e,l,T),c=k(e,l,s,T),u=(Array.isArray(t.group)?t.group:[]).length;return w(e,i,r,`sub_button.${a}.${o}.group`,t=>{D(e,a,o,e=>{const o={...e},i=Array.isArray(o.group)?[...o.group]:[];return i[r]={...i[r]||{},...t},o.group=i,o},z)},s,t=>{const i=r+t,n=j(e,a),s=Array.isArray(n[o]?.group)?n[o].group:[];i<0||i>=s.length||D(e,a,o,e=>{const t={...e},o=Array.isArray(t.group)?[...t.group]:[];return[o[r],o[i]]=[o[i],o[r]],t.group=o,t},z)},d,c,{panelKeyPrefix:`${a}_group_${o}_button`,buttonTitle:i.name||n("editor.sub_button.button_n").replace("{n}",r+1),arrayLength:u})}):null}

          <div class="element-actions">
            <button class="icon-button paste-button no-bg ${e._clipboardButton||E()?"":"disabled"}" @click=${m}>
              <ha-icon icon="mdi:content-paste"></ha-icon>
              <span class="paste-button-text">
                ${L(e,E)}
              </span>
            </button>
            <button class="icon-button" @click=${()=>{D(e,a,o,t=>{const o={...t};Array.isArray(o.group)||(o.group=[]);const i="bottom"===a&&o.justify_content&&"fill"!==o.justify_content?{entity:e._config.entity,fill_width:!1}:{entity:e._config.entity};return o.group=[...o.group,i],o},z)}}>
              <ha-icon icon="mdi:shape-square-rounded-plus"></ha-icon>
              ${n("editor.sub_button.add_sub_button")}
            </button>
          </div>
        `)}
      </div>
    </ha-expansion-panel>
  `}(e,a,n,t);const s="main"===t?e._config.sub_button.main:e._config.sub_button.bottom,l=q(e,s,n,z),d=S(e,s,n,z),c=s[n],u=x(e,c,T),p=k(e,c,l,T),h=s.length;return w(e,a,n,`sub_button.${t}`,o=>{R(e,t,e=>{const t=[...e];return t[n]={...t[n]||{},...o},t},z)},l,d,u,p,{panelKeyPrefix:`${t}_button`,buttonTitle:`${o("editor.sub_button.button_n").replace("{n}",n+1)}${a.name?` - ${a.name}`:""}`,arrayLength:h})})}

    <div class="element-actions">
      ${i.qy`
          <button class="icon-button paste-button no-bg ${e._clipboardButton||E()?"":"disabled"}" @click=${()=>{const o=j(e,t);!function(e,t,o,i){return()=>{const a=e._clipboardButton||(i?i():null);if(!a)return;e._clipboardButton=a;const n=JSON.parse(JSON.stringify(a)),s=C(e,t),l=Array.isArray(n.buttons)||Array.isArray(n.group),d=s?e._config.sub_button[s]:t;let c=l?M(d,(0,r.Ay)(e.hass)):[...d];l?c.push({name:n.name,buttons_layout:n.display||n.buttons_layout||"inline",justify_content:n.justify_content,group:n.buttons||n.group||[]}):c.push(n),s&&A(e,s,()=>c),o&&o(e),e.requestUpdate()}}(e,o,z,E)()}}>
            <ha-icon icon="mdi:content-paste"></ha-icon>
            <span class="paste-button-text">
              ${L(e,E)}
            </span>
          </button>
        `}
      ${n?i.qy`
        <button class="icon-button" @click=${()=>{c()}}>
          <ha-icon icon="mdi:format-list-group-plus"></ha-icon>
          ${o("editor.sub_button.add_group")}
        </button>
      `:(0,y.kX)({trigger:i.qy`
          <button slot="trigger" class="icon-button add-menu-trigger">
            <ha-icon icon="mdi:plus"></ha-icon>
            ${o("editor.common.add")}
          </button>
        `,items:[{type:"item",icon:"mdi:shape-square-rounded-plus",label:o("editor.sub_button.add_sub_button"),onClick:()=>{R(e,t,t=>[...t,{entity:e._config.entity}],z)}},{type:"item",icon:"mdi:format-list-group-plus",label:o("editor.sub_button.add_group"),onClick:()=>{c()}}]})}
    </div>
  `}function U(e,t){if(!V(e,t).hasGroups)return"";const o=(0,r.Ay)(e.hass),a=`${t}_layout`,n=e._config?.sub_button?.[a]??"inline";return i.qy`
    <ha-form
      .hass=${e.hass}
      .data=${{[a]:n}}
      .schema=${[{name:a,label:o("editor.sub_button.groups_placement"),selector:{select:{options:[{value:"inline",label:o("editor.common.inline")},{value:"rows",label:o("editor.sub_button.rows_stack")}],mode:"dropdown"}}}]}
      .computeLabel=${e._computeLabelCallback}
      @value-changed=${t=>{const o=t.detail?.value?.[a];if(!e._config.sub_button)try{e._config.sub_button={}}catch(t){e._config={...e._config,sub_button:{}}}try{e._config.sub_button[a]=o}catch(t){try{e._config.sub_button={...e._config.sub_button,[a]:o}}catch(t){e._config={...e._config,sub_button:{...e._config.sub_button,[a]:o}}}}z(e),e.requestUpdate()}}
    ></ha-form>
  `}var B=o(985),H=o(7403),F=o(6795),N=o(444),W=o(4565),Y=o(1744),K=o(7910),J=o(5181);const Q="sensor.bubble_card_modules",X=["modules","store"],G="bubble-card-force-unsupported-modules";async function Z(e,t,o){try{if(!e.hass)return!1;if(!await(0,J.ensureBCTProviderAvailable)(e.hass))return console.warn("Bubble Card Tools is required to change global status."),!1;const i={...B.Ki.get(t)||{}};return!0===o?i.is_global=!0:delete i.is_global,B.Ki.set(t,i),await(0,J.writeModuleYaml)(e.hass,t,i),document.dispatchEvent(new CustomEvent("yaml-modules-updated")),!0}catch(e){return console.error("Error setting module global status:",e),!1}}function ee(e,t){try{const o=B.Ki.get(e);if(o&&"object"==typeof o&&!0===o.is_global)return!0;if(J.Qy&&(0,J.Qy)())return!1;if(!t||!t.states||!t.states[Q])return!1;const i=t.states[Q];if(!i.attributes||!i.attributes.modules)return!1;const a=i.attributes.modules[e];return a&&!0===a.is_global}catch(t){return console.warn(`Error checking if module ${e} is global:`,t),!1}}function te(e,t){const o=e._config?.modules||[],i=Array.isArray(o)?o:[o];return!i.includes(`!${t}`)&&(!!i.includes(t)||ee(t,e.hass))}function oe(e){if(!B.Ki||0===B.Ki.size)return[];let t=Array.from(B.Ki.keys());const o=e._myModulesSearchQuery;if(o&&o.trim()){const e=o.toLowerCase().trim();t=t.filter(t=>{const o=(0,H.a7)(t),i=(o.name||t).toLowerCase(),a=(o.description||"").toLowerCase(),n=(o.creator||"").toLowerCase();return i.includes(e)||a.includes(e)||n.includes(e)})}if(!e._myModulesSortOrder)try{const t=localStorage.getItem("bubble-card-modules-sort-order");e._myModulesSortOrder=t||"default"}catch(t){e._myModulesSortOrder="default"}const i=e._myModulesSortOrder||"default",a=(0,J.Ef)(),n=e=>{const t=a.get(e);if(!t)return 0;const o=new Date(t).getTime();return isNaN(o)?0:o};return t.sort((t,o)=>{if("default"===t)return-1;if("default"===o)return 1;const a=(0,H.a7)(t),r=(0,H.a7)(o),s=te(e,t),l=te(e,o);switch(i){case"alphabetical":return(a.name||t).localeCompare(r.name||o,void 0,{sensitivity:"base"});case"default":if(s!==l)return s?-1:1;const e=n(t),i=n(o);return e!==i&&e>0&&i>0?i-e:(a.name||t).localeCompare(r.name||o,void 0,{sensitivity:"base"});case"recent-first":const d=n(t),c=n(o);return d!==c&&d>0&&c>0?c-d:(a.name||t).localeCompare(r.name||o,void 0,{sensitivity:"base"});default:if(s!==l)return s?-1:1;const u=n(t),p=n(o);return u!==p&&u>0&&p>0?p-u:(a.name||t).localeCompare(r.name||o,void 0,{sensitivity:"base"})}}),t}function ie(e){const t=(0,r.Ay)(e._hassRender??e.hass);if(void 0===e._selectedModuleTab&&(e._selectedModuleTab=0),void 0===e._expandedPanelStates&&(e._expandedPanelStates={}),void 0===e._myModulesSortOrder)try{const t=localStorage.getItem("bubble-card-modules-sort-order");e._myModulesSortOrder=t||"default"}catch(t){e._myModulesSortOrder="default"}const o=e._myModulesSortOrder||"default",a="modules_editor_panel";if(void 0===e._forceUnsupportedModules)try{const t=localStorage.getItem(G);e._forceUnsupportedModules="true"===t}catch(t){e._forceUnsupportedModules=!1}const s="bubble-card-module-editor-tab-group",l="undefined"!=typeof customElements&&void 0!==customElements.get("ha-tab-group")&&void 0!==customElements.get("ha-tab-group-tab")?"ha-tab-group":"undefined"!=typeof customElements&&void 0!==customElements.get("sl-tab-group")?"sl-tab-group":"ha-tabs",d="ha-tab-group"===l,c=d&&(0,n._0)(e.hass,"2026.3");e._modulesLoaded||(0,B.wv)(e).then(()=>{if(e._modulesLoaded=!0,(!J.Qy||!(0,J.Qy)())&&function(e){const t={entityFound:!1,hasAttributes:!1,hasModulesAttribute:!1,modulesIsObject:!1,hasLastUpdated:!1,isReady:!1};if(!e||!e.states)return t;const o=e.states[Q];if(!o)return t;t.entityFound=!0;const i=o.attributes||{};return t.hasAttributes=!!o.attributes,"modules"in i&&(t.hasModulesAttribute=!0,t.modulesIsObject=null!==i.modules&&"object"==typeof i.modules),"last_updated"in i&&(t.hasLastUpdated="string"==typeof i.last_updated&&i.last_updated.length>0),t.isReady=t.entityFound&&t.hasModulesAttribute&&t.modulesIsObject&&t.hasLastUpdated,t}(e.hass).isReady){const t=e.hass.states[Q].attributes.modules;t&&t.default&&!0!==t.default.is_global&&Z(e,"default",!0).then(e=>{e?document.dispatchEvent(new CustomEvent("yaml-modules-updated")):console.warn(`Failed to set module 'default' to global in ${Q}.`)})}e.requestUpdate()});const u=(0,J.Qy)();if(e._bctRetryHandle&&u&&(clearTimeout(e._bctRetryHandle),e._bctRetryHandle=null),!e.hass||u||e._bctCheckAttempted)e.hass&&u&&!e._bctCheckAttempted&&(e._bctCheckInFlight||(e._bctCheckInFlight=!0,e._bctCheckAttempted=!0,(0,J.ensureBCTProviderAvailable)(e.hass).finally(()=>{e._bctCheckInFlight=!1,(0,J.Qy)()!==u&&e.requestUpdate()})));else{const t=Date.now(),o=e._lastBctCheckAt??0,i=o?t-o:1/0,a=o&&i<5e3;if(e._bctCheckInFlight||a){if(a&&!e._bctRetryHandle){const t=Math.max(50,5e3-i);e._bctRetryHandle=setTimeout(()=>{e._bctRetryHandle=null,e.requestUpdate()},t)}}else e._bctRetryHandle&&(clearTimeout(e._bctRetryHandle),e._bctRetryHandle=null),e._bctCheckInFlight=!0,e._bctCheckAttempted=!0,e._lastBctCheckAt=t,(0,J.ensureBCTProviderAvailable)(e.hass).finally(()=>{e._bctCheckInFlight=!1,e.requestUpdate()})}if((0,N.kA)(e),e._workingModuleConfigs||(e._workingModuleConfigs={}),e._modulesLoaded&&!B.Ki.has("default")&&u){const t="default:\n  name: Default\n  version: ''\n  description: Empty and enabled by default. Add your custom styles and/or JS templates here to apply them to all cards by pressing the <ha-icon icon=\"mdi:pencil\"></ha-icon> button above.\n  code: ''\n  is_global: true\n  ";(0,W.m)(e,t).then(()=>{console.info("Default module created automatically"),e.requestUpdate()}).catch(e=>{console.error("Error creating default module:",e)})}const p=(0,F.Xe)(),h=t=>{let o;if("sl-tab-group"===l)o=parseInt(t?.detail?.name??t?.target?.activeTab??t?.detail?.value,10);else if("ha-tab-group"===l){const e=t?.detail??{},i=e.tab??e.target??e.item,a=i?.getAttribute?i.getAttribute("panel"):void 0,n=e.panel??e.tabId??a??e.value??t?.target?.activePanel??t?.target?.activeTab;if("number"==typeof n)o=n;else if("string"==typeof n){const e=X.indexOf(n);o=-1!==e?e:parseInt(n,10)}}else o=t?.detail?.value??t?.target?.selected;Number.isFinite(o)||(o=0),e._selectedModuleTab=o,e.requestUpdate(),requestAnimationFrame(()=>{(0,H.XY)(e,!1)})},b=async()=>{try{const o=e._manualYamlContent;if(!o||""===o.trim())return void(0,n.rC)(e,"bubble-card-error",{message:t("editor.modules.no_yaml_content")});const i=await(0,W.m)(e,o);e._showManualImportForm=!1,e._manualYamlContent="",i&&i.moduleId&&(e._recentlyToggledModuleId=i.moduleId,setTimeout(()=>{e._recentlyToggledModuleId=null,e.requestUpdate()},2e3)),e.requestUpdate(),i&&i.moduleId&&requestAnimationFrame(()=>{requestAnimationFrame(()=>{const t=e.shadowRoot?.querySelector(`ha-expansion-panel[data-module-id="${i.moduleId}"]`);t&&t.scrollIntoView({behavior:"smooth",block:"center"})})})}catch(e){console.error("Error installing manual module:",e)}},m=i.qy`
    <ha-expansion-panel
      outlined
      .expanded=${!!e._expandedPanelStates[a]}
      @expanded-changed=${t=>{t.target===t.currentTarget&&(e._expandedPanelStates[a]=t.target.expanded,e.requestUpdate())}}
    >
      <h4 slot="header">
        <ha-icon icon="mdi:puzzle"></ha-icon>
        ${t("editor.modules.title")}
        ${p.hasUpdates&&u?i.qy`
          <span class="bubble-badge update-badge" style="margin-inline-start: 8px; font-size: 0.8em; vertical-align: middle; z-index: 5;">
            <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
            ${t(p.updateCount>1?"editor.modules.updates_available":"editor.modules.update_available").replace("{count}",p.updateCount)}
          </span>
        `:""}
      </h4>
      <div class="content module-editor-content ${d?"module-editor-content--ha-tab-group":""} ${c?"module-editor-content--ha-tab-group-modern":""}" style="margin: -8px 4px 14px 4px;">
        ${(0,y.DW)(e,a,!!e._expandedPanelStates[a],()=>i.qy`
        ${u?"":i.qy`
            <div class="bubble-info warning">
              <h4 class="bubble-section-title">
                <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                ${t("editor.modules.bct_required_title")}
              </h4>
              <div class="content">
                ${B.Ki&&B.Ki.size>0||e.hass&&e.hass.states&&e.hass.states[Q]?i.qy`
                  <p><b>${(0,y.T5)(t("editor.modules.bct_required_body1"),{link:i.qy`<a href="https://github.com/Clooos/Bubble-Card-Tools" target="_blank" rel="noopener noreferrer">Bubble Card Tools</a>`})}</b></p>
                  <p>${t("editor.modules.bct_required_body2")}</p>
                `:i.qy`
                  <p>${(0,y.T5)(t("editor.modules.bct_required_body3"),{no_modules:i.qy`<b>${t("editor.modules.no_modules_detected")}</b>`,link:i.qy`<a href="https://github.com/Clooos/Bubble-Card-Tools" target="_blank" rel="noopener noreferrer">Bubble Card Tools</a>`})}</p>
                `}
              </div>
            </div>
        `}

        <div id="module-editor-top-marker"></div>
        
        ${(()=>{const o=e._selectedModuleTab||0,a=X[o]??o.toString(),n=t=>{const o=X.indexOf(t);e._selectedModuleTab=-1!==o?o:parseInt(t,10)||0,e.requestUpdate(),requestAnimationFrame(()=>(0,H.XY)(e,!1))};return"ha-tab-group"===l?i.qy`
        <ha-tab-group
          class="module-tabs module-tabs--ha-tab-group ${c?"module-tabs--ha-tab-group-modern":""}"
          id="${s}"
          .activePanel=${a}
          @wa-tab-show=${h}
          @active-panel-changed=${h}
          >
          <ha-tab-group-tab
            slot="nav"
            panel=${X[0]}
            .active=${a===X[0]}
            @click=${()=>n(X[0])}
          >
            <ha-icon icon="mdi:puzzle-heart-outline" style="margin-inline-end: 8px;"></ha-icon>
            ${t("editor.modules.my_modules")}
          </ha-tab-group-tab>
            <ha-tab-group-tab
            slot="nav"
            panel=${X[1]}
              .active=${a===X[1]}
              ?disabled=${!u}
            @click=${()=>n(X[1])}
          >
            <ha-icon icon="mdi:puzzle-plus-outline" style="margin-inline-end: 8px;"></ha-icon>
            ${t("editor.modules.module_store")}
          </ha-tab-group-tab>
        </ha-tab-group>
      `:"sl-tab-group"===l?i.qy`
        <sl-tab-group
          class="module-tabs module-tabs--sl-tab-group"
          id="${s}"
          .selected=${o.toString()}
          @sl-tab-show=${h}
        >
          <sl-tab slot="nav" panel="0">
            <ha-icon icon="mdi:puzzle-heart-outline" style="color: inherit !important; margin-inline-end: 8px;"></ha-icon>
            ${t("editor.modules.my_modules")}
          </sl-tab>
          <sl-tab slot="nav" panel="1" ?disabled=${!u}>
            <ha-icon icon="mdi:puzzle-plus-outline" style="color: inherit !important; margin-inline-end: 8px;"></ha-icon>
            ${t("editor.modules.module_store")}
          </sl-tab>
          <sl-tab-panel name="0"></sl-tab-panel>
          <sl-tab-panel name="1"></sl-tab-panel>
        </sl-tab-group>
      `:i.qy`
      <ha-tabs
        class="module-tabs module-tabs--ha-tabs"
        .selected=${o}
        @selected-changed=${h}
      >
        <paper-tab>
          <ha-icon icon="mdi:puzzle-heart-outline" style="margin-inline-end: 8px;"></ha-icon>
          ${t("editor.modules.my_modules")}
        </paper-tab>
        <paper-tab class="${u?"":"disabled"}" ?disabled=${!u}>
          <ha-icon icon="mdi:puzzle-plus-outline" style="margin-inline-end: 8px;"></ha-icon>
          ${t("editor.modules.module_store")}
        </paper-tab>
      </ha-tabs>
    `})()}

        ${(0,K.M)(e)}

        ${0!==e._selectedModuleTab&&u?(0,F._e)(e):i.qy`
          ${e._showManualImportForm?i.qy`
            <div class="module-editor-form">
              <div class="card-content">
                <h3>
                    <ha-icon icon="mdi:code-json" style="margin: 8px;"></ha-icon>
                    ${t("editor.modules.import_yaml_title")}
                </h3>
                <p style="margin-top: 0;">${t("editor.modules.import_yaml_hint")}</p>
                
                <div class="css-editor-container">
                  <ha-code-editor
                    .value=${e._manualYamlContent||""}
                    .mode=${"yaml"}
                    .autofocus=${!0}
                    @value-changed=${t=>{e._manualYamlContent=t.detail.value}}
                  ></ha-code-editor>
                </div>
                
                <div class="module-editor-buttons-container">
                  <button 
                    class="icon-button" 
                    style="flex: 1;"
                    @click=${()=>{e._showManualImportForm=!1,e.requestUpdate()}}
                  >
                    <ha-icon icon="mdi:close"></ha-icon>
                    ${t("editor.common.cancel")}
                  </button>
                  <button
                    class="icon-button"
                    style="flex: 1;"
                    @click=${b}
                  >
                    <ha-icon icon="mdi:content-save"></ha-icon>
                    ${t("editor.modules.import_module")}
                  </button>
                </div>
              </div>
            </div>
          `:e._showNewModuleForm||e._editingModule?(0,N.cu)(e):i.qy`
            <!-- Search and Sort Controls -->
            <div class="my-modules-controls">
              <div class="my-modules-top-row">
                <div class="my-modules-search">
                  ${(0,n._0)(e.hass,"2026.5")?i.qy`<ha-input-search
                        .value=${e._myModulesSearchQuery||""}
                        placeholder="${t("editor.modules.search_modules")}"
                        @input=${t=>{e._myModulesSearchQuery=t.target.value,e.requestUpdate()}}
                      ></ha-input-search>`:i.qy`<ha-textfield
                        label="${t("editor.modules.search_modules")}"
                        icon
                        .value=${e._myModulesSearchQuery||""}
                        @input=${t=>{e._myModulesSearchQuery=t.target.value,e.requestUpdate()}}
                      >
                        <slot name="prefix" slot="leadingIcon">
                          <ha-icon slot="prefix" icon="mdi:magnify"></ha-icon>
                        </slot>
                      </ha-textfield>`}
                </div>
                <div class="my-modules-sort-menu">
                  ${(0,y.kX)({trigger:i.qy`
                      <ha-icon-button slot="trigger" class="icon-button header sort-trigger" title="${t("editor.modules.sort_modules")}">
                        <ha-icon icon="mdi:sort"></ha-icon>
                      </ha-icon-button>
                    `,items:[{type:"checkbox",icon:"mdi:check-circle",label:t("editor.modules.sort_active_recent"),checked:"default"===o,onClick:t=>{t.stopPropagation(),e._myModulesSortOrder="default";try{localStorage.setItem("bubble-card-modules-sort-order","default")}catch(e){}e.requestUpdate()}},{type:"checkbox",icon:"mdi:sort-alphabetical-ascending",label:t("editor.modules.sort_alphabetical"),checked:"alphabetical"===o,onClick:t=>{t.stopPropagation(),e._myModulesSortOrder="alphabetical";try{localStorage.setItem("bubble-card-modules-sort-order","alphabetical")}catch(e){}e.requestUpdate()}},{type:"checkbox",icon:"mdi:clock-outline",label:t("editor.modules.sort_recent"),checked:"recent-first"===o,onClick:t=>{t.stopPropagation(),e._myModulesSortOrder="recent-first";try{localStorage.setItem("bubble-card-modules-sort-order","recent-first")}catch(e){}e.requestUpdate()}}]})}
                </div>
              </div>
              <bubble-formfield label="${t("editor.modules.enable_unsupported")}">
                <ha-switch
                  .checked=${!!e._forceUnsupportedModules}
                  @change=${t=>{const o=t.target.checked;e._forceUnsupportedModules=o;try{localStorage.setItem(G,o?"true":"false")}catch(e){}e.requestUpdate()}}
                ></ha-switch>
              </bubble-formfield>
              ${e._forceUnsupportedModules?i.qy`
                <div class="bubble-info warning unsupported-modules-warning">
                  <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                    ${t("editor.modules.use_carefully_title")}
                  </h4>
                  <div class="content">
                    <p>${t("editor.modules.use_carefully_body")}</p>
                  </div>
                </div>
              `:""}
            </div>
            
            <!-- Installed Modules List -->
            ${oe(e).map(o=>{const{name:a,description:r,formSchema:s,supportedCards:l,unsupportedCard:d,creator:c,moduleLink:h,moduleVersion:b}=(0,H.a7)(o),m=a,g="string"==typeof r&&r.startsWith("Empty and enabled by default."),_=(0,Y.Bw)()&&!(0,K.pd)(e,o),f=g?t("editor.modules.default_module_description").replace("{icon}",'<ha-icon icon="mdi:pencil"></ha-icon>'):_?(0,Y.W_)(r,e.hass,()=>e.requestUpdate()):r,v=!g&&_&&f!==r,$=te(e,o),w=ee(o,e.hass),x=s&&s.length>0,k="default"===o,C=k||x;let A=t("editor.modules.all_cards");const q=e._config[o];void 0===e._workingModuleConfigs[o]&&(e._workingModuleConfigs[o]=structuredClone(q??{}));const S=e._workingModuleConfigs[o],M=(0,H.Qv)(s,S),L=Object.keys(M).length?{...M,...S}:S,P=e._config.card_type??"";let E=!1;E=l&&Array.isArray(l)&&l.length>0?!l.includes(P):d.includes(P);const T=!0===e._forceUnsupportedModules,I=E&&!T&&!$&&!w&&!k,j=s&&s.length>0?e._getProcessedSchema(o,s,S):[],R=_?(0,Y.uH)(j,e.hass,()=>e.requestUpdate()):j,D=p.modules.some(e=>e.id===o)&&u,z=D?p.modules.find(e=>e.id===o):null,V=e._recentlyToggledModuleId===o;return i.qy`
                <ha-expansion-panel 
                  outlined 
                  class="${I?"disabled":""} ${V?"recently-toggled":""}"
                  data-module-id="${o}"
                  .expanded=${!!e._expandedPanelStates[o]}
                  @expanded-changed=${t=>{t.target.getAttribute("data-module-id")===o&&(e._expandedPanelStates[o]=t.target.expanded,e.requestUpdate())}}
                >
                  <h4 slot="header">
                    <ha-icon
                      icon="${$?"mdi:puzzle-check":"mdi:puzzle-outline"}"
                      style="${$?"opacity: 1; color: var(--info-color) !important;":"opacity: 0.3;"}"
                    ></ha-icon>
                    ${m}
                    <span class="module-badges" style="display: inline-flex; margin-inline-start: auto;">
                      ${D?i.qy`
                        <span class="bubble-badge update-badge">
                          <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                          ${t("editor.modules.update_badge").replace("{version}",z.newVersion)}
                        </span>
                      `:""}
                      ${w?i.qy`
                        <span class="bubble-badge update-badge global-badge">
                          <ha-icon icon="mdi:cards-outline" style="color: var(--primary-text-color) !important;"></ha-icon>
                        </span>
                      `:""}
                    </span>
                  </h4>
                  <div class="content" style="margin-top: 4px;">
                    ${(0,y.DW)(e,o,!!e._expandedPanelStates[o],()=>i.qy`
                      <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div class="module-toggles-container">
                          <span class="module-toggles-label">
                            ${t("editor.modules.apply_to")}
                          </span>
                          <div class="module-toggles">
                            <button 
                              class="bubble-badge toggle-badge ${$?"install-button":"link-button"}"
                              style="${"default"===o&&$?"cursor: default;":""} cursor: pointer;"
                              @click=${()=>{(t=>{const o=t.target,i=o.configValue,a=o.checked;e._config.modules=Array.isArray(e._config.modules)?e._config.modules:[];const r=ee(i,e.hass);a?(e._config.modules=e._config.modules.filter(e=>e!==`!${i}`),r||e._config.modules.includes(i)||(e._config.modules=[...e._config.modules,i])):r?(e._config.modules.includes(`!${i}`)||(e._config.modules=[...e._config.modules,`!${i}`]),e._config.modules=e._config.modules.filter(e=>e!==i)):e._config.modules=e._config.modules.filter(e=>e!==i);const s=e._myModulesSortOrder||"default",l=!0===e._expandedPanelStates?.[i];"default"===s&&(e._recentlyToggledModuleId=i,l&&(e._expandedPanelStates=e._expandedPanelStates||{},e._expandedPanelStates[i]=!0),setTimeout(()=>{e._recentlyToggledModuleId=null,e.requestUpdate()},2e3)),(0,n.rC)(e,"config-changed",{config:e._config}),e.requestUpdate(),"default"===s&&a&&requestAnimationFrame(()=>{requestAnimationFrame(()=>{const t=e.shadowRoot?.querySelector(`ha-expansion-panel[data-module-id="${i}"]`);if(t){l&&!t.expanded&&(t.expanded=!0);const e=t.getBoundingClientRect();e.top>=0&&e.bottom<=window.innerHeight||t.scrollIntoView({behavior:"smooth",block:"start"})}})})})({target:{checked:!$,configValue:o}})}}
                            >
                              <ha-icon icon="mdi:card-outline"></ha-icon>
                              <span>${t("editor.modules.this_card")}</span>
                            </button>
                            
                            <button 
                              class="bubble-badge toggle-badge ${w&&!x?"update-button":"link-button"} ${C||!u?"disabled":""}"
                              style="cursor: pointer; ${C||!u?"opacity: 0.7; cursor: default;":""}"
                              @click=${()=>{C||(async(t,o)=>{await Z(e,t,o)&&(!0===o&&(e._config.modules=Array.isArray(e._config.modules)?e._config.modules.filter(e=>e!==`!${t}`):[]),(0,n.rC)(e,"config-changed",{config:e._config}),e.requestUpdate(),setTimeout(()=>e.requestUpdate(),100))})(o,!w)}}
                              ?disabled=${C||!u}
                            >
                              <ha-icon icon="mdi:cards-outline"></ha-icon>
                              <span>${A}</span>
                            </button>
                            ${C&&!k?i.qy`
                              <button 
                                class="bubble-badge toggle-badge"
                                style="padding: 4px;"
                                @click=${t=>{t.stopPropagation(),e._helpModuleId=e._helpModuleId===o?null:o,e.requestUpdate()}}
                                title="${t("editor.modules.show_help")}"
                              >
                                <ha-icon icon="mdi:help"></ha-icon>
                              </button>
                            `:""}
                          </div>
                        </div>
                        
                        <!-- Module Action Buttons -->
                        <div class="module-actions">
                          ${D?i.qy`
                            <button 
                              class="icon-button update-button" 
                              style="margin: 0 24px;"
                              @click=${()=>{e._selectedModuleTab=1,e._storeSearchQuery=m,e.requestUpdate()}}
                              title="${t("editor.modules.update_module")}"
                            >
                              <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                              ${t("editor.common.update")}
                            </button>
                          `:""}
                          <button class="icon-button ${u?"":"disabled"}" @click=${()=>(0,N.dK)(e,o)} title="${t("editor.modules.edit_module")}">
                            <ha-icon icon="mdi:pencil"></ha-icon>
                          </button>
                          ${F.dn&&(0,F.dn)(o)||"default"===o?"":i.qy`
                              <button class="icon-button ${u?"":"disabled"}" @click=${()=>(0,N.s)(e,o)} title="${t("editor.modules.delete_module")}">
                                <ha-icon icon="mdi:delete"></ha-icon>
                              </button>
                            `}
                        </div>
                      </div>
                      <hr>

                      ${e._helpModuleId===o?i.qy`
                        <div class="bubble-info">
                          <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            ${t("editor.modules.all_cards_help_title")}
                          </h4>
                          <div class="content">
                            <p>${t("editor.modules.all_cards_help_body")}</p>
                          </div>
                        </div>
                      `:""}

                      ${s.length>0?i.qy`
                          <h4 class="${$?"":"disabled"}">
                            <ha-icon icon="mdi:cog"></ha-icon>
                            ${t("editor.modules.configuration")}
                          </h4>
                          <ha-form
                            class="${$?"":"disabled"}"
                            .hass=${e.hass}
                            .data=${L}
                            .schema=${R}
                            .computeLabel=${t=>_&&t?.label?(0,Y.W_)(t.label,e.hass,()=>e.requestUpdate()):t?.label}
                            .disabled=${!$}
                            @value-changed=${t=>e._valueChangedInHaForm(t,o,s)}
                          ></ha-form>
                          <hr>
                        `:""}

                      <div class="bubble-info" style="display: ${f?"":"none"}">
                        <h4 class="bubble-section-title">
                          <ha-icon icon="mdi:information-outline"></ha-icon>
                            ${t("editor.modules.about_module")}
                        </h4>
                        <div class="content">
                          ${i.qy`<span .innerHTML=${f}></span>`}
                          ${(0,K.WG)(e,o,v)}
                        </div>
                      </div>

                      ${c||h||b?i.qy`
                          <h4 class="version module-version">
                            ${c?t("editor.modules.created_by").replace("{creator}",c):""}
                            <span class="version-number">
                              ${h?i.qy`<a href="${h}" target="_blank" rel="noopener noreferrer">${t("editor.modules.module_link")}</a> • `:""}
                              ${b||""}
                            </span>
                          </h4>
                          `:""}
                    `)}
                  </div>
                </ha-expansion-panel>
              `})}
            
            ${0===oe(e).length?i.qy`
              <div class="bubble-info">
                <h4 class="bubble-section-title">
                  <ha-icon icon="mdi:information-outline"></ha-icon>
                  ${t("editor.modules.no_modules_found")}
                </h4>
                <div class="content">
                  <p>${t("editor.modules.no_modules_match")}</p>
                </div>
              </div>
            `:""}
          `}

          <hr>
          ${e._showNewModuleForm||e._showManualImportForm||e._editingModule||!u?"":i.qy`
          <div class="module-editor-buttons-container" style="display: flex;">
            <button class="icon-button" style="flex: 1;" @click=${()=>{e._showNewModuleForm=!0,e._showManualImportForm=!1,e._generateUniqueModuleId&&(e._newModuleTemplate.id=e._generateUniqueModuleId("my_module")),e._editingModule={...e._newModuleTemplate},e._config.modules||(e._config.modules=e._config.style_templates||[]),e._config.modules.includes(e._editingModule.id)||(e._config.modules=[...e._config.modules,e._editingModule.id],(0,n.rC)(e,"config-changed",{config:e._config})),e._previousModuleId=e._editingModule.id,e.requestUpdate(),setTimeout(()=>(0,H.XY)(e),0)}}>
              <ha-icon icon="mdi:puzzle-plus"></ha-icon>
              ${t("editor.modules.create_module")}
            </button>
            
            <button class="icon-button" style="flex: 1;" @click=${()=>{e._showManualImportForm=!0,e._showNewModuleForm=!1,e._manualYamlContent="",e.requestUpdate(),setTimeout(()=>(0,H.XY)(e),0)}}>
              <ha-icon icon="mdi:code-json"></ha-icon>
              ${t("editor.modules.import_from_yaml")}
            </button>
          </div>
          `}
        `}

        <div class="bubble-info">
          <h4 class="bubble-section-title">
            <ha-icon icon="mdi:information-outline"></ha-icon>
            ${t("editor.modules.title")}
          </h4>
          <div class="content">
            <p>${(0,y.T5)(t("editor.modules.info_body1"),{styles_link:i.qy`<a href="https://github.com/Clooos/Bubble-Card#styling" target="_blank" rel="noopener noreferrer">${t("editor.modules.custom_styles")}</a>`,templates_link:i.qy`<a href="https://github.com/Clooos/Bubble-Card#templates" target="_blank" rel="noopener noreferrer">${t("editor.styles.js_templates")}</a>`})}</p>
            <p>${t("editor.modules.info_body2")}</p>
            <p>${(0,y.T5)(t("editor.modules.info_body3"),{coding:i.qy`<b>${t("editor.modules.coding_not_your_thing")}</b>`,store:i.qy`<b>${t("editor.modules.module_store")}</b>`})}</p>
          </div>
        </div>
        `)}
      </div>
    </ha-expansion-panel>
  `;return"sl-tab-group"===l?requestAnimationFrame(()=>{const t=e.shadowRoot?.getElementById(s);if(t&&"function"==typeof t.show){const o=void 0!==e._selectedModuleTab?e._selectedModuleTab.toString():"0";t.show(o)}}):"ha-tab-group"===l&&requestAnimationFrame(()=>{const t=e.shadowRoot?.getElementById(s);if(!t)return;const o=X[e._selectedModuleTab??0]??(e._selectedModuleTab??0).toString();"activePanel"in t&&(t.activePanel=o),t.setAttribute("active-panel",o)}),m}var ae=o(8409),ne=o(7240),re=o(2002);const se=Symbol("no rows reading");class le extends i.WF{_previewStyleApplied=!1;_entityCache={};_cachedAttributeList=null;_cachedAttributeListEntity=null;_expandedPanelStates={};_moduleErrorCache={};_moduleCodeEvaluating=null;_rowsAutoMode=void 0;_autoRowsComputeScheduled=!1;_previewCardRoot=null;_previewCardHost=null;_previewCardScore=-1/0;_cardContextListener=null;_disallowStandalonePopup=!1;_lastMeasuredHeights=null;_lastComputedRows=se;_unconfirmedRowsPasses=0;constructor(){super(),this._expandedPanelStates={}}connectedCallback(){super.connectedCallback?.();try{window.__bubbleCardEditorInstances=window.__bubbleCardEditorInstances||new Set,window.__bubbleCardEditorInstances.add(this)}catch(e){}this._cardContextListener||(this._cardContextListener=e=>this._handleCardContext(e),window.addEventListener("bubble-card-context",this._cardContextListener))}setConfig(e){const t=this._previewCardHost||this._previewCardRoot?.host||null,o=!!t?.isConnected;this._config={...e};const i=(0,ae.UL)(this._config);i!==this._config&&(this._config=i,this._stateContentMigrationQueued||(this._stateContentMigrationQueued=!0,setTimeout(()=>{this._stateContentMigrationQueued=!1,(0,n.rC)(this,"config-changed",{config:this._config})},0))),void 0!==this._lastCardType&&this._lastCardType!==e?.card_type&&(0,N.vx)(this),this._lastCardType=e?.card_type,this._disallowStandalonePopup=this._isStandalonePopupDisallowedInCurrentDialog();const a=this.getRootNode()?.host;if("hui-card-element-editor"===a?.tagName?.toLowerCase()){const t="pop-up"===e?.card_type;Promise.resolve(a.updateComplete).then(()=>{try{t?this._injectHideTabsStyle(a.shadowRoot):a.shadowRoot?.querySelector("#bubble-card-hide-tabs")?.remove()}catch(e){}})}o?this._previewCardScore=-1/0:(this._firstRowsComputation=!1,this._lastMeasuredHeights=null,this._resetPreviewCardReference());const r=void 0!==this._config?.rows&&null!==this._config?.rows&&""!==this._config?.rows,s="string"==typeof this._config?.rows&&""!==this._config.rows.trim(),l=void 0!==this._config?.grid_options?.rows&&null!==this._config?.grid_options?.rows&&""!==this._config?.grid_options?.rows;this._rowsAutoMode=!0,(l||r&&s)&&(this._rowsAutoMode=!1)}_deepQuerySelector(e,t,o=6){try{if(!e||o<0)return null;const i=e.querySelector?.(t);if(i)return i;const a=e.querySelectorAll?.("*")||[];for(const e of a)if(e?.shadowRoot){const i=this._deepQuerySelector(e.shadowRoot,t,o-1);if(i)return i}return null}catch(e){return null}}_getEditorPreviewContainer(){try{const e=document.querySelector("body > home-assistant");return e?.shadowRoot?.querySelector("hui-dialog-edit-card")?.shadowRoot?.querySelector("ha-dialog > div.content > div.element-preview")||null}catch(e){return null}}_removeRowsOverrideAndRecalculate=()=>{try{const e={...this._config};if(e.grid_options){const{rows:t,...o}=e.grid_options;Object.keys(o).length>0?e.grid_options=o:delete e.grid_options}delete e.rows,this._rowsAutoMode=!0,this._config=e,(0,n.rC)(this,"config-changed",{config:e}),requestAnimationFrame(()=>{try{this._firstRowsComputation=!0,this._lastMeasuredHeights=null,this._lastComputedRows=se,this._unconfirmedRowsPasses=0,this._setupAutoRowsObserver();const e=this._getBubbleCardFromPreview();e?this._computeAndApplyRows(e):this._waitForPreviewAndRecompute()}catch(e){}})}catch(e){console.error("Bubble Card Editor: failed to remove rows override",e)}};_waitForPreviewAndRecompute(e=0){try{const e=this._getBubbleCardFromPreview();if(e){this._setupAutoRowsObserver();const t=this._computeAndApplyRows(e);if(t?.applied)return}}catch(e){}e+1>=40||setTimeout(()=>this._waitForPreviewAndRecompute(e+1),50)}_scheduleAutoRowsCompute(){this._autoRowsComputeScheduled||(this._autoRowsComputeScheduled=!0,requestAnimationFrame(()=>{this._autoRowsComputeScheduled=!1;try{if(void 0!==this._config?.grid_options?.rows&&null!==this._config?.grid_options?.rows&&""!==this._config?.grid_options?.rows||!1===this._rowsAutoMode)return;this._setupAutoRowsObserver();const e=this._getBubbleCardFromPreview();e&&this._computeAndApplyRows(e)}catch(e){}}))}static get properties(){return{_config:{}}}__renderHass=void 0;get _hassRender(){return this.__renderHass??this._hass}set hass(e){this._hass=e,void 0!==this._hass?void 0!==this.__renderHass?(this._hassThrottleTimer&&clearTimeout(this._hassThrottleTimer),this._hassThrottleTimer=setTimeout(()=>{this._hassThrottleTimer=null,this.__renderHass!==this._hass&&(this.__renderHass=this._hass,this.listsUpdated=!1,this._entityCache={},this._cachedAttributeList=null,this._cachedAttributeListEntity=null,this.requestUpdate())},1e3)):this.__renderHass=e:this.__renderHass=void 0}get hass(){return this._hass}get _card_type(){return this._config?.card_type||""}get _button_type(){return this._config?.button_type||("pop-up"===this._config?.card_type?"":"switch")}get _entity(){return this._config?.entity||""}get _selectable_attributes(){return["source_list","sound_mode_list","hvac_modes","fan_modes","swing_modes","swing_horizontal_modes","preset_modes","effect_list","available_modes","operation_list"]}updated(e){super.updated(e),(0,N.$7)(this),this._setupAutoRowsObserver()}async firstUpdated(e){if(super.firstUpdated(e),this.hass&&this.hass.loadFragmentTranslation)try{await this.hass.loadFragmentTranslation("config"),await this.hass.loadFragmentTranslation("lovelace")}catch(e){console.error("Bubble Card Editor: Failed to load fragment translations",e)}(0,r.IM)(this.hass).then(e=>{e&&(this.listsUpdated=!1,this.requestUpdate())}).catch(()=>{})}disconnectedCallback(){super.disconnectedCallback?.();try{window.__bubbleCardEditorInstances?.delete(this)}catch(e){}try{this._errorListener&&(window.removeEventListener("bubble-card-error",this._errorListener),this._errorListener=null)}catch(e){}try{this._moduleChangeHandler&&(window.removeEventListener("bubble-card-modules-changed",this._moduleChangeHandler),window.removeEventListener("bubble-card-module-updated",this._moduleChangeHandler),document.removeEventListener("yaml-modules-updated",this._moduleChangeHandler),this._moduleChangeHandler=null,this._moduleChangeListenerAdded=!1)}catch(e){}try{this._storeAutoRefreshTimer&&(clearInterval(this._storeAutoRefreshTimer),this._storeAutoRefreshTimer=null)}catch(e){}try{this._progressInterval&&(clearInterval(this._progressInterval),this._progressInterval=null)}catch(e){}try{this._editorSchemaDebounce&&(clearTimeout(this._editorSchemaDebounce),this._editorSchemaDebounce=null)}catch(e){}try{this._hassThrottleTimer&&(clearTimeout(this._hassThrottleTimer),this._hassThrottleTimer=null)}catch(e){}try{this._cardContextListener&&(window.removeEventListener("bubble-card-context",this._cardContextListener),this._cardContextListener=null)}catch(e){}try{(0,N.vx)(this)}catch(e){}try{const e=window.__bubbleStandalonePopupEditorOpeners;e&&this._rememberedStandaloneOpenerHashes&&(this._rememberedStandaloneOpenerHashes.forEach((t,o)=>{e.get(o)===t&&e.delete(o)}),this._rememberedStandaloneOpenerHashes.clear())}catch(e){}le._resizeObserver&&this._observedElements&&(this._observedElements.forEach(e=>{le._resizeObserver.unobserve(e),le._editorInstanceMap.delete(e)}),this._observedElements=[])}render(){return i.qy`${this.createErrorConsole(this,"top")}${this._renderEditorBody()}`}_renderEditorBody(){if(!this._hassRender)return i.qy``;const e=(0,r.Ay)(this._hassRender);if(!this._previewStyleApplied){const e=document.querySelector("body > home-assistant"),t=e?.shadowRoot?.querySelector("hui-dialog-edit-card")?.shadowRoot?.querySelector("ha-dialog > div.content > div.element-preview");t?.style&&"sticky"!==t.style.position&&(t.style.position="sticky",t.style.top="0",t.style.height="calc(100vh - 224px)",t.style.overflowY="auto",this._previewStyleApplied=!0)}this.listsUpdated||(this._initializeLists(e),this.listsUpdated=!0);const t=this.cardTypeList;if(this.buttonTypeList,this._isNestedStandalonePopupConfig())return i.qy`
                <div class="card-config">
                    ${this._renderNestedStandalonePopupWarning()}
                    ${this.makeDropdown(e("editor.common.card_type"),"card_type",t)}
                </div>
            `;switch(this._config?.card_type){case"pop-up":return(0,u.renderPopUpEditor)(this);case"button":return(0,c.K)(this);case"sub-buttons":return function(e){const t=(0,r.Ay)(e.hass),o="pop-up"===e._config.card_type;return i.qy`
        <div class="card-config">
            ${o?"":e.makeDropdown(t("editor.common.card_type"),"card_type",e.cardTypeList)}

            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:cog"></ha-icon>
                    ${t("editor.common.card_settings")}
                </h4>
                <div class="content">
                    <bubble-formfield>
                        <ha-switch
                            label="${t("editor.sub_buttons_card.hide_main_background")}"
                            .checked="${e._config?.hide_main_background||!1}"
                            .configValue="${"hide_main_background"}"
                            @change="${e._valueChanged}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${t("editor.sub_buttons_card.hide_main_background")}</label>
                        </div>
                    </bubble-formfield>

                    <bubble-formfield>
                        <ha-switch
                            label="${t("editor.sub_buttons_card.footer_mode")}"
                            .checked="${e._config?.footer_mode||!1}"
                            .configValue="${"footer_mode"}"
                            @change="${e._valueChanged}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${t("editor.sub_buttons_card.footer_mode")}</label>
                        </div>
                    </bubble-formfield>

                    ${e._config?.footer_mode?i.qy`
                        <div style="margin-top: 16px; padding-inline-start: 16px; border-inline-start: 2px solid var(--divider-color);">
                            <bubble-formfield>
                                <ha-switch
                                    label="${t("editor.sub_buttons_card.full_width_footer")}"
                                    .checked="${e._config?.footer_full_width||!1}"
                                    .configValue="${"footer_full_width"}"
                                    @change="${e._valueChanged}"
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">${t("editor.sub_buttons_card.full_width_footer")}</label>
                                </div>
                            </bubble-formfield>

                            ${e._config?.footer_full_width?"":i.qy`
                                <ha-form
                                    .hass=${e.hass}
                                    .data=${{footer_width:e._config?.footer_width||500}}
                                    .schema=${[{name:"footer_width",selector:{text:{type:"number"}},options:{min:200,max:1200,step:10}}]}
                                    .computeLabel=${()=>t("editor.sub_buttons_card.footer_width")}
                                    @value-changed=${t=>{e._valueChanged({target:{configValue:"footer_width"},detail:{value:t.detail.value.footer_width}})}}
                                ></ha-form>
                                <div style="font-size: 0.8em; color: var(--secondary-text-color); margin-top: 4px;">
                                    ${t("editor.sub_buttons_card.footer_centered")}
                                </div>
                            `}

                            <ha-form
                                .hass=${e.hass}
                                .data=${{footer_bottom_offset:e._config?.footer_bottom_offset||16}}
                                .schema=${[{name:"footer_bottom_offset",selector:{text:{type:"number"}},options:{min:0,max:100,step:1}}]}
                                .computeLabel=${()=>t("editor.sub_buttons_card.footer_distance")}
                                @value-changed=${t=>{e._valueChanged({target:{configValue:"footer_bottom_offset"},detail:{value:t.detail.value.footer_bottom_offset}})}}
                            ></ha-form>
                            <div style="font-size: 0.8em; color: var(--secondary-text-color); margin-top: 4px;">
                                ${t("editor.sub_buttons_card.footer_distance_helper")}
                            </div>
                        </div>
                    `:""}
                </div>
            </ha-expansion-panel>

            ${e.makeSubButtonPanel()}

            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:palette"></ha-icon>
                    ${t("editor.common.styling_layout_options")}
                </h4>
                <div class="content">
                    ${e.makeLayoutPanel()}
                    ${o?"":e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>

            ${e.makeModulesEditor()}

            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    ${t("editor.sub_buttons_card.info_title")}
                </h4>
                <div class="content">
                    <p>${t("editor.sub_buttons_card.info_body")}</p>
                </div>
            </div>

            ${o?"":e.makeVersion()}
        </div>
    `}(this);case"separator":return function(e){const t=(0,r.Ay)(e.hass);return i.qy`
    <div class="card-config">
        ${e.makeDropdown(t("editor.common.card_type"),"card_type",e.cardTypeList)}
        <ha-form
            .hass=${e.hass}
            .data=${{name:e._config?.name||""}}
            .schema=${[{name:"name",selector:{text:{}}}]}
            .computeLabel=${()=>t("editor.common.name")}
            @value-changed=${t=>{e._valueChanged({target:{configValue:"name"},detail:{value:t.detail.value.name}})}}
        ></ha-form>
        ${e.makeDropdown(t("editor.common.icon"),"icon")}
        ${e.makeSubButtonPanel()}
        <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:palette"></ha-icon>
              ${t("editor.common.styling_layout_options")}
            </h4>
            <div class="content">
                ${e.makeLayoutPanel()}
                ${e.makeStyleEditor()}
            </div>
        </ha-expansion-panel>
        ${e.makeModulesEditor()}
        <div class="bubble-info">
            <h4 class="bubble-section-title">
                <ha-icon icon="mdi:information-outline"></ha-icon>
                ${t("editor.separator.info_title")}
            </h4>
            <div class="content">
                <p>${t("editor.separator.info_body")}</p>
            </div>
        </div>
        ${e.makeVersion()}
  </div>
`}(this);case"horizontal-buttons-stack":return function(e){const t=(0,r.Ay)(e.hass);if(!e.buttonAdded)for(e.buttonAdded=!0,e.buttonIndex=0;e._config[e.buttonIndex+1+"_link"];)e.buttonIndex++;return i.qy`
        <div class="card-config">
            ${e.makeDropdown(t("editor.common.card_type"),"card_type",e.cardTypeList)}
            <div id="buttons-container">
                ${function(e){const t=(0,r.Ay)(e.hass);let o=[];for(let a=1;a<=e.buttonIndex;a++)o.push(i.qy`
            <div class="${a}_button">
                <ha-expansion-panel outlined>
                    <h4 slot="header">
                        <ha-icon icon="mdi:border-radius"></ha-icon>
                        ${t("editor.hbs.button_label")} ${a} ${e._config[a+"_name"]?"- "+e._config[a+"_name"]:""}
                        <div class="button-container">
                            <button class="icon-button header" @click="${()=>h(e,a)}">
                              <ha-icon icon="mdi:delete"></ha-icon>
                            </button>
                        </div>
                    </h4>
                    <div class="content">
                        <ha-form
                            .hass=${e.hass}
                            .data=${{[a+"_link"]:e._config[a+"_link"]||""}}
                            .schema=${[{name:a+"_link",selector:{text:{}}}]}
                            .computeLabel=${()=>t("editor.hbs.link_hash")}
                            @value-changed=${t=>{e._valueChanged({target:{configValue:a+"_link"},detail:{value:t.detail.value[a+"_link"]}})}}
                        ></ha-form>
                        <ha-form
                            .hass=${e.hass}
                            .data=${{[a+"_name"]:e._config[a+"_name"]||""}}
                            .schema=${[{name:a+"_name",selector:{text:{}}}]}
                            .computeLabel=${()=>e._optionalLabel(t("editor.common.name"))}
                            @value-changed=${t=>{e._valueChanged({target:{configValue:a+"_name"},detail:{value:t.detail.value[a+"_name"]}})}}
                        ></ha-form>
                        <ha-icon-picker
                            label="${e._optionalLabel(t("editor.common.icon"))}"
                            .value="${e._config[a+"_icon"]||""}"
                            .configValue="${a}_icon"
                            item-label-path="label"
                            item-value-path="value"
                            @value-changed="${e._valueChanged}"
                        ></ha-icon-picker>
                        <ha-form
                            .hass=${e.hass}
                            .data=${e._config}
                            .schema=${[{name:a+"_entity",label:e._optionalLabel(t("editor.hbs.light_group")),selector:{entity:{}}}]}
                            .computeLabel=${e._computeLabelCallback}
                            @value-changed=${e._valueChanged}
                        ></ha-form>
                        <ha-form
                            .hass=${e.hass}
                            .data=${e._config}
                            .schema=${[{name:a+"_pir_sensor",label:e._optionalLabel(t("editor.hbs.presence_sensor")),selector:{entity:{}}}]}
                            .computeLabel=${e._computeLabelCallback}
                            @value-changed=${e._valueChanged}
                        ></ha-form>
                        <ha-alert alert-type="info">${t("editor.hbs.info_auto_order")}</ha-alert>
                    </div>
                </ha-expansion-panel>
            </div>
        `);return o}(e)}
            </div>
            <button class="icon-button" @click="${function(){e.buttonIndex++,e.requestUpdate()}}">
                <ha-icon icon="mdi:plus"></ha-icon>
                ${t("editor.hbs.new_button")}
            </button>
            <hr>
            <bubble-formfield>
                <ha-switch
                    aria-label="${e._optionalLabel(t("editor.hbs.auto_order"))}"
                    .checked=${e._config?.auto_order||!1}
                    .configValue="${"auto_order"}"
                    @change=${e._valueChanged}
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">${e._optionalLabel(t("editor.hbs.auto_order"))}</label>
                </div>
            </bubble-formfield>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  ${t("editor.common.styling_layout_options")}
                </h4>
                <div class="content">
                    ${e.makeLayoutPanel()}
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:palette"></ha-icon>
                          ${t("editor.hbs.styling_title")}
                        </h4>
                        <div class="content">
                            <ha-form
                                .hass=${e.hass}
                                .data=${{margin:e._config?.margin||"7px"}}
                                .schema=${[{name:"margin",selector:{text:{}}}]}
                                .computeLabel=${()=>e._optionalLabel(t("editor.hbs.margin"))}
                                @value-changed=${t=>{e._valueChanged({target:{configValue:"margin"},detail:{value:t.detail.value.margin}})}}
                            ></ha-form>
                            <ha-form
                                .hass=${e.hass}
                                .data=${{width_desktop:e._config?.width_desktop||"540px"}}
                                .schema=${[{name:"width_desktop",selector:{text:{}}}]}
                                .computeLabel=${()=>e._optionalLabel(t("editor.hbs.width_desktop"))}
                                @value-changed=${t=>{e._valueChanged({target:{configValue:"width_desktop"},detail:{value:t.detail.value.width_desktop}})}}
                            ></ha-form>
                            <bubble-formfield>
                                <ha-switch
                                    aria-label="${e._optionalLabel(t("editor.hbs.rise_animation"))}"
                                    .checked=${void 0===e._config?.rise_animation||e._config?.rise_animation}
                                    .configValue="${"rise_animation"}"
                                    @change=${e._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">${e._optionalLabel(t("editor.hbs.rise_animation"))}</label>
                                </div>
                            </bubble-formfield>
                            <bubble-formfield>
                                <ha-switch
                                    aria-label="${e._optionalLabel(t("editor.hbs.highlight_current"))}"
                                    .checked=${e._config?.highlight_current_view||!1}
                                    .configValue="${"highlight_current_view"}"
                                    @change=${e._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">${e._optionalLabel(t("editor.hbs.highlight_current"))}</label>
                                </div>
                            </bubble-formfield>
                            <bubble-formfield>
                                <ha-switch
                                    aria-label="${e._optionalLabel(t("editor.hbs.hide_gradient"))}"
                                    .checked=${e._config.hide_gradient||!1}
                                    .configValue="${"hide_gradient"}"
                                    @change=${e._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">${e._optionalLabel(t("editor.hbs.hide_gradient"))}</label>
                                </div>
                            </bubble-formfield>
                        </div>
                    </ha-expansion-panel>
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    ${t("editor.hbs.info_title")}
                </h4>
                <div class="content">
                    <p>${t("editor.hbs.info_body")}</p>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}(this);case"cover":return function(e){const t=(0,r.Ay)(e.hass);let o=e._config.button_action||"";const a=e._config?.entity,n=a?e.hass?.states?.[a]:null,s=!!((n?.attributes?.supported_features??0)&(b.JF.OPEN_TILT|b.JF.CLOSE_TILT|b.JF.SET_TILT_POSITION)),l=(0,b.Li)(n),d=(0,b.VO)(n,e._config).any;return i.qy`
        <div class="card-config">
            ${e.makeDropdown(t("editor.common.card_type"),"card_type",e.cardTypeList)}
            <ha-form
                .hass=${e.hass}
                .data=${e._config}
                .schema=${[{name:"entity",label:t("editor.common.entity"),selector:{entity:{domain:["cover"]}}}]}   
                .computeLabel=${e._computeLabelCallback}
                @value-changed=${e._valueChanged}
            ></ha-form>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  ${t("editor.common.card_settings")}
                </h4>
                <div class="content"> 
                    <ha-form
                        .hass=${e.hass}
                        .data=${{name:e._config?.name||""}}
                        .schema=${[{name:"name",selector:{text:{}}}]}
                        .computeLabel=${()=>e._optionalLabel(t("editor.common.name"))}
                        @value-changed=${t=>{e._valueChanged({target:{configValue:"name"},detail:{value:t.detail.value.name}})}}
                    ></ha-form>
                    ${e.makeDropdown(e._optionalLabel(t("editor.cover.open_icon")),"icon_open")}
                    ${e.makeDropdown(e._optionalLabel(t("editor.cover.closed_icon")),"icon_close")}
                    ${e.makeShowState()}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:window-shutter-cog"></ha-icon>
                  ${t("editor.cover.custom_services")}
                </h4>
                <div class="content"> 
                    <ha-form
                        .hass=${e.hass}
                        .data=${{open_service:e._config?.open_service||"cover.open_cover"}}
                        .schema=${[{name:"open_service",selector:{text:{}}}]}
                        .computeLabel=${()=>e._optionalLabel(t("editor.cover.open_service"))}
                        @value-changed=${t=>{e._valueChanged({target:{configValue:"open_service"},detail:{value:t.detail.value.open_service}})}}
                    ></ha-form>
                    <ha-form
                        .hass=${e.hass}
                        .data=${{stop_service:e._config?.stop_service||"cover.stop_cover"}}
                        .schema=${[{name:"stop_service",selector:{text:{}}}]}
                        .computeLabel=${()=>e._optionalLabel(t("editor.cover.stop_service"))}
                        @value-changed=${t=>{e._valueChanged({target:{configValue:"stop_service"},detail:{value:t.detail.value.stop_service}})}}
                    ></ha-form>
                    <ha-form
                        .hass=${e.hass}
                        .data=${{close_service:e._config?.close_service||"cover.close_cover"}}
                        .schema=${[{name:"close_service",selector:{text:{}}}]}
                        .computeLabel=${()=>e._optionalLabel(t("editor.cover.close_service"))}
                        @value-changed=${t=>{e._valueChanged({target:{configValue:"close_service"},detail:{value:t.detail.value.close_service}})}}
                    ></ha-form>
                </div>
            </ha-expansion-panel>
            ${s?i.qy`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:swap-horizontal"></ha-icon>
                  ${t("editor.cover.tilt_title")}
                </h4>
                <div class="content">
                    ${l?i.qy`
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            ${t("editor.cover.tilt_position_only_title")}
                        </h4>
                        <div class="content">
                            <p>${t("editor.cover.tilt_position_only_body")}</p>
                        </div>
                    </div>
                    `:""}
                    ${e.makeDropdown(t("editor.cover.tilt_position"),"tilt_buttons",[{value:"top",label:t("editor.common.top")+t("editor.common.default_suffix")},{value:"bottom",label:t("editor.common.bottom")},{value:"left",label:t("editor.common.left")},{value:"right",label:t("editor.common.right")},{value:"hidden",label:t("editor.common.hidden")}],!d)}
                    <ha-form
                        .hass=${e.hass}
                        .data=${{open_tilt_service:e._config?.open_tilt_service||"cover.open_cover_tilt"}}
                        .schema=${[{name:"open_tilt_service",selector:{text:{}}}]}
                        .computeLabel=${()=>e._optionalLabel(t("editor.cover.open_tilt_service"))}
                        @value-changed=${t=>{e._valueChanged({target:{configValue:"open_tilt_service"},detail:{value:t.detail.value.open_tilt_service}})}}
                    ></ha-form>

                    <ha-form
                        .hass=${e.hass}
                        .data=${{close_tilt_service:e._config?.close_tilt_service||"cover.close_cover_tilt"}}
                        .schema=${[{name:"close_tilt_service",selector:{text:{}}}]}
                        .computeLabel=${()=>e._optionalLabel(t("editor.cover.close_tilt_service"))}
                        @value-changed=${t=>{e._valueChanged({target:{configValue:"close_tilt_service"},detail:{value:t.detail.value.close_tilt_service}})}}
                    ></ha-form>
                </div>
            </ha-expansion-panel>
            `:""}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  ${t("editor.actions.on_icon")}
                </h4>
                <div class="content">
                    ${e.makeActionPanel("tap")}
                    ${e.makeActionPanel("double_tap")}
                    ${e.makeActionPanel("hold")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                ${t("editor.actions.on_card")}
                </h4>
                <div class="content">
                    ${e.makeActionPanel("tap",o,"none","button_action")}
                    ${e.makeActionPanel("double_tap",o,"none","button_action")}
                    ${e.makeActionPanel("hold",o,"none","button_action")}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  ${t("editor.common.styling_layout_options")}
                </h4>
                <div class="content"> 
                    ${e.makeLayoutPanel()}
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:palette"></ha-icon>
                          ${t("editor.cover.styling_title")}
                        </h4>
                        <div class="content"> 
                            ${e.makeDropdown(e._optionalLabel(t("editor.cover.arrow_down_icon")),"icon_down")}
                            ${e.makeDropdown(e._optionalLabel(t("editor.cover.arrow_up_icon")),"icon_up")}
                        </div>
                    </ha-expansion-panel>
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    ${t("editor.cover.info_title")}
                </h4>
                <div class="content">
                    <p>${t("editor.cover.info_body")}</p>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}(this);case"media-player":return function(e){const t=(0,r.Ay)(e.hass);let o=e._config.button_action||"";return i.qy`
        <div class="card-config">
            ${e.makeDropdown(t("editor.common.card_type"),"card_type",e.cardTypeList)}
            <ha-form
                .hass=${e.hass}
                .data=${e._config}
                .schema=${[{name:"entity",label:t("editor.common.entity"),selector:{entity:{domain:["media_player"]}}}]}   
                .computeLabel=${e._computeLabelCallback}
                @value-changed=${e._valueChanged}
            ></ha-form>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  ${t("editor.common.card_settings")}
                </h4>
                <div class="content"> 
                    <ha-form
                        .hass=${e.hass}
                        .data=${{name:e._config?.name||""}}
                        .schema=${[{name:"name",selector:{text:{}}}]}
                        .computeLabel=${()=>e._optionalLabel(t("editor.common.name"))}
                        @value-changed=${t=>{e._valueChanged({target:{configValue:"name"},detail:{value:t.detail.value.name}})}}
                    ></ha-form>
                    ${e.makeDropdown(e._optionalLabel(t("editor.common.icon")),"icon")}
                    ${e.makeShowState()}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:tune-variant"></ha-icon>
                ${t("editor.media_player.settings_title")}
                </h4>
                <div class="content">
                    <ha-form
                        .hass=${e.hass}
                        .data=${e._config}
                        .schema=${[{type:"grid",flatten:!0,schema:[{name:"min_volume",label:t("editor.media_player.min_volume"),selector:{number:{step:"any"}}},{name:"max_volume",label:t("editor.media_player.max_volume"),selector:{number:{step:"any"}}}]}]}   
                        .computeLabel=${e._computeLabelCallback}
                        @value-changed=${e._valueChanged}
                    ></ha-form>
                    <bubble-formfield>
                        <ha-switch
                            aria-label="${e._optionalLabel(t("editor.media_player.hide_play_pause"))}"
                            .checked=${e._config.hide?.play_pause_button||!1}
                            .configValue="${"hide.play_pause_button"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${e._optionalLabel(t("editor.media_player.hide_play_pause"))}</label> 
                        </div>
                    </bubble-formfield>
                    <bubble-formfield>
                        <ha-switch
                            aria-label="${e._optionalLabel(t("editor.media_player.hide_volume"))}"
                            .checked=${e._config.hide?.volume_button||!1}
                            .configValue="${"hide.volume_button"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${e._optionalLabel(t("editor.media_player.hide_volume"))}</label>
                        </div>
                    </bubble-formfield>
                    <bubble-formfield>
                        <ha-switch
                            aria-label="${e._optionalLabel(t("editor.media_player.hide_next"))}"
                            .checked=${e._config.hide?.next_button||!1}
                            .configValue="${"hide.next_button"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${e._optionalLabel(t("editor.media_player.hide_next"))}</label>
                        </div>
                    </bubble-formfield>
                    <bubble-formfield>
                        <ha-switch
                            aria-label="${e._optionalLabel(t("editor.media_player.hide_previous"))}"
                            .checked=${e._config.hide?.previous_button||!1}
                            .configValue="${"hide.previous_button"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${e._optionalLabel(t("editor.media_player.hide_previous"))}</label>
                        </div>
                    </bubble-formfield>
                    <bubble-formfield>
                        <ha-switch
                            aria-label="${e._optionalLabel(t("editor.media_player.hide_power"))}"
                            .checked=${e._config.hide?.power_button}
                            .configValue="${"hide.power_button"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${e._optionalLabel(t("editor.media_player.hide_power"))}</label>
                        </div>
                    </bubble-formfield>
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            ${t("editor.media_player.behavior_title")}
                        </h4>
                        <div class="content">
                            <p>${t("editor.media_player.behavior_body")}</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  ${t("editor.actions.on_icon")}
                </h4>
                <div class="content">
                    ${e.makeActionPanel("tap")}
                    ${e.makeActionPanel("double_tap")}
                    ${e.makeActionPanel("hold")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                ${t("editor.actions.on_card")}
                </h4>
                <div class="content">
                    ${e.makeActionPanel("tap",o,"none","button_action")}
                    ${e.makeActionPanel("double_tap",o,"none","button_action")}
                    ${e.makeActionPanel("hold",o,"none","button_action")}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  ${t("editor.common.styling_layout_options")}
                </h4>
                <div class="content">
                    ${e.makeLayoutPanel()}
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:palette"></ha-icon>
                          ${t("editor.media_player.styling_title")}
                        </h4>
                        <div class="content"> 
                            <bubble-formfield>
                                <ha-switch
                                    aria-label="${e._optionalLabel(t("editor.media_player.blurred_cover"))}"
                                    .checked=${e._config.cover_background??!1}
                                    .configValue="${"cover_background"}"
                                    @change=${e._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">${e._optionalLabel(t("editor.media_player.blurred_cover"))}</label> 
                                </div>
                            </bubble-formfield>
                        </div>
                    </ha-expansion-panel>
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    ${t("editor.media_player.info_title")}
                </h4>
                <div class="content">
                    <p>${t("editor.media_player.info_body")}</p>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}(this);case"empty-column":return function(e){const t=(0,r.Ay)(e.hass);return i.qy`
        <div class="card-config">
            ${e.makeDropdown(t("editor.common.card_type"),"card_type",e.cardTypeList)}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  ${t("editor.common.styling_layout_options")}
                </h4>
                <div class="content">
                    ${e.makeLayoutPanel()}
                </div>
            </ha-expansion-panel>
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    ${t("editor.empty_column.info_title")}
                </h4>
                <div class="content">
                    <p>${t("editor.empty_column.info_body")}</p>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}(this);case"select":return function(e){const t=(0,r.Ay)(e.hass),o=e._config.entity,a=o?.startsWith("input_select")||o?.startsWith("select")||e._config.select_attribute,n=e.hass.states[o]?.attributes,s=e._selectable_attributes.some(e=>n?.[e]),l=Object.keys(e.hass.states[o]?.attributes||{}).map(t=>{let i=e.hass.states[o];return{label:e.hass.formatEntityAttributeName(i,t),value:t}}).filter(t=>e._selectable_attributes.includes(t.value));let d=e._config.button_action||"";return i.qy`
        <div class="card-config">
            ${e.makeDropdown(t("editor.common.card_type"),"card_type",e.cardTypeList)}
            <ha-form
                .hass=${e.inputSelectList}
                .data=${e._config}
                .schema=${[{name:"entity",label:t("editor.common.entity"),selector:{entity:{}}}]}   
                .computeLabel=${e._computeLabelCallback}
                @value-changed=${e._valueChanged}
            ></ha-form>
            ${s?i.qy`
                <ha-form
                    .hass=${e.hass}
                    .data=${{select_attribute:e._config.select_attribute}}
                    .schema=${[{name:"select_attribute",selector:{select:{options:l,mode:"dropdown"}}}]}
                    .computeLabel=${()=>t("editor.select.select_menu")}
                    @value-changed=${t=>{e._valueChanged({target:{configValue:"select_attribute"},detail:{value:t.detail.value.select_attribute}})}}
                ></ha-form>
            `:""}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  ${t("editor.common.card_settings")}
                </h4>
                <div class="content">                   
                    <ha-form
                        .hass=${e.hass}
                        .data=${{name:e._config?.name||""}}
                        .schema=${[{name:"name",selector:{text:{}}}]}
                        .computeLabel=${()=>e._optionalLabel(t("editor.common.name"))}
                        @value-changed=${t=>{e._valueChanged({target:{configValue:"name"},detail:{value:t.detail.value.name}})}}
                    ></ha-form>
                    ${e.makeDropdown(e._optionalLabel(t("editor.common.icon")),"icon")}
                    ${e.makeShowState()}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  ${t("editor.actions.on_icon")}
                </h4>
                <div class="content">
                    ${e.makeActionPanel("tap")}
                    ${e.makeActionPanel("double_tap")}
                    ${e.makeActionPanel("hold")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                  ${t("editor.actions.on_button")}
                </h4>
                <div class="content">
                    <div style="${a?"opacity: 0.5; pointer-events: none;":""}">
                        ${e.makeActionPanel("tap",d,"none","button_action")}
                    </div>
                    ${e.makeActionPanel("double_tap",d,"none","button_action")}
                    ${e.makeActionPanel("hold",d,"none","button_action")}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  ${t("editor.common.styling_layout_options")}
                </h4>
                <div class="content">
                    ${e.makeLayoutPanel()}
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    ${t("editor.select.info_title")}
                </h4>
                <div class="content">
                    <p>${t("editor.select.info_body")}</p>
                    <ul class="icon-list">
                        <li><ha-icon icon="mdi:format-list-bulleted"></ha-icon>${t("editor.select.supported_input_select")}</li>
                        <li><ha-icon icon="mdi:form-dropdown"></ha-icon>${t("editor.select.supported_select")}</li>
                        <li><ha-icon icon="mdi:playlist-music"></ha-icon>${t("editor.select.supported_media")}&nbsp;<b>${t("editor.select.attr_source_list")}</b></li>
                        <li><ha-icon icon="mdi:speaker"></ha-icon>${t("editor.select.supported_media")}&nbsp;<b>${t("editor.select.attr_sound_mode_list")}</b></li>
                        <li><ha-icon icon="mdi:thermostat"></ha-icon>${t("editor.select.supported_climate")}&nbsp;<b>${t("editor.select.attr_hvac_modes")}</b></li>
                        <li><ha-icon icon="mdi:fan"></ha-icon>${t("editor.select.supported_climate_fan")}&nbsp;<b>${t("editor.select.attr_fan_modes")}</b></li>
                        <li><ha-icon icon="mdi:air-conditioner"></ha-icon>${t("editor.select.supported_climate")}&nbsp;<b>${t("editor.select.attr_swing_modes")}</b></li>
                        <li><ha-icon icon="mdi:thermostat-auto"></ha-icon>${t("editor.select.supported_climate")}&nbsp;<b>${t("editor.select.attr_preset_modes")}</b></li>
                        <li><ha-icon icon="mdi:lightbulb-group"></ha-icon>${t("editor.select.supported_light")}&nbsp;<b>${t("editor.select.attr_effect_list")}</b></li>
                    </ul>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}(this);case"climate":return function(e){const t=(0,r.Ay)(e.hass);let o=e._config.button_action||"";const a=(0,m.GI)(e._config.entity);return"climate"===e._config.card_type&&function(e,t,o){void 0===e._config.sub_button&&e._config.entity&&e.hass.states[e._config.entity]?.attributes?.[o.modesAttribute]&&(e._config.sub_button={main:[{name:t(o.menuNameKey),select_attribute:o.modesAttribute,state_background:!1,show_arrow:!1}]},e._firstRowsComputation=!0)}(e,t,a),i.qy`
        <div class="card-config">
        ${e.makeDropdown(t("editor.common.card_type"),"card_type",e.cardTypeList)}
        <ha-form
            .hass=${e.hass}
            .data=${e._config}
            .schema=${[{name:"entity",label:t("editor.common.entity"),selector:{entity:{domain:m.xE}}}]}   
            .computeLabel=${e._computeLabelCallback}
            @value-changed=${e._valueChanged}
        ></ha-form>
                                <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  ${t("editor.common.card_settings")}
                </h4>
                <div class="content">     
                    <ha-form
                        .hass=${e.hass}
                        .data=${{name:e._config?.name||""}}
                        .schema=${[{name:"name",selector:{text:{}}}]}
                        .computeLabel=${()=>e._optionalLabel(t("editor.common.name"))}
                        @value-changed=${t=>{e._valueChanged({target:{configValue:"name"},detail:{value:t.detail.value.name}})}}
                    ></ha-form>
                    ${e.makeDropdown(e._optionalLabel(t("editor.common.icon")),"icon")}
                    ${e.makeShowState()}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:tune-variant"></ha-icon>
                ${t("editor.climate.settings_title")}
                </h4>
                <div class="content">
                    <ha-form
                        .hass=${e.hass}
                        .data=${e._config}
                        .schema=${[{type:"grid",flatten:!0,schema:[{name:"min_temp",label:t(a.minLabelKey),selector:{number:{step:"any"}}},{name:"max_temp",label:t(a.maxLabelKey),selector:{number:{step:"any"}}},{name:"step",label:t("editor.climate.step"),selector:{number:{step:"any"}}}]}]}   
                        .computeLabel=${e._computeLabelCallback}
                        .disabled="${"name"===e._config.button_type}"
                        @value-changed=${e._valueChanged}
                    ></ha-form>
                    ${e.hass.states[e._config.entity]?.attributes?.target_temp_low?i.qy`
                        <bubble-formfield>
                            <ha-switch
                                aria-label="${e._optionalLabel(t("editor.climate.hide_target_low"))}"
                                .checked=${e._config.hide_target_temp_low}
                                .configValue="${"hide_target_temp_low"}"
                                @change=${e._valueChanged}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">${e._optionalLabel(t("editor.climate.hide_target_low"))}</label> 
                            </div>
                        </bubble-formfield>
                    `:""}
                    ${e.hass.states[e._config.entity]?.attributes?.target_temp_high?i.qy`
                        <bubble-formfield>
                            <ha-switch
                                aria-label="${e._optionalLabel(t("editor.climate.hide_target_high"))}"
                                .checked=${e._config.hide_target_temp_high}
                                .configValue="${"hide_target_temp_high"}"
                                @change=${e._valueChanged}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">${e._optionalLabel(t("editor.climate.hide_target_high"))}</label> 
                            </div>
                        </bubble-formfield>
                    `:""}
                    <bubble-formfield>
                        <ha-switch
                            aria-label="${e._optionalLabel(t(a.hideLabelKey))}"
                            .checked=${e._config.hide_temperature}
                            .configValue="${"hide_temperature"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${e._optionalLabel(t(a.hideLabelKey))}</label> 
                        </div>
                    </bubble-formfield>
                    <bubble-formfield>
                        <ha-switch
                            aria-label="${e._optionalLabel(t("editor.climate.constant_background"))}"
                            .checked=${!0===e._config.state_color}
                            .configValue="${"state_color"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">${e._optionalLabel(t("editor.climate.constant_background"))}</label> 
                        </div>
                    </bubble-formfield>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  ${t("editor.actions.on_icon")}
                </h4>
                <div class="content">
                    ${e.makeActionPanel("tap")}
                    ${e.makeActionPanel("double_tap")}
                    ${e.makeActionPanel("hold")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                ${t("editor.actions.on_card")}
                </h4>
                <div class="content">
                    ${e.makeActionPanel("tap",o,"none","button_action")}
                    ${e.makeActionPanel("double_tap",o,"none","button_action")}
                    ${e.makeActionPanel("hold",o,"none","button_action")}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  ${t("editor.common.styling_layout_options")}
                </h4>
                <div class="content">
                    ${e.makeLayoutPanel()}
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    ${t("editor.climate.info_title")}
                </h4>
                <div class="content">
                    <p>${t("editor.climate.info_body")}</p>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}(this);case"calendar":return function(e){const t=(0,r.Ay)(e.hass);return e._config.event_action||(e._config.event_action={tap_action:{action:"more-info"},double_tap_action:{action:"none"},hold_action:{action:"none"}}),i.qy`
        <div class="card-config">
            ${e.makeDropdown(t("editor.common.card_type"),"card_type",e.cardTypeList)}
            <ha-form
                .hass=${e.hass}
                .data=${e._config}
                .schema=${[{name:"entities",title:t("editor.calendar.entities"),selector:{calendar_entity:{}}}]}   
                .computeLabel=${e._computeLabelCallback}
                @value-changed=${e._valueChanged}
            ></ha-form>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  ${t("editor.calendar.settings")}
                </h4>
                <div class="content">
                    <ha-form
                      .hass=${e.hass}
                      .data=${e._config}
                      .schema=${[{name:"days",label:t("editor.calendar.days"),title:t("editor.calendar.days"),selector:{number:{step:1,min:1,max:7}}},{name:"limit",label:t("editor.calendar.limit"),title:t("editor.calendar.limit"),selector:{number:{step:1,min:1}}},{name:"show_end",label:t("editor.calendar.show_end"),title:t("editor.calendar.show_end"),selector:{boolean:{}}},{name:"show_progress",label:t("editor.calendar.show_progress"),title:t("editor.calendar.show_progress"),selector:{boolean:{}}},{name:"show_started_events",label:t("editor.calendar.show_started_events"),title:t("editor.calendar.show_started_events"),selector:{boolean:{}},default:!0},{name:"show_place",label:t("editor.calendar.show_place"),title:t("editor.calendar.show_place"),selector:{boolean:{}}},{name:"scrolling_effect",label:t("editor.calendar.text_scrolling"),title:t("editor.calendar.text_scrolling"),selector:{boolean:{}},default:!0}]}   
                      .computeLabel=${e._computeLabelCallback}
                      @value-changed=${e._valueChanged}
                    ></ha-form>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  ${t("editor.actions.on_day")}
                </h4>
                <div class="content">
                    ${e.makeActionPanel("tap",e._config,"none")}
                    ${e.makeActionPanel("double_tap")}
                    ${e.makeActionPanel("hold")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                  ${t("editor.actions.on_event")}
                </h4>
                <div class="content">
                    ${e.makeActionPanel("tap",e._config.event_action,"none","event_action")}
                    ${e.makeActionPanel("double_tap",e._config.event_action,"none","event_action")}
                    ${e.makeActionPanel("hold",e._config.event_action,"none","event_action")}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  ${t("editor.common.styling_options")}
                </h4>
                <div class="content">
                    ${e.makeLayoutOptions()}
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    ${t("editor.calendar.info_title")}
                </h4>
                <div class="content">
                    <p>${t("editor.calendar.info_body")}</p>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}(this);case void 0:return i.qy`
                    <div class="card-config">
                        <div class="bubble-info">
                            <h4 class="bubble-section-title">
                                <ha-icon icon="mdi:information-outline"></ha-icon>
                                ${e("editor.home.add_type_first")}
                            </h4>
                        </div>
                        ${this.makeDropdown(e("editor.common.card_type"),"card_type",t)}
                        <img style="width: 100%; height: auto; border-radius: 24px;" src="https://raw.githubusercontent.com/Clooos/Bubble-Card/main/.github/bubble-card.gif">
                        
                        <div class="bubble-info-container">
                            <div class="bubble-info">
                                <h4 class="bubble-section-title">
                                    <ha-icon icon="mdi:tag-text"></ha-icon>
                                    Bubble Card ${a.r}
                                </h4>
                                <div class="content">
                                    <p>${(0,y.T5)(e("editor.home.changelog_intro"),{link:i.qy`<a href="https://github.com/Clooos/Bubble-Card/releases/tag/${a.r}" target="_blank" rel="noopener noreferrer"><b>${e("editor.home.here")}</b></a>`})}</p>
                                </div>
                            </div>

                            <div class="bubble-info">
                                <h4 class="bubble-section-title">
                                    <ha-icon icon="mdi:help-circle-outline"></ha-icon>
                                    ${e("editor.home.resources_title")}
                                </h4>
                                <div class="content">
                                    <p>${e("editor.home.resources_body")}</p>
                                    <div class="bubble-badges">
                                        <a href="https://github.com/Clooos/Bubble-Card" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:github"></ha-icon>
                                            <span>${e("editor.home.badge_docs")}</span>
                                        </a>
                                        <a href="https://github.com/Clooos/Bubble-Card/issues" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:bug"></ha-icon>
                                            <span>${e("editor.home.badge_issues")}</span>
                                        </a>
                                        <a href="https://github.com/Clooos/Bubble-Card/discussions/categories/questions-about-config-custom-styles-and-templates" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:help"></ha-icon>
                                            <span>${e("editor.home.badge_config_help")}</span>
                                        </a>
                                        <a href="https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:wrench"></ha-icon>
                                            <span>${e("editor.home.badge_examples")}</span>
                                        </a>
                                        <a href="https://www.youtube.com/@cloooos" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:youtube"></ha-icon>
                                            <span>YouTube</span>
                                        </a>
                                        <a href="https://www.reddit.com/r/BubbleCard/" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:reddit"></ha-icon>
                                            <span>r/BubbleCard</span>
                                        </a>
                                        <a href="https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:home-assistant"></ha-icon>
                                            <span>${e("editor.home.badge_forum")}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bubble-info">
                                <h4 class="bubble-section-title">
                                    <ha-icon icon="mdi:heart-outline"></ha-icon>
                                    ${e("editor.home.support_title")}
                                </h4>
                                <div class="content">
                                    <p>${e("editor.home.support_body1")}</p>
                                    <p>${e("editor.home.support_body2")}</p>
                                    <div class="bubble-badges">
                                        <a href="https://www.buymeacoffee.com/clooos" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <div class="bmc-icon">
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z"/>
                                                </svg>
                                            </div>
                                            <span>${e("editor.home.badge_beer")}</span>
                                        </a>
                                        <a href="https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR" target="_blank" rel="noopener noreferrer" class="bubble-badge support-badge">
                                            <div class="paypal-icon">
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.016 19.198h-4.2a.562.562 0 0 1-.555-.65L5.093.584A.692.692 0 0 1 5.776 0h7.222c3.417 0 5.904 2.488 5.846 5.5-.006.25-.027.5-.066.747A6.794 6.794 0 0 1 12.071 12H8.743a.69.69 0 0 0-.682.583l-.325 2.056-.013.083-.692 4.39-.015.087zM19.79 6.142c-.01.087-.01.175-.023.261a7.76 7.76 0 0 1-7.695 6.598H9.007l-.283 1.795-.013.083-.692 4.39-.134.843-.014.088H6.86l-.497 3.15a.562.562 0 0 0 .555.65h3.612c.34 0 .63-.249.683-.585l.952-6.031a.692.692 0 0 1 .683-.584h2.126a6.793 6.793 0 0 0 6.707-5.752c.306-1.95-.466-3.744-1.89-4.906z"/>
                                                </svg>
                                            </div>
                                            <span>PayPal</span>
                                        </a>
                                        <a href="https://www.patreon.com/Clooos" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <div class="patreon-icon">
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.957 7.21c-.004-3.064-2.391-5.576-5.191-6.482-3.478-1.125-8.064-.962-11.384.604C2.357 3.231 1.093 7.391 1.046 11.54c-.039 3.411.302 12.396 5.369 12.46 3.765.047 4.326-4.804 6.068-7.141 1.24-1.662 2.836-2.132 4.801-2.618 3.376-.836 5.678-3.501 5.673-7.031Z"/>
                                                </svg>
                                            </div>
                                            <span>Patreon</span>
                                        </a>
                                    </div>
                                    <div class="creator-message">
                                        <a href="https://www.reddit.com/user/Clooooos/" target="_blank" rel="noopener noreferrer">
                                            <img src="https://avatars.githubusercontent.com/u/36499953" alt="Clooos" class="creator-avatar">
                                        </a>
                                        <p class="bubble-thank-you">${e("editor.home.thanks")}</p>
                                    </div>
                                </div>
                            </div>
                            ${this.makeVersion()}
                        </div>
                    </div>
                `}}makeLayoutOptions(){const e=(0,r.Ay)(this._hassRender),t=window.isSectionView?"large":"normal",o="separator"===this._config.card_type?"0.8":"1",a="pop-up"!==this._config.card_type&&(this._config.card_layout?.includes("large")||window.isSectionView&&!this._config.card_layout);return i.qy`
            ${this._renderConditionalContent(this._config.grid_options?.rows,i.qy`
                <div class="bubble-info warning">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:alert-outline"></ha-icon>
                        ${e("editor.layout.rows_set_title")}
                    </h4>
                    <div class="content">
                        <p>${e("editor.layout.rows_set_body")}</p>
                    </div>
                </div>
            `)}
            ${this._renderConditionalContent(a,i.qy`
                <ha-form
                    .hass=${this._hassRender}
                    .data=${{rows:this._config.rows??this._config.grid_options?.rows??o??""}}
                    .schema=${[{name:"rows",selector:{text:{type:"number"}},options:{min:0,step:.1}}]}
                    .disabled=${this._config.grid_options?.rows}
                    .computeLabel=${()=>e("editor.layout.rows")}
                    @value-changed=${e=>{const t=e.detail.value.rows;this._valueChanged({target:{configValue:"rows"},detail:{value:t}})}}
                ></ha-form>
                <br>
            `)}
            <div class="bubble-info warning">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-outline"></ha-icon>
                    ${e("editor.layout.deprecated_title")}
                </h4>
                <div class="content">
                    <p><b>${e("editor.layout.deprecated_bold")}</b> ${e("editor.layout.deprecated_body")}</p>
                </div>
            </div>
            <ha-form
                .hass=${this._hassRender}
                .data=${{card_layout:this._config.card_layout||t}}
                .schema=${[{name:"card_layout",selector:{select:{options:[{label:e("editor.layout.normal"),value:"normal"},{label:e("editor.layout.large"),value:"large"},{label:e("editor.layout.large_2_rows"),value:"large-2-rows"},{label:e("editor.layout.large_grid"),value:"large-sub-buttons-grid"}],mode:"dropdown"}}}]}
                .computeLabel=${()=>"pop-up"===this._config.card_type?e("editor.layout.header_card_layout"):e("editor.layout.card_layout")}
                @value-changed=${e=>{this._valueChanged({target:{configValue:"card_layout"},detail:{value:e.detail.value.card_layout}})}}
            ></ha-form>
        `}makeLayoutPanel(){const e=(0,r.Ay)(this._hassRender);return i.qy`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:view-grid"></ha-icon>
                    ${e("editor.common.layout")}
                </h4>
                <div class="content">
                    ${this.makeLayoutOptions()}
                </div>
            </ha-expansion-panel>
        `}makeShowState(e=this._config,t="",o=!1,a){const n="pop-up"===this._config?.card_type&&(0,p.hP)(this._config)&&!o,s=e?.entity??this._config.entity??"",l="name"===(0,p.a9)(this._config),d=!s,c=s?.startsWith("input_select")||s?.startsWith("select")||e.select_attribute,u="sub_button"===o||"string"==typeof o&&o.startsWith("sub_button"),h=u&&("select"===e?.sub_button_type||!e?.sub_button_type&&c),b=u||!l&&!d,m=u?"sub_button":"card",g=(0,ae.OU)(e,m,s),_=e?.state_content??g??void 0,f=(0,r.Ay)(this._hassRender);return i.qy`

            <bubble-formfield>
                <ha-switch
                    aria-label="${f("editor.show.scrolling_effect")}"
                    .checked=${e?.scrolling_effect??!0}
                    .configValue="${t+"scrolling_effect"}"
                    @change="${o?e=>this._arrayValueChange(a,{scrolling_effect:e.target.checked},o):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">${f("editor.show.scrolling_effect")}</label>
                </div>
            </bubble-formfield>
            ${this._renderConditionalContent(u,i.qy`
                <bubble-formfield>
                    <ha-switch
                        aria-label="${f("editor.show.background")}"
                        .checked=${e?.show_background??!0}
                        @change="${e=>this._arrayValueChange(a,{show_background:e.target.checked},o)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">${f("editor.show.background")}</label>
                    </div>
                </bubble-formfield>
            `)}
            ${this._renderConditionalContent(u&&(e?.show_background??!0),i.qy`
                <bubble-formfield>
                    <ha-switch
                        aria-label="${f("editor.show.state_background")}"
                        .checked=${e?.state_background??!0}
                        @change="${e=>this._arrayValueChange(a,{state_background:e.target.checked},o)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">${f("editor.show.state_background")}</label>
                    </div>
                </bubble-formfield>
            `)}
            ${this._renderConditionalContent(u&&(e?.state_background??!0)&&s.startsWith("light"),i.qy`
                <bubble-formfield>
                    <ha-switch
                        aria-label="${f("editor.show.light_background")}"
                        .checked=${e?.light_background??!0}
                        @change="${e=>this._arrayValueChange(a,{light_background:e.target.checked},o)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">${f("editor.show.light_background")}</label>
                    </div>
                </bubble-formfield>
            `)}
            ${this._renderConditionalContent(!u&&s.startsWith("light"),i.qy`
                <bubble-formfield>
                    <ha-switch
                        aria-label="${f("editor.show.accent_color")}"
                        .checked=${e?.use_accent_color??!1}
                        .configValue="${t+"use_accent_color"}"
                        .disabled=${n}
                        @change="${this._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">${f("editor.show.accent_color")}</label>
                    </div>
                </bubble-formfield>
            `)}
            <bubble-formfield>
                <ha-switch
                    aria-label="${f("editor.show.icon")}"
                    .disabled=${n}
                    .checked=${!n&&(e?.show_icon??!0)}
                    .configValue="${t+"show_icon"}"
                    @change="${o?e=>this._arrayValueChange(a,{show_icon:e.target.checked},o):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">${f("editor.show.icon")}</label>
                </div>
            </bubble-formfield>
            <bubble-formfield>
                <ha-switch
                    aria-label="${f("editor.show.force_icon")}"
                    .checked=${e?.force_icon??!1}
                    .configValue="${t+"force_icon"}"
                    .disabled="${n||(l||d)&&!u}"
                    @change="${o?e=>this._arrayValueChange(a,{force_icon:e.target.checked},o):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">${f("editor.show.force_icon")}</label>
                </div>
            </bubble-formfield>
            <bubble-formfield>
                <ha-switch
                    aria-label="${f("editor.show.name")}"
                    .checked=${e?.show_name??!u}
                    .configValue="${t+"show_name"}"
                    @change="${o?e=>this._arrayValueChange(a,{show_name:e.target.checked},o):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">${f("editor.show.name")}</label>
                </div>
            </bubble-formfield>
            ${this._renderConditionalContent(b,i.qy`
                <ha-form
                    .hass=${this._hassRender}
                    .data=${{state_content:_}}
                    .schema=${[{name:"state_content",selector:{ui_state_content:{entity_id:s||void 0}}}]}
                    .computeLabel=${()=>f("editor.show.state_content")}
                    @value-changed=${e=>{const i=e.detail?.value?.state_content,n=null==i||Array.isArray(i)&&0===i.length?g?[]:void 0:i;o?this._arrayValueChange(a,{state_content:n},o):this._valueChanged({target:{configValue:t+"state_content"},detail:{value:n}})}}
                ></ha-form>
            `)}
            ${this._renderConditionalContent(h,i.qy`
                <bubble-formfield>
                    <ha-switch
                        aria-label="${f("editor.show.arrow")}"
                        .checked=${e?.show_arrow??!0}
                        .configValue="${t+"show_arrow"}"
                        @change="${o?e=>this._arrayValueChange(a,{show_arrow:e.target.checked},o):this._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">${f("editor.show.arrow")}</label>
                    </div>
                </bubble-formfield>
            `)}
        `}makeDropdown(e,t,o,a,n){if(!this._config)return i.qy``;const r=String(t??"").split(".").pop();if(r.includes("icon"))return i.qy`
                <div class="ha-icon-picker">
                    <ha-icon-picker
                        label="${e}"
                        .value="${this._config?.[t]||n}"
                        .configValue="${t}"
                        .disabled=${a}
                        item-value-path="icon"
                        item-label-path="icon"
                        @value-changed="${this._valueChanged}"
                    ></ha-icon-picker>
                </div>
            `;if("entity"===r||r.endsWith("_entity")){let o=[],n=[];switch(this._config?.card_type){case"button":default:break;case"cover":o=["cover"];break;case"climate":o=m.xE;break;case"media-player":o=["media_player"];break;case"select":o=["input_select","select"],this._config?.select_attribute&&(o=[])}return i.qy`
                <ha-entity-picker
                    label="${e}"
                    .hass="${this._hassRender}"
                    .value="${this._config?.[t]}"
                    .configValue="${t}"
                    .includeDomains="${o.length?o:void 0}"
                    .excludeDomains="${n.length?n:void 0}"
                    .disabled="${a}"
                    allow-custom-entity
                    @value-changed="${this._valueChanged}"
                ></ha-entity-picker>
            `}return i.qy`
                <ha-form
                    .hass=${this._hassRender}
                    .data=${{[t]:this._config?.[t]}}
                    .schema=${[{name:t,selector:{select:{options:o,mode:"dropdown"}}}]}
                    .disabled=${a}
                    .computeLabel=${()=>e}
                    @value-changed=${e=>{const o=e.detail.value[t];this._valueChanged({target:{configValue:t},detail:{value:o}})}}
                ></ha-form>
          `}makeTextField(e,t,o={}){const{type:a="text",disabled:n,min:r,max:s,step:l,inputMode:d,placeholder:c}=o,u={text:{}};return"number"===a&&(u.text={type:"number"}),i.qy`
            <ha-form
                .hass=${this._hassRender}
                .data=${{[t]:this._config[t]??""}}
                .schema=${[{name:t,selector:u,..."number"===a?{options:{min:r,max:s,step:l}}:{}}]}
                .disabled=${n}
                .computeLabel=${()=>e}
                @value-changed=${e=>{const o=e.detail.value[t];this._valueChanged({target:{configValue:t},detail:{value:o}})}}
            ></ha-form>
        `}_renderConditionalContent(e,t){return e?t:i.qy``}_optionalLabel(e){const t=(0,r.Ay)(this._hassRender)("editor.common.optional");return`${t.charAt(0).toUpperCase()}${t.slice(1)} - ${e}`}_renderNestedStandalonePopupWarning(){const e=(0,r.Ay)(this._hassRender);return i.qy`
            <div class="bubble-info warning">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-outline"></ha-icon>
                    ${e("editor.nested.title")}
                </h4>
                <div class="content">
                    <p>${e("editor.nested.body")}</p>
                </div>
            </div>
        `}static _actionPanelTypes={tap:{icon:"mdi:gesture-tap",configValue:"tap_action",labelKey:"editor.actions.tap"},double_tap:{icon:"mdi:gesture-double-tap",configValue:"double_tap_action",labelKey:"editor.actions.double_tap"},hold:{icon:"mdi:gesture-tap-hold",configValue:"hold_action",labelKey:"editor.actions.hold"},open:{icon:"mdi:gesture-tap",configValue:"open_action",labelKey:"editor.actions.open"},close:{icon:"mdi:gesture-tap",configValue:"close_action",labelKey:"editor.actions.close"}};static _legacyActionPanelLabels={"Tap action":"tap","Double tap action":"double_tap","Hold action":"hold","Open action":"open","Close action":"close"};makeActionPanel(e,t=this._config,o,a,n=this._config){const s=(0,r.Ay)(this._hassRender),l=le._actionPanelTypes[e]?e:le._legacyActionPanelLabels[e]??"tap",d=le._actionPanelTypes[l],c=d.icon,u=d.configValue,h=s(d.labelKey),b=a?`action_panel_${a}_${n}_${u}`:`action_panel_config_${u}`;let m;try{m=t[u]}catch{}const g=t===this._config;return o||(o=g&&"tap"===l?"name"!==(0,p.a9)(this._config)?"more-info":"none":g?"none":""),i.qy`
            <ha-expansion-panel 
                outlined
                @expanded-changed=${e=>{this._expandedPanelStates[b]=e.target.expanded,this.requestUpdate()}}
            >
                <h4 slot="header">
                    <ha-icon icon="${c}"></ha-icon>
                    ${h}
                </h4>
                <div class="content"> 
                    ${(0,y.DW)(this,b,!!this._expandedPanelStates[b],()=>i.qy`
                        <ha-form
                            .hass=${this._hassRender}
                            .data=${t}
                            .configValue="${(a?a+".":"")+(parseInt(n)==n?n+".":"")+u}" 
                            .schema=${[{name:u,label:h,selector:{ui_action:{default_action:o}}}]}  
                            .computeLabel=${this._computeLabelCallback}
                            @value-changed=${e=>this._ActionChanged(e,a,n)}
                        ></ha-form>
                        ${"call-service"===m?.action||"perform-action"===m?.action?i.qy`
                            <bubble-formfield>
                                <ha-switch
                                    aria-label="${s("editor.actions.use_default_entity")}"
                                    .configValue="${(a?a+".":"")+(parseInt(n)==n?n+".":"")+u+".default_entity"}"
                                    .checked=${"entity"===m?.target?.entity_id}
                                     @change=${this._updateActionsEntity}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">${s("editor.actions.use_default_entity")}</label>
                                </div>
                            </bubble-formfield>
                        `:""}
                    `)}
                </div>
            </ha-expansion-panel>
        `}makeSubButtonPanel(){return function(e){return void 0===e._expandedPanelStates&&(e._expandedPanelStates={}),void 0!==e._clipboardButton&&null!==e._clipboardButton||(e._clipboardButton=E()||null),function(e){const t=(0,r.Ay)(e.hass);if(Array.isArray(e._config.sub_button)){const t=(0,I.zD)(e._config.sub_button);try{e._config.sub_button=t}catch(o){e._config={...e._config,sub_button:t}}}else if(e._config.sub_button&&!(0,I.lc)(e._config.sub_button)){const t=(0,I.mg)(e._config);try{e._config.sub_button=t}catch(o){e._config={...e._config,sub_button:t}}}const o=(0,I.mg)(e._config);void 0===e._expandedPanelStates&&(e._expandedPanelStates={}),void 0!==e._clipboardButton&&null!==e._clipboardButton||(e._clipboardButton=E()||null);const a="sub-buttons"===e._config.card_type,n="pop-up"===e._config.card_type,s=["cover","media-player","climate"].includes(e._config.card_type),l=e._config.main_buttons_position||"default",d=e._config.main_buttons_alignment||"end",c="bottom"===l,u=e._config.main_buttons_full_width??!!c,p=Boolean(window.isSectionView),h=(e._config.card_layout||"").includes("large"),b=Object.prototype.hasOwnProperty.call(e._config,"card_layout"),m=b&&"normal"===e._config.card_layout,g=Array.isArray(o.bottom)&&o.bottom.some(e=>!!e),_=void 0!==e._config.rows&&null!==e._config.rows&&""!==e._config.rows,f=void 0!==e._config.grid_options?.rows&&null!==e._config.grid_options?.rows&&""!==e._config.grid_options?.rows,v=_&&!1===e._rowsAutoMode,$=f||v;return i.qy`
    <ha-expansion-panel outlined>
      <h4 slot="header">
        <ha-icon icon="mdi:shape-square-rounded-plus"></ha-icon>
        ${t("editor.sub_button.editor_title")}
      </h4>
      <div class="content">
        ${$?i.qy`
          <div class="bubble-info warning">
            <h4 class="bubble-section-title">
              <ha-icon icon="mdi:alert-outline"></ha-icon>
              ${t("editor.sub_button.rows_detected_title")}
            </h4>
            <div class="content">
              <p>${t("editor.sub_button.rows_detected_body")}</p>
              <button class="icon-button" @click="${e._removeRowsOverrideAndRecalculate}">
                <ha-icon icon="mdi:autorenew"></ha-icon>
                ${t("editor.sub_button.remove_override")}
              </button>
            </div>
          </div>
        `:""}
        ${s?i.qy`
          <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:circle-outline"></ha-icon>
              ${t("editor.sub_button.card_specific")}
            </h4>
            <div class="content">
              <ha-form
                  .hass=${e.hass}
                  .data=${{main_buttons_position:l}}
                  .schema=${[{name:"main_buttons_position",selector:{select:{options:[{label:t("editor.common.default"),value:"default"},{label:t("editor.sub_button.bottom_fixed"),value:"bottom"}],mode:"dropdown"}}}]}
                  .computeLabel=${()=>t("editor.sub_button.main_position")}
                  @value-changed=${t=>{e._valueChanged({target:{configValue:"main_buttons_position"},detail:{value:t.detail.value.main_buttons_position}})}}
              ></ha-form>
              ${e._renderConditionalContent(c,i.qy`
                  <bubble-formfield>
                      <ha-switch
                          aria-label="${t("editor.sub_button.full_width_actions")}"
                          .checked="${u}"
                          .configValue="${"main_buttons_full_width"}"
                          @change="${e._valueChanged}"
                      ></ha-switch>
                      <div class="mdc-form-field">
                          <label class="mdc-label">${t("editor.sub_button.full_width_actions")}</label>
                      </div>
                  </bubble-formfield>
                  ${e._renderConditionalContent(!u,i.qy`
                      <ha-form
                          .hass=${e.hass}
                          .data=${{main_buttons_alignment:d}}
                          .schema=${[{name:"main_buttons_alignment",selector:{select:{options:[{label:t("editor.common.right")+t("editor.common.default_suffix"),value:"end"},{label:t("editor.common.center"),value:"center"},{label:t("editor.common.left"),value:"start"},{label:t("editor.sub_button.space_between"),value:"space-between"}],mode:"dropdown"}}}]}
                          .computeLabel=${()=>t("editor.sub_button.main_alignment")}
                          @value-changed=${t=>{e._valueChanged({target:{configValue:"main_buttons_alignment"},detail:{value:t.detail.value.main_buttons_alignment}})}}
                      ></ha-form>
                  `)}
              `)}
            </div>
          </ha-expansion-panel>
        `:""}
        
        ${n?i.qy`
          ${U(e,"main")}
          ${O(e,"main")}
        `:a?"":i.qy`
          <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
              ${t("editor.sub_button.main_top")}
            </h4>
            <div class="content">
              ${U(e,"main")}
              ${O(e,"main")}
            </div>
          </ha-expansion-panel>
        `}

        ${a?i.qy`
          ${U(e,"bottom")}
          ${O(e,"bottom")}
        `:n?"":i.qy`
          <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:arrow-down-circle-outline"></ha-icon>
              ${t("editor.sub_button.bottom")}
            </h4>
            <div class="content">
              ${U(e,"bottom")}
              ${e._renderConditionalContent(!h&&!g&&(m||!p&&!b),i.qy`
                <div class="bubble-info warning">
                  <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-outline"></ha-icon>
                    ${t("editor.sub_button.bottom_layout_title")}
                  </h4>
                  <div class="content">
                    <p>${t("editor.sub_button.bottom_layout_body")}</p>
                  </div>
                </div>
              `)}
              ${O(e,"bottom")}
            </div>
          </ha-expansion-panel>
        `}

        ${function(e){return i.qy`
    <div class="bubble-info">
      <h4 class="bubble-section-title">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        ${e("editor.sub_button.panel_title")}
      </h4>
      <div class="content">
        <p>${e("editor.sub_button.info_body")}</p>
        <ul class="icon-list">
          <li><ha-icon icon="mdi:gesture-tap"></ha-icon><p><b>${e("editor.sub_button.type_default")}</b> - ${e("editor.sub_button.desc_default")}</p></li>
          <li><ha-icon icon="mdi:tune-variant"></ha-icon><p><b>${e("editor.button.type_slider")}</b> - ${e("editor.sub_button.desc_slider")}</p></li>
          <li><ha-icon icon="mdi:form-dropdown"></ha-icon><p><b>${e("editor.sub_button.type_dropdown")}</b> - ${e("editor.sub_button.desc_dropdown")}</p></li>
        </ul>
        <p>${(0,y.T5)(e("editor.sub_button.info_usage"),{slider:i.qy`<b>${e("editor.button.type_slider")}</b>`,dropdown:i.qy`<b>${e("editor.sub_button.type_dropdown")}</b>`,default:i.qy`<b>${e("editor.sub_button.type_default")}</b>`})}</p>
        <p>${e("editor.sub_button.info_organize")}</p>
      </div>
    </div>
  `}(t)}
      </div>
    </ha-expansion-panel>
  `}(e)}(this)}makeVersion(){const e=(0,r.NO)(),t="en"!==(0,r.kk)(this._hassRender)||e;return i.qy`
            <h4 class="version">
                Bubble Card
                <span class="version-number">
                    ${a.r}
                </span>
                ${this._renderConditionalContent(t,i.qy`
                    <span
                        class="version-language"
                        role="button"
                        tabindex="0"
                        title="${e?"Bubble Card is in English, turn Auto back on to follow the Home Assistant language":"Bubble Card follows the Home Assistant language, turn Auto off for English"}"
                        @click=${()=>this._toggleEditorEnglish()}
                        @keydown=${e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this._toggleEditorEnglish())}}
                    >
                        <ha-icon icon="mdi:translate"></ha-icon>
                        Auto
                        <ha-switch
                            .checked=${!e}
                            @click=${e=>e.stopPropagation()}
                            @change=${e=>this._toggleEditorEnglish(!e.target.checked)}
                        ></ha-switch>
                    </span>
                `)}
            </h4>
        `}_toggleEditorEnglish(e=!(0,r.NO)()){(0,r.$g)(e),this.listsUpdated=!1,this.requestUpdate();try{window.__bubbleCardEditorInstances?.forEach(e=>{e.listsUpdated=!1,e.requestUpdate()}),window.dispatchEvent(new CustomEvent("bubble-card-language-changed"))}catch(e){}}makeStyleEditor(){const e=(0,r.Ay)(this._hassRender),t="style_editor_panel";return i.qy`
            <ha-expansion-panel
                outlined
                @expanded-changed="${e=>{this._expandedPanelStates[t]=e.target.expanded,this.requestUpdate()}}"
            >
                <h4 slot="header">
                    <ha-icon icon="mdi:code-braces"></ha-icon>
                    ${e("editor.styles.title")}
                </h4>
                <div class="content">
                    ${(0,y.DW)(this,t,!!this._expandedPanelStates[t],()=>i.qy`
                        <div class="code-editor">
                            <ha-code-editor
                                mode="yaml"
                                autofocus
                                autocomplete-entities
                                autocomplete-icons
                                .hass=${this._hassRender}
                                .value=${this._config.styles}
                                .configValue="${"styles"}"
                                @value-changed=${e=>{this._valueChanged(e),this._clearCurrentCardError()}}
                            ></ha-code-editor>
                        </div>
                        ${this.createErrorConsole()}
                    `)}
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            ${e("editor.styles.title")}
                        </h4>
                        <div class="content">
                            <p>${(0,y.T5)(e("editor.styles.body1"),{examples_link:i.qy`<a href="https://github.com/Clooos/Bubble-Card#styling" target="_blank" rel="noopener noreferrer">${e("editor.home.here")}</a>`,code:i.qy`<code>styles: |</code>`,templates_link:i.qy`<a href="https://github.com/Clooos/Bubble-Card#templates" target="_blank" rel="noopener noreferrer">${e("editor.styles.js_templates")}</a>`})}</p>
                            <p>${(0,y.T5)(e("editor.styles.body2"),{patreon_link:i.qy`<b><a href="https://www.patreon.com/Clooos" target="_blank" rel="noopener noreferrer">Patreon</a></b>`})}</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
        `}_clearCurrentCardError(){if(!window.bubbleCardErrorRegistry)return;const e=this._config?.card_type;if(!e)return;const t=`${e}_${this._config?.entity||this._config?.hash||""}`;window.bubbleCardErrorRegistry[t]&&(delete window.bubbleCardErrorRegistry[t],this.errorMessage="",this.errorSource="",this.requestUpdate())}_clearCurrentModuleError(e){this._moduleCodeEvaluating=e;try{window.bubbleCardErrorRegistry&&e&&Object.keys(window.bubbleCardErrorRegistry).forEach(t=>{window.bubbleCardErrorRegistry[t]?.moduleId===e&&delete window.bubbleCardErrorRegistry[t]})}catch(e){}this.errorMessage="",this.errorSource="",this.requestUpdate()}createErrorConsole(e=this,t="styles"){window.bubbleCardErrorRegistry||(window.bubbleCardErrorRegistry={});const o=()=>{if(void 0!==e._editingModule&&e._editingModule){const t=e._editingModule.id;if(!t)return e.errorMessage="",void(e.errorSource="");let o=!1;window.bubbleCardErrorRegistry&&Object.values(window.bubbleCardErrorRegistry).forEach(i=>{i.moduleId===t&&(e.errorMessage=i.message,e.errorSource=i.source,e.errorSourceType=i.sourceType,o=!0)}),o||(e.errorMessage="",e.errorSource="",e.errorSourceType="")}else{const t=e._config?.card_type;if(!t)return e.errorMessage="",e.errorSource="",void(e.errorSourceType="");const o=`${t}_${e._config?.entity||e._config?.hash||""}`;if(window.bubbleCardErrorRegistry&&window.bubbleCardErrorRegistry[o]){const t=window.bubbleCardErrorRegistry[o];e.errorMessage=t.message,e.errorSource=t.source,e.errorSourceType=t.sourceType}else e.errorMessage="",e.errorSource="",e.errorSourceType=""}e.requestUpdate()};e._errorListener||(e._errorListener=e=>{const t=e.detail;if(t&&"object"==typeof t&&t.context){const{message:e,context:o}=t;if(e){if(o.cardType){const t=`${o.cardType}_${o.entityId||o.hash||""}`;window.bubbleCardErrorRegistry[t]={message:e,source:"module"===o.sourceType?(0,r.Ay)(this._hassRender)("editor.errors.source_module").replace("{id}",`'${o.moduleId}'`):(0,r.Ay)(this._hassRender)("editor.errors.source_card"),cardType:o.cardType,entityId:o.entityId,sourceType:o.sourceType,moduleId:"module"===o.sourceType?o.moduleId:null}}}else if("module"===o.sourceType&&o.moduleId)Object.keys(window.bubbleCardErrorRegistry).forEach(e=>{window.bubbleCardErrorRegistry[e]?.moduleId===o.moduleId&&delete window.bubbleCardErrorRegistry[e]});else if(o.cardType){const e=`${o.cardType}_${o.entityId||o.hash||""}`;window.bubbleCardErrorRegistry[e]&&delete window.bubbleCardErrorRegistry[e]}}o()},window.addEventListener("bubble-card-error",e._errorListener)),o();const a=(0,r.Ay)(e._hassRender??e.hass),n="template"===e.errorSourceType,s=!!e.errorMessage&&("top"===t?n:!n);return i.qy`
            <div class="bubble-info error"
                style="display: ${s?"":"none"}; margin-bottom: 8px;">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                    ${a("editor.styles.error_title")}
                </h4>
                <div class="content">
                    <p>${e.errorMessage}</p>
                    ${e._editingModule&&"object"==typeof e._editingModule&&e._editingModule.id?i.qy`<hr><span class="helper-text" style="margin: 0;">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        ${a("editor.styles.error_delayed")}
                    </span>`:""}
                </div>
            </div>
        `}_getProcessedSchema(e,t,o){const i=structuredClone(t);return this._updateAttributeSelectors(i,o,e)}_valueChangedInHaForm(e,t,o){let i=e.detail.value;const a=this._workingModuleConfigs?.[t];if(a&&i&&"object"==typeof i&&!Array.isArray(i)){const e=(0,H.Qv)(o,a),t=Object.keys(e).filter(t=>i[t]===e[t]);t.length>0&&(i={...i},t.forEach(e=>delete i[e]))}if(i&&"object"==typeof i&&!Array.isArray(i)){const e=Object.keys(i);e.length>0&&e.every(e=>!isNaN(parseInt(e,10)))&&(i=e.sort((e,t)=>parseInt(e,10)-parseInt(t,10)).map(e=>i[e]))}this._workingModuleConfigs&&(this._workingModuleConfigs[t]=i);const r=this._cleanEmpty(i,t);(0,n.rC)(this,"config-changed",{config:{...this._config,[t]:r}}),this.requestUpdate()}_cleanEmpty(e,t){if(Array.isArray(e))return e.map(e=>this._cleanEmpty(e,void 0)).filter(e=>!this._isEmpty(e));if(e&&"object"==typeof e){const t={};return Object.keys(e).forEach(o=>{const i=this._cleanEmpty(e[o],o);this._isEmpty(i)||(t[o]=i)}),Object.keys(t).length>0?t:void 0}return"string"!=typeof e||""!==e||"state"===t?e:void 0}_isEmpty(e){return null==e||(Array.isArray(e)?0===e.length:"object"==typeof e&&0===Object.keys(e).length)}_updateAttributeSelectors=(e,t,o=void 0)=>{const i=(e,t,o)=>{const i=Array.isArray(e)?e:Object.entries(e||{}).map(([e,t])=>({name:e,...t}));if(Array.isArray(t)&&t.length>0){const a=t.find(e=>e&&"object"==typeof e&&e.entity)??t.find(e=>e&&"object"==typeof e)??t[0],n=this._updateAttributeSelectors(i,a,o);return Array.isArray(e)?n:n.reduce((e,t)=>{const{name:o,...i}=t;return e[o]=i,e},{})}const a=this._updateAttributeSelectors(i,t,o);return Array.isArray(e)?a:a.reduce((e,t)=>{const{name:o,...i}=t;return e[o]=i,e},{})};let a=o;return e.map(e=>{const o=((e,t)=>{if(!e)return;const o=t?.name;return void 0===o||""===o||t?.flatten?e:Array.isArray(e)?/^\d+$/.test(String(o))?e[o]:e:e[o]})(t,e);if(e.selector&&e.selector.entity&&(a=((e,t)=>{if(!e)return t;if("string"==typeof e)return e||t;if(Array.isArray(e)){const o=e.find(e=>e&&e.entity||"string"==typeof e);return"string"==typeof o?o||t:o?.entity??t}return e.entity??t})(o,void 0)),e.selector&&e.selector.attribute&&(e.selector.attribute.entity_id=a),Array.isArray(e.schema))e.schema=this._updateAttributeSelectors(e.schema,o,a);else if(e.selector&&e.selector.object&&e.selector.object.fields){const t=e.selector.object;e.selector={bc_object:{...t,fields:i(t.fields,o,a)}}}return e})};makeModulesEditor(){return ie(this)}makeModuleStore(){return(0,F._e)(this)}_normalizeConfigValuePath(e){const t=e=>null==e?"":String(e).trim();if("string"==typeof e||"number"==typeof e)return t(e);if(Array.isArray(e))return e.map(e=>t(e)).filter(Boolean).join(".");if(e&&"object"==typeof e){if(Array.isArray(e.path))return e.path.map(e=>t(e)).filter(Boolean).join(".");if(void 0!==e.path)return t(e.path);if(void 0!==e.key)return t(e.key)}return""}_valueChanged(e){const t=e.target,o=e.detail;let i,a=!1;const r=Boolean(t&&t.configValue&&Object.prototype.hasOwnProperty.call(t,"value")&&void 0===t.value);if("HA-SWITCH"===t.tagName?(i=t.checked,a=!0):void 0!==t.value?(i="string"==typeof t.value?t.value.replace(",","."):t.value,a=!0):r?(i=t.value,a=!0):o&&Object.prototype.hasOwnProperty.call(o,"value")&&(a=!0),!a)return;if("string"==typeof i&&(i.endsWith(".")||"-"===i))return;let s={...this._config};const l=(e,t)=>{const o=e[t];void 0!==o&&""!==o||delete e[t]};try{const{configValue:a,checked:n}=t;if(a){const n=this._normalizeConfigValuePath(a);if(!n)return void console.warn("Bubble Card Editor: skipped update due to invalid configValue",a);const r=n.split(".").filter(Boolean);if(!r.length)return void console.warn("Bubble Card Editor: empty config path provided",a);if(r.length>1){let a=s,n="";for(let e=0;e<r.length-1;e++){const t=r[e];n=n?`${n}.${t}`:t,a[t]||(a[t]={}),a[t]={...a[t]},a=a[t]}const d=r[r.length-1];"input"===e.type?a[d]=i:o&&a[d]!==o.value?a[d]=o.value:"HA-SWITCH"===t.tagName&&(a[d]=i),l(a,d)}else{const a=r[0];"input"===e.type?s[a]=i:o&&s[a]!==o.value?s[a]=o.value:"HA-SWITCH"===t.tagName&&(s[a]=i),l(s,a)}}else s=o.value}catch(e){if(t.configValue&&o)s[t.configValue]=o.value;else{if(!o)return;s=o.value}}if("card_type"===t?.configValue&&"pop-up"===o?.value&&this._isStandalonePopupDisallowedInCurrentDialog())console.warn("Bubble Card: nested standalone pop-ups are not supported");else{try{if("rows"===t?.configValue){const e=s?.rows,t=null==e||""===e;this._rowsAutoMode=t,t&&delete s.rows}else if("grid_options.rows"===t?.configValue){const e=s?.grid_options?.rows,t=null==e||""===e;this._rowsAutoMode=t,t&&s?.grid_options&&delete s.grid_options.rows}"card_type"===t?.configValue&&"calendar"===o?.value&&(void 0!==s.rows&&null!==s.rows&&""!==s.rows||(s.rows=1)),"card_type"===t?.configValue&&"pop-up"===o?.value&&(Array.isArray(s.cards)||(s.cards=[]))}catch(e){}this._config=s,(0,n.rC)(this,"config-changed",{config:s})}}_arrayValueChange(e,t,o){if(this._config.sub_button&&!this.subButtonJustAdded)return this.subButtonJustAdded=!0,void setTimeout(()=>this._arrayValueChange(e,t,o),10);const i=(e,t,o,i)=>{const a=String(t).split(".").filter(Boolean);let n=e;for(let e=0;e<a.length-1;e++){const t=a[e],o=a[e+1],i=!isNaN(parseInt(o,10));void 0!==n[t]&&null!==n[t]||(n[t]=i?[]:{}),Array.isArray(n[t])?n[t]=[...n[t]]:n[t]={...n[t]},n=n[t]}const r=a[a.length-1],s=Array.isArray(n[r])?n[r]:n[r]?[...n[r]]:[],l=Array.isArray(s)?[...s]:[],d=l[o]||{};return l[o]={...d,...i},n[r]=l,l[o]};let a;if("string"==typeof o&&o.includes("."))a=i(this._config,o,e,t);else{this._config[o]=this._config[o]||[];const i=[...this._config[o]],n=i[e]||{};i[e]={...n,...t},this._config[o]=i,a=i[e]}try{if("string"==typeof o&&o.startsWith("sub_button")){const t=a||{},n=t.entity??this._config.entity??"",r="string"==typeof n&&(n.startsWith("input_select")||n.startsWith("select")),s=!!t.select_attribute;if(!t.sub_button_type&&(r||s))if("string"==typeof o&&o.includes("."))i(this._config,o,e,{sub_button_type:"select"});else{const t=[...this._config[o]],i=t[e]||{};t[e]={...i,sub_button_type:"select"},this._config[o]=t}}}catch{}(0,n.rC)(this,"config-changed",{config:this._config}),this.requestUpdate();try{const e=String(o||"");("sub_button"===e||e.startsWith("sub_button"))&&this._scheduleAutoRowsCompute("sub_button changed")}catch(e){}}_ActionChanged(e,t,o){if("button_action"===t||"event_action"===t)this._config[t]=e.detail.value;else if("string"==typeof t&&t.startsWith("sub_button")){const i=e.detail.value,a=(e,t,o,i)=>{const a=String(t).split(".").filter(Boolean);let n=e;for(let e=0;e<a.length-1;e++){const t=a[e],o=a[e+1],i=!isNaN(parseInt(o,10));void 0!==n[t]&&null!==n[t]||(n[t]=i?[]:{}),Array.isArray(n[t])?n[t]=[...n[t]]:n[t]={...n[t]},n=n[t]}const r=a[a.length-1],s=Array.isArray(n[r])?n[r]:n[r]?[...n[r]]:[],l=Array.isArray(s)?[...s]:[],d=l[o]||{};return l[o]={...d,...i},n[r]=l,l[o]};if(t.includes("."))a(this._config,t,o,i);else{this._config[t]=this._config[t]||[];const e=[...this._config[t]],a=e[o]||{};e[o]={...a,...i},this._config[t]=e}}else t?this._config[t]=e.detail.value:this._config=e.detail.value;(0,n.rC)(this,"config-changed",{config:this._config})}_updateActionsEntity(e){let t=JSON.parse(JSON.stringify(this._config));const o=e.target.configValue.split(".");let i=0;for(i=0;i<o.length-2;i++)t=t[o[i]]?t[o[i]]:{};e.target.checked?t[o[i]]?t[o[i]].target={entity_id:"entity"}:t[o[i]]={target:{entity_id:"entity"}}:t[o[i]]&&"entity"===t[o[i]].target?.entity_id&&(t[o[i]].target={});const a=o[o.length-2],r=t&&"object"==typeof t&&t[a]?t[a]:{},s={value:{[a]:r}},l={__schema:[{name:a}]},d={...e,detail:s,currentTarget:l};let c=null,u=null;if(2===o.length)return this._config={...this._config,[a]:r},void(0,n.rC)(this,"config-changed",{config:this._config});if("button_action"===o[0]||"event_action"===o[0])c=o[0];else if(o.length>=4){const e=o[o.length-3];c=o.slice(0,o.length-3).join(".");const t=parseInt(e,10);u=isNaN(t)?null:t}else if(o.length>=3){c=o[0];const e=parseInt(o[1],10);u=isNaN(e)?null:e}this._ActionChanged(d,c,u)}_computeLabelCallback=e=>e?.label;_conditionChanged(e,t,o){if(e.stopPropagation(),o){this._config[o]=this._config[o]||[];let i=[...this._config[o]];i[t]=i[t]||{};const a=e.detail.value;i[t]={...i[t],visibility:a},this._config[o]=i}else if("pop-up"===this._config.card_type){const t=e.detail.value;this._config={...this._config,trigger:t}}(0,n.rC)(this,"config-changed",{config:this._config}),this.requestUpdate()}static get styles(){return i.AH`
        ${(0,i.iz)('div{display: grid;grid-gap: 12px;}.card-config > ha-form:first-of-type::after{content: "";position: relative;background-color: var(--background-color, var(--secondary-background-color));display: block;width: 100%;height: 1px;top: 12px;margin-bottom: 12px !important;opacity: 0.6;}#add-button{margin: 0 0 14px 0;color: var(--text-primary-color);width: 100%;height: 32px;border-radius: 16px;border: none;background-color: var(--accent-color);cursor: pointer;}p{margin-bottom: 4px;}ul{margin: 0px 14px !important;padding-inline-start: 0px !important;}ha-icon, a, p, button, h4{color: var(--primary-text-color) !important;}hr{display: inline-block;width: 100%;height: 1px;border: none;background-color: var(--outline-color);margin: 8px 0 0 0;}code, code-block{background: rgba(0,120,180,0.3);color: var(--primary-text-color);background-blend-mode: darken;padding: 1px 3px;border-radius: 6px;font-size: 13px;}code-block{display: grid;width: 100%;padding: 0;max-height: 285px;overflow: auto;}code-block pre{white-space: pre;overflow: auto;margin: 8px;}code-block.with-i pre{white-space: pre-line;overflow: auto;margin: 8px;}code-block.with-i pre > i{white-space: pre;font-style: normal;}img{max-width: 100%;margin: 14px 0;}img.example{padding: 32px;box-sizing: border-box;background: rgba(0, 120, 180, 0.8);border-radius: 6px;}.button-header{height: auto;width: 100%;display: inline-flex;align-items: center;margin: 0 8px;}.button-number{display: inline-flex;width: auto;}.remove-button{display: inline-flex;border-radius: 50%;width: 24px;height: 24px;text-align: center;line-height: 24px;vertical-align: middle;cursor: pointer;}.content{margin: 12px 4px 14px 4px;}h4 > ha-icon{margin: 8px;margin-inline-end: 12px;}ha-expansion-panel h4:not(.version){display: flex;align-items: center;margin: 10px 0;}ha-expansion-panel > .content, ha-expansion-panel .content{overflow-x: visible !important;display: flex;flex-direction: column;}ha-form{--expansion-panel-summary-padding: 2px 14px;}ha-textfield{width: 100%;}.range-inputs{display: grid;grid-template-columns: repeat(auto-fit, minmax(min(150px, 100%), 1fr));gap: 8px;}.range-inputs > *{min-width: 0;}.bubble-pop-up-hash-prefix{display: inline-flex;align-items: center;justify-content: center;min-width: 8px;color: var(--secondary-text-color);font-size: 15px;font-weight: 600;line-height: 1;}h3{margin: 4px 0;}.code-editor{overflow: scroll;}.icon-button{display: flex;align-items: center;justify-content: center;gap: 8px;padding: 8px 16px;background: rgba(0,120,180,0.5);border: none;cursor: pointer;margin: 0;border-radius: 32px;font-size: 13px;font-weight: bold;text-align: center;text-decoration: none;transition: all 0.2s ease;}.icon-button:hover{background: rgba(0,120,180,0.7);transform: translateY(-1px);}.icon-button:active{background: rgba(0,120,180,0.9);}.icon-button.header{background: none;padding: 0;margin: 0 4px;}.button-container{display: flex;margin-inline-start: auto !important;}ha-card-conditions-editor{margin-top: -12px;}.disabled{opacity: 0.5;pointer-events: none;}.version{font-size: 12px !important;color: #fff;background: rgba(0,0,0,0.1);padding: 8px 16px;border-radius: 32px;}.module-version{margin: 0;}.version-number{font-size: 10px;background: rgba(0,120,180,1);padding: 0px 8px;border-radius: 12px;margin-inline-end: -6px;float: inline-end;color: white;}.version-number a{color: white !important;}.bubble-info-container{display: flex;flex-direction: column;}.bubble-section-title{font-size: 14px;font-weight: 600;margin-bottom: -6px !important;color: var(--primary-text-color) !important;display: flex;align-items: center;position: relative;padding-inline-start: 4px;}.bubble-section-title ha-icon{color: var(--info-color) !important;margin: 8px;margin-inline-start: 0;line-height: normal !important;}.bubble-section-title::before{content: "";position: absolute;inset-inline-start: 0;top: 0;bottom: 0;width: 3px;background: var(--primary-color);border-radius: 2px;}.bubble-info{padding: 0 0 14px;position: relative;overflow: auto;}.bubble-info .content{margin: 0;padding: 0 18px;}.bubble-info::before{content: "";position: absolute;left: 0;top: 0;bottom: 0;width: 100%;background-color: var(--info-color);border-radius: 4px;opacity: 0.12;pointer-events: none;}.bubble-info.warning::before{background-color: var(--warning-color);opacity: 0.15;}.bubble-info.warning .bubble-section-title::before{background: var(--warning-color);}.bubble-info.warning .bubble-section-title ha-icon{color: var(--warning-color) !important;}.bubble-info.bubble-sub-warning{margin: 12px 0;border-radius: 6px;box-shadow: inset 0 0 0 1px var(--warning-color);}.bubble-info.warning.bubble-sub-warning::before{opacity: 0.22;}.bubble-info.error::before{background-color: var(--error-color);opacity: 0.15;}.bubble-info.error .bubble-section-title::before{background: var(--error-color);}.bubble-info.error .bubble-section-title ha-icon{color: var(--error-color) !important;}.bubble-info h4{margin: 8px 0 0 0;padding: 0 18px;}.bubble-info p{margin: 0;}.bubble-info *{z-index: 0;}.bubble-section-title + p{margin-top: 0;padding-top: 0;}.bubble-badges{display: flex;flex-wrap: wrap;gap: 8px;margin: 4px 0;justify-content: flex-start;}.bubble-badge{display: inline-flex;align-items: center;gap: 6px;padding: 4px 8px;text-decoration: none;font-size: 13px;transition: all 0.2s ease;box-shadow: none;height: 26px;border: none;position: relative;border-radius: 18px;white-space: nowrap;background-color: var(--mdc-text-field-disabled-line-color);}.bubble-badge:hover{transform: translateY(-1px);background: rgba(0, 120, 180, 0.5);}.bubble-badge ha-icon{color: var(--primary-text-color) !important;--mdc-icon-size: 16px;line-height: normal;}.paypal-icon, .bmc-icon, .patreon-icon{width: 15px;height: 15px;display: flex;align-items: center;justify-content: center;}.paypal-icon svg, .bmc-icon svg, .patreon-icon svg{width: 100%;height: 100%;fill: var(--primary-text-color);}.bubble-thank-you{margin: 0 !important;padding: 8px !important;opacity: 0.8;}.creator-message{display: flex;align-items: center;gap: 12px;}.creator-message a{display: flex;transition: all 0.2s ease;}.creator-message a:hover{transform: scale(0.95);}.creator-avatar{min-width: 42px;height: 42px;border-radius: 50%;margin: 0;}ul.icon-list{list-style-type: none;padding-inline-start: 0 !important;margin-inline-start: 0 !important;}ul.icon-list li{display: flex;align-items: center;margin-bottom: 6px;line-height: 24px;}ul.icon-list li ha-icon{min-width: 24px;margin-inline-end: 8px;--mdc-icon-size: 18px;}.layout-subsection{display: grid;grid-gap: 12px;padding: 12px 0 0;}.layout-subtitle{display: flex;align-items: center;margin: 0;font-size: 14px;font-weight: 600;color: var(--primary-text-color);}.layout-subtitle ha-icon{margin-inline-end: 8px;--mdc-icon-size: 18px;}.element-actions{display: flex;justify-content: flex-end;}.no-bg{background: none;box-shadow: none;}mwc-list-item[disabled] ha-icon{opacity: 0.38;}*{line-height: 20px !important;}.version-language{display: inline-flex;align-items: center;gap: 4px;float: inline-end;margin-inline-end: 8px;font-size: 10px;opacity: 0.8;cursor: pointer;user-select: none;}.version-language ha-icon{--mdc-icon-size: 14px;}.version-language ha-switch{--mdc-switch-track-width: 28px;transform: scale(0.65);margin-block: -6px;margin-inline: -2px -4px;}.bubble-translate-offer .bubble-translate-offer-actions{display: flex;gap: 16px;margin-bottom: 0;}.bubble-translate-offer .bubble-translate-offer-actions a{color: var(--primary-color);text-decoration: none;font-weight: 500;}:root{--rgb-primary-color: 3, 169, 244;--rgb-info-color: 33, 150, 243;--rgb-warning-color: 255, 152, 0;--rgb-error-color: 244, 67, 54;--rgb-success-color: 76, 175, 80;}.module-store{display: flex;flex-direction: column;gap: 16px;position: relative;padding-bottom: 40px;}.store-header{display: flex;flex-direction: column;gap: 12px;margin-bottom: 16px;background-color: var(--card-background-color);border-radius: 16px;padding: 16px;border: 1px solid var(--divider-color);box-shadow: var(--shadow-elevation-1dp);position: relative;overflow: hidden;}.store-header-top{display: flex;align-items: center;justify-content: space-between;margin-bottom: 8px;}.store-header-title{font-size: 16px;font-weight: 600;display: flex;align-items: center;gap: 8px;}.store-header-title ha-icon{color: var(--info-color) !important;}.store-header-actions{display: flex;align-items: center;gap: 8px;}.bubble-badge.translate-badge{background-color: rgba(0, 0, 0, 0.08);color: var(--secondary-text-color);font-weight: 500;font-size: 11px;padding: 2px 8px;height: 20px;opacity: 0.8;}.bubble-badge.translate-badge ha-icon{color: inherit !important;--mdc-icon-size: 14px;}.bubble-badge.translate-badge:hover{background-color: rgba(0, 0, 0, 0.12);opacity: 1;}.bubble-badge.translate-badge.active{background-color: rgba(var(--rgb-info-color), 0.12);color: var(--info-color);opacity: 1;}.bubble-badge.translate-badge.active:hover{background-color: rgba(var(--rgb-info-color), 0.2);}.store-refresh-button{color: var(--primary-text-color);border-radius: 50%;width: 36px;height: 36px;display: flex;align-items: center;justify-content: center;cursor: pointer;transition: all 0.3s ease;box-shadow: var(--shadow-elevation-1dp);}.store-refresh-button:hover{transform: rotate(180deg);box-shadow: var(--shadow-elevation-2dp);}.store-search{display: flex;align-items: center;gap: 8px;border-radius: 32px;overflow: hidden;}.store-search ha-textfield, .store-search ha-input, .store-search ha-form, .store-search ha-input-search{flex-grow: 1;width: 100%;--ha-input-padding-bottom: 0;}.store-search ha-textfield::part(prefix){padding-inline-start: 8px;}.store-search ha-textfield .leading-icon{color: var(--primary-text-color);}.store-filters{display: flex;align-items: center;flex-wrap: wrap;gap: 12px;margin-top: 4px;}.store-filter-type{flex-grow: 1;min-width: 180px;}.store-modules{display: flex;flex-direction: column;gap: 16px;}.store-module-card{display: flex;flex-direction: column;border-radius: 16px;border: 1px solid var(--divider-color);overflow: hidden;transition: transform 0.3s ease, box-shadow 0.3s ease;background-color: var(--card-background-color);box-shadow: var(--shadow-elevation-1dp);margin-bottom: 16px;}.store-module-card:hover{transform: translateY(-3px);box-shadow: var(--shadow-elevation-3dp);}.store-module-header{position: relative;padding-block: 16px 0;padding-inline: 0 16px;margin: 0;border-radius: 0;border-bottom: 1px solid var(--divider-color);}.store-module-header::before{content: "";position: absolute;left: 0;top: 0;bottom: 0;width: 100%;background-color: var(--info-color);border-radius: 0;opacity: 0.12;pointer-events: none;}.store-module-header.warning::before{background-color: var(--warning-color);opacity: 0.15;}.store-module-header .bubble-section-title{display: flex;align-items: center;gap: 12px;padding-inline-start: 0;margin-bottom: 0px !important;position: relative;}.store-module-header .bubble-section-title::before{content: "";position: absolute;inset-inline-start: 0;top: 0;bottom: 0;width: 3px;background: var(--primary-color);border-start-end-radius: 2px;border-end-end-radius: 2px;}.store-module-header.warning .bubble-section-title::before{background: var(--warning-color);}.store-module-header .bubble-section-title ha-icon{margin: 0;margin-inline-start: 19px;color: var(--info-color) !important;}.store-module-header.warning .bubble-section-title ha-icon{color: var(--warning-color) !important;}.store-module-header h3{margin: 0;font-size: 14px;font-weight: 500;}.store-module-meta{display: flex;justify-content: space-between;align-items: center;padding: 0;padding-bottom: 4px;padding-inline-start: 18px;margin-bottom: 0;}.store-module-badges{margin: 0;justify-content: flex-start;}.store-module-author{display: flex;align-items: center;gap: 12px;font-size: 14px;color: var(--secondary-text-color);}.author-avatar{width: 24px;height: 24px;border-radius: 50%;margin: 0;border: 1px solid rgba(0,0,0,0.1);}.store-module-content{padding: 0 16px;background-color: var(--card-background-color);grid-gap: 8px;}.module-description{margin: 0 0 -4px;font-size: 14px;font-weight: 300;}.module-preview-image{border-radius: 12px;max-height: 220px;width: 100%;object-fit: contain;background-color: var(--secondary-background-color);margin: 0;transition: all 0.3s ease;}.module-preview-container{position: relative;margin-top: 8px;overflow: hidden;border-radius: 12px;}.module-preview-zoom-btn{position: absolute;bottom: 8px;inset-inline-end: 8px;width: 32px;height: 32px;border-radius: 50%;background-color: var(--primary-color);color: white;display: flex;align-items: center;justify-content: center;cursor: pointer;opacity: 0.8;transition: all 0.2s ease;z-index: 3;box-shadow: 0 2px 5px rgba(0,0,0,0.2);}.module-preview-zoom-btn:hover{opacity: 1;transform: scale(1.1);}.module-preview-zoom-btn ha-icon{color: white !important;--mdc-icon-size: 20px;}.module-preview-fullscreen{position: fixed;top: 0;left: 0;width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.9);z-index: 999;display: flex;align-items: center;justify-content: center;cursor: zoom-out;}.module-preview-fullscreen img{max-width: 90%;max-height: 90%;object-fit: contain;margin: 0;border-radius: 6px;}.compatibility-warning{margin-top: -8px;margin-bottom: 12px;}.compatibility-warning ha-icon{color: var(--warning-color) !important;}.store-module-actions{margin: 12px 0 12px;justify-content: flex-start;border-top: 1px solid var(--divider-color);padding-top: 12px;display: flex;gap: 8px;}.store-module-card.incompatible .store-module-actions{opacity: 0.8;}.bubble-badge.install-button{background-color: rgba(33, 150, 243, 0.7);color: var(--primary-color);font-weight: 500;transition: all 0.2s ease;display: flex;align-items: center;gap: 6px;cursor: pointer;}.bubble-badge.install-button span{color: var(--primary-text-color);font-weight: 500;transition: color 0.2s ease;}.bubble-badge.install-button ha-icon{transition: color 0.2s ease;}.bubble-badge.install-button:hover{transform: translateY(-1px);background-color: rgba(33, 150, 243, 0.9);}.bubble-badge.install-button:hover span, .bubble-badge.install-button:hover ha-icon{color: white !important;}.bubble-badge.update-button{background-color: rgb(0, 220, 80);font-weight: 500;transition: all 0.2s ease;display: flex;align-items: center;gap: 6px;cursor: pointer;color: rgba(0, 0, 0, 0.8) !important;}.bubble-badge.update-button ha-icon{color: rgba(0, 0, 0, 0.8) !important;}.bubble-badge.update-button:hover{transform: translateY(-1px);background-color: rgb(0, 180, 60);}.bubble-badge.clickable{cursor: pointer;}.bubble-badge.installed-button{background-color: rgba(var(--rgb-success-color, 0, 170, 0), 0.12);color: var(--success-color, var(--primary-color));opacity: 0.8;cursor: default;display: flex;align-items: center;gap: 6px;}.bubble-badge.installed-button span{color: var(--primary-text-color);font-weight: 500;}.bubble-badge.installed-button:hover{transform: none;background: rgba(var(--rgb-success-color, 0, 170, 0), 0.12);}.bubble-badge.link-button{background-color: rgba(0, 0, 0, 0.06);color: var(--secondary-text-color);transition: all 0.2s ease;display: flex;align-items: center;gap: 6px;}.bubble-badge.link-button:hover{background-color: rgba(0, 0, 0, 0.12);transform: translateY(-1px);}.bubble-badge.update-badge{background-color: rgb(0, 220, 80);font-weight: 500;font-size: 11px;padding: 2px 8px;height: 20px;margin-inline-start: auto !important;color: rgba(0, 0, 0, 0.8);}.bubble-badge.update-badge ha-icon{color: rgba(0, 0, 0, 0.8) !important;}.bubble-badge.update-badge:hover{transform: none;}.bubble-badge.version-badge{background-color: rgba(0, 0, 0, 0.08);color: var(--primary-text-color);font-weight: 500;font-size: 11px;padding: 2px 8px;height: 20px;}.bubble-badge.incompatible-badge{background-color: rgba(var(--rgb-warning-color), 0.12);color: var(--warning-color);font-weight: 500;font-size: 11px;padding: 2px 8px;height: 20px;}.bubble-badge.incompatible-badge::before{background-color: var(--warning-color);opacity: 0.3;}.bubble-badge.new-badge{background-color: rgba(var(--rgb-success-color, 0, 170, 0), 0.12);color: var(--primary-text-color);font-weight: 500;font-size: 11px;padding: 2px 8px;height: 20px;}.bubble-badge.new-badge::before{background-color: var(--success-color, #28a745);opacity: 0.2;}.bubble-badge.yaml-badge{background-color: rgba(255, 167, 38, 0.45);color: var(--primary-text-color);font-weight: 700;font-size: 11px;padding: 2px 8px;height: 20px;}.bubble-badge.yaml-badge::before{background-color: #ff9800;opacity: 0.5;}.version-container{display: flex;align-items: center;margin-inline-start: auto;gap: 8px;}ha-tabs, ha-tab-group, sl-tab-group{margin-bottom: 16px;--primary-tab-color: var(--primary-color);--secondary-tab-color: var(--secondary-text-color);border-bottom: 1px solid var(--divider-color);position: sticky;background-color: var(--card-background-color);z-index: 4;padding-top: 16px;margin-top: -24px;top: -40px;}.module-tabs--ha-tab-group.module-tabs--ha-tab-group-modern{top: -16px;}sl-tab-group{border-bottom: none;}ha-tab-group{display: block;}ha-tab-group-tab{flex-grow: 1;text-align: center;}ha-tab-group-tab[active]{color: var(--primary-text-color);opacity: 1;}ha-tab-group-tab[disabled]{opacity: 0.4;pointer-events: none;}.module-editor-top-marker{display: flex;position: relative;top: 0;}paper-tab{display: flex;align-items: center;justify-content: center;min-width: 120px;font-weight: 500;font-size: 14px;transition: all 0.3s ease;position: relative;color: var(--secondary-tab-color);padding: 0 16px;opacity: 0.8;}paper-tab[aria-selected="true"]{color: var(--primary-text-color);opacity: 1;}paper-tab.disabled, paper-tab[disabled]{opacity: 0.4;pointer-events: none;}paper-tab ha-icon{margin-inline-end: 8px;color: var(--secondary-tab-color);}paper-tab[aria-selected="true"] ha-icon{color: var(--primary-tab-color) !important;}paper-tab::after{content: \'\';position: absolute;bottom: 0;left: 50%;width: 0;height: 3px;background-color: var(--primary-tab-color);transition: all 0.3s ease;transform: translateX(-50%);border-radius: 3px 3px 0 0;opacity: 0;}paper-tab[aria-selected="true"]::after{width: 80%;opacity: 1;}paper-tab:hover{background-color: rgba(var(--rgb-primary-color), 0.05);}paper-ripple{color: var(--primary-tab-color);opacity: 0.1;}#tabs{border-radius: 8px 8px 0 0;overflow: hidden;background-color: var(--card-background-color);box-shadow: var(--shadow-elevation-1dp);}@media (max-width: 600px){paper-tab{min-width: auto;padding: 0 12px;font-size: 13px;}}sl-tab{flex: 1;text-align: center;}.bubble-badge.hoverable{cursor: pointer !important;transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;}.bubble-badge.hoverable:active{transform: translateY(0);}.back-to-top-button{position: sticky;bottom: 0px;inset-inline-end: 20px;width: 44px;height: 44px;border-radius: 50%;background-color: var(--primary-color);display: flex;align-items: center;justify-content: center;cursor: pointer;box-shadow: 0 2px 6px rgba(0,0,0,0.3);transition: all 0.2s ease;z-index: 4;margin-inline-start: auto;margin-top: 16px;}.back-to-top-button:hover{transform: translateY(-4px);box-shadow: 0 4px 10px rgba(0,0,0,0.3);}.back-to-top-button:active{transform: translateY(0);box-shadow: 0 1px 3px rgba(0,0,0,0.3);}.back-to-top-button ha-icon{color: white !important;--mdc-icon-size: 22px;}.store-loading{display: flex;flex-direction: column;align-items: center;justify-content: center;padding: 42px;gap: 24px;position: relative;background-color: var(--card-background-color);border-radius: 16px;border: 1px solid var(--divider-color);box-shadow: var(--shadow-elevation-1dp);overflow: hidden;}.bubble-loading-icon{position: relative;width: 64px;height: 64px;display: flex;align-items: center;justify-content: center;margin-bottom: 8px;}.icon-center-wrapper{position: absolute;top: 3px;left: 6px;right: 0;bottom: 0;display: flex;align-items: center;justify-content: center;z-index: 2;}.bubble-loading-icon ha-icon{--mdc-icon-size: 26px;color: var(--primary-color);opacity: 0.9;animation: pulseAnimation 3s ease-in-out infinite;margin: 0;padding: 0;}.bubble-loading-orbit{position: absolute;top: 0;left: 0;width: 100%;height: 100%;border: 2px dashed rgba(var(--rgb-primary-color), 0.2);border-radius: 50%;animation: orbitRotation 8s linear infinite;}.bubble-loading-satellite{position: absolute;width: 12px;height: 12px;background-color: var(--info-color);border-radius: 50%;top: -6px;left: calc(50% - 6px);box-shadow: 0 0 10px rgba(var(--rgb-info-color), 0.7);animation: pulseAnimation 2s ease-in-out infinite;transform-origin: center center;}.bubble-progress-container{width: 100%;max-width: 400px;display: flex;flex-direction: column;gap: 16px;position: relative;}.bubble-progress-track{height: 10px;background-color: rgba(var(--rgb-primary-color), 0.12);border-radius: 10px;overflow: hidden;position: relative;backdrop-filter: blur(4px);box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);transition: all 0.3s ease;transform: translateZ(0);contain: paint;}.bubble-progress-bar{background: var(--info-color);border-radius: 10px;transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);min-width: 10px;}.bubble-progress-glow{position: absolute;top: 0;left: 0;right: 0;bottom: 0;}.bubble-progress-percentage{display: flex;justify-content: space-between;align-items: center;font-size: 14px;color: var(--primary-text-color);}.bubble-progress-text{font-weight: 500;}.bubble-progress-value{font-weight: 600;color: var(--primary-color);font-variant-numeric: tabular-nums;}.bubble-progress-dots{display: flex;gap: 4px;}.bubble-progress-dots .dot{width: 6px;height: 6px;border-radius: 50%;background-color: var(--primary-color);opacity: 0.5;}.bubble-progress-dots .dot:nth-child(1){animation: dotAnimation 1.4s ease-in-out infinite;}.bubble-progress-dots .dot:nth-child(2){animation: dotAnimation 1.4s ease-in-out 0.2s infinite;}.bubble-progress-dots .dot:nth-child(3){animation: dotAnimation 1.4s ease-in-out 0.4s infinite;}@keyframes orbitRotation{0%{transform: rotate(0deg);}100%{transform: rotate(360deg);}}@keyframes pulseAnimation{0%, 100%{transform: scale(1);opacity: 0.9;}50%{transform: scale(1.1);opacity: 1;}}@keyframes glowAnimation{0%{--x: 0%;opacity: 0.5;}50%{--x: 100%;opacity: 1;}100%{--x: 0%;opacity: 0.5;}}@keyframes dotAnimation{0%, 100%{transform: translateY(0);opacity: 0.5;}50%{transform: translateY(-4px);opacity: 1;}}.checkbox-grid{display: grid;grid-template-columns: repeat(3, 1fr);gap: 12px;margin-bottom: 8px;}@media (max-width: 600px){.checkbox-grid{grid-template-columns: repeat(2, 1fr);}}.module-actions{display: flex;gap: 8px;margin-inline-start: auto;}.module-editor-form .card-content{display: grid;grid-gap: 16px;padding: 0;}.module-editor-form h3{margin: 8px 0;color: var(--primary-text-color);font-size: 18px;font-weight: 500;}.module-editor-form h4:not(.bubble-section-title){margin: 0 !important;font-size: 16px;}.module-editor-form ha-code-editor{max-height: 600px;width: 100%;max-width: 100%;border: 1px solid var(--divider-color);border-radius: 4px;overflow: scroll !important;box-sizing: border-box;display: block;}.module-editor-form ha-code-editor::part(editor){width: 100%;max-width: 100%;overflow-x: auto;overflow-y: auto;}.module-editor-form ha-code-editor .monaco-editor{width: 100% !important;max-width: 100% !important;}.module-editor-form ha-code-editor .monaco-editor .monaco-editor-background{width: 100% !important;}.module-editor-form ha-code-editor .monaco-editor .overflow-guard{width: 100% !important;max-width: 100% !important;overflow-x: auto !important;}.module-editor-form ha-code-editor .monaco-editor .monaco-scrollable-element{width: 100% !important;max-width: 100% !important;overflow-x: auto !important;}.css-editor-container{width: 100%;max-width: 100%;max-height: 500px;overflow-x: auto;overflow-y: auto;box-sizing: border-box;}.css-editor-container ha-code-editor{width: 100%;max-width: 100%;overflow: hidden;box-sizing: border-box;display: block;}.css-editor-container ha-code-editor::part(editor){width: 100%;max-width: 100%;overflow-x: auto;overflow-y: auto;}.css-editor-container ha-code-editor .monaco-editor{width: 100% !important;max-width: 100% !important;}.css-editor-container ha-code-editor .monaco-editor .monaco-editor-background{width: 100% !important;}.css-editor-container ha-code-editor .monaco-editor .overflow-guard{width: 100% !important;max-width: 100% !important;overflow-x: auto !important;}.css-editor-container ha-code-editor .monaco-editor .monaco-scrollable-element{width: 100% !important;max-width: 100% !important;overflow-x: auto !important;}.module-editor-form ha-textarea{width: 100%;}.module-actions .icon-button{width: 36px;height: 36px;border-radius: 18px;display: flex;align-items: center;justify-content: center;padding: 0;}.module-actions .icon-button{background: none;}.module-actions .icon-button ha-icon{--mdc-icon-size: 18px;}.code-editor-container, .editor-schema-container{position: relative;margin-bottom: 8px;overflow-x: auto;overflow-y: visible;width: 100%;max-width: 100%;box-sizing: border-box;}.code-editor-container ha-code-editor, .editor-schema-container ha-code-editor{height: auto;width: 100%;max-width: 100%;border: 1px solid var(--divider-color);border-radius: 4px;overflow: hidden;box-sizing: border-box;display: block;}.code-editor-container ha-code-editor::part(editor), .editor-schema-container ha-code-editor::part(editor){width: 100%;max-width: 100%;overflow-x: auto;overflow-y: auto;}.code-editor-container ha-code-editor .monaco-editor, .editor-schema-container ha-code-editor .monaco-editor{width: 100% !important;max-width: 100% !important;}.code-editor-container ha-code-editor .monaco-editor .monaco-editor-background, .editor-schema-container ha-code-editor .monaco-editor .monaco-editor-background{width: 100% !important;}.code-editor-container ha-code-editor .monaco-editor .overflow-guard, .editor-schema-container ha-code-editor .monaco-editor .overflow-guard{width: 100% !important;max-width: 100% !important;overflow-x: auto !important;}.code-editor-container ha-code-editor .monaco-scrollable-element, .editor-schema-container ha-code-editor .monaco-scrollable-element{width: 100% !important;max-width: 100% !important;overflow-x: auto !important;}.form-preview{border: 1px solid var(--divider-color);border-radius: 8px;padding: 16px;}.form-preview h4{margin-top: 0;margin-bottom: 16px;color: var(--primary-color);display: flex;align-items: center;}.form-preview-container{padding: 8px;border-radius: 4px;}@keyframes pulse{0%{opacity: 0.7;}50%{opacity: 1;}100%{opacity: 0.7;}}.export-section{margin-top: 12px;}.export-buttons{display: flex;flex-wrap: wrap;gap: 12px;margin-top: 8px;margin-bottom: 16px;}.export-buttons .icon-button{flex: 1;min-width: 160px;display: flex;align-items: center;justify-content: center;padding: 10px 16px;}.export-preview{margin-top: 12px;padding: 8px;border: 1px solid var(--divider-color);border-radius: 8px;max-height: 300px;overflow: auto;background: var(--secondary-background-color);}.export-preview pre{margin: 0;white-space: pre-wrap;font-family: monospace;font-size: 12px;line-height: 1.4;padding: 8px;}ha-expansion-panel{--input-fill-color: none;scroll-margin-top: 64px;contain: inline-size;overflow: clip;}ha-expansion-panel > .content, ha-expansion-panel .content{min-width: 0;max-width: 100%;overflow-x: auto;overflow-y: visible;box-sizing: border-box;}ha-yaml-editor, ha-code-editor{min-width: 0;max-width: 100%;width: 100%;display: block;box-sizing: border-box;contain: inline-size;}@keyframes highlight{0%{background-color: var(--primary-color);}100%{background-color: transparent;}}ha-expansion-panel.recently-toggled{animation: highlight 2s;}.helper-text{display: block;color: var(--secondary-text-color);font-size: 12px;margin-top: -4px;margin-bottom: 8px;}.helper-text a{color: var(--primary-color);}.helper-text a:hover{opacity: 0.8;}.bubble-info > div{--mdc-icon-size: 18px;}bubble-formfield.apply-module-button{height: 40px;border-radius: 32px;padding: 0 16px;background-color: rgba(0, 0, 0, 0.1);;}.module-editor-buttons-container{display: flex;gap: 8px;justify-content: flex-end;position: sticky;bottom: -24px;background-color: var(--card-background-color);padding: 8px 0;}.module-editor-content--ha-tab-group.module-editor-content--ha-tab-group-modern .module-editor-buttons-container{bottom: -8px;padding-bottom: 12px;}.module-toggles-container{display: flex;flex-direction: column;gap: 8px;}.module-toggles-label{font-size: 0.85em;font-weight: 500;color: var(--secondary-text-color);padding-inline-start: 4px;margin-bottom: -4px;}.module-toggles{display: flex;flex-wrap: wrap;align-items: center;gap: 8px;}.module-badges{display: inline-flex;margin-inline-start: auto;gap: 4px;}.module-status-icon{opacity: 0.3;transition: opacity 0.2s ease, color 0.2s ease;}.module-status-icon--opaque{opacity: 1;}.module-status-icon--active{color: var(--info-color) !important;}.module-badges .update-badge{margin-inline-start: 0 !important;}.global-badge{background-color: transparent !important;border: 1px solid rgb(0, 220, 80);padding: 1px 3px !important;}.update-badge + .global-badge{margin-inline-start: 4px !important;}.toggle-badge{cursor: pointer !important;border: 1px solid var(--primary-text-color);}.my-modules-controls{display: flex;flex-direction: column;gap: 12px;margin-bottom: 16px;background-color: var(--card-background-color);border-radius: 16px;padding: 16px;border: 1px solid var(--divider-color);box-shadow: var(--shadow-elevation-1dp);}.my-modules-top-row{display: flex;align-items: center;gap: 12px;}.my-modules-search{flex: 1;display: flex;align-items: center;border-radius: 32px;overflow: hidden;}.my-modules-search ha-textfield, .my-modules-search ha-input, .my-modules-search ha-form, .my-modules-search ha-input-search{flex-grow: 1;width: 100%;--ha-input-padding-bottom: 0;}.my-modules-search ha-textfield::part(prefix){padding-inline-start: 8px;}.my-modules-search ha-textfield .leading-icon{color: var(--primary-text-color);}.my-modules-sort-menu{display: flex;align-items: center;}.unsupported-modules-warning{margin: 0;}.my-modules-sort-menu .sort-trigger{background: none;padding: 0;margin: 0 4px;}.my-modules-sort-menu mwc-list-item[selected]{background-color: rgba(var(--rgb-primary-color), 0.12) !important;}.my-modules-sort-menu mwc-list-item[selected]:hover{background-color: rgba(var(--rgb-primary-color), 0.18) !important;}ha-icon-button ha-icon{line-height: 100% !important;}.module-editor-form h4.suggestions-field-title{margin: 16px 0 8px !important;}.form-preview bubble-formfield.suggestions-preview-toggle{display: flex;margin-bottom: 16px;}'+ne)}
    `}static _resizeObserver=null;static _editorInstanceMap=new WeakMap;_getBubbleCardFromPreview(){try{if(this._previewCardRoot){const e=this._previewCardRoot.host||this._previewCardHost;if(e?.isConnected||this._previewCardRoot.isConnected)return this._previewCardRoot}if(this._previewCardHost?.isConnected)return this._previewCardHost.shadowRoot||this._previewCardHost.getRootNode?.()||null;const e=this._getEditorPreviewContainer();if(e){const t=this._deepQuerySelector(e,"bubble-card"),o=t?.shadowRoot||null;if(o)return this._previewCardHost=t,this._previewCardRoot=o,o}}catch(e){return null}}_setupAutoRowsObserver(){const e=void 0!==this._config?.grid_options?.rows&&null!==this._config?.grid_options?.rows&&""!==this._config?.grid_options?.rows;if(!this._config||e||!1===this._rowsAutoMode)return;const t=this._getBubbleCardFromPreview();if(!t)return;const o=[t.querySelector(".bubble-sub-button-bottom-container"),t.querySelector(".bubble-wrapper.has-bottom-buttons .bubble-buttons-column-wrapper"),t.querySelector(".bubble-buttons-container.bottom-fixed"),t.querySelector(".bubble-sub-button-container")].filter(Boolean);le._resizeObserver||(le._resizeObserver=new ResizeObserver(e=>{for(const t of e){const e=le._editorInstanceMap.get(t.target);if(e){const t=e._getBubbleCardFromPreview();t&&e._computeAndApplyRows(t)}}})),this._observedElements&&this._observedElements.forEach(e=>{o.includes(e)||(le._resizeObserver.unobserve(e),le._editorInstanceMap.delete(e))}),o.forEach(e=>{this._observedElements?.includes(e)||(le._resizeObserver.observe(e),le._editorInstanceMap.set(e,this))}),this._observedElements=o,requestAnimationFrame(()=>{const e=this._getBubbleCardFromPreview();e&&this._computeAndApplyRows(e)})}_hasCustomHeightStyles(){const e=[/\.bubble-container[^{]*\{[^}]*aspect-ratio\s*:/i,/\.bubble-container[^{]*\{[^}]*height\s*:\s*100%/i,/\.bubble-container[^{]*\{[^}]*height\s*:\s*\d+(\.\d+)?\s*(px|em|rem|vh|vw|%)/i],t=t=>!(!t||"string"!=typeof t)&&e.some(e=>e.test(t));if(this._config?.styles&&t(this._config.styles))return!0;try{if(B.Ki&&B.Ki.size>0){const e=new Set,o=new Set;Array.isArray(this._config?.modules)?this._config.modules.forEach(t=>{"string"==typeof t&&t.startsWith("!")?o.add(t.substring(1)):"string"==typeof t&&e.add(t)}):this._config?.modules&&"string"==typeof this._config.modules&&(this._config.modules.startsWith("!")?o.add(this._config.modules.substring(1)):e.add(this._config.modules)),B.Ki.has("default")&&!o.has("default")&&e.add("default"),B.Ki.forEach((t,i)=>{t&&"object"==typeof t&&!0===t.is_global&&!o.has(i)&&e.add(i)});for(const o of e){const e=B.Ki.get(o);if(e&&t("object"==typeof e?e.code:e))return!0}}}catch(e){}return!1}_computeAndApplyRows(e){try{if(!e||!1===this._rowsAutoMode||!this._config)return{applied:!1};if(this._hasCustomHeightStyles()){if(void 0!==this._config.rows&&!1!==this._rowsAutoMode){const e={...this._config};delete e.rows,this._config=e,(0,n.rC)(this,"config-changed",{config:e})}return{applied:!1}}if(!1===e.isConnected)return{applied:!1,detached:!0};const t="calendar"===this._config.card_type,o="separator"===this._config.card_type,i=e.querySelector(".bubble-sub-button-bottom-container"),a=e.querySelector(".bubble-wrapper.has-bottom-buttons .bubble-buttons-column-wrapper")||e.querySelector(".bubble-buttons-container.bottom-fixed"),r=e.querySelector(".bubble-sub-button-container"),s=e.querySelector(".bubble-content-container"),l=e.querySelector(".bubble-container"),d=e=>{if(!e)return 0;try{const t=getComputedStyle(e),o=parseFloat(t.bottom);return Number.isFinite(o)?Math.max(0,o):0}catch(e){return 0}},c=(0,I.v6)(e);let u=0,p=0,h=0,b=0,m=0,g=!1,_=56,f=8;try{if(u=i?i.getBoundingClientRect().height:0,p=a?a.getBoundingClientRect().height:0,h=r?r.getBoundingClientRect().height:0,a&&u>0&&(b=d(a)),h>0){const e=getComputedStyle(r);m=(parseFloat(e.marginTop)||0)+(parseFloat(e.marginBottom)||0)+(parseFloat(e.paddingTop)||0)+(parseFloat(e.paddingBottom)||0)}s&&(g=Array.from(s.children||[]).some(e=>{const t=e.getBoundingClientRect(),o=getComputedStyle(e);return t.width>0&&t.height>0&&"none"!==o.display&&"hidden"!==o.visibility&&"0"!==o.opacity}));const t=getComputedStyle(l||e);_=parseFloat(t.getPropertyValue("--row-height"))||56,f=parseFloat(t.getPropertyValue("--row-gap"))||8}finally{c()}const y={bottomSub:Math.round(u),bottomMain:Math.round(p),mainSub:Math.round(h)};if(this._lastMeasuredHeights){const e=1,t=Math.abs(y.bottomSub-this._lastMeasuredHeights.bottomSub),o=Math.abs(y.bottomMain-this._lastMeasuredHeights.bottomMain),i=Math.abs(y.mainSub-this._lastMeasuredHeights.mainSub);if(t<e&&o<e&&i<e)return{applied:!1}}if(this._lastMeasuredHeights=y,t&&!(u>0||p>0)){if(this._firstRowsComputation=!0,1!==this._config.rows){const e={...this._config,rows:1};this._config=e,(0,n.rC)(this,"config-changed",{config:e})}return}const v=h>0,$=(()=>{const e=this._config?.sub_button;return!!e&&(!Array.isArray(e)&&(Array.isArray(e.bottom)?e.bottom:[]).some(e=>!!e))})();let w=u+p;w<=0&&$&&(w=46),w+=b;let x=0;v&&(x=h+m);const k=w>0,C=k?46:36;x>0&&(x=Math.max(x,C));const A=_+f,q="separator"===this._config.card_type?.8:1;let S;const M=k&&!v&&(g||t||o),L=w+x;if(L>0||M){const e=Number.isFinite(A)&&A>0?A:_,t=(M?46:0)-36+("sub-buttons"===this._config.card_type?-4:0);S=q+Math.ceil((L||0)+t)/e,S=Math.max(.1,Math.round(1e3*S)/1e3)}else S=void 0;const P=this._lastComputedRows;this._lastComputedRows=S;const E=this._config.rows;if(S===E||void 0===S&&void 0===E)return this._firstRowsComputation=!0,{applied:!1};if("number"==typeof S&&"number"==typeof E&&Math.abs(S-E)<.01)return{applied:!1};if(S===q&&void 0===E)return{applied:!1};if(!1===this._rowsAutoMode)return{applied:!1};if(P!==S)return(this._unconfirmedRowsPasses=(this._unconfirmedRowsPasses||0)+1)<=4&&(this._lastMeasuredHeights=null,this._scheduleAutoRowsCompute()),{applied:!1,unconfirmed:!0};this._unconfirmedRowsPasses=0;const T={...this._config};return void 0===S?delete T.rows:T.rows=S,this._config=T,this._firstRowsComputation?((0,n.rC)(this,"config-changed",{config:T}),{applied:!0,rows:T.rows}):(this._firstRowsComputation=!0,{applied:!1,skippedFirst:!0})}catch(e){}return{applied:!1}}_initializeLists(e){let t=[];0===Object.keys(this._entityCache).length?Object.keys(this._hassRender.states).forEach(e=>{const o=this._hassRender.states[e],i=e.split(".")[0];this._entityCache[i]||(this._entityCache[i]=[]),this._entityCache[i].push(e),this._selectable_attributes.some(e=>o.attributes?.[e])&&(t.includes(e)||t.push(e))}):(["input_select","select"].forEach(e=>{this._entityCache[e]&&(t=[...t,...this._entityCache[e]])}),Object.keys(this._hassRender.states).forEach(e=>{const o=this._hassRender.states[e];this._selectable_attributes.some(e=>o.attributes?.[e])&&(t.includes(e)||t.push(e))})),["input_select","select"].forEach(e=>{this._entityCache[e]&&this._entityCache[e].forEach(e=>{t.includes(e)||t.push(e)})}),t=[...new Set(t)];const o={};t.forEach(e=>{this._hassRender.states[e]&&(o[e]=this._hassRender.states[e])}),this.inputSelectList={...this._hassRender},this.inputSelectList.states=o,this._entity?this._entity===this._cachedAttributeListEntity&&this._cachedAttributeList?this.attributeList=this._cachedAttributeList:(this.attributeList=Object.keys(this._hassRender.states[this._entity]?.attributes||{}).map(e=>{let t=this._hassRender.states[this._entity];return{label:this._hassRender.formatEntityAttributeName(t,e),value:e}}),this._cachedAttributeList=this.attributeList,this._cachedAttributeListEntity=this._entity):(this.attributeList=[],this._cachedAttributeList=null,this._cachedAttributeListEntity=null);const i=e("editor.calendar.name"),a=e("editor.card_names.button"),n=this._isStandalonePopupDisallowedInCurrentDialog();(!this.cardTypeList||this._cachedStandalonePopupDisallowed!==n||this._cachedTranslationSentinel&&this._cachedTranslationSentinel!==a)&&(this.cardTypeList=[{label:e("editor.card_names.button"),value:"button"},{label:i,value:"calendar"},{label:e("editor.card_names.cover"),value:"cover"},{label:e("editor.card_names.climate"),value:"climate"},{label:e("editor.card_names.empty_column"),value:"empty-column"},{label:e("editor.card_names.hbs"),value:"horizontal-buttons-stack"},{label:e("editor.card_names.media_player"),value:"media-player"},...n?[]:[{label:e("editor.card_names.popup"),value:"pop-up"}],{label:e("editor.card_names.select"),value:"select"},{label:e("editor.card_names.separator"),value:"separator"},{label:e("editor.card_names.sub_buttons"),value:"sub-buttons"}],this._cachedTranslationSentinel=a,this._cachedStandalonePopupDisallowed=n)}_isStandalonePopupDisallowedInCurrentDialog(){try{return Boolean(this._getActiveEditCardDialog()?._params?._bubbleDisallowStandalonePopup)}catch(e){return!1}}_isNestedStandalonePopupConfig(e=this._config){return Boolean(this._disallowStandalonePopup&&"custom:bubble-card"===e?.type&&"pop-up"===e?.card_type)}_getHomeAssistantHost(){try{return document.querySelector("body > home-assistant")||null}catch(e){return null}}_getActiveEditCardDialog(){try{return this._getHomeAssistantHost()?.shadowRoot?.querySelector("hui-dialog-edit-card")||null}catch(e){return null}}_getActiveLovelace(){const e=this._getActiveEditCardDialog();if(e?._params?.lovelace)return e._params.lovelace;const t=this._getHomeAssistantHost();if(!t)return null;try{const e=this._deepQuerySelector(t.shadowRoot,"hui-root");return e?.lovelace||null}catch(e){return null}}_getActiveLovelaceViewIndex(){const e=e=>{if(null==e||""===e)return null;const t="number"==typeof e?e:Number(e);return Number.isInteger(t)&&t>=0?t:null},t=e(this._getActiveEditCardDialog()?._params?.viewIndex);if(null!==t)return t;const o=this._getHomeAssistantHost();if(!o)return null;try{const t=this._deepQuerySelector(o.shadowRoot,"hui-root");return[t?._viewIndex,t?.viewIndex,t?._selectedView,t?.selectedView,t?.lovelace?.current_view].map(e).find(e=>null!==e)??null}catch(e){return null}}_getActiveLovelaceConfig(){const e=this._getActiveLovelace();return e?.rawConfig||e?.config?e.rawConfig||e.config:this._getActiveEditCardDialog()?._params?.lovelaceConfig||null}_captureStandaloneParentDialogParams(e=this._config){const t=this._getActiveEditCardDialog();return(0,re.gT)(t,e)}_extractCardsFromStandaloneLovelaceConfig(e){const t=e?.views?.[0]?.sections?.[0]?.cards;return Array.isArray(t)?t:Array.isArray(e?.views?.[0]?.cards)?e.views[0].cards:[]}_showStandaloneDialogParams(e,t){if(!e||!t||"function"!=typeof e.showDialog)return!1;try{return(0,re.r8)(e),e.showDialog(t)||!0}catch(e){return!1}}_scheduleStandaloneParentDirtyState(e,t,o=null){const i=t?._originalCardConfig,a=t?.cardConfig;if(!e||!i)return;const n=e=>{if(!e||!a)return!1;if(e===a)return!0;const t=a.hash,o=e.hash;return t&&o&&t===o?a.card_type?e.card_type===a.card_type:e.type===a.type:e.type===a.type&&e.card_type===a.card_type},r=(t=0)=>{const o=e._dirtySlices?.get?.("__default__")?.current,a=e._params?.cardConfig;if(n(a)||n(o))return(0,re.NQ)(e,i),void this._applyPopupEditorTabState(e);t<10&&requestAnimationFrame(()=>r(t+1))},s=()=>requestAnimationFrame(()=>r());o&&"function"==typeof o.then?o.then(s).catch(s):Promise.resolve().then(s)}_reopenStandaloneParentDialog(e,t,o=null){if(!e)return!1;const i=(0,re.KI)(e,t);if(!i)return!1;let a=null,r=!1;if(r=this._showStandaloneDialogParams(o,i),r)a=o;else{const e=this._getActiveEditCardDialog();r=this._showStandaloneDialogParams(e,i),r&&(a=e)}if(a)return this._scheduleStandaloneParentDirtyState(a,i,r),!0;const s=this._getHomeAssistantHost();return!!s&&(setTimeout(()=>{(0,n.rC)(s,"show-dialog",{dialogTag:"hui-dialog-edit-card",dialogImport:()=>Promise.resolve(),dialogParams:{...i}}),requestAnimationFrame(()=>{this._scheduleStandaloneParentDirtyState(this._getActiveEditCardDialog(),i)})},0),!0)}_applyPopupEditorTabState(e){const t=()=>{try{(0,re.r8)(e);const t=(0,re.sk)(e);if(!t)return;this._injectHideTabsStyle(t.shadowRoot)}catch(e){}};t(),setTimeout(t,0)}_injectHideTabsStyle(e){if(!e||e.querySelector("#bubble-card-hide-tabs"))return;const t=document.createElement("style");t.id="bubble-card-hide-tabs",t.textContent="ha-tab-group { display: none !important; }",e.appendChild(t)}_openStandaloneChildDialogInCurrentEditor(e,t,o){const i=this._getActiveEditCardDialog();if(!i||!e)return!1;const a=()=>{window.removeEventListener("dialog-closed",r,!0),n()},n=(0,re.Pb)(i,()=>{const e=o(),n=this._reopenStandaloneParentDialog(t,e,i);return n&&a(),n}),r=e=>{if("hui-dialog-edit-card"!==e?.detail?.dialog)return;const n=this._getHomeAssistantHost()?.shadowRoot;if(n?.contains(i))return;a();const r=o();this._reopenStandaloneParentDialog(t,r,i)};window.addEventListener("dialog-closed",r,!0);try{(0,re.r8)(i);try{i.shadowRoot?.querySelector("hui-card-element-editor")?.shadowRoot?.querySelector("#bubble-card-hide-tabs")?.remove()}catch(e){}return i.showDialog({...e,_bubbleDisallowStandalonePopup:!0}),!0}catch(e){return a(),!1}}async _dispatchStandaloneSectionDialog(e,t,o,i){const a=this._getHomeAssistantHost();if(!a)return!1;const n={type:"grid",cards:[...e]},r=document.createElement("hui-section");r.style.display="none",r.hass=this.hass,r.index=0,r.viewIndex=0,r.config=n,r.lovelace={config:{views:[{path:"bubble-card-standalone",title:"Bubble Card",sections:[n]}]},editMode:!0,saveConfig:async e=>{await i(e)}},a.appendChild(r);try{"function"==typeof r._initializeConfig?await r._initializeConfig():await r.updateComplete;const e=r._layoutElement;return!!e&&(e.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:o})),!0)}catch(e){return console.error("Bubble Card Editor: failed to open standalone pop-up dialog",e),!1}finally{setTimeout(()=>r.remove(),0)}}async _openStandaloneCardDialogForPopup(e,t){return this._openStandaloneCardDialog({...t,popupConfig:e})}async _openStandaloneCardDialog(e){const t=this._getHomeAssistantHost();(0,re.r8)(this._getActiveEditCardDialog());const o=e?.popupConfig||this._config,i=this._captureStandaloneParentDialogParams(o);if(!t||!i)return!1;const a=!e?.popupConfig||this._normalizePopupHash(e.popupConfig?.hash)===this._normalizePopupHash(this._config?.hash);let n={...o,cards:[...o?.cards||[]]};const r=async e=>{n={...n,cards:this._extractCardsFromStandaloneLovelaceConfig(e)},a&&(this._config=n)};if("add"===e?.type){let e=null;const o=t=>{"hui-dialog-edit-card"===t?.detail?.dialogTag&&(e=t.detail?.dialogParams,t.stopImmediatePropagation?.(),t.stopPropagation())},a=r=>{"hui-dialog-create-card"===r?.detail?.dialog&&(t.removeEventListener("show-dialog",o,!0),window.removeEventListener("dialog-closed",a,!0),e?setTimeout(()=>{this._openStandaloneChildDialogInCurrentEditor(e,i,()=>n)},0):setTimeout(()=>{this._reopenStandaloneParentDialog(i,n)},0))};t.addEventListener("show-dialog",o,!0),window.addEventListener("dialog-closed",a,!0);const s=await this._dispatchStandaloneSectionDialog(n.cards,"ll-create-card",void 0,r);return s||(t.removeEventListener("show-dialog",o,!0),window.removeEventListener("dialog-closed",a,!0)),s}const s=e=>{"hui-dialog-edit-card"===e?.detail?.dialogTag&&(t.removeEventListener("show-dialog",s,!0),e.stopImmediatePropagation?.(),e.stopPropagation(),this._openStandaloneChildDialogInCurrentEditor(e.detail?.dialogParams,i,()=>n))};t.addEventListener("show-dialog",s,!0);const l=await this._dispatchStandaloneSectionDialog(n.cards,"ll-edit-card",{path:[0,0,e.index]},r);return l||t.removeEventListener("show-dialog",s,!0),l}_handleCardContext(e){try{const t=e?.detail;if(!t)return;const o=t.context||t.card?.closest?.("bubble-card")||t.card?.getRootNode?.()?.host||null,i=t.context?.shadowRoot||o?.shadowRoot||t.card?.getRootNode?.()||null;if(!i)return;Array.isArray(t?.config?.cards)&&o&&this._attachStandalonePopupPreviewBridge(o,t.config);const a=this._scoreCardContext(t),n=this._previewCardHost?.isConnected,r=!!o&&o===this._previewCardHost;if(a<this._previewCardScore)return;if(a===this._previewCardScore&&r&&n)return;this._previewCardScore=a,this._previewCardRoot=i,this._previewCardHost=o||i.host||null,this._setupAutoRowsObserver()}catch(e){}}_attachStandalonePopupPreviewBridge(e,t){if(!e||!t||"pop-up"!==t.card_type||!Array.isArray(t.cards))return;const o=this._normalizePopupHash(t.hash),i=this._normalizePopupHash(this._config?.hash),a=t===this._config||o&&i&&o===i,r=e=>a?this._openStandaloneCardDialog(e):this._openStandaloneCardDialogForPopup(t,e);e._standaloneCardsUpdater=o=>{this._updateStandaloneCardsForPopup(t,o)||(0,n.rC)(e,"config-changed",{config:{...t,cards:o}})},e._standaloneOpenCardDialog=r,this._rememberStandaloneOpenCardDialog(t,r)}_updateStandaloneCardsForPopup(e,t){if(!e||"pop-up"!==e.card_type||!Array.isArray(t))return!1;const o=this._normalizePopupHash(e.hash),i=this._normalizePopupHash(this._config?.hash),a=e===this._config||o&&i&&o===i,r=this._captureStandaloneParentDialogParams(e),s={...r?._standalonePopupConfig||e,cards:t};a&&(this._config=s);const l=r?._standalonePopupPathInDialog;return!!(Array.isArray(l)&&l.length>0&&this._reopenStandaloneParentDialog(r,s,this._getActiveEditCardDialog()))||(a?((0,n.rC)(this,"config-changed",{config:this._config}),!0):this._reopenStandaloneParentDialog(r,s,this._getActiveEditCardDialog()))}_scoreCardContext(e){const t=e?.config||{},o=this._config||{};let i=0;return e?.context?.inEditorPreview&&(i+=100),(e?.isEditor||e?.editMode)&&(i+=5),t.card_type&&t.card_type===o.card_type&&(i+=4),t.entity&&t.entity===o.entity&&(i+=3),t.hash&&t.hash===o.hash&&(i+=2),t.button_type&&t.button_type===o.button_type&&(i+=1),i}_rememberStandaloneOpenCardDialog(e,t){try{if("undefined"==typeof window||"function"!=typeof t)return;const o=this._normalizePopupHash(e?.hash||this._config?.hash);if(!o)return;window.__bubbleStandalonePopupEditorOpeners=window.__bubbleStandalonePopupEditorOpeners||new Map,window.__bubbleStandalonePopupEditorOpeners.set(o,t),this._rememberedStandaloneOpenerHashes=this._rememberedStandaloneOpenerHashes||new Map,this._rememberedStandaloneOpenerHashes.set(o,t)}catch(e){}}_normalizePopupHash(e){if("string"!=typeof e)return"";const t=e.trim();return t?t.startsWith("#")?t:`#${t}`:""}_resetPreviewCardReference(){this._previewCardRoot=null,this._previewCardHost=null,this._previewCardScore=-1/0,this._lastMeasuredHeights=null,this._lastComputedRows=se,this._unconfirmedRowsPasses=0}}customElements.define("bubble-card-editor",le)},1693(e,t,o){o.d(t,{DW:()=>n,T5:()=>a,kX:()=>s});var i=o(6684);function a(e,t){return String(e).split(/(\{[a-z0-9_]+\})/g).map(e=>{const o=/^\{([a-z0-9_]+)\}$/.exec(e);return o?t[o[1]]??"":e})}function n(e,t,o,i){if(void 0===e._lazyContentLoadedFlags&&(e._lazyContentLoadedFlags={}),o&&!e._lazyContentLoadedFlags[t]&&(e._lazyContentLoadedFlags[t]=!0),e._lazyContentLoadedFlags[t])return i()}function r(){return"undefined"!=typeof customElements&&void 0!==customElements.get("ha-dropdown")}function s({trigger:e,items:t}){const o=t.map(e=>"divider"===e.type?r()?i.qy`<wa-divider role="separator" aria-orientation="horizontal" orientation="horizontal"></wa-divider>`:i.qy`<li divider role="separator"></li>`:function({icon:e,label:t,disabled:o=!1,onClick:a,variant:n=null,type:s="item",checked:l=!1}){return r()?i.qy`
            <ha-dropdown-item 
                ?disabled=${o} 
                @click=${a} 
                variant=${n||""}
                type=${"checkbox"===s?"checkbox":""}
                ?checked=${"checkbox"===s&&l}
            >
                ${e?i.qy`<ha-icon icon="${e}" slot="icon"></ha-icon>`:""}
                ${t}
            </ha-dropdown-item>
        `:i.qy`
            <mwc-list-item 
                graphic="icon" 
                ?disabled=${o} 
                @click=${a} 
                class=${"danger"===n?"warning":""}
                ?selected=${"checkbox"===s&&l}
            >
                ${e?i.qy`<ha-icon icon="${e}" slot="graphic"></ha-icon>`:""}
                ${t}
            </mwc-list-item>
        `}(e));return r()?i.qy`
            <ha-dropdown>
                ${e}
                ${o}
            </ha-dropdown>
        `:i.qy`
            <ha-button-menu corner="BOTTOM_START" menuCorner="START" fixed @closed=${e=>e.stopPropagation()} @click=${e=>e.stopPropagation()}>
                ${e}
                ${o}
            </ha-button-menu>
        `}},2300(e,t,o){function i(){try{const e=localStorage.getItem("bubble-card-module-store");if(!e)return null;const t=JSON.parse(e);if(localStorage.getItem("bubble-card-api-failure-timestamp")&&t&&t.expiration<Date.now()){console.log("🛡️ API in cooldown period after failure and cache expired, temporary extension of validity");const e=Date.now()+72e5;return t.expiration=e,localStorage.setItem("bubble-card-module-store",JSON.stringify(t)),console.log("⏳ Cache extended until",new Date(e)),t}return t&&t.expiration>Date.now()?t:t||null}catch(e){return console.error("Error reading cache:",e),null}}function a(e){if(e&&0!==Object.keys(e).length)try{const t=Date.now()+864e5;localStorage.setItem("bubble-card-module-store",JSON.stringify({modules:e,expiration:t,lastFetchedAt:Date.now()})),console.log("Module data cached until",new Date(t))}catch(e){console.error("Error saving to cache:",e)}}function n(e,t,o="info"){if(e.hass){const i=new CustomEvent("hass-notification",{detail:{message:t,severity:o},bubbles:!0,composed:!0});e.dispatchEvent(i)}else console.log(`[${o}] ${t}`)}o.d(t,{TJ:()=>i,aN:()=>a,qk:()=>n})},5250(e,t,o){o.d(t,{Ac:()=>h,Hs:()=>u,generateYamlExport:()=>c,lW:()=>p});var i=o(6799),a=o(2300),n=o(444),r=o(6331);const s=new Set(["id","yaml","editor_raw","editorReference","type","imageUrl"]),l=new Set(["id","name","version","creator","link","supported","description","code","editor","is_global"]);function d(e){const{id:t,name:o,version:i,creator:a,link:r,supported:d,description:c,code:u,editor:p,is_global:h}={...e},b=(0,n.n$)().map(e=>e.id);let m=d;d&&Array.isArray(d)&&d.length===b.length&&b.every(e=>d.includes(e))&&(m=void 0);const g={name:o,version:i,creator:a,link:r,supported:m,description:c,code:u,editor:p};return!0===h&&(g.is_global=!0),Object.keys(g).forEach(e=>{const t=g[e];(null==t||"link"===e&&""===t)&&delete g[e]}),Object.keys(e||{}).forEach(t=>{if(l.has(t)||s.has(t))return;const o=e[t];null!=o&&""!==o&&(Array.isArray(o)&&0===o.length||(g[t]=o))}),{id:t,cleanData:g}}function c(e){try{const{id:t,cleanData:o}=d(e),a={[t]:o};return i.Ay.dump(a,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,sortKeys:!1})}catch(e){return console.error("Error generating YAML export:",e),"# Error generating YAML export"}}function u(e){try{const{id:t,cleanData:o}=d(e),{name:a,version:r,creator:s,description:l,code:c,editor:u,supported:p}=o,h=(0,n.n$)().map(e=>e.id),b=!p||Array.isArray(p)&&p.length===h.length&&h.every(e=>p.includes(e));let m=`# ${a}\n\n`;if(m+=`**Version:** ${r}  \n`,m+=`**Creator:** ${s}\n\n`,m+="> [!IMPORTANT] \n",m+="> **Supported cards:**\n",b?m+=">  - All cards are supported\n":p&&p.length>0&&p.forEach(e=>{m+=`>  - ${e.replace(/-/g," ").replace(/\b\w/g,e=>e.toUpperCase())}\n`}),m+="\n",l&&(m+=`${l}\n`,m+="Configure this module via the editor or in YAML, for example:\n\n"),m+="```yaml\n",m+=`${t}: \n`,u&&Array.isArray(u)&&u.length>0){const e=u[0];e&&e.name&&(m+=`    ${e.name}: YOUR_VALUE\n`)}else m+="    # Your configuration here\n";if(m+="```\n\n",m+="---\n\n",m+="<details>\n\n",m+="<summary><b>🧩 Get this Module</b></summary>\n\n",m+="<br>\n\n",m+=`> To use this module, simply install it from the Module Store (from the editor of any card > Modules), or copy and paste the following configuration into a \`/www/bubble/modules/${t}.yaml\` file.\n\n`,m+="```yaml\n",m+=`${t}:\n`,m+=`    name: "${a}"\n`,m+=`    version: "${r}"\n`,m+=`    creator: "${s}"\n`,m+='    link: "https://github.com/Clooos/Bubble-Card/discussions/XXXX"\n\n',p&&p.length>0&&!b&&(m+="    supported:\n",p.forEach(e=>{m+=`        - ${e}\n`}),m+="\n"),m+="    description: |\n",l){const e=l.split("\n").map(e=>`        ${e}`).join("\n");if(m+=`${e}\n`,m+="        <br><br>\n",m+="        <code-block><pre>\n",m+=`        ${t}: \n`,u&&Array.isArray(u)&&u.length>0){const e=u[0];e&&e.name?m+=`            ${e.name}: YOUR_VALUE\n`:m+="            # Your configuration here\n"}else m+="            # Your configuration here\n";m+="        </pre></code-block>\n\n"}if(m+="    code: |\n",c){const e=c.split("\n").map(e=>`        ${e}`).join("\n");m+=`${e}\n\n`}else m+="        # Your code here\n\n";if(u){const e="object"==typeof u?i.Ay.dump(u,{indent:2}):u;m+="    editor:\n";const t=e.split("\n").map(e=>`      ${e}`).join("\n");m+=`${t}`,m+="\n```"}else m+="```";return m+="\n\n</details>\n\n",m+="---\n\n",m+="### Screenshot:\n\n",m+="Important: The first screenshot here will be used on the Module Store, so please provide one.\n",m}catch(e){return console.error("Error generating GitHub export:",e),"# Error generating GitHub export format"}}async function p(e,t,o,i){const n=(0,r.Ay)(e.hass),s=()=>{(0,a.qk)(e,o,"success"),"function"==typeof i&&i(t)},l=()=>{(0,a.qk)(e,n("editor.module_editor.copy_error"),"error"),"function"==typeof i&&i(t)};if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText(t),void s()}catch(e){console.warn("Clipboard API failed:",e.name,e.message)}try{const o=e.shadowRoot??document.body,i=document.createElement("textarea");i.value=t,Object.assign(i.style,{position:"fixed",top:"0",left:"0",width:"2em",height:"2em",border:"none",padding:"0",margin:"0",outline:"none",opacity:"0",pointerEvents:"none"}),o.appendChild(i),i.focus({preventScroll:!0}),i.select();const a=document.execCommand("copy");o.removeChild(i),a?s():l()}catch(e){console.error("execCommand clipboard fallback failed:",e),l()}}function h(e,t,o){const i=(0,r.Ay)(e.hass);try{const n=c(t),r=new Blob([n],{type:"text/yaml"}),s=URL.createObjectURL(r),l=document.createElement("a");return l.href=s,l.download=`${t.id}.yaml`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(s),(0,a.qk)(e,i("editor.module_editor.download_success"),"success"),"function"==typeof o&&o(n),!0}catch(t){return console.error("Error downloading module:",t),(0,a.qk)(e,i("editor.module_editor.download_error").replace("{error}",t.message),"error"),!1}}},4565(e,t,o){o.d(t,{G:()=>c,m:()=>u});var i=o(985),a=o(2300),n=o(2851),r=o(9533),s=o(6799),l=o(6331);function d(e){try{e._processedSchemas&&(e._processedSchemas={}),e._schemaCache?Object.keys(e._schemaCache).forEach(t=>{delete e._schemaCache[t]}):e._schemaCache={},e.lastEvaluatedStyles="",e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card),(0,r.rC)(e,"editor-refresh",{}),e.requestUpdate(),setTimeout(()=>{e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card),e.requestUpdate(),setTimeout(()=>{if(e._config){const t={...e._config};e.stylesYAML&&(e.stylesYAML=null,document.dispatchEvent(new CustomEvent("yaml-modules-updated"))),(0,r.rC)(e,"config-changed",{config:t}),e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card)}e.requestUpdate()},100)},50)}catch(e){}}async function c(e,t){const c=(0,l.Ay)(e.hass);try{let l="";if(t.yamlContent&&""!==t.yamlContent.trim()?l=t.yamlContent:t.description&&""!==t.description.trim()&&(l=t.description),!l)throw new Error("No YAML content found for this module");const u=(0,n.oV)(l)||t.id,p=(0,n.tF)(l,u,{title:t.name,defaultCreator:t.creator});let h=l;try{const e=s.Ay.load(l);if(e&&"object"==typeof e){const o=Object.keys(e);if(1===o.length){const i=o[0],a=e[i];if(a&&"object"==typeof a)if(a[u]){t.moduleLink&&"object"==typeof a[u]&&(a[u].link=t.moduleLink);const e={};e[u]=a[u],h=s.Ay.dump(e,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0})}else if(i===u&&Object.keys(a).some(e=>"object"==typeof a[e]&&a[e].name&&a[e].code)){const e={};Object.entries(a).forEach(([t,o])=>{"object"==typeof o&&"unsupported"!==t&&"editor"!==t&&o.name||(e[t]=o)}),t.moduleLink&&(e.link=t.moduleLink),e.code&&"string"==typeof e.code&&(e.code=e.code.replace(/\n/g,"\n      "));const o={};o[u]=e,h=s.Ay.dump(o,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,flowLevel:-1})}else if(i===u)t.moduleLink&&!e[u].link&&(e[u].link=t.moduleLink),h=s.Ay.dump(e,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,flowLevel:-1});else{t.moduleLink&&(a.link=t.moduleLink);const e={};e[u]=a,h=s.Ay.dump(e,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,flowLevel:-1})}}else{t.moduleLink&&(e.link=t.moduleLink);const o={};o[u]=e,h=s.Ay.dump(o,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,flowLevel:-1})}h=h.replace(/code: \|/g,"code: |").replace(/description: \|/g,"description: |").replace(/(\|\n)(\s+)/g,(e,t,o)=>t+"      ");try{const e=s.Ay.load(h);e&&e[u]||console.warn("Warning: YAML formatting may have issues")}catch(e){console.warn("Error validating formatted YAML:",e),h=l}}}catch(e){console.warn("Error processing YAML structure:",e)}const b=h;i.Ki.set(u,p);try{i.sq.set(u,"entity")}catch(e){}document.dispatchEvent(new CustomEvent("yaml-modules-updated")),function(e,t){try{window.dispatchEvent(new CustomEvent("bubble-card-module-updated",{detail:{moduleId:e,moduleData:t}}))}catch(e){}}(u,p);try{const t=await Promise.resolve().then(o.bind(o,5181));return await t.ensureBCTProviderAvailable(e.hass)?(await t.writeModuleYaml(e.hass,u,b),document.dispatchEvent(new CustomEvent("yaml-modules-updated")),(0,a.qk)(e,c("editor.module_editor.install_success"))):(0,a.qk)(e,c("editor.module_editor.install_bct_warning"),"warning"),(0,r.rC)(e,"config-changed",{config:e._config}),d(e),e.requestUpdate(),{success:!0,moduleId:u}}catch(t){return console.error("Persistence error:",t),(0,a.qk)(e,c("editor.module_editor.saved_locally"),"warning"),d(e),{success:!0,storage:"local_only",moduleId:u}}}catch(t){throw console.error("Installation error:",t),(0,a.qk)(e,c("editor.module_editor.install_error").replace("{error}",t.message),"error"),t}}async function u(e,t,i){const n=(0,l.Ay)(e.hass);try{if(!t||""===t.trim())throw new Error("No YAML content provided");if(i)try{const{extractYamlFromMarkdown:e}=await Promise.resolve().then(o.bind(o,2851)),a=e("```yaml\n"+t+"\n```",i);a&&a!==t&&(t=a)}catch(e){console.warn("Could not add link directly to YAML:",e)}const a={yamlContent:t,description:t,moduleLink:i};return await c(e,a)}catch(t){throw console.error("Manual module installation error:",t),(0,a.qk)(e,n("editor.module_editor.install_error").replace("{error}",t.message),"error"),t}}},444(e,t,o){o.d(t,{$7:()=>M,cu:()=>L,dK:()=>T,kA:()=>j,n$:()=>P,s:()=>I,vx:()=>S});var i=o(6684),a=o(9533),n=o(985),r=o(2851),s=o(6799),l=o(5250),d=o(5181),c=o(6795),u=o(7403),p=o(671),h=o(2470),b=o(1693),m=o(6331);const g="https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions";function _(e,t,o=null){if(!e._config||!e._config.modules)return;let i=[...e._config.modules];o&&o!==t&&(i=i.filter(e=>e!==o)),i.includes(t)||(i=[...i,t]),e._config.modules=i,e._previousModuleId=t,(0,a.rC)(e,"config-changed",{config:e._config})}function f(e){const t=e._editingModule?.id;return!!(e._showNewModuleForm&&t&&n.Ki.has(t))}function y(e){e.lastEvaluatedStyles="",e.stylesYAML=null,e.handleCustomStyles&&e.card&&e.handleCustomStyles(e,e.card),e.requestUpdate()}function v(e,t){window.dispatchEvent(new CustomEvent("bubble-card-module-updated",{detail:{moduleId:e,moduleData:t}}))}function $(e){try{const t=document.querySelector("home-assistant")?.shadowRoot?.querySelector("hui-dialog-edit-card")?.shadowRoot;if(!t)return;const o=t.querySelectorAll("ha-dialog-footer [slot='primaryAction']");if(o.length>0)return void o.forEach(t=>{"disabled"in t&&(t.disabled=e)});const i=t.querySelector("ha-dialog > div:nth-child(4)");i&&(i.style.display=e?"none":"")}catch(e){}}function w(e){if("string"!=typeof e||!e.trim())return{rules:void 0,error:null,invalid:!1};let t;try{t=s.Ay.load(e)}catch(e){return{rules:void 0,error:e.message,invalid:!1}}return null==t?{rules:void 0,error:null,invalid:!1}:"object"!=typeof t?{rules:void 0,error:null,invalid:!0}:{rules:t,error:null,invalid:!1}}function x(e){if("string"!=typeof e||!e.trim())return null;try{return Function("hass","entity","stateObj","helpers","module",e),null}catch(e){return e.message}}const k=["padding:8px 4px 0","color:var(--ha-color-text-secondary,var(--secondary-text-color))","font-family:var(--ha-font-family-body,inherit)","font-size:var(--ha-font-size-s,12px)","font-weight:var(--ha-font-weight-medium,500)","overflow:hidden","text-overflow:ellipsis","white-space:nowrap"].join(";"),C=["padding:24px 8px","color:var(--ha-color-text-secondary,var(--secondary-text-color))","font-family:var(--ha-font-family-body,inherit)","font-size:var(--ha-font-size-m,14px)","text-align:center"].join(";");function A(e,t){try{const o=document.createElement("hui-card");return o.hass=t,o.layout="grid",o.preview=!0,o.config=e,"function"==typeof o.load&&o.load(),o}catch(e){return console.warn("Bubble Card - Could not build an entity suggestion preview card:",e),null}}function q(e){const t=e?._suggestionsPreviewTakeover;if(t){e._suggestionsPreviewTakeover=null,t.hidden.forEach((e,t)=>{try{e?t.style.display=e:t.style.removeProperty("display")}catch(e){}});try{t.mount.remove()}catch(e){}}}function S(e){q(e),e?._suggestionsDraft&&(e._suggestionsDraft.showInPreview=!1)}function M(e){const t=e?._suggestionsPreviewTakeover;t&&(t.asserted?t.asserted=!1:q(e))}function L(e){const t=(0,m.Ay)(e._hassRender??e.hass);if(!e._editingModule)return $(!1),S(e),i.qy``;$(!0);const M=!!c.dn&&(0,c.dn)(e._editingModule.id),L=function(e){const t=e._editingModule,o=e._suggestionsDraft;if(o&&o.module===t)return o;const i=t.suggestions,a={module:t,raw:null==i?"":"string"==typeof i?i:s.Ay.dump(i),rules:null===i?void 0:i,rulesError:null,rulesInvalid:!1,codeError:x(t.suggestions_code),expanded:!1,showInPreview:!1,entity:"string"==typeof e._config?.entity?e._config.entity:"",previewKey:null,preview:[]};return e._suggestionsDraft=a,a}(e),P=!!e._yamlErrorMessage,T="string"==typeof e.errorMessage&&e.errorMessage.trim().length>0&&!!e._editingModule,I=!!(L.rulesError||L.rulesInvalid||L.codeError),j=f(e),R=function(e){return!e._showNewModuleForm&&"default"===e._editingModule?.id}(e),D=P||T||I||j,z=e._exportPreview&&e._exportPreview.module===e._editingModule?e._exportPreview.content:null,V=t=>{e._exportPreview={module:e._editingModule,content:t},e.requestUpdate(),Promise.resolve(e.updateComplete).then(()=>{const t=e.shadowRoot?.querySelector(".export-preview ha-expansion-panel");t&&!t.expanded&&(t.expanded=!0);const o=e.shadowRoot?.querySelector(".export-preview");o&&(o.style.animation="none",setTimeout(()=>{o.style.animation="highlight 1s ease"},10))}).catch(()=>{})},O=(()=>{if(!L.expanded||!L.showInPreview)return null;const t=e._hassRender??e.hass;if(!t?.states?.[L.entity])return null;const o=JSON.stringify([L.entity,e._editingModule.id,e._editingModule.name,e._editingModule.supported??null,e._editingModule.unsupported??null,L.raw,e._editingModule.suggestions_code??""]);return L.previewKey!==o&&(L.previewKey=o,L.preview=function(e,t,o,i){if(!o||!i||!e?.states?.[t])return[];const a=new Set;try{for(const o of(0,h.s)(e,t)||[])try{a.add(JSON.stringify(o.config))}catch(e){}}catch(e){}const r=new Map(n.Ki);try{n.Ki.clear();for(const[e,t]of r)if(e!==o)if(t&&"object"==typeof t&&(t.suggestions||t.suggestions_code)){const{suggestions:o,suggestions_code:i,...a}=t;n.Ki.set(e,a)}else n.Ki.set(e,t);return n.Ki.set(o,i),((0,p.s)(e,t)||[]).filter(e=>{try{return!a.has(JSON.stringify(e.config))}catch(e){return!0}})}catch(e){return console.warn("Bubble Card - Could not build the entity suggestions preview:",e),[]}finally{n.Ki.clear(),r.forEach((e,t)=>n.Ki.set(t,e))}}(t,L.entity,e._editingModule.id,{...e._editingModule,suggestions:L.rules})),L.preview})();return O?function(e,t,o,i,a){let n=null;try{n="function"==typeof e._getEditorPreviewContainer?e._getEditorPreviewContainer():null}catch(e){}if(!n)return;let r=e._suggestionsPreviewTakeover;if(r&&r.container!==n&&(q(e),r=null),!r){const t=document.createElement("div");t.setAttribute("style","display:block"),r={container:n,mount:t,hidden:new Map,cards:[],key:null,hass:null,asserted:!0},e._suggestionsPreviewTakeover=r}r.asserted=!0;for(const e of[...n.children??[]])if(e!==r.mount&&!r.hidden.has(e)){r.hidden.set(e,e.style?.display??"");try{e.style.display="none"}catch(e){}}if(r.mount.parentNode!==n&&n.appendChild(r.mount),r.key!==i)return r.key=i,r.hass=t,void function(e,t,o,i){if(e.mount.replaceChildren(),e.cards=[],!t.length){const t=document.createElement("div");return t.setAttribute("style",C),t.textContent=i,void e.mount.appendChild(t)}for(const i of t){const t=A(i.config,o);if(!t)continue;const a=document.createElement("div");if(i.label){const e=document.createElement("div");e.setAttribute("style",k),e.textContent=i.label,a.appendChild(e)}a.appendChild(t),e.mount.appendChild(a),e.cards.push(t)}}(r,o,t,a);if(r.hass!==t){r.hass=t;for(const e of r.cards)try{e.hass=t}catch(e){}}}(e,e._hassRender??e.hass,O,L.previewKey,t("editor.module_editor.suggestions_preview_empty")):q(e),i.qy`
    <div class="module-editor-form">
        <div class="form-content">
          <h3>
            <ha-icon style="margin: 8px;" icon="${e._showNewModuleForm?"mdi:puzzle-plus-outline":"mdi:puzzle-edit-outline"}"></ha-icon>
            ${e._showNewModuleForm?t("editor.module_editor.create_module"):"default"===e._editingModule.id?t("editor.module_editor.edit_default_module"):t("editor.module_editor.edit_module")}
          </h3>
          
          <div class="module-editor-not-default" style="display: ${R?"none":""}">
            ${M?i.qy`
              <div class="bubble-info warning">
                <h4 class="bubble-section-title">
                  <ha-icon icon="mdi:file-document-alert"></ha-icon>
                  ${t("editor.module_editor.readonly_title")}
                </h4>
                <div class="content">
                  <p>${(0,b.T5)(t("editor.module_editor.readonly_body"),{file:i.qy`<code>bubble-modules.yaml</code>`})}</p>
                </div>
              </div>
            `:""}
            
            <ha-form
              .hass=${e.hass}
              .data=${{id:e._editingModule.id||""}}
              .schema=${[{name:"id",selector:{text:{}}}]}
              .computeLabel=${()=>t("editor.module_editor.module_id")}
              .disabled=${!e._showNewModuleForm||M}
              @value-changed=${t=>function(e,t){e._editingModule&&(e._editingModule.id=t,e._showNewModuleForm&&e._config?.modules&&(n.Ki.has(t)?e.requestUpdate?.():(_(e,t,e._previousModuleId),(0,a.rC)(e,"config-changed",{config:e._config}))))}(e,t.detail.value.id)}
            ></ha-form>
            <span class="helper-text">
              ${t("editor.module_editor.module_id_helper")}
            </span>

            ${j?i.qy`
              <div class="bubble-info warning">
                <h4 class="bubble-section-title">
                  <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                  ${t("editor.module_editor.duplicate_id_title")}
                </h4>
                <div class="content">
                  <p>${t("editor.module_editor.duplicate_id_body")}</p>
                </div>
              </div>
            `:""}

            <ha-form
              .hass=${e.hass}
              .data=${{name:e._editingModule.name||""}}
              .schema=${[{name:"name",selector:{text:{}}}]}
              .computeLabel=${()=>t("editor.module_editor.module_name")}
              .disabled=${M}
              @value-changed=${t=>{e._editingModule.name=t.detail.value.name}}
            ></ha-form>
            
            <ha-form
              .hass=${e.hass}
              .data=${{version:e._editingModule.version||"1.0"}}
              .schema=${[{name:"version",selector:{text:{}}}]}
              .computeLabel=${()=>t("editor.module_editor.version")}
              .disabled=${M}
              @value-changed=${t=>{e._editingModule.version=t.detail.value.version}}
            ></ha-form>
            
            <ha-form
              .hass=${e.hass}
              .data=${{creator:e._editingModule.creator||""}}
              .schema=${[{name:"creator",selector:{text:{}}}]}
              .computeLabel=${()=>t("editor.module_editor.creator")}
              .disabled=${M}
              @value-changed=${t=>{e._editingModule.creator=t.detail.value.creator}}
            ></ha-form>
            
            <ha-expansion-panel 
              .header=${i.qy`
                <ha-icon icon="mdi:filter-check-outline" style="margin-inline-end: 8px;"></ha-icon>
                ${t("editor.module_editor.supported_cards")}
              `}
              @expanded-changed=${e=>e.stopPropagation()}
            >
              <div>
                ${function(e,t=!1){const o=(0,m.Ay)(e._hassRender??e.hass),a=[{id:"button",name:"Button"},{id:"calendar",name:"Calendar"},{id:"climate",name:"Climate"},{id:"cover",name:"Cover"},{id:"horizontal-buttons-stack",name:"Horizontal buttons stack"},{id:"media-player",name:"Media player"},{id:"pop-up",name:"Pop-up"},{id:"select",name:"Select"},{id:"separator",name:"Separator"},{id:"sub-buttons",name:"Sub-buttons"}],n=a.map(e=>e.id),r={button:o("editor.module_editor.card_button"),calendar:o("editor.module_editor.card_calendar"),climate:o("editor.module_editor.card_climate"),cover:o("editor.module_editor.card_cover"),"horizontal-buttons-stack":o("editor.module_editor.card_horizontal_buttons_stack"),"media-player":o("editor.module_editor.card_media_player"),"pop-up":o("editor.module_editor.card_pop_up"),select:o("editor.module_editor.card_select"),separator:o("editor.module_editor.card_separator"),"sub-buttons":o("editor.module_editor.card_sub_buttons")};void 0===e._editingModule.supported&&(e._editingModule.unsupported&&e._editingModule.unsupported.length>0?e._editingModule.supported=n.filter(t=>!e._editingModule.unsupported.includes(t)):e._editingModule.supported=void 0);const s=!e._editingModule.supported||Array.isArray(e._editingModule.supported)&&e._editingModule.supported.length===n.length&&n.every(t=>e._editingModule.supported.includes(t));return i.qy`
    <div class="checkbox-grid">
      <bubble-formfield label="${o("editor.module_editor.all_cards")}" style="grid-column: 1 / -1; margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid var(--divider-color);">
        <ha-checkbox
          .checked=${s}
          @change=${o=>{t||(o.target.checked?delete e._editingModule.supported:e._editingModule.supported=[],e.requestUpdate())}}
          ?disabled=${t}
        ></ha-checkbox>
      </bubble-formfield>
      ${a.map(o=>i.qy`
        <bubble-formfield label="${r[o.id]??o.name}">
          <ha-checkbox
            .checked=${!e._editingModule.supported||e._editingModule.supported.includes(o.id)}
            @change=${i=>{t||(e._editingModule.supported||(e._editingModule.supported=n.slice()),i.target.checked?(e._editingModule.supported.includes(o.id)||e._editingModule.supported.push(o.id),e._editingModule.supported.length===n.length&&n.every(t=>e._editingModule.supported.includes(t))&&delete e._editingModule.supported):e._editingModule.supported=e._editingModule.supported.filter(e=>e!==o.id),e.requestUpdate())}}
            ?disabled=${t}
          ></ha-checkbox>
        </bubble-formfield>
      `)}
    </div>
    <div class="helper-text">
      ${o("editor.module_editor.supported_helper")}
    </div>
  `}(e,M)}
              </div>
            </ha-expansion-panel>

            <ha-expansion-panel 
              .header=${i.qy`
                <ha-icon icon="mdi:file-document-outline" style="margin-inline-end: 8px;"></ha-icon>
                ${t("editor.module_editor.description")}
              `}
              @expanded-changed=${e=>e.stopPropagation()}
            >
              <div class="code-editor-container">
                <ha-code-editor
                  class="${M?"disabled":""}"
                  mode="yaml"
                  .value=${e._editingModule.description||""}
                  @value-changed=${t=>{e._editingModule.description=t.detail.value}}
                ></ha-code-editor>
              </div>
              <span class="helper-text">
                ${(0,b.T5)(t("editor.module_editor.description_helper"),{bold:i.qy`<b>${t("editor.module_editor.description_helper_bold")}</b>`})}
              </span>
            </ha-expansion-panel>
          </div>

          <ha-expansion-panel 
            .header=${i.qy`
              <ha-icon icon="mdi:code-json" style="margin-inline-end: 8px;"></ha-icon>
              ${t("editor.module_editor.code_title")}
            `}
            @expanded-changed=${e=>e.stopPropagation()}
          >
            <div class="code-editor-container">
              <ha-code-editor
                class="${M?"disabled":""}"
                mode="yaml"
                .value=${e._editingModule.code||""}
                @value-changed=${t=>(t=>{if(!e._editingModule||!e._config||M)return;if(f(e))return;const o=e._editingModule.id;if("function"==typeof e._clearCurrentModuleError&&e._clearCurrentModuleError(o),!e._originalModuleState){const t=n.Ki.get(o);t&&(e._originalModuleState=JSON.parse(JSON.stringify(t)))}e._editingModule.code=t;try{e._moduleCodeDebounce&&clearTimeout(e._moduleCodeDebounce)}catch(e){}e._moduleCodeDebounce=setTimeout(()=>{e.stylesYAML&&(e.stylesYAML=null);const t={...n.Ki.get(o)||{},code:e._editingModule.code,id:o};n.Ki.set(o,t),_(e,o,e._previousModuleId),v(o,t)},140)})(t.detail.value)}
              ></ha-code-editor>
            </div>
            ${e.createErrorConsole(e)}
            <span class="helper-text">
              ${(0,b.T5)(t("editor.module_editor.code_helper"),{link:i.qy`<a href="https://github.com/Clooos/Bubble-Card?tab=readme-ov-file#styling" target="_blank">${t("editor.module_editor.styling_docs")}</a>`})}
            </span>
          </ha-expansion-panel>
          
          <ha-expansion-panel 
            style="display: ${R?"none":""}" 
            .header=${i.qy`
              <ha-icon icon="mdi:form-select" style="margin-inline-end: 8px;"></ha-icon>
              ${t("editor.module_editor.editor_schema_title")}
            `}
            @expanded-changed=${e=>e.stopPropagation()}
          >
            <div class="editor-schema-container">
              <ha-code-editor
                class="${M?"disabled":""}"
                mode="yaml"
                .value=${e._editingModule.editor_raw||("object"==typeof e._editingModule.editor?s.Ay.dump(e._editingModule.editor):e._editingModule.editor||"")}
                @value-changed=${t=>{e._editingModule.editor_raw=t.detail.value,clearTimeout(e._editorSchemaDebounce),e._editorSchemaDebounce=setTimeout(()=>{try{const o=s.Ay.load(t.detail.value);null!==o&&"object"==typeof o&&((t=>{if(e._editingModule&&e._config&&!M&&!f(e))try{const o=e._editingModule.id;if(!e._originalModuleState){const t=n.Ki.get(o);t&&(e._originalModuleState=JSON.parse(JSON.stringify(t)))}const i=e._editingModule.editor_raw;e._editingModule.editor=t,i&&(e._editingModule.editor_raw=i);const r=n.Ki.get(o);if(r){const i={...r,editor:t};n.Ki.set(o,i),e._schemaCache&&delete e._schemaCache[o],e._processedSchemas&&delete e._processedSchemas[o],e.requestUpdate(),setTimeout(()=>{(0,a.rC)(e,"editor-refresh",{}),e.requestUpdate()},50)}}catch(e){console.warn("Error applying live editor schema:",e)}})(o),e._yamlErrorMessage&&(e._yamlErrorMessage=null,e.requestUpdate()))}catch(o){console.warn("Invalid YAML for editor schema:",o),e._editingModule.editor=e._editingModule.editor_raw||t.detail.value,e._yamlErrorMessage=o.message,e.requestUpdate()}},100)}}
              ></ha-code-editor>
            </div>
            <div class="bubble-info error" 
                style="display: ${e._yamlErrorMessage?"":"none"}">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                    ${t("editor.module_editor.yaml_error_title")}
                </h4>
                <div class="content">
                    <pre style="margin: 0; white-space: pre-wrap; font-size: 12px;">${e._yamlErrorMessage?e._yamlErrorMessage.charAt(0).toUpperCase()+e._yamlErrorMessage.slice(1):""}</pre>
                </div>
            </div>
            <span class="helper-text">
              ${(0,b.T5)(t("editor.module_editor.editor_schema_helper"),{link:i.qy`<a href="https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md" target="_blank">${t("editor.module_editor.schema_docs")}</a>`})}
            </span>

            ${e._editingModule.editor&&Array.isArray(e._editingModule.editor)&&e._editingModule.editor.length>0?i.qy`
              <div class="form-preview">
                <h4>${t("editor.module_editor.editor_preview")}</h4>
                <div class="form-preview-container">
                  <ha-form
                    .hass=${e.hass}
                    .data=${{}}
                    .schema=${e._editingModule.editor}
                    .computeLabel=${e._computeLabelCallback||(e=>e.label||e.name)}
                  ></ha-form>
                </div>
              </div>
            `:""}
          </ha-expansion-panel>

          <ha-expansion-panel
            style="display: ${R?"none":""}"
            .header=${i.qy`
              <ha-icon icon="mdi:lightbulb-auto-outline" style="margin-inline-end: 8px;"></ha-icon>
              ${t("editor.module_editor.suggestions_title")}
            `}
            @expanded-changed=${t=>{t.stopPropagation(),L.expanded=!0===t.detail?.expanded,e.requestUpdate()}}
          >
            <h4 class="suggestions-field-title">${t("editor.module_editor.suggestions_rules")}</h4>
            <div class="editor-schema-container">
              <ha-code-editor
                class="${M?"disabled":""}"
                mode="yaml"
                .value=${L.raw}
                @value-changed=${t=>{return o=t.detail.value,void(M||(L.raw=o,clearTimeout(e._suggestionRulesDebounce),e._suggestionRulesDebounce=setTimeout(()=>{const t=w(o);L.rulesError=t.error,L.rulesInvalid=t.invalid,t.error||t.invalid||(L.rules=t.rules,e._editingModule.suggestions=t.rules),e.requestUpdate()},100)));var o}}
              ></ha-code-editor>
            </div>
            <div class="bubble-info error"
                style="display: ${L.rulesError||L.rulesInvalid?"":"none"}">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                    ${t("editor.module_editor.suggestions_error_title")}
                </h4>
                <div class="content">
                    <pre style="margin: 0; white-space: pre-wrap; font-size: 12px;">${L.rulesError?L.rulesError.charAt(0).toUpperCase()+L.rulesError.slice(1):L.rulesInvalid?t("editor.module_editor.suggestions_rules_invalid"):""}</pre>
                </div>
            </div>
            <span class="helper-text">
              ${(0,b.T5)(t("editor.module_editor.suggestions_rules_helper"),{link:i.qy`<a href="${g}" target="_blank">${t("editor.module_editor.suggestions_docs")}</a>`})}
            </span>

            <h4 class="suggestions-field-title">${t("editor.module_editor.suggestions_code")}</h4>
            <div class="editor-schema-container">
              <ha-code-editor
                class="${M?"disabled":""}"
                mode="yaml"
                .value=${e._editingModule.suggestions_code||""}
                @value-changed=${t=>{return o=t.detail.value,void(M||(e._editingModule.suggestions_code=o,clearTimeout(e._suggestionsCodeDebounce),e._suggestionsCodeDebounce=setTimeout(()=>{L.codeError=x(o),e.requestUpdate()},100)));var o}}
              ></ha-code-editor>
            </div>
            <div class="bubble-info error"
                style="display: ${L.codeError?"":"none"}">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                    ${t("editor.module_editor.suggestions_error_title")}
                </h4>
                <div class="content">
                    <pre style="margin: 0; white-space: pre-wrap; font-size: 12px;">${L.codeError?L.codeError.charAt(0).toUpperCase()+L.codeError.slice(1):""}</pre>
                </div>
            </div>
            <span class="helper-text">
              ${(0,b.T5)(t("editor.module_editor.suggestions_code_helper"),{args:i.qy`<code>(hass, entity, stateObj, helpers, module)</code>`,link:i.qy`<a href="${g}" target="_blank">${t("editor.module_editor.suggestions_docs")}</a>`})}
            </span>

            <div class="form-preview">
              <h4>${t("editor.module_editor.suggestions_preview")}</h4>
              <bubble-formfield class="suggestions-preview-toggle">
                <ha-switch
                  aria-label="${t("editor.module_editor.suggestions_preview_toggle")}"
                  .checked=${L.showInPreview}
                  @change=${t=>{L.showInPreview=!0===t.target.checked,e.requestUpdate()}}
                ></ha-switch>
                <div class="mdc-form-field">
                  <label class="mdc-label">${t("editor.module_editor.suggestions_preview_toggle")}</label>
                </div>
              </bubble-formfield>
              <ha-entity-picker
                label="${t("editor.common.entity")}"
                .hass=${e._hassRender??e.hass}
                .value=${L.entity}
                allow-custom-entity
                @value-changed=${t=>{L.entity=t.detail.value||"",e.requestUpdate()}}
              ></ha-entity-picker>
            </div>
          </ha-expansion-panel>

          ${!M&&D?i.qy`
            <div class="bubble-info warning" style="margin-top: 8px;">
              <h4 class="bubble-section-title">
                <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                ${t("editor.module_editor.save_disabled_title")}
              </h4>
              <div class="content">
                <p style="margin: 0;">
                  ${P?t("editor.module_editor.fix_yaml_error"):""}
                  ${P&&T?i.qy`<br>`:""}
                  ${T?t("editor.module_editor.fix_template_error"):""}
                  ${(P||T)&&I?i.qy`<br>`:""}
                  ${I?t("editor.module_editor.fix_suggestions_error"):""}
                  ${(P||T||I)&&j?i.qy`<br>`:""}
                  ${j?t("editor.module_editor.fix_duplicate_id"):""}
                </p>
              </div>
            </div>
          `:""}

          <hr>

          <ha-expansion-panel 
            .header=${i.qy`
              <ha-icon icon="mdi:export" style="margin-inline-end: 8px;"></ha-icon>
              ${t("editor.module_editor.export_title")}
            `}
            @expanded-changed=${e=>e.stopPropagation()}
          >
            <div class="content">
                <div class="export-section">
                    <div class="export-buttons">
                        <button class="icon-button" @click=${()=>{const o=(0,l.generateYamlExport)(e._editingModule);(0,l.lW)(e,o,t("editor.module_editor.yaml_copied"),V)}}>
                        <ha-icon icon="mdi:content-copy"></ha-icon>
                        ${t("editor.module_editor.copy_yaml")}
                        </button>

                        <button class="icon-button" @click=${()=>{const o=(0,l.Hs)(e._editingModule);(0,l.lW)(e,o,t("editor.module_editor.github_copied"),V)}}>
                        <ha-icon icon="mdi:content-copy"></ha-icon>
                        ${t("editor.module_editor.copy_github")}
                        </button>

                        <button class="icon-button" @click=${()=>{(0,l.Ac)(e,e._editingModule,V)}}>
                        <ha-icon icon="mdi:file-download"></ha-icon>
                        ${t("editor.module_editor.download_yaml")}
                        </button>
                    </div>
                    
                    <div class="export-preview">
                        <ha-expansion-panel
                          .header=${t("editor.module_editor.export_preview")}
                          @expanded-changed=${e=>e.stopPropagation()}
                        >
                        <pre id="export-preview-content">${z??t("editor.module_editor.export_preview_hint")}</pre>
                        </ha-expansion-panel>
                    </div>

                    <div class="bubble-info">
                      <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        ${t("editor.module_editor.sharing_title")}
                      </h4>
                      <div class="content">
                        <p>${(0,b.T5)(t("editor.module_editor.sharing_body1"),{copy:i.qy`<strong>${t("editor.module_editor.copy_github")}</strong>`,category:i.qy`<a href="https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules" target="_blank">Share your Modules</a>`,edit_description:i.qy`<strong>${t("editor.module_editor.sharing_edit_description")}</strong>`,example:i.qy`<strong>${t("editor.module_editor.sharing_example")}</strong>`,screenshot:i.qy`<strong>${t("editor.module_editor.sharing_screenshot")}</strong>`})}</p>
                        <p>${(0,b.T5)(t("editor.module_editor.sharing_body2"),{available:i.qy`<strong>${t("editor.module_editor.sharing_available")}</strong>`})}</p>
                      </div>
                    </div>
                </div>
            </div>
          </ha-expansion-panel>
          
          <div class="module-editor-buttons-container">
            <button class="icon-button" style="flex: 1;" @click=${()=>{try{if(!e._showNewModuleForm&&e._editingModule){const t=e._editingModule.id;"function"==typeof e._clearCurrentModuleError&&e._clearCurrentModuleError(t),function(e,t){if(!t)return;let o;e._originalModuleState?(o=e._originalModuleState,e._originalModuleState=null):o=n.Ki.get(t),o&&(e.lastEvaluatedStyles="",e.stylesYAML=null,n.Ki.set(t,{...o}),e._schemaCache&&delete e._schemaCache[t],e._processedSchemas&&delete e._processedSchemas[t],e.handleCustomStyles&&e.handleCustomStyles(e,e.card),v(t,o),setTimeout(()=>{if(e._config){const t={...e._config};(0,a.rC)(e,"config-changed",{config:t})}e.requestUpdate()},50))}(e,t)}else if(e._showNewModuleForm&&e._editingModule){const t=e._previousModuleId;e._config&&e._config.modules&&t&&(e._config.modules=e._config.modules.filter(e=>e!==t),(0,a.rC)(e,"config-changed",{config:e._config}),n.Ki.has(t)&&n.Ki.delete(t),y(e))}}finally{e._editingModule=null,e._showNewModuleForm=!1,e._previousModuleId=null,S(e),e._suggestionsDraft=null,$(!1),e.requestUpdate(),setTimeout(()=>(0,u.XY)(e),0)}}}>
              <ha-icon icon="mdi:close"></ha-icon>
              ${t("editor.common.cancel")}
            </button>
            
            <button class="icon-button ${M||D?"disabled":""}" ?disabled=${M||D} style="flex: 1;" @click=${()=>{M||D||("function"==typeof e._clearCurrentModuleError&&e._editingModule?.id&&e._clearCurrentModuleError(e._editingModule.id),async function(e,t){try{const i=t.id;if(f(e))return;const l=e._config.modules&&e._config.modules.includes(i),c=n.Ki.get(i),u=c&&!0===c.is_global;if(t.editor_raw&&"string"==typeof t.editor_raw)try{const e=s.Ay.load(t.editor_raw);null!==e&&"object"==typeof e&&(t.editor=e)}catch(e){console.warn("Couldn't parse editor schema during save, using fallback:",e)}t.editor_raw&&delete t.editor_raw;const p=e?._suggestionsDraft;if(p&&p.module===t){const e=w(p.raw);e.error||e.invalid||(t.suggestions=e.rules)}t.supported&&t.unsupported&&delete t.unsupported;const h=[{id:"button",name:"Button"},{id:"calendar",name:"Calendar"},{id:"climate",name:"Climate"},{id:"cover",name:"Cover"},{id:"horizontal-buttons-stack",name:"Horizontal buttons stack"},{id:"media-player",name:"Media player"},{id:"pop-up",name:"Pop-up"},{id:"select",name:"Select"},{id:"separator",name:"Separator"},{id:"sub-buttons",name:"Sub-buttons"}].map(e=>e.id);t.supported&&Array.isArray(t.supported)&&t.supported.length===h.length&&h.every(e=>t.supported.includes(e))&&delete t.supported;const{generateYamlExport:b}=await Promise.resolve().then(o.bind(o,5250)),m=b(t),g=(0,r.tF)(m,t.id,{title:t.name,defaultCreator:t.creator});u&&(g.is_global=!0),document.dispatchEvent(new CustomEvent("yaml-modules-updated"));const _=Array.from(n.Ki.keys()),x=new Map;_.forEach(e=>{e===t.id?x.set(t.id,g):x.set(e,n.Ki.get(e))}),_.includes(t.id)||x.set(t.id,g),n.Ki.clear(),x.forEach((e,t)=>{n.Ki.set(t,e)}),e._config&&e._config.modules&&(e._config.modules.includes(i)||e._config.modules.push(i),(0,a.rC)(e,"config-changed",{config:e._config}));let k=!1;try{if(await(0,d.ensureBCTProviderAvailable)(e.hass)){await(0,d.writeModuleYaml)(e.hass,i,m);try{n.sq.set(i,"file")}catch(e){}document.dispatchEvent(new CustomEvent("yaml-modules-updated")),k=!0}}catch(e){console.warn("File-based save failed; keeping changes local only:",e)}if(!k)try{n.sq.set(i,"editor")}catch(e){}v(i,g),e.stylesYAML=null,l&&y(e),e._editingModule=null,e._showNewModuleForm=!1,S(e),e._suggestionsDraft=null,E(e),$(!1)}catch(e){console.error("Error saving module:",e)}finally{$(!1)}}(e,e._editingModule),setTimeout(()=>(0,u.XY)(e),0))}}>
              <ha-icon icon="mdi:content-save"></ha-icon>
              ${t("editor.module_editor.save_module")}
            </button>
          </div>
        </div>
    </div>
  `}function P(){return[{id:"button",name:"Button"},{id:"calendar",name:"Calendar"},{id:"climate",name:"Climate"},{id:"cover",name:"Cover"},{id:"horizontal-buttons-stack",name:"Horizontal buttons stack"},{id:"media-player",name:"Media player"},{id:"pop-up",name:"Pop-up"},{id:"select",name:"Select"},{id:"separator",name:"Separator"},{id:"sub-buttons",name:"Sub-buttons"}]}function E(e){e._processedSchemas&&(e._processedSchemas={}),e._selectedModuleTab=0,"function"==typeof e._getProcessedSchema&&(e._schemaCache?Object.keys(e._schemaCache).forEach(t=>{delete e._schemaCache[t]}):e._schemaCache={}),e.lastEvaluatedStyles="",e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card),(0,a.rC)(e,"editor-refresh",{}),e.requestUpdate(),setTimeout(()=>{e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card),e.requestUpdate(),setTimeout(()=>{if(e._config){const t={...e._config};e.stylesYAML&&(e.stylesYAML=null,document.dispatchEvent(new CustomEvent("yaml-modules-updated"))),(0,a.rC)(e,"config-changed",{config:t}),e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card)}e.requestUpdate()},100)},50)}function T(e,t){e._originalModuleState=null;const o=n.Ki.get(t);o?(e._editingModule={id:t,...o},$(!0),e._editingModule.code||(e._editingModule.code=""),e._editingModule.editor&&"string"==typeof e._editingModule.editor&&(e._editingModule.editorReference=e._editingModule.editor,e._editingModule.editor=[]),"object"==typeof e._editingModule.editor?e._editingModule.editor_raw=s.Ay.dump(e._editingModule.editor):e._editingModule.editor_raw=e._editingModule.editor||"",e.requestUpdate(),setTimeout(()=>(0,u.XY)(e),0)):console.error(`Module ${t} not found`)}async function I(e,t){const o=(0,m.Ay)(e.hass);if(confirm(o("editor.module_editor.delete_confirm").replace("{id}",t)))try{n.Ki.delete(t);try{n.sq.delete(t)}catch(e){}document.dispatchEvent(new CustomEvent("yaml-modules-updated"));let o=!1;try{await(0,d.ensureBCTProviderAvailable)(e.hass)&&(await(0,d.gx)(e.hass,t),document.dispatchEvent(new CustomEvent("yaml-modules-updated")),o=!0)}catch(e){console.warn("File-based deletion failed; keeping changes local only:",e)}e._config&&e._config.modules&&(e._config.modules=e._config.modules.filter(e=>e!==t),(0,a.rC)(e,"config-changed",{config:e._config}),y(e)),E(e),$(!1)}catch(e){console.error("Error deleting module:",e)}finally{$(!1)}}function j(e){if(!e._editingModuleInitialized){e._editingModule=null,e._showNewModuleForm=!1,e._showManualImportForm=!1,e._manualYamlContent="",e._exportContent=null,e._exportType=null,e._exportStep=0,e._schemaCache={},e._processedSchemas={},e._originalModuleState=null,e._previousModuleId=null,e._suggestionsDraft=null,e._suggestionsPreviewTakeover=null,e._generateUniqueModuleId=(e="my_module")=>{if(!n.Ki.has(e))return e;let t=1,o=`${e}_${t}`;for(;n.Ki.has(o);)t++,o=`${e}_${t}`;return o};const t=e._generateUniqueModuleId("my_module");e._newModuleTemplate={id:t,name:"My Module",description:"",creator:"",version:"1.0",code:"",editor:""},e._editingModuleInitialized=!0}}},2851(e,t,o){o.d(t,{N5:()=>p,extractYamlFromMarkdown:()=>u,oV:()=>c,tF:()=>h});var i=o(6799),a=o(7403),n=o(444);const r=new Set(["id","yaml","editor_raw","editorReference","imageUrl"]),s=new Set(["name","version","author","type","code","editor","link","creator","is_global","description","form_schema","supported","supported_card","supported_cards","unsupported","unsupported_card","unsupported_cards","info"]);function l(e){if(!e||"string"!=typeof e)return null;const t=e.trim().toLowerCase().replace(/['"]/g,""),o=(0,n.n$)(),i=o.find(e=>e.id.toLowerCase()===t||e.name.toLowerCase()===t);if(i)return i.id;const a=t.replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),r=o.find(e=>e.id.replace(/-/g,"")===a.replace(/-/g,"")||e.name.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")===a);return r?r.id:t}function d(e){if(!e||"string"!=typeof e)return[];const t=[...(0,n.n$)()].sort((e,t)=>{const o=(e?.name||e?.id||"").length;return(t?.name||t?.id||"").length-o});let o=e.trim();o=o.replace(/^[\[\(\{]\s*/,"").replace(/\s*[\]\)\}]\s*$/,""),o=o.split("|")[0]||o,o=o.split("**")[0]||o;const i=[],a=(e,t)=>{if(!t)return null;const o=e.trimStart(),i=o.toLowerCase(),a=t.toLowerCase();if(!i.startsWith(a))return null;return(n=i[a.length])&&!/\s|,|;|\||\/|&|\+|\]|\)|\}/.test(n)?null:{length:e.length-o.length+a.length};var n};for(let e=0;e<10;e++){let e=null,n=null;o=o.replace(/^\s*(?:-|\*|•)\s*/g,"");for(const i of t){const t=a(o,i.name),r=a(o,i.id);if(e=t||r,e){n=i;break}}if(!e||!n)break;if(i.includes(n.id)||i.push(n.id),o=o.slice(e.length),o=o.replace(/^\s*(?:,|;|\||\/|&|\+|\band\b|\bor\b)\s*/i,""),!o.trim())break}return i}function c(e){if(!e)return null;try{const t=i.Ay.load(e);if(t&&"object"==typeof t){const e=Object.keys(t);if(e.length>0){if(t[e[0]]?.name)return e[0];for(const o of e)if(t[o]?.name)return o;return e[0]}}}catch(e){console.warn("Error during YAML parsing for key extraction:",e)}try{const t=/^([a-zA-Z0-9_-]+)(?:\s*:|:)/m,o=e.match(t);if(o&&o[1])return o[1]}catch(e){console.warn("Error during key extraction by regex:",e)}return null}function u(e,t=null){if(!e)return"";const o=[...e.matchAll(/```(?:yaml|yml)\s+([\s\S]*?)```/g)];if(o.length>0){for(const e of o){let o=e[1].trim();try{const e=i.Ay.load(o);if(e&&"object"==typeof e){const a=Object.keys(e)[0];if(e[a]?.name||e[a]?.code||e[a]?.description||e[a]?.version)return t&&"object"==typeof e[a]&&!e[a].link&&(e[a].link=t,o=i.Ay.dump(e,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0})),o}}catch(e){}}let e=o[0][1].trim();if(t)try{const o=i.Ay.load(e);if(o&&"object"==typeof o){const a=Object.keys(o)[0];a&&"object"==typeof o[a]&&!o[a].link&&(o[a].link=t,e=i.Ay.dump(o,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0}))}}catch(e){}return e}const a=[...e.matchAll(/```\s*([\s\S]*?)```/g)];if(a.length>0){let e="";for(const t of a){const o=t[1].trim();o.length>e.length&&(e=o)}if(t&&e)try{const o=i.Ay.load(e);if(o&&"object"==typeof o){const a=Object.keys(o)[0];a&&"object"==typeof o[a]&&!o[a].link&&(o[a].link=t,e=i.Ay.dump(o,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0}))}}catch(e){}return e}return""}function p(e){return e&&Array.isArray(e)?e.filter(e=>e&&e.title).map(e=>{try{const t=e.title.match(/\[(.*?)\]/);let o=t?(0,a.TL)(t[1]):`discussion-${e.number}`,i="",n=e.html_url;if(e.body&&(i=u(e.body,n),i)){const e=c(i);e&&(o=e)}const r=h(i,o,{bodyText:e.body,title:e.title,defaultCreator:e.user?.login||""});return{id:r.id,name:r.name,description:r.description,creator:r.creator,version:r.version,moduleLink:e.html_url,type:r.type,imageUrl:r.imageUrl,supportedCards:void 0===r.supported?void 0:Array.isArray(r.supported)?r.supported:r.supported?[r.supported]:[],unsupportedCards:Array.isArray(r.unsupported)?r.unsupported:r.unsupported?[r.unsupported]:[],createdAt:e.created_at,updated_at:e.updated_at,userAvatar:e.user?.avatar_url,comments:e.comments,reactions:e.reactions,yamlContent:i}}catch(t){return console.error(`Error parsing discussion #${e.number}:`,t),{id:`discussion-${e.number}`,name:e.title||`Discussion #${e.number}`,description:"Error parsing the discussion",creator:e.user?.login||"",version:"",moduleLink:e.html_url,type:"",supportedCards:[],unsupportedCards:[],createdAt:e.created_at,updated_at:e.updated_at,userAvatar:e.user?.avatar_url,comments:e.comments,reactions:e.reactions}}}).filter(e=>e.id&&e.name):[]}function h(e,t,o={}){const{bodyText:n,title:c,defaultCreator:u}=o;let p={id:t,name:t,version:"1.0",author:"",description:"",type:"Module",editor:[],supported:["button","climate","cover","horizontal-buttons-stack","media-player","pop-up","select","separator","sub-buttons"],unsupported:[],creator:u||"",link:"",imageUrl:"",yaml:e};const h={name:!1,version:!1,author:!1,creator:!1,description:!1,type:!1,link:!1,supported:!1,unsupported:!1,editor:!1,code:!1,imageUrl:!1,is_global:!1},b=(e,t,o=t,i=[])=>{if(void 0!==e[t])return p[o]=e[t],h[o]=!0,!0;for(const t of i)if(void 0!==e[t]&&!h[o])return p[o]=e[t],h[o]=!0,!0;return!1},m=e=>{e&&"object"==typeof e&&(void 0===e.name&&void 0===e.code||Object.keys(e).forEach(t=>{s.has(t)||r.has(t)||(p[t]=e[t])}))},g=e=>"string"==typeof e?e:Array.isArray(e)?e.join("\n"):"object"==typeof e?JSON.stringify(e):"";if(e)try{const o=i.Ay.load(e);if(o&&"object"==typeof o){if(1===Object.keys(o).length){const e=Object.keys(o)[0],i=o[e];if(p.id===t&&(p.id=e),i&&"object"==typeof i){if(b(i,"name"),b(i,"version"),b(i,"author"),b(i,"type"),b(i,"code"),b(i,"editor"),b(i,"link"),b(i,"creator"),b(i,"is_global"),b(i,"form_schema","editor"),b(i,"supported","supported",["supported_card","supported_cards"]),b(i,"unsupported","unsupported",["unsupported_card","unsupported_cards"]),i.unsupported&&!i.supported&&!h.supported){const e=["button","climate","cover","horizontal-buttons-stack","media-player","pop-up","select","separator","sub-buttons"];p.supported=e.filter(e=>!i.unsupported.includes(e)),h.supported=!0}void 0!==i.description&&(p.description=g(i.description),h.description=!0),i.info&&"object"==typeof i.info&&(b(i.info,"name"),b(i.info,"version"),b(i.info,"author"),b(i.info,"type"),b(i.info,"creator"),b(i.info,"link"),b(i.info,"supported","supported",["supported_card","supported_cards"]),b(i.info,"unsupported","unsupported",["unsupported_card","unsupported_cards"]),void 0===i.info.description||h.description||(p.description=g(i.info.description),h.description=!0)),m(i)}}else{if(b(o,"name"),b(o,"version"),b(o,"author"),b(o,"type"),b(o,"code"),b(o,"editor"),b(o,"link"),b(o,"creator"),b(o,"is_global"),b(o,"form_schema","editor"),b(o,"supported","supported",["supported_card","supported_cards"]),b(o,"unsupported","unsupported",["unsupported_card","unsupported_cards"]),o.unsupported&&!o.supported&&!h.supported){const e=["button","climate","cover","horizontal-buttons-stack","media-player","pop-up","select","separator","sub-buttons"];p.supported=e.filter(e=>!o.unsupported.includes(e)),h.supported=!0}void 0!==o.description&&(p.description=g(o.description),h.description=!0),m(o)}if(!(h.editor||p.editor&&p.editor.length)){const e=JSON.stringify(o);if(e.includes('"type":')&&e.includes('"name":')&&1===Object.keys(o).length){const e=Object.keys(o)[0],t=o[e];if(t&&"object"==typeof t){const e=Object.keys(t).filter(e=>"object"==typeof t[e]&&(t[e].type||t[e].name||t[e].field));e.length>0&&(p.editor=e.map(e=>({name:e,type:t[e].type||"input",...t[e]})),h.editor=!0)}}}}}catch(e){console.error("Error during YAML analysis:",e)}if(!p.author&&p.creator?p.author=p.creator:!p.creator&&p.author&&(p.creator=p.author),n){if(!h.version){const e=[/\*\*Version:\*\*\s*(v?[\d\.]+)/i,/\|\s*(?:Version|v):\s*(v?[\d\.]+)\s*\|/i,/version\s+(v?[\d\.]+)/i];for(const t of e){const e=n.match(t);if(e&&e[1]){p.version=e[1];break}}}if(!h.description&&!p.description){const e=n.match(/\*\*Description\s*:\*\*\s*(.*?)(?=\n\s*\*\*|\n\s*#|$)/is);if(e&&e[1])p.description=(0,a.yh)(e[1].trim());else{const e=(0,a.yh)(n).split(/\n{2,}/);for(const t of e){const e=t.trim();if(e&&!e.startsWith("#")&&!e.match(/^[a-z_]+\s*:/i)&&e.length>15){p.description=e;break}}}}if(!h.supported){const e=function(e){if(!e||"string"!=typeof e)return null;const t=e.split(/\r?\n/),o=e=>{if(!e||"string"!=typeof e)return!1;const t=e.trim();return/^all(?:\s+cards?)?\b/i.test(t)},i=e=>(e||"").replace(/^\s*>\s*/g,"").trim(),a=e=>{const t=i(e);return!(!t||!/^\[!\w+\]/.test(t)&&!/^#{1,6}\s+/.test(t)&&!/^\*\*[^*]+:\*\*/.test(t))};for(let e=0;e<t.length;e++){const n=t[e],r=i(n);if(!r)continue;if(/unsupported\s*cards?/i.test(r))continue;const s=r.match(/(?:\*\*)?\s*supported\s*(?:cards|card)?\s*:\s*(?:\*\*)?\s*(.*)$/i);if(!s)continue;const c=(s[1]||"").trim();if(c){if(o(c))return;const e=d(c);if(e.length)return e;const t=c.split(",").map(e=>l(e.trim())).filter(Boolean);if(t.length)return[...new Set(t)]}const u=[];for(let n=e+1;n<t.length;n++){const e=t[n],r=i(e);if(!r){if(u.length)break;continue}if(/^\[!\w+\]/.test(r))continue;if(a(e)&&u.length)break;const s=r.match(/^(?:-|\*|•)\s+(.+)$/);if(s){u.push(s[1].trim());continue}if(u.length)break;if(o(r))return;const c=d(r);if(c.length)return c;const p=r.split(",").map(e=>l(e.trim())).filter(Boolean);if(p.length)return[...new Set(p)];break}if(u.length){if(u.some(e=>o(e)))return;const e=u.map(e=>d(e)).flat().filter(Boolean);if(e.length)return[...new Set(e)];const t=u.map(e=>l(e.trim())).filter(Boolean);if(t.length)return[...new Set(t)]}}return null}(n);if(void 0===e?(p.supported=void 0,h.supported=!0):Array.isArray(e)&&e.length>0&&(p.supported=e,h.supported=!0),!h.supported)if(n.match(/\*\*Supported\s*(?:Cards|Card)?\s*:\*\*\s*(?:-\s*)?(?:All|all\s+cards?)/i))p.supported=void 0,h.supported=!0;else{const e=n.match(/\*\*Supported\s*(?:Cards|Card)?\s*:\*\*\s*\[(.*?)\]/i);if(e){const t=e[1].split(",").map(e=>l(e.trim())).filter(e=>e&&e.length>0);t.length>0&&(p.supported=t,h.supported=!0)}else{const e=n.match(/\*\*Supported\s*(?:Cards|Card)?\s*:\*\*\s*([^\n\r]+?)(?=\||\n|$)/i);if(e){const t=e[1].trim();if(!/^(?:All|all\s+cards?)$/i.test(t)){const e=d(t);if(e.length>0)p.supported=e,h.supported=!0;else{const e=t.split(",").map(e=>l(e.trim())).filter(e=>e&&e.length>0);e.length>0&&(p.supported=e,h.supported=!0)}}}}}}if(!(h.creator||p.creator&&p.creator!==u)){const e=n.match(/\*\*Creator\s*:\*\*\s*\[?([^\]\n\r]+)(?:\]|\n|$)/i);e&&(p.creator=e[1].trim(),p.author||(p.author=p.creator))}if(!h.imageUrl&&!p.imageUrl){const e={Screenshot:n.match(/Screenshot:([^#]*?)(?=#|\n\s*\n\s*\*\*|$)/is)?.[1]||"",GetThisModule:n.match(/Get this Module([^#]*?)(?=#|\n\s*\n\s*\*\*|$)/is)?.[1]||""},t=[{regex:/!\[.*?\]\((https:\/\/[^)]+)\)/g,isGlobal:!0},{regex:/<img[^>]*src=["'](https:\/\/[^"']+)["'][^>]*>/i,isGlobal:!1},{regex:/src="(https:\/\/github\.com\/user-attachments\/assets\/[^"]+)"/i,isGlobal:!1}];for(const o of Object.values(e))if(o){for(const e of t)if(e.isGlobal){const t=[...o.matchAll(e.regex)];if(t.length>0){p.imageUrl=t[0][1];break}}else{const t=o.match(e.regex);if(t){p.imageUrl=t[1];break}}if(p.imageUrl)break}if(!p.imageUrl){const e=[...n.matchAll(/!\[.*?\]\((https:\/\/[^)]+)\)/g)];if(e.length>0){const t=e.filter(e=>e[1].includes("user-images.githubusercontent.com")||e[1].includes("github.com/user-attachments"));p.imageUrl=t.length>0?t[0][1]:e[0][1]}else{const e=n.match(/<img[^>]*src=["'](https:\/\/[^"']+)["'][^>]*>/i);e&&(p.imageUrl=e[1])}}}}if(c){if(!h.type){const e=c.match(/\[(.*?) Module\]/i);e&&(p.type=e[1].toLowerCase())}if(!h.version&&"1.0"===p.version){const e=c.match(/(v?[\d\.]+)/);e&&(p.version=e[1])}if(!h.name){let e=c.replace(/\[.*?\]\s*/,"").trim();e=e.replace(/\s*-\s*v?[\d\.]+$/,"").trim(),p.name=e}}return p}},6795(e,t,o){o.d(t,{Xe:()=>A,_e:()=>$,dn:()=>C});var i=o(6684),a=o(985),n=o(7403),r=o(2851),s=o(2300),l=o(4565),d=o(6799),c=o(5181),u=o(9533),p=o(1693),h=o(6331),b=o(1744),m=o(7910);function g(e,t,o){const i=t.id??t.moduleLink??t.name,a=(0,n.bx)(t.description);if(!(0,b.Bw)()||!(0,b.FT)(e.hass)||e._storeDescOriginal?.has(i)||!t.description)return{id:i,html:a,translated:!1};if(e._storeDescCache=e._storeDescCache||new Map,e._storeDescCache.has(i))return{id:i,html:e._storeDescCache.get(i),translated:!0};e._storeDescWanted=e._storeDescWanted||new Map;const r=e._storeDescFailed?.get(i);return(!r||Date.now()-r>15e3)&&(e._storeDescWanted.set(i,{text:a,order:o}),_(e)),{id:i,html:a,translated:!1}}function _(e){if(e._storeDescDraining)return;let t=null,o=null;for(const[i,a]of e._storeDescWanted||[])(null===o||a.order<o.order)&&(t=i,o=a);null!==t&&(0,b.Bw)()&&(e._storeDescDraining=!0,(0,b.sS)(o.text,e.hass).then(o=>{e._storeDescDraining=!1,e._storeDescWanted.delete(t),o?e._storeDescCache.set(t,o):(e._storeDescFailed=e._storeDescFailed||new Map,e._storeDescFailed.set(t,Date.now())),e.requestUpdate(),_(e)}))}const f="bubble-card-rate-limit-warning";function y(e){try{const t="number"==typeof e&&Number.isFinite(e)?e:Date.now()+36e5;localStorage.setItem(f,JSON.stringify({resetTime:t}))}catch(e){console.warn("Failed to persist rate limit warning to localStorage",e)}}function v(){try{localStorage.removeItem(f)}catch(e){console.warn("Failed to clear rate limit warning from localStorage",e)}}function $(e){const t=(0,h.Ay)(e._hassRender??e.hass),o=e.hass&&e.hass.states&&e.hass.states["sensor.bubble_card_modules"];if(void 0===e._storeShowOnlyCompatible&&(e._storeShowOnlyCompatible=!0),void 0===e._rankingInfoDismissed)try{e._rankingInfoDismissed="true"===localStorage.getItem("bubble-card-ranking-info-dismissed")}catch(t){e._rankingInfoDismissed=!1}if(void 0===e._rateLimitWarning){const t=function(){try{const e=localStorage.getItem(f);if(!e)return null;const t=JSON.parse(e);return t&&"object"==typeof t?t:null}catch(e){return null}}(),o=t?.resetTime;"number"==typeof o&&o>Date.now()?(e._rateLimitWarning=!0,e._rateLimitResetTime=o):(e._rateLimitWarning=!1,t&&v())}e._dismissRankingInfo=()=>{e._rankingInfoDismissed=!0;try{localStorage.setItem("bubble-card-ranking-info-dismissed","true")}catch(e){console.warn("Failed to save ranking info dismiss state to localStorage",e)}e.requestUpdate()};const r=(0,c.Qy)();if(e._storeBctRetryHandle&&r&&(clearTimeout(e._storeBctRetryHandle),e._storeBctRetryHandle=null),!e.hass||r||e._storeBctCheckAttempted)e.hass&&r&&!e._storeBctCheckAttempted&&(e._storeBctCheckInFlight||(e._storeBctCheckInFlight=!0,e._storeBctCheckAttempted=!0,(0,c.ensureBCTProviderAvailable)(e.hass).finally(()=>{e._storeBctCheckInFlight=!1,(0,c.Qy)()!==r&&e.requestUpdate()})));else{const t=Date.now(),o=e._storeLastBctCheckAt??0,i=o?t-o:1/0,a=o&&i<5e3;if(e._storeBctCheckInFlight||a){if(a&&!e._storeBctRetryHandle){const t=Math.max(50,5e3-i);e._storeBctRetryHandle=setTimeout(()=>{e._storeBctRetryHandle=null,e.requestUpdate()},t)}}else e._storeBctRetryHandle&&(clearTimeout(e._storeBctRetryHandle),e._storeBctRetryHandle=null),e._storeBctCheckInFlight=!0,e._storeBctCheckAttempted=!0,e._storeLastBctCheckAt=t,(0,c.ensureBCTProviderAvailable)(e.hass).finally(()=>{e._storeBctCheckInFlight=!1,e.requestUpdate()})}if(!r){const e=a.Ki&&a.Ki.size>0||o;return i.qy`
      <div class="bubble-info warning">
        <h4 class="bubble-section-title">
          <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
          ${t("editor.store.bct_required_title")}
        </h4>
        <div class="content">
          ${e?i.qy`
            <p><b>${(0,p.T5)(t("editor.store.bct_required_body1"),{tools:i.qy`<code>Bubble Card Tools</code>`})}</b></p>
            <p>${t("editor.store.bct_required_body2")}</p>
          `:i.qy`
            <p>${(0,p.T5)(t("editor.store.bct_required_body3"),{no_modules:i.qy`<b>${t("editor.store.no_modules_detected")}</b>`,tools:i.qy`<code>Bubble Card Tools</code>`})}</p>
          `}
        </div>
      </div>
    `}if(!e._storeModules){const t=(0,s.TJ)();if(t){e._storeModules=t.modules,e._isLoadingStore=!1;const o=Date.now(),i=o-(t.lastFetchedAt||(t.expiration?t.expiration-864e5:0))>216e5,a=t.expiration<o+36e5;(i||a)&&M(e,!0)}else e._isLoadingStore=!0,M(e)}if(e._storeAutoRefreshTimer||(e._storeAutoRefreshTimer=setInterval(()=>{M(e,!0)},216e5)),e._isLoadingStore){const o=e._loadingProgress||0,a=e._loadingStatus||t("editor.store.loading_modules");return i.qy`
      <div class="store-loading">
        <div class="bubble-loading-icon">
          <div class="icon-center-wrapper">
            <ha-icon icon="mdi:puzzle"></ha-icon>
          </div>
          <div class="bubble-loading-orbit">
            <div class="bubble-loading-satellite"></div>
          </div>
        </div>
        <div class="bubble-progress-container">
          <div class="bubble-progress-track">
            <div class="bubble-progress-bar" style="width: ${o}%">
              <div class="bubble-progress-glow"></div>
            </div>
          </div>
          <div class="bubble-progress-percentage">
            <span class="bubble-progress-text">${a}</span>
            <span class="bubble-progress-value">${Math.round(o)}%</span>
          </div>
        </div>
      </div>
    `}return e._storeError?i.qy`
      <div class="bubble-info error">
        <h4 class="bubble-section-title">
          <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
          ${t("editor.store.loading_error_title")}
        </h4>
        <div class="content">
          <p>${t("editor.store.loading_error_body").replace("{error}",e._storeError)}</p>
          <ha-button @click=${()=>M(e)}>
            <ha-icon icon="mdi:refresh" style="margin-inline-end: 8px;"></ha-icon>
            ${t("editor.store.retry")}
          </ha-button>
        </div>
      </div>
    `:([...new Set(e._storeModules.filter(e=>e.type).map(e=>e.type.toLowerCase()))].sort(),void 0===e._zoomedImage&&(e._zoomedImage=null),(0,b.Tp)(e.hass),e._toggleImageZoom=t=>{e._zoomedImage===t?e._zoomedImage=null:e._zoomedImage=t,e.requestUpdate()},i.qy`
    <div class="module-store">
      <div class="store-header">
        <div class="store-header-top">
          <div class="store-header-title">
            <ha-icon icon="mdi:puzzle-plus-outline"></ha-icon>
            <span>${t("editor.store.title")}</span>
          </div>
          <div class="store-header-actions">
            ${(0,b.FT)(e.hass)?i.qy`
              <div
                class="bubble-badge hoverable translate-badge ${(0,b.Bw)()?"active":""}"
                @click=${()=>{(0,b.fE)(!(0,b.Bw)()),(0,b.Bw)()&&(0,b.Tp)(e.hass),e.requestUpdate()}}
                title="${t("editor.store.translate_descriptions")}"
              >
                <ha-icon icon="${(0,b.Bw)()?"mdi:translate":"mdi:translate-off"}"></ha-icon>
                <span>${t("editor.common.auto")}</span>
              </div>
            `:""}
            <div
              class="store-refresh-button"
              @click=${()=>{e._isApiCallInProgress=!1,M(e,!1)}}
              title="${t("editor.store.refresh_list")}"
            >
              <ha-icon icon="mdi:refresh"></ha-icon>
            </div>
          </div>
        </div>
        <div class="store-search">
          ${d=e.hass,d&&(0,u._0)(d,"2026.5")?i.qy`<ha-input-search
                .value=${e._storeSearchQuery||""}
                placeholder="${t("editor.store.search_modules")}"
                @input=${t=>{e._storeSearchQuery=t.target.value,e.requestUpdate()}}
              ></ha-input-search>`:i.qy`<ha-textfield
                label="${t("editor.store.search_modules")}"
                icon
                .value=${e._storeSearchQuery||""}
                @input=${t=>{e._storeSearchQuery=t.target.value,e.requestUpdate()}}
              >
                <slot name="prefix" slot="leadingIcon">
                  <ha-icon slot="prefix" icon="mdi:magnify"></ha-icon>
                </slot>
              </ha-textfield>`}
        </div>
        <div class="store-filters">

          <bubble-formfield label="${t("editor.store.only_compatible").replace("{card_type}",t("editor.module_editor.card_"+String(e._config?.card_type??"").replace(/-/g,"_")))}">
            <ha-switch
              .checked=${e._storeShowOnlyCompatible??!0}
              @change=${t=>{e._storeShowOnlyCompatible=t.target.checked,e.requestUpdate()}}
            ></ha-switch>
          </bubble-formfield>
        </div>
      </div>

      ${e._rankingInfoDismissed?"":i.qy`
        <div class="bubble-info info">
          <div class="bubble-info-header">
            <h4 class="bubble-section-title">
              <ha-icon icon="mdi:information-outline"></ha-icon>
              ${t("editor.store.ranking_title")}
              <div class="bubble-info-dismiss bubble-badge" @click=${e._dismissRankingInfo} title="${t("editor.common.dismiss")}"
                style="
                  display: inline-flex;
                  align-items: center;
                  position: absolute;
                  inset-inline-end: 16px;
                  padding: 0 8px;
                  cursor: pointer;"
              >
                <ha-icon icon="mdi:close" style="margin: 0;"></ha-icon>
                ${t("editor.common.dismiss")}
              </div>
            </h4>
          </div>
          <div class="content">
            <p>${t("editor.store.ranking_body1")}</p>
            <p><b>${t("editor.store.ranking_body2")}</b></p>
          </div>
        </div>
      `}

      ${e._rateLimitWarning?i.qy`
        <div class="bubble-info warning">
          <div class="bubble-info-header">
            <h4 class="bubble-section-title">
              <ha-icon icon="mdi:alert-outline"></ha-icon>
              ${t("editor.store.rate_limit_title")}
              <div class="bubble-info-dismiss bubble-badge" @click=${()=>{e._rateLimitWarning=!1,v(),e.requestUpdate()}} title="${t("editor.common.dismiss")}"
                style="
                  display: inline-flex;
                  align-items: center;
                  position: absolute;
                  inset-inline-end: 16px;
                  padding: 0 8px;
                  cursor: pointer;"
              >
                <ha-icon icon="mdi:close" style="margin: 0;"></ha-icon>
                ${t("editor.common.dismiss")}
              </div>
            </h4>
          </div>
          <div class="content">
            <p>${t("editor.store.rate_limit_body")} ${e._rateLimitResetTime?t("editor.store.try_again_in").replace("{time}",function(e,t){const o=e-Date.now();if(o<=0)return t("editor.store.time_now");const i=e=>t(e>1?"editor.store.time_minutes":"editor.store.time_minute").replace("{count}",e),a=e=>t(e>1?"editor.store.time_hours":"editor.store.time_hour").replace("{count}",e),n=Math.ceil(o/6e4);if(n<60)return i(n);const r=Math.floor(n/60),s=n%60;return 0===s?a(r):t("editor.store.time_hours_minutes").replace("{hours}",a(r)).replace("{minutes}",i(s))}(e._rateLimitResetTime,t)):t("editor.store.try_again_later")}</p>
          </div>
        </div>
      `:""}

      <div class="store-modules">
        ${w(e).map((o,a)=>{const n=k(o.id),r=C(o.id),s=q(o.id,o.version),d=e._config.card_type??"";let c=!0;return c=Array.isArray(o.supportedCards)?o.supportedCards.includes(d):!o.unsupportedCards||!o.unsupportedCards.includes(d),i.qy`
            <div class="store-module-card">
              <div class="store-module-header ${c?"":"warning"}">
                <div class="bubble-section-title">
                  <ha-icon icon="mdi:puzzle"></ha-icon>
                  <h3>${o.name}</h3>
                </div>

                <div class="store-module-meta">
                  <div class="store-module-author">
                    ${o.userAvatar?i.qy`
                      <img src="${o.userAvatar}" alt="${o.creator||t("editor.store.anonymous")}" class="author-avatar">
                    `:""}
                    <span>${t("editor.store.by_creator").replace("{creator}",o.creator||t("editor.store.anonymous"))}</span>
                  </div>
                  <div class="version-container">
                    ${x(o)?i.qy`<span class="bubble-badge new-badge"><ha-icon icon="mdi:bell-outline"></ha-icon> ${t("editor.store.new_badge")}</span>`:""}
                    ${c?"":i.qy`<span class="bubble-badge incompatible-badge">${t("editor.store.incompatible_badge")}</span>`}
                    ${s?i.qy`<span class="bubble-badge update-badge">${t("editor.store.update_available_badge")}</span>`:""}
                    ${r?i.qy`<span class="bubble-badge yaml-badge">YAML</span>`:""}
                    <span class="bubble-badge version-badge">${o.version||""}</span>
                  </div>
                </div>

                <div class="store-module-badges bubble-badges">
                </div>
              </div>

              <div class="store-module-content">
                <div class="store-module-description">
                  ${o.description?(()=>{const t=g(e,o,a),n=(0,b.Bw)()&&!!(0,b.FT)(e.hass)&&e._storeDescOriginal?.has(t.id);return i.qy`
                    <p class="module-description" .innerHTML=${t.html}></p>
                    ${t.translated||n?(0,m.WG)(e,t.id,t.translated):""}
                  `})():i.qy`
                    <p><em>${t("editor.store.no_description")}</em></p>
                  `}
                  ${o.imageUrl?i.qy`
                    <div class="module-preview-container">
                      <img src="${o.imageUrl}" alt="${o.name}" class="module-preview-image">
                      <div class="module-preview-zoom-btn" @click=${t=>{t.stopPropagation(),e._toggleImageZoom(o.imageUrl)}}>
                        <ha-icon icon="mdi:magnify"></ha-icon>
                      </div>
                    </div>
                  `:""}
                </div>

                <div class="store-module-actions bubble-badges">
                  ${n?i.qy`
                      ${s?i.qy`
                          ${S(o)?i.qy`
                              <a 
                                href="${o.moduleLink}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="bubble-badge update-button hoverable"
                                style="cursor: pointer;"
                              >
                                <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                                <span>${t("editor.store.update_manual")}</span>
                              </a>
                            `:i.qy`
                              <div 
                                @click=${()=>(0,l.G)(e,o)}
                                class="bubble-badge update-button hoverable"
                                style="cursor: pointer;"
                              >
                                <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                                <span>${t("editor.common.update")}</span>
                              </div>
                            `}
                        `:i.qy`
                          <div class="bubble-badge installed-button">
                            <ha-icon icon="mdi:check"></ha-icon>
                            <span>${t(r?"editor.store.installed_via_yaml":"editor.store.installed")}</span>
                          </div>
                        `}
                    `:i.qy`
                      ${S(o)?i.qy`
                          <a
                            href="${o.moduleLink}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="bubble-badge install-button hoverable"
                            style="cursor: pointer;"
                          >
                            <ha-icon icon="mdi:github"></ha-icon>
                            <span>${t("editor.store.manual_install")}</span>
                          </a>
                        `:i.qy`
                          <div
                            @click=${()=>(0,l.G)(e,o)}
                            class="bubble-badge install-button hoverable"
                            style="cursor: pointer;"
                          >
                            <ha-icon icon="mdi:download"></ha-icon>
                            <span>${t("editor.store.install")}</span>
                          </div>
                        `}
                    `}
                  <a
                    href="${o.moduleLink}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bubble-badge link-button"
                  >
                    <ha-icon icon="mdi:github"></ha-icon>
                    ${t("editor.store.more_info")}
                  </a>
                </div>
              </div>
            </div>
          `})}
      </div>

      ${0===w(e).length?i.qy`
        <div class="bubble-info">
          <h4 class="bubble-section-title">
            <ha-icon icon="mdi:information-outline"></ha-icon>
            ${t("editor.store.no_modules_found")}
          </h4>
          <div class="content">
            <p>${t("editor.store.no_modules_match")}</p>
          </div>
        </div>
      `:""}
      
      <div class="back-to-top-button" @click=${()=>(0,n.XY)(e)}>
        <ha-icon icon="mdi:arrow-up"></ha-icon>
      </div>
    </div>

    ${e._zoomedImage?i.qy`
      <div class="module-preview-fullscreen" @click=${()=>e._toggleImageZoom(null)}>
        <img src="${e._zoomedImage}" alt="${t("editor.store.fullscreen_preview")}">
      </div>
    `:""}
  `);var d}function w(e){if(!e._storeModules)return[];let t=[...e._storeModules];const o=new Map([["smart_icons"]]);if(t=t.filter(e=>{const t=e&&e.id;return!t||!o.has(t)||k(t)}),e._storeSearchQuery){const o=e._storeSearchQuery.toLowerCase();t=t.filter(e=>e.name&&e.name.toLowerCase().includes(o)||e.description&&e.description.toLowerCase().includes(o)||e.creator&&e.creator.toLowerCase().includes(o)||e.type&&e.type.toLowerCase().includes(o))}if(e._storeShowOnlyCompatible){const o=e._config.card_type??"";t=t.filter(e=>e.supportedCards&&Array.isArray(e.supportedCards)?e.supportedCards.includes(o):!e.unsupportedCards||!e.unsupportedCards.includes(o))}return e._storeSelectedType&&"all"!==e._storeSelectedType&&(t=t.filter(t=>t.type&&t.type.toLowerCase()===e._storeSelectedType.toLowerCase())),t=(i=t)&&Array.isArray(i)?i.map(e=>{let t=0,o=!1,i=!1;if(e.comments&&(t+=Math.min(e.comments,8),o=!0),e.reactions?.total_count&&(t+=5*e.reactions.total_count,o=!0),e.reactions?.heart&&(t+=10*e.reactions.total_count,o=!0),e.createdAt){const o=new Date(e.createdAt),a=(new Date-o)/864e5;a<=7?(t+=30,i=!0):a<=30?(t+=15,i=!0):a<=90&&(t+=5)}if(e.updated_at){const o=new Date(e.updated_at),a=(new Date-o)/864e5;a<=7?(t+=25,i=!0):a<=30?(t+=15,i=!0):a<=90&&(t+=8)}return o||i||(t-=30),o&&i&&(t+=20),"Clooos"===e.creator&&(t+=100),x(e)&&(t+=1e4),{...e,relevanceScore:t}}).sort((e,t)=>t.relevanceScore-e.relevanceScore):[],t;var i}function x(e){if(!e.createdAt)return!1;const t=new Date(e.createdAt);return(new Date-t)/864e5<=14}function k(e){return a.Ki.has(e)}function C(e){if(!k(e))return!1;if(a.sq.has(e))return"yaml"===a.sq.get(e);try{return!JSON.parse(localStorage.getItem("bubble-card-modules")||"{}")[e]}catch(e){return console.warn("Error checking module installation source:",e),!1}}function A(){const e=Array.from(a.Ki.keys()),t=[];let o=0;const i=(0,s.TJ)();return i&&i.modules&&i.modules.length?(e.forEach(e=>{const n=i.modules.find(t=>t.id===e);n&&q(e,n.version)&&(o++,t.push({id:e,name:n.name||a.Ki.get(e).name||e,currentVersion:a.Ki.get(e).version||"0",newVersion:n.version}))}),{hasUpdates:o>0,updateCount:o,modules:t}):{hasUpdates:!1,updateCount:0,modules:[]}}function q(e,t){if(!k(e)||!t)return!1;const o=(a.Ki.get(e)||{}).version||"0";return(0,n._O)(t,o)>0}function S(e){if(!e||!e.yamlContent)return!0;const t=e.yamlContent.trim();if(!t)return!0;try{const e=d.Ay.load(t);if(!e||"object"!=typeof e)return!0;const o=Object.keys(e);if(o.length>1){let t=0;for(const i of o){const o=e[i];o&&"object"==typeof o&&(o.name||o.code)&&t++}if(t>1)return!0}if(1===o.length){const t=e[o[0]];if(t&&"object"==typeof t){const e=Object.keys(t);let o=0;for(const i of e){const e=t[i];e&&"object"==typeof e&&(e.name||e.code)&&o++}if(o>1)return!0}}if(1===o.length){const t=e[o[0]];if(!t||"object"!=typeof t)return!0;if(!t.name||!t.code)return!0}}catch(e){return console.warn("Error checking module YAML compatibility:",e),!0}return!1}async function M(e,t=!1){const o=(0,h.Ay)(e._hassRender??e.hass);if(e._isApiCallInProgress)return;e._isApiCallInProgress=!0;const i=!t&&void 0!==e._storeModules;if(!t){e._isLoadingStore=!0,e._storeError=null,e._loadingProgress=5,e._loadingStatus=o("editor.store.status_connecting"),e.requestUpdate();let t=setInterval(()=>{if(!e._isLoadingStore)return void clearInterval(t);const o=e._loadingProgress||0;let i=0;o<40?i=2.5*Math.random():o<60?i=1.5*Math.random():o<75?i=.8*Math.random():o<90&&(i=.3*Math.random()),o<90&&(e._loadingProgress=o+i,e.requestUpdate())},200);e._progressInterval=t}try{if(!i){const i=localStorage.getItem("bubble-card-api-failure-timestamp");if(i){const a=parseInt(i),n=18e5;if(Date.now()-a<n){const i=(0,s.TJ)();return i&&!e._storeModules&&(e._storeModules=i.modules,e._isLoadingStore=!1,e.requestUpdate()),t||(e._loadingStatus=o("editor.store.status_loading_cache"),e._loadingProgress=100,e.requestUpdate(),e._progressInterval&&(clearInterval(e._progressInterval),e._progressInterval=null)),void(e._isApiCallInProgress=!1)}localStorage.removeItem("bubble-card-api-failure-timestamp")}}let a=[],n=1,l=!0,d=!1;for(t||(e._loadingStatus=o("editor.store.status_downloading"),e._loadingProgress=Math.max(e._loadingProgress,50),e.requestUpdate());l;){let i,r=0;const s=2;for(;r<=s;)try{if(i=await fetch(`https://api.github.com/repos/Clooos/Bubble-Card/discussions?per_page=100&page=${n}`,{method:"GET",headers:{Accept:"application/vnd.github.v3+json","X-GitHub-Api-Version":"2022-11-28"}}),i.ok||i.status>=400&&i.status<500)break;if(!(r<s))break;console.warn(`⚠️ Server error ${i.status} on page ${n}, retrying in ${500*(r+1)}ms...`),await new Promise(e=>setTimeout(e,500*(r+1))),r++}catch(e){if(!(r<s)){if(console.warn(`⚠️ Network error on page ${n} after ${s} retries:`,e.message),a.length>0){console.warn(`Using ${a.length} discussions from previous pages`),d=!0,l=!1,i=null;break}throw e}console.warn(`⚠️ Network error on page ${n}, retrying in ${500*(r+1)}ms...`),await new Promise(e=>setTimeout(e,500*(r+1))),r++}if(!i)continue;if(t||(e._loadingStatus=o("editor.store.status_processing_page").replace("{page}",n),e._loadingProgress=Math.max(e._loadingProgress,Math.min(50+5*n,80)),e.requestUpdate()),!i.ok){const t=i.headers.get("x-ratelimit-remaining"),o=i.headers.get("x-ratelimit-reset"),r=null!==t?Number(t):null,s=o?1e3*parseInt(o,10):null;if(403===i.status&&0===r&&(s&&(e._rateLimitResetTime=s),e._rateLimitWarning=!0,y(e._rateLimitResetTime)),a.length>0&&i.status>=500){console.warn(`⚠️ Server error on page ${n}, using ${a.length} discussions from previous pages`),d=!0,l=!1;continue}throw localStorage.setItem("bubble-card-api-failure-timestamp",Date.now().toString()),new Error(`REST API Error: ${i.status}`)}const c=await i.json();0===c.length?l=!1:(a=[...a,...c],n++,l&&await new Promise(e=>setTimeout(e,1e3)));const u=i.headers.get("x-ratelimit-remaining"),p=i.headers.get("x-ratelimit-reset");u<=5&&(console.warn("⚠️ API limit approaching, stopping pagination"),d=!0,l=!1,p&&(e._rateLimitResetTime=1e3*parseInt(p)))}t||(e._loadingStatus=o("editor.store.status_filtering"),e._loadingProgress=Math.max(e._loadingProgress,85),e.requestUpdate());const c=a.filter(e=>{const t=e.category?.name;return"Share your Modules"===t}),u=(0,r.N5)(c),p=(0,s.TJ)(),h=u.length>0;if(d&&p&&p.modules&&p.modules.length>u.length)return console.warn("⚠️ Rate limit reached with incomplete data, preserving existing cache"),e._rateLimitWarning=!0,y(e._rateLimitResetTime),t||(e._loadingStatus=o("editor.store.status_rate_limited"),e._loadingProgress=Math.max(e._loadingProgress,95),e.requestUpdate()),await new Promise(e=>setTimeout(e,300)),t||(e._loadingProgress=100,e._loadingStatus=o("editor.store.status_cache_rate_limited"),e.requestUpdate()),e._storeModules=p.modules,e._isLoadingStore=!1,e._progressInterval&&(clearInterval(e._progressInterval),e._progressInterval=null),void e.requestUpdate();e._rateLimitWarning=!1,v(),t||(e._loadingStatus=o("editor.store.status_saving"),e._loadingProgress=Math.max(e._loadingProgress,95),e.requestUpdate()),h&&(0,s.aN)(u),t||(await new Promise(e=>setTimeout(e,300)),e._loadingProgress=100,e._loadingStatus=o("editor.store.status_complete"),e.requestUpdate()),t&&e._storeModules||(e._storeModules=h?u:p?.modules||[],e._isLoadingStore=!1,e._progressInterval&&(clearInterval(e._progressInterval),e._progressInterval=null),e.requestUpdate()),t&&e._storeModules&&h&&(e._storeModules=u,e.requestUpdate())}catch(i){if(console.error("Error loading modules:",i),!t){e._loadingStatus=o("editor.store.status_error_cache"),e._loadingProgress=Math.max(e._loadingProgress,85),e.requestUpdate();const t=(0,s.TJ)();t?(await new Promise(e=>setTimeout(e,300)),e._storeModules=t.modules,e._isLoadingStore=!1,e._loadingProgress=100,e._loadingStatus=o("editor.store.status_loaded_cache"),e.requestUpdate()):(e._storeError=i.message,e._isLoadingStore=!1,e.requestUpdate()),e._progressInterval&&(clearInterval(e._progressInterval),e._progressInterval=null)}}finally{e._isApiCallInProgress=!1,t||e.requestUpdate()}}},1744(e,t,o){o.d(t,{Bw:()=>g,FT:()=>f,Tp:()=>k,W_:()=>E,fE:()=>_,sS:()=>j,uH:()=>I});var i=o(6331);const a=new Map,n=1200,r=3e5,s="bubble-card-translations-cache";let l=null;function d(){if(l)return l;try{const e=JSON.parse(localStorage.getItem(s)||"[]");l=new Map(Array.isArray(e)?e:[])}catch(e){l=new Map}return l}function c(e){let t=5381;for(let o=0;o<e.length;o++)t=(t<<5)+t+e.charCodeAt(o)>>>0;return t.toString(36)+":"+e.length}let u=Promise.resolve(),p=0;const h={"zh-Hans":"zh-CN","zh-Hant":"zh-TW","es-419":"es","sr-Latn":"sr-Latn",gsw:"de",nb:"no",nn:"no"},b="bubble-card-module-translation";let m;function g(){if(void 0===m)try{m="1"===localStorage.getItem(b)}catch(e){m=!1}return m}function _(e){m=!!e;try{localStorage.setItem(b,m?"1":"0")}catch(e){}}function f(e){if((0,i.NO)())return null;const t=e?.locale?.language??"en";return"en"===t||"en-GB"===t?null:t}const y=/(```[\s\S]*?```|<code-block>[\s\S]*?<\/code-block>|<pre>[\s\S]*?<\/pre>|<code>[\s\S]*?<\/code>|`[^`\n]*`|<[^>\n]+>|https?:\/\/\S+|Bubble Card Tools|Bubble Card|Module Store|Home Assistant|GitHub|Patreon|YAML)/g,v={fr:/fen[êe]tres?\s+contextuelles?|fen[êe]tres?\s+surgissantes?/gi,es:/ventanas?\s+emergentes?/gi,"es-419":/ventanas?\s+emergentes?/gi,pt:/janelas?\s+(?:emergentes?|de\s+contexto)/gi,"pt-BR":/janelas?\s+(?:emergentes?|de\s+contexto)/gi,ca:/finestres?\s+emergents?/gi,gl:/xanelas?\s+emerxentes?/gi,it:/finestre?\s+(?:a\s+comparsa|di\s+dialogo)|finestrell[ae]/gi,ro:/ferestre?\s+pop-?up|ferestre?\s+contextuale?/gi,de:/Pop-?up-Fenstern?|Kontextfenstern?/gi,nl:/pop-?upvensters?|contextvensters?/gi,da:/pop-?op-?vinduer?/gi,sv:/pop-?up-?f[öo]nster/gi,nb:/pop-?up-?vinduer?/gi,nn:/pop-?up-?vindaug[ae]?/gi,fi:/ponnahdusikkunoita|ponnahdusikkunat?|ponnahdusikkunan?/gi,pl:/wyskakuj[ąa]ce?\s+okna?|okna?\s+wyskakuj[ąa]ce?/gi,cs:/vyskakovac[íi]\s+okna?|vyskakovac[íi]ch\s+oken/gi,sk:/vyskakovacie\s+okn[áa]|vyskakovacieho\s+okna/gi,ru:/всплывающи[ех]\s+окн[ао]\w*|всплывающее\s+окно/gi,uk:/спливн[іе]\s+вікн[ао]\w*/gi,tr:/a[çc][ıi]l[ıi]r\s+pencerelere?|a[çc][ıi]l[ıi]r\s+pencere\w*/gi},$=new Map;function w(e){if("undefined"==typeof Translator||"function"!=typeof Translator.create)return Promise.resolve(null);if(!$.has(e)){const t=(async()=>{try{const t=await Translator.availability({sourceLanguage:"en",targetLanguage:e});return"available"!==t&&"downloadable"!==t?null:await Translator.create({sourceLanguage:"en",targetLanguage:e})}catch(e){return null}})().catch(()=>null).then(t=>(t||$.delete(e),t));$.set(e,t)}return $.get(e)}let x=!1;function k(e){if(!g())return;if(x)return;const t=f(e);if(!t||"undefined"==typeof Translator||"function"!=typeof Translator.create)return;x=!0;const o=h[t]??t.split("-")[0],i=()=>{window.removeEventListener("pointerdown",i,!0),w(o)};window.addEventListener("pointerdown",i,!0)}async function C(e,t){try{const o=await w(t);if(!o)return null;const i=await o.translate(e);return"string"==typeof i&&i?i:null}catch(e){return null}}let A=!1,q=!1;async function S(e,t,o){if(A||!o?.connection?.sendMessagePromise)return null;try{const i=await o.connection.sendMessagePromise({type:"bubble_card_tools/translate",text:e,target:t});return q=!0,"string"==typeof i?.translated&&i.translated?i.translated:null}catch(e){return"unknown_command"===e?.code&&(A=!0),null}}async function M(e,t){return Date.now()<p?null:function(){const o=u.then(async()=>{const o=await(async()=>{if(Date.now()<p)return null;try{const o=new URLSearchParams({client:"gtx",sl:"en",tl:t,dt:"t",ie:"UTF-8",oe:"UTF-8",q:e}),i=await fetch(`https://translate.googleapis.com/translate_a/single?${o}`);if(429===i.status)return p=Date.now()+r,null;if(!i.ok)return null;const a=await i.json();return(a?.[0]||[]).map(e=>e?.[0]??"").join("")||null}catch(e){return p=Date.now()+r,null}})();return await new Promise(e=>setTimeout(e,350)),o});return u=o.catch(()=>{}),o}()}const L=new Map;let P=Promise.resolve();function E(e,t,o){if(!g())return e;const i=f(t);if(!i||!e||"string"!=typeof e||!/[a-zA-Z]{3}/.test(e))return e;const n=`${i} ${c(e)}`;if(a.has(n))return a.get(n);const r=d().get(n);return r?(a.set(n,r),r):(L.has(n)||(L.set(n,!0),P=P.then(async()=>{const i=await j(e,t).catch(()=>null);L.delete(n),i&&"function"==typeof o&&o()})),e)}const T=new Set(["label","title","helper","description","warn_text","group"]);function I(e,t,o){if(!g())return e;if(!f(t))return e;const i=e=>{if(Array.isArray(e))e.forEach(i);else if(e&&"object"==typeof e){"constant"===e.type&&"string"==typeof e.value&&(e.value=E(e.value,t,o)),e.constant&&"object"==typeof e.constant&&"string"==typeof e.constant.value&&(e.constant.value=E(e.constant.value,t,o));for(const[a,n]of Object.entries(e))"string"==typeof n&&T.has(a)?e[a]=E(n,t,o):"options"===a&&Array.isArray(n)?n.forEach((e,a)=>{"string"==typeof e?n[a]={value:e,label:E(e,t,o)}:Array.isArray(e)&&"string"==typeof e[1]?e[1]=E(e[1],t,o):i(e)}):n&&"object"==typeof n&&i(n)}};return i(e),e}async function j(e,t){if(!g())return null;const o=f(t);if(!o||!e||"string"!=typeof e)return null;const r=`${o} ${c(e)}`;if(a.has(r))return a.get(r);const u=d().get(r);if(u)return a.set(r,u),u;const p=h[o]??o.split("-")[0],{protectedText:b,tokens:m}=function(e){const t=[];return{protectedText:e.replace(y,e=>(t.push(e),`⟦${t.length-1}⟧`)),tokens:t}}(e),_=b.slice(0,8e3),$=b.slice(8e3),w=e=>e.replace(/⟦\s*\d+\s*⟧/g,"").trim().length,x=(e,t)=>{const o=w(e);return o<=20||w(t)>=.4*o},k=[];for(const e of function(e){const t=[];let o=e;for(;o.length>n;){let e=o.lastIndexOf("\n",n);e<600&&(e=o.lastIndexOf(" ",n)),e<600&&(e=n),t.push(o.slice(0,e)),o=o.slice(e)}return o&&t.push(o),t}(_)){if(!/[a-zA-Z]/.test(e.replace(/⟦\s*\d+\s*⟧/g,""))){k.push(e);continue}let o=await C(e,p);if(o&&x(e,o)||(o=await S(e,p,t)),o&&x(e,o)||q||(o=await M(e,p)),!o||!x(e,o))return null;k.push(o)}const A=function(e,t,o){const i=v[t]??v[t?.split("-")[0]];if(!i||!o)return e;const a=/^[\x20-\x7E]+$/.test(o);return e.replace(i,e=>{const t=a&&/s$/i.test(e.trim())?`${o}s`:o,i=e.charAt(0);return i!==i.toLowerCase()?t.charAt(0).toUpperCase()+t.slice(1):t.charAt(0).toLowerCase()+t.slice(1)})}(k.join(""),o,(0,i.Ay)(t)("editor.card_names.popup")),L=function(e,t){let o=!1;const i=new Set,a=e.replace(/⟦\s*(\d+)\s*⟧/g,(e,a)=>{const n=t[Number(a)];return void 0===n?(o=!0,""):(i.add(Number(a)),n)});return o||t.some((e,t)=>!i.has(t)&&function(e){return/^(```|<pre>|<code-block>|<code>|`)/.test(e)}(e))?null:a}(A+$,m);return L?(a.set(r,L),d().set(r,L),function(){try{const e=[...l.entries()].slice(-1e3);localStorage.setItem(s,JSON.stringify(e))}catch(e){}}(),L):null}},7910(e,t,o){o.d(t,{M:()=>c,WG:()=>s,pd:()=>r});var i=o(6684),a=o(6331),n=o(1744);function r(e,t){return!!e._storeDescOriginal?.has(t)}function s(e,t,o){const n=(0,a.Ay)(e._hassRender??e.hass),s=r(e,t);return o||s?i.qy`
    <p class="module-translation-note" style="opacity: 0.7; font-size: 0.85em; display: flex; align-items: center; gap: 4px;">
      <ha-icon icon="mdi:translate" style="--mdc-icon-size: 14px;"></ha-icon>
      ${o?i.qy`<em>${n("editor.store.machine_translated")}</em>`:""}
      <a href="#" style="color: var(--primary-color);" @click=${i=>{i.preventDefault(),function(e,t,o){e._storeDescOriginal=e._storeDescOriginal||new Set,o?e._storeDescOriginal.add(t):e._storeDescOriginal.delete(t),e.requestUpdate()}(e,t,o)}}>${n(o?"editor.store.show_original":"editor.store.show_translation")}</a>
    </p>
  `:""}const l="bubble-card-translate-notice";let d;function c(e){const t=e._hassRender??e.hass;if(!(0,n.FT)(t))return"";if((0,n.Bw)()||function(){if(void 0===d)try{d="1"===localStorage.getItem(l)}catch(e){d=!1}return d}())return"";const o=(0,a.Ay)(t),r=()=>{!function(){d=!0;try{localStorage.setItem(l,"1")}catch(e){}}(),e.requestUpdate()};return i.qy`
    <div class="bubble-info bubble-translate-offer">
      <h4 class="bubble-section-title">
        <ha-icon icon="mdi:translate"></ha-icon>
        ${o("editor.store.translate_offer_title")}
      </h4>
      <div class="content">
        <p>${o("editor.store.translate_offer_body")}</p>
        <p class="bubble-translate-offer-actions">
          <a href="#" @click=${e=>{e.preventDefault(),(0,n.fE)(!0),(0,n.Tp)(t),r()}}>${o("editor.common.enable")}</a>
          <a href="#" @click=${e=>{e.preventDefault(),r()}}>${o("editor.common.dismiss")}</a>
        </p>
      </div>
    </div>
  `}},7403(e,t,o){o.d(t,{Qv:()=>r,TL:()=>c,XY:()=>h,_O:()=>p,a7:()=>n,bx:()=>s,yh:()=>d});var i=o(6331),a=o(985);function n(e){const t=a.Ki.get(e)||{};let o=t.name||e,i=t.description||"",n=t.editor||[],r=t.supported||[],s=t.unsupported||[],l=t.creator||t.author||"",d=t.link||"",c=t.version||"";return"string"==typeof n&&(n=a.Ki.get(n)?.editor||[]),Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]),Array.isArray(s)||(s=[s]),s.length>0&&0===r.length&&(r=["button","climate","cover","horizontal-buttons-stack","media-player","pop-up","select","separator","sub-buttons"].filter(e=>!s.includes(e))),{name:o,description:i,formSchema:n,supportedCards:r,unsupportedCard:s,moduleVersion:c,creator:l,moduleLink:d}}function r(e,t,o={}){if(Array.isArray(t))return o;for(const i of Array.isArray(e)?e:[])i&&"object"==typeof i&&(!Array.isArray(i.schema)||i.name&&!i.flatten||r(i.schema,t,o),i.name&&"default"in i&&(t&&Object.prototype.hasOwnProperty.call(t,i.name)||(o[i.name]=i.default)));return o}function s(e){if(!e)return(0,i.Ko)("editor.modules.no_description_available");try{const t=/Description:\s*([^\n]+)/i,o=e.match(t);if(o&&o[1]){const e=d(o[1].trim());if(e&&e.length>5)return l(e)}const a=/description:\s*\|([\s\S]*?)(?=\n\s*\w+:|$)/i,n=e.match(a);if(n&&n[1]){const e=n[1].trim().split(/\n{2,}/)[0].trim();if(e&&e.length>5)return l(d(e))}const r=/description:\s*["']([^"']+)["']/i,s=e.match(r);if(s&&s[1]){const e=d(s[1].trim());if(e&&e.length>5)return l(e)}const c=/description:\s*([^\n\r]+)/i,u=e.match(c);if(u&&u[1]){const e=d(u[1].trim());if(e&&e.length>5)return l(e)}const p=e.split("\n");let h=!1,b=[];for(let e=0;e<p.length;e++){const t=p[e].trim();if(t)if(t.includes("Supported cards:")||t.match(/^Version:/i)||t.match(/^Creator:/i)||t.match(/^ID:/i))h=!0;else if(h){if(t.startsWith("```")||t.startsWith("#")||t.startsWith("-")||t.startsWith(">")||t.includes("yaml")||t.match(/^\s*[a-z_]+:/i))continue;if(t.length>10&&!t.includes("Supported")&&(b.push(t),b.join(" ").length>40))break}}return b.length>0?l(d(b.join(" ").trim())):"string"!=typeof e||e.includes("description:")?(0,i.Ko)("editor.modules.no_description_available"):l(d(e))}catch(e){return console.warn("Error during description formatting:",e),(0,i.Ko)("editor.modules.no_description_available")}}function l(e){if(!e)return e;const t=e.trim(),o=(e,t)=>e>=0&&(-1===i||e<i);let i=-1,a=null;const n=t.search(/[.!?]\s/);o(n)&&(i=n+1,a="punct");const r=t.search(/<br|<\/p>|<p\s|<div|<\/div|<\/a>/i);o(r)&&(i=r,a="html");const s=t.search(/\n|\r\n/);if(o(s)&&(i=s,a="break"),i>=0){let e=t.substring(0,i).trim();if(e.length<5&&t.length>30){const o=t.substring(i+1).search(/[.!?]|\n|<br/i);o>0&&(e=t.substring(0,i+1+o).trim())}return e=e.replace(/<[^>]*>/g,"").trim(),"punct"===a||e.endsWith(".")?e:e+"."}const l=t.replace(/<[^>]*>/g,"").trim();return l.endsWith(".")?l:l+"."}function d(e){return e?e.replace(/\*\*(.*?)\*\*/g,"$1").replace(/\*(.*?)\*/g,"$1").replace(/`(.*?)`/g,"$1").replace(/~~(.*?)~~/g,"$1").replace(/\[(.*?)\]\(.*?\)/g,"$1").replace(/<\/?[^>]+(>|$)/g,"").replace(/^#+\s+/gm,"").replace(/\n{3,}/g,"\n\n").trim():""}function c(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}function u(e){return null==e?"":"string"==typeof e?e.trim().replace(/^[vV]/,""):"number"==typeof e?String(e):Array.isArray(e)?e.map(e=>u(e)).filter(Boolean).join("."):"object"==typeof e?"string"==typeof e.version||"number"==typeof e.version?u(e.version):"string"==typeof e.value||"number"==typeof e.value?u(e.value):"":""}function p(e,t){const o=u(e),i=u(t);if(!o||!i)return 0;const a=o.split(".").map(Number),n=i.split(".").map(Number);for(let e=0;e<Math.max(a.length,n.length);e++){const t=a[e]||0,o=n[e]||0;if(t>o)return 1;if(t<o)return-1}return 0}function h(e,t=!0){const o=e.shadowRoot.getElementById("module-editor-top-marker");if(o){const e=t?"smooth":"instant";o.scrollIntoView({behavior:e,block:"start"})}}}};