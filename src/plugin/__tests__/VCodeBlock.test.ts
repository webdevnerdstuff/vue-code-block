import VCodeBlock from '../VCodeBlock.vue';
import { h } from 'vue';
import { describe, it, expect, vi } from 'vitest';
import 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import { mount } from '@vue/test-utils';
import { pluginName } from '../data/globals';
import { pluginOptionsInjectionKey } from '../data/globals';

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
						[pluginOptionsInjectionKey as symbol]: {
							browserWindow: true,
						},
					}
				},
				props: { highlightjs: true }
			});

			expect(wrapper.html()).toContain('v-code-block--code-browser');
		});

		it('should let component props override global options', () => {
			const wrapper = mount(VCodeBlock, {
				global: {
					provide: {
						[pluginOptionsInjectionKey as symbol]: {
							browserWindow: true,
						},
					}
				},
				props: { browserWindow: false, highlightjs: true }
			});

			expect(wrapper.html()).not.toContain('v-code-block--code-browser');
		});
	});


	// -------------------------------------------------- Code //
	describe('Code', () => {
		it('should stringify object code', async () => {
			const wrapper = mount(VCodeBlock, {
				props: {
					code: { foo: 'bar' },
					lang: 'json',
					prismjs: true,
				}
			});

			await vi.waitFor(() => {
				expect(wrapper.find('code').text()).toContain('"foo": "bar"');
			});
		});

		it('should clear the rendered code when code is emptied', async () => {
			const wrapper = mount(VCodeBlock, {
				props: {
					code: 'const a = 1;',
					prismjs: true,
				}
			});

			await vi.waitFor(() => {
				expect(wrapper.find('code').text()).toContain('const a = 1;');
			});

			await wrapper.setProps({ code: '' });

			await vi.waitFor(() => {
				expect(wrapper.find('code').text()).toBe('');
			});
		});
	});


	// -------------------------------------------------- Prism Plugins //
	describe('Prism Plugins', () => {
		it('should render line numbers when using the prism line-numbers plugin', async () => {
			const wrapper = mount(VCodeBlock, {
				attachTo: document.body,
				attrs: { class: 'line-numbers' },
				props: {
					code: 'const a = 1;\nconst b = 2;\nconst c = 3;',
					lang: 'javascript',
					prismPlugin: true,
					prismjs: true,
				}
			});

			await vi.waitFor(() => {
				expect(wrapper.find('.line-numbers-rows').exists()).toBe(true);
			});

			expect(wrapper.findAll('.line-numbers-rows > span')).toHaveLength(3);
			expect(wrapper.find('code .token.keyword').exists()).toBe(true);

			wrapper.unmount();
		});

		it('should re-highlight when the code prop changes', async () => {
			const wrapper = mount(VCodeBlock, {
				attachTo: document.body,
				attrs: { class: 'line-numbers' },
				props: {
					code: 'const a = 1;',
					prismPlugin: true,
					prismjs: true,
				}
			});

			await vi.waitFor(() => {
				expect(wrapper.findAll('.line-numbers-rows > span')).toHaveLength(1);
			});

			await wrapper.setProps({ code: 'const a = 1;\nconst b = 2;' });

			await vi.waitFor(() => {
				expect(wrapper.findAll('.line-numbers-rows > span')).toHaveLength(2);
			});

			wrapper.unmount();
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
