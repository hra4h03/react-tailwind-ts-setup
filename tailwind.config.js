module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: {
    enable: process.env.NODE_ENV === "production",
    content: ["./src/**/*.tsx", "./public/index.html"],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
