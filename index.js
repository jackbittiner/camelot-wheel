const keyModule = require("./src/get-key");
const getHarmonicKeys = require("./src/get-harmonic-keys");
const getCamelotRoute = require("./src/get-camelot-route");

module.exports = {
  getKey: keyModule.getKey,
  getHarmonicKeys: getHarmonicKeys.getHarmonicKeys,
  getCamelotRoute: getCamelotRoute.getCamelotRoute
};
