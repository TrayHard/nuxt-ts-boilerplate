module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    '@vue/airbnb'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'indent': ['warn', 4],
    'linebreak-style': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'spaced-comment': 'off'
  }
}
