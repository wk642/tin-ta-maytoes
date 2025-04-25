import baseconfig from '../eslint.config';
import globals from 'globals';

export default [
  // baseconfig is taking all the config from base ../eslint.config with few overrides
  ...baseconfig,
  {
    languageOptions: {
      globals: {
        // override js global config with node standard globals. 
        ...globals.jest,
        // ...globals.es2025,
      },
    },
  }
];