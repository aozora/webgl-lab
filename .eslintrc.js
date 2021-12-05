module.exports = {
  'env': {
    browser: true,
    es2021: true,
    node: true
  },
  'extends': ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended", "prettier", "plugin:storybook/recommended"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-debugger': 'warn',
    'no-useless-rename': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'max-len': ['off']
  }
};