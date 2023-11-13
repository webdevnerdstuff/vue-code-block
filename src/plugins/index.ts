import { loadFonts } from '@/plugins/webfontloader';
import vuetify from '@/plugins/vuetify';

import type { App } from 'vue';

export function registerPlugins(app: App) {
	loadFonts();
	app.use(vuetify);
}
