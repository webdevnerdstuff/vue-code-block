import VCodeBlock from '../VCodeBlock.vue';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';


describe('VCodeBlock Component', () => {

	it('should mount the component', () => {
		const wrapper = mount(VCodeBlock, {
			props: {
				prismjs: true,
			}
		});
		const returnedProps = wrapper.getComponent(VCodeBlock).props();

		expect(returnedProps).toMatchInlineSnapshot(`
			{
			  "browserWindow": false,
			  "code": "",
			  "codeBlockRadius": "0.5rem",
			  "copyButton": true,
			  "copyFailedText": "Copy failed!",
			  "copyIcons": true,
			  "copySuccessText": "Copied!",
			  "copyTab": true,
			  "copyText": "Copy Code",
			  "cssPath": undefined,
			  "floatingTabs": true,
			  "globalOptions": false,
			  "height": "auto",
			  "highlightjs": false,
			  "indent": 2,
			  "label": "",
			  "lang": "javascript",
			  "languages": undefined,
			  "maxHeight": "auto",
			  "persistentCopyButton": false,
			  "prismPlugin": false,
			  "prismjs": true,
			  "runTab": false,
			  "runText": "Run",
			  "tabGap": "0.25rem",
			  "tabs": false,
			  "theme": "neon-bunny",
			}
		`);
	});

	// -------------------------------------------------- Errors //
	const throwErrors = {
		bothSet: '[vue-code-block]: You cannot have both prismjs and highlightjs props set at the same time.',
		neitherSet: '[vue-code-block]: You must set either the prismjs or highlightjs props.',
	};

	it('should throw error if both prismjs and highlightjs props are true', () => {
		expect(() => {
			mount(VCodeBlock, {
				props: {
					prismjs: true,
					highlightjs: true,
				}
			});
		}).toThrowError(throwErrors.bothSet);
	});

	it('should throw error if both prismjs and highlightjs props are not set', () => {
		expect(() => {
			mount(VCodeBlock, {
				props: {
				}
			});
		}).toThrowError(throwErrors.neitherSet);
	});

	it('should throw error if neither prismjs or highlightjs props are true', () => {
		expect(() => {
			mount(VCodeBlock, {
				props: {
					prismjs: false,
					highlightjs: false,
				}
			});
		}).toThrowError(throwErrors.neitherSet);
	});

	it('should throw error if highlightjs used with prismPlugin prop', () => {
		expect(() => {
			mount(VCodeBlock, {
				props: {
					highlightjs: true,
					prismPlugin: true,
				}
			});
		}).toThrowError('[vue-code-block]: Highlight.js does not support PrismJS plugins. Unexpected results may occur. Remove the `prism-plugin` prop from the vue-code-block component.');
	});
});
