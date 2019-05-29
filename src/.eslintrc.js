module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
      'plugin:nuxt/recommended'
  ],
  rules: {
    // 'import/extensions': ['error', 'always', {
    //   js: 'never',
    //   vue: 'never'
    // }],
	'no-console': 'off',
	'no-debugger': 'warn'
  },
  globals: {},
  settings: {
    'import/resolver': {
      webpack: 'webpack.config.js',
    },
  },
}
