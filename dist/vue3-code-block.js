/**
 * @name vue3-code-block
 * @version 1.0.15
 * @description Vue 3 CodeBlock - Highlight your code with ease using this syntax highlighting component powered by PrismJS.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vue3-code-block/
 * @repository https://github.com/webdevnerdstuff/vue3-code-block
 * @license MIT License
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var UAParser = require('ua-parser-js');

const _hoisted_1$1 = /*#__PURE__*/ vue.createElementVNode("path", { d: "M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z" }, null, -1 /* HOISTED */);
const _hoisted_2$1 = /*#__PURE__*/ vue.createElementVNode("path", { d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" }, null, -1 /* HOISTED */);
const _hoisted_3$1 = /*#__PURE__*/ vue.createElementVNode("path", { d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" }, null, -1 /* HOISTED */);
var _sfc_main$1 = /*#__PURE__*/ vue.defineComponent({
    __name: 'StatusIcons',
    props: {
        icon: {
            type: String,
            required: true
        }
    },
    setup(__props) {
        return (_ctx, _cache) => {
            return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
                vue.createCommentVNode(" Copy Icon "),
                (__props.icon === 'copy')
                    ? (vue.openBlock(), vue.createElementBlock("svg", vue.mergeProps({ key: 0 }, _ctx.$attrs, {
                        viewBox: "0 0 512 512",
                        xmlns: "http://www.w3.org/2000/svg"
                    }), [
                        vue.createCommentVNode("! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. "),
                        _hoisted_1$1
                    ], 16 /* FULL_PROPS */))
                    : (__props.icon === 'success')
                        ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                            vue.createCommentVNode(" Success Icon "),
                            (vue.openBlock(), vue.createElementBlock("svg", vue.mergeProps(_ctx.$attrs, {
                                viewBox: "0 0 512 512",
                                xmlns: "http://www.w3.org/2000/svg"
                            }), [
                                vue.createCommentVNode("! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. "),
                                _hoisted_2$1
                            ], 16 /* FULL_PROPS */))
                        ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
                        : (__props.icon === 'failed')
                            ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 2 }, [
                                vue.createCommentVNode(" Failed Icon "),
                                (vue.openBlock(), vue.createElementBlock("svg", vue.mergeProps(_ctx.$attrs, {
                                    viewBox: "0 0 320 512",
                                    xmlns: "http://www.w3.org/2000/svg"
                                }), [
                                    vue.createCommentVNode("! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. "),
                                    _hoisted_3$1
                                ], 16 /* FULL_PROPS */))
                            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
                            : vue.createCommentVNode("v-if", true)
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */));
        };
    }
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$6 = ".v-code-block--tab-neon-bunny {\n  background-color: hsl(var(--v-cb-tab-neon-bunny-bkg)/100%) !important;\n  color: hsl(var(--v-cb-tab-neon-bunny-text)) !important;\n}\n.v-code-block--tab-neon-bunny:hover {\n  background-color: hsl(var(--v-cb-tab-neon-bunny-bkg)/50%) !important;\n}\n.v-code-block--tab-neon-bunny-icon {\n  color: hsl(var(--v-cb-tab-neon-bunny-icon)) !important;\n  fill: hsl(var(--v-cb-tab-neon-bunny-icon)) !important;\n}\n.v-code-block--tab-neon-bunny-icon-status-success {\n  color: hsl(var(--v-cb-tab-neon-bunny-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-neon-bunny-icon-success)) !important;\n}\n.v-code-block--tab-neon-bunny-icon-status-failed {\n  color: hsl(var(--v-cb-tab-neon-bunny-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-neon-bunny-icon-failed)) !important;\n}\n.v-code-block--tab-neon-bunny > div {\n  color: hsl(var(--v-cb-tab-neon-bunny-text));\n}\n.v-code-block--tab-neon-bunny-carrot {\n  background-color: hsl(var(--v-cb-tab-neon-bunny-carrot-bkg)/100%) !important;\n  color: hsl(var(--v-cb-tab-neon-bunny-carrot-text)) !important;\n}\n.v-code-block--tab-neon-bunny-carrot:hover {\n  background-color: hsl(var(--v-cb-tab-neon-bunny-carrot-bkg)/50%) !important;\n}\n.v-code-block--tab-neon-bunny-carrot-icon {\n  color: hsl(var(--v-cb-tab-neon-bunny-carrot-icon)) !important;\n  fill: hsl(var(--v-cb-tab-neon-bunny-carrot-icon)) !important;\n}\n.v-code-block--tab-neon-bunny-carrot-icon-status-success {\n  color: hsl(var(--v-cb-tab-neon-bunny-carrot-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-neon-bunny-carrot-icon-success)) !important;\n}\n.v-code-block--tab-neon-bunny-carrot-icon-status-failed {\n  color: hsl(var(--v-cb-tab-neon-bunny-carrot-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-neon-bunny-carrot-icon-failed)) !important;\n}\n.v-code-block--tab-neon-bunny-carrot > div {\n  color: hsl(var(--v-cb-tab-neon-bunny-carrot-text));\n}\n.v-code-block--tab-default {\n  background-color: hsl(var(--v-cb-tab-prism-default-bkg)/100%) !important;\n}\n.v-code-block--tab-default:hover {\n  background-color: hsl(var(--v-cb-tab-prism-default-bkg)/50%) !important;\n}\n.v-code-block--tab-default-icon {\n  color: hsl(var(--v-cb-tab-prism-default-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-default-icon)) !important;\n}\n.v-code-block--tab-default-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-default-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-default-icon-success)) !important;\n}\n.v-code-block--tab-default-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-default-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-default-icon-failed)) !important;\n}\n.v-code-block--tab-default > div {\n  color: hsl(var(--v-cb-tab-prism-default-text));\n}\n.v-code-block--tab-coy {\n  background-color: hsl(var(--v-cb-tab-prism-coy-bkg)/10%) !important;\n  border-left: 5px solid hsl(var(--v-cb-tab-prism-coy-bkg));\n  border-radius: 0;\n}\n.v-code-block--tab-coy:hover {\n  background-color: hsl(var(--v-cb-tab-prism-coy-bkg)/20%) !important;\n}\n.v-code-block--tab-coy-icon {\n  color: hsl(var(--v-cb-tab-prism-coy-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-coy-icon)) !important;\n}\n.v-code-block--tab-coy-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-coy-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-coy-icon-success)) !important;\n}\n.v-code-block--tab-coy-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-coy-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-coy-icon-failed)) !important;\n}\n.v-code-block--tab-coy > div {\n  color: hsl(var(--v-cb-tab-prism-coy-text));\n}\n.v-code-block--tab-dark {\n  background-color: hsl(var(--v-cb-tab-prism-dark-bkg)/100%) !important;\n  border-color: hsl(var(--v-cb-tab-prism-dark-border));\n  border-style: solid;\n  border-width: 0.3em 0.3em 0;\n}\n.v-code-block--tab-dark:hover {\n  background-color: hsl(var(--v-cb-tab-prism-dark-border)/50%) !important;\n}\n.v-code-block--tab-dark-icon {\n  color: hsl(var(--v-cb-tab-prism-dark-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-dark-icon)) !important;\n}\n.v-code-block--tab-dark-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-dark-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-dark-icon-success)) !important;\n}\n.v-code-block--tab-dark-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-dark-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-dark-icon-failed)) !important;\n}\n.v-code-block--tab-dark > div {\n  color: hsl(var(--v-cb-tab-prism-dark-text));\n}\n.v-code-block--tab-funky {\n  background: url('data:image/svg+xml;charset=utf-8,<svg%20version%3D\"1.1\"%20xmlns%3D\"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\"%20width%3D\"100\"%20height%3D\"100\"%20fill%3D\"rgba(0%2C0%2C0%2C.2)\">%0D%0A<polygon%20points%3D\"0%2C50%2050%2C0%200%2C0\"%20%2F>%0D%0A<polygon%20points%3D\"0%2C100%2050%2C100%20100%2C50%20100%2C0\"%20%2F>%0D%0A<%2Fsvg>');\n  background-size: 1em 1em;\n}\n.v-code-block--tab-funky:hover {\n  background-color: hsl(var(--v-cb-tab-prism-funky-bkg)) !important;\n}\n.v-code-block--tab-funky-icon {\n  color: hsl(var(--v-cb-tab-prism-funky-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-funky-icon)) !important;\n}\n.v-code-block--tab-funky-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-funky-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-funky-icon-success)) !important;\n}\n.v-code-block--tab-funky-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-funky-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-funky-icon-failed)) !important;\n}\n.v-code-block--tab-funky > div {\n  background-color: hsl(var(--v-cb-tab-prism-funky-dark)) !important;\n  color: hsl(var(--v-cb-tab-prism-funky-text));\n}\n.v-code-block--tab-okaidia {\n  background-color: hsl(var(--v-cb-tab-prism-okaidia-bkg)/100%) !important;\n}\n.v-code-block--tab-okaidia:hover {\n  background-color: hsl(var(--v-cb-tab-prism-okaidia-bkg)/50%) !important;\n}\n.v-code-block--tab-okaidia-icon {\n  color: hsl(var(--v-cb-tab-prism-okaidia-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-okaidia-icon)) !important;\n}\n.v-code-block--tab-okaidia-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-okaidia-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-okaidia-icon-success)) !important;\n}\n.v-code-block--tab-okaidia-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-okaidia-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-okaidia-icon-failed)) !important;\n}\n.v-code-block--tab-okaidia > div {\n  color: hsl(var(--v-cb-tab-prism-okaidia-text));\n}\n.v-code-block--tab-solarizedlight {\n  background-color: hsl(var(--v-cb-tab-prism-solarizedlight-bkg)/100%) !important;\n}\n.v-code-block--tab-solarizedlight:hover {\n  background-color: hsl(var(--v-cb-tab-prism-solarizedlight-bkg)/50%) !important;\n}\n.v-code-block--tab-solarizedlight-icon {\n  color: hsl(var(--v-cb-tab-prism-solarizedlight-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-solarizedlight-icon)) !important;\n}\n.v-code-block--tab-solarizedlight-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-solarizedlight-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-solarizedlight-icon-success)) !important;\n}\n.v-code-block--tab-solarizedlight-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-solarizedlight-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-solarizedlight-icon-failed)) !important;\n}\n.v-code-block--tab-solarizedlight > div {\n  color: hsl(var(--v-cb-tab-prism-solarizedlight-text));\n}\n.v-code-block--tab-tomorrow {\n  background-color: hsl(var(--v-cb-tab-prism-tomorrow-bkg)/100%) !important;\n}\n.v-code-block--tab-tomorrow:hover {\n  background-color: hsl(var(--v-cb-tab-prism-tomorrow-bkg)/50%) !important;\n}\n.v-code-block--tab-tomorrow-icon {\n  color: hsl(var(--v-cb-tab-prism-tomorrow-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-tomorrow-icon)) !important;\n}\n.v-code-block--tab-tomorrow-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-tomorrow-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-tomorrow-icon-success)) !important;\n}\n.v-code-block--tab-tomorrow-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-tomorrow-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-tomorrow-icon-failed)) !important;\n}\n.v-code-block--tab-tomorrow > div {\n  color: hsl(var(--v-cb-tab-prism-tomorrow-text));\n}\n.v-code-block--tab-twilight {\n  background-color: hsl(var(--v-cb-tab-prism-twilight-bkg)/100%) !important;\n  border-color: hsl(var(--v-cb-tab-prism-twilight-border));\n  border-style: solid;\n  border-width: 0.3em 0.3em 0;\n}\n.v-code-block--tab-twilight:hover {\n  background-color: hsl(var(--v-cb-tab-prism-twilight-bkg)/50%) !important;\n}\n.v-code-block--tab-twilight-icon {\n  color: hsl(var(--v-cb-tab-prism-twilight-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-twilight-icon)) !important;\n}\n.v-code-block--tab-twilight-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-twilight-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-twilight-icon-success)) !important;\n}\n.v-code-block--tab-twilight-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-twilight-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-twilight-icon-failed)) !important;\n}\n.v-code-block--tab-twilight > div {\n  color: hsl(var(--v-cb-tab-prism-twilight-text));\n}\n.v-code-block--tab-night-owl {\n  background-color: hsl(var(--v-cb-tab-prism-night-owl) 1) !important;\n}\n.v-code-block--tab-night-owl:hover {\n  background-color: hsl(var(--v-cb-tab-prism-night-owl)/50%) !important;\n}\n.v-code-block--tab-night-owl-icon {\n  color: hsl(var(--v-cb-tab-prism-night-owl-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-night-owl-icon)) !important;\n}\n.v-code-block--tab-night-owl-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-night-owl-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-night-owl-icon-success)) !important;\n}\n.v-code-block--tab-night-owl-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-night-owl-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-night-owl-icon-failed)) !important;\n}\n.v-code-block--tab-night-owl > div {\n  color: hsl(var(--v-cb-tab-prism-night-owl-text));\n}";
styleInject(css_248z$6);

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

var StatusIcons = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "src/plugin/StatusIcons.vue"]]);

// -------------------------------------------------- Neon Bunny PrismJS  */
// Neon Bunny //
const neonBunnyTheme = `/**
* MIT License
* Copyright (c) 2023 WebDevNerdStuff
* WebDevNerdStuff Neon Bunny
* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
*/

:root {
 --neon-bunny-blue-light: #2492ff;
 --neon-bunny-blue: #0b93ff;
 --neon-bunny-gray-lighter: #aaa;
 --neon-bunny-gray: #7f817e;
 --neon-bunny-green-darker-darker: #008b05;
 --neon-bunny-green-darker: #2bb71d;
 --neon-bunny-green-light: #2bb71d;
 --neon-bunny-green-neon: #0aff04;
 --neon-bunny-green: #00d205;
 --neon-bunny-lime-lighter: #c3e88d;
 --neon-bunny-lime: #b2ff02;
 --neon-bunny-magenta: #df00df;
 --neon-bunny-neon-green: #00ff00;
 --neon-bunny-orange: #e58100;
 --neon-bunny-peach-darker: #ffb46a;
 --neon-bunny-peach-light: #ffe4a6;
 --neon-bunny-peach: #ffcb6b;
 --neon-bunny-pink: #ff1190;
 --neon-bunny-purple-light-dim: #c792ea;
 --neon-bunny-purple-light: #d285cc;
 --neon-bunny-purple: #ea03ff;
 --neon-bunny-red: #ff3229;
 --neon-bunny-salmon: #ff6f5b;
 --neon-bunny-teal: #80fcff;
 --neon-bunny-white: #fff;
 --neon-bunny-yellow: #fef611;

 /* Standard */
 --neon-bunny-atrule: var(--neon-bunny-peach);
 --neon-bunny-attr-name: var(--neon-bunny-purple-light-dim);
 --neon-bunny-attr-value: var(--neon-bunny-peach);
 --neon-bunny-boolean: var(--neon-bunny-blue-light);
 --neon-bunny-builtin: var(--neon-bunny-purple);
 --neon-bunny-cdata: var(--neon-bunny-gray);
 --neon-bunny-char: var(--neon-bunny-pink);
 --neon-bunny-class-name: var(--neon-bunny-peach);
 --neon-bunny-comment: var(--neon-bunny-gray);
 --neon-bunny-constant: var(--neon-bunny-green-darker);
 --neon-bunny-deleted: var(--neon-bunny-red);
 --neon-bunny-entity: var(--neon-bunny-peach);
 --neon-bunny-function: var(--neon-bunny-green-neon);
 --neon-bunny-important: var(--neon-bunny-red);
 --neon-bunny-inserted: var(--neon-bunny-lime-lighter);
 --neon-bunny-keyword: var(--neon-bunny-blue);
 --neon-bunny-namespace: var(--neon-bunny-peach);
 --neon-bunny-number: var(--neon-bunny-white);
 --neon-bunny-operator: var(--neon-bunny-blue-light);
 --neon-bunny-prolog: var(--neon-bunny-gray);
 --neon-bunny-property: var(--neon-bunny-pink);
 --neon-bunny-punctuation: var(--neon-bunny-blue);
 --neon-bunny-regex: var(--neon-bunny-peach-light);
 --neon-bunny-string: var(--neon-bunny-green-darker);
 --neon-bunny-symbol: var(--neon-bunny-pink);
 --neon-bunny-tag: var(--neon-bunny-blue-light);
 --neon-bunny-url: var(--neon-bunny-orange);
 --neon-bunny-variable: var(--neon-bunny-green-darker);

 /* HTML */
 --neon-bunny-html-attr-name: var(--neon-bunny-green);
 --neon-bunny-html-attr-value-punctuation: var(--neon-bunny-peach-darker);
 --neon-bunny-html-attr-value: var(--neon-bunny-peach-darker);

 /* CSS */
 --neon-bunny-css-atrule-rule: var(--neon-bunny-blue);
 --neon-bunny-css-atrule: var(--neon-bunny-white);
 --neon-bunny-css-function: var(--neon-bunny-orange);
 --neon-bunny-css-property: var(--neon-bunny-pink);
 --neon-bunny-css-punctuation: var(--neon-bunny-white);
 --neon-bunny-css-selector: var(--neon-bunny-lime);
 --neon-bunny-css-string: var(--neon-bunny-green-light);
 --neon-bunny-css: var(--neon-bunny-purple-light-dim);

 /* JS */
 --neon-bunny-js-keyword: var(--neon-bunny-blue);
 --neon-bunny-js-literal-property: var(--neon-bunny-neon-green);
 --neon-bunny-js-operator: var(--neon-bunny-blue-light);
 --neon-bunny-js-punctuation: var(--neon-bunny-white);
 --neon-bunny-js-string: var(--neon-bunny-green-darker-darker);
 --neon-bunny-js-template-string-string: var(--neon-bunny-green-darker-darker);
 --neon-bunny-js: var(--neon-bunny-green-darker);

 /* PHP */
 --neon-bunny-php-boolean: var(--neon-bunny-blue);
 --neon-bunny-php-class-name-definition-class-name: var(--neon-bunny-magenta);
 --neon-bunny-php-class-name-return-type: var(--neon-bunny-gray-lighter);
 --neon-bunny-php-class-name: var(--neon-bunny-teal);
 --neon-bunny-php-double-quote-string: var(--neon-bunny-salmon);
 --neon-bunny-php-function: var(--neon-bunny-green-neon);
 --neon-bunny-php-keyword-type-hint: var(--neon-bunny-gray-lighter);
 --neon-bunny-php-keyword: var(--neon-bunny-blue);
 --neon-bunny-php-operator: var(--neon-bunny-purple);
 --neon-bunny-php-package: var(--neon-bunny-peach);
 --neon-bunny-php-property: var(--neon-bunny-purple-light);
 --neon-bunny-php-punctuation: var(--neon-bunny-white);
 --neon-bunny-php-single-quote-string: var(--neon-bunny-yellow);
 --neon-bunny-php-variable: var(--neon-bunny-purple-light);
}

code[class*="language-"],
pre[class*="language-"] {
 -moz-hyphens: none;
 -moz-tab-size: 4;
 -ms-hyphens: none;
 -o-tab-size: 4;
 -webkit-hyphens: none;

 color: var(--neon-bunny-white);
 font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
 font-size: 1em;
 hyphens: none;
 line-height: 1.5;
 tab-size: 4;
 text-align: left;
 white-space: pre;
 word-break: normal;
 word-spacing: normal;
 word-wrap: normal;
}

pre[class*="language-"]::-moz-selection,
pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection,
code[class*="language-"] ::-moz-selection {
 background: rgba(29, 59, 83, 0.99);
 text-shadow: none;
}

pre[class*="language-"]::selection,
pre[class*="language-"] ::selection,
code[class*="language-"]::selection,
code[class*="language-"] ::selection {
 background: #ffffff15;
 text-shadow: none;
}

@media print {

 code[class*="language-"],
 pre[class*="language-"] {
	 text-shadow: none;
 }
}

/* Code blocks */
pre[class*="language-"] {
 margin: 0.5em 0;
 overflow: auto;
 padding: 1em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
 background: #000000;
 color: white;
}

:not(pre) > code[class*="language-"] {
 border-radius: 0.3em;
 padding: 0.1em;
 white-space: normal;
}

/* -------------------------------------------------- Standard */
.token.atrule {
 color: var(--neon-bunny-atrule);
}

.token.attr-name {
 color: var(--neon-bunny-attr-name);
}

.token.attr-value {
 color: var(--neon-bunny-attr-value);
}

.token.bold {
 font-weight: bold;
}

.token.boolean {
 color: var(--neon-bunny-boolean);
}

.token.builtin {
 color: var(--neon-bunny-builtin);
}

.token.cdata {
 color: var(--neon-bunny-cdata);
 font-style: italic;
}

.token.char {
 color: var(--neon-bunny-char);
}

.token.class-name {
 color: var(--neon-bunny-class-name);
}

.token.constant {
 color: var(--neon-bunny-constant);
}

.token.comment {
 color: var(--neon-bunny-comment);
 font-style: italic;
}

.token.deleted {
 color: var(--neon-bunny-deleted);
}

.token.entity {
 color: var(--neon-bunny-entity);
}

.token.function {
 color: var(--neon-bunny-function);
}

.token.important {
 color: var(--neon-bunny-important);
 font-style: italic;
}

.token.inserted {
 color: var(--neon-bunny-inserted);
}

.token.italic {
 font-style: italic;
}

.token.keyword {
 color: var(--neon-bunny-keyword);
}

.namespace {
 color: var(--neon-bunny-namespace);
}

.token.number {
 color: var(--neon-bunny-number);
}

.token.operator {
 color: var(--neon-bunny-operator);
}

.token.prolog {
 color: var(--neon-bunny-prolog);
 font-style: italic;
}

.token.property {
 color: var(--neon-bunny-property);
}

.token.punctuation {
 color: var(--neon-bunny-punctuation);
}

.token.regex {
 color: var(--neon-bunny-regex);
}

.token.string {
 color: var(--neon-bunny-string);
}

.token.symbol {
 color: var(--neon-bunny-symbol);
}

.token.tag {
 color: var(--neon-bunny-tag);
}

.token.url {
 color: var(--neon-bunny-url);
 text-decoration: underline;
}

.token.variable {
 color: var(--neon-bunny-variable);
}

/* -------------------------------------------------- HTML */
.language-html .token.attr-name {
 color: var(--neon-bunny-html-attr-name);
}

.language-html .token.attr-value {
 color: var(--neon-bunny-html-attr-value);
}

.language-html .token.attr-value .token.punctuation {
 color: var(--neon-bunny-html-attr-value-punctuation);
}

/* -------------------------------------------------- CSS */
.language-css {
 color: var(--neon-bunny-css) !important;
}

.language-css .token.atrule {
 color: var(--neon-bunny-css-atrule);
}

.language-css .token.atrule .token.rule {
 color: var(--neon-bunny-css-atrule-rule);
}

.language-css .token.function {
 color: var(--neon-bunny-css-function);
}

.language-css .token.property {
 color: var(--neon-bunny-css-property);
}

.language-css .token.punctuation {
 color: var(--neon-bunny-css-punctuation);
}

.language-css .token.selector {
 color: var(--neon-bunny-css-selector);
}

.language-css .token.string,
.style .token.string {
 color: var(--neon-bunny-css-string);
 font-style: italic;
}

/* -------------------------------------------------- JavaScript */
.language-javascript,
.language-js {
 color: var(--neon-bunny-js) !important;
 font-style: italic;
}

.language-javascript span,
.language-js span {
 font-style: normal;
}

.language-javascript .token.keyword,
.language-js .token.keyword {
 color: var(--neon-bunny-js-keyword);
}

.language-javascript .token.literal-property.property,
.language-js .token.literal-property.property {
 color: var(--neon-bunny-js-literal-property);
 font-style: italic;
}

.language-javascript .token.operator,
.language-js .token.operator {
 color: var(--neon-bunny-js-operator);
 font-style: italic;
}

.language-javascript .token.punctuation,
.language-js .token.punctuation {
 color: var(--neon-bunny-js-punctuation);
}

.language-javascript .token.template-string .token.string,
.language-js .token.template-string .token.string {
 color: var(--neon-bunny-js-template-string-string);
}

/* -------------------------------------------------- PHP */
.language-php .token.boolean {
 color: var(--neon-bunny-boolean);
}

.language-php .token.class-name {
 color: var(--neon-bunny-php-class-name);
}

.language-php .token.class-name-definition.class-name {
 color: var(--neon-bunny-php-class-name-definition-class-name);
}

.language-php .token.class-name.return-type {
 color: var(--neon-bunny-php-class-name-return-type);
 font-style: italic;
}

.language-php .token.function {
 color: var(--neon-bunny-php-function);
}

.language-php .token.keyword {
 color: var(--neon-bunny-php-keyword);
}

.language-php .token.keyword.type-hint {
 color: var(--neon-bunny-php-keyword-type-hint);
 font-style: italic;
}

.language-php .token.operator {
 color: var(--neon-bunny-php-operator);
}

.language-php .token.package {
 color: var(--neon-bunny-php-package);
}

.language-php .token.property {
 color: var(--neon-bunny-php-property);
}

.language-php .token.punctuation {
 color: var(--neon-bunny-php-punctuation);
}

.language-php .token.string.double-quoted-string {
 color: var(--neon-bunny-php-double-quote-string);
}

.language-php .token.string.single-quoted-string {
 color: var(--neon-bunny-php-single-quote-string);
}

.language-php .token.variable {
 color: var(--neon-bunny-php-variable);
}
`;

// Neon Bunny Carrot //
const neonBunnyCarrotTheme = `/**
* MIT License
* Copyright (c) 2023 WebDevNerdStuff
* WebDevNerdStuff Neon Bunny Carrot Theme
* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
*/

:root {
 --neon-bunny-blue-light: #2492ff;
 --neon-bunny-blue: #0b93ff;
 --neon-bunny-gray: #7f817e;
 --neon-bunny-green-darker-darker: #008b05;
 --neon-bunny-green-darker: #2bb71d;
 --neon-bunny-green-light: #7cd47d;
 --neon-bunny-green: #00d205;
 --neon-bunny-lime: #c3e88d;
 --neon-bunny-magenta: #dd00ff;
 --neon-bunny-orange-darker: #e58100;
 --neon-bunny-orange-light: #ffc266;
 --neon-bunny-orange: #ff9900;
 --neon-bunny-peach-light: #ffe4a6;
 --neon-bunny-peach: #ffcb6b;
 --neon-bunny-pink: #ff1190;
 --neon-bunny-purple-light-dim: #c792ea;
 --neon-bunny-purple-light: #da96df;
 --neon-bunny-purple: #ea03ff;
 --neon-bunny-red: #ff5370;
 --neon-bunny-teal: #00EEFF;
 --neon-bunny-white: #fff;
 --neon-bunny-yellow-light: #ffffa2;
 --neon-bunny-yellow: #ffff00;

 /* Standard */
 --neon-bunny-atrule: var(--neon-bunny-peach);
 --neon-bunny-attr-name: var(--neon-bunny-purple-light-dim);
 --neon-bunny-attr-value: var(--neon-bunny-peach);
 --neon-bunny-boolean: var(--neon-bunny-purple-light);
 --neon-bunny-builtin: var(--neon-bunny-purple);
 --neon-bunny-cdata: var(--neon-bunny-gray);
 --neon-bunny-char: var(--neon-bunny-pink);
 --neon-bunny-class-name: var(--neon-bunny-peach);
 --neon-bunny-comment: var(--neon-bunny-gray);
 --neon-bunny-constant: var(--neon-bunny-green-darker);
 --neon-bunny-deleted: var(--neon-bunny-red);
 --neon-bunny-entity: var(--neon-bunny-peach);
 --neon-bunny-function: var(--neon-bunny-orange-light);
 --neon-bunny-important: var(--neon-bunny-pink);
 --neon-bunny-inserted: var(--neon-bunny-lime);
 --neon-bunny-keyword: var(--neon-bunny-purple-light);
 --neon-bunny-namespace: var(--neon-bunny-peach);
 --neon-bunny-number: var(--neon-bunny-white);
 --neon-bunny-operator: var(--neon-bunny-orange);
 --neon-bunny-prolog: var(--neon-bunny-gray);
 --neon-bunny-property: var(--neon-bunny-orange-light);
 --neon-bunny-punctuation: var(--neon-bunny-orange);
 --neon-bunny-regex: var(--neon-bunny-peach-light);
 --neon-bunny-string: var(--neon-bunny-green-light);
 --neon-bunny-symbol: var(--neon-bunny-orange-light);
 --neon-bunny-tag: var(--neon-bunny-orange);
 --neon-bunny-url: var(--neon-bunny-orange-darker);
 --neon-bunny-variable: var(--neon-bunny-orange);

 /* HTML */
 --neon-bunny-html-attr-name: var(--neon-bunny-orange-light);
 --neon-bunny-html-attr-value-punctuation: var(--neon-bunny-green);
 --neon-bunny-html-attr-value: var(--neon-bunny-green);

 /* CSS */
 --neon-bunny-css-atrule-rule: var(--neon-bunny-blue);
 --neon-bunny-css-atrule: var(--neon-bunny-white);
 --neon-bunny-css-function: var(--neon-bunny-orange-darker);
 --neon-bunny-css-property: var(--neon-bunny-pink);
 --neon-bunny-css-punctuation: var(--neon-bunny-white);
 --neon-bunny-css-selector: var(--neon-bunny-yellow);
 --neon-bunny-css-string: var(--neon-bunny-green-light);
 --neon-bunny-css: var(--neon-bunny-teal);

 /* JS */
 --neon-bunny-js-keyword: var(--neon-bunny-magenta);
 --neon-bunny-js-literal-property: var(--neon-bunny-orange);
 --neon-bunny-js-operator: var(--neon-bunny-blue-light);
 --neon-bunny-js-punctuation: var(--neon-bunny-white);
 --neon-bunny-js-string: var(--neon-bunny-green-darker-darker);
 --neon-bunny-js-template-string-string: var(--neon-bunny-green-darker-darker);
 --neon-bunny-js: var(--neon-bunny-orange);

 /* PHP */
 --neon-bunny-php-boolean: var(--neon-bunny-purple-light);
 --neon-bunny-php-class-name-return-type: var(--neon-bunny-yellow);
 --neon-bunny-php-class-name: var(--neon-bunny-yellow);
 --neon-bunny-php-double-quote-string: var(--neon-bunny-green);
 --neon-bunny-php-function: var(--neon-bunny-orange-light);
 --neon-bunny-php-keyword: var(--neon-bunny-magenta);
 --neon-bunny-php-keyword-type-hint: var(--neon-bunny-magenta);
 --neon-bunny-php-class-name-definition-class-name: var(--neon-bunny-yellow);
 --neon-bunny-php-operator: var(--neon-bunny-yellow-light);
 --neon-bunny-php-package: var(--neon-bunny-yellow);
 --neon-bunny-php-property: var(--neon-bunny-orange);
 --neon-bunny-php-punctuation: var(--neon-bunny-white);
 --neon-bunny-php-single-quote-string: var(--neon-bunny-green-light);
 --neon-bunny-php-variable: var(--neon-bunny-orange);
}

code[class*="language-"],
pre[class*="language-"] {
 -moz-hyphens: none;
 -moz-tab-size: 4;
 -ms-hyphens: none;
 -o-tab-size: 4;
 -webkit-hyphens: none;

 color: var(--neon-bunny-white);
 font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
 font-size: 1em;
 hyphens: none;
 line-height: 1.5;
 tab-size: 4;
 text-align: left;
 white-space: pre;
 word-break: normal;
 word-spacing: normal;
 word-wrap: normal;
}

pre[class*="language-"]::-moz-selection,
pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection,
code[class*="language-"] ::-moz-selection {
 background: rgba(29, 59, 83, 0.99);
 text-shadow: none;
}

pre[class*="language-"]::selection,
pre[class*="language-"] ::selection,
code[class*="language-"]::selection,
code[class*="language-"] ::selection {
 background: #ffffff15;
 text-shadow: none;
}

@media print {

 code[class*="language-"],
 pre[class*="language-"] {
	 text-shadow: none;
 }
}

/* Code blocks */
pre[class*="language-"] {
 margin: 0.5em 0;
 overflow: auto;
 padding: 1em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
 background: #000000;
 color: white;
}

:not(pre) > code[class*="language-"] {
 border-radius: 0.3em;
 padding: 0.1em;
 white-space: normal;
}

/* -------------------------------------------------- Standard */
.token.atrule {
 color: var(--neon-bunny-atrule);
}

.token.attr-name {
 color: var(--neon-bunny-attr-name);
}

.token.attr-value {
 color: var(--neon-bunny-attr-value);
}

.token.bold {
 font-weight: bold;
}

.token.boolean {
 color: var(--neon-bunny-boolean);
}

.token.builtin {
 color: var(--neon-bunny-builtin);
}

.token.cdata {
 color: var(--neon-bunny-cdata);
 font-style: italic;
}

.token.char {
 color: var(--neon-bunny-char);
}

.token.class-name {
 color: var(--neon-bunny-class-name);
}

.token.constant {
 color: var(--neon-bunny-constant);
}

.token.comment {
 color: var(--neon-bunny-comment);
 font-style: italic;
}

.token.deleted {
 color: var(--neon-bunny-deleted);
}

.token.entity {
 color: var(--neon-bunny-entity);
}

.token.function {
 color: var(--neon-bunny-function);
}

.token.important {
 color: var(--neon-bunny-important);
 font-style: italic;
}

.token.inserted {
 color: var(--neon-bunny-inserted);
}

.token.italic {
 font-style: italic;
}

.token.keyword {
 color: var(--neon-bunny-keyword);
}

.namespace {
 color: var(--neon-bunny-namespace);
}

.token.number {
 color: var(--neon-bunny-number);
}

.token.operator {
 color: var(--neon-bunny-operator);
}

.token.prolog {
 color: var(--neon-bunny-prolog);
 font-style: italic;
}

.token.property {
 color: var(--neon-bunny-property);
}

.token.punctuation {
 color: var(--neon-bunny-punctuation);
}

.token.regex {
 color: var(--neon-bunny-regex);
}

.token.string {
 color: var(--neon-bunny-string);
}

.token.symbol {
 color: var(--neon-bunny-symbol);
}

.token.tag {
 color: var(--neon-bunny-tag);
}

.token.url {
 color: var(--neon-bunny-url);
 text-decoration: underline;
}

.token.variable {
 color: var(--neon-bunny-variable);
}

/* -------------------------------------------------- HTML */
.language-html .token.attr-name {
 color: var(--neon-bunny-html-attr-name);
}

.language-html .token.attr-value {
 color: var(--neon-bunny-html-attr-value);
}

.language-html .token.attr-value .token.punctuation {
 color: var(--neon-bunny-html-attr-value-punctuation);
}

/* -------------------------------------------------- CSS */
.language-css {
 color: var(--neon-bunny-css) !important;
}

.language-css .token.atrule {
 color: var(--neon-bunny-css-atrule);
}

.language-css .token.atrule .token.rule {
 color: var(--neon-bunny-css-atrule-rule);
}

.language-css .token.function {
 color: var(--neon-bunny-css-function);
}

.language-css .token.property {
 color: var(--neon-bunny-css-property);
}

.language-css .token.punctuation {
 color: var(--neon-bunny-css-punctuation);
}

.language-css .token.selector {
 color: var(--neon-bunny-css-selector);
}

.language-css .token.string,
.style .token.string {
 color: var(--neon-bunny-css-string);
 font-style: italic;
}

/* -------------------------------------------------- JavaScript */
.language-javascript,
.language-js {
 color: var(--neon-bunny-js) !important;
 font-style: italic;
}

.language-javascript span,
.language-js span {
 font-style: normal;
}

.language-javascript .token.keyword,
.language-js .token.keyword {
 color: var(--neon-bunny-js-keyword);
}

.language-javascript .token.literal-property.property,
.language-js .token.literal-property.property {
 color: var(--neon-bunny-js-literal-property);
 font-style: italic;
}

.language-javascript .token.operator,
.language-js .token.operator {
 color: var(--neon-bunny-js-operator);
 font-style: italic;
}

.language-javascript .token.punctuation,
.language-js .token.punctuation {
 color: var(--neon-bunny-js-punctuation);
}

.language-javascript .token.template-string .token.string,
.language-js .token.template-string .token.string {
 color: var(--neon-bunny-js-template-string-string);
}

/* -------------------------------------------------- PHP */
.language-php .token.boolean {
 color: var(--neon-bunny-boolean);
}

.language-php .token.class-name {
 color: var(--neon-bunny-php-class-name);
}

.language-php .token.class-name-definition.class-name {
 color: var(--neon-bunny-php-class-name-definition-class-name);
}

.language-php .token.class-name.return-type {
 color: var(--neon-bunny-php-class-name-return-type);
}

.language-php .token.function {
 color: var(--neon-bunny-php-function);
 text-decoration: underline;
}

.language-php .token.keyword {
 color: var(--neon-bunny-php-keyword);
}

.language-php .token.keyword.type-hint {
 color: var(--neon-bunny-php-keyword-type-hint);
}

.language-php .token.operator {
 color: var(--neon-bunny-php-operator);
}

.language-php .token.package {
 color: var(--neon-bunny-php-package);
}

.language-php .token.property {
 color: var(--neon-bunny-php-property);
}

.language-php .token.punctuation {
 color: var(--neon-bunny-php-punctuation);
}

.language-php .token.string.double-quoted-string {
 color: var(--neon-bunny-php-double-quote-string);
}

.language-php .token.string.single-quoted-string {
 color: var(--neon-bunny-php-single-quote-string);
}

.language-php .token.variable {
 color: var(--neon-bunny-php-variable);
}
`;

// -------------------------------------------------- Neon Bunny Highlight.js  */
// Neon Bunny //
const neonBunnyHighlightTheme = `/**
* MIT License
* Copyright (c) 2023 WebDevNerdStuff
* WebDevNerdStuff Neon Bunny
* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
*/
:root {
 --neon-bunny-blue-darker: #276AFF;
 --neon-bunny-blue-light-faded: #a5a8ff;
 --neon-bunny-blue-light: #2492ff;
 --neon-bunny-blue: #0b93ff;
 --neon-bunny-gray-lighter: #aaa;
 --neon-bunny-gray: #7f817e;
 --neon-bunny-green-darker-darker: #008b05;
 --neon-bunny-green-darker: #2bb71d;
 --neon-bunny-green-light: #2bb71d;
 --neon-bunny-green-neon: #0aff04;
 --neon-bunny-green: #00d205;
 --neon-bunny-lime-lighter: #c3e88d;
 --neon-bunny-lime: #b2ff02;
 --neon-bunny-magenta-neon: #FF25D9;
 --neon-bunny-magenta: #df00df;
 --neon-bunny-neon-green: #00ff00;
 --neon-bunny-orange-lighter: #ff8d04;
 --neon-bunny-orange: #e58100;
 --neon-bunny-peach-darker: #ffb46a;
 --neon-bunny-peach-light: #ffe4a6;
 --neon-bunny-peach: #ffcb6b;
 --neon-bunny-pink: #ff1190;
 --neon-bunny-purple-light-dim: #c792ea;
 --neon-bunny-purple-light: #d285cc;
 --neon-bunny-purple: #ea03ff;
 --neon-bunny-red: #ff3229;
 --neon-bunny-salmon: #ff6f5b;
 --neon-bunny-teal: #80fcff;
 --neon-bunny-white: #fff;
 --neon-bunny-yellow-light-faded: #ffe3b8;
 --neon-bunny-yellow: #fef611;
 /* -------------------------------------------------- Standard */
 /* ------------------------- General purpose */
 --neon-bunny-builtin: var(--neon-bunny-purple);
 --neon-bunny-char: var(--neon-bunny-pink);
 --neon-bunny-class: var(--neon-bunny-magenta);
 --neon-bunny-comment: var(--neon-bunny-gray);
 --neon-bunny-doctag: var(--neon-bunny-blue-light);
 --neon-bunny-keyword: var(--neon-bunny-blue);
 --neon-bunny-literal: var(--neon-bunny-blue-light);
 --neon-bunny-number: var(--neon-bunny-white);
 --neon-bunny-operator: var(--neon-bunny-blue-light);
 --neon-bunny-params: var(--neon-bunny-green-darker);
 --neon-bunny-property: var(--neon-bunny-blue-light-faded);
 --neon-bunny-punctuation: var(--neon-bunny-blue);
 --neon-bunny-regex: var(--neon-bunny-peach-light);
 --neon-bunny-string: var(--neon-bunny-peach-darker);
 --neon-bunny-subst: var(--neon-bunny-green-darker);
 --neon-bunny-symbol: var(--neon-bunny-pink);
 --neon-bunny-title-class-inherited: var(--neon-bunny-green-darker);
 --neon-bunny-title-class: var(--neon-bunny-green-neon);
 --neon-bunny-title-function-invoke: var(--neon-bunny-green-darker);
 --neon-bunny-title-function: var(--neon-bunny-green-neon);
 --neon-bunny-title: var(--neon-bunny-green-darker);
 --neon-bunny-type: var(--neon-bunny-pink);
 --neon-bunny-variable-constant: var(--neon-bunny-green-darker);
 --neon-bunny-variable-language: var(--neon-bunny-blue-light);
 --neon-bunny-variable: var(--neon-bunny-green-darker);
 /* ------------------------- Meta */
 --neon-bunny-meta-keyword: var(--neon-bunny-green);
 --neon-bunny-meta-prompt: var(--neon-bunny-blue-light);
 --neon-bunny-meta-string: var(--neon-bunny-blue-light);
 --neon-bunny-meta: var(--neon-bunny-blue-light);
 /* ------------------------- Tags, attributes, configs */
 --neon-bunny-attr: var(--neon-bunny-green);
 --neon-bunny-attribute: var(--neon-bunny-green);
 --neon-bunny-name: var(--neon-bunny-blue-light);
 --neon-bunny-section: var(--neon-bunny-green);
 --neon-bunny-tag-attr: var(--neon-bunny-blue-light);
 --neon-bunny-tag: var(--neon-bunny-blue-light);
 /* ------------------------- Text Markup */
 --neon-bunny-bullet: var(--neon-bunny-white);
 --neon-bunny-code: var(--neon-bunny-white);
 --neon-bunny-emphasis: var(--neon-bunny-white);
 --neon-bunny-formula: var(--neon-bunny-white);
 --neon-bunny-link: var(--neon-bunny-orange);
 --neon-bunny-quote: var(--neon-bunny-white);
 --neon-bunny-strong: var(--neon-bunny-white);
 /* ------------------------- CSS */
 --neon-bunny-css-selector-id: var(--neon-bunny-green);
 --neon-bunny-selector-attr: var(--neon-bunny-purple-light-dim);
 --neon-bunny-selector-class: var(--neon-bunny-lime);
 --neon-bunny-selector-id: var(--neon-bunny-lime);
 --neon-bunny-selector-pseudo: var(--neon-bunny-purple-light-dim);
 --neon-bunny-selector-tag: var(--neon-bunny-white);
 --neon-bunny-selector: var(--neon-bunny-lime);
 /* ------------------------- Diff */
 --neon-bunny-addition: var(--neon-bunny-green-neon);
 --neon-bunny-deletion: var(--neon-bunny-red);
 /* -------------------------------------------------- CSS */
 --neon-bunny-css: var(--neon-bunny-purple-light-dim);
 /* ------------------------- General purpose */
 --neon-bunny-css-builtin: var(--neon-bunny-orange);
 /* ------------------------- Meta */
 --neon-bunny-css-meta: var(--neon-bunny-red);
 /* ------------------------- Tags, attributes, configs */
 --neon-bunny-css-attribute: var(--neon-bunny-pink);
 /* -------------------------------------------------- JavaScript */
 --neon-bunny-js: var(--neon-bunny-green-darker);
 /* ------------------------- General purpose */
 --neon-bunny-js-params-variable-language: var(--neon-bunny-green-darker);
 --neon-bunny-js-title-class: var(--neon-bunny-orange-lighter);
 --neon-bunny-js-variable-language: var(--neon-bunny-pink);
 /* -------------------------------------------------- PHP */
 --neon-bunny-php: var(--neon-bunny-blue-light);
 /* ------------------------- General purpose */
 --neon-bunny-php-class-keyword: var(--neon-bunny-blue-darker);
 --neon-bunny-php-class-title: var(--neon-bunny-magenta);
 --neon-bunny-php-function-title: var(--neon-bunny-green-neon);
 --neon-bunny-php-keyword: var(--neon-bunny-blue-darker);
 --neon-bunny-php-params-variable: var(--neon-bunny-green-darker);
 --neon-bunny-php-params: var(--neon-bunny-gray-lighter);
 --neon-bunny-php-string: var(--neon-bunny-yellow);
 --neon-bunny-php-title-class: var(--neon-bunny-gray-lighter);
 --neon-bunny-php-title-function-invoke: var(--neon-bunny-green-neon);
 --neon-bunny-php-title: var(--neon-bunny-peach);
 --neon-bunny-php-variable: var(--neon-bunny-purple-light);
 /* ------------------------- Meta */
 --neon-bunny-php-meta: var(--neon-bunny-red);
}

pre code.hljs {
 display: block;
 overflow-x: auto;
}

code[class*=language-],
pre[class*=language-] {
 -moz-hyphens: none;
 -moz-tab-size: 4;
 -ms-hyphens: none;
 -o-tab-size: 4;
 -webkit-hyphens: none;
 color: var(--neon-bunny-white);
 font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
 hyphens: none;
 line-height: 1.5;
 tab-size: 4;
 text-align: left;
 white-space: pre;
 word-break: normal;
 word-spacing: normal;
 word-wrap: normal;
}

code[class*=language-]::-moz-selection,
code[class*=language-] ::-moz-selection,
pre[class*=language-]::-moz-selection,
pre[class*=language-] ::-moz-selection {
 background: rgba(29, 59, 83, 0.99);
 text-shadow: none;
}

code[class*=language-]::selection,
code[class*=language-] ::selection,
pre[class*=language-]::selection,
pre[class*=language-] ::selection {
 background: rgba(255, 255, 255, 0.0823529412);
 text-shadow: none;
}

@media print {

 code[class*=language-],
 pre[class*=language-] {
	 text-shadow: none;
 }
}

/* Code blocks */
pre[class*=language-] {
 background: #000000;
 color: white;
 margin: 0.5em 0;
 overflow: auto;
 padding: 1em;
}

:not(pre) > code[class*=language-] {
 background: #000000;
 color: white;
 border-radius: 0.3em;
 padding: 0.1em;
 white-space: normal;
}

.hljs-built_in {
 color: var(--neon-bunny-builtin);
}

.hljs-char {
 color: var(--neon-bunny-char);
}

.hljs-comment {
 color: var(--neon-bunny-comment);
 font-style: italic;
}

.hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs-keyword {
 color: var(--neon-bunny-keyword);
}

.hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs-number {
 color: var(--neon-bunny-number);
}

.hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs-params {
 color: var(--neon-bunny-params);
 font-style: italic;
}

.hljs-property {
 color: var(--neon-bunny-property);
}

.hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs-string {
 color: var(--neon-bunny-string);
}

.hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs-title {
 color: var(--neon-bunny-title);
}

.hljs-title.class_ {
 color: var(--neon-bunny-title-class);
}

.hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs-title.function_.invoke__ {
 color: var(--neon-bunny-title-function-invoke);
}

.hljs-type {
 color: var(--neon-bunny-type);
}

.hljs-variable {
 color: var(--neon-bunny-variable);
}

.hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs-variable.language_ {
 color: var(--neon-bunny-variable-language);
}

.hljs-meta {
 color: var(--neon-bunny-meta);
}

.hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs-attribute {
 color: var(--neon-bunny-attribute);
}

.hljs-name {
 color: var(--neon-bunny-name);
}

.hljs-section {
 color: var(--neon-bunny-section);
}

.hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs-tag .hljs-attr {
 color: var(--neon-bunny-tag-attr);
}

.hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs-code {
 color: var(--neon-bunny-code);
}

.hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs-link {
 color: var(--neon-bunny-link);
}

.hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs-selector-id {
 color: var(--neon-bunny-selector-id);
}

.hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs-deletion {
 color: var(--neon-bunny-deletion);
}

.hljs.language-css {
 color: var(--neon-bunny-css);
}

.hljs.language-css .hljs-built_in {
 color: var(--neon-bunny-css-builtin);
}

.hljs.language-css .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-css .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-css .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-css .hljs-keyword {
 color: var(--neon-bunny-keyword);
}

.hljs.language-css .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-css .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-css .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-css .hljs-params {
 color: var(--neon-bunny-params);
 font-style: italic;
}

.hljs.language-css .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-css .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-css .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-css .hljs-string {
 color: var(--neon-bunny-string);
}

.hljs.language-css .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-css .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-css .hljs-title {
 color: var(--neon-bunny-title);
}

.hljs.language-css .hljs-title.class_ {
 color: var(--neon-bunny-title-class);
}

.hljs.language-css .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-css .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-css .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-title-function-invoke);
}

.hljs.language-css .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-css .hljs-variable {
 color: var(--neon-bunny-variable);
}

.hljs.language-css .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-css .hljs-variable.language_ {
 color: var(--neon-bunny-variable-language);
}

.hljs.language-css .hljs-meta {
 color: var(--neon-bunny-css-meta);
}

.hljs.language-css .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-css .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-css .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-css .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-css .hljs-attribute {
 color: var(--neon-bunny-css-attribute);
}

.hljs.language-css .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-css .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-css .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-css .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-css .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-css .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-css .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-css .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-css .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-css .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-css .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-css .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-css .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-css .hljs-selector-id {
 color: var(--neon-bunny-css-selector-id);
}

.hljs.language-css .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-css .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-css .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-css .hljs-deletion {
 color: var(--neon-bunny-deletion);
}

.hljs.language-javascript, .hljs.language-js {
 color: var(--neon-bunny-js);
}

.hljs.language-javascript .hljs-built_in, .hljs.language-js .hljs-built_in {
 color: var(--neon-bunny-builtin);
}

.hljs.language-javascript .hljs-char, .hljs.language-js .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-javascript .hljs-comment, .hljs.language-js .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-javascript .hljs-doctag, .hljs.language-js .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-javascript .hljs-keyword, .hljs.language-js .hljs-keyword {
 color: var(--neon-bunny-keyword);
}

.hljs.language-javascript .hljs-literal, .hljs.language-js .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-javascript .hljs-number, .hljs.language-js .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-javascript .hljs-operator, .hljs.language-js .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-javascript .hljs-params, .hljs.language-js .hljs-params {
 color: var(--neon-bunny-params);
 font-style: italic;
}

.hljs.language-javascript .hljs-params .hljs-variable.language_, .hljs.language-js .hljs-params .hljs-variable.language_ {
 color: var(--neon-bunny-js-params-variable-language);
}

.hljs.language-javascript .hljs-property, .hljs.language-js .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-javascript .hljs-punctuation, .hljs.language-js .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-javascript .hljs-regexp, .hljs.language-js .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-javascript .hljs-string, .hljs.language-js .hljs-string {
 color: var(--neon-bunny-string);
}

.hljs.language-javascript .hljs-subst, .hljs.language-js .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-javascript .hljs-symbol, .hljs.language-js .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-javascript .hljs-title, .hljs.language-js .hljs-title {
 color: var(--neon-bunny-title);
}

.hljs.language-javascript .hljs-title.class_, .hljs.language-js .hljs-title.class_ {
 color: var(--neon-bunny-js-title-class);
}

.hljs.language-javascript .hljs-title.class_.inherited__, .hljs.language-js .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-javascript .hljs-title.function_, .hljs.language-js .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-javascript .hljs-title.function_.invoke__, .hljs.language-js .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-title-function-invoke);
}

.hljs.language-javascript .hljs-type, .hljs.language-js .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-javascript .hljs-variable, .hljs.language-js .hljs-variable {
 color: var(--neon-bunny-variable);
}

.hljs.language-javascript .hljs-variable.constant_, .hljs.language-js .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-javascript .hljs-variable.language_, .hljs.language-js .hljs-variable.language_ {
 color: var(--neon-bunny-js-variable-language);
}

.hljs.language-javascript .hljs-meta, .hljs.language-js .hljs-meta {
 color: var(--neon-bunny-meta);
}

.hljs.language-javascript .hljs-meta.prompt_, .hljs.language-js .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-javascript .hljs-meta.keyword_, .hljs.language-js .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-javascript .hljs-meta.string_, .hljs.language-js .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-javascript .hljs-attr, .hljs.language-js .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-javascript .hljs-attribute, .hljs.language-js .hljs-attribute {
 color: var(--neon-bunny-attribute);
}

.hljs.language-javascript .hljs-name, .hljs.language-js .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-javascript .hljs-section, .hljs.language-js .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-javascript .hljs-tag, .hljs.language-js .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-javascript .hljs-bullet, .hljs.language-js .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-javascript .hljs-code, .hljs.language-js .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-javascript .hljs-emphasis, .hljs.language-js .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-javascript .hljs-formula, .hljs.language-js .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-javascript .hljs-link, .hljs.language-js .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-javascript .hljs-quote, .hljs.language-js .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-javascript .hljs-strong, .hljs.language-js .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-javascript .hljs-selector, .hljs.language-js .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-javascript .hljs-selector-attr, .hljs.language-js .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-javascript .hljs-selector-class, .hljs.language-js .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-javascript .hljs-selector-id, .hljs.language-js .hljs-selector-id {
 color: var(--neon-bunny-selector-id);
}

.hljs.language-javascript .hljs-selector-pseudo, .hljs.language-js .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-javascript .hljs-selector-tag, .hljs.language-js .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-javascript .hljs-addition, .hljs.language-js .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-javascript .hljs-deletion, .hljs.language-js .hljs-deletion {
 color: var(--neon-bunny-deletion);
}

.hljs.language-php {
 color: var(--neon-bunny-php);
}

.hljs.language-php .hljs-built_in {
 color: var(--neon-bunny-builtin);
}

.hljs.language-php .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-php .hljs-class .hljs-title {
 color: var(--neon-bunny-php-class-title) !important;
}

.hljs.language-php .hljs-class .hljs-keyword {
 color: var(--neon-bunny-php-class-keyword);
}

.hljs.language-php .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-php .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-php .hljs-function .hljs-title {
 color: var(--neon-bunny-php-function-title);
}

.hljs.language-php .hljs-keyword {
 color: var(--neon-bunny-php-keyword);
}

.hljs.language-php .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-php .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-php .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-php .hljs-params {
 color: var(--neon-bunny-php-params);
 font-style: italic;
}

.hljs.language-php .hljs-params .hljs-variable {
 color: var(--neon-bunny-php-params-variable);
}

.hljs.language-php .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-php .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-php .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-php .hljs-string {
 color: var(--neon-bunny-php-string);
}

.hljs.language-php .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-php .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-php .hljs-title {
 color: var(--neon-bunny-php-title);
}

.hljs.language-php .hljs-title.class_ {
 color: var(--neon-bunny-php-title-class);
 font-style: italic;
}

.hljs.language-php .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-php .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-php .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-php-title-function-invoke);
}

.hljs.language-php .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-php .hljs-variable {
 color: var(--neon-bunny-php-variable);
}

.hljs.language-php .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-php .hljs-variable.language_ {
 color: var(--neon-bunny-variable-language);
}

.hljs.language-php .hljs-meta {
 color: var(--neon-bunny-php-meta);
}

.hljs.language-php .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-php .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-php .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-php .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-php .hljs-attribute {
 color: var(--neon-bunny-attribute);
}

.hljs.language-php .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-php .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-php .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-php .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-php .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-php .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-php .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-php .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-php .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-php .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-php .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-php .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-php .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-php .hljs-selector-id {
 color: var(--neon-bunny-selector-id);
}

.hljs.language-php .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-php .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-php .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-php .hljs-deletion {
 color: var(--neon-bunny-deletion);
}
`;

// Neon Bunny Carrot //
const neonBunnyCarrotHighlightTheme = `/**
* MIT License
* Copyright (c) 2023 WebDevNerdStuff
* WebDevNerdStuff Neon Bunny Carrot Theme
* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
*/
:root {
 --neon-bunny-blue-light: #2492ff;
 --neon-bunny-blue: #0b93ff;
 --neon-bunny-gray: #7f817e;
 --neon-bunny-green-darker-darker: #008b05;
 --neon-bunny-green-darker: #2bb71d;
 --neon-bunny-green-light: #7cd47d;
 --neon-bunny-green: #00d205;
 --neon-bunny-lime: #c3e88d;
 --neon-bunny-magenta: #dd00ff;
 --neon-bunny-orange-darker: #e58100;
 --neon-bunny-orange-light: #ffc266;
 --neon-bunny-orange-lighter: #ff8d04;
 --neon-bunny-orange: #ff9900;
 --neon-bunny-peach-light: #ffe4a6;
 --neon-bunny-peach: #ffcb6b;
 --neon-bunny-pink: #ff1190;
 --neon-bunny-purple-light-dim: #c792ea;
 --neon-bunny-purple-light: #da96df;
 --neon-bunny-purple: #ea03ff;
 --neon-bunny-red: #ff5370;
 --neon-bunny-teal: #00EEFF;
 --neon-bunny-white: #fff;
 --neon-bunny-yellow-light: #ffffa2;
 --neon-bunny-yellow-light-faded: #ffe3b8;
 --neon-bunny-yellow: #ffff00;
 /* -------------------------------------------------- Standard */
 /* ------------------------- General purpose */
 --neon-bunny-builtin: var(--neon-bunny-purple);
 --neon-bunny-char: var(--neon-bunny-pink);
 --neon-bunny-class: var(--neon-bunny-magenta);
 --neon-bunny-comment: var(--neon-bunny-gray);
 --neon-bunny-doctag: var(--neon-bunny-blue-light);
 --neon-bunny-keyword: var(--neon-bunny-magenta);
 --neon-bunny-literal: var(--neon-bunny-purple-light);
 --neon-bunny-number: var(--neon-bunny-white);
 --neon-bunny-operator: var(--neon-bunny-blue-light);
 --neon-bunny-params: var(--neon-bunny-orange);
 --neon-bunny-property: var(--neon-bunny-yellow-light-faded);
 --neon-bunny-punctuation: var(--neon-bunny-blue);
 --neon-bunny-regex: var(--neon-bunny-peach-light);
 --neon-bunny-string: var(--neon-bunny-green);
 --neon-bunny-subst: var(--neon-bunny-green-darker);
 --neon-bunny-symbol: var(--neon-bunny-pink);
 --neon-bunny-title-class-inherited: var(--neon-bunny-orange);
 --neon-bunny-title-class: var(--neon-bunny-green-neon);
 --neon-bunny-title-function-invoke: var(--neon-bunny-orange);
 --neon-bunny-title-function: var(--neon-bunny-orange-light);
 --neon-bunny-title: var(--neon-bunny-orange);
 --neon-bunny-type: var(--neon-bunny-pink);
 --neon-bunny-variable-constant: var(--neon-bunny-green-darker);
 --neon-bunny-variable-language: var(--neon-bunny-orange);
 --neon-bunny-variable: var(--neon-bunny-green-darker);
 /* ------------------------- Meta */
 --neon-bunny-meta-keyword: var(--neon-bunny-purple-light);
 --neon-bunny-meta-prompt: var(--neon-bunny-orange);
 --neon-bunny-meta-string: var(--neon-bunny-orange);
 --neon-bunny-meta: var(--neon-bunny-orange);
 /* ------------------------- Tags, attributes, configs */
 --neon-bunny-attr: var(--neon-bunny-orange);
 --neon-bunny-attribute: var(---neon-bunny-orange);
 --neon-bunny-name: var(--neon-bunny-orange);
 --neon-bunny-section: var(--neon-bunny-orange);
 --neon-bunny-tag-attr: var(--neon-bunny-orange-light);
 --neon-bunny-tag: var(--neon-bunny-orange);
 /* ------------------------- Text Markup */
 --neon-bunny-bullet: var(--neon-bunny-white);
 --neon-bunny-code: var(--neon-bunny-white);
 --neon-bunny-emphasis: var(--neon-bunny-white);
 --neon-bunny-formula: var(--neon-bunny-white);
 --neon-bunny-link: var(--neon-bunny-orange);
 --neon-bunny-quote: var(--neon-bunny-white);
 --neon-bunny-strong: var(--neon-bunny-white);
 /* ------------------------- CSS */
 --neon-bunny-css-selector-id: var(--neon-bunny-green);
 --neon-bunny-selector-attr: var(--neon-bunny-orange);
 --neon-bunny-selector-class: var(--neon-bunny-yellow);
 --neon-bunny-selector-id: var(--neon-bunny-selector);
 --neon-bunny-selector-pseudo: var(--neon-bunny-orange);
 --neon-bunny-selector-tag: var(--neon-bunny-white);
 --neon-bunny-selector: var(--neon-bunny-lime);
 /* ------------------------- Diff */
 --neon-bunny-addition: var(--neon-bunny-green-neon);
 --neon-bunny-deletion: var(--neon-bunny-red);
 /* -------------------------------------------------- CSS */
 --neon-bunny-css: var(--neon-bunny-teal);
 /* ------------------------- General purpose */
 --neon-bunny-css-builtin: var(--neon-bunny-orange);
 /* ------------------------- Meta */
 --neon-bunny-css-meta: var(--neon-bunny-red);
 /* ------------------------- Tags, attributes, configs */
 --neon-bunny-css-attribute: var(--neon-bunny-pink);
 /* -------------------------------------------------- JavaScript */
 --neon-bunny-js: var(--neon-bunny-orange);
 /* ------------------------- General purpose */
 --neon-bunny-js-params-variable-language: var(--neon-bunny-orange);
 --neon-bunny-js-title-class: var(--neon-bunny-orange-lighter);
 --neon-bunny-js-variable-language: var(--neon-bunny-yellow);
 /* -------------------------------------------------- PHP */
 --neon-bunny-php: var(--neon-bunny-white);
 /* ------------------------- General purpose */
 --neon-bunny-php-class-keyword: var(--neon-bunny-pink);
 --neon-bunny-php-class-title: var(--neon-bunny-yellow);
 --neon-bunny-php-function-title: var(--neon-bunny-orange-light);
 --neon-bunny-php-keyword: var(--neon-bunny-magenta);
 --neon-bunny-php-params-variable: var(--neon-bunny-green-darker);
 --neon-bunny-php-params: var(--neon-bunny-yellow);
 --neon-bunny-php-string: var(--neon-bunny-green-light);
 --neon-bunny-php-title-class: var(--neon-bunny-yellow);
 --neon-bunny-php-title-function-invoke: var(--neon-bunny-orange-light);
 --neon-bunny-php-title: var(--neon-bunny-white);
 --neon-bunny-php-variable: var(--neon-bunny-orange);
 /* ------------------------- Meta */
 --neon-bunny-php-meta: var(--neon-bunny-pink);
}

pre code.hljs {
 display: block;
 overflow-x: auto;
}

code[class*=language-],
pre[class*=language-] {
 -moz-hyphens: none;
 -moz-tab-size: 4;
 -ms-hyphens: none;
 -o-tab-size: 4;
 -webkit-hyphens: none;
 color: var(--neon-bunny-white);
 font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
 hyphens: none;
 line-height: 1.5;
 tab-size: 4;
 text-align: left;
 white-space: pre;
 word-break: normal;
 word-spacing: normal;
 word-wrap: normal;
}

code[class*=language-]::-moz-selection,
code[class*=language-] ::-moz-selection,
pre[class*=language-]::-moz-selection,
pre[class*=language-] ::-moz-selection {
 background: rgba(29, 59, 83, 0.99);
 text-shadow: none;
}

code[class*=language-]::selection,
code[class*=language-] ::selection,
pre[class*=language-]::selection,
pre[class*=language-] ::selection {
 background: rgba(255, 255, 255, 0.0823529412);
 text-shadow: none;
}

@media print {

 code[class*=language-],
 pre[class*=language-] {
	 text-shadow: none;
 }
}

/* Code blocks */
pre[class*=language-] {
 background: #000000;
 color: white;
 margin: 0.5em 0;
 overflow: auto;
 padding: 1em;
}

:not(pre) > code[class*=language-] {
 background: #000000;
 color: white;
 border-radius: 0.3em;
 padding: 0.1em;
 white-space: normal;
}

.hljs-built_in {
 color: var(--neon-bunny-builtin);
}

.hljs-char {
 color: var(--neon-bunny-char);
}

.hljs-comment {
 color: var(--neon-bunny-comment);
 font-style: italic;
}

.hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs-keyword {
 color: var(--neon-bunny-keyword);
}

.hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs-number {
 color: var(--neon-bunny-number);
}

.hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs-params {
 color: var(--neon-bunny-params);
}

.hljs-property {
 color: var(--neon-bunny-property);
}

.hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs-string {
 color: var(--neon-bunny-string);
}

.hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs-title {
 color: var(--neon-bunny-title);
}

.hljs-title.class_ {
 color: var(--neon-bunny-title-class);
}

.hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs-title.function_ {
 color: var(--neon-bunny-title-function);
 text-decoration: underline;
}

.hljs-title.function_.invoke__ {
 color: var(--neon-bunny-title-function-invoke);
}

.hljs-type {
 color: var(--neon-bunny-type);
}

.hljs-variable {
 color: var(--neon-bunny-variable);
}

.hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs-variable.language_ {
 color: var(--neon-bunny-variable-language);
 font-style: italic;
}

.hljs-meta {
 color: var(--neon-bunny-meta);
}

.hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs-attribute {
 color: var(--neon-bunny-attribute);
}

.hljs-name {
 color: var(--neon-bunny-name);
}

.hljs-section {
 color: var(--neon-bunny-section);
}

.hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs-tag .hljs-attr {
 color: var(--neon-bunny-tag-attr);
}

.hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs-code {
 color: var(--neon-bunny-code);
}

.hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs-link {
 color: var(--neon-bunny-link);
}

.hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs-selector-id {
 color: var(--neon-bunny-selector-id);
}

.hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs-deletion {
 color: var(--neon-bunny-deletion);
}

.hljs.language-css {
 color: var(--neon-bunny-css);
}

.hljs.language-css .hljs-built_in {
 color: var(--neon-bunny-css-builtin);
}

.hljs.language-css .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-css .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-css .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-css .hljs-keyword {
 color: var(--neon-bunny-keyword);
}

.hljs.language-css .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-css .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-css .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-css .hljs-params {
 color: var(--neon-bunny-params);
 font-style: italic;
}

.hljs.language-css .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-css .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-css .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-css .hljs-string {
 color: var(--neon-bunny-string);
}

.hljs.language-css .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-css .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-css .hljs-title {
 color: var(--neon-bunny-title);
}

.hljs.language-css .hljs-title.class_ {
 color: var(--neon-bunny-title-class);
}

.hljs.language-css .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-css .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-css .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-title-function-invoke);
}

.hljs.language-css .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-css .hljs-variable {
 color: var(--neon-bunny-variable);
}

.hljs.language-css .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-css .hljs-variable.language_ {
 color: var(--neon-bunny-variable-language);
}

.hljs.language-css .hljs-meta {
 color: var(--neon-bunny-css-meta);
}

.hljs.language-css .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-css .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-css .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-css .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-css .hljs-attribute {
 color: var(--neon-bunny-css-attribute);
}

.hljs.language-css .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-css .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-css .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-css .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-css .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-css .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-css .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-css .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-css .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-css .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-css .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-css .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-css .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-css .hljs-selector-id {
 color: var(--neon-bunny-css-selector-id);
}

.hljs.language-css .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-css .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-css .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-css .hljs-deletion {
 color: var(--neon-bunny-deletion);
}

.hljs.language-javascript, .hljs.language-js {
 color: var(--neon-bunny-js);
}

.hljs.language-javascript .hljs-built_in, .hljs.language-js .hljs-built_in {
 color: var(--neon-bunny-builtin);
}

.hljs.language-javascript .hljs-char, .hljs.language-js .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-javascript .hljs-comment, .hljs.language-js .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-javascript .hljs-doctag, .hljs.language-js .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-javascript .hljs-keyword, .hljs.language-js .hljs-keyword {
 color: var(--neon-bunny-keyword);
}

.hljs.language-javascript .hljs-literal, .hljs.language-js .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-javascript .hljs-number, .hljs.language-js .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-javascript .hljs-operator, .hljs.language-js .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-javascript .hljs-params, .hljs.language-js .hljs-params {
 color: var(--neon-bunny-params);
 font-style: italic;
}

.hljs.language-javascript .hljs-params .hljs-variable.language_, .hljs.language-js .hljs-params .hljs-variable.language_ {
 color: var(--neon-bunny-js-params-variable-language);
}

.hljs.language-javascript .hljs-property, .hljs.language-js .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-javascript .hljs-punctuation, .hljs.language-js .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-javascript .hljs-regexp, .hljs.language-js .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-javascript .hljs-string, .hljs.language-js .hljs-string {
 color: var(--neon-bunny-string);
}

.hljs.language-javascript .hljs-subst, .hljs.language-js .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-javascript .hljs-symbol, .hljs.language-js .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-javascript .hljs-title, .hljs.language-js .hljs-title {
 color: var(--neon-bunny-title);
}

.hljs.language-javascript .hljs-title.class_, .hljs.language-js .hljs-title.class_ {
 color: var(--neon-bunny-js-title-class);
}

.hljs.language-javascript .hljs-title.class_.inherited__, .hljs.language-js .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-javascript .hljs-title.function_, .hljs.language-js .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-javascript .hljs-title.function_.invoke__, .hljs.language-js .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-title-function-invoke);
}

.hljs.language-javascript .hljs-type, .hljs.language-js .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-javascript .hljs-variable, .hljs.language-js .hljs-variable {
 color: var(--neon-bunny-variable);
}

.hljs.language-javascript .hljs-variable.constant_, .hljs.language-js .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-javascript .hljs-variable.language_, .hljs.language-js .hljs-variable.language_ {
 color: var(--neon-bunny-js-variable-language);
}

.hljs.language-javascript .hljs-meta, .hljs.language-js .hljs-meta {
 color: var(--neon-bunny-meta);
}

.hljs.language-javascript .hljs-meta.prompt_, .hljs.language-js .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-javascript .hljs-meta.keyword_, .hljs.language-js .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-javascript .hljs-meta.string_, .hljs.language-js .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-javascript .hljs-attr, .hljs.language-js .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-javascript .hljs-attribute, .hljs.language-js .hljs-attribute {
 color: var(--neon-bunny-attribute);
}

.hljs.language-javascript .hljs-name, .hljs.language-js .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-javascript .hljs-section, .hljs.language-js .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-javascript .hljs-tag, .hljs.language-js .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-javascript .hljs-bullet, .hljs.language-js .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-javascript .hljs-code, .hljs.language-js .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-javascript .hljs-emphasis, .hljs.language-js .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-javascript .hljs-formula, .hljs.language-js .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-javascript .hljs-link, .hljs.language-js .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-javascript .hljs-quote, .hljs.language-js .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-javascript .hljs-strong, .hljs.language-js .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-javascript .hljs-selector, .hljs.language-js .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-javascript .hljs-selector-attr, .hljs.language-js .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-javascript .hljs-selector-class, .hljs.language-js .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-javascript .hljs-selector-id, .hljs.language-js .hljs-selector-id {
 color: var(--neon-bunny-selector-id);
}

.hljs.language-javascript .hljs-selector-pseudo, .hljs.language-js .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-javascript .hljs-selector-tag, .hljs.language-js .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-javascript .hljs-addition, .hljs.language-js .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-javascript .hljs-deletion, .hljs.language-js .hljs-deletion {
 color: var(--neon-bunny-deletion);
}

.hljs.language-php {
 color: var(--neon-bunny-php);
}

.hljs.language-php .hljs-built_in {
 color: var(--neon-bunny-builtin);
}

.hljs.language-php .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-php .hljs-class .hljs-title {
 color: var(--neon-bunny-php-class-title) !important;
}

.hljs.language-php .hljs-class .hljs-keyword {
 color: var(--neon-bunny-php-class-keyword);
}

.hljs.language-php .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-php .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-php .hljs-function .hljs-title {
 color: var(--neon-bunny-php-function-title);
}

.hljs.language-php .hljs-keyword {
 color: var(--neon-bunny-php-keyword);
}

.hljs.language-php .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-php .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-php .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-php .hljs-params {
 color: var(--neon-bunny-php-params);
}

.hljs.language-php .hljs-params .hljs-variable {
 color: var(--neon-bunny-php-params-variable);
}

.hljs.language-php .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-php .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-php .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-php .hljs-string {
 color: var(--neon-bunny-php-string);
}

.hljs.language-php .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-php .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-php .hljs-title {
 color: var(--neon-bunny-php-title);
}

.hljs.language-php .hljs-title.class_ {
 color: var(--neon-bunny-php-title-class);
}

.hljs.language-php .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-php .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-php .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-php-title-function-invoke);
}

.hljs.language-php .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-php .hljs-variable {
 color: var(--neon-bunny-php-variable);
}

.hljs.language-php .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-php .hljs-variable.language_ {
 color: var(--neon-bunny-variable-language);
}

.hljs.language-php .hljs-meta {
 color: var(--neon-bunny-php-meta);
}

.hljs.language-php .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-php .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-php .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-php .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-php .hljs-attribute {
 color: var(--neon-bunny-attribute);
}

.hljs.language-php .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-php .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-php .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-php .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-php .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-php .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-php .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-php .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-php .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-php .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-php .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-php .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-php .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-php .hljs-selector-id {
 color: var(--neon-bunny-selector-id);
}

.hljs.language-php .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-php .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-php .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-php .hljs-deletion {
 color: var(--neon-bunny-deletion);
}
`;

const MODES$1 = (hljs) => {
  return {
    IMPORTANT: {
      scope: 'meta',
      begin: '!important'
    },
    BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: 'number',
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
    },
    FUNCTION_DISPATCH: {
      className: "built_in",
      begin: /[\w-]+(?=\()/
    },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: 'selector-attr',
      begin: /\[/,
      end: /\]/,
      illegal: '$',
      contains: [
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE
      ]
    },
    CSS_NUMBER_MODE: {
      scope: 'number',
      begin: hljs.NUMBER_RE + '(' +
        '%|em|ex|ch|rem' +
        '|vw|vh|vmin|vmax' +
        '|cm|mm|in|pt|pc|px' +
        '|deg|grad|rad|turn' +
        '|s|ms' +
        '|Hz|kHz' +
        '|dpi|dpcm|dppx' +
        ')?',
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z][A-Za-z0-9_-]*/
    }
  };
};

const TAGS = [
  'a',
  'abbr',
  'address',
  'article',
  'aside',
  'audio',
  'b',
  'blockquote',
  'body',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'dd',
  'del',
  'details',
  'dfn',
  'div',
  'dl',
  'dt',
  'em',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hgroup',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'label',
  'legend',
  'li',
  'main',
  'mark',
  'menu',
  'nav',
  'object',
  'ol',
  'p',
  'q',
  'quote',
  'samp',
  'section',
  'span',
  'strong',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'tr',
  'ul',
  'var',
  'video'
];

const MEDIA_FEATURES = [
  'any-hover',
  'any-pointer',
  'aspect-ratio',
  'color',
  'color-gamut',
  'color-index',
  'device-aspect-ratio',
  'device-height',
  'device-width',
  'display-mode',
  'forced-colors',
  'grid',
  'height',
  'hover',
  'inverted-colors',
  'monochrome',
  'orientation',
  'overflow-block',
  'overflow-inline',
  'pointer',
  'prefers-color-scheme',
  'prefers-contrast',
  'prefers-reduced-motion',
  'prefers-reduced-transparency',
  'resolution',
  'scan',
  'scripting',
  'update',
  'width',
  // TODO: find a better solution?
  'min-width',
  'max-width',
  'min-height',
  'max-height'
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
const PSEUDO_CLASSES = [
  'active',
  'any-link',
  'blank',
  'checked',
  'current',
  'default',
  'defined',
  'dir', // dir()
  'disabled',
  'drop',
  'empty',
  'enabled',
  'first',
  'first-child',
  'first-of-type',
  'fullscreen',
  'future',
  'focus',
  'focus-visible',
  'focus-within',
  'has', // has()
  'host', // host or host()
  'host-context', // host-context()
  'hover',
  'indeterminate',
  'in-range',
  'invalid',
  'is', // is()
  'lang', // lang()
  'last-child',
  'last-of-type',
  'left',
  'link',
  'local-link',
  'not', // not()
  'nth-child', // nth-child()
  'nth-col', // nth-col()
  'nth-last-child', // nth-last-child()
  'nth-last-col', // nth-last-col()
  'nth-last-of-type', //nth-last-of-type()
  'nth-of-type', //nth-of-type()
  'only-child',
  'only-of-type',
  'optional',
  'out-of-range',
  'past',
  'placeholder-shown',
  'read-only',
  'read-write',
  'required',
  'right',
  'root',
  'scope',
  'target',
  'target-within',
  'user-invalid',
  'valid',
  'visited',
  'where' // where()
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
const PSEUDO_ELEMENTS = [
  'after',
  'backdrop',
  'before',
  'cue',
  'cue-region',
  'first-letter',
  'first-line',
  'grammar-error',
  'marker',
  'part',
  'placeholder',
  'selection',
  'slotted',
  'spelling-error'
];

const ATTRIBUTES = [
  'align-content',
  'align-items',
  'align-self',
  'all',
  'animation',
  'animation-delay',
  'animation-direction',
  'animation-duration',
  'animation-fill-mode',
  'animation-iteration-count',
  'animation-name',
  'animation-play-state',
  'animation-timing-function',
  'backface-visibility',
  'background',
  'background-attachment',
  'background-blend-mode',
  'background-clip',
  'background-color',
  'background-image',
  'background-origin',
  'background-position',
  'background-repeat',
  'background-size',
  'block-size',
  'border',
  'border-block',
  'border-block-color',
  'border-block-end',
  'border-block-end-color',
  'border-block-end-style',
  'border-block-end-width',
  'border-block-start',
  'border-block-start-color',
  'border-block-start-style',
  'border-block-start-width',
  'border-block-style',
  'border-block-width',
  'border-bottom',
  'border-bottom-color',
  'border-bottom-left-radius',
  'border-bottom-right-radius',
  'border-bottom-style',
  'border-bottom-width',
  'border-collapse',
  'border-color',
  'border-image',
  'border-image-outset',
  'border-image-repeat',
  'border-image-slice',
  'border-image-source',
  'border-image-width',
  'border-inline',
  'border-inline-color',
  'border-inline-end',
  'border-inline-end-color',
  'border-inline-end-style',
  'border-inline-end-width',
  'border-inline-start',
  'border-inline-start-color',
  'border-inline-start-style',
  'border-inline-start-width',
  'border-inline-style',
  'border-inline-width',
  'border-left',
  'border-left-color',
  'border-left-style',
  'border-left-width',
  'border-radius',
  'border-right',
  'border-right-color',
  'border-right-style',
  'border-right-width',
  'border-spacing',
  'border-style',
  'border-top',
  'border-top-color',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-top-style',
  'border-top-width',
  'border-width',
  'bottom',
  'box-decoration-break',
  'box-shadow',
  'box-sizing',
  'break-after',
  'break-before',
  'break-inside',
  'caption-side',
  'caret-color',
  'clear',
  'clip',
  'clip-path',
  'clip-rule',
  'color',
  'column-count',
  'column-fill',
  'column-gap',
  'column-rule',
  'column-rule-color',
  'column-rule-style',
  'column-rule-width',
  'column-span',
  'column-width',
  'columns',
  'contain',
  'content',
  'content-visibility',
  'counter-increment',
  'counter-reset',
  'cue',
  'cue-after',
  'cue-before',
  'cursor',
  'direction',
  'display',
  'empty-cells',
  'filter',
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'float',
  'flow',
  'font',
  'font-display',
  'font-family',
  'font-feature-settings',
  'font-kerning',
  'font-language-override',
  'font-size',
  'font-size-adjust',
  'font-smoothing',
  'font-stretch',
  'font-style',
  'font-synthesis',
  'font-variant',
  'font-variant-caps',
  'font-variant-east-asian',
  'font-variant-ligatures',
  'font-variant-numeric',
  'font-variant-position',
  'font-variation-settings',
  'font-weight',
  'gap',
  'glyph-orientation-vertical',
  'grid',
  'grid-area',
  'grid-auto-columns',
  'grid-auto-flow',
  'grid-auto-rows',
  'grid-column',
  'grid-column-end',
  'grid-column-start',
  'grid-gap',
  'grid-row',
  'grid-row-end',
  'grid-row-start',
  'grid-template',
  'grid-template-areas',
  'grid-template-columns',
  'grid-template-rows',
  'hanging-punctuation',
  'height',
  'hyphens',
  'icon',
  'image-orientation',
  'image-rendering',
  'image-resolution',
  'ime-mode',
  'inline-size',
  'isolation',
  'justify-content',
  'left',
  'letter-spacing',
  'line-break',
  'line-height',
  'list-style',
  'list-style-image',
  'list-style-position',
  'list-style-type',
  'margin',
  'margin-block',
  'margin-block-end',
  'margin-block-start',
  'margin-bottom',
  'margin-inline',
  'margin-inline-end',
  'margin-inline-start',
  'margin-left',
  'margin-right',
  'margin-top',
  'marks',
  'mask',
  'mask-border',
  'mask-border-mode',
  'mask-border-outset',
  'mask-border-repeat',
  'mask-border-slice',
  'mask-border-source',
  'mask-border-width',
  'mask-clip',
  'mask-composite',
  'mask-image',
  'mask-mode',
  'mask-origin',
  'mask-position',
  'mask-repeat',
  'mask-size',
  'mask-type',
  'max-block-size',
  'max-height',
  'max-inline-size',
  'max-width',
  'min-block-size',
  'min-height',
  'min-inline-size',
  'min-width',
  'mix-blend-mode',
  'nav-down',
  'nav-index',
  'nav-left',
  'nav-right',
  'nav-up',
  'none',
  'normal',
  'object-fit',
  'object-position',
  'opacity',
  'order',
  'orphans',
  'outline',
  'outline-color',
  'outline-offset',
  'outline-style',
  'outline-width',
  'overflow',
  'overflow-wrap',
  'overflow-x',
  'overflow-y',
  'padding',
  'padding-block',
  'padding-block-end',
  'padding-block-start',
  'padding-bottom',
  'padding-inline',
  'padding-inline-end',
  'padding-inline-start',
  'padding-left',
  'padding-right',
  'padding-top',
  'page-break-after',
  'page-break-before',
  'page-break-inside',
  'pause',
  'pause-after',
  'pause-before',
  'perspective',
  'perspective-origin',
  'pointer-events',
  'position',
  'quotes',
  'resize',
  'rest',
  'rest-after',
  'rest-before',
  'right',
  'row-gap',
  'scroll-margin',
  'scroll-margin-block',
  'scroll-margin-block-end',
  'scroll-margin-block-start',
  'scroll-margin-bottom',
  'scroll-margin-inline',
  'scroll-margin-inline-end',
  'scroll-margin-inline-start',
  'scroll-margin-left',
  'scroll-margin-right',
  'scroll-margin-top',
  'scroll-padding',
  'scroll-padding-block',
  'scroll-padding-block-end',
  'scroll-padding-block-start',
  'scroll-padding-bottom',
  'scroll-padding-inline',
  'scroll-padding-inline-end',
  'scroll-padding-inline-start',
  'scroll-padding-left',
  'scroll-padding-right',
  'scroll-padding-top',
  'scroll-snap-align',
  'scroll-snap-stop',
  'scroll-snap-type',
  'scrollbar-color',
  'scrollbar-gutter',
  'scrollbar-width',
  'shape-image-threshold',
  'shape-margin',
  'shape-outside',
  'speak',
  'speak-as',
  'src', // @font-face
  'tab-size',
  'table-layout',
  'text-align',
  'text-align-all',
  'text-align-last',
  'text-combine-upright',
  'text-decoration',
  'text-decoration-color',
  'text-decoration-line',
  'text-decoration-style',
  'text-emphasis',
  'text-emphasis-color',
  'text-emphasis-position',
  'text-emphasis-style',
  'text-indent',
  'text-justify',
  'text-orientation',
  'text-overflow',
  'text-rendering',
  'text-shadow',
  'text-transform',
  'text-underline-position',
  'top',
  'transform',
  'transform-box',
  'transform-origin',
  'transform-style',
  'transition',
  'transition-delay',
  'transition-duration',
  'transition-property',
  'transition-timing-function',
  'unicode-bidi',
  'vertical-align',
  'visibility',
  'voice-balance',
  'voice-duration',
  'voice-family',
  'voice-pitch',
  'voice-range',
  'voice-rate',
  'voice-stress',
  'voice-volume',
  'white-space',
  'widows',
  'width',
  'will-change',
  'word-break',
  'word-spacing',
  'word-wrap',
  'writing-mode',
  'z-index'
  // reverse makes sure longer attributes `font-weight` are matched fully
  // instead of getting false positives on say `font`
].reverse();

/*
Language: CSS
Category: common, css, web
Website: https://developer.mozilla.org/en-US/docs/Web/CSS
*/

/** @type LanguageFn */
function css(hljs) {
  const regex = hljs.regex;
  const modes = MODES$1(hljs);
  const VENDOR_PREFIX = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ };
  const AT_MODIFIERS = "and or not only";
  const AT_PROPERTY_RE = /@-?\w[\w]*(-\w+)*/; // @-webkit-keyframes
  const IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
  const STRINGS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE
  ];

  return {
    name: 'CSS',
    case_insensitive: true,
    illegal: /[=|'\$]/,
    keywords: { keyframePosition: "from to" },
    classNameAliases: {
      // for visual continuity with `tag {}` and because we
      // don't have a great class for this?
      keyframePosition: "selector-tag" },
    contains: [
      modes.BLOCK_COMMENT,
      VENDOR_PREFIX,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      modes.CSS_NUMBER_MODE,
      {
        className: 'selector-id',
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      },
      {
        className: 'selector-class',
        begin: '\\.' + IDENT_RE,
        relevance: 0
      },
      modes.ATTRIBUTE_SELECTOR_MODE,
      {
        className: 'selector-pseudo',
        variants: [
          { begin: ':(' + PSEUDO_CLASSES.join('|') + ')' },
          { begin: ':(:)?(' + PSEUDO_ELEMENTS.join('|') + ')' }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      modes.CSS_VARIABLE,
      {
        className: 'attribute',
        begin: '\\b(' + ATTRIBUTES.join('|') + ')\\b'
      },
      // attribute values
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          modes.BLOCK_COMMENT,
          modes.HEXCOLOR,
          modes.IMPORTANT,
          modes.CSS_NUMBER_MODE,
          ...STRINGS,
          // needed to highlight these as strings and to avoid issues with
          // illegal characters that might be inside urls that would tigger the
          // languages illegal stack
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0, // from keywords
            keywords: { built_in: "url data-uri" },
            contains: [
              ...STRINGS,
              {
                className: "string",
                // any character other than `)` as in `url()` will be the start
                // of a string, which ends with `)` (from the parent mode)
                begin: /[^)]/,
                endsWithParent: true,
                excludeEnd: true
              }
            ]
          },
          modes.FUNCTION_DISPATCH
        ]
      },
      {
        begin: regex.lookahead(/@/),
        end: '[{;]',
        relevance: 0,
        illegal: /:/, // break on Less variables @var: ...
        contains: [
          {
            className: 'keyword',
            begin: AT_PROPERTY_RE
          },
          {
            begin: /\s/,
            endsWithParent: true,
            excludeEnd: true,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: AT_MODIFIERS,
              attribute: MEDIA_FEATURES.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...STRINGS,
              modes.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: 'selector-tag',
        begin: '\\b(' + TAGS.join('|') + ')\\b'
      }
    ]
  };
}

const IDENT_RE$1 = '[A-Za-z$_][0-9A-Za-z$_]*';
const KEYWORDS = [
  "as", // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends"
];
const LITERALS = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
const TYPES = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
];

const ERROR_TYPES = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
];

const BUILT_IN_GLOBALS = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",

  "require",
  "exports",

  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
];

const BUILT_IN_VARIABLES = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "module",
  "global" // Node.js
];

const BUILT_INS = [].concat(
  BUILT_IN_GLOBALS,
  TYPES,
  ERROR_TYPES
);

/*
Language: JavaScript
Description: JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
Category: common, scripting, web
Website: https://developer.mozilla.org/en-US/docs/Web/JavaScript
*/

/** @type LanguageFn */
function javascript(hljs) {
  const regex = hljs.regex;
  /**
   * Takes a string like "<Booger" and checks to see
   * if we can find a matching "</Booger" later in the
   * content.
   * @param {RegExpMatchArray} match
   * @param {{after:number}} param1
   */
  const hasClosingTag = (match, { after }) => {
    const tag = "</" + match[0].slice(1);
    const pos = match.input.indexOf(tag, after);
    return pos !== -1;
  };

  const IDENT_RE$1$1 = IDENT_RE$1;
  const FRAGMENT = {
    begin: '<>',
    end: '</>'
  };
  // to avoid some special cases inside isTrulyOpeningTag
  const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
  const XML_TAG = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (match, response) => {
      const afterMatchIndex = match[0].length + match.index;
      const nextChar = match.input[afterMatchIndex];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        nextChar === "<" ||
        // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        nextChar === ","
        ) {
        response.ignoreMatch();
        return;
      }

      // `<something>`
      // Quite possibly a tag, lets look for a matching closing tag...
      if (nextChar === ">") {
        // if we cannot find a matching closing tag, then we
        // will ignore it
        if (!hasClosingTag(match, { after: afterMatchIndex })) {
          response.ignoreMatch();
        }
      }

      // `<blah />` (self-closing)
      // handled by simpleSelfClosing rule

      let m;
      const afterMatch = match.input.substring(afterMatchIndex);

      // some more template typing stuff
      //  <T = any>(key?: string) => Modify<
      if ((m = afterMatch.match(/^\s*=/))) {
        response.ignoreMatch();
        return;
      }

      // `<From extends string>`
      // technically this could be HTML, but it smells like a type
      // NOTE: This is ugh, but added specifically for https://github.com/highlightjs/highlight.js/issues/3276
      if ((m = afterMatch.match(/^\s+extends\s+/))) {
        if (m.index === 0) {
          response.ignoreMatch();
          // eslint-disable-next-line no-useless-return
          return;
        }
      }
    }
  };
  const KEYWORDS$1 = {
    $pattern: IDENT_RE$1,
    keyword: KEYWORDS,
    literal: LITERALS,
    built_in: BUILT_INS,
    "variable.language": BUILT_IN_VARIABLES
  };

  // https://tc39.es/ecma262/#sec-literals-numeric-literals
  const decimalDigits = '[0-9](_?[0-9])*';
  const frac = `\\.(${decimalDigits})`;
  // DecimalIntegerLiteral, including Annex B NonOctalDecimalIntegerLiteral
  // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
  const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
  const NUMBER = {
    className: 'number',
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))` +
        `[eE][+-]?(${decimalDigits})\\b` },
      { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },

      // DecimalBigIntegerLiteral
      { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },

      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },

      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" },
    ],
    relevance: 0
  };

  const SUBST = {
    className: 'subst',
    begin: '\\$\\{',
    end: '\\}',
    keywords: KEYWORDS$1,
    contains: [] // defined later
  };
  const HTML_TEMPLATE = {
    begin: 'html`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: 'xml'
    }
  };
  const CSS_TEMPLATE = {
    begin: 'css`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: 'css'
    }
  };
  const TEMPLATE_STRING = {
    className: 'string',
    begin: '`',
    end: '`',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  const JSDOC_COMMENT = hljs.COMMENT(
    /\/\*\*(?!\/)/,
    '\\*/',
    {
      relevance: 0,
      contains: [
        {
          begin: '(?=@[A-Za-z]+)',
          relevance: 0,
          contains: [
            {
              className: 'doctag',
              begin: '@[A-Za-z]+'
            },
            {
              className: 'type',
              begin: '\\{',
              end: '\\}',
              excludeEnd: true,
              excludeBegin: true,
              relevance: 0
            },
            {
              className: 'variable',
              begin: IDENT_RE$1$1 + '(?=\\s*(-)|$)',
              endsParent: true,
              relevance: 0
            },
            // eat spaces (not newlines) so we can find
            // types or variables
            {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }
          ]
        }
      ]
    }
  );
  const COMMENT = {
    className: "comment",
    variants: [
      JSDOC_COMMENT,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE
    ]
  };
  const SUBST_INTERNALS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    TEMPLATE_STRING,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    NUMBER,
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  SUBST.contains = SUBST_INTERNALS
    .concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: KEYWORDS$1,
      contains: [
        "self"
      ].concat(SUBST_INTERNALS)
    });
  const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
    // eat recursive parens in sub expressions
    {
      begin: /\(/,
      end: /\)/,
      keywords: KEYWORDS$1,
      contains: ["self"].concat(SUBST_AND_COMMENTS)
    }
  ]);
  const PARAMS = {
    className: 'params',
    begin: /\(/,
    end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS$1,
    contains: PARAMS_CONTAINS
  };

  // ES6 classes
  const CLASS_OR_EXTENDS = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$1$1,
          /\s+/,
          /extends/,
          /\s+/,
          regex.concat(IDENT_RE$1$1, "(", regex.concat(/\./, IDENT_RE$1$1), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$1$1
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      },

    ]
  };

  const CLASS_REFERENCE = {
    relevance: 0,
    match:
    regex.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/,
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...TYPES,
        ...ERROR_TYPES
      ]
    }
  };

  const USE_STRICT = {
    label: "use_strict",
    className: 'meta',
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  };

  const FUNCTION_DEFINITION = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          IDENT_RE$1$1,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [ PARAMS ],
    illegal: /%/
  };

  const UPPER_CASE_CONSTANT = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };

  function noneOf(list) {
    return regex.concat("(?!", list.join("|"), ")");
  }

  const FUNCTION_CALL = {
    match: regex.concat(
      /\b/,
      noneOf([
        ...BUILT_IN_GLOBALS,
        "super",
        "import"
      ]),
      IDENT_RE$1$1, regex.lookahead(/\(/)),
    className: "title.function",
    relevance: 0
  };

  const PROPERTY_ACCESS = {
    begin: regex.concat(/\./, regex.lookahead(
      regex.concat(IDENT_RE$1$1, /(?![0-9A-Za-z$_(])/)
    )),
    end: IDENT_RE$1$1,
    excludeBegin: true,
    keywords: "prototype",
    className: "property",
    relevance: 0
  };

  const GETTER_OR_SETTER = {
    match: [
      /get|set/,
      /\s+/,
      IDENT_RE$1$1,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      { // eat to avoid empty params
        begin: /\(\)/
      },
      PARAMS
    ]
  };

  const FUNC_LEAD_IN_RE = '(\\(' +
    '[^()]*(\\(' +
    '[^()]*(\\(' +
    '[^()]*' +
    '\\)[^()]*)*' +
    '\\)[^()]*)*' +
    '\\)|' + hljs.UNDERSCORE_IDENT_RE + ')\\s*=>';

  const FUNCTION_VARIABLE = {
    match: [
      /const|var|let/, /\s+/,
      IDENT_RE$1$1, /\s*/,
      /=\s*/,
      /(async\s*)?/, // async is optional
      regex.lookahead(FUNC_LEAD_IN_RE)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      PARAMS
    ]
  };

  return {
    name: 'Javascript',
    aliases: ['js', 'jsx', 'mjs', 'cjs'],
    keywords: KEYWORDS$1,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
    illegal: /#(?![$_A-z])/,
    contains: [
      hljs.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      USE_STRICT,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      TEMPLATE_STRING,
      COMMENT,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      NUMBER,
      CLASS_REFERENCE,
      {
        className: 'attr',
        begin: IDENT_RE$1$1 + regex.lookahead(':'),
        relevance: 0
      },
      FUNCTION_VARIABLE,
      { // "value" container
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        relevance: 0,
        contains: [
          COMMENT,
          hljs.REGEXP_MODE,
          {
            className: 'function',
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: FUNC_LEAD_IN_RE,
            returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: hljs.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true
                  },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: KEYWORDS$1,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          { // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          { // JSX
            variants: [
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              { match: XML_SELF_CLOSING },
              {
                begin: XML_TAG.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                'on:begin': XML_TAG.isTrulyOpeningTag,
                end: XML_TAG.end
              }
            ],
            subLanguage: 'xml',
            contains: [
              {
                begin: XML_TAG.begin,
                end: XML_TAG.end,
                skip: true,
                contains: ['self']
              }
            ]
          }
        ],
      },
      FUNCTION_DEFINITION,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: '\\b(?!function)' + hljs.UNDERSCORE_IDENT_RE +
          '\\(' + // first parens
          '[^()]*(\\(' +
            '[^()]*(\\(' +
              '[^()]*' +
            '\\)[^()]*)*' +
          '\\)[^()]*)*' +
          '\\)\\s*\\{', // end parens
        returnBegin:true,
        label: "func.def",
        contains: [
          PARAMS,
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1$1, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      PROPERTY_ACCESS,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: '\\$' + IDENT_RE$1$1,
        relevance: 0
      },
      {
        match: [ /\bconstructor(?=\s*\()/ ],
        className: { 1: "title.function" },
        contains: [ PARAMS ]
      },
      FUNCTION_CALL,
      UPPER_CASE_CONSTANT,
      CLASS_OR_EXTENDS,
      GETTER_OR_SETTER,
      {
        match: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}

/*
Language: HTML, XML
Website: https://www.w3.org/XML/
Category: common, web
Audit: 2020
*/

/** @type LanguageFn */
function xml(hljs) {
  const regex = hljs.regex;
  // XML names can have the following additional letters: https://www.w3.org/TR/xml/#NT-NameChar
  // OTHER_NAME_CHARS = /[:\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]/;
  // Element names start with NAME_START_CHAR followed by optional other Unicode letters, ASCII digits, hyphens, underscores, and periods
  // const TAG_NAME_RE = regex.concat(/[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, regex.optional(/[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*:/), /[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*/);;
  // const XML_IDENT_RE = /[A-Z_a-z:\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]+/;
  // const TAG_NAME_RE = regex.concat(/[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, regex.optional(/[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*:/), /[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*/);
  // however, to cater for performance and more Unicode support rely simply on the Unicode letter class
  const TAG_NAME_RE = regex.concat(/[\p{L}_]/u, regex.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u);
  const XML_IDENT_RE = /[\p{L}0-9._:-]+/u;
  const XML_ENTITIES = {
    className: 'symbol',
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  };
  const XML_META_KEYWORDS = {
    begin: /\s/,
    contains: [
      {
        className: 'keyword',
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  };
  const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
    begin: /\(/,
    end: /\)/
  });
  const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, { className: 'string' });
  const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, { className: 'string' });
  const TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: 'attr',
        begin: XML_IDENT_RE,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: 'string',
            endsParent: true,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [ XML_ENTITIES ]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [ XML_ENTITIES ]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: 'HTML, XML',
    aliases: [
      'html',
      'xhtml',
      'rss',
      'atom',
      'xjb',
      'xsd',
      'xsl',
      'plist',
      'wsf',
      'svg'
    ],
    case_insensitive: true,
    unicodeRegex: true,
    contains: [
      {
        className: 'meta',
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          XML_META_KEYWORDS,
          QUOTE_META_STRING_MODE,
          APOS_META_STRING_MODE,
          XML_META_PAR_KEYWORDS,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: 'meta',
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  XML_META_KEYWORDS,
                  XML_META_PAR_KEYWORDS,
                  QUOTE_META_STRING_MODE,
                  APOS_META_STRING_MODE
                ]
              }
            ]
          }
        ]
      },
      hljs.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      XML_ENTITIES,
      // xml processing instructions
      {
        className: 'meta',
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              QUOTE_META_STRING_MODE
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/,
          }
        ]

      },
      {
        className: 'tag',
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: 'style' },
        contains: [ TAG_INTERNALS ],
        starts: {
          end: /<\/style>/,
          returnEnd: true,
          subLanguage: [
            'css',
            'xml'
          ]
        }
      },
      {
        className: 'tag',
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: 'script' },
        contains: [ TAG_INTERNALS ],
        starts: {
          end: /<\/script>/,
          returnEnd: true,
          subLanguage: [
            'javascript',
            'handlebars',
            'xml'
          ]
        }
      },
      // we need this for now for jSX
      {
        className: 'tag',
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: 'tag',
        begin: regex.concat(
          /</,
          regex.lookahead(regex.concat(
            TAG_NAME_RE,
            // <tag/>
            // <tag>
            // <tag ...
            regex.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: 'name',
            begin: TAG_NAME_RE,
            relevance: 0,
            starts: TAG_INTERNALS
          }
        ]
      },
      // close tag
      {
        className: 'tag',
        begin: regex.concat(
          /<\//,
          regex.lookahead(regex.concat(
            TAG_NAME_RE, />/
          ))
        ),
        contains: [
          {
            className: 'name',
            begin: TAG_NAME_RE,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: true
          }
        ]
      }
    ]
  };
}

/*
Language: Plain text
Author: Egor Rogov (e.rogov@postgrespro.ru)
Description: Plain text without any highlighting.
Category: common
*/

function plaintext(hljs) {
  return {
    name: 'Plain text',
    aliases: [
      'text',
      'txt'
    ],
    disableAutodetect: true
  };
}

const _hoisted_1 = { class: "v-code-block--button-copy" };
const _hoisted_2 = { class: "v-code-block--button-run" };
const _hoisted_3 = { class: "v-code-block--code" };
const _hoisted_4 = ["innerHTML", "textContent"];
var _sfc_main = /*#__PURE__*/ vue.defineComponent({
    __name: 'CodeBlock',
    props: {
        browserWindow: {
            type: Boolean,
            required: false,
            default: false,
        },
        code: {
            type: [Object, Array, String, Number],
            required: true,
        },
        codeBlockRadius: {
            type: String,
            required: false,
            default: '0.5rem',
        },
        copyButton: {
            type: Boolean,
            required: false,
            default: true,
        },
        copyIcons: {
            type: Boolean,
            required: false,
            default: true,
        },
        copyTab: {
            type: Boolean,
            required: false,
            default: true,
        },
        copyFailedText: {
            type: String,
            required: false,
            default: 'Copy failed!',
        },
        copyText: {
            type: String,
            required: false,
            default: 'Copy Code',
        },
        copySuccessText: {
            type: String,
            required: false,
            default: 'Copied!',
        },
        floatingTabs: {
            type: Boolean,
            required: false,
            default: true,
        },
        height: {
            type: [String, Number],
            required: false,
            default: 'auto',
        },
        highlightjs: {
            type: Boolean,
            required: false,
            default: false,
        },
        indent: {
            type: Number,
            required: false,
            default: 2,
        },
        label: {
            type: String,
            required: false,
            default: '',
        },
        lang: {
            type: String,
            required: false,
            default: 'javascript',
        },
        maxHeight: {
            type: [String, Number],
            required: false,
            default: 'auto',
        },
        prismjs: {
            type: Boolean,
            required: false,
            default: true,
        },
        prismPlugin: {
            type: Boolean,
            required: false,
            default: false,
        },
        persistentCopyButton: {
            type: Boolean,
            required: false,
            default: false,
        },
        runTab: {
            type: Boolean,
            required: false,
            default: false,
        },
        runText: {
            type: String,
            required: false,
            default: 'Run',
        },
        tabGap: {
            type: String,
            required: false,
            default: '0.25rem',
        },
        tabs: {
            type: Boolean,
            required: false,
            default: false,
        },
        theme: {
            type: [String, Boolean],
            required: false,
            default: 'neon-bunny',
        },
    },
    emits: ['run', 'update:copy-status'],
    setup(__props, { emit }) {
        const props = __props;
        const highlightJsVersion = '11.7.0';
        const prismVersion = '1.29.0';
        // -------------------------------------------------- Emits & Slots & Injects //
        const slots = vue.useSlots();
        const codeBlockGlobalOptions = vue.inject('codeBlockGlobalOptions');
        // -------------------------------------------------- Props //
        // -------------------------------------------------- Data //
        let hljs;
        let prismModule;
        const convertedCode = vue.ref(null);
        const copyStatus = vue.ref('copy');
        const copyTextValue = vue.ref('');
        const copying = vue.ref(false);
        const isLoading = vue.ref(false);
        const isMobile = vue.ref(false);
        const highlightCdn = vue.ref(`https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@${highlightJsVersion}/build/styles/`);
        const prismCdn = vue.ref(`https://cdn.jsdelivr.net/gh/PrismJS/prism@${prismVersion}/themes`);
        const renderedCode = vue.ref('');
        const runTextValue = vue.ref('');
        const useTheme = vue.ref('');
        // -------------------------------------------------- Computed //
        const computedCode = vue.computed(() => {
            let html = '';
            if (props.highlightjs) {
                html = renderedCode.value;
            }
            // We need to compute the code for Prism plugins to work //
            if (props.prismjs && props.prismPlugin) {
                html = convertedCode.value;
            }
            return html;
        });
        const codeBlockClasses = vue.computed(() => {
            let classes = isMobile.value ? 'v-code-block--mobile' : '';
            classes += props.prismjs ? ' v-code-block--prismjs' : ' v-code-block--highlightjs';
            return classes;
        });
        const codeTagStyles = vue.computed(() => {
            const width = useTheme.value === 'coy' && isLoading.value === false ? '100%' : '';
            return { width };
        });
        const copyButtonClasses = vue.computed(() => {
            return {
                'v-code-block--code-copy-button': true,
                'v-code-block--code-copy-button-mobile': isMobile.value,
                [`v-code-block--code-copy-button-persist`]: props.persistentCopyButton,
                [`v-code-block--code-copy-button-status-${copyStatus.value}`]: true,
            };
        });
        const headerStyles = vue.computed(() => {
            return {
                bottom: props.floatingTabs ? '1px' : '0',
                gap: convertToUnit(props.tabGap),
            };
        });
        const iconClasses = vue.computed(() => {
            const theme = useTheme.value === '' || useTheme.value === 'prism' ? 'default' : useTheme.value;
            const classes = {
                'v-code-block--me-1': true,
                [`v-code-block--tab-${theme}-icon`]: true,
                [`v-code-block--button-copy-icon-status-${copyStatus.value}`]: true,
                [`v-code-block--tab-${theme}-icon-status-${copyStatus.value}`]: true,
            };
            return classes;
        });
        const labelClasses = vue.computed(() => {
            return isMobile.value ? 'v-code-block--label-mobile' : '';
        });
        const preTagStyles = vue.computed(() => {
            const radius = props.codeBlockRadius;
            let borderRadius = `${radius} 0 ${radius} ${radius}`;
            if (!props.tabs || (!props.copyTab && !props.runTab)) {
                borderRadius = radius;
            }
            const display = useTheme.value !== 'funky' ? 'flex' : 'block';
            return {
                borderRadius,
                height: convertToUnit(props.height),
                maxHeight: convertToUnit(props.maxHeight),
                display,
            };
        });
        const tabClasses = vue.computed(() => {
            const theme = useTheme.value === '' || useTheme.value === 'prism' ? 'default' : useTheme.value;
            const classes = {
                [`v-code-block--tab-${theme}`]: true,
            };
            return classes;
        });
        const tabGroupStyle = vue.computed(() => {
            return {
                gap: convertToUnit(props.tabGap),
            };
        });
        // -------------------------------------------------- Watch //
        vue.watch(props, () => {
            if (props.code) {
                renderCode();
            }
            if (props.theme || props.prismjs || props.highlightjs) {
                checkLibrary();
                useTheme.value = props.theme;
                loadTheme();
            }
            if (props.copyText) {
                copyTextValue.value = props.copyText;
            }
            if (props.runText) {
                runTextValue.value = props.runText;
            }
        });
        // -------------------------------------------------- Mounts //
        vue.onBeforeMount(() => {
            copyTextValue.value = props.copyText;
            runTextValue.value = props.runText;
            checkLibrary();
        });
        vue.onMounted(() => {
            useTheme.value = codeBlockGlobalOptions?.theme || props.theme;
            loadTheme();
            mobileCheck();
            renderCode();
        });
        // -------------------------------------------------- Methods //
        function checkLibrary() {
            if (props.prismjs && props.highlightjs) {
                throw new Error('[vue3-code-block]: You cannot have both prismjs and highlightjs props set at the same time.');
            }
            if (props.highlightjs && props.prismPlugin) {
                console.warn('[vue3-code-block]: Highlight.js does not support PrismJS plugins. Unexpected results may occur. Remove the `prism-plugin` prop from the vue3-code-block component.');
            }
        }
        function convertCode() {
            if (props.lang === 'json') {
                const propsCode = props.code.toString();
                convertedCode.value = JSON.stringify(JSON.parse(propsCode), null, props.indent);
                return;
            }
            convertedCode.value = props.code;
            return;
        }
        function convertToUnit(str, unit = 'px') {
            if (str == null || str === '') {
                return undefined;
            }
            else if (!+str) {
                return String(str);
            }
            return `${Number(str)}${unit}`;
        }
        function copyCode() {
            if (copying.value) {
                return;
            }
            copying.value = true;
            navigator.clipboard.writeText(convertedCode.value).then(() => {
                copyTextValue.value = props.copySuccessText;
                copyStatus.value = 'success';
                emit('update:copy-status', copyStatus.value);
            }, (err) => {
                copyTextValue.value = props.copyFailedText;
                copyStatus.value = 'failed';
                emit('update:copy-status', copyStatus.value);
                console.error('Copy to clipboard failed: ', err);
            });
            setTimeout(() => {
                copyTextValue.value = props.copyText;
                copyStatus.value = 'copy';
                emit('update:copy-status', copyStatus.value);
                copying.value = false;
            }, 3000);
        }
        function loadTheme() {
            let selectedTheme = null;
            const activeLibrary = props.highlightjs ? 'highlightjs' : 'prism';
            const head = document.getElementsByTagName('head')[0];
            const themeStyles = document.createElement('style');
            const themeId = `v-code-block--theme-${useTheme.value}-${activeLibrary}`;
            const loadedTheme = document.body.getAttribute('data-v-code-block-theme');
            let isHighlightTheme = true;
            let isPrismTheme = true;
            let cssFilename = '';
            let fetchUrl = '';
            // If theme is loaded, do not keep trying to add it again //
            if (loadedTheme === useTheme.value) {
                return;
            }
            document.body.setAttribute('data-v-code-block-theme', themeId);
            themeStyles.setAttribute('type', 'text/css');
            themeStyles.setAttribute('data-theme-id', themeId);
            themeStyles.setAttribute('data-theme', 'v-code-block--theme-sheet');
            switch (useTheme.value) {
                case 'neon-bunny':
                    selectedTheme = neonBunnyTheme;
                    isPrismTheme = false;
                    isHighlightTheme = false;
                    if (activeLibrary === 'highlightjs') {
                        selectedTheme = neonBunnyHighlightTheme;
                    }
                    break;
                case 'neon-bunny-carrot':
                    selectedTheme = neonBunnyCarrotTheme;
                    isPrismTheme = false;
                    isHighlightTheme = false;
                    if (activeLibrary === 'highlightjs') {
                        selectedTheme = neonBunnyCarrotHighlightTheme;
                    }
                    break;
            }
            if (!isPrismTheme && !isHighlightTheme) {
                removeStylesheets();
                themeStyles.appendChild(document.createTextNode(selectedTheme));
                head.appendChild(themeStyles);
                return;
            }
            switch (activeLibrary) {
                case 'highlightjs':
                    cssFilename = `${useTheme.value}.min.css`;
                    fetchUrl = `${highlightCdn.value}/${cssFilename}`;
                    break;
                case 'prism':
                    cssFilename = `prism-${useTheme.value}.css`;
                    if (useTheme.value === 'default') {
                        cssFilename = `prism.css`;
                    }
                    fetchUrl = `${prismCdn.value}/${cssFilename}`;
                    break;
                default:
                    cssFilename = '';
                    break;
            }
            isLoading.value = true;
            fetch(fetchUrl).then((response) => {
                return response.text();
            })
                .then((data) => {
                removeStylesheets();
                themeStyles.appendChild(document.createTextNode(data));
                head.appendChild(themeStyles);
                isLoading.value = false;
            })
                .catch((error) => {
                const activeLibrary = props.highlightjs ? 'Highlight.js' : 'PrismJS';
                console.error(`${activeLibrary} CDN Error:`, error);
            });
        }
        function mobileCheck() {
            const ua = UAParser();
            const device = ua.device;
            isMobile.value = device.type === 'mobile';
        }
        window.addEventListener('orientationchange', () => {
            mobileCheck();
        });
        function removeStylesheets() {
            const themeSheets = document.querySelectorAll('[data-theme="v-code-block--theme-sheet"]');
            if (themeSheets.length > 0) {
                themeSheets.forEach((themeSheet) => {
                    themeSheet.remove();
                });
            }
        }
        function renderCode() {
            convertCode();
            if (props.highlightjs) {
                Promise.resolve().then(function () { return core; })
                    .then((module) => {
                    hljs = module.default;
                    hljs.registerLanguage('javascript', javascript);
                    hljs.registerLanguage('css', css);
                    hljs.registerLanguage('html', xml);
                    hljs.registerLanguage('plain', plaintext);
                    renderedCode.value = hljs.highlight(convertedCode.value, { language: props.lang }).value;
                })
                    .catch((err) => {
                    console.error('Highlight.js import:', { err });
                });
            }
            if (props.prismjs) {
                import('prismjs').then((result) => {
                    prismModule = result;
                    renderedCode.value = prismModule.highlight(convertedCode.value, prismModule.languages[props.lang], props.lang);
                })
                    .catch((err) => {
                    console.error('PrismJS import:', { err });
                });
            }
        }
        function runCode() {
            emit('run');
        }
        return (_ctx, _cache) => {
            return (vue.openBlock(), vue.createElementBlock("div", {
                class: vue.normalizeClass(["v-code-block v-code-block--mb-5", vue.unref(codeBlockClasses)])
            }, [
                (__props.label || __props.tabs || vue.unref(slots).label || vue.unref(slots).tabs)
                    ? (vue.openBlock(), vue.createElementBlock("div", {
                        key: 0,
                        class: "v-code-block--header",
                        style: vue.normalizeStyle(vue.unref(headerStyles))
                    }, [
                        vue.createElementVNode("div", {
                            class: vue.normalizeClass(["v-code-block--label v-code-block--pb-1", vue.unref(labelClasses)])
                        }, [
                            (vue.unref(slots).label)
                                ? vue.renderSlot(_ctx.$slots, "label", { key: 0 }, undefined, true)
                                : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                                    vue.createTextVNode(vue.toDisplayString(props.label), 1 /* TEXT */)
                                ], 64 /* STABLE_FRAGMENT */))
                        ], 2 /* CLASS */),
                        vue.createElementVNode("div", {
                            class: "v-code-block--tabs",
                            style: vue.normalizeStyle(vue.unref(tabGroupStyle))
                        }, [
                            (vue.unref(slots).tabs)
                                ? vue.renderSlot(_ctx.$slots, "tabs", { key: 0 }, undefined, true)
                                : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                                    vue.createCommentVNode(" ======================================== Copy Code Tab/Button "),
                                    (__props.copyTab && __props.tabs)
                                        ? (vue.openBlock(), vue.createElementBlock("div", {
                                            key: 0,
                                            class: vue.normalizeClass(["v-code-block--tab", vue.unref(tabClasses)]),
                                            onClick: copyCode
                                        }, [
                                            vue.createElementVNode("div", _hoisted_1, [
                                                (__props.copyIcons)
                                                    ? (vue.openBlock(), vue.createBlock(StatusIcons, {
                                                        key: 0,
                                                        class: vue.normalizeClass(["v-code-block--button-copy-icon", vue.unref(iconClasses)]),
                                                        icon: copyStatus.value
                                                    }, null, 8 /* PROPS */, ["class", "icon"]))
                                                    : vue.createCommentVNode("v-if", true),
                                                vue.createTextVNode(" " + vue.toDisplayString(copyTextValue.value), 1 /* TEXT */)
                                            ])
                                        ], 2 /* CLASS */))
                                        : vue.createCommentVNode("v-if", true),
                                    vue.createCommentVNode(" ======================================== Run Tab/Button "),
                                    (__props.runTab && __props.tabs && !isMobile.value)
                                        ? (vue.openBlock(), vue.createElementBlock("div", {
                                            key: 1,
                                            class: vue.normalizeClass(["v-code-block--tab", vue.unref(tabClasses)]),
                                            onClick: runCode
                                        }, [
                                            vue.createElementVNode("div", _hoisted_2, vue.toDisplayString(runTextValue.value), 1 /* TEXT */)
                                        ], 2 /* CLASS */))
                                        : vue.createCommentVNode("v-if", true)
                                ], 64 /* STABLE_FRAGMENT */))
                        ], 4 /* STYLE */)
                    ], 4 /* STYLE */))
                    : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("div", _hoisted_3, [
                    vue.createElementVNode("div", {
                        class: vue.normalizeClass(["v-code-block--code-copy-button", vue.unref(copyButtonClasses)]),
                        onClick: copyCode
                    }, [
                        (vue.unref(slots).copyButton)
                            ? vue.renderSlot(_ctx.$slots, "copyButton", { key: 0 }, undefined, true)
                            : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                                (__props.copyButton)
                                    ? (vue.openBlock(), vue.createBlock(StatusIcons, {
                                        key: 0,
                                        class: vue.normalizeClass(["v-code-block--button-copy-icon", vue.unref(iconClasses)]),
                                        icon: copyStatus.value
                                    }, null, 8 /* PROPS */, ["class", "icon"]))
                                    : vue.createCommentVNode("v-if", true)
                            ], 64 /* STABLE_FRAGMENT */))
                    ], 2 /* CLASS */),
                    vue.createElementVNode("pre", vue.mergeProps(_ctx.$attrs, {
                        class: `language-${props.lang}`,
                        style: vue.unref(preTagStyles)
                    }), [
                        vue.createTextVNode(""),
                        vue.createElementVNode("code", {
                            class: vue.normalizeClass(`language-${props.lang} ${__props.browserWindow ? 'v-code-block--code-browser' : ''} ${__props.highlightjs ? 'hljs' : ''}`),
                            style: vue.normalizeStyle(vue.unref(codeTagStyles)),
                            innerHTML: !__props.prismPlugin ? renderedCode.value : false,
                            textContent: vue.toDisplayString(__props.prismPlugin ? vue.unref(computedCode) : false)
                        }, null, 14 /* CLASS, STYLE, PROPS */, _hoisted_4),
                        vue.createTextVNode("\n\t\t\t")
                    ], 16 /* FULL_PROPS */)
                ])
            ], 2 /* CLASS */));
        };
    }
});

var css_248z$5 = ".v-code-block--mt-1 {\n  margin-top: 0.25rem !important;\n}\n.v-code-block--me-1 {\n  margin-right: 0.25rem !important;\n}\n.v-code-block--mb-1 {\n  margin-bottom: 0.25rem !important;\n}\n.v-code-block--ms-1 {\n  margin-left: 0.25rem !important;\n}\n.v-code-block--pt-1 {\n  padding-top: 0.25rem !important;\n}\n.v-code-block--pe-1 {\n  padding-right: 0.25rem !important;\n}\n.v-code-block--pb-1 {\n  padding-bottom: 0.25rem !important;\n}\n.v-code-block--ps-1 {\n  padding-left: 0.25rem !important;\n}\n.v-code-block--mt-2 {\n  margin-top: 0.5rem !important;\n}\n.v-code-block--me-2 {\n  margin-right: 0.5rem !important;\n}\n.v-code-block--mb-2 {\n  margin-bottom: 0.5rem !important;\n}\n.v-code-block--ms-2 {\n  margin-left: 0.5rem !important;\n}\n.v-code-block--pt-2 {\n  padding-top: 0.5rem !important;\n}\n.v-code-block--pe-2 {\n  padding-right: 0.5rem !important;\n}\n.v-code-block--pb-2 {\n  padding-bottom: 0.5rem !important;\n}\n.v-code-block--ps-2 {\n  padding-left: 0.5rem !important;\n}\n.v-code-block--mt-3 {\n  margin-top: 0.75rem !important;\n}\n.v-code-block--me-3 {\n  margin-right: 0.75rem !important;\n}\n.v-code-block--mb-3 {\n  margin-bottom: 0.75rem !important;\n}\n.v-code-block--ms-3 {\n  margin-left: 0.75rem !important;\n}\n.v-code-block--pt-3 {\n  padding-top: 0.75rem !important;\n}\n.v-code-block--pe-3 {\n  padding-right: 0.75rem !important;\n}\n.v-code-block--pb-3 {\n  padding-bottom: 0.75rem !important;\n}\n.v-code-block--ps-3 {\n  padding-left: 0.75rem !important;\n}\n.v-code-block--mt-4 {\n  margin-top: 1rem !important;\n}\n.v-code-block--me-4 {\n  margin-right: 1rem !important;\n}\n.v-code-block--mb-4 {\n  margin-bottom: 1rem !important;\n}\n.v-code-block--ms-4 {\n  margin-left: 1rem !important;\n}\n.v-code-block--pt-4 {\n  padding-top: 1rem !important;\n}\n.v-code-block--pe-4 {\n  padding-right: 1rem !important;\n}\n.v-code-block--pb-4 {\n  padding-bottom: 1rem !important;\n}\n.v-code-block--ps-4 {\n  padding-left: 1rem !important;\n}\n.v-code-block--mt-5 {\n  margin-top: 1.25rem !important;\n}\n.v-code-block--me-5 {\n  margin-right: 1.25rem !important;\n}\n.v-code-block--mb-5 {\n  margin-bottom: 1.25rem !important;\n}\n.v-code-block--ms-5 {\n  margin-left: 1.25rem !important;\n}\n.v-code-block--pt-5 {\n  padding-top: 1.25rem !important;\n}\n.v-code-block--pe-5 {\n  padding-right: 1.25rem !important;\n}\n.v-code-block--pb-5 {\n  padding-bottom: 1.25rem !important;\n}\n.v-code-block--ps-5 {\n  padding-left: 1.25rem !important;\n}\n\n.v-code-block---label-mobile input,\n.v-code-block---label-mobile select,\n.v-code-block---label-mobile textarea {\n  display: none;\n}";
styleInject(css_248z$5);

var css_248z$4 = ".v-code-block {\n  display: block;\n  max-width: 100%;\n}\n.v-code-block--header {\n  align-items: end;\n  display: flex;\n  justify-content: space-between;\n  overflow: visible;\n  position: relative;\n  width: 100%;\n}\n.v-code-block--label {\n  overflow: auto;\n}\n.v-code-block--tabs {\n  align-items: end;\n  display: flex;\n  justify-content: flex-end;\n}\n.v-code-block--tab {\n  align-items: center;\n  background-color: hsl(var(--v-cb-primary) 0.1);\n  border-radius: 5px 5px 0 0;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  padding: 5px 15px;\n  text-align: center;\n  transition: background-color 0.35s ease;\n  white-space: nowrap;\n  width: fit-content;\n}\n.v-code-block--tab:hover {\n  background-color: hsl(var(--v-cb-primary) 0.2);\n}\n.v-code-block--tab svg {\n  height: 0.85rem;\n  width: 0.85rem;\n}\n.v-code-block--code {\n  position: relative;\n  z-index: 1;\n}\n.v-code-block--code pre {\n  margin-top: 0;\n}\n.v-code-block--code pre[class*=language-] {\n  margin-top: 0;\n}\n.v-code-block--code pre[class*=language-]::before, .v-code-block--code pre[class*=language-]::after {\n  bottom: 0.95em;\n}\n.v-code-block--code pre code {\n  width: 100%;\n}\n.v-code-block--code pre code.hljs {\n  overflow-x: unset;\n}\n.v-code-block--code-browser::before {\n  background-image: url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"54\" height=\"14\" viewBox=\"0 0 54 14\"><g fill=\"none\" fillRule=\"evenodd\" transform=\"translate(1 1)\"><circle cx=\"6\" cy=\"6\" r=\"6\" fill=\"%23FF5F56\" stroke=\"%23E0443E\" strokeWidth=\".5\" /><circle cx=\"26\" cy=\"6\" r=\"6\" fill=\"%23FFBD2E\" stroke=\"%23DEA123\" strokeWidth=\".5\" /><circle cx=\"46\" cy=\"6\" r=\"6\" fill=\"%2327C93F\" stroke=\"%231AAB29\" strokeWidth=\".5\" /></g></svg>');\n  background-position: 0.5em 0.5em;\n  background-repeat: no-repeat;\n  content: \"\";\n  display: block;\n  padding-right: 10em;\n  padding-top: 3rem;\n  width: 100%;\n}\n.v-code-block--code:hover .v-code-block--code-copy-button {\n  opacity: 1;\n}\n.v-code-block--code-copy-button {\n  align-items: center;\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  height: 1.5em;\n  justify-content: center;\n  opacity: 0;\n  position: absolute;\n  right: 0.9rem;\n  top: 0.7rem;\n  transition: opacity 0.2s ease-in-out;\n  width: auto;\n  z-index: 2;\n}\n.v-code-block--code-copy-button:hover {\n  opacity: 1;\n}\n.v-code-block--code-copy-button-persist {\n  opacity: 0.5;\n}\n.v-code-block--code-copy-button svg {\n  height: 1rem;\n  width: 1rem;\n}";
styleInject(css_248z$4);

var CodeBlock = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5d79b278"], ["__file", "src/plugin/CodeBlock.vue"]]);

var css_248z$3 = ":root {\n\n\t/* Blue */\n\t--v-cb-blue: 206, 80%, 39%;\n\t--v-cb-blue-hex: #146eb4;\n\t--v-cb-blue-rgb: 20, 110, 180;\n\t--v-cb-primary: var(--v-cb-blue);\n\t--v-cb-primary-hex: var(--v-cb-blue-hex);\n\t--v-cb-primary-rgb: var(--v-cb-blue-rgb);\n\n\t/* Green */\n\t--v-cb-green: 120, 61%, 34%;\n\t--v-cb-green-hex: #228b22;\n\t--v-cb-green-rgb: 34, 139, 34;\n\t--v-cb-success: var(--v-cb-green);\n\t--v-cb-success-hex: var(--v-cb-green-hex);\n\t--v-cb-success-rgb: var(--v-cb-green-rgb);\n\n\t/* Red */\n\t--v-cb-red: 0, 68%, 42%;\n\t--v-cb-red-hex: #b22222;\n\t--v-cb-red-rgb: 178, 34, 34;\n\t--v-cb-danger: var(--v-cb-red);\n\t--v-cb-danger-hex: var(--v-cb-red-hex);\n\t--v-cb-danger-rgb: var(--v-cb-red-rgb);\n\n\t/* Neon Bunny Colors */\n\n\t/* neon-bunny */\n\t--v-cb-tab-neon-bunny-bkg: 0 0% 0%;\n\t--v-cb-tab-neon-bunny-text: 0 0% 100%;\n\t--v-cb-tab-neon-bunny-icon: 207 100% 52%;\n\t--v-cb-tab-neon-bunny-icon-success: 119 100% 51%;\n\t--v-cb-tab-neon-bunny-icon-failed: 3 100% 58%;\n\n\t/* neon-bunny-carrot */\n\t--v-cb-tab-neon-bunny-carrot-bkg: 0 0% 0%;\n\t--v-cb-tab-neon-bunny-carrot-text: 0 0% 100%;\n\t--v-cb-tab-neon-bunny-carrot-icon: 292 100% 50%;\n\t--v-cb-tab-neon-bunny-carrot-icon-success: 119 100% 51%;\n\t--v-cb-tab-neon-bunny-carrot-icon-failed: 3 100% 58%;\n\n\t/* Prism Colors */\n\n\t/* default */\n\t--v-cb-tab-prism-default-bkg: 24 20% 95%;\n\t--v-cb-tab-prism-default-text: 0 0% 0%;\n\t--v-cb-tab-prism-default-icon: 198 100% 33%;\n\t--v-cb-tab-prism-default-icon-success: 80 100% 30%;\n\t--v-cb-tab-prism-default-icon-failed: 348 68% 58%;\n\n\t/* coy */\n\t--v-cb-tab-prism-coy-bkg: 205 59% 50%;\n\t--v-cb-tab-prism-coy-text: 0 0% 0%;\n\t--v-cb-tab-prism-coy-icon: 195 76% 41%;\n\t--v-cb-tab-prism-coy-icon-success: 80 100% 30%;\n\t--v-cb-tab-prism-coy-icon-failed: 0 64% 48%;\n\n\t/* dark */\n\t--v-cb-tab-prism-dark-bkg: 30 20% 25%;\n\t--v-cb-tab-prism-dark-text: 0 0% 100%;\n\t--v-cb-tab-prism-dark-border: 30 20% 40%;\n\t--v-cb-tab-prism-dark-icon: 40 90% 60%;\n\t--v-cb-tab-prism-dark-icon-success: 75 70% 60%;\n\t--v-cb-tab-prism-dark-icon-failed: 0 100% 50%;\n\n\t/* funky */\n\t--v-cb-tab-prism-funky-bkg: 0 0% 80%;\n\t--v-cb-tab-prism-funky-text: 0 0% 100%;\n\t--v-cb-tab-prism-funky-dark: 0 0% 0%;\n\t--v-cb-tab-prism-funky-icon: 328 100% 54%;\n\t--v-cb-tab-prism-funky-icon-success: 80 61% 50%;\n\t--v-cb-tab-prism-funky-icon-failed: 0 100% 50%;\n\n\t/* okaidia */\n\t--v-cb-tab-prism-okaidia-bkg: 70 8% 15%;\n\t--v-cb-tab-prism-okaidia-text: 0 0% 100%;\n\t--v-cb-tab-prism-okaidia-icon: 190 81% 67%;\n\t--v-cb-tab-prism-okaidia-icon-success: 80 76% 53%;\n\t--v-cb-tab-prism-okaidia-icon-failed: 338 95% 56%;\n\n\t/* solarizedlight */\n\t--v-cb-tab-prism-solarizedlight-bkg: 44 87% 94%;\n\t--v-cb-tab-prism-solarizedlight-text: 196 13% 45%;\n\t--v-cb-tab-prism-solarizedlight-icon: 175 59% 40%;\n\t--v-cb-tab-prism-solarizedlight-icon-success: 68 100% 30%;\n\t--v-cb-tab-prism-solarizedlight-icon-failed: 18 80% 44%;\n\n\t/* tomorrow */\n\t--v-cb-tab-prism-tomorrow-bkg: 0 0% 18%;\n\t--v-cb-tab-prism-tomorrow-text: 0 0% 80%;\n\t--v-cb-tab-prism-tomorrow-icon: 299 34% 70%;\n\t--v-cb-tab-prism-tomorrow-icon-success: 143 39% 64%;\n\t--v-cb-tab-prism-tomorrow-icon-failed: 358 65% 68%;\n\n\t/* twilight */\n\t--v-cb-tab-prism-twilight-bkg: 0 0% 8%;\n\t--v-cb-tab-prism-twilight-text: 0 0% 80%;\n\t--v-cb-tab-prism-twilight-border: 0 0% 33%;\n\t--v-cb-tab-prism-twilight-icon: 53 89% 79%;\n\t--v-cb-tab-prism-twilight-icon-success: 76 21% 52%;\n\t--v-cb-tab-prism-twilight-icon-failed: 14 58% 55%;\n\n\t/* night-owl */\n\t--v-cb-tab-prism-night-owl: 207 95% 8%;\n\t--v-cb-tab-prism-night-owl-text: 217 34% 88%;\n\t--v-cb-tab-prism-night-owl-icon: 169 56% 68%;\n\t--v-cb-tab-prism-night-owl-icon-success: 84 62% 63%;\n\t--v-cb-tab-prism-night-owl-icon-failed: 350 100% 67%;\n}\n";
styleInject(css_248z$3);

var css_248z$2 = ".v-code-block--mt-1 {\n  margin-top: 0.25rem !important;\n}\n.v-code-block--me-1 {\n  margin-right: 0.25rem !important;\n}\n.v-code-block--mb-1 {\n  margin-bottom: 0.25rem !important;\n}\n.v-code-block--ms-1 {\n  margin-left: 0.25rem !important;\n}\n.v-code-block--pt-1 {\n  padding-top: 0.25rem !important;\n}\n.v-code-block--pe-1 {\n  padding-right: 0.25rem !important;\n}\n.v-code-block--pb-1 {\n  padding-bottom: 0.25rem !important;\n}\n.v-code-block--ps-1 {\n  padding-left: 0.25rem !important;\n}\n.v-code-block--mt-2 {\n  margin-top: 0.5rem !important;\n}\n.v-code-block--me-2 {\n  margin-right: 0.5rem !important;\n}\n.v-code-block--mb-2 {\n  margin-bottom: 0.5rem !important;\n}\n.v-code-block--ms-2 {\n  margin-left: 0.5rem !important;\n}\n.v-code-block--pt-2 {\n  padding-top: 0.5rem !important;\n}\n.v-code-block--pe-2 {\n  padding-right: 0.5rem !important;\n}\n.v-code-block--pb-2 {\n  padding-bottom: 0.5rem !important;\n}\n.v-code-block--ps-2 {\n  padding-left: 0.5rem !important;\n}\n.v-code-block--mt-3 {\n  margin-top: 0.75rem !important;\n}\n.v-code-block--me-3 {\n  margin-right: 0.75rem !important;\n}\n.v-code-block--mb-3 {\n  margin-bottom: 0.75rem !important;\n}\n.v-code-block--ms-3 {\n  margin-left: 0.75rem !important;\n}\n.v-code-block--pt-3 {\n  padding-top: 0.75rem !important;\n}\n.v-code-block--pe-3 {\n  padding-right: 0.75rem !important;\n}\n.v-code-block--pb-3 {\n  padding-bottom: 0.75rem !important;\n}\n.v-code-block--ps-3 {\n  padding-left: 0.75rem !important;\n}\n.v-code-block--mt-4 {\n  margin-top: 1rem !important;\n}\n.v-code-block--me-4 {\n  margin-right: 1rem !important;\n}\n.v-code-block--mb-4 {\n  margin-bottom: 1rem !important;\n}\n.v-code-block--ms-4 {\n  margin-left: 1rem !important;\n}\n.v-code-block--pt-4 {\n  padding-top: 1rem !important;\n}\n.v-code-block--pe-4 {\n  padding-right: 1rem !important;\n}\n.v-code-block--pb-4 {\n  padding-bottom: 1rem !important;\n}\n.v-code-block--ps-4 {\n  padding-left: 1rem !important;\n}\n.v-code-block--mt-5 {\n  margin-top: 1.25rem !important;\n}\n.v-code-block--me-5 {\n  margin-right: 1.25rem !important;\n}\n.v-code-block--mb-5 {\n  margin-bottom: 1.25rem !important;\n}\n.v-code-block--ms-5 {\n  margin-left: 1.25rem !important;\n}\n.v-code-block--pt-5 {\n  padding-top: 1.25rem !important;\n}\n.v-code-block--pe-5 {\n  padding-right: 1.25rem !important;\n}\n.v-code-block--pb-5 {\n  padding-bottom: 1.25rem !important;\n}\n.v-code-block--ps-5 {\n  padding-left: 1.25rem !important;\n}";
styleInject(css_248z$2);

var css_248z$1 = ".v-code-block {\n  display: block;\n  max-width: 100%;\n}\n.v-code-block--header {\n  align-items: end;\n  display: flex;\n  justify-content: space-between;\n  overflow: visible;\n  position: relative;\n  width: 100%;\n}\n.v-code-block--label {\n  overflow: auto;\n}\n.v-code-block--tabs {\n  align-items: end;\n  display: flex;\n  justify-content: flex-end;\n}\n.v-code-block--tab {\n  align-items: center;\n  background-color: hsl(var(--v-cb-primary) 0.1);\n  border-radius: 5px 5px 0 0;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  padding: 5px 15px;\n  text-align: center;\n  transition: background-color 0.35s ease;\n  white-space: nowrap;\n  width: fit-content;\n}\n.v-code-block--tab:hover {\n  background-color: hsl(var(--v-cb-primary) 0.2);\n}\n.v-code-block--tab svg {\n  height: 0.85rem;\n  width: 0.85rem;\n}\n.v-code-block--code {\n  position: relative;\n  z-index: 1;\n}\n.v-code-block--code pre {\n  margin-top: 0;\n}\n.v-code-block--code pre[class*=language-] {\n  margin-top: 0;\n}\n.v-code-block--code pre[class*=language-]::before, .v-code-block--code pre[class*=language-]::after {\n  bottom: 0.95em;\n}\n.v-code-block--code pre code {\n  width: 100%;\n}\n.v-code-block--code pre code.hljs {\n  overflow-x: unset;\n}\n.v-code-block--code-browser::before {\n  background-image: url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"54\" height=\"14\" viewBox=\"0 0 54 14\"><g fill=\"none\" fillRule=\"evenodd\" transform=\"translate(1 1)\"><circle cx=\"6\" cy=\"6\" r=\"6\" fill=\"%23FF5F56\" stroke=\"%23E0443E\" strokeWidth=\".5\" /><circle cx=\"26\" cy=\"6\" r=\"6\" fill=\"%23FFBD2E\" stroke=\"%23DEA123\" strokeWidth=\".5\" /><circle cx=\"46\" cy=\"6\" r=\"6\" fill=\"%2327C93F\" stroke=\"%231AAB29\" strokeWidth=\".5\" /></g></svg>');\n  background-position: 0.5em 0.5em;\n  background-repeat: no-repeat;\n  content: \"\";\n  display: block;\n  padding-right: 10em;\n  padding-top: 3rem;\n  width: 100%;\n}\n.v-code-block--code:hover .v-code-block--code-copy-button {\n  opacity: 1;\n}\n.v-code-block--code-copy-button {\n  align-items: center;\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  height: 1.5em;\n  justify-content: center;\n  opacity: 0;\n  position: absolute;\n  right: 0.9rem;\n  top: 0.7rem;\n  transition: opacity 0.2s ease-in-out;\n  width: auto;\n  z-index: 2;\n}\n.v-code-block--code-copy-button:hover {\n  opacity: 1;\n}\n.v-code-block--code-copy-button-persist {\n  opacity: 0.5;\n}\n.v-code-block--code-copy-button svg {\n  height: 1rem;\n  width: 1rem;\n}";
styleInject(css_248z$1);

var css_248z = ".v-code-block--tab-neon-bunny {\n  background-color: hsl(var(--v-cb-tab-neon-bunny-bkg)/100%) !important;\n  color: hsl(var(--v-cb-tab-neon-bunny-text)) !important;\n}\n.v-code-block--tab-neon-bunny:hover {\n  background-color: hsl(var(--v-cb-tab-neon-bunny-bkg)/50%) !important;\n}\n.v-code-block--tab-neon-bunny-icon {\n  color: hsl(var(--v-cb-tab-neon-bunny-icon)) !important;\n  fill: hsl(var(--v-cb-tab-neon-bunny-icon)) !important;\n}\n.v-code-block--tab-neon-bunny-icon-status-success {\n  color: hsl(var(--v-cb-tab-neon-bunny-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-neon-bunny-icon-success)) !important;\n}\n.v-code-block--tab-neon-bunny-icon-status-failed {\n  color: hsl(var(--v-cb-tab-neon-bunny-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-neon-bunny-icon-failed)) !important;\n}\n.v-code-block--tab-neon-bunny > div {\n  color: hsl(var(--v-cb-tab-neon-bunny-text));\n}\n.v-code-block--tab-neon-bunny-carrot {\n  background-color: hsl(var(--v-cb-tab-neon-bunny-carrot-bkg)/100%) !important;\n  color: hsl(var(--v-cb-tab-neon-bunny-carrot-text)) !important;\n}\n.v-code-block--tab-neon-bunny-carrot:hover {\n  background-color: hsl(var(--v-cb-tab-neon-bunny-carrot-bkg)/50%) !important;\n}\n.v-code-block--tab-neon-bunny-carrot-icon {\n  color: hsl(var(--v-cb-tab-neon-bunny-carrot-icon)) !important;\n  fill: hsl(var(--v-cb-tab-neon-bunny-carrot-icon)) !important;\n}\n.v-code-block--tab-neon-bunny-carrot-icon-status-success {\n  color: hsl(var(--v-cb-tab-neon-bunny-carrot-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-neon-bunny-carrot-icon-success)) !important;\n}\n.v-code-block--tab-neon-bunny-carrot-icon-status-failed {\n  color: hsl(var(--v-cb-tab-neon-bunny-carrot-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-neon-bunny-carrot-icon-failed)) !important;\n}\n.v-code-block--tab-neon-bunny-carrot > div {\n  color: hsl(var(--v-cb-tab-neon-bunny-carrot-text));\n}\n.v-code-block--tab-default {\n  background-color: hsl(var(--v-cb-tab-prism-default-bkg)/100%) !important;\n}\n.v-code-block--tab-default:hover {\n  background-color: hsl(var(--v-cb-tab-prism-default-bkg)/50%) !important;\n}\n.v-code-block--tab-default-icon {\n  color: hsl(var(--v-cb-tab-prism-default-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-default-icon)) !important;\n}\n.v-code-block--tab-default-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-default-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-default-icon-success)) !important;\n}\n.v-code-block--tab-default-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-default-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-default-icon-failed)) !important;\n}\n.v-code-block--tab-default > div {\n  color: hsl(var(--v-cb-tab-prism-default-text));\n}\n.v-code-block--tab-coy {\n  background-color: hsl(var(--v-cb-tab-prism-coy-bkg)/10%) !important;\n  border-left: 5px solid hsl(var(--v-cb-tab-prism-coy-bkg));\n  border-radius: 0;\n}\n.v-code-block--tab-coy:hover {\n  background-color: hsl(var(--v-cb-tab-prism-coy-bkg)/20%) !important;\n}\n.v-code-block--tab-coy-icon {\n  color: hsl(var(--v-cb-tab-prism-coy-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-coy-icon)) !important;\n}\n.v-code-block--tab-coy-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-coy-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-coy-icon-success)) !important;\n}\n.v-code-block--tab-coy-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-coy-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-coy-icon-failed)) !important;\n}\n.v-code-block--tab-coy > div {\n  color: hsl(var(--v-cb-tab-prism-coy-text));\n}\n.v-code-block--tab-dark {\n  background-color: hsl(var(--v-cb-tab-prism-dark-bkg)/100%) !important;\n  border-color: hsl(var(--v-cb-tab-prism-dark-border));\n  border-style: solid;\n  border-width: 0.3em 0.3em 0;\n}\n.v-code-block--tab-dark:hover {\n  background-color: hsl(var(--v-cb-tab-prism-dark-border)/50%) !important;\n}\n.v-code-block--tab-dark-icon {\n  color: hsl(var(--v-cb-tab-prism-dark-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-dark-icon)) !important;\n}\n.v-code-block--tab-dark-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-dark-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-dark-icon-success)) !important;\n}\n.v-code-block--tab-dark-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-dark-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-dark-icon-failed)) !important;\n}\n.v-code-block--tab-dark > div {\n  color: hsl(var(--v-cb-tab-prism-dark-text));\n}\n.v-code-block--tab-funky {\n  background: url('data:image/svg+xml;charset=utf-8,<svg%20version%3D\"1.1\"%20xmlns%3D\"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\"%20width%3D\"100\"%20height%3D\"100\"%20fill%3D\"rgba(0%2C0%2C0%2C.2)\">%0D%0A<polygon%20points%3D\"0%2C50%2050%2C0%200%2C0\"%20%2F>%0D%0A<polygon%20points%3D\"0%2C100%2050%2C100%20100%2C50%20100%2C0\"%20%2F>%0D%0A<%2Fsvg>');\n  background-size: 1em 1em;\n}\n.v-code-block--tab-funky:hover {\n  background-color: hsl(var(--v-cb-tab-prism-funky-bkg)) !important;\n}\n.v-code-block--tab-funky-icon {\n  color: hsl(var(--v-cb-tab-prism-funky-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-funky-icon)) !important;\n}\n.v-code-block--tab-funky-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-funky-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-funky-icon-success)) !important;\n}\n.v-code-block--tab-funky-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-funky-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-funky-icon-failed)) !important;\n}\n.v-code-block--tab-funky > div {\n  background-color: hsl(var(--v-cb-tab-prism-funky-dark)) !important;\n  color: hsl(var(--v-cb-tab-prism-funky-text));\n}\n.v-code-block--tab-okaidia {\n  background-color: hsl(var(--v-cb-tab-prism-okaidia-bkg)/100%) !important;\n}\n.v-code-block--tab-okaidia:hover {\n  background-color: hsl(var(--v-cb-tab-prism-okaidia-bkg)/50%) !important;\n}\n.v-code-block--tab-okaidia-icon {\n  color: hsl(var(--v-cb-tab-prism-okaidia-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-okaidia-icon)) !important;\n}\n.v-code-block--tab-okaidia-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-okaidia-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-okaidia-icon-success)) !important;\n}\n.v-code-block--tab-okaidia-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-okaidia-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-okaidia-icon-failed)) !important;\n}\n.v-code-block--tab-okaidia > div {\n  color: hsl(var(--v-cb-tab-prism-okaidia-text));\n}\n.v-code-block--tab-solarizedlight {\n  background-color: hsl(var(--v-cb-tab-prism-solarizedlight-bkg)/100%) !important;\n}\n.v-code-block--tab-solarizedlight:hover {\n  background-color: hsl(var(--v-cb-tab-prism-solarizedlight-bkg)/50%) !important;\n}\n.v-code-block--tab-solarizedlight-icon {\n  color: hsl(var(--v-cb-tab-prism-solarizedlight-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-solarizedlight-icon)) !important;\n}\n.v-code-block--tab-solarizedlight-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-solarizedlight-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-solarizedlight-icon-success)) !important;\n}\n.v-code-block--tab-solarizedlight-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-solarizedlight-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-solarizedlight-icon-failed)) !important;\n}\n.v-code-block--tab-solarizedlight > div {\n  color: hsl(var(--v-cb-tab-prism-solarizedlight-text));\n}\n.v-code-block--tab-tomorrow {\n  background-color: hsl(var(--v-cb-tab-prism-tomorrow-bkg)/100%) !important;\n}\n.v-code-block--tab-tomorrow:hover {\n  background-color: hsl(var(--v-cb-tab-prism-tomorrow-bkg)/50%) !important;\n}\n.v-code-block--tab-tomorrow-icon {\n  color: hsl(var(--v-cb-tab-prism-tomorrow-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-tomorrow-icon)) !important;\n}\n.v-code-block--tab-tomorrow-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-tomorrow-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-tomorrow-icon-success)) !important;\n}\n.v-code-block--tab-tomorrow-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-tomorrow-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-tomorrow-icon-failed)) !important;\n}\n.v-code-block--tab-tomorrow > div {\n  color: hsl(var(--v-cb-tab-prism-tomorrow-text));\n}\n.v-code-block--tab-twilight {\n  background-color: hsl(var(--v-cb-tab-prism-twilight-bkg)/100%) !important;\n  border-color: hsl(var(--v-cb-tab-prism-twilight-border));\n  border-style: solid;\n  border-width: 0.3em 0.3em 0;\n}\n.v-code-block--tab-twilight:hover {\n  background-color: hsl(var(--v-cb-tab-prism-twilight-bkg)/50%) !important;\n}\n.v-code-block--tab-twilight-icon {\n  color: hsl(var(--v-cb-tab-prism-twilight-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-twilight-icon)) !important;\n}\n.v-code-block--tab-twilight-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-twilight-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-twilight-icon-success)) !important;\n}\n.v-code-block--tab-twilight-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-twilight-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-twilight-icon-failed)) !important;\n}\n.v-code-block--tab-twilight > div {\n  color: hsl(var(--v-cb-tab-prism-twilight-text));\n}\n.v-code-block--tab-night-owl {\n  background-color: hsl(var(--v-cb-tab-prism-night-owl) 1) !important;\n}\n.v-code-block--tab-night-owl:hover {\n  background-color: hsl(var(--v-cb-tab-prism-night-owl)/50%) !important;\n}\n.v-code-block--tab-night-owl-icon {\n  color: hsl(var(--v-cb-tab-prism-night-owl-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-night-owl-icon)) !important;\n}\n.v-code-block--tab-night-owl-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-night-owl-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-night-owl-icon-success)) !important;\n}\n.v-code-block--tab-night-owl-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-night-owl-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-night-owl-icon-failed)) !important;\n}\n.v-code-block--tab-night-owl > div {\n  color: hsl(var(--v-cb-tab-prism-night-owl-text));\n}";
styleInject(css_248z);

const install = (app, options) => {
    const codeBlockGlobalOptions = { globalOptions: true, ...options };
    app.provide('codeBlockGlobalOptions', codeBlockGlobalOptions);
    app.component('CodeBlock', CodeBlock);
};
CodeBlock.install = install;

var deepFreezeEs6 = {exports: {}};

function deepFreeze(obj) {
    if (obj instanceof Map) {
        obj.clear = obj.delete = obj.set = function () {
            throw new Error('map is read-only');
        };
    } else if (obj instanceof Set) {
        obj.add = obj.clear = obj.delete = function () {
            throw new Error('set is read-only');
        };
    }

    // Freeze self
    Object.freeze(obj);

    Object.getOwnPropertyNames(obj).forEach(function (name) {
        var prop = obj[name];

        // Freeze prop if it is an object
        if (typeof prop == 'object' && !Object.isFrozen(prop)) {
            deepFreeze(prop);
        }
    });

    return obj;
}

deepFreezeEs6.exports = deepFreeze;
deepFreezeEs6.exports.default = deepFreeze;

/** @typedef {import('highlight.js').CallbackResponse} CallbackResponse */
/** @typedef {import('highlight.js').CompiledMode} CompiledMode */
/** @implements CallbackResponse */

class Response {
  /**
   * @param {CompiledMode} mode
   */
  constructor(mode) {
    // eslint-disable-next-line no-undefined
    if (mode.data === undefined) mode.data = {};

    this.data = mode.data;
    this.isMatchIgnored = false;
  }

  ignoreMatch() {
    this.isMatchIgnored = true;
  }
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeHTML(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

/**
 * performs a shallow merge of multiple objects into one
 *
 * @template T
 * @param {T} original
 * @param {Record<string,any>[]} objects
 * @returns {T} a single new object
 */
function inherit$1(original, ...objects) {
  /** @type Record<string,any> */
  const result = Object.create(null);

  for (const key in original) {
    result[key] = original[key];
  }
  objects.forEach(function(obj) {
    for (const key in obj) {
      result[key] = obj[key];
    }
  });
  return /** @type {T} */ (result);
}

/**
 * @typedef {object} Renderer
 * @property {(text: string) => void} addText
 * @property {(node: Node) => void} openNode
 * @property {(node: Node) => void} closeNode
 * @property {() => string} value
 */

/** @typedef {{scope?: string, language?: string, sublanguage?: boolean}} Node */
/** @typedef {{walk: (r: Renderer) => void}} Tree */
/** */

const SPAN_CLOSE = '</span>';

/**
 * Determines if a node needs to be wrapped in <span>
 *
 * @param {Node} node */
const emitsWrappingTags = (node) => {
  // rarely we can have a sublanguage where language is undefined
  // TODO: track down why
  return !!node.scope || (node.sublanguage && node.language);
};

/**
 *
 * @param {string} name
 * @param {{prefix:string}} options
 */
const scopeToCSSClass = (name, { prefix }) => {
  if (name.includes(".")) {
    const pieces = name.split(".");
    return [
      `${prefix}${pieces.shift()}`,
      ...(pieces.map((x, i) => `${x}${"_".repeat(i + 1)}`))
    ].join(" ");
  }
  return `${prefix}${name}`;
};

/** @type {Renderer} */
class HTMLRenderer {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(parseTree, options) {
    this.buffer = "";
    this.classPrefix = options.classPrefix;
    parseTree.walk(this);
  }

  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(text) {
    this.buffer += escapeHTML(text);
  }

  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(node) {
    if (!emitsWrappingTags(node)) return;

    let className = "";
    if (node.sublanguage) {
      className = `language-${node.language}`;
    } else {
      className = scopeToCSSClass(node.scope, { prefix: this.classPrefix });
    }
    this.span(className);
  }

  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(node) {
    if (!emitsWrappingTags(node)) return;

    this.buffer += SPAN_CLOSE;
  }

  /**
   * returns the accumulated buffer
  */
  value() {
    return this.buffer;
  }

  // helpers

  /**
   * Builds a span element
   *
   * @param {string} className */
  span(className) {
    this.buffer += `<span class="${className}">`;
  }
}

/** @typedef {{scope?: string, language?: string, sublanguage?: boolean, children: Node[]} | string} Node */
/** @typedef {{scope?: string, language?: string, sublanguage?: boolean, children: Node[]} } DataNode */
/** @typedef {import('highlight.js').Emitter} Emitter */
/**  */

/** @returns {DataNode} */
const newNode = (opts = {}) => {
  /** @type DataNode */
  const result = { children: [] };
  Object.assign(result, opts);
  return result;
};

class TokenTree {
  constructor() {
    /** @type DataNode */
    this.rootNode = newNode();
    this.stack = [this.rootNode];
  }

  get top() {
    return this.stack[this.stack.length - 1];
  }

  get root() { return this.rootNode; }

  /** @param {Node} node */
  add(node) {
    this.top.children.push(node);
  }

  /** @param {string} scope */
  openNode(scope) {
    /** @type Node */
    const node = newNode({ scope });
    this.add(node);
    this.stack.push(node);
  }

  closeNode() {
    if (this.stack.length > 1) {
      return this.stack.pop();
    }
    // eslint-disable-next-line no-undefined
    return undefined;
  }

  closeAllNodes() {
    while (this.closeNode());
  }

  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }

  /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */
  walk(builder) {
    // this does not
    return this.constructor._walk(builder, this.rootNode);
    // this works
    // return TokenTree._walk(builder, this.rootNode);
  }

  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
  static _walk(builder, node) {
    if (typeof node === "string") {
      builder.addText(node);
    } else if (node.children) {
      builder.openNode(node);
      node.children.forEach((child) => this._walk(builder, child));
      builder.closeNode(node);
    }
    return builder;
  }

  /**
   * @param {Node} node
   */
  static _collapse(node) {
    if (typeof node === "string") return;
    if (!node.children) return;

    if (node.children.every(el => typeof el === "string")) {
      // node.text = node.children.join("");
      // delete node.children;
      node.children = [node.children.join("")];
    } else {
      node.children.forEach((child) => {
        TokenTree._collapse(child);
      });
    }
  }
}

/**
  Currently this is all private API, but this is the minimal API necessary
  that an Emitter must implement to fully support the parser.

  Minimal interface:

  - addKeyword(text, scope)
  - addText(text)
  - addSublanguage(emitter, subLanguageName)
  - finalize()
  - openNode(scope)
  - closeNode()
  - closeAllNodes()
  - toHTML()

*/

/**
 * @implements {Emitter}
 */
class TokenTreeEmitter extends TokenTree {
  /**
   * @param {*} options
   */
  constructor(options) {
    super();
    this.options = options;
  }

  /**
   * @param {string} text
   * @param {string} scope
   */
  addKeyword(text, scope) {
    if (text === "") { return; }

    this.openNode(scope);
    this.addText(text);
    this.closeNode();
  }

  /**
   * @param {string} text
   */
  addText(text) {
    if (text === "") { return; }

    this.add(text);
  }

  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  addSublanguage(emitter, name) {
    /** @type DataNode */
    const node = emitter.root;
    node.sublanguage = true;
    node.language = name;
    this.add(node);
  }

  toHTML() {
    const renderer = new HTMLRenderer(this, this.options);
    return renderer.value();
  }

  finalize() {
    return true;
  }
}

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function lookahead(re) {
  return concat('(?=', re, ')');
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function anyNumberOfTimes(re) {
  return concat('(?:', re, ')*');
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function optional(re) {
  return concat('(?:', re, ')?');
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/**
 * @param { Array<string | RegExp | Object> } args
 * @returns {object}
 */
function stripOptionsFromArgs(args) {
  const opts = args[args.length - 1];

  if (typeof opts === 'object' && opts.constructor === Object) {
    args.splice(args.length - 1, 1);
    return opts;
  } else {
    return {};
  }
}

/** @typedef { {capture?: boolean} } RegexEitherOptions */

/**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] | [...(RegExp | string)[], RegexEitherOptions]} args
 * @returns {string}
 */
function either(...args) {
  /** @type { object & {capture?: boolean} }  */
  const opts = stripOptionsFromArgs(args);
  const joined = '('
    + (opts.capture ? "" : "?:")
    + args.map((x) => source(x)).join("|") + ")";
  return joined;
}

/**
 * @param {RegExp | string} re
 * @returns {number}
 */
function countMatchGroups(re) {
  return (new RegExp(re.toString() + '|')).exec('').length - 1;
}

/**
 * Does lexeme start with a regular expression match at the beginning
 * @param {RegExp} re
 * @param {string} lexeme
 */
function startsWith(re, lexeme) {
  const match = re && re.exec(lexeme);
  return match && match.index === 0;
}

// BACKREF_RE matches an open parenthesis or backreference. To avoid
// an incorrect parse, it additionally matches the following:
// - [...] elements, where the meaning of parentheses and escapes change
// - other escape sequences, so we do not misparse escape sequences as
//   interesting elements
// - non-matching or lookahead parentheses, which do not capture. These
//   follow the '(' with a '?'.
const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

// **INTERNAL** Not intended for outside usage
// join logically computes regexps.join(separator), but fixes the
// backreferences so they continue to match.
// it also places each individual regular expression into it's own
// match group, keeping track of the sequencing of those match groups
// is currently an exercise for the caller. :-)
/**
 * @param {(string | RegExp)[]} regexps
 * @param {{joinWith: string}} opts
 * @returns {string}
 */
function _rewriteBackreferences(regexps, { joinWith }) {
  let numCaptures = 0;

  return regexps.map((regex) => {
    numCaptures += 1;
    const offset = numCaptures;
    let re = source(regex);
    let out = '';

    while (re.length > 0) {
      const match = BACKREF_RE.exec(re);
      if (!match) {
        out += re;
        break;
      }
      out += re.substring(0, match.index);
      re = re.substring(match.index + match[0].length);
      if (match[0][0] === '\\' && match[1]) {
        // Adjust the backreference.
        out += '\\' + String(Number(match[1]) + offset);
      } else {
        out += match[0];
        if (match[0] === '(') {
          numCaptures++;
        }
      }
    }
    return out;
  }).map(re => `(${re})`).join(joinWith);
}

/** @typedef {import('highlight.js').Mode} Mode */
/** @typedef {import('highlight.js').ModeCallback} ModeCallback */

// Common regexps
const MATCH_NOTHING_RE = /\b\B/;
const IDENT_RE = '[a-zA-Z]\\w*';
const UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
const NUMBER_RE = '\\b\\d+(\\.\\d+)?';
const C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
const BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
const RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

/**
* @param { Partial<Mode> & {binary?: string | RegExp} } opts
*/
const SHEBANG = (opts = {}) => {
  const beginShebang = /^#![ ]*\//;
  if (opts.binary) {
    opts.begin = concat(
      beginShebang,
      /.*\b/,
      opts.binary,
      /\b.*/);
  }
  return inherit$1({
    scope: 'meta',
    begin: beginShebang,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (m, resp) => {
      if (m.index !== 0) resp.ignoreMatch();
    }
  }, opts);
};

// Common modes
const BACKSLASH_ESCAPE = {
  begin: '\\\\[\\s\\S]', relevance: 0
};
const APOS_STRING_MODE = {
  scope: 'string',
  begin: '\'',
  end: '\'',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
};
const QUOTE_STRING_MODE = {
  scope: 'string',
  begin: '"',
  end: '"',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
};
const PHRASAL_WORDS_MODE = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
};
/**
 * Creates a comment mode
 *
 * @param {string | RegExp} begin
 * @param {string | RegExp} end
 * @param {Mode | {}} [modeOptions]
 * @returns {Partial<Mode>}
 */
const COMMENT = function(begin, end, modeOptions = {}) {
  const mode = inherit$1(
    {
      scope: 'comment',
      begin,
      end,
      contains: []
    },
    modeOptions
  );
  mode.contains.push({
    scope: 'doctag',
    // hack to avoid the space from being included. the space is necessary to
    // match here to prevent the plain text rule below from gobbling up doctags
    begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
    excludeBegin: true,
    relevance: 0
  });
  const ENGLISH_WORD = either(
    // list of common 1 and 2 letter words in English
    "I",
    "a",
    "is",
    "so",
    "us",
    "to",
    "at",
    "if",
    "in",
    "it",
    "on",
    // note: this is not an exhaustive list of contractions, just popular ones
    /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, // contractions - can't we'd they're let's, etc
    /[A-Za-z]+[-][a-z]+/, // `no-way`, etc.
    /[A-Za-z][a-z]{2,}/ // allow capitalized words at beginning of sentences
  );
  // looking like plain text, more likely to be a comment
  mode.contains.push(
    {
      // TODO: how to include ", (, ) without breaking grammars that use these for
      // comment delimiters?
      // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
      // ---

      // this tries to find sequences of 3 english words in a row (without any
      // "programming" type syntax) this gives us a strong signal that we've
      // TRULY found a comment - vs perhaps scanning with the wrong language.
      // It's possible to find something that LOOKS like the start of the
      // comment - but then if there is no readable text - good chance it is a
      // false match and not a comment.
      //
      // for a visual example please see:
      // https://github.com/highlightjs/highlight.js/issues/2827

      begin: concat(
        /[ ]+/, // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
        '(',
        ENGLISH_WORD,
        /[.]?[:]?([.][ ]|[ ])/,
        '){3}') // look for 3 words in a row
    }
  );
  return mode;
};
const C_LINE_COMMENT_MODE = COMMENT('//', '$');
const C_BLOCK_COMMENT_MODE = COMMENT('/\\*', '\\*/');
const HASH_COMMENT_MODE = COMMENT('#', '$');
const NUMBER_MODE = {
  scope: 'number',
  begin: NUMBER_RE,
  relevance: 0
};
const C_NUMBER_MODE = {
  scope: 'number',
  begin: C_NUMBER_RE,
  relevance: 0
};
const BINARY_NUMBER_MODE = {
  scope: 'number',
  begin: BINARY_NUMBER_RE,
  relevance: 0
};
const REGEXP_MODE = {
  // this outer rule makes sure we actually have a WHOLE regex and not simply
  // an expression such as:
  //
  //     3 / something
  //
  // (which will then blow up when regex's `illegal` sees the newline)
  begin: /(?=\/[^/\n]*\/)/,
  contains: [{
    scope: 'regexp',
    begin: /\//,
    end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      BACKSLASH_ESCAPE,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [BACKSLASH_ESCAPE]
      }
    ]
  }]
};
const TITLE_MODE = {
  scope: 'title',
  begin: IDENT_RE,
  relevance: 0
};
const UNDERSCORE_TITLE_MODE = {
  scope: 'title',
  begin: UNDERSCORE_IDENT_RE,
  relevance: 0
};
const METHOD_GUARD = {
  // excludes method names from keyword processing
  begin: '\\.\\s*' + UNDERSCORE_IDENT_RE,
  relevance: 0
};

/**
 * Adds end same as begin mechanics to a mode
 *
 * Your mode must include at least a single () match group as that first match
 * group is what is used for comparison
 * @param {Partial<Mode>} mode
 */
const END_SAME_AS_BEGIN = function(mode) {
  return Object.assign(mode,
    {
      /** @type {ModeCallback} */
      'on:begin': (m, resp) => { resp.data._beginMatch = m[1]; },
      /** @type {ModeCallback} */
      'on:end': (m, resp) => { if (resp.data._beginMatch !== m[1]) resp.ignoreMatch(); }
    });
};

var MODES = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: MATCH_NOTHING_RE,
    IDENT_RE: IDENT_RE,
    UNDERSCORE_IDENT_RE: UNDERSCORE_IDENT_RE,
    NUMBER_RE: NUMBER_RE,
    C_NUMBER_RE: C_NUMBER_RE,
    BINARY_NUMBER_RE: BINARY_NUMBER_RE,
    RE_STARTERS_RE: RE_STARTERS_RE,
    SHEBANG: SHEBANG,
    BACKSLASH_ESCAPE: BACKSLASH_ESCAPE,
    APOS_STRING_MODE: APOS_STRING_MODE,
    QUOTE_STRING_MODE: QUOTE_STRING_MODE,
    PHRASAL_WORDS_MODE: PHRASAL_WORDS_MODE,
    COMMENT: COMMENT,
    C_LINE_COMMENT_MODE: C_LINE_COMMENT_MODE,
    C_BLOCK_COMMENT_MODE: C_BLOCK_COMMENT_MODE,
    HASH_COMMENT_MODE: HASH_COMMENT_MODE,
    NUMBER_MODE: NUMBER_MODE,
    C_NUMBER_MODE: C_NUMBER_MODE,
    BINARY_NUMBER_MODE: BINARY_NUMBER_MODE,
    REGEXP_MODE: REGEXP_MODE,
    TITLE_MODE: TITLE_MODE,
    UNDERSCORE_TITLE_MODE: UNDERSCORE_TITLE_MODE,
    METHOD_GUARD: METHOD_GUARD,
    END_SAME_AS_BEGIN: END_SAME_AS_BEGIN
});

/**
@typedef {import('highlight.js').CallbackResponse} CallbackResponse
@typedef {import('highlight.js').CompilerExt} CompilerExt
*/

// Grammar extensions / plugins
// See: https://github.com/highlightjs/highlight.js/issues/2833

// Grammar extensions allow "syntactic sugar" to be added to the grammar modes
// without requiring any underlying changes to the compiler internals.

// `compileMatch` being the perfect small example of now allowing a grammar
// author to write `match` when they desire to match a single expression rather
// than being forced to use `begin`.  The extension then just moves `match` into
// `begin` when it runs.  Ie, no features have been added, but we've just made
// the experience of writing (and reading grammars) a little bit nicer.

// ------

// TODO: We need negative look-behind support to do this properly
/**
 * Skip a match if it has a preceding dot
 *
 * This is used for `beginKeywords` to prevent matching expressions such as
 * `bob.keyword.do()`. The mode compiler automatically wires this up as a
 * special _internal_ 'on:begin' callback for modes with `beginKeywords`
 * @param {RegExpMatchArray} match
 * @param {CallbackResponse} response
 */
function skipIfHasPrecedingDot(match, response) {
  const before = match.input[match.index - 1];
  if (before === ".") {
    response.ignoreMatch();
  }
}

/**
 *
 * @type {CompilerExt}
 */
function scopeClassName(mode, _parent) {
  // eslint-disable-next-line no-undefined
  if (mode.className !== undefined) {
    mode.scope = mode.className;
    delete mode.className;
  }
}

/**
 * `beginKeywords` syntactic sugar
 * @type {CompilerExt}
 */
function beginKeywords(mode, parent) {
  if (!parent) return;
  if (!mode.beginKeywords) return;

  // for languages with keywords that include non-word characters checking for
  // a word boundary is not sufficient, so instead we check for a word boundary
  // or whitespace - this does no harm in any case since our keyword engine
  // doesn't allow spaces in keywords anyways and we still check for the boundary
  // first
  mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)';
  mode.__beforeBegin = skipIfHasPrecedingDot;
  mode.keywords = mode.keywords || mode.beginKeywords;
  delete mode.beginKeywords;

  // prevents double relevance, the keywords themselves provide
  // relevance, the mode doesn't need to double it
  // eslint-disable-next-line no-undefined
  if (mode.relevance === undefined) mode.relevance = 0;
}

/**
 * Allow `illegal` to contain an array of illegal values
 * @type {CompilerExt}
 */
function compileIllegal(mode, _parent) {
  if (!Array.isArray(mode.illegal)) return;

  mode.illegal = either(...mode.illegal);
}

/**
 * `match` to match a single expression for readability
 * @type {CompilerExt}
 */
function compileMatch(mode, _parent) {
  if (!mode.match) return;
  if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");

  mode.begin = mode.match;
  delete mode.match;
}

/**
 * provides the default 1 relevance to all modes
 * @type {CompilerExt}
 */
function compileRelevance(mode, _parent) {
  // eslint-disable-next-line no-undefined
  if (mode.relevance === undefined) mode.relevance = 1;
}

// allow beforeMatch to act as a "qualifier" for the match
// the full match begin must be [beforeMatch][begin]
const beforeMatchExt = (mode, parent) => {
  if (!mode.beforeMatch) return;
  // starts conflicts with endsParent which we need to make sure the child
  // rule is not matched multiple times
  if (mode.starts) throw new Error("beforeMatch cannot be used with starts");

  const originalMode = Object.assign({}, mode);
  Object.keys(mode).forEach((key) => { delete mode[key]; });

  mode.keywords = originalMode.keywords;
  mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
  mode.starts = {
    relevance: 0,
    contains: [
      Object.assign(originalMode, { endsParent: true })
    ]
  };
  mode.relevance = 0;

  delete originalMode.beforeMatch;
};

// keywords that should have no default relevance value
const COMMON_KEYWORDS = [
  'of',
  'and',
  'for',
  'in',
  'not',
  'or',
  'if',
  'then',
  'parent', // common variable name
  'list', // common variable name
  'value' // common variable name
];

const DEFAULT_KEYWORD_SCOPE = "keyword";

/**
 * Given raw keywords from a language definition, compile them.
 *
 * @param {string | Record<string,string|string[]> | Array<string>} rawKeywords
 * @param {boolean} caseInsensitive
 */
function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
  /** @type {import("highlight.js/private").KeywordDict} */
  const compiledKeywords = Object.create(null);

  // input can be a string of keywords, an array of keywords, or a object with
  // named keys representing scopeName (which can then point to a string or array)
  if (typeof rawKeywords === 'string') {
    compileList(scopeName, rawKeywords.split(" "));
  } else if (Array.isArray(rawKeywords)) {
    compileList(scopeName, rawKeywords);
  } else {
    Object.keys(rawKeywords).forEach(function(scopeName) {
      // collapse all our objects back into the parent object
      Object.assign(
        compiledKeywords,
        compileKeywords(rawKeywords[scopeName], caseInsensitive, scopeName)
      );
    });
  }
  return compiledKeywords;

  // ---

  /**
   * Compiles an individual list of keywords
   *
   * Ex: "for if when while|5"
   *
   * @param {string} scopeName
   * @param {Array<string>} keywordList
   */
  function compileList(scopeName, keywordList) {
    if (caseInsensitive) {
      keywordList = keywordList.map(x => x.toLowerCase());
    }
    keywordList.forEach(function(keyword) {
      const pair = keyword.split('|');
      compiledKeywords[pair[0]] = [scopeName, scoreForKeyword(pair[0], pair[1])];
    });
  }
}

/**
 * Returns the proper score for a given keyword
 *
 * Also takes into account comment keywords, which will be scored 0 UNLESS
 * another score has been manually assigned.
 * @param {string} keyword
 * @param {string} [providedScore]
 */
function scoreForKeyword(keyword, providedScore) {
  // manual scores always win over common keywords
  // so you can force a score of 1 if you really insist
  if (providedScore) {
    return Number(providedScore);
  }

  return commonKeyword(keyword) ? 0 : 1;
}

/**
 * Determines if a given keyword is common or not
 *
 * @param {string} keyword */
function commonKeyword(keyword) {
  return COMMON_KEYWORDS.includes(keyword.toLowerCase());
}

/*

For the reasoning behind this please see:
https://github.com/highlightjs/highlight.js/issues/2880#issuecomment-747275419

*/

/**
 * @type {Record<string, boolean>}
 */
const seenDeprecations = {};

/**
 * @param {string} message
 */
const error = (message) => {
  console.error(message);
};

/**
 * @param {string} message
 * @param {any} args
 */
const warn = (message, ...args) => {
  console.log(`WARN: ${message}`, ...args);
};

/**
 * @param {string} version
 * @param {string} message
 */
const deprecated = (version, message) => {
  if (seenDeprecations[`${version}/${message}`]) return;

  console.log(`Deprecated as of ${version}. ${message}`);
  seenDeprecations[`${version}/${message}`] = true;
};

/* eslint-disable no-throw-literal */

/**
@typedef {import('highlight.js').CompiledMode} CompiledMode
*/

const MultiClassError = new Error();

/**
 * Renumbers labeled scope names to account for additional inner match
 * groups that otherwise would break everything.
 *
 * Lets say we 3 match scopes:
 *
 *   { 1 => ..., 2 => ..., 3 => ... }
 *
 * So what we need is a clean match like this:
 *
 *   (a)(b)(c) => [ "a", "b", "c" ]
 *
 * But this falls apart with inner match groups:
 *
 * (a)(((b)))(c) => ["a", "b", "b", "b", "c" ]
 *
 * Our scopes are now "out of alignment" and we're repeating `b` 3 times.
 * What needs to happen is the numbers are remapped:
 *
 *   { 1 => ..., 2 => ..., 5 => ... }
 *
 * We also need to know that the ONLY groups that should be output
 * are 1, 2, and 5.  This function handles this behavior.
 *
 * @param {CompiledMode} mode
 * @param {Array<RegExp | string>} regexes
 * @param {{key: "beginScope"|"endScope"}} opts
 */
function remapScopeNames(mode, regexes, { key }) {
  let offset = 0;
  const scopeNames = mode[key];
  /** @type Record<number,boolean> */
  const emit = {};
  /** @type Record<number,string> */
  const positions = {};

  for (let i = 1; i <= regexes.length; i++) {
    positions[i + offset] = scopeNames[i];
    emit[i + offset] = true;
    offset += countMatchGroups(regexes[i - 1]);
  }
  // we use _emit to keep track of which match groups are "top-level" to avoid double
  // output from inside match groups
  mode[key] = positions;
  mode[key]._emit = emit;
  mode[key]._multi = true;
}

/**
 * @param {CompiledMode} mode
 */
function beginMultiClass(mode) {
  if (!Array.isArray(mode.begin)) return;

  if (mode.skip || mode.excludeBegin || mode.returnBegin) {
    error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
    throw MultiClassError;
  }

  if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
    error("beginScope must be object");
    throw MultiClassError;
  }

  remapScopeNames(mode, mode.begin, { key: "beginScope" });
  mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
}

/**
 * @param {CompiledMode} mode
 */
function endMultiClass(mode) {
  if (!Array.isArray(mode.end)) return;

  if (mode.skip || mode.excludeEnd || mode.returnEnd) {
    error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
    throw MultiClassError;
  }

  if (typeof mode.endScope !== "object" || mode.endScope === null) {
    error("endScope must be object");
    throw MultiClassError;
  }

  remapScopeNames(mode, mode.end, { key: "endScope" });
  mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
}

/**
 * this exists only to allow `scope: {}` to be used beside `match:`
 * Otherwise `beginScope` would necessary and that would look weird

  {
    match: [ /def/, /\w+/ ]
    scope: { 1: "keyword" , 2: "title" }
  }

 * @param {CompiledMode} mode
 */
function scopeSugar(mode) {
  if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
    mode.beginScope = mode.scope;
    delete mode.scope;
  }
}

/**
 * @param {CompiledMode} mode
 */
function MultiClass(mode) {
  scopeSugar(mode);

  if (typeof mode.beginScope === "string") {
    mode.beginScope = { _wrap: mode.beginScope };
  }
  if (typeof mode.endScope === "string") {
    mode.endScope = { _wrap: mode.endScope };
  }

  beginMultiClass(mode);
  endMultiClass(mode);
}

/**
@typedef {import('highlight.js').Mode} Mode
@typedef {import('highlight.js').CompiledMode} CompiledMode
@typedef {import('highlight.js').Language} Language
@typedef {import('highlight.js').HLJSPlugin} HLJSPlugin
@typedef {import('highlight.js').CompiledLanguage} CompiledLanguage
*/

// compilation

/**
 * Compiles a language definition result
 *
 * Given the raw result of a language definition (Language), compiles this so
 * that it is ready for highlighting code.
 * @param {Language} language
 * @returns {CompiledLanguage}
 */
function compileLanguage(language) {
  /**
   * Builds a regex with the case sensitivity of the current language
   *
   * @param {RegExp | string} value
   * @param {boolean} [global]
   */
  function langRe(value, global) {
    return new RegExp(
      source(value),
      'm'
      + (language.case_insensitive ? 'i' : '')
      + (language.unicodeRegex ? 'u' : '')
      + (global ? 'g' : '')
    );
  }

  /**
    Stores multiple regular expressions and allows you to quickly search for
    them all in a string simultaneously - returning the first match.  It does
    this by creating a huge (a|b|c) regex - each individual item wrapped with ()
    and joined by `|` - using match groups to track position.  When a match is
    found checking which position in the array has content allows us to figure
    out which of the original regexes / match groups triggered the match.

    The match object itself (the result of `Regex.exec`) is returned but also
    enhanced by merging in any meta-data that was registered with the regex.
    This is how we keep track of which mode matched, and what type of rule
    (`illegal`, `begin`, end, etc).
  */
  class MultiRegex {
    constructor() {
      this.matchIndexes = {};
      // @ts-ignore
      this.regexes = [];
      this.matchAt = 1;
      this.position = 0;
    }

    // @ts-ignore
    addRule(re, opts) {
      opts.position = this.position++;
      // @ts-ignore
      this.matchIndexes[this.matchAt] = opts;
      this.regexes.push([opts, re]);
      this.matchAt += countMatchGroups(re) + 1;
    }

    compile() {
      if (this.regexes.length === 0) {
        // avoids the need to check length every time exec is called
        // @ts-ignore
        this.exec = () => null;
      }
      const terminators = this.regexes.map(el => el[1]);
      this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: '|' }), true);
      this.lastIndex = 0;
    }

    /** @param {string} s */
    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex;
      const match = this.matcherRe.exec(s);
      if (!match) { return null; }

      // eslint-disable-next-line no-undefined
      const i = match.findIndex((el, i) => i > 0 && el !== undefined);
      // @ts-ignore
      const matchData = this.matchIndexes[i];
      // trim off any earlier non-relevant match groups (ie, the other regex
      // match groups that make up the multi-matcher)
      match.splice(0, i);

      return Object.assign(match, matchData);
    }
  }

  /*
    Created to solve the key deficiently with MultiRegex - there is no way to
    test for multiple matches at a single location.  Why would we need to do
    that?  In the future a more dynamic engine will allow certain matches to be
    ignored.  An example: if we matched say the 3rd regex in a large group but
    decided to ignore it - we'd need to started testing again at the 4th
    regex... but MultiRegex itself gives us no real way to do that.

    So what this class creates MultiRegexs on the fly for whatever search
    position they are needed.

    NOTE: These additional MultiRegex objects are created dynamically.  For most
    grammars most of the time we will never actually need anything more than the
    first MultiRegex - so this shouldn't have too much overhead.

    Say this is our search group, and we match regex3, but wish to ignore it.

      regex1 | regex2 | regex3 | regex4 | regex5    ' ie, startAt = 0

    What we need is a new MultiRegex that only includes the remaining
    possibilities:

      regex4 | regex5                               ' ie, startAt = 3

    This class wraps all that complexity up in a simple API... `startAt` decides
    where in the array of expressions to start doing the matching. It
    auto-increments, so if a match is found at position 2, then startAt will be
    set to 3.  If the end is reached startAt will return to 0.

    MOST of the time the parser will be setting startAt manually to 0.
  */
  class ResumableMultiRegex {
    constructor() {
      // @ts-ignore
      this.rules = [];
      // @ts-ignore
      this.multiRegexes = [];
      this.count = 0;

      this.lastIndex = 0;
      this.regexIndex = 0;
    }

    // @ts-ignore
    getMatcher(index) {
      if (this.multiRegexes[index]) return this.multiRegexes[index];

      const matcher = new MultiRegex();
      this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
      matcher.compile();
      this.multiRegexes[index] = matcher;
      return matcher;
    }

    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }

    considerAll() {
      this.regexIndex = 0;
    }

    // @ts-ignore
    addRule(re, opts) {
      this.rules.push([re, opts]);
      if (opts.type === "begin") this.count++;
    }

    /** @param {string} s */
    exec(s) {
      const m = this.getMatcher(this.regexIndex);
      m.lastIndex = this.lastIndex;
      let result = m.exec(s);

      // The following is because we have no easy way to say "resume scanning at the
      // existing position but also skip the current rule ONLY". What happens is
      // all prior rules are also skipped which can result in matching the wrong
      // thing. Example of matching "booger":

      // our matcher is [string, "booger", number]
      //
      // ....booger....

      // if "booger" is ignored then we'd really need a regex to scan from the
      // SAME position for only: [string, number] but ignoring "booger" (if it
      // was the first match), a simple resume would scan ahead who knows how
      // far looking only for "number", ignoring potential string matches (or
      // future "booger" matches that might be valid.)

      // So what we do: We execute two matchers, one resuming at the same
      // position, but the second full matcher starting at the position after:

      //     /--- resume first regex match here (for [number])
      //     |/---- full match here for [string, "booger", number]
      //     vv
      // ....booger....

      // Which ever results in a match first is then used. So this 3-4 step
      // process essentially allows us to say "match at this position, excluding
      // a prior rule that was ignored".
      //
      // 1. Match "booger" first, ignore. Also proves that [string] does non match.
      // 2. Resume matching for [number]
      // 3. Match at index + 1 for [string, "booger", number]
      // 4. If #2 and #3 result in matches, which came first?
      if (this.resumingScanAtSamePosition()) {
        if (result && result.index === this.lastIndex) ; else { // use the second matcher result
          const m2 = this.getMatcher(0);
          m2.lastIndex = this.lastIndex + 1;
          result = m2.exec(s);
        }
      }

      if (result) {
        this.regexIndex += result.position + 1;
        if (this.regexIndex === this.count) {
          // wrap-around to considering all matches again
          this.considerAll();
        }
      }

      return result;
    }
  }

  /**
   * Given a mode, builds a huge ResumableMultiRegex that can be used to walk
   * the content and find matches.
   *
   * @param {CompiledMode} mode
   * @returns {ResumableMultiRegex}
   */
  function buildModeRegex(mode) {
    const mm = new ResumableMultiRegex();

    mode.contains.forEach(term => mm.addRule(term.begin, { rule: term, type: "begin" }));

    if (mode.terminatorEnd) {
      mm.addRule(mode.terminatorEnd, { type: "end" });
    }
    if (mode.illegal) {
      mm.addRule(mode.illegal, { type: "illegal" });
    }

    return mm;
  }

  /** skip vs abort vs ignore
   *
   * @skip   - The mode is still entered and exited normally (and contains rules apply),
   *           but all content is held and added to the parent buffer rather than being
   *           output when the mode ends.  Mostly used with `sublanguage` to build up
   *           a single large buffer than can be parsed by sublanguage.
   *
   *             - The mode begin ands ends normally.
   *             - Content matched is added to the parent mode buffer.
   *             - The parser cursor is moved forward normally.
   *
   * @abort  - A hack placeholder until we have ignore.  Aborts the mode (as if it
   *           never matched) but DOES NOT continue to match subsequent `contains`
   *           modes.  Abort is bad/suboptimal because it can result in modes
   *           farther down not getting applied because an earlier rule eats the
   *           content but then aborts.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is added to the mode buffer.
   *             - The parser cursor is moved forward accordingly.
   *
   * @ignore - Ignores the mode (as if it never matched) and continues to match any
   *           subsequent `contains` modes.  Ignore isn't technically possible with
   *           the current parser implementation.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is ignored.
   *             - The parser cursor is not moved forward.
   */

  /**
   * Compiles an individual mode
   *
   * This can raise an error if the mode contains certain detectable known logic
   * issues.
   * @param {Mode} mode
   * @param {CompiledMode | null} [parent]
   * @returns {CompiledMode | never}
   */
  function compileMode(mode, parent) {
    const cmode = /** @type CompiledMode */ (mode);
    if (mode.isCompiled) return cmode;

    [
      scopeClassName,
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      compileMatch,
      MultiClass,
      beforeMatchExt
    ].forEach(ext => ext(mode, parent));

    language.compilerExtensions.forEach(ext => ext(mode, parent));

    // __beforeBegin is considered private API, internal use only
    mode.__beforeBegin = null;

    [
      beginKeywords,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      compileIllegal,
      // default to 1 relevance if not specified
      compileRelevance
    ].forEach(ext => ext(mode, parent));

    mode.isCompiled = true;

    let keywordPattern = null;
    if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
      // we need a copy because keywords might be compiled multiple times
      // so we can't go deleting $pattern from the original on the first
      // pass
      mode.keywords = Object.assign({}, mode.keywords);
      keywordPattern = mode.keywords.$pattern;
      delete mode.keywords.$pattern;
    }
    keywordPattern = keywordPattern || /\w+/;

    if (mode.keywords) {
      mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
    }

    cmode.keywordPatternRe = langRe(keywordPattern, true);

    if (parent) {
      if (!mode.begin) mode.begin = /\B|\b/;
      cmode.beginRe = langRe(cmode.begin);
      if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
      if (mode.end) cmode.endRe = langRe(cmode.end);
      cmode.terminatorEnd = source(cmode.end) || '';
      if (mode.endsWithParent && parent.terminatorEnd) {
        cmode.terminatorEnd += (mode.end ? '|' : '') + parent.terminatorEnd;
      }
    }
    if (mode.illegal) cmode.illegalRe = langRe(/** @type {RegExp | string} */ (mode.illegal));
    if (!mode.contains) mode.contains = [];

    mode.contains = [].concat(...mode.contains.map(function(c) {
      return expandOrCloneMode(c === 'self' ? mode : c);
    }));
    mode.contains.forEach(function(c) { compileMode(/** @type Mode */ (c), cmode); });

    if (mode.starts) {
      compileMode(mode.starts, parent);
    }

    cmode.matcher = buildModeRegex(cmode);
    return cmode;
  }

  if (!language.compilerExtensions) language.compilerExtensions = [];

  // self is not valid at the top-level
  if (language.contains && language.contains.includes('self')) {
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  }

  // we need a null object, which inherit will guarantee
  language.classNameAliases = inherit$1(language.classNameAliases || {});

  return compileMode(/** @type Mode */ (language));
}

/**
 * Determines if a mode has a dependency on it's parent or not
 *
 * If a mode does have a parent dependency then often we need to clone it if
 * it's used in multiple places so that each copy points to the correct parent,
 * where-as modes without a parent can often safely be re-used at the bottom of
 * a mode chain.
 *
 * @param {Mode | null} mode
 * @returns {boolean} - is there a dependency on the parent?
 * */
function dependencyOnParent(mode) {
  if (!mode) return false;

  return mode.endsWithParent || dependencyOnParent(mode.starts);
}

/**
 * Expands a mode or clones it if necessary
 *
 * This is necessary for modes with parental dependenceis (see notes on
 * `dependencyOnParent`) and for nodes that have `variants` - which must then be
 * exploded into their own individual modes at compile time.
 *
 * @param {Mode} mode
 * @returns {Mode | Mode[]}
 * */
function expandOrCloneMode(mode) {
  if (mode.variants && !mode.cachedVariants) {
    mode.cachedVariants = mode.variants.map(function(variant) {
      return inherit$1(mode, { variants: null }, variant);
    });
  }

  // EXPAND
  // if we have variants then essentially "replace" the mode with the variants
  // this happens in compileMode, where this function is called from
  if (mode.cachedVariants) {
    return mode.cachedVariants;
  }

  // CLONE
  // if we have dependencies on parents then we need a unique
  // instance of ourselves, so we can be reused with many
  // different parents without issue
  if (dependencyOnParent(mode)) {
    return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
  }

  if (Object.isFrozen(mode)) {
    return inherit$1(mode);
  }

  // no special dependency issues, just return ourselves
  return mode;
}

var version = "11.7.0";

class HTMLInjectionError extends Error {
  constructor(reason, html) {
    super(reason);
    this.name = "HTMLInjectionError";
    this.html = html;
  }
}

/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

/**
@typedef {import('highlight.js').Mode} Mode
@typedef {import('highlight.js').CompiledMode} CompiledMode
@typedef {import('highlight.js').CompiledScope} CompiledScope
@typedef {import('highlight.js').Language} Language
@typedef {import('highlight.js').HLJSApi} HLJSApi
@typedef {import('highlight.js').HLJSPlugin} HLJSPlugin
@typedef {import('highlight.js').PluginEvent} PluginEvent
@typedef {import('highlight.js').HLJSOptions} HLJSOptions
@typedef {import('highlight.js').LanguageFn} LanguageFn
@typedef {import('highlight.js').HighlightedHTMLElement} HighlightedHTMLElement
@typedef {import('highlight.js').BeforeHighlightContext} BeforeHighlightContext
@typedef {import('highlight.js/private').MatchType} MatchType
@typedef {import('highlight.js/private').KeywordData} KeywordData
@typedef {import('highlight.js/private').EnhancedMatch} EnhancedMatch
@typedef {import('highlight.js/private').AnnotatedError} AnnotatedError
@typedef {import('highlight.js').AutoHighlightResult} AutoHighlightResult
@typedef {import('highlight.js').HighlightOptions} HighlightOptions
@typedef {import('highlight.js').HighlightResult} HighlightResult
*/


const escape = escapeHTML;
const inherit = inherit$1;
const NO_MATCH = Symbol("nomatch");
const MAX_KEYWORD_HITS = 7;

/**
 * @param {any} hljs - object that is extended (legacy)
 * @returns {HLJSApi}
 */
const HLJS = function(hljs) {
  // Global internal variables used within the highlight.js library.
  /** @type {Record<string, Language>} */
  const languages = Object.create(null);
  /** @type {Record<string, string>} */
  const aliases = Object.create(null);
  /** @type {HLJSPlugin[]} */
  const plugins = [];

  // safe/production mode - swallows more errors, tries to keep running
  // even if a single syntax or parse hits a fatal error
  let SAFE_MODE = true;
  const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
  /** @type {Language} */
  const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: 'Plain text', contains: [] };

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  /** @type HLJSOptions */
  let options = {
    ignoreUnescapedHTML: false,
    throwUnescapedHTML: false,
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: 'hljs-',
    cssSelector: 'pre code',
    languages: null,
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
    __emitter: TokenTreeEmitter
  };

  /* Utility functions */

  /**
   * Tests a language name to see if highlighting should be skipped
   * @param {string} languageName
   */
  function shouldNotHighlight(languageName) {
    return options.noHighlightRe.test(languageName);
  }

  /**
   * @param {HighlightedHTMLElement} block - the HTML element to determine language for
   */
  function blockLanguage(block) {
    let classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    const match = options.languageDetectRe.exec(classes);
    if (match) {
      const language = getLanguage(match[1]);
      if (!language) {
        warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
        warn("Falling back to no-highlight mode for this block.", block);
      }
      return language ? match[1] : 'no-highlight';
    }

    return classes
      .split(/\s+/)
      .find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
  }

  /**
   * Core highlighting function.
   *
   * OLD API
   * highlight(lang, code, ignoreIllegals, continuation)
   *
   * NEW API
   * highlight(code, {lang, ignoreIllegals})
   *
   * @param {string} codeOrLanguageName - the language to use for highlighting
   * @param {string | HighlightOptions} optionsOrCode - the code to highlight
   * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   *
   * @returns {HighlightResult} Result - an object that represents the result
   * @property {string} language - the language name
   * @property {number} relevance - the relevance score
   * @property {string} value - the highlighted HTML code
   * @property {string} code - the original raw code
   * @property {CompiledMode} top - top of the current mode stack
   * @property {boolean} illegal - indicates whether any illegal matches were found
  */
  function highlight(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
    let code = "";
    let languageName = "";
    if (typeof optionsOrCode === "object") {
      code = codeOrLanguageName;
      ignoreIllegals = optionsOrCode.ignoreIllegals;
      languageName = optionsOrCode.language;
    } else {
      // old API
      deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
      deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
      languageName = codeOrLanguageName;
      code = optionsOrCode;
    }

    // https://github.com/highlightjs/highlight.js/issues/3149
    // eslint-disable-next-line no-undefined
    if (ignoreIllegals === undefined) { ignoreIllegals = true; }

    /** @type {BeforeHighlightContext} */
    const context = {
      code,
      language: languageName
    };
    // the plugin can change the desired language or the code to be highlighted
    // just be changing the object it was passed
    fire("before:highlight", context);

    // a before plugin can usurp the result completely by providing it's own
    // in which case we don't even need to call highlight
    const result = context.result
      ? context.result
      : _highlight(context.language, context.code, ignoreIllegals);

    result.code = context.code;
    // the plugin can change anything in result to suite it
    fire("after:highlight", result);

    return result;
  }

  /**
   * private highlight that's used internally and does not fire callbacks
   *
   * @param {string} languageName - the language to use for highlighting
   * @param {string} codeToHighlight - the code to highlight
   * @param {boolean?} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   * @param {CompiledMode?} [continuation] - current continuation mode, if any
   * @returns {HighlightResult} - result of the highlight operation
  */
  function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
    const keywordHits = Object.create(null);

    /**
     * Return keyword data if a match is a keyword
     * @param {CompiledMode} mode - current mode
     * @param {string} matchText - the textual match
     * @returns {KeywordData | false}
     */
    function keywordData(mode, matchText) {
      return mode.keywords[matchText];
    }

    function processKeywords() {
      if (!top.keywords) {
        emitter.addText(modeBuffer);
        return;
      }

      let lastIndex = 0;
      top.keywordPatternRe.lastIndex = 0;
      let match = top.keywordPatternRe.exec(modeBuffer);
      let buf = "";

      while (match) {
        buf += modeBuffer.substring(lastIndex, match.index);
        const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
        const data = keywordData(top, word);
        if (data) {
          const [kind, keywordRelevance] = data;
          emitter.addText(buf);
          buf = "";

          keywordHits[word] = (keywordHits[word] || 0) + 1;
          if (keywordHits[word] <= MAX_KEYWORD_HITS) relevance += keywordRelevance;
          if (kind.startsWith("_")) {
            // _ implied for relevance only, do not highlight
            // by applying a class name
            buf += match[0];
          } else {
            const cssClass = language.classNameAliases[kind] || kind;
            emitter.addKeyword(match[0], cssClass);
          }
        } else {
          buf += match[0];
        }
        lastIndex = top.keywordPatternRe.lastIndex;
        match = top.keywordPatternRe.exec(modeBuffer);
      }
      buf += modeBuffer.substring(lastIndex);
      emitter.addText(buf);
    }

    function processSubLanguage() {
      if (modeBuffer === "") return;
      /** @type HighlightResult */
      let result = null;

      if (typeof top.subLanguage === 'string') {
        if (!languages[top.subLanguage]) {
          emitter.addText(modeBuffer);
          return;
        }
        result = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
        continuations[top.subLanguage] = /** @type {CompiledMode} */ (result._top);
      } else {
        result = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
      }

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Use case in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      emitter.addSublanguage(result._emitter, result.language);
    }

    function processBuffer() {
      if (top.subLanguage != null) {
        processSubLanguage();
      } else {
        processKeywords();
      }
      modeBuffer = '';
    }

    /**
     * @param {CompiledScope} scope
     * @param {RegExpMatchArray} match
     */
    function emitMultiClass(scope, match) {
      let i = 1;
      const max = match.length - 1;
      while (i <= max) {
        if (!scope._emit[i]) { i++; continue; }
        const klass = language.classNameAliases[scope[i]] || scope[i];
        const text = match[i];
        if (klass) {
          emitter.addKeyword(text, klass);
        } else {
          modeBuffer = text;
          processKeywords();
          modeBuffer = "";
        }
        i++;
      }
    }

    /**
     * @param {CompiledMode} mode - new mode to start
     * @param {RegExpMatchArray} match
     */
    function startNewMode(mode, match) {
      if (mode.scope && typeof mode.scope === "string") {
        emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
      }
      if (mode.beginScope) {
        // beginScope just wraps the begin match itself in a scope
        if (mode.beginScope._wrap) {
          emitter.addKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
          modeBuffer = "";
        } else if (mode.beginScope._multi) {
          // at this point modeBuffer should just be the match
          emitMultiClass(mode.beginScope, match);
          modeBuffer = "";
        }
      }

      top = Object.create(mode, { parent: { value: top } });
      return top;
    }

    /**
     * @param {CompiledMode } mode - the mode to potentially end
     * @param {RegExpMatchArray} match - the latest match
     * @param {string} matchPlusRemainder - match plus remainder of content
     * @returns {CompiledMode | void} - the next mode, or if void continue on in current mode
     */
    function endOfMode(mode, match, matchPlusRemainder) {
      let matched = startsWith(mode.endRe, matchPlusRemainder);

      if (matched) {
        if (mode["on:end"]) {
          const resp = new Response(mode);
          mode["on:end"](match, resp);
          if (resp.isMatchIgnored) matched = false;
        }

        if (matched) {
          while (mode.endsParent && mode.parent) {
            mode = mode.parent;
          }
          return mode;
        }
      }
      // even if on:end fires an `ignore` it's still possible
      // that we might trigger the end node because of a parent mode
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, match, matchPlusRemainder);
      }
    }

    /**
     * Handle matching but then ignoring a sequence of text
     *
     * @param {string} lexeme - string containing full match text
     */
    function doIgnore(lexeme) {
      if (top.matcher.regexIndex === 0) {
        // no more regexes to potentially match here, so we move the cursor forward one
        // space
        modeBuffer += lexeme[0];
        return 1;
      } else {
        // no need to move the cursor, we still have additional regexes to try and
        // match at this very spot
        resumeScanAtSamePosition = true;
        return 0;
      }
    }

    /**
     * Handle the start of a new potential mode match
     *
     * @param {EnhancedMatch} match - the current match
     * @returns {number} how far to advance the parse cursor
     */
    function doBeginMatch(match) {
      const lexeme = match[0];
      const newMode = match.rule;

      const resp = new Response(newMode);
      // first internal before callbacks, then the public ones
      const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
      for (const cb of beforeCallbacks) {
        if (!cb) continue;
        cb(match, resp);
        if (resp.isMatchIgnored) return doIgnore(lexeme);
      }

      if (newMode.skip) {
        modeBuffer += lexeme;
      } else {
        if (newMode.excludeBegin) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (!newMode.returnBegin && !newMode.excludeBegin) {
          modeBuffer = lexeme;
        }
      }
      startNewMode(newMode, match);
      return newMode.returnBegin ? 0 : lexeme.length;
    }

    /**
     * Handle the potential end of mode
     *
     * @param {RegExpMatchArray} match - the current match
     */
    function doEndMatch(match) {
      const lexeme = match[0];
      const matchPlusRemainder = codeToHighlight.substring(match.index);

      const endMode = endOfMode(top, match, matchPlusRemainder);
      if (!endMode) { return NO_MATCH; }

      const origin = top;
      if (top.endScope && top.endScope._wrap) {
        processBuffer();
        emitter.addKeyword(lexeme, top.endScope._wrap);
      } else if (top.endScope && top.endScope._multi) {
        processBuffer();
        emitMultiClass(top.endScope, match);
      } else if (origin.skip) {
        modeBuffer += lexeme;
      } else {
        if (!(origin.returnEnd || origin.excludeEnd)) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (origin.excludeEnd) {
          modeBuffer = lexeme;
        }
      }
      do {
        if (top.scope) {
          emitter.closeNode();
        }
        if (!top.skip && !top.subLanguage) {
          relevance += top.relevance;
        }
        top = top.parent;
      } while (top !== endMode.parent);
      if (endMode.starts) {
        startNewMode(endMode.starts, match);
      }
      return origin.returnEnd ? 0 : lexeme.length;
    }

    function processContinuations() {
      const list = [];
      for (let current = top; current !== language; current = current.parent) {
        if (current.scope) {
          list.unshift(current.scope);
        }
      }
      list.forEach(item => emitter.openNode(item));
    }

    /** @type {{type?: MatchType, index?: number, rule?: Mode}}} */
    let lastMatch = {};

    /**
     *  Process an individual match
     *
     * @param {string} textBeforeMatch - text preceding the match (since the last match)
     * @param {EnhancedMatch} [match] - the match itself
     */
    function processLexeme(textBeforeMatch, match) {
      const lexeme = match && match[0];

      // add non-matched text to the current mode buffer
      modeBuffer += textBeforeMatch;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      // we've found a 0 width match and we're stuck, so we need to advance
      // this happens when we have badly behaved rules that have optional matchers to the degree that
      // sometimes they can end up matching nothing at all
      // Ref: https://github.com/highlightjs/highlight.js/issues/2140
      if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
        // spit the "skipped" character that our regex choked on back into the output sequence
        modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
        if (!SAFE_MODE) {
          /** @type {AnnotatedError} */
          const err = new Error(`0 width match regex (${languageName})`);
          err.languageName = languageName;
          err.badRule = lastMatch.rule;
          throw err;
        }
        return 1;
      }
      lastMatch = match;

      if (match.type === "begin") {
        return doBeginMatch(match);
      } else if (match.type === "illegal" && !ignoreIllegals) {
        // illegal match, we do not continue processing
        /** @type {AnnotatedError} */
        const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || '<unnamed>') + '"');
        err.mode = top;
        throw err;
      } else if (match.type === "end") {
        const processed = doEndMatch(match);
        if (processed !== NO_MATCH) {
          return processed;
        }
      }

      // edge case for when illegal matches $ (end of line) which is technically
      // a 0 width match but not a begin/end match so it's not caught by the
      // first handler (when ignoreIllegals is true)
      if (match.type === "illegal" && lexeme === "") {
        // advance so we aren't stuck in an infinite loop
        return 1;
      }

      // infinite loops are BAD, this is a last ditch catch all. if we have a
      // decent number of iterations yet our index (cursor position in our
      // parsing) still 3x behind our index then something is very wrong
      // so we bail
      if (iterations > 100000 && iterations > match.index * 3) {
        const err = new Error('potential infinite loop, way more iterations than matches');
        throw err;
      }

      /*
      Why might be find ourselves here?  An potential end match that was
      triggered but could not be completed.  IE, `doEndMatch` returned NO_MATCH.
      (this could be because a callback requests the match be ignored, etc)

      This causes no real harm other than stopping a few times too many.
      */

      modeBuffer += lexeme;
      return lexeme.length;
    }

    const language = getLanguage(languageName);
    if (!language) {
      error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
      throw new Error('Unknown language: "' + languageName + '"');
    }

    const md = compileLanguage(language);
    let result = '';
    /** @type {CompiledMode} */
    let top = continuation || md;
    /** @type Record<string,CompiledMode> */
    const continuations = {}; // keep continuations for sub-languages
    const emitter = new options.__emitter(options);
    processContinuations();
    let modeBuffer = '';
    let relevance = 0;
    let index = 0;
    let iterations = 0;
    let resumeScanAtSamePosition = false;

    try {
      top.matcher.considerAll();

      for (;;) {
        iterations++;
        if (resumeScanAtSamePosition) {
          // only regexes not matched previously will now be
          // considered for a potential match
          resumeScanAtSamePosition = false;
        } else {
          top.matcher.considerAll();
        }
        top.matcher.lastIndex = index;

        const match = top.matcher.exec(codeToHighlight);
        // console.log("match", match[0], match.rule && match.rule.begin)

        if (!match) break;

        const beforeMatch = codeToHighlight.substring(index, match.index);
        const processedCount = processLexeme(beforeMatch, match);
        index = match.index + processedCount;
      }
      processLexeme(codeToHighlight.substring(index));
      emitter.closeAllNodes();
      emitter.finalize();
      result = emitter.toHTML();

      return {
        language: languageName,
        value: result,
        relevance: relevance,
        illegal: false,
        _emitter: emitter,
        _top: top
      };
    } catch (err) {
      if (err.message && err.message.includes('Illegal')) {
        return {
          language: languageName,
          value: escape(codeToHighlight),
          illegal: true,
          relevance: 0,
          _illegalBy: {
            message: err.message,
            index: index,
            context: codeToHighlight.slice(index - 100, index + 100),
            mode: err.mode,
            resultSoFar: result
          },
          _emitter: emitter
        };
      } else if (SAFE_MODE) {
        return {
          language: languageName,
          value: escape(codeToHighlight),
          illegal: false,
          relevance: 0,
          errorRaised: err,
          _emitter: emitter,
          _top: top
        };
      } else {
        throw err;
      }
    }
  }

  /**
   * returns a valid highlight result, without actually doing any actual work,
   * auto highlight starts with this and it's possible for small snippets that
   * auto-detection may not find a better match
   * @param {string} code
   * @returns {HighlightResult}
   */
  function justTextHighlightResult(code) {
    const result = {
      value: escape(code),
      illegal: false,
      relevance: 0,
      _top: PLAINTEXT_LANGUAGE,
      _emitter: new options.__emitter(options)
    };
    result._emitter.addText(code);
    return result;
  }

  /**
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - secondBest (object with the same structure for second-best heuristically
    detected language, may be absent)

    @param {string} code
    @param {Array<string>} [languageSubset]
    @returns {AutoHighlightResult}
  */
  function highlightAuto(code, languageSubset) {
    languageSubset = languageSubset || options.languages || Object.keys(languages);
    const plaintext = justTextHighlightResult(code);

    const results = languageSubset.filter(getLanguage).filter(autoDetection).map(name =>
      _highlight(name, code, false)
    );
    results.unshift(plaintext); // plaintext is always an option

    const sorted = results.sort((a, b) => {
      // sort base on relevance
      if (a.relevance !== b.relevance) return b.relevance - a.relevance;

      // always award the tie to the base language
      // ie if C++ and Arduino are tied, it's more likely to be C++
      if (a.language && b.language) {
        if (getLanguage(a.language).supersetOf === b.language) {
          return 1;
        } else if (getLanguage(b.language).supersetOf === a.language) {
          return -1;
        }
      }

      // otherwise say they are equal, which has the effect of sorting on
      // relevance while preserving the original ordering - which is how ties
      // have historically been settled, ie the language that comes first always
      // wins in the case of a tie
      return 0;
    });

    const [best, secondBest] = sorted;

    /** @type {AutoHighlightResult} */
    const result = best;
    result.secondBest = secondBest;

    return result;
  }

  /**
   * Builds new class name for block given the language name
   *
   * @param {HTMLElement} element
   * @param {string} [currentLang]
   * @param {string} [resultLang]
   */
  function updateClassName(element, currentLang, resultLang) {
    const language = (currentLang && aliases[currentLang]) || resultLang;

    element.classList.add("hljs");
    element.classList.add(`language-${language}`);
  }

  /**
   * Applies highlighting to a DOM node containing code.
   *
   * @param {HighlightedHTMLElement} element - the HTML element to highlight
  */
  function highlightElement(element) {
    /** @type HTMLElement */
    let node = null;
    const language = blockLanguage(element);

    if (shouldNotHighlight(language)) return;

    fire("before:highlightElement",
      { el: element, language: language });

    // we should be all text, no child nodes (unescaped HTML) - this is possibly
    // an HTML injection attack - it's likely too late if this is already in
    // production (the code has likely already done its damage by the time
    // we're seeing it)... but we yell loudly about this so that hopefully it's
    // more likely to be caught in development before making it to production
    if (element.children.length > 0) {
      if (!options.ignoreUnescapedHTML) {
        console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
        console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
        console.warn("The element with unescaped HTML:");
        console.warn(element);
      }
      if (options.throwUnescapedHTML) {
        const err = new HTMLInjectionError(
          "One of your code blocks includes unescaped HTML.",
          element.innerHTML
        );
        throw err;
      }
    }

    node = element;
    const text = node.textContent;
    const result = language ? highlight(text, { language, ignoreIllegals: true }) : highlightAuto(text);

    element.innerHTML = result.value;
    updateClassName(element, language, result.language);
    element.result = {
      language: result.language,
      // TODO: remove with version 11.0
      re: result.relevance,
      relevance: result.relevance
    };
    if (result.secondBest) {
      element.secondBest = {
        language: result.secondBest.language,
        relevance: result.secondBest.relevance
      };
    }

    fire("after:highlightElement", { el: element, result, text });
  }

  /**
   * Updates highlight.js global options with the passed options
   *
   * @param {Partial<HLJSOptions>} userOptions
   */
  function configure(userOptions) {
    options = inherit(options, userOptions);
  }

  // TODO: remove v12, deprecated
  const initHighlighting = () => {
    highlightAll();
    deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  };

  // TODO: remove v12, deprecated
  function initHighlightingOnLoad() {
    highlightAll();
    deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }

  let wantsHighlight = false;

  /**
   * auto-highlights all pre>code elements on the page
   */
  function highlightAll() {
    // if we are called too early in the loading process
    if (document.readyState === "loading") {
      wantsHighlight = true;
      return;
    }

    const blocks = document.querySelectorAll(options.cssSelector);
    blocks.forEach(highlightElement);
  }

  function boot() {
    // if a highlight was requested before DOM was loaded, do now
    if (wantsHighlight) highlightAll();
  }

  // make sure we are in the browser environment
  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('DOMContentLoaded', boot, false);
  }

  /**
   * Register a language grammar module
   *
   * @param {string} languageName
   * @param {LanguageFn} languageDefinition
   */
  function registerLanguage(languageName, languageDefinition) {
    let lang = null;
    try {
      lang = languageDefinition(hljs);
    } catch (error$1) {
      error("Language definition for '{}' could not be registered.".replace("{}", languageName));
      // hard or soft error
      if (!SAFE_MODE) { throw error$1; } else { error(error$1); }
      // languages that have serious errors are replaced with essentially a
      // "plaintext" stand-in so that the code blocks will still get normal
      // css classes applied to them - and one bad language won't break the
      // entire highlighter
      lang = PLAINTEXT_LANGUAGE;
    }
    // give it a temporary name if it doesn't have one in the meta-data
    if (!lang.name) lang.name = languageName;
    languages[languageName] = lang;
    lang.rawDefinition = languageDefinition.bind(null, hljs);

    if (lang.aliases) {
      registerAliases(lang.aliases, { languageName });
    }
  }

  /**
   * Remove a language grammar module
   *
   * @param {string} languageName
   */
  function unregisterLanguage(languageName) {
    delete languages[languageName];
    for (const alias of Object.keys(aliases)) {
      if (aliases[alias] === languageName) {
        delete aliases[alias];
      }
    }
  }

  /**
   * @returns {string[]} List of language internal names
   */
  function listLanguages() {
    return Object.keys(languages);
  }

  /**
   * @param {string} name - name of the language to retrieve
   * @returns {Language | undefined}
   */
  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  /**
   *
   * @param {string|string[]} aliasList - single alias or list of aliases
   * @param {{languageName: string}} opts
   */
  function registerAliases(aliasList, { languageName }) {
    if (typeof aliasList === 'string') {
      aliasList = [aliasList];
    }
    aliasList.forEach(alias => { aliases[alias.toLowerCase()] = languageName; });
  }

  /**
   * Determines if a given language has auto-detection enabled
   * @param {string} name - name of the language
   */
  function autoDetection(name) {
    const lang = getLanguage(name);
    return lang && !lang.disableAutodetect;
  }

  /**
   * Upgrades the old highlightBlock plugins to the new
   * highlightElement API
   * @param {HLJSPlugin} plugin
   */
  function upgradePluginAPI(plugin) {
    // TODO: remove with v12
    if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
      plugin["before:highlightElement"] = (data) => {
        plugin["before:highlightBlock"](
          Object.assign({ block: data.el }, data)
        );
      };
    }
    if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
      plugin["after:highlightElement"] = (data) => {
        plugin["after:highlightBlock"](
          Object.assign({ block: data.el }, data)
        );
      };
    }
  }

  /**
   * @param {HLJSPlugin} plugin
   */
  function addPlugin(plugin) {
    upgradePluginAPI(plugin);
    plugins.push(plugin);
  }

  /**
   *
   * @param {PluginEvent} event
   * @param {any} args
   */
  function fire(event, args) {
    const cb = event;
    plugins.forEach(function(plugin) {
      if (plugin[cb]) {
        plugin[cb](args);
      }
    });
  }

  /**
   * DEPRECATED
   * @param {HighlightedHTMLElement} el
   */
  function deprecateHighlightBlock(el) {
    deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
    deprecated("10.7.0", "Please use highlightElement now.");

    return highlightElement(el);
  }

  /* Interface definition */
  Object.assign(hljs, {
    highlight,
    highlightAuto,
    highlightAll,
    highlightElement,
    // TODO: Remove with v12 API
    highlightBlock: deprecateHighlightBlock,
    configure,
    initHighlighting,
    initHighlightingOnLoad,
    registerLanguage,
    unregisterLanguage,
    listLanguages,
    getLanguage,
    registerAliases,
    autoDetection,
    inherit,
    addPlugin
  });

  hljs.debugMode = function() { SAFE_MODE = false; };
  hljs.safeMode = function() { SAFE_MODE = true; };
  hljs.versionString = version;

  hljs.regex = {
    concat: concat,
    lookahead: lookahead,
    either: either,
    optional: optional,
    anyNumberOfTimes: anyNumberOfTimes
  };

  for (const key in MODES) {
    // @ts-ignore
    if (typeof MODES[key] === "object") {
      // @ts-ignore
      deepFreezeEs6.exports(MODES[key]);
    }
  }

  // merge all the modes/regexes into our main object
  Object.assign(hljs, MODES);

  return hljs;
};

// export an "instance" of the highlighter
var highlight = HLJS({});

var core$1 = highlight;
highlight.HighlightJS = highlight;
highlight.default = highlight;

var HighlightJS = core$1;

// https://nodejs.org/api/packages.html#packages_writing_dual_packages_while_avoiding_or_minimizing_hazards

var core = /*#__PURE__*/Object.freeze({
  __proto__: null,
  HighlightJS: HighlightJS,
  default: HighlightJS
});

exports.default = CodeBlock;
