// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      "@typescript-eslint/explicit-function-return-type": "error",

      "vue/html-self-closing": [
        "error",
        {
          html: { normal: "always", void: "always", component: "always" },
          svg: "always",
          math: "always",
        },
      ],
    },
  }
);
