
const neonBunnyTheme = `
/**
 * MIT License
 * Copyright (c) 2023 WebDevNerdStuff
 * WebDevNerdStuff Neon Bunny
 * VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
 */

:root {
	--neon-bunny-blue-light: #2492ff;
	--neon-bunny-blue: #0b93ff;
	--neon-bunny-gray-lighter: #aaa;
	--neon-bunny-gray: #7f817e;
	--neon-bunny-green-darker-darker: #008b05;
	--neon-bunny-green-darker: #2bb71d;
	--neon-bunny-green-light: #2bb71d;
	--neon-bunny-green-neon: #0aff04;
	--neon-bunny-green: #00d205;
	--neon-bunny-lime-lighter: #c3e88d;
	--neon-bunny-lime: #b2ff02;
	--neon-bunny-magenta: #df00df;
	--neon-bunny-neon-green: #0f0;
	--neon-bunny-orange: #e58100;
	--neon-bunny-peach-darker: #ffb46a;
	--neon-bunny-peach-light: #ffe4a6;
	--neon-bunny-peach: #ffcb6b;
	--neon-bunny-pink: #ff1190;
	--neon-bunny-purple-light-dim: #c792ea;
	--neon-bunny-purple-light: #d285cc;
	--neon-bunny-purple: #ea03ff;
	--neon-bunny-red: #ff3229;
	--neon-bunny-salmon: #ff6f5b;
	--neon-bunny-teal: #80fcff;
	--neon-bunny-white: #fff;
	--neon-bunny-yellow: #fef611;

	/* Standard */
	--neon-bunny-atrule: var(--neon-bunny-peach);
	--neon-bunny-attr-name: var(--neon-bunny-purple-light-dim);
	--neon-bunny-attr-value: var(--neon-bunny-peach);
	--neon-bunny-boolean: var(--neon-bunny-blue-light);
	--neon-bunny-builtin: var(--neon-bunny-purple);
	--neon-bunny-cdata: var(--neon-bunny-gray);
	--neon-bunny-char: var(--neon-bunny-pink);
	--neon-bunny-class-name: var(--neon-bunny-peach);
	--neon-bunny-comment: var(--neon-bunny-gray);
	--neon-bunny-constant: var(--neon-bunny-green-darker);
	--neon-bunny-deleted: var(--neon-bunny-red);
	--neon-bunny-entity: var(--neon-bunny-peach);
	--neon-bunny-function: var(--neon-bunny-green-neon);
	--neon-bunny-important: var(--neon-bunny-red);
	--neon-bunny-inserted: var(--neon-bunny-lime-lighter);
	--neon-bunny-keyword: var(--neon-bunny-blue);
	--neon-bunny-namespace: var(--neon-bunny-peach);
	--neon-bunny-number: var(--neon-bunny-white);
	--neon-bunny-operator: var(--neon-bunny-blue-light);
	--neon-bunny-prolog: var(--neon-bunny-gray);
	--neon-bunny-property: var(--neon-bunny-pink);
	--neon-bunny-punctuation: var(--neon-bunny-blue);
	--neon-bunny-regex: var(--neon-bunny-peach-light);
	--neon-bunny-string: var(--neon-bunny-green-darker);
	--neon-bunny-symbol: var(--neon-bunny-pink);
	--neon-bunny-tag: var(--neon-bunny-blue-light);
	--neon-bunny-url: var(--neon-bunny-orange);
	--neon-bunny-variable: var(--neon-bunny-green-darker);

	/* HTML */
	--neon-bunny-html-attr-name: var(--neon-bunny-green);
	--neon-bunny-html-attr-value-punctuation: var(--neon-bunny-peach-darker);
	--neon-bunny-html-attr-value: var(--neon-bunny-peach-darker);

	/* CSS */
	--neon-bunny-css-atrule-rule: var(--neon-bunny-blue);
	--neon-bunny-css-atrule: var(--neon-bunny-white);
	--neon-bunny-css-function: var(--neon-bunny-orange);
	--neon-bunny-css-property: var(--neon-bunny-pink);
	--neon-bunny-css-punctuation: var(--neon-bunny-white);
	--neon-bunny-css-selector: var(--neon-bunny-lime);
	--neon-bunny-css-string: var(--neon-bunny-green-light);
	--neon-bunny-css: var(--neon-bunny-purple-light-dim);

	/* JS */
	--neon-bunny-js-keyword: var(--neon-bunny-blue);
	--neon-bunny-js-literal-property: var(--neon-bunny-neon-green);
	--neon-bunny-js-operator: var(--neon-bunny-blue-light);
	--neon-bunny-js-punctuation: var(--neon-bunny-white);
	--neon-bunny-js-string: var(--neon-bunny-green-darker-darker);
	--neon-bunny-js-template-string-string: var(--neon-bunny-green-darker-darker);
	--neon-bunny-js: var(--neon-bunny-green-darker);

	/* PHP */
	--neon-bunny-php-boolean: var(--neon-bunny-blue);
	--neon-bunny-php-class-name-definition-class-name: var(--neon-bunny-magenta);
	--neon-bunny-php-class-name-return-type: var(--neon-bunny-gray-lighter);
	--neon-bunny-php-class-name: var(--neon-bunny-teal);
	--neon-bunny-php-double-quote-string: var(--neon-bunny-salmon);
	--neon-bunny-php-function: var(--neon-bunny-green-neon);
	--neon-bunny-php-keyword-type-hint: var(--neon-bunny-gray-lighter);
	--neon-bunny-php-keyword: var(--neon-bunny-blue);
	--neon-bunny-php-operator: var(--neon-bunny-purple);
	--neon-bunny-php-package: var(--neon-bunny-peach);
	--neon-bunny-php-property: var(--neon-bunny-purple-light);
	--neon-bunny-php-punctuation: var(--neon-bunny-white);
	--neon-bunny-php-single-quote-string: var(--neon-bunny-yellow);
	--neon-bunny-php-variable: var(--neon-bunny-purple-light);
}

code[class*='language-'],
pre[class*='language-'] {
	color: var(--neon-bunny-white);
	font-family: 'Consolas', 'Monaco', 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	-moz-hyphens: none;
	-ms-hyphens: none;
	-webkit-hyphens: none;
	hyphens: none;
	line-height: 1.5;
	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;
	text-align: left;
	white-space: pre;
	word-break: normal;
	word-spacing: normal;
	word-wrap: normal;
}

pre[class*='language-']::selection,
pre[class*='language-'] ::selection,
code[class*='language-']::selection,
code[class*='language-'] ::selection {
	background: rgba(29, 59, 83, 0.99);
	text-shadow: none;
}

pre[class*='language-']::selection,
pre[class*='language-'] ::selection,
code[class*='language-']::selection,
code[class*='language-'] ::selection {
	background: #ffffff15;
	text-shadow: none;
}

@media print {
	code[class*='language-'],
	pre[class*='language-'] {
		text-shadow: none;
	}
}

/* Code blocks */
pre[class*='language-'] {
	margin: 0.5em 0;
	overflow: auto;
	padding: 1em;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
	background: #000;
	color: white;
}

:not(pre) > code[class*='language-'] {
	border-radius: 0.3em;
	padding: 0.1em;
	white-space: normal;
}

/* -------------------------------------------------- Standard */
.token.atrule {
	color: var(--neon-bunny-atrule);
}

.token.attr-name {
	color: var(--neon-bunny-attr-name);
}

.token.attr-value {
	color: var(--neon-bunny-attr-value);
}

.token.bold {
	font-weight: bold;
}

.token.boolean {
	color: var(--neon-bunny-boolean);
}

.token.builtin {
	color: var(--neon-bunny-builtin);
}

.token.cdata {
	color: var(--neon-bunny-cdata);
	font-style: italic;
}

.token.char {
	color: var(--neon-bunny-char);
}

.token.class-name {
	color: var(--neon-bunny-class-name);
}

.token.constant {
	color: var(--neon-bunny-constant);
}

.token.comment {
	color: var(--neon-bunny-comment);
	font-style: italic;
}

.token.deleted {
	color: var(--neon-bunny-deleted);
}

.token.entity {
	color: var(--neon-bunny-entity);
}

.token.function {
	color: var(--neon-bunny-function);
}

.token.important {
	color: var(--neon-bunny-important);
	font-style: italic;
}

.token.inserted {
	color: var(--neon-bunny-inserted);
}

.token.italic {
	font-style: italic;
}

.token.keyword {
	color: var(--neon-bunny-keyword);
}

.namespace {
	color: var(--neon-bunny-namespace);
}

.token.number {
	color: var(--neon-bunny-number);
}

.token.operator {
	color: var(--neon-bunny-operator);
}

.token.prolog {
	color: var(--neon-bunny-prolog);
	font-style: italic;
}

.token.property {
	color: var(--neon-bunny-property);
}

.token.punctuation {
	color: var(--neon-bunny-punctuation);
}

.token.regex {
	color: var(--neon-bunny-regex);
}

.token.string {
	color: var(--neon-bunny-string);
}

.token.symbol {
	color: var(--neon-bunny-symbol);
}

.token.tag {
	color: var(--neon-bunny-tag);
}

.token.url {
	color: var(--neon-bunny-url);
	text-decoration: underline;
}

.token.variable {
	color: var(--neon-bunny-variable);
}

/* -------------------------------------------------- HTML */
.language-html .token.attr-name {
	color: var(--neon-bunny-html-attr-name);
}

.language-html .token.attr-value {
	color: var(--neon-bunny-html-attr-value);
}

.language-html .token.attr-value .token.punctuation {
	color: var(--neon-bunny-html-attr-value-punctuation);
}

/* -------------------------------------------------- CSS */
.language-css {
	color: var(--neon-bunny-css) !important;
}

.language-css .token.atrule {
	color: var(--neon-bunny-css-atrule);
}

.language-css .token.atrule .token.rule {
	color: var(--neon-bunny-css-atrule-rule);
}

.language-css .token.function {
	color: var(--neon-bunny-css-function);
}

.language-css .token.property {
	color: var(--neon-bunny-css-property);
}

.language-css .token.punctuation {
	color: var(--neon-bunny-css-punctuation);
}

.language-css .token.selector {
	color: var(--neon-bunny-css-selector);
}

.language-css .token.string,
.style .token.string {
	color: var(--neon-bunny-css-string);
	font-style: italic;
}

/* -------------------------------------------------- JavaScript */
.language-javascript,
.language-js {
	color: var(--neon-bunny-js) !important;
	font-style: italic;
}

.language-javascript span,
.language-js span {
	font-style: normal;
}

.language-javascript .token.keyword,
.language-js .token.keyword {
	color: var(--neon-bunny-js-keyword);
}

.language-javascript .token.literal-property.property,
.language-js .token.literal-property.property {
	color: var(--neon-bunny-js-literal-property);
	font-style: italic;
}

.language-javascript .token.operator,
.language-js .token.operator {
	color: var(--neon-bunny-js-operator);
	font-style: italic;
}

.language-javascript .token.punctuation,
.language-js .token.punctuation {
	color: var(--neon-bunny-js-punctuation);
}

.language-javascript .token.template-string .token.string,
.language-js .token.template-string .token.string {
	color: var(--neon-bunny-js-template-string-string);
}

/* -------------------------------------------------- PHP */
.language-php .token.boolean {
	color: var(--neon-bunny-boolean);
}

.language-php .token.class-name {
	color: var(--neon-bunny-php-class-name);
}

.language-php .token.class-name-definition.class-name {
	color: var(--neon-bunny-php-class-name-definition-class-name);
}

.language-php .token.class-name.return-type {
	color: var(--neon-bunny-php-class-name-return-type);
	font-style: italic;
}

.language-php .token.function {
	color: var(--neon-bunny-php-function);
}

.language-php .token.keyword {
	color: var(--neon-bunny-php-keyword);
}

.language-php .token.keyword.type-hint {
	color: var(--neon-bunny-php-keyword-type-hint);
	font-style: italic;
}

.language-php .token.operator {
	color: var(--neon-bunny-php-operator);
}

.language-php .token.package {
	color: var(--neon-bunny-php-package);
}

.language-php .token.property {
	color: var(--neon-bunny-php-property);
}

.language-php .token.punctuation {
	color: var(--neon-bunny-php-punctuation);
}

.language-php .token.string.double-quoted-string {
	color: var(--neon-bunny-php-double-quote-string);
}

.language-php .token.string.single-quoted-string {
	color: var(--neon-bunny-php-single-quote-string);
}

.language-php .token.variable {
	color: var(--neon-bunny-php-variable);
}
`;

const neonBunnyCarrotTheme = `/**
* MIT License
* Copyright (c) 2023 WebDevNerdStuff
* WebDevNerdStuff Neon Bunny - Carrot
* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
*/

:root {
 --neon-bunny-blue-light: #2492ff;
 --neon-bunny-blue: #0b93ff;
 --neon-bunny-gray: #7f817e;
 --neon-bunny-green-darker-darker: #008b05;
 --neon-bunny-green-darker: #2bb71d;
 --neon-bunny-green-light: #7cd47d;
 --neon-bunny-green: #00d205;
 --neon-bunny-lime: #c3e88d;
 --neon-bunny-magenta: #dd00ff;
 --neon-bunny-orange-darker: #e58100;
 --neon-bunny-orange-light: #ffc266;
 --neon-bunny-orange: #ff9900;
 --neon-bunny-peach-light: #ffe4a6;
 --neon-bunny-peach: #ffcb6b;
 --neon-bunny-pink: #ff1190;
 --neon-bunny-purple-light-dim: #c792ea;
 --neon-bunny-purple-light: #da96df;
 --neon-bunny-purple: #ea03ff;
 --neon-bunny-red: #ff5370;
 --neon-bunny-teal: #00EEFF;
 --neon-bunny-white: #fff;
 --neon-bunny-yellow-light: #ffffa2;
 --neon-bunny-yellow: #ffff00;

 /* Standard */
 --neon-bunny-atrule: var(--neon-bunny-peach);
 --neon-bunny-attr-name: var(--neon-bunny-purple-light-dim);
 --neon-bunny-attr-value: var(--neon-bunny-peach);
 --neon-bunny-boolean: var(--neon-bunny-purple-light);
 --neon-bunny-builtin: var(--neon-bunny-purple);
 --neon-bunny-cdata: var(--neon-bunny-gray);
 --neon-bunny-char: var(--neon-bunny-pink);
 --neon-bunny-class-name: var(--neon-bunny-peach);
 --neon-bunny-comment: var(--neon-bunny-gray);
 --neon-bunny-constant: var(--neon-bunny-green-darker);
 --neon-bunny-deleted: var(--neon-bunny-red);
 --neon-bunny-entity: var(--neon-bunny-peach);
 --neon-bunny-function: var(--neon-bunny-orange-light);
 --neon-bunny-important: var(--neon-bunny-pink);
 --neon-bunny-inserted: var(--neon-bunny-lime);
 --neon-bunny-keyword: var(--neon-bunny-purple-light);
 --neon-bunny-namespace: var(--neon-bunny-peach);
 --neon-bunny-number: var(--neon-bunny-white);
 --neon-bunny-operator: var(--neon-bunny-orange);
 --neon-bunny-prolog: var(--neon-bunny-gray);
 --neon-bunny-property: var(--neon-bunny-orange-light);
 --neon-bunny-punctuation: var(--neon-bunny-orange);
 --neon-bunny-regex: var(--neon-bunny-peach-light);
 --neon-bunny-string: var(--neon-bunny-green-light);
 --neon-bunny-symbol: var(--neon-bunny-orange-light);
 --neon-bunny-tag: var(--neon-bunny-orange);
 --neon-bunny-url: var(--neon-bunny-orange-darker);
 --neon-bunny-variable: var(--neon-bunny-orange);

 /* HTML */
 --neon-bunny-html-attr-name: var(--neon-bunny-orange-light);
 --neon-bunny-html-attr-value-punctuation: var(--neon-bunny-green);
 --neon-bunny-html-attr-value: var(--neon-bunny-green);

 /* CSS */
 --neon-bunny-css-atrule-rule: var(--neon-bunny-blue);
 --neon-bunny-css-atrule: var(--neon-bunny-white);
 --neon-bunny-css-function: var(--neon-bunny-orange-darker);
 --neon-bunny-css-property: var(--neon-bunny-pink);
 --neon-bunny-css-punctuation: var(--neon-bunny-white);
 --neon-bunny-css-selector: var(--neon-bunny-yellow);
 --neon-bunny-css-string: var(--neon-bunny-green-light);
 --neon-bunny-css: var(--neon-bunny-teal);

 /* JS */
 --neon-bunny-js-keyword: var(--neon-bunny-magenta);
 --neon-bunny-js-literal-property: var(--neon-bunny-orange);
 --neon-bunny-js-operator: var(--neon-bunny-blue-light);
 --neon-bunny-js-punctuation: var(--neon-bunny-white);
 --neon-bunny-js-string: var(--neon-bunny-green-darker-darker);
 --neon-bunny-js-template-string-string: var(--neon-bunny-green-darker-darker);
 --neon-bunny-js: var(--neon-bunny-orange);

 /* PHP */
 --neon-bunny-php-boolean: var(--neon-bunny-purple-light);
 --neon-bunny-php-class-name-return-type: var(--neon-bunny-yellow);
 --neon-bunny-php-class-name: var(--neon-bunny-yellow);
 --neon-bunny-php-double-quote-string: var(--neon-bunny-green);
 --neon-bunny-php-function: var(--neon-bunny-orange-light);
 --neon-bunny-php-keyword: var(--neon-bunny-magenta);
 --neon-bunny-php-keyword-type-hint: var(--neon-bunny-magenta);
 --neon-bunny-php-class-name-definition-class-name: var(--neon-bunny-yellow);
 --neon-bunny-php-operator: var(--neon-bunny-yellow-light);
 --neon-bunny-php-package: var(--neon-bunny-yellow);
 --neon-bunny-php-property: var(--neon-bunny-orange);
 --neon-bunny-php-punctuation: var(--neon-bunny-white);
 --neon-bunny-php-single-quote-string: var(--neon-bunny-green-light);
 --neon-bunny-php-variable: var(--neon-bunny-orange);
}

code[class*="language-"],
pre[class*="language-"] {
 -moz-hyphens: none;
 -moz-tab-size: 4;
 -ms-hyphens: none;
 -o-tab-size: 4;
 -webkit-hyphens: none;

 color: var(--neon-bunny-white);
 font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
 font-size: 1em;
 hyphens: none;
 line-height: 1.5;
 tab-size: 4;
 text-align: left;
 white-space: pre;
 word-break: normal;
 word-spacing: normal;
 word-wrap: normal;
}

pre[class*="language-"]::-moz-selection,
pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection,
code[class*="language-"] ::-moz-selection {
 background: rgba(29, 59, 83, 0.99);
 text-shadow: none;
}

pre[class*="language-"]::selection,
pre[class*="language-"] ::selection,
code[class*="language-"]::selection,
code[class*="language-"] ::selection {
 background: #ffffff15;
 text-shadow: none;
}

@media print {

 code[class*="language-"],
 pre[class*="language-"] {
	 text-shadow: none;
 }
}

/* Code blocks */
pre[class*="language-"] {
 margin: 0.5em 0;
 overflow: auto;
 padding: 1em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
 background: #000000;
 color: white;
}

:not(pre) > code[class*="language-"] {
 border-radius: 0.3em;
 padding: 0.1em;
 white-space: normal;
}

/* -------------------------------------------------- Standard */
.token.atrule {
 color: var(--neon-bunny-atrule);
}

.token.attr-name {
 color: var(--neon-bunny-attr-name);
}

.token.attr-value {
 color: var(--neon-bunny-attr-value);
}

.token.bold {
 font-weight: bold;
}

.token.boolean {
 color: var(--neon-bunny-boolean);
}

.token.builtin {
 color: var(--neon-bunny-builtin);
}

.token.cdata {
 color: var(--neon-bunny-cdata);
 font-style: italic;
}

.token.char {
 color: var(--neon-bunny-char);
}

.token.class-name {
 color: var(--neon-bunny-class-name);
}

.token.constant {
 color: var(--neon-bunny-constant);
}

.token.comment {
 color: var(--neon-bunny-comment);
 font-style: italic;
}

.token.deleted {
 color: var(--neon-bunny-deleted);
}

.token.entity {
 color: var(--neon-bunny-entity);
}

.token.function {
 color: var(--neon-bunny-function);
}

.token.important {
 color: var(--neon-bunny-important);
 font-style: italic;
}

.token.inserted {
 color: var(--neon-bunny-inserted);
}

.token.italic {
 font-style: italic;
}

.token.keyword {
 color: var(--neon-bunny-keyword);
}

.namespace {
 color: var(--neon-bunny-namespace);
}

.token.number {
 color: var(--neon-bunny-number);
}

.token.operator {
 color: var(--neon-bunny-operator);
}

.token.prolog {
 color: var(--neon-bunny-prolog);
 font-style: italic;
}

.token.property {
 color: var(--neon-bunny-property);
}

.token.punctuation {
 color: var(--neon-bunny-punctuation);
}

.token.regex {
 color: var(--neon-bunny-regex);
}

.token.string {
 color: var(--neon-bunny-string);
}

.token.symbol {
 color: var(--neon-bunny-symbol);
}

.token.tag {
 color: var(--neon-bunny-tag);
}

.token.url {
 color: var(--neon-bunny-url);
 text-decoration: underline;
}

.token.variable {
 color: var(--neon-bunny-variable);
}

/* -------------------------------------------------- HTML */
.language-html .token.attr-name {
 color: var(--neon-bunny-html-attr-name);
}

.language-html .token.attr-value {
 color: var(--neon-bunny-html-attr-value);
}

.language-html .token.attr-value .token.punctuation {
 color: var(--neon-bunny-html-attr-value-punctuation);
}

/* -------------------------------------------------- CSS */
.language-css {
 color: var(--neon-bunny-css) !important;
}

.language-css .token.atrule {
 color: var(--neon-bunny-css-atrule);
}

.language-css .token.atrule .token.rule {
 color: var(--neon-bunny-css-atrule-rule);
}

.language-css .token.function {
 color: var(--neon-bunny-css-function);
}

.language-css .token.property {
 color: var(--neon-bunny-css-property);
}

.language-css .token.punctuation {
 color: var(--neon-bunny-css-punctuation);
}

.language-css .token.selector {
 color: var(--neon-bunny-css-selector);
}

.language-css .token.string,
.style .token.string {
 color: var(--neon-bunny-css-string);
 font-style: italic;
}

/* -------------------------------------------------- JavaScript */
.language-javascript,
.language-js {
 color: var(--neon-bunny-js) !important;
 font-style: italic;
}

.language-javascript span,
.language-js span {
 font-style: normal;
}

.language-javascript .token.keyword,
.language-js .token.keyword {
 color: var(--neon-bunny-js-keyword);
}

.language-javascript .token.literal-property.property,
.language-js .token.literal-property.property {
 color: var(--neon-bunny-js-literal-property);
 font-style: italic;
}

.language-javascript .token.operator,
.language-js .token.operator {
 color: var(--neon-bunny-js-operator);
 font-style: italic;
}

.language-javascript .token.punctuation,
.language-js .token.punctuation {
 color: var(--neon-bunny-js-punctuation);
}

.language-javascript .token.template-string .token.string,
.language-js .token.template-string .token.string {
 color: var(--neon-bunny-js-template-string-string);
}

/* -------------------------------------------------- PHP */
.language-php .token.boolean {
 color: var(--neon-bunny-boolean);
}

.language-php .token.class-name {
 color: var(--neon-bunny-php-class-name);
}

.language-php .token.class-name-definition.class-name {
 color: var(--neon-bunny-php-class-name-definition-class-name);
}

.language-php .token.class-name.return-type {
 color: var(--neon-bunny-php-class-name-return-type);
}

.language-php .token.function {
 color: var(--neon-bunny-php-function);
 text-decoration: underline;
}

.language-php .token.keyword {
 color: var(--neon-bunny-php-keyword);
}

.language-php .token.keyword.type-hint {
 color: var(--neon-bunny-php-keyword-type-hint);
}

.language-php .token.operator {
 color: var(--neon-bunny-php-operator);
}

.language-php .token.package {
 color: var(--neon-bunny-php-package);
}

.language-php .token.property {
 color: var(--neon-bunny-php-property);
}

.language-php .token.punctuation {
 color: var(--neon-bunny-php-punctuation);
}

.language-php .token.string.double-quoted-string {
 color: var(--neon-bunny-php-double-quote-string);
}

.language-php .token.string.single-quoted-string {
 color: var(--neon-bunny-php-single-quote-string);
}

.language-php .token.variable {
 color: var(--neon-bunny-php-variable);
}
`;

export {
	neonBunnyTheme,
	neonBunnyCarrotTheme,
};
