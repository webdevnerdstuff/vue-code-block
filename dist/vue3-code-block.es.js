/**
 * @name vue3-code-block
 * @version 1.0.3
 * @description Vue 3 CodeBlock - Highlight your code with ease using this syntax highlighting component powered by PrismJS.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vue3-code-block/
 * @repository https://github.com/webdevnerdstuff/vue3-code-block
 * @license MIT License
 */

import { openBlock, createElementBlock, Fragment, createCommentVNode, mergeProps, pushScopeId, popScopeId, createElementVNode, defineComponent, useSlots, inject, ref, computed, watch, onBeforeMount, onMounted, normalizeClass, unref, normalizeStyle, renderSlot, createTextVNode, toDisplayString, createBlock } from 'vue';
import Prism from 'prismjs';
import UAParser from 'ua-parser-js';

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

const _withScopeId = n => (pushScopeId("data-v-7d8ba791"),n=n(),popScopeId(),n);
const _hoisted_1$1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createElementVNode("path", { d: "M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z" }, null, -1 /* HOISTED */));
const _hoisted_2$1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createElementVNode("path", { d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" }, null, -1 /* HOISTED */));
const _hoisted_3$1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createElementVNode("path", { d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" }, null, -1 /* HOISTED */));

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" Copy Icon "),
    ($props.icon === 'copy')
      ? (openBlock(), createElementBlock("svg", mergeProps({ key: 0 }, _ctx.$attrs, {
          viewBox: "0 0 512 512",
          xmlns: "http://www.w3.org/2000/svg"
        }), [
          createCommentVNode("! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. "),
          _hoisted_1$1
        ], 16 /* FULL_PROPS */))
      : ($props.icon === 'success')
        ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createCommentVNode(" Success Icon "),
            (openBlock(), createElementBlock("svg", mergeProps(_ctx.$attrs, {
              viewBox: "0 0 512 512",
              xmlns: "http://www.w3.org/2000/svg"
            }), [
              createCommentVNode("! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. "),
              _hoisted_2$1
            ], 16 /* FULL_PROPS */))
          ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
        : ($props.icon === 'failed')
          ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              createCommentVNode(" Failed Icon "),
              (openBlock(), createElementBlock("svg", mergeProps(_ctx.$attrs, {
                viewBox: "0 0 320 512",
                xmlns: "http://www.w3.org/2000/svg"
              }), [
                createCommentVNode("! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. "),
                _hoisted_3$1
              ], 16 /* FULL_PROPS */))
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
          : createCommentVNode("v-if", true)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}
var StatusIcons = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render],['__scopeId',"data-v-7d8ba791"],['__file',"src/plugin/StatusIcons.vue"]]);

const _hoisted_1 = { class: "v-code-block--button-copy" };
const _hoisted_2 = { class: "v-code-block--button-run" };
const _hoisted_3 = { class: "v-code-block--code" };
const _hoisted_4 = ["innerHTML"];
var _sfc_main = /*#__PURE__*/ defineComponent({
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
        const neonBunnyCarrotTheme = import.meta.glob('./themes/neon-bunny-carrot.css', { eager: true, as: 'raw' });
        const neonBunnyTheme = import.meta.glob('./themes/neon-bunny.css', { eager: true, as: 'raw' });
        const prismTheme = import.meta.glob('prismjs/themes/prism.css', { eager: true, as: 'raw' });
        const prismThemeCoy = import.meta.glob('prismjs/themes/prism-coy.css', { eager: true, as: 'raw' });
        const prismThemeDark = import.meta.glob('prismjs/themes/prism-dark.css', { eager: true, as: 'raw' });
        const prismThemeFunky = import.meta.glob('prismjs/themes/prism-funky.css', { eager: true, as: 'raw' });
        const prismThemeOkaidia = import.meta.glob('prismjs/themes/prism-okaidia.css', { eager: true, as: 'raw' });
        const prismThemeSolarizedlight = import.meta.glob('prismjs/themes/prism-solarizedlight.css', { eager: true, as: 'raw' });
        const prismThemeTomorrow = import.meta.glob('prismjs/themes/prism-tomorrow.css', { eager: true, as: 'raw' });
        const prismThemeTwilight = import.meta.glob('prismjs/themes/prism-twilight.css', { eager: true, as: 'raw' });
        // -------------------------------------------------- Emits & Slots & Injects //
        const slots = useSlots();
        const codeBlockGlobalOptions = inject('codeBlockGlobalOptions');
        // -------------------------------------------------- Props //
        // -------------------------------------------------- Data //
        const copyTextValue = ref('');
        const convertedCode = ref(null);
        const copying = ref(false);
        const copyStatus = ref('copy');
        const isMobile = ref(false);
        const runTextValue = ref('');
        const stylesheetId = 'v-code-block--theme';
        const useTheme = ref('');
        // -------------------------------------------------- Computed //
        const codeBlockClasses = computed(() => {
            return isMobile.value ? 'v-code-block--mobile' : '';
        });
        const codeTagStyles = computed(() => {
            const width = useTheme.value === 'coy' ? '100%' : '';
            return { width };
        });
        const copyButtonClasses = computed(() => {
            return {
                'v-code-block--code-copy-button': true,
                'v-code-block--code-copy-button-mobile': isMobile.value,
                [`v-code-block--code-copy-button-persist`]: props.persistentCopyButton,
                [`v-code-block--code-copy-button-status-${copyStatus.value}`]: true,
            };
        });
        const headerStyles = computed(() => {
            return {
                bottom: props.floatingTabs ? '1px' : '0',
                gap: convertToUnit(props.tabGap),
            };
        });
        const iconClasses = computed(() => {
            const theme = useTheme.value === '' || useTheme.value === 'prism' ? 'default' : useTheme.value;
            const classes = {
                'v-code-block--me-1': true,
                [`v-code-block--tab-${theme}-icon`]: true,
                [`v-code-block--button-copy-icon-status-${copyStatus.value}`]: true,
                [`v-code-block--tab-${theme}-icon-status-${copyStatus.value}`]: true,
            };
            return classes;
        });
        const labelClasses = computed(() => {
            return isMobile.value ? 'v-code-block--label-mobile' : '';
        });
        const preTagStyles = computed(() => {
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
        const renderCode = computed(() => {
            convertCode();
            const html = Prism.highlight(convertedCode.value, Prism.languages[props.lang], props.lang);
            return html;
        });
        const tabClasses = computed(() => {
            const theme = useTheme.value === '' || useTheme.value === 'prism' ? 'default' : useTheme.value;
            const classes = {
                [`v-code-block--tab-${theme}`]: true,
            };
            return classes;
        });
        const tabGroupStyle = computed(() => {
            return {
                gap: convertToUnit(props.tabGap),
            };
        });
        // -------------------------------------------------- Watch //
        watch(props, () => {
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
        onBeforeMount(() => {
            copyTextValue.value = props.copyText;
            runTextValue.value = props.runText;
        });
        onMounted(() => {
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
            return (openBlock(), createElementBlock("div", {
                class: normalizeClass(["v-code-block v-code-block--mb-5", unref(codeBlockClasses)])
            }, [
                (__props.label || __props.tabs || unref(slots).label || unref(slots).tabs)
                    ? (openBlock(), createElementBlock("div", {
                        key: 0,
                        class: "v-code-block--header",
                        style: normalizeStyle(unref(headerStyles))
                    }, [
                        createElementVNode("div", {
                            class: normalizeClass(["v-code-block--label v-code-block--pb-1", unref(labelClasses)])
                        }, [
                            (unref(slots).label)
                                ? renderSlot(_ctx.$slots, "label", { key: 0 })
                                : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                    createTextVNode(toDisplayString(props.label), 1 /* TEXT */)
                                ], 64 /* STABLE_FRAGMENT */))
                        ], 2 /* CLASS */),
                        createElementVNode("div", {
                            class: "v-code-block--tabs",
                            style: normalizeStyle(unref(tabGroupStyle))
                        }, [
                            (unref(slots).tabs)
                                ? renderSlot(_ctx.$slots, "tabs", { key: 0 })
                                : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                    createCommentVNode(" ======================================== Copy Code Tab/Button "),
                                    (__props.copyTab && __props.tabs)
                                        ? (openBlock(), createElementBlock("div", {
                                            key: 0,
                                            class: normalizeClass(["v-code-block--tab", unref(tabClasses)]),
                                            onClick: copyCode
                                        }, [
                                            createElementVNode("div", _hoisted_1, [
                                                (__props.copyIcons)
                                                    ? (openBlock(), createBlock(StatusIcons, {
                                                        key: 0,
                                                        class: normalizeClass(["v-code-block--button-copy-icon", unref(iconClasses)]),
                                                        icon: copyStatus.value
                                                    }, null, 8 /* PROPS */, ["class", "icon"]))
                                                    : createCommentVNode("v-if", true),
                                                createTextVNode(" " + toDisplayString(copyTextValue.value), 1 /* TEXT */)
                                            ])
                                        ], 2 /* CLASS */))
                                        : createCommentVNode("v-if", true),
                                    createCommentVNode(" ======================================== Run Tab/Button "),
                                    (__props.runTab && __props.tabs && !isMobile.value)
                                        ? (openBlock(), createElementBlock("div", {
                                            key: 1,
                                            class: normalizeClass(["v-code-block--tab", unref(tabClasses)]),
                                            onClick: runCode
                                        }, [
                                            createElementVNode("div", _hoisted_2, toDisplayString(runTextValue.value), 1 /* TEXT */)
                                        ], 2 /* CLASS */))
                                        : createCommentVNode("v-if", true)
                                ], 64 /* STABLE_FRAGMENT */))
                        ], 4 /* STYLE */)
                    ], 4 /* STYLE */))
                    : createCommentVNode("v-if", true),
                createElementVNode("div", _hoisted_3, [
                    createElementVNode("div", {
                        class: normalizeClass(["v-code-block--code-copy-button", unref(copyButtonClasses)]),
                        onClick: copyCode
                    }, [
                        (unref(slots).copyButton)
                            ? renderSlot(_ctx.$slots, "copyButton", { key: 0 })
                            : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                (__props.copyButton)
                                    ? (openBlock(), createBlock(StatusIcons, {
                                        key: 0,
                                        class: normalizeClass(["v-code-block--button-copy-icon", unref(iconClasses)]),
                                        icon: copyStatus.value
                                    }, null, 8 /* PROPS */, ["class", "icon"]))
                                    : createCommentVNode("v-if", true)
                            ], 64 /* STABLE_FRAGMENT */))
                    ], 2 /* CLASS */),
                    createElementVNode("pre", {
                        class: normalizeClass(`language-${props.lang}`),
                        style: normalizeStyle(unref(preTagStyles))
                    }, [
                        createTextVNode(""),
                        createElementVNode("code", {
                            class: normalizeClass(`language-${props.lang} ${__props.browserWindow ? 'v-code-block--code-browser' : ''}`),
                            style: normalizeStyle(unref(codeTagStyles)),
                            innerHTML: unref(renderCode)
                        }, null, 14 /* CLASS, STYLE, PROPS */, _hoisted_4),
                        createTextVNode("\n\t\t\t")
                    ], 6 /* CLASS, STYLE */)
                ])
            ], 2 /* CLASS */));
        };
    }
});

var CodeBlock = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "src/plugin/CodeBlock.vue"]]);

const install = (app, options) => {
    const codeBlockGlobalOptions = { globalOptions: true, ...options };
    app.provide('codeBlockGlobalOptions', codeBlockGlobalOptions);
    app.component('CodeBlock', CodeBlock);
};
CodeBlock.install = install;

export { CodeBlock as default };
