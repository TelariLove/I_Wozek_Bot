module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'airbnb',
		'eslint:recommended',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'linebreak-style': ['error', 'windows'],
		indent: ['error', 'tab'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-return-await': ['off'],
	},
};
