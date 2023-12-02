import type { App } from 'vue';
import type { Props } from './types';
import VCodeBlock from '../plugin/VCodeBlock.vue';
export declare const codeBlockOptions: unique symbol;
export declare function createVCodeBlock(options?: Props): (app: App) => void;
export { VCodeBlock, };
