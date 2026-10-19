import type { App } from 'vue';
import vuetify from '@/plugins/vuetify';
import { loadFonts } from '@/plugins/webfontloader';


export function registerPlugins(app: App) {
	loadFonts();
	app.use(vuetify);
}
