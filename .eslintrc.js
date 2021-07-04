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

  ],
  rules: {
  },
  settings: {
    'import/resolver': {
      node: {
        // 指定 eslint-plugin-import 后缀名
        extensions: ['.ts', '.tsx', '.json', '.js'],
      },
      typescript: {
        directory: [resolve('./tsconfig.json'), resolve('./script/tsconfig.json')], //  eslint-disable-line
      },
    },
  },
};
