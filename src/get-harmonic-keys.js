const getKey = require("./get-key");
const camelotWheel = require("./data");
const harmonicKeys = camelotWheel.harmonicKeys;
const getKeyByPitchClassAndMode = getKey.getKeyByPitchClassAndMode;

const getHarmonicKeysByPitchClassAndMode = (pitchClass, mode) => {
  const keyName = getKeyByPitchClassAndMode(pitchClass, mode);
  return harmonicKeys[keyName.name];
};

module.exports = {
  getHarmonicKeysByPitchClassAndMode
};
