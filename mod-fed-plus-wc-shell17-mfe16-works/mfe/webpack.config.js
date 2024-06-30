const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe1-ng16",
  filename: "remoteEntry.js", // this doesn't need to be set, if not specified it defaults to remoteEntry.js. Setting it here just for demo purposes.
  exposes: {
    "./standalone-component-as-web-component": "./src/app/my-standalone-component/my-standalone-component-bootstrap.ts",
  },
  shared: {
    '@angular/animations':                 { requiredVersion: '^16.0.0' },
    '@angular/animations/browser':         { requiredVersion: '^16.0.0' },
    '@angular/common':                     { requiredVersion: '^16.0.0' },
    '@angular/common/http':                { requiredVersion: '^16.0.0' },
    '@angular/compiler':                   { requiredVersion: '^16.0.0' },
    '@angular/core':                       { requiredVersion: '^16.0.0' },
    '@angular/forms':                      { requiredVersion: '^16.0.0' },
    '@angular/platform-browser':           { requiredVersion: '^16.0.0' },
    '@angular/platform-browse/animations': { requiredVersion: '^16.0.0' },
    '@angular/platform-browser-dynamic':   { requiredVersion: '^16.0.0' },
    '@angular/router':                     { requiredVersion: '^16.0.0' },
    },
});
