import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      "no-restricted-imports": [
        "error",
        {
          "patterns": ["../*"]
        }
      ]
    }
  }
];