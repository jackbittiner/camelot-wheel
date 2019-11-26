const CamelotWheel = require("./data.js");
const allKeys = CamelotWheel.allKeys;

const getKeyByPitchClassAndMode = (pitchClass, mode) => {
  const keyResponse = allKeys.find(key => {
    return key.pitchClass === pitchClass && key.mode === mode;
  });
  return keyResponse;
};

module.exports = {
  getKeyByPitchClassAndMode
};
