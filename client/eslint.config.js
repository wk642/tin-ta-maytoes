import baseconfig from '../eslint.config';
import globals from 'globals';
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPlutinReactRefresh from "eslint-plugin-react-refresh";

export default [
  // baseconfig is taking all the config from base ../eslint.config with few overrides
  ...baseconfig,

  eslintPluginReact.configs.flat["jsx-runtime"],
  eslintPluginReactHooks.configs["recommended-latest"],
  eslintPlutinReactRefresh.configs.vite,
  {
    languageOptions: {
      globals: {
        // override js global config with node standard globals. 
        ...globals.browser,
        // ...globals.es2025, // possibly don't need this
      },
    },
  }
];