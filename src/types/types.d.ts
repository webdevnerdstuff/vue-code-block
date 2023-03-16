export interface OptionsSettings {
	code?: string;
	codeBlockRadius?: string | number;
	copyIcon?: string;
	copyText?: string;
	failedIcon?: string;
	indent?: number;
	label?: string;
	lang?: string;
	showButtons?: boolean;
	showCopyButton?: boolean;
	showCopyIcons?: boolean;
	showRunButton?: boolean;
	successIcon?: string;
	tabGap?: string | number;
	theme?: string;
}

declare let Prism;
