module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks'
  ],
  rules: {
      'camelcase': 0,
      'react/no-array-index-key': 0,
      'no-console': 0,
      'jsx-a11y/control-has-associated-label': 0,
      'react-hooks/exhaustive-deps': 0,
      'eqeqeq': 0,
      'react/state-in-constructor': 0,
      'prettier/prettier': 0,
      'react/jsx-filename-extension': 0,
      'import/prefer-default-export': 0,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
  },
};
