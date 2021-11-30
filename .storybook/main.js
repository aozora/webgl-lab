const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config) {
    // Set relative base path to support deployment on path like /storybook
    config.base = './';
    config.optimizeDeps.include = [
      'react-is',
      '@base2/pretty-print-object',
      ...config?.optimizeDeps?.include,
    ];
    return config;
  },

  // webpackFinal: config => {
  //   config.module.rules.push({
  //     test: /\.(glsl|vs|fs|vert|frag)$/,
  //     exclude: /node_modules/,
  //     use: ['raw-loader', 'glslify-loader'],
  //     include: path.resolve(__dirname, '../')
  //   });
  //
  //   return config;
  // }
};
