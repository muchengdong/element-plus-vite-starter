import antfu from "@antfu/eslint-config"

export default antfu({
  formatters: true,
  unocss: true,
  typescript: true,
  jsonc: false,
  vue: true,
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: "double", // or 'double'
  },
})
