import { withVuetify } from "@socheatsok78/storybook-addon-vuetify/dist/decorators";
import { themes } from "@storybook/theming";

export const decorators = [withVuetify];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: "black" },
    current: "dark",
  },
};
