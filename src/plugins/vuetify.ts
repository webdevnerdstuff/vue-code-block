import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { fa } from 'vuetify/iconsets/fa-svg';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import defaultThemes from './theme';


export default createVuetify({
	components: {
		components,
	},
	directives,
	icons: {
		aliases,
		defaultSet: 'mdi',
		sets: {
			fa,
			mdi,
		},
	},
	theme: {
		defaultTheme: 'dark',
		themes: {
			...defaultThemes,
		},
	},
});
