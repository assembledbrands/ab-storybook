const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/preset-typescript'
  ],
  // webpackFinal: async (config, { configType }) => {
  //   config.module.rules.push({
  //     test: /\.module\.css$/,
  //     exclude: /\.module\.css$/,
  //     use: ['style-loader', 'css-loader'],
  //     include: path.resolve(__dirname, '../src/'),
  //   });
  //   return config;
  // },
}
