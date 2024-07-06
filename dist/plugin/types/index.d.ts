import { CSSProperties, MaybeRef } from 'vue';
import { default as VCodeBlock } from '../VCodeBlock.vue';

export * from '../index';
export type UseTheme = MaybeRef<string | boolean>;
export type CopyStatus = MaybeRef<'copy' | 'success' | 'failed'>;
export interface Props {
    browserWindow?: boolean;
    cssPath?: string | undefined;
    code?: object | [] | string | number;
    codeBlockRadius?: string;
    copyButton?: boolean;
    copyIcons?: boolean;
    copyTab?: boolean;
    copyFailedText?: string;
    copyText?: string;
    copySuccessText?: string;
    floatingTabs?: boolean;
    globalOptions?: boolean;
    height?: string | number;
    highlightjs?: boolean;
    indent?: number;
    label?: string;
    lang?: string;
    languages?: string[];
    maxHeight?: string | number;
    persistentCopyButton?: boolean;
    prismjs?: boolean;
    prismPlugin?: boolean;
    runTab?: boolean;
    runText?: string;
    tabGap?: string | number;
    tabs?: boolean;
    theme?: string | boolean;
}
export interface UseConvertToUnit {
    (options: {
        str: string | number | undefined | null;
        unit?: string;
    }): string | void;
}
export interface UseCodeBlockClasses {
    (options: {
        isMobile: MaybeRef<boolean>;
        isPrism: MaybeRef<boolean>;
    }): object;
}
export interface UseCopyButtonClasses {
    (options: {
        copyStatus: CopyStatus;
        isMobile: MaybeRef<boolean>;
        persistentCopyButton: MaybeRef<Props['persistentCopyButton']>;
    }): object;
}
export interface UseIconClasses {
    (options: {
        copyStatus: CopyStatus;
        highlightjs: MaybeRef<Props['highlightjs']>;
        useTheme: UseTheme;
    }): object;
}
export interface UseLabelClasses {
    (options: {
        isMobile: MaybeRef<boolean>;
    }): object;
}
export interface UseTabClasses {
    (options: {
        highlightjs: MaybeRef<Props['highlightjs']>;
        useTheme: UseTheme;
    }): object;
}
export interface UseCodeTagStyles {
    (options: {
        isLoading: MaybeRef<boolean>;
        useTheme: UseTheme;
    }): CSSProperties;
}
export interface UseHeaderStyles {
    (options: {
        floatingTabs: MaybeRef<Props['floatingTabs']>;
        tabGap: MaybeRef<Props['tabGap']>;
    }): CSSProperties;
}
export interface UsePreTagStyles {
    (options: {
        copyTab: MaybeRef<Props['copyTab']>;
        height: MaybeRef<Props['height']>;
        maxHeight: MaybeRef<Props['maxHeight']>;
        radius: MaybeRef<Props['codeBlockRadius']>;
        runTab: MaybeRef<Props['runTab']>;
        tabs: MaybeRef<Props['tabs']>;
        useTheme: UseTheme;
    }): CSSProperties;
}
export interface UseTabGroupStyles {
    (options: {
        tabGap: MaybeRef<Props['tabGap']>;
    }): CSSProperties;
}
declare module "vue" {
    interface ComponentCustomProperties {
    }
    interface GlobalComponents {
        VCodeBlock: typeof VCodeBlock;
    }
}
