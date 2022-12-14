module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  root: true,
  rules: {
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/prefer-stateless-function': 'off',
    'linebreak-style': 0,
    'global-require': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'always',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-console': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
};
