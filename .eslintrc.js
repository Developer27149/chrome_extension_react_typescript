module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
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
  },
  settings: {
    'import/resolver': {
      node: {
        // 指定 eslint-plugin-import 后缀名
        extensions: ['.ts', '.tsx', '.json', '.js'],
      },
      typescript: {
        // directory: [resolve('./tsconfig.json'), resolve('./script/tsconfig.json')],
      },
    },
  },
  ignorePatterns: ['.eslintrc.js', 'prettier.config.js'],
};
