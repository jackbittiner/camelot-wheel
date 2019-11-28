const getKey = require('./src/get-key');
const getHarmonicKeys = require('./src/get-harmonic-keys');
const getCamelotRoute = require('./src/get-camelot-route');

module.exports = {
  getKeyByName: getKey.getKeyByName,
  getKeyByPitchClassAndMode: getKey.getKeyByPitchClassAndMode,
  getKeyByCamelotPositionAndMode: getKey.getKeyByCamelotPositionAndMode,
  getHarmonicKeysByPitchClassAndMode:
    getHarmonicKeys.getHarmonicKeysByPitchClassAndMode,
  getHarmonicKeysByName: getHarmonicKeys.getHarmonicKeysByName,
  getCamelotRoute: getCamelotRoute.getCamelotRoute
};
