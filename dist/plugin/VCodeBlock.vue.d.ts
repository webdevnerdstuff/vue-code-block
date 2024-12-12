import { Props } from './types';

declare function copyCode(): void;
declare function runCode(): void;
declare function __VLS_template(): {
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
declare const __VLS_component: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    browserWindow: boolean;
    cssPath: undefined;
    code: string;
    codeBlockRadius: string;
    copyButton: boolean;
    copyIcons: boolean;
    copyTab: boolean;
    copyFailedText: string;
    copyText: string;
    copySuccessText: string;
    floatingTabs: boolean;
    height: string;
    highlightjs: boolean;
    indent: number;
    label: string;
    lang: string;
    maxHeight: string;
    persistentCopyButton: boolean;
    prismjs: boolean;
    prismPlugin: boolean;
    runTab: boolean;
    runText: string;
    tabGap: string;
    tabs: boolean;
    theme: string;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    run: (...args: any[]) => void;
    "update:copy-status": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    browserWindow: boolean;
    cssPath: undefined;
    code: string;
    codeBlockRadius: string;
    copyButton: boolean;
    copyIcons: boolean;
    copyTab: boolean;
    copyFailedText: string;
    copyText: string;
    copySuccessText: string;
    floatingTabs: boolean;
    height: string;
    highlightjs: boolean;
    indent: number;
    label: string;
    lang: string;
    maxHeight: string;
    persistentCopyButton: boolean;
    prismjs: boolean;
    prismPlugin: boolean;
    runTab: boolean;
    runText: string;
    tabGap: string;
    tabs: boolean;
    theme: string;
}>>> & {
    onRun?: ((...args: any[]) => any) | undefined;
    "onUpdate:copy-status"?: ((...args: any[]) => any) | undefined;
}, {
    highlightjs: boolean;
    prismjs: boolean;
    persistentCopyButton: boolean;
    floatingTabs: boolean;
    tabGap: string | number;
    copyTab: boolean;
    height: string | number;
    maxHeight: string | number;
    codeBlockRadius: string;
    runTab: boolean;
    tabs: boolean;
    browserWindow: boolean;
    cssPath: string;
    code: object | [] | string | number;
    copyButton: boolean;
    copyIcons: boolean;
    copyFailedText: string;
    copyText: string;
    copySuccessText: string;
    indent: number;
    label: string;
    lang: string;
    prismPlugin: boolean;
    runText: string;
    theme: string | boolean;
}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
