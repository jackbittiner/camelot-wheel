const getKey = require("./src/get-key");
const getHarmonicKeys = require("./src/get-harmonic-keys");

module.exports = {
  getKeyByPitchClassAndMode: getKey.getKeyByPitchClassAndMode(),
  getKeyByCamelotPositionAndMode: getKey.getKeyByCamelotPositionAndMode(),
  getHarmonicKeysByPitchClassAndMode:
    getHarmonicKeys.getHarmonicKeysByPitchClassAndMode
};
