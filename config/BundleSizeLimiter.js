/* eslint-disable import/no-extraneous-dependencies */
const { resolve } = require('path');
const bytes = require('bytes');
const fs = require('fs');

class BundleSizeLimiter {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    const { limit } = this.options || {};

    compiler.hooks.done.tap(BundleSizeLimiter.name, (stats) => {
      const { path, filename } = stats.compilation.options.output;
      const bundlePath = resolve(path);
      const { size } = fs.statSync(bundlePath);
      const limitter = typeof limit === 'number' ? limit : bytes(limit);

      if (size > limitter) {
        console.error('Bundle size exceed the limitation');
        console.error('File: ', filename);
        console.error('Actual Size: ', bytes(size));
        console.error('Limit size: ', limit);
      }
    });
  }
}

module.exports = BundleSizeLimiter;
