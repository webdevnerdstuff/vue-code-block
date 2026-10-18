import { Props } from './types';
declare function copyCode(): void;
declare function runCode(): void;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        label?(_: {
            copyCode: typeof copyCode;
            copyStatus: "copy" | "success" | "failed";
            runCode: typeof runCode;
        }): any;
        tabs?(_: {
            copyCode: typeof copyCode;
            copyStatus: "copy" | "success" | "failed";
            runCode: typeof runCode;
        }): any;
        copyButton?(_: {
            copyStatus: "copy" | "success" | "failed";
        }): any;
    };
    refs: {
        prismPluginCodeRef: HTMLElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    run: (...args: any[]) => void;
    "update:copy-status": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onRun?: ((...args: any[]) => any) | undefined;
    "onUpdate:copy-status"?: ((...args: any[]) => any) | undefined;
}>, {
    theme: string | boolean;
    browserWindow: boolean;
    cssPath: string;
    code: object | [] | string | number;
    codeBlockRadius: string;
    copyButton: boolean;
    copyIcons: boolean;
    copyTab: boolean;
    copyFailedText: string;
    copyText: string;
    copySuccessText: string;
    floatingTabs: boolean;
    height: string | number;
    highlightjs: boolean;
    indent: number;
    label: string;
    lang: string;
    maxHeight: string | number;
    persistentCopyButton: boolean;
    prismjs: boolean;
    prismPlugin: boolean;
    runTab: boolean;
    runText: string;
    tabGap: string | number;
    tabs: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    prismPluginCodeRef: HTMLElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
