

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
    "selector-class-pattern": null,
  },
  ignoreFiles: ["coverage/**", "build/**", "public/*"],
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss"
    },
    {
      files: ["**/*.sass"],
      customSyntax: "postcss-sass"
    }
  ],
};
