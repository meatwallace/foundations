// @flow
module.exports = (api /*: $FlowIgnore */) => {
  //  const isTest = api.env('test');

  api.cache(true);

  return {
    presets: [
      '@babel/preset-flow',
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
  };
};
