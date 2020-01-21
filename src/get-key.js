const { allKeys } = require("./data.js");

const getKey = key => {
  if ("name" in key) {
    return getKeyByName(key.name);
  }
  if ("pitchClass" in key && "mode" in key) {
    return getKeyByPitchClassAndMode(key.pitchClass, key.mode);
  }
  if ("camelotPosition" in key && "mode" in key) {
    return getKeyByCamelotPositionAndMode(key.camelotPosition, key.mode);
  }
};

const getKeyByName = name => {
  return allKeys.find(key => {
    return key.name === name;
  });
};

const getKeyByPitchClassAndMode = (pitchClass, mode) => {
  return allKeys.find(key => {
    return key.pitchClass === pitchClass && key.mode === mode;
  });
};

const getKeyByCamelotPositionAndMode = (camelotPosition, mode) => {
  return allKeys.find(key => {
    return key.camelotPosition === camelotPosition && key.mode === mode;
  });
};

module.exports = {
  getKey
};
