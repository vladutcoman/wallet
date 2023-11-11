const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

// const config = {
//   resolver: {
//     extraNodeModules: require('node-libs-react-native'),
//   },
// };

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
