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
    'src/gatsby-types.d.ts',
  ],
  overrides: [
    ...config.overrides,
    {
      files: ['src/pages/**/index.tsx', 'src/pages/index.tsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
}
