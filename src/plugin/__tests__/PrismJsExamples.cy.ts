describe('VCodeBlock Component - PrismJS', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.get('[data-cy="library-select"]').parent().click().type('prismjs');
	});

	it('should have v-code-block--prismjs on all v-code-block elements', () => {
		cy.get('.v-code-block').should('have.class', 'v-code-block--prismjs');
	});

	describe('JavaScript Example', () => {
		const codeBlockExamples = '#lang-js-examples .v-code-block';

		it('should have 1 code block', () => {
			cy.get(codeBlockExamples).should('have.length', 1);
		});

		it('should have code block classes', () => {
			cy.get(codeBlockExamples).children('.v-code-block--code').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--code-copy-button').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--code-copy-button-status-copy').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--button-copy-icon').should('exist');
		});

		it('should have a pre and code elements', () => {
			cy.get(codeBlockExamples).find('pre, code').should('exist');
		});

		it('should have a pre/code elements with language-javascript class', () => {
			cy.get(codeBlockExamples).find('pre, code').should('have.class', 'language-javascript');
		});

		it('should contain rendered code', () => {
			cy.get(codeBlockExamples).find('code').should('contain.text', 'const numbers = [1, 2, 3, 4, 5];');
		});
	});

	describe('Vue Example', () => {
		const codeBlockExamples = '#lang-vue-examples .v-code-block';

		it('should have 1 code block', () => {
			cy.get(codeBlockExamples).should('have.length', 1);
		});

		it('should have code block classes', () => {
			cy.get(codeBlockExamples).children('.v-code-block--code').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--code-copy-button').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--code-copy-button-status-copy').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--button-copy-icon').should('exist');
		});

		it('should have a pre and code elements', () => {
			cy.get(codeBlockExamples).find('pre, code').should('exist');
		});

		it('should have a pre/code elements with language-html class', () => {
			cy.get(codeBlockExamples).find('pre, code').should('have.class', 'language-html');
		});

		it('should contain rendered code', () => {
			cy.get(codeBlockExamples).find('code').should('contain.text', '<template>');
		});
	});

	describe('CSS Example', () => {
		const codeBlockExamples = '#lang-css-examples .v-code-block';

		it('should have 1 code block', () => {
			cy.get(codeBlockExamples).should('have.length', 1);
		});

		it('should have code block classes', () => {
			cy.get(codeBlockExamples).children('.v-code-block--code').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--code-copy-button').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--code-copy-button-status-copy').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--button-copy-icon').should('exist');
		});

		it('should have a pre and code elements', () => {
			cy.get(codeBlockExamples).find('pre, code').should('exist');
		});

		it('should have a pre/code elements with language-css class', () => {
			cy.get(codeBlockExamples).find('pre, code').should('have.class', 'language-css');
		});

		it('should contain rendered code', () => {
			cy.get(codeBlockExamples).find('code').should('contain.text', 'WebDevNerdStuff Neon Bunny');
		});
	});

	describe('HTML Example', () => {
		const codeBlockExamples = '#lang-html-examples .v-code-block';

		it('should have 1 code block', () => {
			cy.get(codeBlockExamples).should('have.length', 1);
		});

		it('should have code block classes', () => {
			cy.get(codeBlockExamples).children('.v-code-block--code').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--code-copy-button').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--code-copy-button-status-copy').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--button-copy-icon').should('exist');
		});

		it('should have a pre and code elements', () => {
			cy.get(codeBlockExamples).find('pre, code').should('exist');
		});

		it('should have a pre/code elements with language-html class', () => {
			cy.get(codeBlockExamples).find('pre, code').should('have.class', 'language-html');
		});

		it('should contain rendered code', () => {
			cy.get(codeBlockExamples).find('code').should('contain.text', '<!DOCTYPE html>');
		});
	});

	describe('SVG Example', () => {
		const codeBlockExamples = '#lang-svg-examples .v-code-block';

		it('should have 1 code block', () => {
			cy.get(codeBlockExamples).should('have.length', 1);
		});

		it('should have code block classes', () => {
			cy.get(codeBlockExamples).children('.v-code-block--code').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--code-copy-button').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--code-copy-button-status-copy').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--button-copy-icon').should('exist');
		});

		it('should have a pre and code elements', () => {
			cy.get(codeBlockExamples).find('pre, code').should('exist');
		});

		it('should have a pre/code elements with language-svg class', () => {
			cy.get(codeBlockExamples).find('pre, code').should('have.class', 'language-svg');
		});

		it('should contain rendered code', () => {
			cy.get(codeBlockExamples).find('code').should('contain.text', '<svg xmlns=');
		});
	});

	describe('Typescript Example', () => {
		const codeBlockExamples = '#additional-languages-ts-example .v-code-block';

		it('should have 1 code block', () => {
			cy.get(codeBlockExamples).should('have.length', 1);
		});

		it('should have code block classes', () => {
			cy.get(codeBlockExamples).children('.v-code-block--code').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--code-copy-button').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--code-copy-button-status-copy').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--button-copy-icon').should('exist');
		});

		it('should have a pre and code elements', () => {
			cy.get(codeBlockExamples).find('pre, code').should('exist');
		});

		it('should have a pre/code elements with language-typescript class', () => {
			cy.get(codeBlockExamples).find('pre, code').should('have.class', 'language-typescript');
		});

		it('should contain rendered code', () => {
			cy.get(codeBlockExamples).find('code').should('contain.text', 'private name: string;');
		});
	});

	describe('JSON Example', () => {
		const codeBlockExamples = '#additional-languages-json-example .v-code-block';

		it('should have 1 code block', () => {
			cy.get(codeBlockExamples).should('have.length', 1);
		});

		it('should have code block classes', () => {
			cy.get(codeBlockExamples).children('.v-code-block--code').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--code-copy-button').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--code-copy-button-status-copy').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--button-copy-icon').should('exist');
		});

		it('should have a pre and code elements', () => {
			cy.get(codeBlockExamples).find('pre, code').should('exist');
		});

		it('should have a pre/code elements with language-json class', () => {
			cy.get(codeBlockExamples).find('pre, code').should('have.class', 'language-json');
		});

		it('should contain rendered code', () => {
			cy.get(codeBlockExamples).find('code').should('contain.text', '"name": "John Doe",');
		});
	});

	describe('PHP Example', () => {
		const codeBlockExamples = '#additional-languages-php-example .v-code-block';

		it('should have 1 code block', () => {
			cy.get(codeBlockExamples).should('have.length', 1);
		});

		it('should have code block classes', () => {
			cy.get(codeBlockExamples).children('.v-code-block--code').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--code-copy-button').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--code-copy-button-status-copy').should('exist');
			cy.get(codeBlockExamples).find('.v-code-block--button-copy-icon').should('exist');
		});

		it('should have a pre and code elements', () => {
			cy.get(codeBlockExamples).find('pre, code').should('exist');
		});

		it('should have a pre/code elements with language-php class', () => {
			cy.get(codeBlockExamples).find('pre, code').should('have.class', 'language-php');
		});

		it('should contain rendered code', () => {
			cy.get(codeBlockExamples).find('code').should('contain.text', 'namespace App\\Http\\Controllers;');
		});
	});

});
