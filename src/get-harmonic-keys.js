const getKeyModule = require("./get-key");
const camelotWheel = require("./data");
const harmonicKeys = camelotWheel.harmonicKeys;
const getKey = getKeyModule.getKey;

const getHarmonicKeysByPitchClassAndMode = (pitchClass, mode) => {
  const keyName = getKey({ pitchClass, mode });
  return harmonicKeys[keyName.name];
};

const getHarmonicKeysByName = name => {
  const keyName = getKey({ name });
  return harmonicKeys[keyName.name];
};

module.exports = {
  getHarmonicKeysByPitchClassAndMode,
  getHarmonicKeysByName
};
