const getKeyModule = require("./get-key");
const camelotWheel = require("./data");
const harmonicKeys = camelotWheel.harmonicKeys;
const getKey = getKeyModule.getKey;

const getHarmonicKeys = (pitchClass, mode) => {
  const keyName = getKey({ pitchClass, mode });
  return harmonicKeys[keyName.name];
};

module.exports = {
  getHarmonicKeys
};
