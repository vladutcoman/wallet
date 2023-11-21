module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@api': './src/api',
          '@components': './src/components',
          '@constants': './src/constants',
          '@features': './src/features',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@services': './src/services',
          '@store': './src/store',
          '@utils': './src/utils',
          '@ledgerhq/devices/hid-framing':
            '@ledgerhq/devices/lib-es/hid-framing',
        },
      },
    ],
  ],
};
