module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    // '@storybook/addon-docs', //React only add-on
  ],
};
