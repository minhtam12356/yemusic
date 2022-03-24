const path = require('path');

const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,
  core: {
    ...rootMain.core,
    builder: 'webpack5',
  },
  stories: [...rootMain.stories, '../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook', 'storybook-dark-mode'],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    config = {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.scss$/,
            use: [
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: [
                    path.resolve(__dirname, '../', 'src', 'assets', 'scss', '*.scss'),
                    path.resolve(__dirname, '../', 'src', 'styles.scss'),
                  ],
                },
              },
            ],
          },
        ],
      },
    };

    return config;
  },
};
