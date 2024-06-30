const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'mfe2',

  exposes: {
    './web-components': './projects/mfe2/src/bootstrap.ts',
  },

  shared: {
  },

  
});
