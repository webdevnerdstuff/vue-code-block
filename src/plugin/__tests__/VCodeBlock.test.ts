import VCodeBlock from '../VCodeBlock.vue';
import { h } from 'vue';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { pluginName } from '../utils/globals';
import { codeBlockOptions } from '../';

describe('VCodeBlock Component', () => {

	// -------------------------------------------------- Component //
	describe('Component', () => {
		it('should mount the component', () => {
			const wrapper = mount(VCodeBlock, {
				props: { highlightjs: true }
			});

			const returnedProps = wrapper.getComponent(VCodeBlock).props();

			expect(returnedProps).toMatchSnapshot();
		});

		it('should mount the component using global options', () => {
			const wrapper = mount(VCodeBlock, {
				global: {
					provide: {
						[codeBlockOptions]: {
							browserWindow: true,
						},
					}
				},
				props: { highlightjs: true }
			});

			expect(wrapper.html()).toContain('v-code-block--code-browser');
		});
	});


	// -------------------------------------------------- Slots //
	describe('Slots', () => {
		it('should use label slot', () => {
			const wrapper = mount(VCodeBlock, {
				props: { highlightjs: true },
				slots: {
					label: h('div', { class: 'using-label-slot' }, 'Hello World'),
				}
			});

			const labelHtml = wrapper.find('.using-label-slot').html();

			expect(labelHtml).toMatchSnapshot();
		});

		it('should use tabs slot', () => {
			const wrapper = mount(VCodeBlock, {
				props: { highlightjs: true },
				slots: {
					tabs: h('div', { class: 'using-tabs-slot' }, 'This is the tabs slot'),
				}
			});

			const tabsHtml = wrapper.find('.using-tabs-slot').html();

			expect(tabsHtml).toMatchSnapshot();
		});

		it('should use copyButton slot', () => {
			const wrapper = mount(VCodeBlock, {
				props: { highlightjs: true },
				slots: {
					copyButton: h('div', { class: 'using-copy-button-slot' }, 'This is the copy button slot'),
				}
			});

			const copyButtonSlotHtml = wrapper.find('.using-copy-button-slot').html();

			expect(copyButtonSlotHtml).toMatchSnapshot();
		});
	});


	// -------------------------------------------------- Events //
	describe('Events', () => {
		it('should emit run event', () => {
			const wrapper = mount(VCodeBlock, {
				props: {
					prismjs: true,
					runTab: true,
					tabs: true,
				}
			});

			wrapper.find(`.${pluginName}--tab-run`).trigger('click');

			expect(wrapper.emitted()).toHaveProperty('run');
		});
	});


	// -------------------------------------------------- Attributes //
	describe('Attributes', () => {
		it('should add class hljs class to code tag when highlightjs prop is true', () => {
			const wrapper = mount(VCodeBlock, {
				props: { highlightjs: true }
			});

			const codeTag = wrapper.getComponent(VCodeBlock).find('code').attributes();

			expect(codeTag.class).toContain('hljs');
		});

		it('should add class attribute line-numbers to pre tag', () => {
			const wrapper = mount(VCodeBlock, {
				attrs: { class: 'line-numbers' },
				props: { highlightjs: true }
			});

			const preTag = wrapper.getComponent(VCodeBlock).find('pre').attributes();

			expect(preTag.class).toContain('line-numbers');
		});
	});


	// -------------------------------------------------- Errors //
	describe('Errors', () => {
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
				mount(VCodeBlock);
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
});
