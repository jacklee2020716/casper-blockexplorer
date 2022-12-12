/**
 * @type {import('@types/prettier').RequiredOptions}
 */
module.exports = {
  trailingComma: 'all',
  printWidth: 80,
  arrowParens: 'always',
  singleQuote: true,
  jsxSingleQuote: false,
  tabWidth: 2,
  semi: true,
  overrides: [
    {
      files: ['*.css', '*.scss'],
      options: {
        tabWidth: 4,
      },
    },
  ],
  endOfLine: 'auto',
  plugins: ['prettier-plugin-tailwindcss'],
};
