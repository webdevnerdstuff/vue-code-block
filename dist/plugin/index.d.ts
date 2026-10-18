import { Props } from './types';
import { Plugin } from 'vue';
import { default as VCodeBlock } from './VCodeBlock.vue';
export declare const codeBlockOptions: unique symbol;
export declare function createVCodeBlock(options?: Props): Plugin;
export default VCodeBlock;
export { VCodeBlock };
