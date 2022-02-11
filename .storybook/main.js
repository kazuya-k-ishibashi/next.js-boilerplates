const path = require('path')

module.exports = {
  stories: ['../src/**/stories.tsx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
  features: {
    postcss: false,
  },
  staticDirs: ['../public'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    // @see https://github.com/storybookjs/storybook/issues/3916#issuecomment-664349094
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve('src'),
    }

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: 'babel-loader',
    })

    return config
  },
}
