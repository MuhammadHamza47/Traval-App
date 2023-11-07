module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['prettier'],
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  },
};
