# `@meatwallace/prettier-config`

personal [Prettier](https://prettier.io) config

## Usage

**Install**:

```sh
yarn add --dev @meatwallace/prettier-config
```

**Use via editing `package.json`**:

```jsonc
{
  // ...
  "prettier": "@meatwallace/prettier-config"
}
```

**Use via `.prettierrc.js` to allow overrides**:

```js
module.exports = {
  ...require('@meatwallace/prettier-config'),
  // ...
};
```
