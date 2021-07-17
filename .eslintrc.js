module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 18,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'promise',
    'eslint-comments',
    'import',
    'unicorn',
    'prettier',
  ],
  rules: {
    'no-console': 'off',
    'import/extensions': ['never'],
  },
  settings: {
    'import/resolver': {
      node: {
        // 指定 eslint-plugin-import 后缀名
        extensions: ['.ts', '.tsx', '.json', '.js'],
      },
      typescript: {
        directory: [resolve('./tsconfig.json')],
      },
    },
  },
  ignorePatterns: [
    '.eslintrc.js',
    'prettier.config.js',
    'config/*',
    'babel.config.js',
  ],
};
