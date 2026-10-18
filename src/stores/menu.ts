import { defineStore } from 'pinia';
import { useCoreStore } from './index';


export const useMenuStore = defineStore('menu', () => {
	const coreStore = useCoreStore();
	const links = coreStore.links;

	const exampleItems = [
		{
			href: '#examples-javascript',
			icon: 'mdi:mdi-language-javascript',
			key: 'examples-javascript',
			title: 'JavaScript',
		},
		{
			href: '#examples-vue',
			icon: 'mdi:mdi-vuejs',
			key: 'examples-vue',
			title: 'Vue',
		},
		{
			href: '#examples-css',
			icon: 'mdi:mdi-language-css3',
			key: 'examples-css',
			title: 'CSS',
		},
		{
			href: '#examples-html',
			icon: 'mdi:mdi-language-html5',
			key: 'examples-html',
			title: 'HTML',
		},
		{
			href: '#examples-typescript',
			icon: 'mdi:mdi-language-typescript',
			key: 'examples-typescript',
			title: 'TypeScript',
		},
		{
			href: '#examples-json',
			icon: 'mdi:mdi-code-json',
			key: 'examples-json',
			title: 'JSON',
		},
		{
			href: '#examples-php',
			icon: 'mdi:mdi-language-php',
			key: 'examples-php',
			title: 'PHP',
		},
		{
			href: '#examples-plugins',
			icon: 'mdi:mdi-puzzle',
			key: 'examples-plugins',
			title: 'Plugins',
		},
		{
			href: '#examples-copy-tab',
			icon: 'mdi:mdi-content-copy',
			key: 'examples-copy-tab',
			title: 'Copy Tab',
		},
		{
			href: '#examples-run-tab',
			icon: 'mdi:mdi-play',
			key: 'examples-run-tab',
			title: 'Run Tab',
		},
		{
			href: '#examples-copy-and-run-tabs',
			icon: 'mdi:mdi-tab',
			key: 'examples-copy-and-run-tabs',
			title: 'Copy and Run Tabs',
		},
		{
			href: '#examples-copy-button',
			icon: 'mdi:mdi-content-copy',
			key: 'examples-copy-button',
			title: 'Copy Button',
		},
		{
			href: '#examples-persistent-copy-button',
			icon: 'mdi:mdi-pin',
			key: 'examples-persistent-copy-button',
			title: 'Persistent Copy Button',
		},
		{
			href: '#examples-browser-window',
			icon: 'mdi:mdi-application-outline',
			key: 'examples-browser-window',
			title: 'Browser Window',
		},
		{
			href: '#examples-code-block-radius',
			icon: 'mdi:mdi-rounded-corner',
			key: 'examples-code-block-radius',
			title: 'Code Block Radius',
		},
		{
			href: '#examples-copy-text',
			icon: 'mdi:mdi-form-textbox',
			key: 'examples-copy-text',
			title: 'Copy Text',
		},
		{
			href: '#examples-run-text',
			icon: 'mdi:mdi-play-box-outline',
			key: 'examples-run-text',
			title: 'Run Text',
		},
		{
			href: '#examples-floating-tabs',
			icon: 'mdi:mdi-tab-unselected',
			key: 'examples-floating-tabs',
			title: 'Floating Tabs',
		},
		{
			href: '#examples-height',
			icon: 'mdi:mdi-arrow-expand-vertical',
			key: 'examples-height',
			title: 'Height',
		},
		{
			href: '#examples-tab-gap',
			icon: 'mdi:mdi-arrow-expand-horizontal',
			key: 'examples-tab-gap',
			title: 'Tab Gap',
		},
		{
			href: '#examples-indent',
			icon: 'mdi:mdi-format-indent-increase',
			key: 'examples-indent',
			title: 'Indent',
		},
	];

	const libraryItems = [
		{
			key: 'highlightjs',
			link: links.highlightjs,
			src: 'https://www.google.com/s2/favicons?sz=64&domain=highlightjs.org',
			title: 'Highlight.js',
		},
		{
			icon: 'mdi:mdi-triangle',
			key: 'prismjs',
			link: links.prismjs,
			title: 'PrismJS',
		},
	];

	const menuItems = [
		{
			href: '#home',
			icon: 'mdi:mdi-home',
			title: 'Home',
		},
		{
			href: '#installation',
			icon: 'mdi:mdi-plus-thick',
			title: 'Installation',
		},
		{
			href: '#description',
			icon: 'mdi:mdi-information-outline',
			title: 'Description',
		},
		{
			href: '#usage',
			icon: 'mdi:mdi-power-plug-outline',
			title: 'Usage',
		},
		{
			href: '#props',
			icon: 'mdi:mdi-cog',
			title: 'Props',
		},
		{
			href: '#events',
			icon: 'mdi:mdi-calendar-star',
			title: 'Events',
		},
		{
			href: '#slots',
			icon: 'mdi:mdi-slot-machine',
			title: 'Slots',
		},
		{
			href: '#examples',
			icon: 'mdi:mdi-code-json',
			items: [...exampleItems],
			key: 'examples',
			title: 'Examples',
		},
		{
			href: '#playground',
			icon: 'mdi:mdi-seesaw',
			title: 'Playground',
		},
		{
			href: '#dependencies',
			icon: 'mdi:mdi-asterisk-circle-outline',
			title: 'Dependencies',
		},
		{
			href: '#license',
			icon: 'mdi:mdi-card-account-details-outline',
			title: 'License',
		},
	];

	return {
		libraryItems,
		menuItems,
	};
});
