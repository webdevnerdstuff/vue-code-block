<template>
	<div :class="codeBlockClasses">
		<div
			v-if="settings.label || settings.tabs || slots.label || slots.tabs"
			class="v-code-block--header"
			:style="headerStyles"
		>
			<div
				class="v-code-block--label v-code-block--pb-1"
				:class="labelClasses"
			>
				<template v-if="slots.label">
					<slot
						name="label"
						v-bind="{
							copyCode,
							copyStatus,
							runCode,
						}"
					/>
				</template>
				<template v-else>{{ settings.label }}</template>
			</div>

			<div
				class="v-code-block--tabs"
				:style="tabGroupStyle"
			>
				<template v-if="slots.tabs">
					<slot
						name="tabs"
						v-bind="{
							copyCode,
							copyStatus,
							runCode,
						}"
					/>
				</template>
				<template v-else>
					<!-- ======================================== Copy Code Tab/Button -->
					<div
						v-if="settings.copyTab && settings.tabs"
						class="v-code-block--tab"
						:class="tabClasses"
						@click="copyCode"
					>
						<div class="v-code-block--button-copy">
							<StatusIcons
								v-if="settings.copyIcons"
								class="v-code-block--button-copy-icon"
								:class="iconClasses"
								:icon="copyStatus"
							/>
							{{ copyTextValue }}
						</div>
					</div>

					<!-- ======================================== Run Tab/Button -->
					<div
						v-if="settings.runTab && settings.tabs && !isMobile"
						class="v-code-block--tab v-code-block--tab-run"
						:class="tabClasses"
						@click="runCode"
					>
						<div class="v-code-block--button-run">{{ runTextValue }}</div>
					</div>
				</template>
			</div>
		</div>
		<div class="v-code-block--code">
			<div
				class="v-code-block--code-copy-button"
				:class="copyButtonClasses"
				@click="copyCode"
			>
				<template v-if="slots.copyButton">
					<slot
						name="copyButton"
						v-bind="{
							copyStatus,
						}"
					/>
				</template>
				<template v-else>
					<StatusIcons
						v-if="settings.copyButton"
						class="v-code-block--button-copy-icon"
						:class="iconClasses"
						:icon="copyStatus"
					/>
				</template>
			</div>

			<pre
				v-bind="$attrs"
				:class="`language-${settings.lang}`"
				:style="preTagStyles"
			>
		<code v-if="usePrismPlugin"
			ref="prismPluginCodeRef"
			:class="codeTagClasses"
			:style="codeTagStyles"></code>
		<code v-else
			:class="codeTagClasses"
			:style="codeTagStyles" v-html="renderedCode"></code>
	</pre>
		</div>
	</div>
</template>


<script setup lang="ts">
import { HLJSApi } from 'highlight.js';
import langPlaintext from 'highlight.js/lib/languages/plaintext';
import { UAParser } from 'ua-parser-js';
import type { CopyStatus, Props } from '@/plugin/types';
import type { StyleValue } from 'vue';
import {
	useCodeBlockClasses,
	useCopyButtonClasses,
	useIconClasses,
	useLabelClasses,
	useTabClasses,
} from './composables/classes';
import {
	useCodeTagStyles,
	useHeaderStyles,
	usePreTagStyles,
	useTabGroupStyles,
} from './composables/styles';
import { pluginOptionsInjectionKey } from './data/globals';

import { AllProps, UndefinedProps } from './data/props';
import {
	neonBunnyCarrotHighlightThemeMin,
	neonBunnyCarrotThemeMin,
	neonBunnyHighlightThemeMin,
	neonBunnyThemeMin,
} from './themes';
import StatusIcons from '@/plugin/components/StatusIcons.vue';


const highlightJsVersion = '11.12.0';
const prismVersion = '1.30.0';
const prismThemesVersion = '1.9.0';


// -------------------------------------------------- Emits & Slots & Injects //
const emit = defineEmits(['run', 'update:copy-status']);
const slots = useSlots();


// -------------------------------------------------- Props //
// Props default to undefined so we can tell which ones were actually passed. //
// Priority: component props > global plugin options > default values //
const props = withDefaults(defineProps<Props>(), { ...UndefinedProps });

const injectedPluginOptions = inject<PluginOptions>(pluginOptionsInjectionKey, {});

function getSettings(): Settings {
	const passedProps = Object.fromEntries(
		Object.entries(props).filter(([, value]) => typeof value !== 'undefined'),
	);

	return { ...AllProps, ...injectedPluginOptions, ...passedProps };
}

const settings: Ref<Settings> = ref(getSettings());


// -------------------------------------------------- Data //
let hljs: HLJSApi;

let prismModule: any;

const convertedCode = ref<string | unknown>(null);
const copyStatus = ref<CopyStatus>('copy');
const copyTextValue = ref<Settings['copyText']>('');
const copying = ref<boolean>(false);
const isLoading = ref<boolean>(false);
const isMobile = ref<boolean>(false);
const highlightCdn = ref(`https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@${highlightJsVersion}/build/styles`);
const prismCdn = ref(`https://cdn.jsdelivr.net/gh/PrismJS/prism@${prismVersion}/themes`);
const prismThemesCdn = ref(`https://cdn.jsdelivr.net/gh/PrismJS/prism-themes@${prismThemesVersion}/themes`);

const prismPluginCodeRef = ref<HTMLElement | null>(null);
const renderedCode = ref('');
const runTextValue = ref<Settings['runText']>('');
const useTheme = ref<Settings['theme']>('');


// -------------------------------------------------- Computed //
// Prism plugins (line-numbers, etc.) only run when Prism highlights the element itself //
const usePrismPlugin = computed<boolean>(() => !!(settings.value.prismjs && settings.value.prismPlugin));


// -------------------------------------------------- Classes //
const codeBlockClasses = computed<object>(() => {
	return useCodeBlockClasses({
		isMobile,
		isPrism: settings.value.prismjs,
	});
});

const copyButtonClasses = computed<object>(() => {
	return useCopyButtonClasses({
		copyStatus,
		isMobile,
		persistentCopyButton: settings.value.persistentCopyButton,
	});
});

const iconClasses = computed<object>(() => {
	return useIconClasses({
		copyStatus,
		highlightjs: settings.value.highlightjs,
		useTheme,
	});
});

const labelClasses = computed<object>(() => {
	return useLabelClasses({
		isMobile,
	});
});

const codeTagClasses = computed<string>(() => {
	return [
		`language-${settings.value.lang}`,
		settings.value.browserWindow ? 'v-code-block--code-browser' : '',
		settings.value.highlightjs ? 'hljs' : '',
	].filter(Boolean).join(' ');
});

const tabClasses = computed<object>(() => {
	return useTabClasses({
		highlightjs: settings.value.highlightjs,
		useTheme,
	});
});


// -------------------------------------------------- Styles //
const codeTagStyles = computed<StyleValue>(() => {
	return useCodeTagStyles({
		isLoading,
		useTheme,
	});
});

const headerStyles = computed<StyleValue>(() => {
	return useHeaderStyles({
		floatingTabs: settings.value.floatingTabs,
		tabGap: settings.value.tabGap,
	});
});

const preTagStyles = computed<StyleValue>(() => {
	return usePreTagStyles({
		copyTab: settings.value.copyTab,
		height: settings.value.height,
		maxHeight: settings.value.maxHeight,
		radius: settings.value.codeBlockRadius,
		runTab: settings.value.runTab,
		tabs: settings.value.tabs,
		useTheme,
	});
});

const tabGroupStyle = computed<StyleValue>(() => {
	return useTabGroupStyles({
		tabGap: settings.value.tabGap,
	});
});


// -------------------------------------------------- Watch //
watch(props as Props, () => {
	settings.value = getSettings();

	renderCode();

	if (settings.value.theme || settings.value.prismjs || settings.value.highlightjs) {
		checkLibrary();
		useTheme.value = settings.value.theme;
		loadTheme();
	}

	if (settings.value.copyText) {
		copyTextValue.value = settings.value.copyText;
	}

	if (settings.value.runText) {
		runTextValue.value = settings.value.runText;
	}

});


// -------------------------------------------------- Mounts //
onBeforeMount(() => {
	copyTextValue.value = settings.value.copyText;
	runTextValue.value = settings.value.runText;

	checkLibrary();
});

onMounted(() => {
	useTheme.value = settings.value.theme;
	loadTheme();
	mobileCheck();
	renderCode();

	window.addEventListener('orientationchange', mobileCheck);
});

onBeforeUnmount(() => {
	window.removeEventListener('orientationchange', mobileCheck);
});


// -------------------------------------------------- Methods //
function checkLibrary(): void {
	if (!settings.value.prismjs && !settings.value.highlightjs) {
		throw new Error('[vue-code-block]: You must set either the prismjs or highlightjs props.');
	}

	if (settings.value.prismjs && settings.value.highlightjs) {
		throw new Error('[vue-code-block]: You cannot have both prismjs and highlightjs props set at the same time.');
	}

	if (settings.value.highlightjs && settings.value.prismPlugin) {
		throw new Error('[vue-code-block]: Highlight.js does not support PrismJS plugins. Unexpected results may occur. Remove the `prism-plugin` prop from the vue-code-block component.');
	}
}

function isValidJSON(str: string): boolean {
	try {
		JSON.parse(str);
		return true;
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	catch (e) {
		return false;
	}
}

function convertCode(): void {
	const code = settings.value.code;

	// Objects & arrays are stringified so they can be highlighted //
	if (typeof code === 'object' && code !== null) {
		convertedCode.value = JSON.stringify(code, null, settings.value.indent);
		return;
	}

	const propsCode = code != null ? String(code) : '';

	if (settings.value.lang === 'json') {
		// Check if the code is valid JSON //
		if (isValidJSON(propsCode)) {
			convertedCode.value = JSON.stringify(JSON.parse(propsCode), null, settings.value.indent);
			return;
		}

		// Change lang to text if not valid JSON to prevent errors //
		settings.value.lang = 'text';
	}

	convertedCode.value = propsCode;
}

function copyCode(): void {
	if (copying.value) {
		return;
	}

	copying.value = true;

	navigator.clipboard.writeText(convertedCode.value as string).then(() => {
		copyTextValue.value = settings.value.copySuccessText;
		copyStatus.value = 'success';
		emit('update:copy-status', copyStatus.value);
	}, (err) => {
		copyTextValue.value = settings.value.copyFailedText;
		copyStatus.value = 'failed';
		emit('update:copy-status', copyStatus.value);
		console.error('Copy to clipboard failed: ', err);
	},
	);

	setTimeout(() => {
		copyTextValue.value = settings.value.copyText;
		copyStatus.value = 'copy';
		emit('update:copy-status', copyStatus.value);
		copying.value = false;
	}, 3000);
}

function loadTheme(): void {
	let selectedTheme = '';
	const activeLibrary = settings.value.highlightjs ? 'highlightjs' : 'prism';

	const head = document.getElementsByTagName('head')[0] as HTMLHeadElement;
	const themeStyles = document.createElement('style');
	const loadedTheme = document.body.getAttribute('data-v-code-block-theme');
	let themeId = `v-code-block--theme-${useTheme.value}-${activeLibrary}`;
	let isHighlightTheme = true;
	let isPrismTheme = true;
	let cssFilename = '';
	let fetchUrl = '';

	themeId = themeNameAdjustments(activeLibrary, themeId) as string;

	// If theme is loaded or false, do not keep trying to add it again //
	if (loadedTheme === useTheme.value || loadedTheme === themeId) {
		return;
	}

	// If theme is set to false, they are loading them them, do not continue //
	if (typeof useTheme.value === 'boolean') {
		return;
	}

	document.body.setAttribute('data-v-code-block-theme', themeId);

	themeStyles.setAttribute('type', 'text/css');
	themeStyles.setAttribute('data-theme-id', themeId);
	themeStyles.setAttribute('data-theme', 'v-code-block--theme-sheet');

	switch (useTheme.value) {
		case 'neon-bunny':
			selectedTheme = neonBunnyThemeMin;
			isPrismTheme = false;
			isHighlightTheme = false;

			if (activeLibrary === 'highlightjs') {
				selectedTheme = neonBunnyHighlightThemeMin;
			}
			break;
		case 'neon-bunny-carrot':
			selectedTheme = neonBunnyCarrotThemeMin;
			isPrismTheme = false;
			isHighlightTheme = false;

			if (activeLibrary === 'highlightjs') {
				selectedTheme = neonBunnyCarrotHighlightThemeMin;
			}
			break;
		default:
			break;
	}

	if (!isPrismTheme && !isHighlightTheme) {
		removeStylesheets();

		themeStyles.appendChild(document.createTextNode(selectedTheme));
		head.appendChild(themeStyles);

		return;
	}

	const adjustCssFilename = themeNameAdjustments(activeLibrary, useTheme.value);

	if (typeof settings.value.cssPath !== 'undefined') {
		fetchUrl = settings.value.cssPath;
	}
	else {
		switch (activeLibrary) {
			case 'highlightjs':
				cssFilename = `${adjustCssFilename}.min.css`;
				fetchUrl = `${highlightCdn.value}/${cssFilename}`;
				break;
			case 'prism':
				cssFilename = `${adjustCssFilename}.css`;

				if (useTheme.value === 'default') {
					fetchUrl = `${prismCdn.value}/prism.css`;
				}
				else if ((useTheme.value as string).includes('themes-')) {
					fetchUrl = `${prismThemesCdn.value}/${cssFilename}`;
				}
				else {
					fetchUrl = `${prismCdn.value}/prism-${cssFilename}`;
				}

				break;
			default:
				cssFilename = '';
				break;
		}
	}

	isLoading.value = true;

	fetch(fetchUrl).then((response) => {
		if (!response.ok) {
			throw new Error(`${response.status} ${response.statusText} (${fetchUrl})`);
		}

		return response.text();
	})
		.then((data) => {
			removeStylesheets();

			themeStyles.appendChild(document.createTextNode(data));
			head.appendChild(themeStyles);
			isLoading.value = false;
		})
		.catch((error) => {
			const activeLibrary = settings.value.highlightjs ? 'Highlight.js' : 'PrismJS';
			isLoading.value = false;
			console.error(`${activeLibrary} CDN Error:`, error);
		});
}

function mobileCheck(): void {
	const ua = UAParser();
	const device = ua.device;
	isMobile.value = device.type === 'mobile';
}

function themeNameAdjustments(lib: string, name: Settings['theme'], clean = false): Settings['theme'] {
	let newName = name as string;

	if (lib === 'prism') {
		newName = newName.replace('themes-', 'prism-');
		newName = newName.replace('prism-prism-', 'prism-');
		newName = newName.replace('theme-prism-', 'theme-');

		if (clean) {
			newName = newName.replace('prism-prism-', '');
			newName = newName.replace('prism-', '');
		}
	}

	if (lib === 'highlightjs') {
		newName = newName.replace('base16-', 'base16/');
	}

	return newName;
}

function removeStylesheets() {
	const themeSheets = document.querySelectorAll('[data-theme="v-code-block--theme-sheet"]');

	if (themeSheets.length > 0) {
		themeSheets.forEach((themeSheet) => {
			themeSheet.remove();
		});
	}
}

function renderCode(): void {
	convertCode();

	if (settings.value.highlightjs) {
		import('highlight.js')
			.then((module) => {
				hljs = module.default;
				hljs.registerLanguage('plain', langPlaintext);

				let language = settings.value.lang as string;

				if (!hljs.getLanguage(language)) {
					console.warn(`[vue-code-block]: Highlight.js language "${language}" is not registered. Falling back to plaintext.`);
					language = 'plaintext';
				}

				renderedCode.value = hljs.highlight(convertedCode.value as string, { language }).value;
			})
			.catch((err) => {
				console.error('Highlight.js import:', { err });
			});
	}

	if (settings.value.prismjs) {
		import('prismjs').then((module) => {
			prismModule = module.default;

			if (usePrismPlugin.value) {
				highlightPrismElement();
				return;
			}

			const grammar = prismModule.languages[settings.value.lang as string];

			if (!grammar) {
				console.warn(`[vue-code-block]: PrismJS language "${settings.value.lang}" is not loaded. Import it from "prismjs/components/prism-${settings.value.lang}". Falling back to plain text.`);
				renderedCode.value = prismModule.util.encode(convertedCode.value) as string;
				return;
			}

			renderedCode.value = prismModule.highlight(
				convertedCode.value,
				grammar,
				settings.value.lang,
			);
		})
			.catch((err) => {
				console.error('PrismJS import:', { err });
			});
	}
}

/**
 * Lets Prism highlight the <code> element directly so its hooks run,
 * which is what Prism plugins such as line-numbers rely on.
 */
function highlightPrismElement(): void {
	nextTick(() => {
		const codeEl = prismPluginCodeRef.value;

		if (!codeEl || !prismModule) {
			return;
		}

		codeEl.textContent = convertedCode.value as string;
		prismModule.highlightElement(codeEl);
	});
}

function runCode(): void {
	emit('run');
}
</script>

<style lang="scss">
@use './styles/utilities';

.v-code-block {
	&- {
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
@use './styles/main';
</style>
