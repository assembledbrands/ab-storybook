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
  webpackFinal: async (config, { configType }) => {
    config.module.rules = config.module.rules.filter(f => f.test.toString() !== '/\\.css$/');
    config.module.rules.push({
      test: /\.css$/,
      sideEffects: true,
      include: path.resolve(__dirname, '../'),
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            localsConvention: 'camelCase',
            modules: true,
          },
        }
      ]
    });
    config.module.rules.push({
      test: /\.(png|otf|svg)$/,
      use: [
        {
          loader: 'file-loader',
          query: {
            name: '[name].[ext]'
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    });
    return config;
  },
}
