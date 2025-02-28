export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  arrowParens: 'avoid',
  bracketSpacing: true,
  bracketSameLine: false,
  printWidth: 79,
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
};