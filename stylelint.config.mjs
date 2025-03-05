export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended-scss",
    "stylelint-config-html/html",
    "stylelint-config-html/astro",
  ],
  plugins: ["stylelint-order"],
  rules: {
    "selector-class-pattern": null,
  },
  ignoreFiles: ["coverage/**", "build/**", "public/*"],
};
