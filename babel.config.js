module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@domain': './src/domain',
          '@types': './src/types',
          '@utils': './src/utils',
          '@test': './src/test',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
