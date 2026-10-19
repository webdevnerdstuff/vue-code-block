import VCodeBlock from '../VCodeBlock.vue';
import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import { pluginName } from '../data/globals';
import { AllProps } from '../data/props';

const copyButton = `.${pluginName}--code-copy-button`;
const copyTab = `.${pluginName}--button-copy`;

function mountCopyBlock(props = {}) {
	return mount(VCodeBlock, {
		props: {
			code: 'const a = 1;',
			copyTab: true,
			prismjs: true,
			tabs: true,
			...props,
		}
	});
}

describe('VCodeBlock Copy', () => {
	let writeText: ReturnType<typeof vi.fn>;

	beforeEach(() => {
		vi.useFakeTimers({ toFake: ['setTimeout'] });
		writeText = vi.fn().mockResolvedValue(undefined);
		Object.defineProperty(navigator, 'clipboard', {
			configurable: true,
			value: { writeText },
		});
	});

	afterEach(() => {
		vi.useRealTimers();
		vi.restoreAllMocks();
	});


	// -------------------------------------------------- Success //
	describe('Success', () => {
		it('should copy the code and show the success status and text', async () => {
			const wrapper = mountCopyBlock();

			await wrapper.find(copyTab).trigger('click');
			await flushPromises();

			expect(writeText).toHaveBeenCalledWith('const a = 1;');
			expect(wrapper.find(copyTab).text()).toBe(AllProps.copySuccessText);
			expect(wrapper.emitted('update:copy-status')).toEqual([['success']]);
			expect(wrapper.find(copyButton).classes()).toContain(`${pluginName}--code-copy-button-status-success`);
		});

		it('should copy from the copy button', async () => {
			const wrapper = mountCopyBlock({ tabs: false });

			await wrapper.find(copyButton).trigger('click');
			await flushPromises();

			expect(writeText).toHaveBeenCalledTimes(1);
			expect(wrapper.emitted('update:copy-status')).toEqual([['success']]);
		});

		it('should use custom copy texts', async () => {
			const wrapper = mountCopyBlock({ copySuccessText: 'Done', copyText: 'Grab it' });

			expect(wrapper.find(copyTab).text()).toBe('Grab it');

			await wrapper.find(copyTab).trigger('click');
			await flushPromises();

			expect(wrapper.find(copyTab).text()).toBe('Done');
		});

		it('should copy the converted code, not the highlighted html', async () => {
			const wrapper = mountCopyBlock({ code: { foo: 'bar' }, lang: 'json' });

			await wrapper.find(copyTab).trigger('click');
			await flushPromises();

			expect(writeText).toHaveBeenCalledWith('{\n  "foo": "bar"\n}');
		});
	});


	// -------------------------------------------------- Failed //
	describe('Failed', () => {
		it('should show the failed status and text when the clipboard rejects', async () => {
			const error = new Error('Denied');
			const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
			writeText.mockRejectedValue(error);

			const wrapper = mountCopyBlock({ copyFailedText: 'Nope' });

			await wrapper.find(copyTab).trigger('click');
			await flushPromises();

			expect(wrapper.find(copyTab).text()).toBe('Nope');
			expect(wrapper.emitted('update:copy-status')).toEqual([['failed']]);
			expect(wrapper.find(copyButton).classes()).toContain(`${pluginName}--code-copy-button-status-failed`);
			expect(consoleError).toHaveBeenCalledWith('Copy to clipboard failed: ', error);
		});
	});


	// -------------------------------------------------- Reset //
	describe('Reset', () => {
		it('should reset to copy after 3 seconds', async () => {
			const wrapper = mountCopyBlock();

			await wrapper.find(copyTab).trigger('click');
			await flushPromises();

			vi.advanceTimersByTime(2999);
			await flushPromises();

			expect(wrapper.find(copyTab).text()).toBe(AllProps.copySuccessText);

			vi.advanceTimersByTime(1);
			await flushPromises();

			expect(wrapper.find(copyTab).text()).toBe(AllProps.copyText);
			expect(wrapper.emitted('update:copy-status')).toEqual([['success'], ['copy']]);
			expect(wrapper.find(copyButton).classes()).toContain(`${pluginName}--code-copy-button-status-copy`);
		});

		it('should ignore clicks while a copy is in progress', async () => {
			const wrapper = mountCopyBlock();

			await wrapper.find(copyTab).trigger('click');
			await wrapper.find(copyTab).trigger('click');
			await flushPromises();

			expect(writeText).toHaveBeenCalledTimes(1);

			vi.advanceTimersByTime(3000);
			await flushPromises();

			await wrapper.find(copyTab).trigger('click');
			await flushPromises();

			expect(writeText).toHaveBeenCalledTimes(2);
		});
	});
});
