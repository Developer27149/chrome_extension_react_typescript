module.exports = {
  root: true,
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
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'prettier',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'promise',
    'eslint-comments',
    'import',
    'unicorn',
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
  rules: {
    'no-console': 'off',
    'unicorn/filename-case': 'off',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        // 指定 eslint-plugin-import 后缀名
        extensions: ['.ts', '.tsx', '.json', '.js'],
      },
      typescript: {
        directory: './tsconfig.json',
      },
    },
  },
  ignorePatterns: [
    'prettier.config.js',
    'config/*',
    'babel.config.js',
    '.eslintrc.js',
    'init_manifest.js',
    'config/manifest.json',
    'build/**/*',
  ],
};
