/**
 * Metro configuration for React Native
 * https://github.com/facebook/metro
 *
 * @format
 */

module.exports = {
  transformer: {
    babelTransformerPath: require.resolve('metro-react-native-babel-transformer'),
  },
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json'], // Add file extensions supported by Metro
  },
};
