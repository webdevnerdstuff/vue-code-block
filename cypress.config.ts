import { defineConfig } from "cypress";

export default defineConfig({
	component: {
		devServer: {
			framework: "vue",
			bundler: "vite",
		},
	},
	viewportHeight: 768,
	viewportWidth: 1024,
});
