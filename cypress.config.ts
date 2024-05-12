import { defineConfig } from "cypress";

export default defineConfig({
	e2e: {
		baseUrl: 'http://192.168.4.79:5173/vue-code-block/',
		// excludeSpecPattern: ['./src/plugin/__tests__'],
		specPattern: './src/plugin/**/*.cy.{js,jsx,ts,tsx}',
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},

	viewportHeight: 1080,
	viewportWidth: 1920,

});
