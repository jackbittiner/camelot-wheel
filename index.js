const keyModule = require("./src/get-key");
const harmonicKeysModule = require("./src/get-harmonic-keys");
const getCamelotRoute = require("./src/get-camelot-route");

module.exports = {
  getKey: keyModule.getKey,
  getHarmonicKeys: harmonicKeysModule.getHarmonicKeys,
  getCamelotRoute: getCamelotRoute.getCamelotRoute
};
