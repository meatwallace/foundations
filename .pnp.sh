#!/bin/sh

# this file is required when running flow via a script defined in package.json
# to avoid yarn's automatically injected NODE_OPTIONS from interfering with
# flow's module resolution
NODE_OPTIONS='' node ./.pnp.js
