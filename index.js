const getKey = require("./src/get-key");
const getHarmonicKeys = require("./src/get-harmonic-keys");
const getCamelotRoute = require("./src/get-camelot-route");

module.exports = {
  getKeyByPitchClassAndMode: getKey.getKeyByPitchClassAndMode(),
  getKeyByCamelotPositionAndMode: getKey.getKeyByCamelotPositionAndMode(),
  getHarmonicKeys: getHarmonicKeys.getHarmonicKeys,
  getCamelotRoute: getCamelotRoute.getCamelotRoute
};
