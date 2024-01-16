import type { App } from 'vue';
import type { Props } from './types';
import VCodeBlock from './VCodeBlock.vue';
export declare const codeBlockOptions: unique symbol;
export declare function createVCodeBlock(options?: Props): {
    install: (app: App) => void;
};
export default VCodeBlock;
export { VCodeBlock, };
