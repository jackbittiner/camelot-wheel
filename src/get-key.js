const CamelotWheel = require("./data.js");
const allKeys = CamelotWheel.allKeys;

const getKeyByPitchClassAndMode = (pitchClass, mode) => {
  const keyName = allKeys.find(key => {
    return key.pitchClass === pitchClass && key.mode === mode;
  });
  return keyName;
};

module.exports = {
  getKeyByPitchClassAndMode
};
