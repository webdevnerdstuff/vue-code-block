declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    persistentCopyButton: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    highlightjs: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    floatingTabs: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    tabGap: {
        type: globalThis.PropType<string | number>;
        default: string;
    };
    copyTab: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    height: {
        type: globalThis.PropType<string | number>;
        default: string;
    };
    maxHeight: {
        type: globalThis.PropType<string | number>;
        default: string;
    };
    codeBlockRadius: {
        type: globalThis.PropType<string>;
        default: string;
    };
    runTab: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    tabs: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    code: {
        type: globalThis.PropType<string | number | object | []>;
        default: string;
    };
    label: {
        type: globalThis.PropType<string>;
        default: string;
    };
    lang: {
        type: globalThis.PropType<string>;
        default: string;
    };
    browserWindow: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    copyButton: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    copyIcons: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    copyFailedText: {
        type: globalThis.PropType<string>;
        default: string;
    };
    copyText: {
        type: globalThis.PropType<string>;
        default: string;
    };
    copySuccessText: {
        type: globalThis.PropType<string>;
        default: string;
    };
    globalOptions: {
        type: globalThis.PropType<boolean>;
    };
    indent: {
        type: globalThis.PropType<number>;
        default: number;
    };
    languages: {
        type: globalThis.PropType<string[]>;
    };
    prismjs: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    prismPlugin: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    runText: {
        type: globalThis.PropType<string>;
        default: string;
    };
    theme: {
        type: globalThis.PropType<string | boolean>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("run" | "update:copy-status")[], "run" | "update:copy-status", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    persistentCopyButton: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    highlightjs: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    floatingTabs: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    tabGap: {
        type: globalThis.PropType<string | number>;
        default: string;
    };
    copyTab: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    height: {
        type: globalThis.PropType<string | number>;
        default: string;
    };
    maxHeight: {
        type: globalThis.PropType<string | number>;
        default: string;
    };
    codeBlockRadius: {
        type: globalThis.PropType<string>;
        default: string;
    };
    runTab: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    tabs: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    code: {
        type: globalThis.PropType<string | number | object | []>;
        default: string;
    };
    label: {
        type: globalThis.PropType<string>;
        default: string;
    };
    lang: {
        type: globalThis.PropType<string>;
        default: string;
    };
    browserWindow: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    copyButton: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    copyIcons: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    copyFailedText: {
        type: globalThis.PropType<string>;
        default: string;
    };
    copyText: {
        type: globalThis.PropType<string>;
        default: string;
    };
    copySuccessText: {
        type: globalThis.PropType<string>;
        default: string;
    };
    globalOptions: {
        type: globalThis.PropType<boolean>;
    };
    indent: {
        type: globalThis.PropType<number>;
        default: number;
    };
    languages: {
        type: globalThis.PropType<string[]>;
    };
    prismjs: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    prismPlugin: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    runText: {
        type: globalThis.PropType<string>;
        default: string;
    };
    theme: {
        type: globalThis.PropType<string | boolean>;
        default: string;
    };
}>> & {
    onRun?: ((...args: any[]) => any) | undefined;
    "onUpdate:copy-status"?: ((...args: any[]) => any) | undefined;
}, {
    persistentCopyButton: boolean;
    highlightjs: boolean;
    floatingTabs: boolean;
    tabGap: string | number;
    copyTab: boolean;
    height: string | number;
    maxHeight: string | number;
    codeBlockRadius: string;
    runTab: boolean;
    tabs: boolean;
    code: string | number | object | [];
    label: string;
    lang: string;
    browserWindow: boolean;
    copyButton: boolean;
    copyIcons: boolean;
    copyFailedText: string;
    copyText: string;
    copySuccessText: string;
    indent: number;
    prismjs: boolean;
    prismPlugin: boolean;
    runText: string;
    theme: string | boolean;
}, {}>, {
    label?(_: {}): any;
    tabs?(_: {}): any;
    copyButton?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
