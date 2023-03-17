/**
 * @name vue3-code-block
 * @version 1.0.7-beta.0
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
var Prism = require('prismjs');
var UAParser = require('ua-parser-js');

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

var css_248z$3 = ".v-code-block--tab-neon-bunny {\n  background-color: hsl(var(--v-cb-tab-neon-bunny-bkg) 1) !important;\n  color: hsl(var(--v-cb-tab-neon-bunny-text)) !important;\n}\n.v-code-block--tab-neon-bunny:hover {\n  background-color: hsl(var(--v-cb-tab-neon-bunny-bkg) 0.5) !important;\n}\n.v-code-block--tab-neon-bunny-icon {\n  color: hsl(var(--v-cb-tab-neon-bunny-icon)) !important;\n  fill: hsl(var(--v-cb-tab-neon-bunny-icon)) !important;\n}\n.v-code-block--tab-neon-bunny-icon-status-success {\n  color: hsl(var(--v-cb-tab-neon-bunny-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-neon-bunny-icon-success)) !important;\n}\n.v-code-block--tab-neon-bunny-icon-status-failed {\n  color: hsl(var(--v-cb-tab-neon-bunny-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-neon-bunny-icon-failed)) !important;\n}\n.v-code-block--tab-neon-bunny > div {\n  color: hsl(var(--v-cb-tab-neon-bunny-text));\n}\n.v-code-block--tab-neon-bunny-carrot {\n  background-color: hsl(var(--v-cb-tab-neon-bunny-carrot-bkg) 1) !important;\n  color: hsl(var(--v-cb-tab-neon-bunny-carrot-text)) !important;\n}\n.v-code-block--tab-neon-bunny-carrot:hover {\n  background-color: hsl(var(--v-cb-tab-neon-bunny-carrot-bkg) 0.5) !important;\n}\n.v-code-block--tab-neon-bunny-carrot-icon {\n  color: hsl(var(--v-cb-tab-neon-bunny-carrot-icon)) !important;\n  fill: hsl(var(--v-cb-tab-neon-bunny-carrot-icon)) !important;\n}\n.v-code-block--tab-neon-bunny-carrot-icon-status-success {\n  color: hsl(var(--v-cb-tab-neon-bunny-carrot-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-neon-bunny-carrot-icon-success)) !important;\n}\n.v-code-block--tab-neon-bunny-carrot-icon-status-failed {\n  color: hsl(var(--v-cb-tab-neon-bunny-carrot-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-neon-bunny-carrot-icon-failed)) !important;\n}\n.v-code-block--tab-neon-bunny-carrot > div {\n  color: hsl(var(--v-cb-tab-neon-bunny-carrot-text));\n}\n.v-code-block--tab-default {\n  background-color: hsl(var(--v-cb-tab-prism-default-bkg) 1) !important;\n}\n.v-code-block--tab-default:hover {\n  background-color: hsl(var(--v-cb-tab-prism-default-bkg) 0.5) !important;\n}\n.v-code-block--tab-default-icon {\n  color: hsl(var(--v-cb-tab-prism-default-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-default-icon)) !important;\n}\n.v-code-block--tab-default-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-default-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-default-icon-success)) !important;\n}\n.v-code-block--tab-default-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-default-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-default-icon-failed)) !important;\n}\n.v-code-block--tab-default > div {\n  color: hsl(var(--v-cb-tab-prism-default-text));\n}\n.v-code-block--tab-coy {\n  background-color: hsl(var(--v-cb-tab-prism-coy-bkg) 0.1) !important;\n  border-left: 5px solid hsl(var(--v-cb-tab-prism-coy-bkg));\n  border-radius: 0;\n}\n.v-code-block--tab-coy:hover {\n  background-color: hsl(var(--v-cb-tab-prism-coy-bkg) 0.2) !important;\n}\n.v-code-block--tab-coy-icon {\n  color: hsl(var(--v-cb-tab-prism-coy-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-coy-icon)) !important;\n}\n.v-code-block--tab-coy-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-coy-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-coy-icon-success)) !important;\n}\n.v-code-block--tab-coy-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-coy-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-coy-icon-failed)) !important;\n}\n.v-code-block--tab-coy > div {\n  color: hsl(var(--v-cb-tab-prism-coy-text));\n}\n.v-code-block--tab-dark {\n  background-color: hsl(var(--v-cb-tab-prism-dark-bkg) 1) !important;\n  border-color: hsl(var(--v-cb-tab-prism-dark-border));\n  border-style: solid;\n  border-width: 0.3em 0.3em 0;\n}\n.v-code-block--tab-dark:hover {\n  background-color: hsl(var(--v-cb-tab-prism-dark-border) 0.5) !important;\n}\n.v-code-block--tab-dark-icon {\n  color: hsl(var(--v-cb-tab-prism-dark-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-dark-icon)) !important;\n}\n.v-code-block--tab-dark-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-dark-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-dark-icon-success)) !important;\n}\n.v-code-block--tab-dark-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-dark-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-dark-icon-failed)) !important;\n}\n.v-code-block--tab-dark > div {\n  color: hsl(var(--v-cb-tab-prism-dark-text));\n}\n.v-code-block--tab-funky {\n  background: url('data:image/svg+xml;charset=utf-8,<svg%20version%3D\"1.1\"%20xmlns%3D\"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\"%20width%3D\"100\"%20height%3D\"100\"%20fill%3D\"rgba(0%2C0%2C0%2C.2)\">%0D%0A<polygon%20points%3D\"0%2C50%2050%2C0%200%2C0\"%20%2F>%0D%0A<polygon%20points%3D\"0%2C100%2050%2C100%20100%2C50%20100%2C0\"%20%2F>%0D%0A<%2Fsvg>');\n  background-size: 1em 1em;\n}\n.v-code-block--tab-funky:hover {\n  background-color: hsl(var(--v-cb-tab-prism-funky-bkg)) !important;\n}\n.v-code-block--tab-funky-icon {\n  color: hsl(var(--v-cb-tab-prism-funky-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-funky-icon)) !important;\n}\n.v-code-block--tab-funky-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-funky-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-funky-icon-success)) !important;\n}\n.v-code-block--tab-funky-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-funky-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-funky-icon-failed)) !important;\n}\n.v-code-block--tab-funky > div {\n  background-color: hsl(var(--v-cb-tab-prism-funky-dark)) !important;\n  color: hsl(var(--v-cb-tab-prism-funky-text));\n}\n.v-code-block--tab-okaidia {\n  background-color: hsl(var(--v-cb-tab-prism-okaidia-bkg) 1) !important;\n}\n.v-code-block--tab-okaidia:hover {\n  background-color: hsl(var(--v-cb-tab-prism-okaidia-bkg) 0.5) !important;\n}\n.v-code-block--tab-okaidia-icon {\n  color: hsl(var(--v-cb-tab-prism-okaidia-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-okaidia-icon)) !important;\n}\n.v-code-block--tab-okaidia-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-okaidia-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-okaidia-icon-success)) !important;\n}\n.v-code-block--tab-okaidia-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-okaidia-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-okaidia-icon-failed)) !important;\n}\n.v-code-block--tab-okaidia > div {\n  color: hsl(var(--v-cb-tab-prism-okaidia-text));\n}\n.v-code-block--tab-solarizedlight {\n  background-color: hsl(var(--v-cb-tab-prism-solarizedlight-bkg) 1) !important;\n}\n.v-code-block--tab-solarizedlight:hover {\n  background-color: hsl(var(--v-cb-tab-prism-solarizedlight-bkg) 0.5) !important;\n}\n.v-code-block--tab-solarizedlight-icon {\n  color: hsl(var(--v-cb-tab-prism-solarizedlight-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-solarizedlight-icon)) !important;\n}\n.v-code-block--tab-solarizedlight-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-solarizedlight-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-solarizedlight-icon-success)) !important;\n}\n.v-code-block--tab-solarizedlight-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-solarizedlight-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-solarizedlight-icon-failed)) !important;\n}\n.v-code-block--tab-solarizedlight > div {\n  color: hsl(var(--v-cb-tab-prism-solarizedlight-text));\n}\n.v-code-block--tab-tomorrow {\n  background-color: hsl(var(--v-cb-tab-prism-tomorrow-bkg) 1) !important;\n}\n.v-code-block--tab-tomorrow:hover {\n  background-color: hsl(var(--v-cb-tab-prism-tomorrow-bkg) 0.5) !important;\n}\n.v-code-block--tab-tomorrow-icon {\n  color: hsl(var(--v-cb-tab-prism-tomorrow-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-tomorrow-icon)) !important;\n}\n.v-code-block--tab-tomorrow-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-tomorrow-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-tomorrow-icon-success)) !important;\n}\n.v-code-block--tab-tomorrow-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-tomorrow-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-tomorrow-icon-failed)) !important;\n}\n.v-code-block--tab-tomorrow > div {\n  color: hsl(var(--v-cb-tab-prism-tomorrow-text));\n}\n.v-code-block--tab-twilight {\n  background-color: hsl(var(--v-cb-tab-prism-twilight-bkg) 1) !important;\n  border-color: hsl(var(--v-cb-tab-prism-twilight-border));\n  border-style: solid;\n  border-width: 0.3em 0.3em 0;\n}\n.v-code-block--tab-twilight:hover {\n  background-color: hsl(var(--v-cb-tab-prism-twilight-bkg) 0.5) !important;\n}\n.v-code-block--tab-twilight-icon {\n  color: hsl(var(--v-cb-tab-prism-twilight-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-twilight-icon)) !important;\n}\n.v-code-block--tab-twilight-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-twilight-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-twilight-icon-success)) !important;\n}\n.v-code-block--tab-twilight-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-twilight-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-twilight-icon-failed)) !important;\n}\n.v-code-block--tab-twilight > div {\n  color: hsl(var(--v-cb-tab-prism-twilight-text));\n}\n.v-code-block--tab-night-owl {\n  background-color: hsl(var(--v-cb-tab-prism-night-owl) 1) !important;\n}\n.v-code-block--tab-night-owl:hover {\n  background-color: hsl(var(--v-cb-tab-prism-night-owl) 0.5) !important;\n}\n.v-code-block--tab-night-owl-icon {\n  color: hsl(var(--v-cb-tab-prism-night-owl-icon)) !important;\n  fill: hsl(var(--v-cb-tab-prism-night-owl-icon)) !important;\n}\n.v-code-block--tab-night-owl-icon-status-success {\n  color: hsl(var(--v-cb-tab-prism-night-owl-icon-success)) !important;\n  fill: hsl(var(--v-cb-tab-prism-night-owl-icon-success)) !important;\n}\n.v-code-block--tab-night-owl-icon-status-failed {\n  color: hsl(var(--v-cb-tab-prism-night-owl-icon-failed)) !important;\n  fill: hsl(var(--v-cb-tab-prism-night-owl-icon-failed)) !important;\n}\n.v-code-block--tab-night-owl > div {\n  color: hsl(var(--v-cb-tab-prism-night-owl-text));\n}";
styleInject(css_248z$3);

var css_248z$2 = "svg[data-v-7d8ba791] {\n  height: 14px;\n  width: 14px;\n}";
styleInject(css_248z$2);

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$1 = {
	name: 'StatusIcons',
	props: {
		icon: {
			type: String,
			required: true
		}
	},
	setup(props) {
		return {
			props,
		};
	}
};

const _withScopeId = n => (vue.pushScopeId("data-v-7d8ba791"),n=n(),vue.popScopeId(),n);
const _hoisted_1$1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("path", { d: "M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z" }, null, -1 /* HOISTED */));
const _hoisted_2$1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("path", { d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" }, null, -1 /* HOISTED */));
const _hoisted_3$1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("path", { d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" }, null, -1 /* HOISTED */));

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createCommentVNode(" Copy Icon "),
    ($props.icon === 'copy')
      ? (vue.openBlock(), vue.createElementBlock("svg", vue.mergeProps({ key: 0 }, _ctx.$attrs, {
          viewBox: "0 0 512 512",
          xmlns: "http://www.w3.org/2000/svg"
        }), [
          vue.createCommentVNode("! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. "),
          _hoisted_1$1
        ], 16 /* FULL_PROPS */))
      : ($props.icon === 'success')
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
        : ($props.icon === 'failed')
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
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}
var StatusIcons = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render],['__scopeId',"data-v-7d8ba791"],['__file',"src/plugin/StatusIcons.vue"]]);

const _hoisted_1 = { class: "v-code-block--button-copy" };
const _hoisted_2 = { class: "v-code-block--button-run" };
const _hoisted_3 = { class: "v-code-block--code" };
const _hoisted_4 = ["innerHTML"];
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
        }
    },
    emits: ['run', 'update:copy-status'],
    setup(__props, { emit }) {
        const props = __props;
        const neonBunnyCarrotTheme = undefined('./themes/neon-bunny-carrot.css', { eager: true, as: 'raw' });
        const neonBunnyTheme = undefined('./themes/neon-bunny.css', { eager: true, as: 'raw' });
        const prismTheme = undefined('prismjs/themes/prism.css', { eager: true, as: 'raw' });
        const prismThemeCoy = undefined('prismjs/themes/prism-coy.css', { eager: true, as: 'raw' });
        const prismThemeDark = undefined('prismjs/themes/prism-dark.css', { eager: true, as: 'raw' });
        const prismThemeFunky = undefined('prismjs/themes/prism-funky.css', { eager: true, as: 'raw' });
        const prismThemeOkaidia = undefined('prismjs/themes/prism-okaidia.css', { eager: true, as: 'raw' });
        const prismThemeSolarizedlight = undefined('prismjs/themes/prism-solarizedlight.css', { eager: true, as: 'raw' });
        const prismThemeTomorrow = undefined('prismjs/themes/prism-tomorrow.css', { eager: true, as: 'raw' });
        const prismThemeTwilight = undefined('prismjs/themes/prism-twilight.css', { eager: true, as: 'raw' });
        // -------------------------------------------------- Emits & Slots & Injects //
        const slots = vue.useSlots();
        const codeBlockGlobalOptions = vue.inject('codeBlockGlobalOptions');
        // -------------------------------------------------- Props //
        // -------------------------------------------------- Data //
        const copyTextValue = vue.ref('');
        const convertedCode = vue.ref(null);
        const copying = vue.ref(false);
        const copyStatus = vue.ref('copy');
        const isMobile = vue.ref(false);
        const runTextValue = vue.ref('');
        const stylesheetId = 'v-code-block--theme';
        const useTheme = vue.ref('');
        // -------------------------------------------------- Computed //
        const codeBlockClasses = vue.computed(() => {
            return isMobile.value ? 'v-code-block--mobile' : '';
        });
        const codeTagStyles = vue.computed(() => {
            const width = useTheme.value === 'coy' ? '100%' : '';
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
        const renderCode = vue.computed(() => {
            convertCode();
            const html = Prism.highlight(convertedCode.value, Prism.languages[props.lang], props.lang);
            return html;
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
            if (props.theme) {
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
        });
        vue.onMounted(() => {
            useTheme.value = codeBlockGlobalOptions?.theme || props.theme;
            loadTheme();
            mobileCheck();
        });
        // -------------------------------------------------- Methods //
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
            const loadedThemeStyles = document.getElementById(stylesheetId);
            const head = document.getElementsByTagName('head')[0];
            const themeStyles = document.createElement('style');
            if (loadedThemeStyles) {
                loadedThemeStyles.remove();
            }
            switch (useTheme.value) {
                case 'neon-bunny':
                    selectedTheme = neonBunnyTheme;
                    break;
                case 'neon-bunny-carrot':
                    selectedTheme = neonBunnyCarrotTheme;
                    break;
                case 'coy':
                    selectedTheme = prismThemeCoy;
                    break;
                case 'dark':
                    selectedTheme = prismThemeDark;
                    break;
                case 'funky':
                    selectedTheme = prismThemeFunky;
                    break;
                case 'okaidia':
                    selectedTheme = prismThemeOkaidia;
                    break;
                case 'solarizedlight':
                    selectedTheme = prismThemeSolarizedlight;
                    break;
                case 'tomorrow':
                    selectedTheme = prismThemeTomorrow;
                    break;
                case 'twilight':
                    selectedTheme = prismThemeTwilight;
                    break;
                case 'default':
                case 'prism':
                    selectedTheme = prismTheme;
                    break;
                default:
                    selectedTheme = prismTheme;
                    break;
            }
            const themeKey = Object.keys(selectedTheme)[0];
            selectedTheme = selectedTheme[themeKey];
            themeStyles.setAttribute('type', 'text/css');
            themeStyles.id = stylesheetId;
            themeStyles.appendChild(document.createTextNode(selectedTheme));
            head.appendChild(themeStyles);
        }
        function mobileCheck() {
            const ua = UAParser();
            const device = ua.device;
            isMobile.value = device.type === 'mobile';
        }
        window.addEventListener("orientationchange", () => {
            mobileCheck();
        });
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
                    vue.createElementVNode("pre", {
                        class: vue.normalizeClass(`language-${props.lang}`),
                        style: vue.normalizeStyle(vue.unref(preTagStyles))
                    }, [
                        vue.createTextVNode(""),
                        vue.createElementVNode("code", {
                            class: vue.normalizeClass(`language-${props.lang} ${__props.browserWindow ? 'v-code-block--code-browser' : ''}`),
                            style: vue.normalizeStyle(vue.unref(codeTagStyles)),
                            innerHTML: vue.unref(renderCode)
                        }, null, 14 /* CLASS, STYLE, PROPS */, _hoisted_4),
                        vue.createTextVNode("\n\t\t\t")
                    ], 6 /* CLASS, STYLE */)
                ])
            ], 2 /* CLASS */));
        };
    }
});

var css_248z$1 = ".v-code-block--mt-1 {\n  margin-top: 0.25rem !important;\n}\n.v-code-block--me-1 {\n  margin-right: 0.25rem !important;\n}\n.v-code-block--mb-1 {\n  margin-bottom: 0.25rem !important;\n}\n.v-code-block--ms-1 {\n  margin-left: 0.25rem !important;\n}\n.v-code-block--pt-1 {\n  padding-top: 0.25rem !important;\n}\n.v-code-block--pe-1 {\n  padding-right: 0.25rem !important;\n}\n.v-code-block--pb-1 {\n  padding-bottom: 0.25rem !important;\n}\n.v-code-block--ps-1 {\n  padding-left: 0.25rem !important;\n}\n.v-code-block--mt-2 {\n  margin-top: 0.5rem !important;\n}\n.v-code-block--me-2 {\n  margin-right: 0.5rem !important;\n}\n.v-code-block--mb-2 {\n  margin-bottom: 0.5rem !important;\n}\n.v-code-block--ms-2 {\n  margin-left: 0.5rem !important;\n}\n.v-code-block--pt-2 {\n  padding-top: 0.5rem !important;\n}\n.v-code-block--pe-2 {\n  padding-right: 0.5rem !important;\n}\n.v-code-block--pb-2 {\n  padding-bottom: 0.5rem !important;\n}\n.v-code-block--ps-2 {\n  padding-left: 0.5rem !important;\n}\n.v-code-block--mt-3 {\n  margin-top: 0.75rem !important;\n}\n.v-code-block--me-3 {\n  margin-right: 0.75rem !important;\n}\n.v-code-block--mb-3 {\n  margin-bottom: 0.75rem !important;\n}\n.v-code-block--ms-3 {\n  margin-left: 0.75rem !important;\n}\n.v-code-block--pt-3 {\n  padding-top: 0.75rem !important;\n}\n.v-code-block--pe-3 {\n  padding-right: 0.75rem !important;\n}\n.v-code-block--pb-3 {\n  padding-bottom: 0.75rem !important;\n}\n.v-code-block--ps-3 {\n  padding-left: 0.75rem !important;\n}\n.v-code-block--mt-4 {\n  margin-top: 1rem !important;\n}\n.v-code-block--me-4 {\n  margin-right: 1rem !important;\n}\n.v-code-block--mb-4 {\n  margin-bottom: 1rem !important;\n}\n.v-code-block--ms-4 {\n  margin-left: 1rem !important;\n}\n.v-code-block--pt-4 {\n  padding-top: 1rem !important;\n}\n.v-code-block--pe-4 {\n  padding-right: 1rem !important;\n}\n.v-code-block--pb-4 {\n  padding-bottom: 1rem !important;\n}\n.v-code-block--ps-4 {\n  padding-left: 1rem !important;\n}\n.v-code-block--mt-5 {\n  margin-top: 1.25rem !important;\n}\n.v-code-block--me-5 {\n  margin-right: 1.25rem !important;\n}\n.v-code-block--mb-5 {\n  margin-bottom: 1.25rem !important;\n}\n.v-code-block--ms-5 {\n  margin-left: 1.25rem !important;\n}\n.v-code-block--pt-5 {\n  padding-top: 1.25rem !important;\n}\n.v-code-block--pe-5 {\n  padding-right: 1.25rem !important;\n}\n.v-code-block--pb-5 {\n  padding-bottom: 1.25rem !important;\n}\n.v-code-block--ps-5 {\n  padding-left: 1.25rem !important;\n}\n\n.v-code-block---label-mobile input,\n.v-code-block---label-mobile select,\n.v-code-block---label-mobile textarea {\n  display: none;\n}";
styleInject(css_248z$1);

var css_248z = ".v-code-block {\n  display: block;\n  max-width: 100%;\n}\n.v-code-block--header {\n  align-items: end;\n  display: flex;\n  justify-content: space-between;\n  overflow: visible;\n  position: relative;\n  width: 100%;\n}\n.v-code-block--label {\n  font-family: var(--v-cb-label-font);\n  overflow: auto;\n}\n.v-code-block--tabs {\n  align-items: end;\n  justify-content: flex-end;\n  display: flex;\n}\n.v-code-block--tab {\n  align-items: center;\n  background-color: hsla(var(--v-cb-primary), 0.1);\n  border-radius: 5px 5px 0 0;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  font-family: var(--v-cb-tab-font);\n  justify-content: flex-start;\n  padding: 5px 15px;\n  text-align: center;\n  transition: background-color 0.35s ease;\n  white-space: nowrap;\n  width: fit-content;\n}\n.v-code-block--tab:hover {\n  background-color: hsla(var(--v-cb-primary), 0.2);\n}\n.v-code-block--code {\n  position: relative;\n  z-index: 1;\n}\n.v-code-block--code pre {\n  margin-top: 0;\n}\n.v-code-block--code pre[class*=language-] {\n  margin-top: 0;\n}\n.v-code-block--code pre[class*=language-]::before, .v-code-block--code pre[class*=language-]::after {\n  bottom: 0.95em;\n}\n.v-code-block--code-browser::before {\n  background-image: url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"54\" height=\"14\" viewBox=\"0 0 54 14\"><g fill=\"none\" fillRule=\"evenodd\" transform=\"translate(1 1)\"><circle cx=\"6\" cy=\"6\" r=\"6\" fill=\"%23FF5F56\" stroke=\"%23E0443E\" strokeWidth=\".5\" /><circle cx=\"26\" cy=\"6\" r=\"6\" fill=\"%23FFBD2E\" stroke=\"%23DEA123\" strokeWidth=\".5\" /><circle cx=\"46\" cy=\"6\" r=\"6\" fill=\"%2327C93F\" stroke=\"%231AAB29\" strokeWidth=\".5\" /></g></svg>');\n  background-position: 0.5em 0.5em;\n  background-repeat: no-repeat;\n  content: \"\";\n  display: block;\n  padding-right: 10em;\n  padding-top: 3rem;\n  width: 100%;\n}\n.v-code-block--code:hover .v-code-block--code-copy-button {\n  opacity: 1;\n}\n.v-code-block--code-copy-button {\n  align-items: center;\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  height: 1.5em;\n  justify-content: center;\n  opacity: 0;\n  position: absolute;\n  right: 0.9rem;\n  top: 0.7rem;\n  transition: opacity 0.2s ease-in-out;\n  width: auto;\n  z-index: 2;\n}\n.v-code-block--code-copy-button:hover {\n  opacity: 1;\n}\n.v-code-block--code-copy-button-persist {\n  opacity: 0.5;\n}";
styleInject(css_248z);

var CodeBlock = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5d79b278"], ["__file", "src/plugin/CodeBlock.vue"]]);

const install = (app, options) => {
    const codeBlockGlobalOptions = { globalOptions: true, ...options };
    app.provide('codeBlockGlobalOptions', codeBlockGlobalOptions);
    app.component('CodeBlock', CodeBlock);
};
CodeBlock.install = install;

exports.default = CodeBlock;
