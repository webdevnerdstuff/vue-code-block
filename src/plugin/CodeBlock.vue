<template>
	<div
		class="v-code-block--container v-code-block-mb-5"
		:class="codeBlockClasses"
	>
		<div class="v-code-block--container-header" :style="headerStyles">
			<div
				class="v-code-block--container-label v-code-block-pb-1"
				:class="labelClasses"
			>
				<template v-if="slots.label">
					<slot name="label" />
				</template>
				<template v-else>
					{{ props.label }}
				</template>
			</div>

			<div class="v-code-block--container-tabs" :style="tabGroupStyle">
				<!-- ======================================== Copy Code Tab/Button -->
				<div
					v-if="showCopyButton && showButtons"
					class="v-code-block--container-tab"
					:class="tabClasses"
					@click="copyCode"
				>
					<div class="v-code-block--container-button-copy">
						<fa-icon
							v-if="showCopyIcons"
							class="fa-fw v-code-block-me-1 v-code-block--container-button-copy-icon"
							:class="iconClasses"
							:icon="buttonIconValue"
						/>
						{{ buttonTextValue }}
					</div>
				</div>

				<!-- ======================================== Run Tab/Button -->
				<div
					v-if="showRunButton && showButtons && !isMobile"
					class="v-code-block--container-tab"
					:class="tabClasses"
					@click="runCode"
				>
					<div class="v-code-block--container-button-run">Run</div>
				</div>
			</div>
		</div>
		<div class="v-code-block--container-code">
			<pre :class="`language-${props.lang}`" :style="preTagStyles">
<code :class="`language-${props.lang} ${browserWindow ? 'v-code-block--container-code-browser' : ''}`" :style="codeTagStyles" v-html="renderCode"></code>
			</pre>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	computed,
	inject,
	onBeforeMount,
	onMounted,
	ref,
	useSlots,
	watch,
} from 'vue';
import Prism from 'prismjs';
// import PrismComponents from 'prismjs/components';
import UAParser from 'ua-parser-js';

import prismTheme from 'prismjs/themes/prism.css?inline';
import prismThemeCoy from 'prismjs/themes/prism-coy.css?inline';
import prismThemeDark from 'prismjs/themes/prism-dark.css?inline';
import prismThemeFunky from 'prismjs/themes/prism-funky.css?inline';
import prismThemeOkaidia from 'prismjs/themes/prism-okaidia.css?inline';
import prismThemeSolarizedlight from 'prismjs/themes/prism-solarizedlight.css?inline';
import prismThemeTomorrow from 'prismjs/themes/prism-tomorrow.css?inline';
import prismThemeTwilight from 'prismjs/themes/prism-twilight.css?inline';
import neonBunnyTheme from '@/plugin/theme/neon-bunny.css?inline';

// ! Remove this later as it should be loaded by the user ! //
import prismThemeNightOwl from 'prism-themes/themes/prism-night-owl.css?inline';


// -------------------------------------------------- Emits & Slots & Injects //
const emit = defineEmits(['copied', 'run']);
const slots = useSlots();
const codeBlockGlobalOptions = inject('codeBlockGlobalOptions');


// -------------------------------------------------- Props //
const props = defineProps({
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
	copyIcon: {
		type: String,
		required: false,
		default: 'fa-solid fa-copy',
	},
	copyText: {
		type: String,
		required: false,
		default: 'Copy Code',
	},
	failedIcon: {
		type: String,
		required: false,
		default: 'fa-solid fa-xmark',
	},
	indent: {
		type: Number,
		required: false,
		default: 4,
	},
	label: {
		type: String,
		required: false,
		default: 'Code Block Label',
	},
	lang: {
		type: String,
		required: false,
		default: 'javascript',
	},
	showButtons: {
		type: Boolean,
		required: false,
		default: true,
	},
	showCopyButton: {
		type: Boolean,
		required: false,
		default: true,
	},
	showCopyIcons: {
		type: Boolean,
		required: false,
		default: true,
	},
	showRunButton: {
		type: Boolean,
		required: false,
		default: true,
	},
	successIcon: {
		type: String,
		required: false,
		default: 'fa-solid fa-check',
	},
	successIconColor: {
		type: String,
		required: false,
		default: 'fa-solid fa-check',
	},
	tabGap: {
		type: String,
		required: false,
		default: '0.25rem',
	},
	theme: {
		type: String, Boolean,
		required: false,
		default: '',
	}
});


// -------------------------------------------------- Data //
const buttonIconValue: string = ref('');
const buttonTextValue: string = ref('');
const convertedCode: string = ref('');
const copying: boolean = ref(false);
const copyStatus: string = ref('copy');
const iconClass: string = ref('fa-solid fa-copy');
const isMobile: boolean = ref(false);
const stylesheetId = 'v-code-block--theme';
const useTheme = ref('');


// -------------------------------------------------- Computed //
const codeBlockClasses = computed(() => {
	return isMobile.value ? 'v-code-block--container-mobile' : '';
});

const codeTagStyles = computed(() => {
	const width = useTheme.value === 'coy' ? '100%' : '';
	return { width };
});

const headerStyles = computed(() => {
	return {
		gap: props.tabGap,
	};
});

const iconClasses = computed(() => {
	const theme = props.theme === '' || props.theme === 'prism' ? 'default' : props.theme;

	const classes = {
		[`v-code-block--container-tab-${theme}-icon`]: true,
		[`v-code-block--container-button-copy-icon-status-${copyStatus.value}`]: true,
		[`v-code-block--container-tab-${theme}-icon-status-${copyStatus.value}`]: true,
	};
	return classes;
});

const labelClasses = computed(() => {
	return isMobile.value ? 'v-code-block--container-label-mobile' : '';
});

const preTagStyles = computed(() => {
	const radius = props.codeBlockRadius;
	let borderRadius = `${radius} 0 ${radius} ${radius}`;

	if (!props.showButtons || (!props.showCopyButton && !props.showRunButton)) {
		borderRadius = radius;
	}

	const display = useTheme.value !== 'funky' ? 'flex' : 'block';

	return {
		borderRadius,
		display,
	};
});

const renderCode = computed(() => {
	convertCode();
	console.log({ Prism });
	// console.log({ PrismComponents });

	const html = Prism.highlight(convertedCode.value, Prism.languages[props.lang], props.lang);

	return html;
});

const tabClasses = computed(() => {
	const theme = props.theme === '' || props.theme === 'prism' ? 'default' : props.theme;
	const classes = {
		[`v-code-block--container-tab-${theme}`]: true,
	};
	return classes;
});

const tabGroupStyle = computed(() => {
	return {
		gap: props.tabGap,
	};
});


// -------------------------------------------------- Watch //
watch(props, () => {
	if (props.theme) {
		useTheme.value = props.theme;
		loadTheme();
	}
});


// -------------------------------------------------- Mounts //
onBeforeMount(() => {
	buttonTextValue.value = props.copyText;
	buttonIconValue.value = props.copyIcon;
});

onMounted(() => {
	useTheme.value = codeBlockGlobalOptions?.theme || props.theme;
	loadTheme();
	mobileCheck();
});


// -------------------------------------------------- Methods //
function convertCode(): void {
	if (props.lang === 'json') {

		convertedCode.value = JSON.stringify(props.code, null, props.indent);
		return;
	}

	convertedCode.value = props.code;
	return;
}

function copyCode(): void {
	if (copying.value) {
		return;
	}

	copying.value = true;

	navigator.clipboard.writeText(convertedCode.value).then(() => {
		buttonIconValue.value = props.successIcon;
		buttonTextValue.value = 'Copied!';
		iconClass.value = 'fa-solid fa-check';
		copyStatus.value = 'success';
	}, (err) => {
		buttonIconValue.value = props.failedIcon;
		buttonTextValue.value = 'Copy failed!';
		iconClass.value = 'fa-solid fa-xmark';
		copyStatus.value = 'failed';
		console.error('Copy to clipboard failed: ', err);
	});

	setTimeout(() => {
		buttonIconValue.value = props.copyIcon;
		buttonTextValue.value = props.copyText;
		copyStatus.value = 'copy';
		iconClass.value = 'fa-solid fa-copy';
		copying.value = false;
	}, 3000);
}

function loadTheme(): void {
	let selectedTheme = prismTheme;
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
		// ! Remove this later as it should be loaded by the user ! //
		case 'night-owl':
			selectedTheme = prismThemeNightOwl;
			break;
		default:
			selectedTheme = prismTheme;
			break;
	}

	console.log({ selectedTheme });

	themeStyles.setAttribute('type', 'text/css');
	themeStyles.id = stylesheetId;
	themeStyles.appendChild(document.createTextNode(selectedTheme));

	head.appendChild(themeStyles);
}

function mobileCheck(): void {
	const ua = UAParser();
	const device = ua.device;
	isMobile.value = device.type === 'mobile';
}

window.addEventListener("orientationchange", () => {
	mobileCheck();
});

function runCode(): void {
	console.log('run code');
	emit('run');
}
</script>


<style lang="scss">
.v-code-block {
	&--container {
		&--label {
			&-mobile {
				input,
				select,
				textarea {
					display: none;
				}
			}
		}
	}
}
</style>

<style lang="scss" scoped>
.v-code-block {
	&--container {
		display: block;
		max-width: 100%;

		&-header {
			align-items: end;
			display: flex;
			justify-content: space-between;
			width: 100%;
		}

		&-label {
			font-family: var(--v-code-block-label-font);
			overflow: auto;
		}

		&-tabs {
			align-items: end;
			border: 1px solid transparent;
			display: flex;
		}

		&-tab {
			align-items: center;
			background-color: hsla(var(--v-code-block-primary-hsl), 0.1) !important;
			border-radius: 5px 5px 0 0;
			cursor: pointer;
			display: flex;
			flex-direction: row;
			font-family: var(--v-code-block-tab-font);
			justify-content: flex-start;
			padding: 5px 15px;
			text-align: center;
			transition: background-color 0.35s ease;
			white-space: nowrap;
			width: fit-content;

			&:hover {
				background-color: hsla(var(--v-code-block-primary-hsl), 0.2) !important;
			}

			// Prism coloring //
			&-default {
				background-color: hsla(var(--v-code-block-prism-default-hsl), 1) !important;
				color: hsl(var(--v-code-block-prism-default-icon-hsl)) !important;

				&:hover {
					background-color: hsla(var(--v-code-block-prism-default-hsl), 0.5) !important;
				}

				&-icon {
					color: hsl(var(--v-code-block-prism-default-icon-hsl)) !important;

					&-status {
						&-success {
							color: hsl(var(--v-code-block-prism-default-icon-success-hsl)) !important;
						}

						&-failed {
							color: hsl(var(--v-code-block-prism-default-icon-failed-hsl)) !important;
						}
					}
				}
			}

			&-coy {
				background-color: hsla(var(--v-code-block-prism-coy-hsl), 0.1) !important;
				border-left: 5px solid hsl(var(--v-code-block-prism-coy-hsl));
				border-radius: 0;
				color: hsl(var(--v-code-block-prism-coy-icon-hsl)) !important;

				&:hover {
					background-color: hsla(var(--v-code-block-prism-coy-hsl), 0.2) !important;
				}

				&-icon {
					color: hsl(var(--v-code-block-prism-coy-icon-hsl)) !important;

					&-status {
						&-success {
							color: hsl(var(--v-code-block-prism-coy-icon-success-hsl)) !important;
						}

						&-failed {
							color: hsl(var(--v-code-block-prism-default-icon-failed-hsl)) !important;
						}
					}
				}
			}

			&-dark {
				background-color: hsla(var(--v-code-block-prism-dark-hsl), 1) !important;
				border-color: hsl(var(--v-code-block-prism-dark-border-hsl));
				border-style: solid;
				border-width: 0.3em 0.3em 0;
				color: hsl(var(--v-code-block-prism-dark-icon-hsl)) !important;

				&:hover {
					background-color: hsla(var(--v-code-block-prism-dark-border-hsl), 0.5) !important;
				}

				&-icon {
					color: hsl(var(--v-code-block-prism-dark-icon-hsl)) !important;

					&-status {
						&-success {
							color: hsl(var(--v-code-block-prism-dark-icon-success-hsl)) !important;
						}

						&-failed {
							color: hsl(var(--v-code-block-prism-dark-icon-failed-hsl)) !important;
						}
					}
				}
			}

			&-funky {
				background-color: hsl(var(--v-code-block-prism-funky-dark-hsl)) !important;
				color: hsl(var(--v-code-block-prism-funky-icon-hsl)) !important;

				&:hover {
					background-color: hsl(var(--v-code-block-prism-funky-hsl)) !important;
				}

				&-icon {
					color: hsl(var(--v-code-block-prism-funky-icon-hsl)) !important;

					&-status {
						&-success {
							color: hsl(var(--v-code-block-prism-funky-icon-success-hsl)) !important;
						}

						&-failed {
							color: hsl(var(--v-code-block-prism-funky-icon-failed-hsl)) !important;
						}
					}
				}
			}

			&-okaidia {
				background-color: hsla(var(--v-code-block-prism-okaidia-hsl), 1) !important;
				color: hsl(var(--v-code-block-prism-okaidia-icon-hsl)) !important;

				&:hover {
					background-color: hsla(var(--v-code-block-prism-okaidia-hsl), 0.5) !important;
				}

				&-icon {
					color: hsl(var(--v-code-block-prism-okaidia-icon-hsl)) !important;

					&-status {
						&-success {
							color: hsl(var(--v-code-block-prism-okaidia-icon-success-hsl)) !important;
						}

						&-failed {
							color: hsl(var(--v-code-block-prism-okaidia-icon-failed-hsl)) !important;
						}
					}
				}
			}

			&-solarizedlight {
				background-color: hsla(var(--v-code-block-prism-solarizedlight-hsl), 1) !important;
				color: hsl(var(--v-code-block-prism-solarizedlight-icon-hsl)) !important;

				&:hover {
					background-color: hsla(var(--v-code-block-prism-solarizedlight-hsl), 0.5) !important;
				}

				&-icon {
					color: hsl(var(--v-code-block-prism-solarizedlight-icon-hsl)) !important;

					&-status {
						&-success {
							color: hsl(var(--v-code-block-prism-solarizedlight-icon-success-hsl)) !important;
						}

						&-failed {
							color: hsl(var(--v-code-block-prism-solarizedlight-icon-failed-hsl)) !important;
						}
					}
				}
			}

			&-tomorrow {
				background-color: hsla(var(--v-code-block-prism-tomorrow-hsl), 1) !important;
				color: hsl(var(--v-code-block-prism-tomorrow-icon-hsl)) !important;

				&:hover {
					background-color: hsla(var(--v-code-block-prism-tomorrow-hsl), 0.5) !important;
				}

				&-icon {
					color: hsl(var(--v-code-block-prism-tomorrow-icon-hsl)) !important;

					&-status {
						&-success {
							color: hsl(var(--v-code-block-prism-tomorrow-icon-success-hsl)) !important;
						}

						&-failed {
							color: hsl(var(--v-code-block-prism-tomorrow-icon-failed-hsl)) !important;
						}
					}
				}
			}

			&-twilight {
				background-color: hsla(var(--v-code-block-prism-twilight-hsl), 1) !important;
				border-color: hsl(var(--v-code-block-prism-twilight-border-hsl));
				border-style: solid;
				border-width: 0.3em 0.3em 0;
				color: hsl(var(--v-code-block-prism-twilight-icon-hsl)) !important;

				&:hover {
					background-color: hsla(var(--v-code-block-prism-twilight-hsl), 0.5) !important;
				}

				&-icon {
					color: hsl(var(--v-code-block-prism-twilight-icon-hsl)) !important;

					&-status {
						&-success {
							color: hsl(var(--v-code-block-prism-twilight-icon-success-hsl)) !important;
						}

						&-failed {
							color: hsl(var(--v-code-block-prism-twilight-icon-failed-hsl)) !important;
						}
					}
				}
			}

			&-night-owl {
				background-color: hsla(var(--v-code-block-prism-night-owl-hsl), 1) !important;
				color: hsl(var(--v-code-block-prism-night-owl-icon-hsl)) !important;

				&:hover {
					background-color: hsla(var(--v-code-block-prism-night-owl-hsl), 0.5) !important;
				}

				&-icon {
					color: hsl(var(--v-code-block-prism-night-owl-icon-hsl)) !important;

					&-status {
						&-success {
							color: hsl(var(--v-code-block-prism-night-owl-icon-success-hsl)) !important;
						}

						&-failed {
							color: hsl(var(--v-code-block-prism-night-owl-icon-failed-hsl)) !important;
						}
					}
				}
			}

			&-neon-bunny {
				background-color: hsla(var(--v-code-block-prism-neon-bunny-hsl), 1) !important;
				color: hsl(var(--v-code-block-prism-neon-bunny-text-hsl)) !important;

				&:hover {
					background-color: hsla(var(--v-code-block-prism-neon-bunny-hsl), 0.5) !important;
				}

				&-icon {
					color: hsl(var(--v-code-block-prism-neon-bunny-icon-hsl)) !important;

					&-status {
						&-success {
							color: hsl(var(--v-code-block-prism-neon-bunny-icon-success-hsl)) !important;
						}

						&-failed {
							color: hsl(var(--v-code-block-prism-neon-bunny-icon-failed-hsl)) !important;
						}
					}
				}
			}
		}

		&-button {
			&-copy {
				&-icon {
					font-size: 14px !important;

					// &-status {
					// 	&-copy {
					// 		color: hsl(var(--v-code-block-primary-hsl));
					// 	}

					// 	&-success {
					// 		color: hsl(var(--v-code-block-success-hsl)) !important;
					// 	}

					// 	&-failed {
					// 		color: hsl(var(--v-code-block-danger-hsl)) !important;
					// 	}
					// }
				}
			}
		}

		&-code {
			pre {
				margin-top: 0;
				// padding: 1em;

				&[class*='language-'] {
					margin-top: 0;

					&::before,
					&::after {
						bottom: 0.95em;
					}
				}
			}

			&-browser {
				&::before {
					background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="%23FF5F56" stroke="%23E0443E" strokeWidth=".5" /><circle cx="26" cy="6" r="6" fill="%23FFBD2E" stroke="%23DEA123" strokeWidth=".5" /><circle cx="46" cy="6" r="6" fill="%2327C93F" stroke="%231AAB29" strokeWidth=".5" /></g></svg>');
					background-position: 0.5em 0.5em;
					background-repeat: no-repeat;
					content: '';
					display: block;
					padding-right: 10em;
					padding-top: 3rem;
					width: 100%;
				}
			}
		}
	}

	// Utilities //
	@for $i from 1 through 5 {
		// ----------------------------- MISC MARGIN //
		&-mt-#{$i} {
			margin-top: $i * 0.25rem !important;
		}

		&-me-#{$i} {
			margin-right: $i * 0.25rem !important;
		}

		&-mb-#{$i} {
			margin-bottom: $i * 0.25rem !important;
		}

		&-ms-#{$i} {
			margin-left: $i * 0.25rem !important;
		}

		// ----------------------------- MISC PADDING //
		&-pt-#{$i} {
			padding-top: $i * 0.25rem !important;
		}

		&-pe-#{$i} {
			padding-right: $i * 0.25rem !important;
		}

		&-pb-#{$i} {
			padding-bottom: $i * 0.25rem !important;
		}

		&-ps-#{$i} {
			padding-left: $i * 0.25rem !important;
		}
	}
}
</style>
