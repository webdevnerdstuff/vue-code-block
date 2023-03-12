module.exports = {
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/essential',
		"@vue/typescript/recommended",
		"prettier",
	],
	overrides: [
		{
			files: [
				'**/*.spec.{j,t}s?(x)',
			],
			env: {
				jest: true,
			},
		},
	],
	globals: {
		Entry: true,
	},
	parserOptions: {
		parser: "@typescript-eslint/parser",
	},
	plugins: [
		'@typescript-eslint',
		'import',
		'prettier',
		'vue',
	],
	root: true,
	settings: {
		'import/resolver': {
			'babel-module': {},
		},
	},
	rules: {
		"@typescript-eslint/ban-types": [
			"error",
			{
				"extendDefaults": true,
				"types": {
					"{}": false
				}
			}
		],
		'@typescript-eslint/no-empty-function': 0,
		'brace-style': ['error', 'stroustrup'],
		'default-case': [
			'error', {
				commentPattern: '^skip\\sdefault',
			},
		],
		'func-names': ['error', 'never'],
		'function-paren-newline': 0,
		'import/no-self-import': 0,
		'import/no-extraneous-dependencies': 0,
		'implicit-arrow-linebreak': ['warn', 'beside'],
		indent: [2, 'tab', { SwitchCase: 1 }],
		'no-tabs': [0, { allowIndentationTabs: true }],
		'linebreak-style': 0,
		'max-len': 0,
		'no-else-return': ['error', { allowElseIf: true }],
		'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
		'no-const-assign': 'error',
		'no-debugger': 0,
		'no-new': 0,
		'no-unused-vars': 1,
		'no-use-before-define': 0,
		'no-useless-escape': 0,
		'no-param-reassign': [
			'error', {
				props: true,
				ignorePropertyModificationsFor: ['field', 'model', 'el', 'item', 'state', 'Vue', 'vue'],
			},
		],
		'no-underscore-dangle': [
			'error', {
				allow: ['_data'],
				allowAfterThis: true,
			},
		],
		'no-plusplus': [
			'error', { allowForLoopAfterthoughts: true },
		],
		'object-curly-newline': ['error', {
			ObjectPattern: { multiline: false },
		}],
		'operator-linebreak': ['error', 'after'],
		'prefer-destructuring': [
			'error', {
				array: false,
				object: false,
			},
			{
				enforceForRenamedProperties: false,
			},
		],
		'space-before-function-paren': ['error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'never',
		}],
		'vue/attributes-order': ['error', {
			'alphabetical': true,
			'order': [
				'DEFINITION',
				'LIST_RENDERING',
				'CONDITIONALS',
				'RENDER_MODIFIERS',
				'GLOBAL',
				['UNIQUE', 'SLOT'],
				'TWO_WAY_BINDING',
				'OTHER_DIRECTIVES',
				'OTHER_ATTR',
				'EVENTS',
				'CONTENT',
			],
		}],
		'vue/html-closing-bracket-newline': 0,
		'vue/html-indent': 0,
		'vue/html-self-closing': 0,
		'vue/max-attributes-per-line': 0,
		'vue/no-multiple-template-root': 0,
		'vue/no-v-for-template-key': 0,
		'vue/no-template-shadow': 0,
		'vue/no-v-html': 0,
		'vue/singleline-html-element-content-newline': 0,
		'vue/valid-template-root': 0,
	},
};
