const CamelotWheel = require('./data.js');
const allKeys = CamelotWheel.allKeys;

const getKeyByName = name => {
  return allKeys.find(key => {
    return key.name === name;
  });
};

const getKeyByPitchClassAndMode = (pitchClass, mode) => {
  const keyResponse = allKeys.find(key => {
    return key.pitchClass === pitchClass && key.mode === mode;
  });
  return keyResponse;
};

const getKeyByCamelotPositionAndMode = (camelotPosition, mode) => {
  const keyResponse = allKeys.find(key => {
    return key.camelotPosition === camelotPosition && key.mode === mode;
  });
  return keyResponse;
};

module.exports = {
  getKeyByName,
  getKeyByPitchClassAndMode,
  getKeyByCamelotPositionAndMode
};
