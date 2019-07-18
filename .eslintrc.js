const CONFIG_PACKAGE = '@meatwallace/eslint-config-base';

let config = {
  extends: CONFIG_PACKAGE,
};

// if (process.env.PRETTIER_ESLINT === 'true') {
//   config.resolvePluginsRelativeTo = require.resolve(CONFIG_PACKAGE);
// }

module.exports = config;
