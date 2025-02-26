import prettierConfig from './prettier.config.mjs';

export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended-scss",
    "stylelint-config-rational-order",
    "stylelint-config-html/html",
    "stylelint-config-html/astro",
  ],
  plugins: ["stylelint-order"],
  rules: {
    "string-quotes": prettierConfig.singleQuote === true ? "single" : "double",
    "selector-class-pattern": null,
  },
  ignoreFiles: ["coverage/**", "build/**", "public/*"],
  overrides: [
    {
      files: ["**/*.sass"],
      customSyntax: "postcss-sass",
    },
  ],
};
