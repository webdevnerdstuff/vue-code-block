declare const _default: import("vue").DefineComponent<{
    browserWindow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    code: {
        type: (ObjectConstructor | ArrayConstructor | StringConstructor | NumberConstructor)[];
        required: true;
    };
    codeBlockRadius: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    copyButton: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    copyIcons: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    copyTab: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    copyFailedText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    copyText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    copySuccessText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    floatingTabs: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: string;
    };
    indent: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    label: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    lang: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: string;
    };
    persistentCopyButton: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    runTab: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    runText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    tabGap: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    tabs: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    theme: {
        type: (BooleanConstructor | StringConstructor)[];
        required: false;
        default: string;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("run" | "update:copy-status")[], "run" | "update:copy-status", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    browserWindow: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    code: {
        type: (ObjectConstructor | ArrayConstructor | StringConstructor | NumberConstructor)[];
        required: true;
    };
    codeBlockRadius: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    copyButton: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    copyIcons: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    copyTab: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    copyFailedText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    copyText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    copySuccessText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    floatingTabs: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: string;
    };
    indent: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    label: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    lang: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: string;
    };
    persistentCopyButton: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    runTab: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    runText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    tabGap: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    tabs: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    theme: {
        type: (BooleanConstructor | StringConstructor)[];
        required: false;
        default: string;
    };
}>> & {
    onRun?: (...args: any[]) => any;
    "onUpdate:copy-status"?: (...args: any[]) => any;
}, {
    browserWindow: boolean;
    codeBlockRadius: string;
    copyButton: boolean;
    copyIcons: boolean;
    copyTab: boolean;
    copyFailedText: string;
    copyText: string;
    copySuccessText: string;
    floatingTabs: boolean;
    height: string | number;
    indent: number;
    label: string;
    lang: string;
    maxHeight: string | number;
    persistentCopyButton: boolean;
    runTab: boolean;
    runText: string;
    tabGap: string;
    tabs: boolean;
    theme: string | boolean;
}>;
export default _default;
