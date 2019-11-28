const getKeyModule = require("./get-key");
const camelotWheel = require("./data");
const harmonicKeys = camelotWheel.harmonicKeys;
const getKey = getKeyModule.getKey;

const getHarmonicKeys = key => {
  if ("name" in key) {
    return getHarmonicKeysByName(key.name);
  }
  if ("pitchClass" in key && "mode" in key) {
    return getHarmonicKeysByPitchClassAndMode(key.pitchClass, key.mode);
  }
  if ("camelotPosition" in key && "mode" in key) {
    return getHarmonicKeysByCamelotPositionAndMode(
      key.camelotPosition,
      key.mode
    );
  }
};

const getHarmonicKeysByPitchClassAndMode = (pitchClass, mode) => {
  const keyName = getKey({ pitchClass, mode });
  return harmonicKeys[keyName.name];
};

const getHarmonicKeysByName = name => {
  const keyName = getKey({ name });
  return harmonicKeys[keyName.name];
};

const getHarmonicKeysByCamelotPositionAndMode = (camelotPosition, mode) => {
  const keyName = getKey({ camelotPosition, mode });
  return harmonicKeys[keyName.name];
};

module.exports = {
  getHarmonicKeys
};
