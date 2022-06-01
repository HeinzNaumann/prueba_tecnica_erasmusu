module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: { react: { version: 'detect' } },
	extends: ['plugin:react/recommended', 'standard', 'eslint-config-prettier'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	extends: ['plugin:react/jsx-runtime'],
	rules: {},
}
