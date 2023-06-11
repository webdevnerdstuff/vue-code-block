import { CSSProperties, MaybeRef } from 'vue';
export type UseTheme = MaybeRef<string | boolean>;
export type Props = {
    browserWindow?: boolean;
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
    maxHeight?: string | number;
    persistentCopyButton?: boolean;
    prismjs?: boolean;
    prismPlugin?: boolean;
    runTab?: boolean;
    runText?: string;
    tabGap?: string | number;
    tabs?: boolean;
    theme?: string | boolean;
};
export interface UseCodeBlockClasses {
    (options: {
        isMobile: MaybeRef<boolean>;
        isPrism: MaybeRef<boolean>;
    }): object;
}
export interface UseCopyButtonClasses {
    (options: {
        copyStatus: MaybeRef<string>;
        isMobile: MaybeRef<boolean>;
        persistentCopyButton: MaybeRef<boolean>;
    }): object;
}
export interface UseIconClasses {
    (options: {
        copyStatus: MaybeRef<string>;
        highlightjs: MaybeRef<boolean>;
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
        highlightjs: MaybeRef<boolean>;
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
