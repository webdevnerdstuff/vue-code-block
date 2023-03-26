// -------------------------------------------------- Neon Bunny PrismJS  */
// Neon Bunny //
const neonBunnyTheme = `/**
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
 --neon-bunny-neon-green: #00ff00;
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

const neonBunnyThemeMin = `/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray-lighter: #aaa;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #2bb71d;--neon-bunny-green-neon: #0aff04;--neon-bunny-green: #00d205;--neon-bunny-lime-lighter: #c3e88d;--neon-bunny-lime: #b2ff02;--neon-bunny-magenta: #df00df;--neon-bunny-neon-green: #00ff00;--neon-bunny-orange: #e58100;--neon-bunny-peach-darker: #ffb46a;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #d285cc;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff3229;--neon-bunny-salmon: #ff6f5b;--neon-bunny-teal: #80fcff;--neon-bunny-white: #fff;--neon-bunny-yellow: #fef611;--neon-bunny-atrule: var(--neon-bunny-peach);--neon-bunny-attr-name: var(--neon-bunny-purple-light-dim);--neon-bunny-attr-value: var(--neon-bunny-peach);--neon-bunny-boolean: var(--neon-bunny-blue-light);--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-cdata: var(--neon-bunny-gray);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class-name: var(--neon-bunny-peach);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-constant: var(--neon-bunny-green-darker);--neon-bunny-deleted: var(--neon-bunny-red);--neon-bunny-entity: var(--neon-bunny-peach);--neon-bunny-function: var(--neon-bunny-green-neon);--neon-bunny-important: var(--neon-bunny-red);--neon-bunny-inserted: var(--neon-bunny-lime-lighter);--neon-bunny-keyword: var(--neon-bunny-blue);--neon-bunny-namespace: var(--neon-bunny-peach);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-blue-light);--neon-bunny-prolog: var(--neon-bunny-gray);--neon-bunny-property: var(--neon-bunny-pink);--neon-bunny-punctuation: var(--neon-bunny-blue);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-green-darker);--neon-bunny-symbol: var(--neon-bunny-pink);--neon-bunny-tag: var(--neon-bunny-blue-light);--neon-bunny-url: var(--neon-bunny-orange);--neon-bunny-variable: var(--neon-bunny-green-darker);--neon-bunny-html-attr-name: var(--neon-bunny-green);--neon-bunny-html-attr-value-punctuation: var(--neon-bunny-peach-darker);--neon-bunny-html-attr-value: var(--neon-bunny-peach-darker);--neon-bunny-css-atrule-rule: var(--neon-bunny-blue);--neon-bunny-css-atrule: var(--neon-bunny-white);--neon-bunny-css-function: var(--neon-bunny-orange);--neon-bunny-css-property: var(--neon-bunny-pink);--neon-bunny-css-punctuation: var(--neon-bunny-white);--neon-bunny-css-selector: var(--neon-bunny-lime);--neon-bunny-css-string: var(--neon-bunny-green-light);--neon-bunny-css: var(--neon-bunny-purple-light-dim);--neon-bunny-js-keyword: var(--neon-bunny-blue);--neon-bunny-js-literal-property: var(--neon-bunny-neon-green);--neon-bunny-js-operator: var(--neon-bunny-blue-light);--neon-bunny-js-punctuation: var(--neon-bunny-white);--neon-bunny-js-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js-template-string-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js: var(--neon-bunny-green-darker);--neon-bunny-php-boolean: var(--neon-bunny-blue);--neon-bunny-php-class-name-definition-class-name: var(--neon-bunny-magenta);--neon-bunny-php-class-name-return-type: var(--neon-bunny-gray-lighter);--neon-bunny-php-class-name: var(--neon-bunny-teal);--neon-bunny-php-double-quote-string: var(--neon-bunny-salmon);--neon-bunny-php-function: var(--neon-bunny-green-neon);--neon-bunny-php-keyword-type-hint: var(--neon-bunny-gray-lighter);--neon-bunny-php-keyword: var(--neon-bunny-blue);--neon-bunny-php-operator: var(--neon-bunny-purple);--neon-bunny-php-package: var(--neon-bunny-peach);--neon-bunny-php-property: var(--neon-bunny-purple-light);--neon-bunny-php-punctuation: var(--neon-bunny-white);--neon-bunny-php-single-quote-string: var(--neon-bunny-yellow);--neon-bunny-php-variable: var(--neon-bunny-purple-light)}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;font-size:1em;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto;padding:1em}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.token.atrule{color:var(--neon-bunny-atrule)}.token.attr-name{color:var(--neon-bunny-attr-name)}.token.attr-value{color:var(--neon-bunny-attr-value)}.token.bold{font-weight:bold}.token.boolean{color:var(--neon-bunny-boolean)}.token.builtin{color:var(--neon-bunny-builtin)}.token.cdata{color:var(--neon-bunny-cdata);font-style:italic}.token.char{color:var(--neon-bunny-char)}.token.class-name{color:var(--neon-bunny-class-name)}.token.comment{color:var(--neon-bunny-comment);font-style:italic}.token.constant{color:var(--neon-bunny-constant)}.token.deleted{color:var(--neon-bunny-deleted)}.token.entity{color:var(--neon-bunny-entity)}.token.function{color:var(--neon-bunny-function)}.token.important{color:var(--neon-bunny-important);font-style:italic}.token.inserted{color:var(--neon-bunny-inserted)}.token.italic{font-style:italic}.token.keyword{color:var(--neon-bunny-keyword)}.token.number{color:var(--neon-bunny-number)}.token.operator{color:var(--neon-bunny-operator)}.token.prolog{color:var(--neon-bunny-prolog);font-style:italic}.token.property{color:var(--neon-bunny-property)}.token.punctuation{color:var(--neon-bunny-punctuation)}.token.regex{color:var(--neon-bunny-regex)}.token.string{color:var(--neon-bunny-string)}.token.symbol{color:var(--neon-bunny-symbol)}.token.tag{color:var(--neon-bunny-tag)}.token.url{color:var(--neon-bunny-url);text-decoration:underline}.token.variable{color:var(--neon-bunny-variable)}.namespace{color:var(--neon-bunny-namespace)}.language-html .token.attr-name{color:var(--neon-bunny-html-attr-name)}.language-html .token.attr-value{color:var(--neon-bunny-html-attr-value)}.language-html .token.attr-value .token.punctuation{color:var(--neon-bunny-html-attr-value-punctuation)}.language-css{color:var(--neon-bunny-css) !important}.language-css .token.atrule{color:var(--neon-bunny-css-atrule)}.language-css .token.atrule .token.rule{color:var(--neon-bunny-css-atrule-rule)}.language-css .token.function{color:var(--neon-bunny-css-function)}.language-css .token.property{color:var(--neon-bunny-css-property)}.language-css .token.punctuation{color:var(--neon-bunny-css-punctuation)}.language-css .token.selector{color:var(--neon-bunny-css-selector)}.language-css .token.string{color:var(--neon-bunny-css-string);font-style:italic}.style .token.string{color:var(--neon-bunny-css-string);font-style:italic}.language-javascript,.language-js{color:var(--neon-bunny-js) !important;font-style:italic}.language-javascript span,.language-js span{font-style:normal}.language-javascript .token.keyword,.language-js .token.keyword{color:var(--neon-bunny-js-keyword)}.language-javascript .token.literal-property.property,.language-js .token.literal-property.property{color:var(--neon-bunny-js-literal-property);font-style:italic}.language-javascript .token.operator,.language-js .token.operator{color:var(--neon-bunny-js-operator);font-style:italic}.language-javascript .token.punctuation,.language-js .token.punctuation{color:var(--neon-bunny-js-punctuation)}.language-javascript .token.template-string .token.string,.language-js .token.template-string .token.string{color:var(--neon-bunny-js-template-string-string)}.language-php .token.boolean{color:var(--neon-bunny-boolean)}.language-php .token.class-name{color:var(--neon-bunny-php-class-name)}.language-php .token.class-name-definition.class-name{color:var(--neon-bunny-php-class-name-definition-class-name)}.language-php .token.class-name.return-type{color:var(--neon-bunny-php-class-name-return-type);font-style:italic}.language-php .token.function{color:var(--neon-bunny-php-function)}.language-php .token.keyword{color:var(--neon-bunny-php-keyword)}.language-php .token.keyword.type-hint{color:var(--neon-bunny-php-keyword-type-hint);font-style:italic}.language-php .token.operator{color:var(--neon-bunny-php-operator)}.language-php .token.package{color:var(--neon-bunny-php-package)}.language-php .token.property{color:var(--neon-bunny-php-property)}.language-php .token.punctuation{color:var(--neon-bunny-php-punctuation)}.language-php .token.string.double-quoted-string{color:var(--neon-bunny-php-double-quote-string)}.language-php .token.string.single-quoted-string{color:var(--neon-bunny-php-single-quote-string)}.language-php .token.variable{color:var(--neon-bunny-php-variable)}
`;

// Neon Bunny Carrot //
const neonBunnyCarrotTheme = `/**
* MIT License
* Copyright (c) 2023 WebDevNerdStuff
* WebDevNerdStuff Neon Bunny Carrot Theme
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

const neonBunnyCarrotThemeMin = `/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny Carrot Theme
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #7cd47d;--neon-bunny-green: #00d205;--neon-bunny-lime: #c3e88d;--neon-bunny-magenta: #dd00ff;--neon-bunny-orange-darker: #e58100;--neon-bunny-orange-light: #ffc266;--neon-bunny-orange: #ff9900;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #da96df;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff5370;--neon-bunny-teal: #00EEFF;--neon-bunny-white: #fff;--neon-bunny-yellow-light: #ffffa2;--neon-bunny-yellow: #ffff00;--neon-bunny-atrule: var(--neon-bunny-peach);--neon-bunny-attr-name: var(--neon-bunny-purple-light-dim);--neon-bunny-attr-value: var(--neon-bunny-peach);--neon-bunny-boolean: var(--neon-bunny-purple-light);--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-cdata: var(--neon-bunny-gray);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class-name: var(--neon-bunny-peach);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-constant: var(--neon-bunny-green-darker);--neon-bunny-deleted: var(--neon-bunny-red);--neon-bunny-entity: var(--neon-bunny-peach);--neon-bunny-function: var(--neon-bunny-orange-light);--neon-bunny-important: var(--neon-bunny-pink);--neon-bunny-inserted: var(--neon-bunny-lime);--neon-bunny-keyword: var(--neon-bunny-purple-light);--neon-bunny-namespace: var(--neon-bunny-peach);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-orange);--neon-bunny-prolog: var(--neon-bunny-gray);--neon-bunny-property: var(--neon-bunny-orange-light);--neon-bunny-punctuation: var(--neon-bunny-orange);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-green-light);--neon-bunny-symbol: var(--neon-bunny-orange-light);--neon-bunny-tag: var(--neon-bunny-orange);--neon-bunny-url: var(--neon-bunny-orange-darker);--neon-bunny-variable: var(--neon-bunny-orange);--neon-bunny-html-attr-name: var(--neon-bunny-orange-light);--neon-bunny-html-attr-value-punctuation: var(--neon-bunny-green);--neon-bunny-html-attr-value: var(--neon-bunny-green);--neon-bunny-css-atrule-rule: var(--neon-bunny-blue);--neon-bunny-css-atrule: var(--neon-bunny-white);--neon-bunny-css-function: var(--neon-bunny-orange-darker);--neon-bunny-css-property: var(--neon-bunny-pink);--neon-bunny-css-punctuation: var(--neon-bunny-white);--neon-bunny-css-selector: var(--neon-bunny-yellow);--neon-bunny-css-string: var(--neon-bunny-green-light);--neon-bunny-css: var(--neon-bunny-teal);--neon-bunny-js-keyword: var(--neon-bunny-magenta);--neon-bunny-js-literal-property: var(--neon-bunny-orange);--neon-bunny-js-operator: var(--neon-bunny-blue-light);--neon-bunny-js-punctuation: var(--neon-bunny-white);--neon-bunny-js-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js-template-string-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js: var(--neon-bunny-orange);--neon-bunny-php-boolean: var(--neon-bunny-purple-light);--neon-bunny-php-class-name-return-type: var(--neon-bunny-yellow);--neon-bunny-php-class-name: var(--neon-bunny-yellow);--neon-bunny-php-double-quote-string: var(--neon-bunny-green);--neon-bunny-php-function: var(--neon-bunny-orange-light);--neon-bunny-php-keyword: var(--neon-bunny-magenta);--neon-bunny-php-keyword-type-hint: var(--neon-bunny-magenta);--neon-bunny-php-class-name-definition-class-name: var(--neon-bunny-yellow);--neon-bunny-php-operator: var(--neon-bunny-yellow-light);--neon-bunny-php-package: var(--neon-bunny-yellow);--neon-bunny-php-property: var(--neon-bunny-orange);--neon-bunny-php-punctuation: var(--neon-bunny-white);--neon-bunny-php-single-quote-string: var(--neon-bunny-green-light);--neon-bunny-php-variable: var(--neon-bunny-orange)}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;font-size:1em;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto;padding:1em}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.token.atrule{color:var(--neon-bunny-atrule)}.token.attr-name{color:var(--neon-bunny-attr-name)}.token.attr-value{color:var(--neon-bunny-attr-value)}.token.bold{font-weight:bold}.token.boolean{color:var(--neon-bunny-boolean)}.token.builtin{color:var(--neon-bunny-builtin)}.token.cdata{color:var(--neon-bunny-cdata);font-style:italic}.token.char{color:var(--neon-bunny-char)}.token.class-name{color:var(--neon-bunny-class-name)}.token.constant{color:var(--neon-bunny-constant)}.token.comment{color:var(--neon-bunny-comment);font-style:italic}.token.deleted{color:var(--neon-bunny-deleted)}.token.entity{color:var(--neon-bunny-entity)}.token.function{color:var(--neon-bunny-function)}.token.important{color:var(--neon-bunny-important);font-style:italic}.token.inserted{color:var(--neon-bunny-inserted)}.token.italic{font-style:italic}.token.keyword{color:var(--neon-bunny-keyword)}.token.number{color:var(--neon-bunny-number)}.token.operator{color:var(--neon-bunny-operator)}.token.prolog{color:var(--neon-bunny-prolog);font-style:italic}.token.property{color:var(--neon-bunny-property)}.token.punctuation{color:var(--neon-bunny-punctuation)}.token.regex{color:var(--neon-bunny-regex)}.token.string{color:var(--neon-bunny-string)}.token.symbol{color:var(--neon-bunny-symbol)}.token.tag{color:var(--neon-bunny-tag)}.token.url{color:var(--neon-bunny-url);text-decoration:underline}.token.variable{color:var(--neon-bunny-variable)}.namespace{color:var(--neon-bunny-namespace)}.language-html .token .attr-name{color:var(--neon-bunny-html-attr-name)}.language-html .token.attr-value{color:var(--neon-bunny-html-attr-value)}.language-html .token.attr-value.punctuation{color:var(--neon-bunny-html-attr-value-punctuation)}.language-css{color:var(--neon-bunny-css) !important}.language-css .token.atrule{color:var(--neon-bunny-css-atrule)}.language-css .token.atrule .token.rule{color:var(--neon-bunny-css-atrule-rule)}.language-css .token.function{color:var(--neon-bunny-css-function)}.language-css .token.property{color:var(--neon-bunny-css-property)}.language-css .token.punctuation{color:var(--neon-bunny-css-punctuation)}.language-css .token.selector{color:var(--neon-bunny-css-selector)}.language-css .token.string{color:var(--neon-bunny-css-string);font-style:italic}.style .token.string{color:var(--neon-bunny-css-string);font-style:italic}.language-javascript,.language-js{color:var(--neon-bunny-js) !important;font-style:italic}.language-javascript span,.language-js span{font-style:normal}.language-javascript .token.keyword,.language-js .token.keyword{color:var(--neon-bunny-js-keyword)}.language-javascript .token.literal-property.property,.language-js .token.literal-property.property{color:var(--neon-bunny-js-literal-property);font-style:italic}.language-javascript .token.operator,.language-js .token.operator{color:var(--neon-bunny-js-operator);font-style:italic}.language-javascript .token.punctuation,.language-js .token.punctuation{color:var(--neon-bunny-js-punctuation)}.language-javascript .token.template-string.string,.language-js .token.template-string.string{color:var(--neon-bunny-js-template-string-string)}.language-php .token.boolean{color:var(--neon-bunny-boolean)}.language-php .token.class-name{color:var(--neon-bunny-php-class-name)}.language-php .token.class-name-definition.class-name{color:var(--neon-bunny-php-class-name-definition-class-name)}.language-php .token.class-name .return-type{color:var(--neon-bunny-php-class-name-return-type)}.language-php .token.function{color:var(--neon-bunny-php-function);text-decoration:underline}.language-php .token.keyword{color:var(--neon-bunny-php-keyword)}.language-php .token.keyword.type-hint{color:var(--neon-bunny-php-keyword-type-hint)}.language-php .token.operator{color:var(--neon-bunny-php-operator)}.language-php .token.package{color:var(--neon-bunny-php-package)}.language-php .token.property{color:var(--neon-bunny-php-property)}.language-php .token.punctuation{color:var(--neon-bunny-php-punctuation)}.language-php .token.string.double-quoted-string{color:var(--neon-bunny-php-double-quote-string)}.language-php .token.string.single-quoted-string{color:var(--neon-bunny-php-single-quote-string)}.language-php .token.variable{color:var(--neon-bunny-php-variable)}
`;

// -------------------------------------------------- Neon Bunny Highlight.js  */
// Neon Bunny //
const neonBunnyHighlightTheme = `/**
* MIT License
* Copyright (c) 2023 WebDevNerdStuff
* WebDevNerdStuff Neon Bunny
* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
*/
:root {
 --neon-bunny-blue-darker: #276AFF;
 --neon-bunny-blue-light-faded: #a5a8ff;
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
 --neon-bunny-magenta-neon: #FF25D9;
 --neon-bunny-magenta: #df00df;
 --neon-bunny-neon-green: #00ff00;
 --neon-bunny-orange-lighter: #ff8d04;
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
 --neon-bunny-yellow-light-faded: #ffe3b8;
 --neon-bunny-yellow: #fef611;
 /* -------------------------------------------------- Standard */
 /* ------------------------- General purpose */
 --neon-bunny-builtin: var(--neon-bunny-purple);
 --neon-bunny-char: var(--neon-bunny-pink);
 --neon-bunny-class: var(--neon-bunny-magenta);
 --neon-bunny-comment: var(--neon-bunny-gray);
 --neon-bunny-doctag: var(--neon-bunny-blue-light);
 --neon-bunny-keyword: var(--neon-bunny-blue);
 --neon-bunny-literal: var(--neon-bunny-blue-light);
 --neon-bunny-number: var(--neon-bunny-white);
 --neon-bunny-operator: var(--neon-bunny-blue-light);
 --neon-bunny-params: var(--neon-bunny-green-darker);
 --neon-bunny-property: var(--neon-bunny-blue-light-faded);
 --neon-bunny-punctuation: var(--neon-bunny-blue);
 --neon-bunny-regex: var(--neon-bunny-peach-light);
 --neon-bunny-string: var(--neon-bunny-peach-darker);
 --neon-bunny-subst: var(--neon-bunny-green-darker);
 --neon-bunny-symbol: var(--neon-bunny-pink);
 --neon-bunny-title-class-inherited: var(--neon-bunny-green-darker);
 --neon-bunny-title-class: var(--neon-bunny-green-neon);
 --neon-bunny-title-function-invoke: var(--neon-bunny-green-darker);
 --neon-bunny-title-function: var(--neon-bunny-green-neon);
 --neon-bunny-title: var(--neon-bunny-green-darker);
 --neon-bunny-type: var(--neon-bunny-pink);
 --neon-bunny-variable-constant: var(--neon-bunny-green-darker);
 --neon-bunny-variable-language: var(--neon-bunny-blue-light);
 --neon-bunny-variable: var(--neon-bunny-green-darker);
 /* ------------------------- Meta */
 --neon-bunny-meta-keyword: var(--neon-bunny-green);
 --neon-bunny-meta-prompt: var(--neon-bunny-blue-light);
 --neon-bunny-meta-string: var(--neon-bunny-blue-light);
 --neon-bunny-meta: var(--neon-bunny-blue-light);
 /* ------------------------- Tags, attributes, configs */
 --neon-bunny-attr: var(--neon-bunny-green);
 --neon-bunny-attribute: var(--neon-bunny-green);
 --neon-bunny-name: var(--neon-bunny-blue-light);
 --neon-bunny-section: var(--neon-bunny-green);
 --neon-bunny-tag-attr: var(--neon-bunny-blue-light);
 --neon-bunny-tag: var(--neon-bunny-blue-light);
 /* ------------------------- Text Markup */
 --neon-bunny-bullet: var(--neon-bunny-white);
 --neon-bunny-code: var(--neon-bunny-white);
 --neon-bunny-emphasis: var(--neon-bunny-white);
 --neon-bunny-formula: var(--neon-bunny-white);
 --neon-bunny-link: var(--neon-bunny-orange);
 --neon-bunny-quote: var(--neon-bunny-white);
 --neon-bunny-strong: var(--neon-bunny-white);
 /* ------------------------- CSS */
 --neon-bunny-css-selector-id: var(--neon-bunny-green);
 --neon-bunny-selector-attr: var(--neon-bunny-purple-light-dim);
 --neon-bunny-selector-class: var(--neon-bunny-lime);
 --neon-bunny-selector-id: var(--neon-bunny-lime);
 --neon-bunny-selector-pseudo: var(--neon-bunny-purple-light-dim);
 --neon-bunny-selector-tag: var(--neon-bunny-white);
 --neon-bunny-selector: var(--neon-bunny-lime);
 /* ------------------------- Diff */
 --neon-bunny-addition: var(--neon-bunny-green-neon);
 --neon-bunny-deletion: var(--neon-bunny-red);
 /* -------------------------------------------------- CSS */
 --neon-bunny-css: var(--neon-bunny-purple-light-dim);
 /* ------------------------- General purpose */
 --neon-bunny-css-builtin: var(--neon-bunny-orange);
 /* ------------------------- Meta */
 --neon-bunny-css-meta: var(--neon-bunny-red);
 /* ------------------------- Tags, attributes, configs */
 --neon-bunny-css-attribute: var(--neon-bunny-pink);
 /* -------------------------------------------------- JavaScript */
 --neon-bunny-js: var(--neon-bunny-green-darker);
 /* ------------------------- General purpose */
 --neon-bunny-js-params-variable-language: var(--neon-bunny-green-darker);
 --neon-bunny-js-title-class: var(--neon-bunny-orange-lighter);
 --neon-bunny-js-variable-language: var(--neon-bunny-pink);
 /* -------------------------------------------------- PHP */
 --neon-bunny-php: var(--neon-bunny-blue-light);
 /* ------------------------- General purpose */
 --neon-bunny-php-class-keyword: var(--neon-bunny-blue-darker);
 --neon-bunny-php-class-title: var(--neon-bunny-magenta);
 --neon-bunny-php-function-title: var(--neon-bunny-green-neon);
 --neon-bunny-php-keyword: var(--neon-bunny-blue-darker);
 --neon-bunny-php-params-variable: var(--neon-bunny-green-darker);
 --neon-bunny-php-params: var(--neon-bunny-gray-lighter);
 --neon-bunny-php-string: var(--neon-bunny-yellow);
 --neon-bunny-php-title-class: var(--neon-bunny-gray-lighter);
 --neon-bunny-php-title-function-invoke: var(--neon-bunny-green-neon);
 --neon-bunny-php-title: var(--neon-bunny-peach);
 --neon-bunny-php-variable: var(--neon-bunny-purple-light);
 /* ------------------------- Meta */
 --neon-bunny-php-meta: var(--neon-bunny-red);
}

pre code.hljs {
 display: block;
 overflow-x: auto;
}

code[class*=language-],
pre[class*=language-] {
 -moz-hyphens: none;
 -moz-tab-size: 4;
 -ms-hyphens: none;
 -o-tab-size: 4;
 -webkit-hyphens: none;
 color: var(--neon-bunny-white);
 font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
 hyphens: none;
 line-height: 1.5;
 tab-size: 4;
 text-align: left;
 white-space: pre;
 word-break: normal;
 word-spacing: normal;
 word-wrap: normal;
}

code[class*=language-]::-moz-selection,
code[class*=language-] ::-moz-selection,
pre[class*=language-]::-moz-selection,
pre[class*=language-] ::-moz-selection {
 background: rgba(29, 59, 83, 0.99);
 text-shadow: none;
}

code[class*=language-]::selection,
code[class*=language-] ::selection,
pre[class*=language-]::selection,
pre[class*=language-] ::selection {
 background: rgba(255, 255, 255, 0.0823529412);
 text-shadow: none;
}

@media print {

 code[class*=language-],
 pre[class*=language-] {
	 text-shadow: none;
 }
}

/* Code blocks */
pre[class*=language-] {
 background: #000000;
 color: white;
 margin: 0.5em 0;
 overflow: auto;
 padding: 1em;
}

:not(pre) > code[class*=language-] {
 background: #000000;
 color: white;
 border-radius: 0.3em;
 padding: 0.1em;
 white-space: normal;
}

.hljs-built_in {
 color: var(--neon-bunny-builtin);
}

.hljs-char {
 color: var(--neon-bunny-char);
}

.hljs-comment {
 color: var(--neon-bunny-comment);
 font-style: italic;
}

.hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs-keyword {
 color: var(--neon-bunny-keyword);
}

.hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs-number {
 color: var(--neon-bunny-number);
}

.hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs-params {
 color: var(--neon-bunny-params);
 font-style: italic;
}

.hljs-property {
 color: var(--neon-bunny-property);
}

.hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs-string {
 color: var(--neon-bunny-string);
}

.hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs-title {
 color: var(--neon-bunny-title);
}

.hljs-title.class_ {
 color: var(--neon-bunny-title-class);
}

.hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs-title.function_.invoke__ {
 color: var(--neon-bunny-title-function-invoke);
}

.hljs-type {
 color: var(--neon-bunny-type);
}

.hljs-variable {
 color: var(--neon-bunny-variable);
}

.hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs-variable.language_ {
 color: var(--neon-bunny-variable-language);
}

.hljs-meta {
 color: var(--neon-bunny-meta);
}

.hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs-attribute {
 color: var(--neon-bunny-attribute);
}

.hljs-name {
 color: var(--neon-bunny-name);
}

.hljs-section {
 color: var(--neon-bunny-section);
}

.hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs-tag .hljs-attr {
 color: var(--neon-bunny-tag-attr);
}

.hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs-code {
 color: var(--neon-bunny-code);
}

.hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs-link {
 color: var(--neon-bunny-link);
}

.hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs-selector-id {
 color: var(--neon-bunny-selector-id);
}

.hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs-deletion {
 color: var(--neon-bunny-deletion);
}

.hljs.language-css {
 color: var(--neon-bunny-css);
}

.hljs.language-css .hljs-built_in {
 color: var(--neon-bunny-css-builtin);
}

.hljs.language-css .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-css .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-css .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-css .hljs-keyword {
 color: var(--neon-bunny-keyword);
}

.hljs.language-css .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-css .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-css .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-css .hljs-params {
 color: var(--neon-bunny-params);
 font-style: italic;
}

.hljs.language-css .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-css .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-css .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-css .hljs-string {
 color: var(--neon-bunny-string);
}

.hljs.language-css .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-css .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-css .hljs-title {
 color: var(--neon-bunny-title);
}

.hljs.language-css .hljs-title.class_ {
 color: var(--neon-bunny-title-class);
}

.hljs.language-css .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-css .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-css .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-title-function-invoke);
}

.hljs.language-css .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-css .hljs-variable {
 color: var(--neon-bunny-variable);
}

.hljs.language-css .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-css .hljs-variable.language_ {
 color: var(--neon-bunny-variable-language);
}

.hljs.language-css .hljs-meta {
 color: var(--neon-bunny-css-meta);
}

.hljs.language-css .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-css .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-css .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-css .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-css .hljs-attribute {
 color: var(--neon-bunny-css-attribute);
}

.hljs.language-css .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-css .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-css .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-css .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-css .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-css .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-css .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-css .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-css .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-css .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-css .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-css .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-css .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-css .hljs-selector-id {
 color: var(--neon-bunny-css-selector-id);
}

.hljs.language-css .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-css .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-css .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-css .hljs-deletion {
 color: var(--neon-bunny-deletion);
}

.hljs.language-javascript, .hljs.language-js {
 color: var(--neon-bunny-js);
}

.hljs.language-javascript .hljs-built_in, .hljs.language-js .hljs-built_in {
 color: var(--neon-bunny-builtin);
}

.hljs.language-javascript .hljs-char, .hljs.language-js .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-javascript .hljs-comment, .hljs.language-js .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-javascript .hljs-doctag, .hljs.language-js .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-javascript .hljs-keyword, .hljs.language-js .hljs-keyword {
 color: var(--neon-bunny-keyword);
}

.hljs.language-javascript .hljs-literal, .hljs.language-js .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-javascript .hljs-number, .hljs.language-js .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-javascript .hljs-operator, .hljs.language-js .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-javascript .hljs-params, .hljs.language-js .hljs-params {
 color: var(--neon-bunny-params);
 font-style: italic;
}

.hljs.language-javascript .hljs-params .hljs-variable.language_, .hljs.language-js .hljs-params .hljs-variable.language_ {
 color: var(--neon-bunny-js-params-variable-language);
}

.hljs.language-javascript .hljs-property, .hljs.language-js .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-javascript .hljs-punctuation, .hljs.language-js .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-javascript .hljs-regexp, .hljs.language-js .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-javascript .hljs-string, .hljs.language-js .hljs-string {
 color: var(--neon-bunny-string);
}

.hljs.language-javascript .hljs-subst, .hljs.language-js .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-javascript .hljs-symbol, .hljs.language-js .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-javascript .hljs-title, .hljs.language-js .hljs-title {
 color: var(--neon-bunny-title);
}

.hljs.language-javascript .hljs-title.class_, .hljs.language-js .hljs-title.class_ {
 color: var(--neon-bunny-js-title-class);
}

.hljs.language-javascript .hljs-title.class_.inherited__, .hljs.language-js .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-javascript .hljs-title.function_, .hljs.language-js .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-javascript .hljs-title.function_.invoke__, .hljs.language-js .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-title-function-invoke);
}

.hljs.language-javascript .hljs-type, .hljs.language-js .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-javascript .hljs-variable, .hljs.language-js .hljs-variable {
 color: var(--neon-bunny-variable);
}

.hljs.language-javascript .hljs-variable.constant_, .hljs.language-js .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-javascript .hljs-variable.language_, .hljs.language-js .hljs-variable.language_ {
 color: var(--neon-bunny-js-variable-language);
}

.hljs.language-javascript .hljs-meta, .hljs.language-js .hljs-meta {
 color: var(--neon-bunny-meta);
}

.hljs.language-javascript .hljs-meta.prompt_, .hljs.language-js .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-javascript .hljs-meta.keyword_, .hljs.language-js .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-javascript .hljs-meta.string_, .hljs.language-js .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-javascript .hljs-attr, .hljs.language-js .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-javascript .hljs-attribute, .hljs.language-js .hljs-attribute {
 color: var(--neon-bunny-attribute);
}

.hljs.language-javascript .hljs-name, .hljs.language-js .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-javascript .hljs-section, .hljs.language-js .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-javascript .hljs-tag, .hljs.language-js .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-javascript .hljs-bullet, .hljs.language-js .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-javascript .hljs-code, .hljs.language-js .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-javascript .hljs-emphasis, .hljs.language-js .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-javascript .hljs-formula, .hljs.language-js .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-javascript .hljs-link, .hljs.language-js .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-javascript .hljs-quote, .hljs.language-js .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-javascript .hljs-strong, .hljs.language-js .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-javascript .hljs-selector, .hljs.language-js .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-javascript .hljs-selector-attr, .hljs.language-js .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-javascript .hljs-selector-class, .hljs.language-js .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-javascript .hljs-selector-id, .hljs.language-js .hljs-selector-id {
 color: var(--neon-bunny-selector-id);
}

.hljs.language-javascript .hljs-selector-pseudo, .hljs.language-js .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-javascript .hljs-selector-tag, .hljs.language-js .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-javascript .hljs-addition, .hljs.language-js .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-javascript .hljs-deletion, .hljs.language-js .hljs-deletion {
 color: var(--neon-bunny-deletion);
}

.hljs.language-php {
 color: var(--neon-bunny-php);
}

.hljs.language-php .hljs-built_in {
 color: var(--neon-bunny-builtin);
}

.hljs.language-php .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-php .hljs-class .hljs-title {
 color: var(--neon-bunny-php-class-title) !important;
}

.hljs.language-php .hljs-class .hljs-keyword {
 color: var(--neon-bunny-php-class-keyword);
}

.hljs.language-php .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-php .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-php .hljs-function .hljs-title {
 color: var(--neon-bunny-php-function-title);
}

.hljs.language-php .hljs-keyword {
 color: var(--neon-bunny-php-keyword);
}

.hljs.language-php .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-php .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-php .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-php .hljs-params {
 color: var(--neon-bunny-php-params);
 font-style: italic;
}

.hljs.language-php .hljs-params .hljs-variable {
 color: var(--neon-bunny-php-params-variable);
}

.hljs.language-php .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-php .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-php .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-php .hljs-string {
 color: var(--neon-bunny-php-string);
}

.hljs.language-php .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-php .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-php .hljs-title {
 color: var(--neon-bunny-php-title);
}

.hljs.language-php .hljs-title.class_ {
 color: var(--neon-bunny-php-title-class);
 font-style: italic;
}

.hljs.language-php .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-php .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-php .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-php-title-function-invoke);
}

.hljs.language-php .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-php .hljs-variable {
 color: var(--neon-bunny-php-variable);
}

.hljs.language-php .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-php .hljs-variable.language_ {
 color: var(--neon-bunny-variable-language);
}

.hljs.language-php .hljs-meta {
 color: var(--neon-bunny-php-meta);
}

.hljs.language-php .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-php .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-php .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-php .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-php .hljs-attribute {
 color: var(--neon-bunny-attribute);
}

.hljs.language-php .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-php .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-php .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-php .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-php .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-php .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-php .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-php .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-php .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-php .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-php .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-php .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-php .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-php .hljs-selector-id {
 color: var(--neon-bunny-selector-id);
}

.hljs.language-php .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-php .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-php .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-php .hljs-deletion {
 color: var(--neon-bunny-deletion);
}
`;

const neonBunnyHighlightThemeMin = `/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-darker: #276AFF;--neon-bunny-blue-light-faded: #a5a8ff;--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray-lighter: #aaa;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #2bb71d;--neon-bunny-green-neon: #0aff04;--neon-bunny-green: #00d205;--neon-bunny-lime-lighter: #c3e88d;--neon-bunny-lime: #b2ff02;--neon-bunny-magenta-neon: #FF25D9;--neon-bunny-magenta: #df00df;--neon-bunny-neon-green: #00ff00;--neon-bunny-orange-lighter: #ff8d04;--neon-bunny-orange: #e58100;--neon-bunny-peach-darker: #ffb46a;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #d285cc;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff3229;--neon-bunny-salmon: #ff6f5b;--neon-bunny-teal: #80fcff;--neon-bunny-white: #fff;--neon-bunny-yellow-light-faded: #ffe3b8;--neon-bunny-yellow: #fef611;--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class: var(--neon-bunny-magenta);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-doctag: var(--neon-bunny-blue-light);--neon-bunny-keyword: var(--neon-bunny-blue);--neon-bunny-literal: var(--neon-bunny-blue-light);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-blue-light);--neon-bunny-params: var(--neon-bunny-green-darker);--neon-bunny-property: var(--neon-bunny-blue-light-faded);--neon-bunny-punctuation: var(--neon-bunny-blue);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-peach-darker);--neon-bunny-subst: var(--neon-bunny-green-darker);--neon-bunny-symbol: var(--neon-bunny-pink);--neon-bunny-title-class-inherited: var(--neon-bunny-green-darker);--neon-bunny-title-class: var(--neon-bunny-green-neon);--neon-bunny-title-function-invoke: var(--neon-bunny-green-darker);--neon-bunny-title-function: var(--neon-bunny-green-neon);--neon-bunny-title: var(--neon-bunny-green-darker);--neon-bunny-type: var(--neon-bunny-pink);--neon-bunny-variable-constant: var(--neon-bunny-green-darker);--neon-bunny-variable-language: var(--neon-bunny-blue-light);--neon-bunny-variable: var(--neon-bunny-green-darker);--neon-bunny-meta-keyword: var(--neon-bunny-green);--neon-bunny-meta-prompt: var(--neon-bunny-blue-light);--neon-bunny-meta-string: var(--neon-bunny-blue-light);--neon-bunny-meta: var(--neon-bunny-blue-light);--neon-bunny-attr: var(--neon-bunny-green);--neon-bunny-attribute: var(--neon-bunny-green);--neon-bunny-name: var(--neon-bunny-blue-light);--neon-bunny-section: var(--neon-bunny-green);--neon-bunny-tag-attr: var(--neon-bunny-blue-light);--neon-bunny-tag: var(--neon-bunny-blue-light);--neon-bunny-bullet: var(--neon-bunny-white);--neon-bunny-code: var(--neon-bunny-white);--neon-bunny-emphasis: var(--neon-bunny-white);--neon-bunny-formula: var(--neon-bunny-white);--neon-bunny-link: var(--neon-bunny-orange);--neon-bunny-quote: var(--neon-bunny-white);--neon-bunny-strong: var(--neon-bunny-white);--neon-bunny-css-selector-id: var(--neon-bunny-green);--neon-bunny-selector-attr: var(--neon-bunny-purple-light-dim);--neon-bunny-selector-class: var(--neon-bunny-lime);--neon-bunny-selector-id: var(--neon-bunny-lime);--neon-bunny-selector-pseudo: var(--neon-bunny-purple-light-dim);--neon-bunny-selector-tag: var(--neon-bunny-white);--neon-bunny-selector: var(--neon-bunny-lime);--neon-bunny-addition: var(--neon-bunny-green-neon);--neon-bunny-deletion: var(--neon-bunny-red);--neon-bunny-css: var(--neon-bunny-purple-light-dim);--neon-bunny-css-builtin: var(--neon-bunny-orange);--neon-bunny-css-meta: var(--neon-bunny-red);--neon-bunny-css-attribute: var(--neon-bunny-pink);--neon-bunny-js: var(--neon-bunny-green-darker);--neon-bunny-js-params-variable-language: var(--neon-bunny-green-darker);--neon-bunny-js-title-class: var(--neon-bunny-orange-lighter);--neon-bunny-js-variable-language: var(--neon-bunny-pink);--neon-bunny-php: var(--neon-bunny-blue-light);--neon-bunny-php-class-keyword: var(--neon-bunny-blue-darker);--neon-bunny-php-class-title: var(--neon-bunny-magenta);--neon-bunny-php-function-title: var(--neon-bunny-green-neon);--neon-bunny-php-keyword: var(--neon-bunny-blue-darker);--neon-bunny-php-params-variable: var(--neon-bunny-green-darker);--neon-bunny-php-params: var(--neon-bunny-gray-lighter);--neon-bunny-php-string: var(--neon-bunny-yellow);--neon-bunny-php-title-class: var(--neon-bunny-gray-lighter);--neon-bunny-php-title-function-invoke: var(--neon-bunny-green-neon);--neon-bunny-php-title: var(--neon-bunny-peach);--neon-bunny-php-variable: var(--neon-bunny-purple-light);--neon-bunny-php-meta: var(--neon-bunny-red)}pre code.hljs{display:block;overflow-x:auto}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;font-size:1em;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto;padding:1em}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.hljs-built_in{color:var(--neon-bunny-builtin)}.hljs-char{color:var(--neon-bunny-char)}.hljs-comment{color:var(--neon-bunny-comment);font-style:italic}.hljs-doctag{color:var(--neon-bunny-doctag)}.hljs-keyword{color:var(--neon-bunny-keyword)}.hljs-literal{color:var(--neon-bunny-literal)}.hljs-number{color:var(--neon-bunny-number)}.hljs-operator{color:var(--neon-bunny-operator)}.hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs-property{color:var(--neon-bunny-property)}.hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs-regexp{color:var(--neon-bunny-regex)}.hljs-string{color:var(--neon-bunny-string)}.hljs-subst{color:var(--neon-bunny-subst)}.hljs-symbol{color:var(--neon-bunny-symbol)}.hljs-title{color:var(--neon-bunny-title)}.hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs-type{color:var(--neon-bunny-type)}.hljs-variable{color:var(--neon-bunny-variable)}.hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs-meta{color:var(--neon-bunny-meta)}.hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs-attr{color:var(--neon-bunny-attr)}.hljs-attribute{color:var(--neon-bunny-attribute)}.hljs-name{color:var(--neon-bunny-name)}.hljs-section{color:var(--neon-bunny-section)}.hljs-tag{color:var(--neon-bunny-tag)}.hljs-tag .hljs-attr{color:var(--neon-bunny-tag-attr)}.hljs-bullet{color:var(--neon-bunny-bullet)}.hljs-code{color:var(--neon-bunny-code)}.hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs-formula{color:var(--neon-bunny-formula)}.hljs-link{color:var(--neon-bunny-link)}.hljs-quote{color:var(--neon-bunny-quote)}.hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs-selector{color:var(--neon-bunny-selector)}.hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs-addition{color:var(--neon-bunny-addition)}.hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-css{color:var(--neon-bunny-css)}.hljs.language-css .hljs-built_in{color:var(--neon-bunny-css-builtin)}.hljs.language-css .hljs-char{color:var(--neon-bunny-char)}.hljs.language-css .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-css .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-css .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-css .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-css .hljs-number{color:var(--neon-bunny-number)}.hljs.language-css .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-css .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-css .hljs-property{color:var(--neon-bunny-property)}.hljs.language-css .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-css .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-css .hljs-string{color:var(--neon-bunny-string)}.hljs.language-css .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-css .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-css .hljs-title{color:var(--neon-bunny-title)}.hljs.language-css .hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs.language-css .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-css .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-css .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-css .hljs-type{color:var(--neon-bunny-type)}.hljs.language-css .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-css .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-css .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-css .hljs-meta{color:var(--neon-bunny-css-meta)}.hljs.language-css .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-css .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-css .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-css .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-css .hljs-attribute{color:var(--neon-bunny-css-attribute)}.hljs.language-css .hljs-name{color:var(--neon-bunny-name)}.hljs.language-css .hljs-section{color:var(--neon-bunny-section)}.hljs.language-css .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-css .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-css .hljs-code{color:var(--neon-bunny-code)}.hljs.language-css .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-css .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-css .hljs-link{color:var(--neon-bunny-link)}.hljs.language-css .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-css .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-css .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-css .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-css .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-css .hljs-selector-id{color:var(--neon-bunny-css-selector-id)}.hljs.language-css .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-css .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-css .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-css .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-javascript,.hljs.language-js{color:var(--neon-bunny-js)}.hljs.language-javascript .hljs-built_in,.hljs.language-js .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-javascript .hljs-char,.hljs.language-js .hljs-char{color:var(--neon-bunny-char)}.hljs.language-javascript .hljs-comment,.hljs.language-js .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-javascript .hljs-doctag,.hljs.language-js .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-javascript .hljs-keyword,.hljs.language-js .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-javascript .hljs-literal,.hljs.language-js .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-javascript .hljs-number,.hljs.language-js .hljs-number{color:var(--neon-bunny-number)}.hljs.language-javascript .hljs-operator,.hljs.language-js .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-javascript .hljs-params,.hljs.language-js .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-javascript .hljs-params .hljs-variable.language_,.hljs.language-js .hljs-params .hljs-variable.language_{color:var(--neon-bunny-js-params-variable-language)}.hljs.language-javascript .hljs-property,.hljs.language-js .hljs-property{color:var(--neon-bunny-property)}.hljs.language-javascript .hljs-punctuation,.hljs.language-js .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-javascript .hljs-regexp,.hljs.language-js .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-javascript .hljs-string,.hljs.language-js .hljs-string{color:var(--neon-bunny-string)}.hljs.language-javascript .hljs-subst,.hljs.language-js .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-javascript .hljs-symbol,.hljs.language-js .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-javascript .hljs-title,.hljs.language-js .hljs-title{color:var(--neon-bunny-title)}.hljs.language-javascript .hljs-title.class_,.hljs.language-js .hljs-title.class_{color:var(--neon-bunny-js-title-class)}.hljs.language-javascript .hljs-title.class_.inherited__,.hljs.language-js .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-javascript .hljs-title.function_,.hljs.language-js .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-javascript .hljs-title.function_.invoke__,.hljs.language-js .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-javascript .hljs-type,.hljs.language-js .hljs-type{color:var(--neon-bunny-type)}.hljs.language-javascript .hljs-variable,.hljs.language-js .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-javascript .hljs-variable.constant_,.hljs.language-js .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-javascript .hljs-variable.language_,.hljs.language-js .hljs-variable.language_{color:var(--neon-bunny-js-variable-language)}.hljs.language-javascript .hljs-meta,.hljs.language-js .hljs-meta{color:var(--neon-bunny-meta)}.hljs.language-javascript .hljs-meta.prompt_,.hljs.language-js .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-javascript .hljs-meta.keyword_,.hljs.language-js .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-javascript .hljs-meta.string_,.hljs.language-js .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-javascript .hljs-attr,.hljs.language-js .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-javascript .hljs-attribute,.hljs.language-js .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-javascript .hljs-name,.hljs.language-js .hljs-name{color:var(--neon-bunny-name)}.hljs.language-javascript .hljs-section,.hljs.language-js .hljs-section{color:var(--neon-bunny-section)}.hljs.language-javascript .hljs-tag,.hljs.language-js .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-javascript .hljs-bullet,.hljs.language-js .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-javascript .hljs-code,.hljs.language-js .hljs-code{color:var(--neon-bunny-code)}.hljs.language-javascript .hljs-emphasis,.hljs.language-js .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-javascript .hljs-formula,.hljs.language-js .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-javascript .hljs-link,.hljs.language-js .hljs-link{color:var(--neon-bunny-link)}.hljs.language-javascript .hljs-quote,.hljs.language-js .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-javascript .hljs-strong,.hljs.language-js .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-javascript .hljs-selector,.hljs.language-js .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-javascript .hljs-selector-attr,.hljs.language-js .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-javascript .hljs-selector-class,.hljs.language-js .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-javascript .hljs-selector-id,.hljs.language-js .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-javascript .hljs-selector-pseudo,.hljs.language-js .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-javascript .hljs-selector-tag,.hljs.language-js .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-javascript .hljs-addition,.hljs.language-js .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-javascript .hljs-deletion,.hljs.language-js .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-php{color:var(--neon-bunny-php)}.hljs.language-php .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-php .hljs-char{color:var(--neon-bunny-char)}.hljs.language-php .hljs-class .hljs-title{color:var(--neon-bunny-php-class-title) !important}.hljs.language-php .hljs-class .hljs-keyword{color:var(--neon-bunny-php-class-keyword)}.hljs.language-php .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-php .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-php .hljs-function .hljs-title{color:var(--neon-bunny-php-function-title)}.hljs.language-php .hljs-keyword{color:var(--neon-bunny-php-keyword)}.hljs.language-php .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-php .hljs-number{color:var(--neon-bunny-number)}.hljs.language-php .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-php .hljs-params{color:var(--neon-bunny-php-params);font-style:italic}.hljs.language-php .hljs-params .hljs-variable{color:var(--neon-bunny-php-params-variable)}.hljs.language-php .hljs-property{color:var(--neon-bunny-property)}.hljs.language-php .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-php .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-php .hljs-string{color:var(--neon-bunny-php-string)}.hljs.language-php .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-php .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-php .hljs-title{color:var(--neon-bunny-php-title)}.hljs.language-php .hljs-title.class_{color:var(--neon-bunny-php-title-class);font-style:italic}.hljs.language-php .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-php .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-php .hljs-title.function_.invoke__{color:var(--neon-bunny-php-title-function-invoke)}.hljs.language-php .hljs-type{color:var(--neon-bunny-type)}.hljs.language-php .hljs-variable{color:var(--neon-bunny-php-variable)}.hljs.language-php .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-php .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-php .hljs-meta{color:var(--neon-bunny-php-meta)}.hljs.language-php .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-php .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-php .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-php .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-php .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-php .hljs-name{color:var(--neon-bunny-name)}.hljs.language-php .hljs-section{color:var(--neon-bunny-section)}.hljs.language-php .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-php .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-php .hljs-code{color:var(--neon-bunny-code)}.hljs.language-php .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-php .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-php .hljs-link{color:var(--neon-bunny-link)}.hljs.language-php .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-php .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-php .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-php .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-php .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-php .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-php .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-php .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-php .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-php .hljs-deletion{color:var(--neon-bunny-deletion)}
`;

// Neon Bunny Carrot //
const neonBunnyCarrotHighlightTheme = `/**
* MIT License
* Copyright (c) 2023 WebDevNerdStuff
* WebDevNerdStuff Neon Bunny Carrot Theme
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
 --neon-bunny-orange-lighter: #ff8d04;
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
 --neon-bunny-yellow-light-faded: #ffe3b8;
 --neon-bunny-yellow: #ffff00;
 /* -------------------------------------------------- Standard */
 /* ------------------------- General purpose */
 --neon-bunny-builtin: var(--neon-bunny-purple);
 --neon-bunny-char: var(--neon-bunny-pink);
 --neon-bunny-class: var(--neon-bunny-magenta);
 --neon-bunny-comment: var(--neon-bunny-gray);
 --neon-bunny-doctag: var(--neon-bunny-blue-light);
 --neon-bunny-keyword: var(--neon-bunny-magenta);
 --neon-bunny-literal: var(--neon-bunny-purple-light);
 --neon-bunny-number: var(--neon-bunny-white);
 --neon-bunny-operator: var(--neon-bunny-blue-light);
 --neon-bunny-params: var(--neon-bunny-orange);
 --neon-bunny-property: var(--neon-bunny-yellow-light-faded);
 --neon-bunny-punctuation: var(--neon-bunny-blue);
 --neon-bunny-regex: var(--neon-bunny-peach-light);
 --neon-bunny-string: var(--neon-bunny-green);
 --neon-bunny-subst: var(--neon-bunny-green-darker);
 --neon-bunny-symbol: var(--neon-bunny-pink);
 --neon-bunny-title-class-inherited: var(--neon-bunny-orange);
 --neon-bunny-title-class: var(--neon-bunny-green-neon);
 --neon-bunny-title-function-invoke: var(--neon-bunny-orange);
 --neon-bunny-title-function: var(--neon-bunny-orange-light);
 --neon-bunny-title: var(--neon-bunny-orange);
 --neon-bunny-type: var(--neon-bunny-pink);
 --neon-bunny-variable-constant: var(--neon-bunny-green-darker);
 --neon-bunny-variable-language: var(--neon-bunny-orange);
 --neon-bunny-variable: var(--neon-bunny-green-darker);
 /* ------------------------- Meta */
 --neon-bunny-meta-keyword: var(--neon-bunny-purple-light);
 --neon-bunny-meta-prompt: var(--neon-bunny-orange);
 --neon-bunny-meta-string: var(--neon-bunny-orange);
 --neon-bunny-meta: var(--neon-bunny-orange);
 /* ------------------------- Tags, attributes, configs */
 --neon-bunny-attr: var(--neon-bunny-orange);
 --neon-bunny-attribute: var(---neon-bunny-orange);
 --neon-bunny-name: var(--neon-bunny-orange);
 --neon-bunny-section: var(--neon-bunny-orange);
 --neon-bunny-tag-attr: var(--neon-bunny-orange-light);
 --neon-bunny-tag: var(--neon-bunny-orange);
 /* ------------------------- Text Markup */
 --neon-bunny-bullet: var(--neon-bunny-white);
 --neon-bunny-code: var(--neon-bunny-white);
 --neon-bunny-emphasis: var(--neon-bunny-white);
 --neon-bunny-formula: var(--neon-bunny-white);
 --neon-bunny-link: var(--neon-bunny-orange);
 --neon-bunny-quote: var(--neon-bunny-white);
 --neon-bunny-strong: var(--neon-bunny-white);
 /* ------------------------- CSS */
 --neon-bunny-css-selector-id: var(--neon-bunny-green);
 --neon-bunny-selector-attr: var(--neon-bunny-orange);
 --neon-bunny-selector-class: var(--neon-bunny-yellow);
 --neon-bunny-selector-id: var(--neon-bunny-selector);
 --neon-bunny-selector-pseudo: var(--neon-bunny-orange);
 --neon-bunny-selector-tag: var(--neon-bunny-white);
 --neon-bunny-selector: var(--neon-bunny-lime);
 /* ------------------------- Diff */
 --neon-bunny-addition: var(--neon-bunny-green-neon);
 --neon-bunny-deletion: var(--neon-bunny-red);
 /* -------------------------------------------------- CSS */
 --neon-bunny-css: var(--neon-bunny-teal);
 /* ------------------------- General purpose */
 --neon-bunny-css-builtin: var(--neon-bunny-orange);
 /* ------------------------- Meta */
 --neon-bunny-css-meta: var(--neon-bunny-red);
 /* ------------------------- Tags, attributes, configs */
 --neon-bunny-css-attribute: var(--neon-bunny-pink);
 /* -------------------------------------------------- JavaScript */
 --neon-bunny-js: var(--neon-bunny-orange);
 /* ------------------------- General purpose */
 --neon-bunny-js-params-variable-language: var(--neon-bunny-orange);
 --neon-bunny-js-title-class: var(--neon-bunny-orange-lighter);
 --neon-bunny-js-variable-language: var(--neon-bunny-yellow);
 /* -------------------------------------------------- PHP */
 --neon-bunny-php: var(--neon-bunny-white);
 /* ------------------------- General purpose */
 --neon-bunny-php-class-keyword: var(--neon-bunny-pink);
 --neon-bunny-php-class-title: var(--neon-bunny-yellow);
 --neon-bunny-php-function-title: var(--neon-bunny-orange-light);
 --neon-bunny-php-keyword: var(--neon-bunny-magenta);
 --neon-bunny-php-params-variable: var(--neon-bunny-green-darker);
 --neon-bunny-php-params: var(--neon-bunny-yellow);
 --neon-bunny-php-string: var(--neon-bunny-green-light);
 --neon-bunny-php-title-class: var(--neon-bunny-yellow);
 --neon-bunny-php-title-function-invoke: var(--neon-bunny-orange-light);
 --neon-bunny-php-title: var(--neon-bunny-white);
 --neon-bunny-php-variable: var(--neon-bunny-orange);
 /* ------------------------- Meta */
 --neon-bunny-php-meta: var(--neon-bunny-pink);
}

pre code.hljs {
 display: block;
 overflow-x: auto;
}

code[class*=language-],
pre[class*=language-] {
 -moz-hyphens: none;
 -moz-tab-size: 4;
 -ms-hyphens: none;
 -o-tab-size: 4;
 -webkit-hyphens: none;
 color: var(--neon-bunny-white);
 font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
 hyphens: none;
 line-height: 1.5;
 tab-size: 4;
 text-align: left;
 white-space: pre;
 word-break: normal;
 word-spacing: normal;
 word-wrap: normal;
}

code[class*=language-]::-moz-selection,
code[class*=language-] ::-moz-selection,
pre[class*=language-]::-moz-selection,
pre[class*=language-] ::-moz-selection {
 background: rgba(29, 59, 83, 0.99);
 text-shadow: none;
}

code[class*=language-]::selection,
code[class*=language-] ::selection,
pre[class*=language-]::selection,
pre[class*=language-] ::selection {
 background: rgba(255, 255, 255, 0.0823529412);
 text-shadow: none;
}

@media print {

 code[class*=language-],
 pre[class*=language-] {
	 text-shadow: none;
 }
}

/* Code blocks */
pre[class*=language-] {
 background: #000000;
 color: white;
 margin: 0.5em 0;
 overflow: auto;
 padding: 1em;
}

:not(pre) > code[class*=language-] {
 background: #000000;
 color: white;
 border-radius: 0.3em;
 padding: 0.1em;
 white-space: normal;
}

.hljs-built_in {
 color: var(--neon-bunny-builtin);
}

.hljs-char {
 color: var(--neon-bunny-char);
}

.hljs-comment {
 color: var(--neon-bunny-comment);
 font-style: italic;
}

.hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs-keyword {
 color: var(--neon-bunny-keyword);
}

.hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs-number {
 color: var(--neon-bunny-number);
}

.hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs-params {
 color: var(--neon-bunny-params);
}

.hljs-property {
 color: var(--neon-bunny-property);
}

.hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs-string {
 color: var(--neon-bunny-string);
}

.hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs-title {
 color: var(--neon-bunny-title);
}

.hljs-title.class_ {
 color: var(--neon-bunny-title-class);
}

.hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs-title.function_ {
 color: var(--neon-bunny-title-function);
 text-decoration: underline;
}

.hljs-title.function_.invoke__ {
 color: var(--neon-bunny-title-function-invoke);
}

.hljs-type {
 color: var(--neon-bunny-type);
}

.hljs-variable {
 color: var(--neon-bunny-variable);
}

.hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs-variable.language_ {
 color: var(--neon-bunny-variable-language);
 font-style: italic;
}

.hljs-meta {
 color: var(--neon-bunny-meta);
}

.hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs-attribute {
 color: var(--neon-bunny-attribute);
}

.hljs-name {
 color: var(--neon-bunny-name);
}

.hljs-section {
 color: var(--neon-bunny-section);
}

.hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs-tag .hljs-attr {
 color: var(--neon-bunny-tag-attr);
}

.hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs-code {
 color: var(--neon-bunny-code);
}

.hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs-link {
 color: var(--neon-bunny-link);
}

.hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs-selector-id {
 color: var(--neon-bunny-selector-id);
}

.hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs-deletion {
 color: var(--neon-bunny-deletion);
}

.hljs.language-css {
 color: var(--neon-bunny-css);
}

.hljs.language-css .hljs-built_in {
 color: var(--neon-bunny-css-builtin);
}

.hljs.language-css .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-css .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-css .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-css .hljs-keyword {
 color: var(--neon-bunny-keyword);
}

.hljs.language-css .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-css .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-css .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-css .hljs-params {
 color: var(--neon-bunny-params);
 font-style: italic;
}

.hljs.language-css .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-css .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-css .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-css .hljs-string {
 color: var(--neon-bunny-string);
}

.hljs.language-css .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-css .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-css .hljs-title {
 color: var(--neon-bunny-title);
}

.hljs.language-css .hljs-title.class_ {
 color: var(--neon-bunny-title-class);
}

.hljs.language-css .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-css .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-css .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-title-function-invoke);
}

.hljs.language-css .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-css .hljs-variable {
 color: var(--neon-bunny-variable);
}

.hljs.language-css .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-css .hljs-variable.language_ {
 color: var(--neon-bunny-variable-language);
}

.hljs.language-css .hljs-meta {
 color: var(--neon-bunny-css-meta);
}

.hljs.language-css .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-css .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-css .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-css .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-css .hljs-attribute {
 color: var(--neon-bunny-css-attribute);
}

.hljs.language-css .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-css .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-css .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-css .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-css .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-css .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-css .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-css .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-css .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-css .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-css .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-css .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-css .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-css .hljs-selector-id {
 color: var(--neon-bunny-css-selector-id);
}

.hljs.language-css .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-css .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-css .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-css .hljs-deletion {
 color: var(--neon-bunny-deletion);
}

.hljs.language-javascript, .hljs.language-js {
 color: var(--neon-bunny-js);
}

.hljs.language-javascript .hljs-built_in, .hljs.language-js .hljs-built_in {
 color: var(--neon-bunny-builtin);
}

.hljs.language-javascript .hljs-char, .hljs.language-js .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-javascript .hljs-comment, .hljs.language-js .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-javascript .hljs-doctag, .hljs.language-js .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-javascript .hljs-keyword, .hljs.language-js .hljs-keyword {
 color: var(--neon-bunny-keyword);
}

.hljs.language-javascript .hljs-literal, .hljs.language-js .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-javascript .hljs-number, .hljs.language-js .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-javascript .hljs-operator, .hljs.language-js .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-javascript .hljs-params, .hljs.language-js .hljs-params {
 color: var(--neon-bunny-params);
 font-style: italic;
}

.hljs.language-javascript .hljs-params .hljs-variable.language_, .hljs.language-js .hljs-params .hljs-variable.language_ {
 color: var(--neon-bunny-js-params-variable-language);
}

.hljs.language-javascript .hljs-property, .hljs.language-js .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-javascript .hljs-punctuation, .hljs.language-js .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-javascript .hljs-regexp, .hljs.language-js .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-javascript .hljs-string, .hljs.language-js .hljs-string {
 color: var(--neon-bunny-string);
}

.hljs.language-javascript .hljs-subst, .hljs.language-js .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-javascript .hljs-symbol, .hljs.language-js .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-javascript .hljs-title, .hljs.language-js .hljs-title {
 color: var(--neon-bunny-title);
}

.hljs.language-javascript .hljs-title.class_, .hljs.language-js .hljs-title.class_ {
 color: var(--neon-bunny-js-title-class);
}

.hljs.language-javascript .hljs-title.class_.inherited__, .hljs.language-js .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-javascript .hljs-title.function_, .hljs.language-js .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-javascript .hljs-title.function_.invoke__, .hljs.language-js .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-title-function-invoke);
}

.hljs.language-javascript .hljs-type, .hljs.language-js .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-javascript .hljs-variable, .hljs.language-js .hljs-variable {
 color: var(--neon-bunny-variable);
}

.hljs.language-javascript .hljs-variable.constant_, .hljs.language-js .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-javascript .hljs-variable.language_, .hljs.language-js .hljs-variable.language_ {
 color: var(--neon-bunny-js-variable-language);
}

.hljs.language-javascript .hljs-meta, .hljs.language-js .hljs-meta {
 color: var(--neon-bunny-meta);
}

.hljs.language-javascript .hljs-meta.prompt_, .hljs.language-js .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-javascript .hljs-meta.keyword_, .hljs.language-js .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-javascript .hljs-meta.string_, .hljs.language-js .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-javascript .hljs-attr, .hljs.language-js .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-javascript .hljs-attribute, .hljs.language-js .hljs-attribute {
 color: var(--neon-bunny-attribute);
}

.hljs.language-javascript .hljs-name, .hljs.language-js .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-javascript .hljs-section, .hljs.language-js .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-javascript .hljs-tag, .hljs.language-js .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-javascript .hljs-bullet, .hljs.language-js .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-javascript .hljs-code, .hljs.language-js .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-javascript .hljs-emphasis, .hljs.language-js .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-javascript .hljs-formula, .hljs.language-js .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-javascript .hljs-link, .hljs.language-js .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-javascript .hljs-quote, .hljs.language-js .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-javascript .hljs-strong, .hljs.language-js .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-javascript .hljs-selector, .hljs.language-js .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-javascript .hljs-selector-attr, .hljs.language-js .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-javascript .hljs-selector-class, .hljs.language-js .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-javascript .hljs-selector-id, .hljs.language-js .hljs-selector-id {
 color: var(--neon-bunny-selector-id);
}

.hljs.language-javascript .hljs-selector-pseudo, .hljs.language-js .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-javascript .hljs-selector-tag, .hljs.language-js .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-javascript .hljs-addition, .hljs.language-js .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-javascript .hljs-deletion, .hljs.language-js .hljs-deletion {
 color: var(--neon-bunny-deletion);
}

.hljs.language-php {
 color: var(--neon-bunny-php);
}

.hljs.language-php .hljs-built_in {
 color: var(--neon-bunny-builtin);
}

.hljs.language-php .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-php .hljs-class .hljs-title {
 color: var(--neon-bunny-php-class-title) !important;
}

.hljs.language-php .hljs-class .hljs-keyword {
 color: var(--neon-bunny-php-class-keyword);
}

.hljs.language-php .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-php .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-php .hljs-function .hljs-title {
 color: var(--neon-bunny-php-function-title);
}

.hljs.language-php .hljs-keyword {
 color: var(--neon-bunny-php-keyword);
}

.hljs.language-php .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-php .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-php .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-php .hljs-params {
 color: var(--neon-bunny-php-params);
}

.hljs.language-php .hljs-params .hljs-variable {
 color: var(--neon-bunny-php-params-variable);
}

.hljs.language-php .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-php .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-php .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-php .hljs-string {
 color: var(--neon-bunny-php-string);
}

.hljs.language-php .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-php .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-php .hljs-title {
 color: var(--neon-bunny-php-title);
}

.hljs.language-php .hljs-title.class_ {
 color: var(--neon-bunny-php-title-class);
}

.hljs.language-php .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-php .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-php .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-php-title-function-invoke);
}

.hljs.language-php .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-php .hljs-variable {
 color: var(--neon-bunny-php-variable);
}

.hljs.language-php .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-php .hljs-variable.language_ {
 color: var(--neon-bunny-variable-language);
}

.hljs.language-php .hljs-meta {
 color: var(--neon-bunny-php-meta);
}

.hljs.language-php .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-php .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-php .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-php .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-php .hljs-attribute {
 color: var(--neon-bunny-attribute);
}

.hljs.language-php .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-php .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-php .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-php .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-php .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-php .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-php .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-php .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-php .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-php .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-php .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-php .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-php .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-php .hljs-selector-id {
 color: var(--neon-bunny-selector-id);
}

.hljs.language-php .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-php .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-php .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-php .hljs-deletion {
 color: var(--neon-bunny-deletion);
}
`;

const neonBunnyCarrotHighlightThemeMin = `/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny Carrot Theme
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #7cd47d;--neon-bunny-green: #00d205;--neon-bunny-lime: #c3e88d;--neon-bunny-magenta: #dd00ff;--neon-bunny-orange-darker: #e58100;--neon-bunny-orange-light: #ffc266;--neon-bunny-orange-lighter: #ff8d04;--neon-bunny-orange: #ff9900;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #da96df;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff5370;--neon-bunny-teal: #00EEFF;--neon-bunny-white: #fff;--neon-bunny-yellow-light: #ffffa2;--neon-bunny-yellow-light-faded: #ffe3b8;--neon-bunny-yellow: #ffff00;--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class: var(--neon-bunny-magenta);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-doctag: var(--neon-bunny-blue-light);--neon-bunny-keyword: var(--neon-bunny-magenta);--neon-bunny-literal: var(--neon-bunny-purple-light);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-blue-light);--neon-bunny-params: var(--neon-bunny-orange);--neon-bunny-property: var(--neon-bunny-yellow-light-faded);--neon-bunny-punctuation: var(--neon-bunny-blue);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-green);--neon-bunny-subst: var(--neon-bunny-green-darker);--neon-bunny-symbol: var(--neon-bunny-pink);--neon-bunny-title-class-inherited: var(--neon-bunny-orange);--neon-bunny-title-class: var(--neon-bunny-green-neon);--neon-bunny-title-function-invoke: var(--neon-bunny-orange);--neon-bunny-title-function: var(--neon-bunny-orange-light);--neon-bunny-title: var(--neon-bunny-orange);--neon-bunny-type: var(--neon-bunny-pink);--neon-bunny-variable-constant: var(--neon-bunny-green-darker);--neon-bunny-variable-language: var(--neon-bunny-orange);--neon-bunny-variable: var(--neon-bunny-green-darker);--neon-bunny-meta-keyword: var(--neon-bunny-purple-light);--neon-bunny-meta-prompt: var(--neon-bunny-orange);--neon-bunny-meta-string: var(--neon-bunny-orange);--neon-bunny-meta: var(--neon-bunny-orange);--neon-bunny-attr: var(--neon-bunny-orange);--neon-bunny-attribute: var(---neon-bunny-orange);--neon-bunny-name: var(--neon-bunny-orange);--neon-bunny-section: var(--neon-bunny-orange);--neon-bunny-tag-attr: var(--neon-bunny-orange-light);--neon-bunny-tag: var(--neon-bunny-orange);--neon-bunny-bullet: var(--neon-bunny-white);--neon-bunny-code: var(--neon-bunny-white);--neon-bunny-emphasis: var(--neon-bunny-white);--neon-bunny-formula: var(--neon-bunny-white);--neon-bunny-link: var(--neon-bunny-orange);--neon-bunny-quote: var(--neon-bunny-white);--neon-bunny-strong: var(--neon-bunny-white);--neon-bunny-css-selector-id: var(--neon-bunny-green);--neon-bunny-selector-attr: var(--neon-bunny-orange);--neon-bunny-selector-class: var(--neon-bunny-yellow);--neon-bunny-selector-id: var(--neon-bunny-selector);--neon-bunny-selector-pseudo: var(--neon-bunny-orange);--neon-bunny-selector-tag: var(--neon-bunny-white);--neon-bunny-selector: var(--neon-bunny-lime);--neon-bunny-addition: var(--neon-bunny-green-neon);--neon-bunny-deletion: var(--neon-bunny-red);--neon-bunny-css: var(--neon-bunny-teal);--neon-bunny-css-builtin: var(--neon-bunny-orange);--neon-bunny-css-meta: var(--neon-bunny-red);--neon-bunny-css-attribute: var(--neon-bunny-pink);--neon-bunny-js: var(--neon-bunny-orange);--neon-bunny-js-params-variable-language: var(--neon-bunny-orange);--neon-bunny-js-title-class: var(--neon-bunny-orange-lighter);--neon-bunny-js-variable-language: var(--neon-bunny-yellow);--neon-bunny-php: var(--neon-bunny-white);--neon-bunny-php-class-keyword: var(--neon-bunny-pink);--neon-bunny-php-class-title: var(--neon-bunny-yellow);--neon-bunny-php-function-title: var(--neon-bunny-orange-light);--neon-bunny-php-keyword: var(--neon-bunny-magenta);--neon-bunny-php-params-variable: var(--neon-bunny-green-darker);--neon-bunny-php-params: var(--neon-bunny-yellow);--neon-bunny-php-string: var(--neon-bunny-green-light);--neon-bunny-php-title-class: var(--neon-bunny-yellow);--neon-bunny-php-title-function-invoke: var(--neon-bunny-orange-light);--neon-bunny-php-title: var(--neon-bunny-white);--neon-bunny-php-variable: var(--neon-bunny-orange);--neon-bunny-php-meta: var(--neon-bunny-pink)}pre code.hljs{display:block;overflow-x:auto}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;font-size:1em;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto;padding:1em}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.hljs-built_in{color:var(--neon-bunny-builtin)}.hljs-char{color:var(--neon-bunny-char)}.hljs-comment{color:var(--neon-bunny-comment);font-style:italic}.hljs-doctag{color:var(--neon-bunny-doctag)}.hljs-keyword{color:var(--neon-bunny-keyword)}.hljs-literal{color:var(--neon-bunny-literal)}.hljs-number{color:var(--neon-bunny-number)}.hljs-operator{color:var(--neon-bunny-operator)}.hljs-params{color:var(--neon-bunny-params)}.hljs-property{color:var(--neon-bunny-property)}.hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs-regexp{color:var(--neon-bunny-regex)}.hljs-string{color:var(--neon-bunny-string)}.hljs-subst{color:var(--neon-bunny-subst)}.hljs-symbol{color:var(--neon-bunny-symbol)}.hljs-title{color:var(--neon-bunny-title)}.hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs-title.function_{color:var(--neon-bunny-title-function);text-decoration:underline}.hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs-type{color:var(--neon-bunny-type)}.hljs-variable{color:var(--neon-bunny-variable)}.hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs-variable.language_{color:var(--neon-bunny-variable-language);font-style:italic}.hljs-meta{color:var(--neon-bunny-meta)}.hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs-attr{color:var(--neon-bunny-attr)}.hljs-attribute{color:var(--neon-bunny-attribute)}.hljs-name{color:var(--neon-bunny-name)}.hljs-section{color:var(--neon-bunny-section)}.hljs-tag{color:var(--neon-bunny-tag)}.hljs-tag .hljs-attr{color:var(--neon-bunny-tag-attr)}.hljs-bullet{color:var(--neon-bunny-bullet)}.hljs-code{color:var(--neon-bunny-code)}.hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs-formula{color:var(--neon-bunny-formula)}.hljs-link{color:var(--neon-bunny-link)}.hljs-quote{color:var(--neon-bunny-quote)}.hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs-selector{color:var(--neon-bunny-selector)}.hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs-addition{color:var(--neon-bunny-addition)}.hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-css{color:var(--neon-bunny-css)}.hljs.language-css .hljs-built_in{color:var(--neon-bunny-css-builtin)}.hljs.language-css .hljs-char{color:var(--neon-bunny-char)}.hljs.language-css .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-css .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-css .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-css .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-css .hljs-number{color:var(--neon-bunny-number)}.hljs.language-css .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-css .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-css .hljs-property{color:var(--neon-bunny-property)}.hljs.language-css .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-css .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-css .hljs-string{color:var(--neon-bunny-string)}.hljs.language-css .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-css .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-css .hljs-title{color:var(--neon-bunny-title)}.hljs.language-css .hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs.language-css .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-css .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-css .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-css .hljs-type{color:var(--neon-bunny-type)}.hljs.language-css .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-css .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-css .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-css .hljs-meta{color:var(--neon-bunny-css-meta)}.hljs.language-css .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-css .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-css .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-css .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-css .hljs-attribute{color:var(--neon-bunny-css-attribute)}.hljs.language-css .hljs-name{color:var(--neon-bunny-name)}.hljs.language-css .hljs-section{color:var(--neon-bunny-section)}.hljs.language-css .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-css .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-css .hljs-code{color:var(--neon-bunny-code)}.hljs.language-css .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-css .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-css .hljs-link{color:var(--neon-bunny-link)}.hljs.language-css .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-css .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-css .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-css .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-css .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-css .hljs-selector-id{color:var(--neon-bunny-css-selector-id)}.hljs.language-css .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-css .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-css .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-css .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-javascript,.hljs.language-js{color:var(--neon-bunny-js)}.hljs.language-javascript .hljs-built_in,.hljs.language-js .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-javascript .hljs-char,.hljs.language-js .hljs-char{color:var(--neon-bunny-char)}.hljs.language-javascript .hljs-comment,.hljs.language-js .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-javascript .hljs-doctag,.hljs.language-js .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-javascript .hljs-keyword,.hljs.language-js .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-javascript .hljs-literal,.hljs.language-js .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-javascript .hljs-number,.hljs.language-js .hljs-number{color:var(--neon-bunny-number)}.hljs.language-javascript .hljs-operator,.hljs.language-js .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-javascript .hljs-params,.hljs.language-js .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-javascript .hljs-params .hljs-variable.language_,.hljs.language-js .hljs-params .hljs-variable.language_{color:var(--neon-bunny-js-params-variable-language)}.hljs.language-javascript .hljs-property,.hljs.language-js .hljs-property{color:var(--neon-bunny-property)}.hljs.language-javascript .hljs-punctuation,.hljs.language-js .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-javascript .hljs-regexp,.hljs.language-js .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-javascript .hljs-string,.hljs.language-js .hljs-string{color:var(--neon-bunny-string)}.hljs.language-javascript .hljs-subst,.hljs.language-js .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-javascript .hljs-symbol,.hljs.language-js .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-javascript .hljs-title,.hljs.language-js .hljs-title{color:var(--neon-bunny-title)}.hljs.language-javascript .hljs-title.class_,.hljs.language-js .hljs-title.class_{color:var(--neon-bunny-js-title-class)}.hljs.language-javascript .hljs-title.class_.inherited__,.hljs.language-js .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-javascript .hljs-title.function_,.hljs.language-js .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-javascript .hljs-title.function_.invoke__,.hljs.language-js .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-javascript .hljs-type,.hljs.language-js .hljs-type{color:var(--neon-bunny-type)}.hljs.language-javascript .hljs-variable,.hljs.language-js .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-javascript .hljs-variable.constant_,.hljs.language-js .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-javascript .hljs-variable.language_,.hljs.language-js .hljs-variable.language_{color:var(--neon-bunny-js-variable-language)}.hljs.language-javascript .hljs-meta,.hljs.language-js .hljs-meta{color:var(--neon-bunny-meta)}.hljs.language-javascript .hljs-meta.prompt_,.hljs.language-js .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-javascript .hljs-meta.keyword_,.hljs.language-js .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-javascript .hljs-meta.string_,.hljs.language-js .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-javascript .hljs-attr,.hljs.language-js .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-javascript .hljs-attribute,.hljs.language-js .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-javascript .hljs-name,.hljs.language-js .hljs-name{color:var(--neon-bunny-name)}.hljs.language-javascript .hljs-section,.hljs.language-js .hljs-section{color:var(--neon-bunny-section)}.hljs.language-javascript .hljs-tag,.hljs.language-js .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-javascript .hljs-bullet,.hljs.language-js .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-javascript .hljs-code,.hljs.language-js .hljs-code{color:var(--neon-bunny-code)}.hljs.language-javascript .hljs-emphasis,.hljs.language-js .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-javascript .hljs-formula,.hljs.language-js .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-javascript .hljs-link,.hljs.language-js .hljs-link{color:var(--neon-bunny-link)}.hljs.language-javascript .hljs-quote,.hljs.language-js .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-javascript .hljs-strong,.hljs.language-js .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-javascript .hljs-selector,.hljs.language-js .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-javascript .hljs-selector-attr,.hljs.language-js .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-javascript .hljs-selector-class,.hljs.language-js .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-javascript .hljs-selector-id,.hljs.language-js .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-javascript .hljs-selector-pseudo,.hljs.language-js .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-javascript .hljs-selector-tag,.hljs.language-js .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-javascript .hljs-addition,.hljs.language-js .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-javascript .hljs-deletion,.hljs.language-js .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-php{color:var(--neon-bunny-php)}.hljs.language-php .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-php .hljs-char{color:var(--neon-bunny-char)}.hljs.language-php .hljs-class .hljs-title{color:var(--neon-bunny-php-class-title) !important}.hljs.language-php .hljs-class .hljs-keyword{color:var(--neon-bunny-php-class-keyword)}.hljs.language-php .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-php .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-php .hljs-function .hljs-title{color:var(--neon-bunny-php-function-title)}.hljs.language-php .hljs-keyword{color:var(--neon-bunny-php-keyword)}.hljs.language-php .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-php .hljs-number{color:var(--neon-bunny-number)}.hljs.language-php .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-php .hljs-params{color:var(--neon-bunny-php-params)}.hljs.language-php .hljs-params .hljs-variable{color:var(--neon-bunny-php-params-variable)}.hljs.language-php .hljs-property{color:var(--neon-bunny-property)}.hljs.language-php .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-php .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-php .hljs-string{color:var(--neon-bunny-php-string)}.hljs.language-php .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-php .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-php .hljs-title{color:var(--neon-bunny-php-title)}.hljs.language-php .hljs-title.class_{color:var(--neon-bunny-php-title-class)}.hljs.language-php .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-php .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-php .hljs-title.function_.invoke__{color:var(--neon-bunny-php-title-function-invoke)}.hljs.language-php .hljs-type{color:var(--neon-bunny-type)}.hljs.language-php .hljs-variable{color:var(--neon-bunny-php-variable)}.hljs.language-php .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-php .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-php .hljs-meta{color:var(--neon-bunny-php-meta)}.hljs.language-php .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-php .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-php .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-php .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-php .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-php .hljs-name{color:var(--neon-bunny-name)}.hljs.language-php .hljs-section{color:var(--neon-bunny-section)}.hljs.language-php .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-php .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-php .hljs-code{color:var(--neon-bunny-code)}.hljs.language-php .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-php .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-php .hljs-link{color:var(--neon-bunny-link)}.hljs.language-php .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-php .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-php .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-php .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-php .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-php .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-php .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-php .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-php .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-php .hljs-deletion{color:var(--neon-bunny-deletion)}
`;

export {
	neonBunnyCarrotHighlightTheme,
	neonBunnyCarrotTheme,
	neonBunnyHighlightTheme,
	neonBunnyTheme,

	neonBunnyThemeMin,
	neonBunnyCarrotThemeMin,
	neonBunnyHighlightThemeMin,
	neonBunnyCarrotHighlightThemeMin
};
