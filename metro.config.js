const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  resolver: {
    sourceExts: [...defaultConfig.resolver.sourceExts, "jsx", "js", "ts", "tsx", "json"],
    assetExts: [...defaultConfig.resolver.assetExts, "png", "jpg", "jpeg", "gif", "svg"],
  },
};
