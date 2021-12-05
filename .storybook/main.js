const path = require('path');

module.exports = {
  staticDirs: ['../public'],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // framework: '@storybook/react',
  // core: {
  //   builder: 'storybook-builder-vite'
  // },
  core: {
    builder: 'webpack5'
  },

  // async viteFinal(config) {
  //   // Set relative base path to support deployment on path like /storybook
  //   config.base = './';
  //   config.optimizeDeps.include = [
  //     'react-is',
  //     '@base2/pretty-print-object',
  //     ...config?.optimizeDeps?.include
  //   ];
  //   return config;
  // },


  webpackFinal: config => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
      include: path.resolve(__dirname, '../')
    });

    config.module.rules.push({
      test: /\.s(a|c)ss$/,
      include: path.resolve(__dirname, '../'),
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
              localIndentName: '[name]__[local]--[hash:base64:5]'
            }
          }
        },
        'sass-loader'
      ]
    });

    return config;
  }
};
