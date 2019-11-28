const getKey = require('./get-key');
const camelotWheel = require('./data');
const harmonicKeys = camelotWheel.harmonicKeys;
const getKeyByPitchClassAndMode = getKey.getKeyByPitchClassAndMode;
const getKeyByName = getKey.getKeyByName;

const getHarmonicKeysByPitchClassAndMode = (pitchClass, mode) => {
  const keyName = getKeyByPitchClassAndMode(pitchClass, mode);
  return harmonicKeys[keyName.name];
};

const getHarmonicKeysByName = name => {
  const keyName = getKeyByName(name);
  return harmonicKeys[keyName.name];
};

module.exports = {
  getHarmonicKeysByPitchClassAndMode,
  getHarmonicKeysByName
};
