import { VCodeBlock } from '../index';
import {
	mount,
} from 'cypress/vue';

// const errorMessage = '[vue-code-block]: You must set either the prismjs or highlightjs props.';

describe('Highlight.js', () => {

	it('should render js', () => {
		// see: https://on.cypress.io/mounting-vue
		mount(VCodeBlock, {
			props: {
				code: 'const foo = "bar"\nconsole.log(foo)',
				highlightjs: true,
			}
		});
	});


	// 	it('render html', () => {
	// 		mount(VCodeBlock, {
	// 			props: {
	// 				code: `<html>
	//   <head>
	//     <title>Document</title>
	//   </head>
	//   <body>
	//     <h1>Hello World</h1>
	//   </body>
	// </html>`,
	// 				highlightjs: true,
	// 				lang: 'html'
	// 			}
	// 		});
	// 	});

});


// const errorMessage = '[vue-code-block]: You must set either the prismjs or highlightjs props.';
