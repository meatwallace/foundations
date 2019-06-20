# `@meatwallace/jest-config-base`

personal jest configuration used as a base for other configurations

## Usage

**Install**:

```sh
yarn add --dev @meatwallace/jest-base-config
```

**Merge with your `jest` configuration**:

```js
// jest.config.js
const baseConfig = require('@meatwallace/jest-base-config');

// override and add to base configuration
module.exports = {
  ...baseConfig,
  displayName: 'example-project',
};

// alternatively, use a recursive merge function to retain object properties
// and append to array values
module.exports = merge(baseConfig, {
  // ...
};
```
