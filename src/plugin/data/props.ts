
export const AllProps = {
	browserWindow: false,
	code: '',
	codeBlockRadius: '0.5rem',
	copyButton: true,
	copyFailedText: 'Copy failed!',
	copyIcons: true,
	copySuccessText: 'Copied!',
	copyTab: true,
	copyText: 'Copy Code',
	cssPath: undefined,
	floatingTabs: true,
	height: 'auto',
	highlightjs: false,
	indent: 2,
	label: '',
	lang: 'javascript',
	maxHeight: 'auto',
	persistentCopyButton: false,
	prismPlugin: false,
	prismjs: false,
	runTab: false,
	runText: 'Run',
	tabGap: '0.25rem',
	tabs: false,
	theme: 'neon-bunny',
};

// Used as the component prop defaults so unset props can fall back to the global plugin options //
export const UndefinedProps = Object.fromEntries(
	Object.keys(AllProps).map((key) => [key, undefined]),
) as { [K in keyof typeof AllProps]: undefined };
