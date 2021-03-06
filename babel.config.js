module.exports = function (api) {
  api.cache(true);
  const presets = [
    ['@babel/preset-env'],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
    '@linaria',
  ];
  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: {
          version: 3,
          proposal: false,
        },
        useESModule: true,
      },
    ],
  ];
  return {
    presets,
    plugins,
  };
};
