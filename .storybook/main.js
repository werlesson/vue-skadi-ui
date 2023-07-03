/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  // core: {
  //   builder: "storybook-builder-vite"
  // },
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    config.css = {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import './build/scss/_variables.scss';
            @import './src/assets/styles/styles.scss';
          `
        }
      }
    }
    return config
  }
};
export default config;
