import { App } from 'vue';
import { Props } from './types';
import { default as VCodeBlock } from './VCodeBlock.vue';

export declare const codeBlockOptions: unique symbol;
export declare function createVCodeBlock(options?: Props): {
    install: (app: App) => void;
};
export default VCodeBlock;
export { VCodeBlock, };
