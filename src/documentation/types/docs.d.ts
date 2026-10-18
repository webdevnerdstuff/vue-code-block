
declare namespace Docs {
	export interface KeyStringAny<T = any> {
		[key: string]: T;
	}

	export interface DrawerOptions {
		absolute: boolean;
		color: string;
		elevation: number;
	}

	export interface Links {
		changeLog: string;
		github: string;
		githubProfile: string;
		highlightjs: string;
		license: string;
		neonBunnyTheme: string;
		npm: string;
		pnpm: string;
		prismjs: string;
		uaParser: string;
		vue: string;
		vueUse: string;
	}

	export interface Library {
		id: string;
		title: string;
	}

	export interface CodeBlockSettings {
		plugin: Library;
		preHeight: number;
		theme: string;
	}

	export type SelectedTheme = string;

	export interface GlobalClasses extends KeyStringAny<string> {
		appLink: string;
		h2: string;
		h3: string;
		h4: string;
		headerA: string;
	}

	export interface MenuItem {
		href?: string;
		icon?: string;
		items?: MenuItem[];
		key?: string;
		link?: string;
		title: string;
		topTitle?: string;
	}
}
