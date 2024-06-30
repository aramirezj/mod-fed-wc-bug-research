const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    // no need to declare remotes as they are dynamically loaded.
  },
  shared: {
    '@angular/animations':                 { requiredVersion: '^17.0.0' },
    '@angular/animations/browser':         { requiredVersion: '^17.0.0' },
    '@angular/common':                     { requiredVersion: '^17.0.0' },
    '@angular/common/http':                { requiredVersion: '^17.0.0' },
    '@angular/compiler':                   { requiredVersion: '^17.0.0' },
    '@angular/core':                       { requiredVersion: '^17.0.0' },
    '@angular/forms':                      { requiredVersion: '^17.0.0' },
    '@angular/platform-browser':           { requiredVersion: '^17.0.0' },
    '@angular/platform-browse/animations': { requiredVersion: '^17.0.0' },
    '@angular/platform-browser-dynamic':   { requiredVersion: '^17.0.0' },
    '@angular/router':                     { requiredVersion: '^17.0.0' },
    },
});
