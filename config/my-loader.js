/* eslint-disable global-require */
const path = require('path');

module.exports = function myLoader(source) {
  const options = this.getOptions();
  const pkgJSON = path.resolve(process.cwd(), 'package.json');

  this.addDependency(pkgJSON);

  const { author } = require(pkgJSON);
  return source.replace(/Hello!/, `Hi ${options.name || author.name}!`);
};
