const config = require('@onesimpleone/configs/eslint')

module.exports = {
  root: true,
  ...config,
  rules: {
    ...config.rules,
  },
  ignorePatterns: [
    ...config.ignorePatterns,
    'public',
    'gatsby-config.ts',
    'gatsby-browser.js',
    'src/gatsby-types.d.ts',
  ],
  overrides: [
    ...config.overrides,
    {
      files: ['src/pages/*.tsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        'react/jsx-no-literals': 'off',
      },
    },
  ],
}
