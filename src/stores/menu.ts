import { defineStore } from 'pinia';
import { useCoreStore } from './index';


export const useMenuStore = defineStore('menu', () => {
	const coreStore = useCoreStore();
	const links = coreStore.links;

	const eventItems = [
		{
			href: '#examples',
			icon: 'mdi:mdi-code-json',
			key: 'languages',
			title: 'Languages',
		},
		{
			href: '#examples-additional-languages',
			icon: 'mdi:mdi-code-json',
			key: 'add-languages',
			title: 'Additional languages',
		},
		{
			href: '#examples-plugins',
			icon: 'mdi:mdi-code-json',
			key: 'plugins',
			title: 'Plugins',
		},
		{
			href: '#examples-tabs',
			icon: 'mdi:mdi-code-json',
			key: 'tabs',
			title: 'Tabs',
		},
		{
			href: '#examples-copy-button',
			icon: 'mdi:mdi-code-json',
			key: 'copy-button',
			title: 'Copy Button',
		},
		{
			href: '#examples-browser-window',
			icon: 'mdi:mdi-code-json',
			key: 'browser-window',
			title: 'Browser Window',
		},
		{
			href: '#examples-other-props',
			icon: 'mdi:mdi-code-json',
			key: 'other-props',
			title: 'Other Props',
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
			items: [...eventItems],
			key: 'examples',
			title: 'Examples',
		},
		// {
		// 	href: '#examples',
		// 	icon: 'mdi:mdi-code-json',
		// 	title: 'Examples',
		// },
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
