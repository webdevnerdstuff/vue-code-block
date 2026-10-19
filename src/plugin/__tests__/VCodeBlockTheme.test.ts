import VCodeBlock from '../VCodeBlock.vue';
import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import {
	neonBunnyCarrotHighlightThemeMin,
	neonBunnyCarrotThemeMin,
	neonBunnyHighlightThemeMin,
	neonBunnyThemeMin,
} from '../themes';

const highlightCdn = 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.12.0/build/styles';
const prismCdn = 'https://cdn.jsdelivr.net/gh/PrismJS/prism@1.30.0/themes';
const prismThemesCdn = 'https://cdn.jsdelivr.net/gh/PrismJS/prism-themes@1.9.0/themes';
const themeSheetSelector = '[data-theme="v-code-block--theme-sheet"]';

function themeSheets(): HTMLStyleElement[] {
	return Array.from(document.querySelectorAll(themeSheetSelector));
}

function mockFetchResponse(css = '.theme {}') {
	return vi.fn().mockResolvedValue({
		ok: true,
		status: 200,
		statusText: 'OK',
		text: () => Promise.resolve(css),
	});
}

describe('VCodeBlock Theme', () => {
	let fetchMock: ReturnType<typeof vi.fn>;

	beforeEach(() => {
		themeSheets().forEach((sheet) => sheet.remove());
		document.body.removeAttribute('data-v-code-block-theme');
		fetchMock = mockFetchResponse();
		vi.stubGlobal('fetch', fetchMock);
	});

	afterEach(() => {
		vi.unstubAllGlobals();
		vi.restoreAllMocks();
	});


	// -------------------------------------------------- CDN URLs //
	describe('CDN URLs', () => {
		it.each([
			['highlightjs', 'github', `${highlightCdn}/github.min.css`],
			['highlightjs', 'base16-dracula', `${highlightCdn}/base16/dracula.min.css`],
			['prismjs', 'default', `${prismCdn}/prism.css`],
			['prismjs', 'tomorrow', `${prismCdn}/prism-tomorrow.css`],
			['prismjs', 'themes-dracula', `${prismThemesCdn}/prism-dracula.css`],
		])('should fetch the %s "%s" theme from %s', async (library, theme, url) => {
			mount(VCodeBlock, {
				props: { [library]: true, theme },
			});

			await flushPromises();

			expect(fetchMock).toHaveBeenCalledTimes(1);
			expect(fetchMock).toHaveBeenCalledWith(url);
		});

		it('should fetch from cssPath when it is set', async () => {
			const cssPath = 'https://example.com/theme.css';

			mount(VCodeBlock, {
				props: { cssPath, prismjs: true, theme: 'tomorrow' },
			});

			await flushPromises();

			expect(fetchMock).toHaveBeenCalledWith(cssPath);
		});

		it('should inject the fetched css into the head', async () => {
			vi.stubGlobal('fetch', mockFetchResponse('.github {}'));

			mount(VCodeBlock, {
				props: { highlightjs: true, theme: 'github' },
			});

			await flushPromises();

			const sheets = themeSheets();

			expect(sheets).toHaveLength(1);
			expect(sheets[0].parentElement).toBe(document.head);
			expect(sheets[0].getAttribute('data-theme-id')).toBe('v-code-block--theme-github-highlightjs');
			expect(sheets[0].textContent).toBe('.github {}');
		});
	});


	// -------------------------------------------------- Bundled Themes //
	describe('Bundled Themes', () => {
		it.each([
			['prismjs', 'neon-bunny', neonBunnyThemeMin],
			['prismjs', 'neon-bunny-carrot', neonBunnyCarrotThemeMin],
			['highlightjs', 'neon-bunny', neonBunnyHighlightThemeMin],
			['highlightjs', 'neon-bunny-carrot', neonBunnyCarrotHighlightThemeMin],
		])('should inject the %s "%s" theme without fetching', async (library, theme, css) => {
			mount(VCodeBlock, {
				props: { [library]: true, theme },
			});

			await flushPromises();

			const sheets = themeSheets();

			expect(fetchMock).not.toHaveBeenCalled();
			expect(sheets).toHaveLength(1);
			expect(sheets[0].textContent).toBe(css);
		});
	});


	// -------------------------------------------------- Theme False //
	describe('Theme False', () => {
		it('should not fetch or inject a theme when theme is false', async () => {
			mount(VCodeBlock, {
				props: { prismjs: true, theme: false },
			});

			await flushPromises();

			expect(fetchMock).not.toHaveBeenCalled();
			expect(themeSheets()).toHaveLength(0);
			expect(document.body.hasAttribute('data-v-code-block-theme')).toBe(false);
		});
	});


	// -------------------------------------------------- Theme Attribute //
	describe('Theme Attribute', () => {
		it('should set the theme id on the body', async () => {
			mount(VCodeBlock, {
				props: { prismjs: true, theme: 'themes-dracula' },
			});

			await flushPromises();

			expect(document.body.getAttribute('data-v-code-block-theme')).toBe('v-code-block--theme-dracula-prism');
		});

		it('should not load the same theme twice', async () => {
			mount(VCodeBlock, { props: { prismjs: true, theme: 'tomorrow' } });
			mount(VCodeBlock, { props: { prismjs: true, theme: 'tomorrow' } });

			await flushPromises();

			expect(fetchMock).toHaveBeenCalledTimes(1);
			expect(themeSheets()).toHaveLength(1);
		});
	});


	// -------------------------------------------------- Theme Change //
	describe('Theme Change', () => {
		it('should remove the previous theme stylesheet when the theme changes', async () => {
			const wrapper = mount(VCodeBlock, {
				props: { highlightjs: true, theme: 'github' },
			});

			await flushPromises();

			await wrapper.setProps({ theme: 'atom-one-dark' });
			await flushPromises();

			const sheets = themeSheets();

			expect(fetchMock).toHaveBeenLastCalledWith(`${highlightCdn}/atom-one-dark.min.css`);
			expect(sheets).toHaveLength(1);
			expect(sheets[0].getAttribute('data-theme-id')).toBe('v-code-block--theme-atom-one-dark-highlightjs');
			expect(document.body.getAttribute('data-v-code-block-theme')).toBe('v-code-block--theme-atom-one-dark-highlightjs');
		});

		it('should replace a fetched theme with a bundled theme', async () => {
			const wrapper = mount(VCodeBlock, {
				props: { prismjs: true, theme: 'tomorrow' },
			});

			await flushPromises();

			await wrapper.setProps({ theme: 'neon-bunny' });
			await flushPromises();

			const sheets = themeSheets();

			expect(sheets).toHaveLength(1);
			expect(sheets[0].textContent).toBe(neonBunnyThemeMin);
		});
	});


	// -------------------------------------------------- Errors //
	describe('Errors', () => {
		it('should log and not throw when the fetch rejects', async () => {
			const error = new Error('Network down');
			const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
			vi.stubGlobal('fetch', vi.fn().mockRejectedValue(error));

			expect(() => {
				mount(VCodeBlock, { props: { highlightjs: true, theme: 'github' } });
			}).not.toThrow();

			await flushPromises();

			expect(consoleError).toHaveBeenCalledWith('Highlight.js CDN Error:', error);
			expect(themeSheets()).toHaveLength(0);
		});

		it('should log and not inject css when the response is not ok', async () => {
			const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
			vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
				ok: false,
				status: 404,
				statusText: 'Not Found',
				text: () => Promise.resolve('Not Found'),
			}));

			mount(VCodeBlock, { props: { prismjs: true, theme: 'missing' } });

			await flushPromises();

			const [label, error] = consoleError.mock.calls[0];

			expect(label).toBe('PrismJS CDN Error:');
			expect((error as Error).message).toBe(`404 Not Found (${prismCdn}/prism-missing.css)`);
			expect(themeSheets()).toHaveLength(0);
		});
	});
});
