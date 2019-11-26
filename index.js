const getKey = require("./src/get-key");

module.exports = {
  getKeyByPitchClassAndMode: getKey.getKeyByPitchClassAndMode(),
  getKeyByCamelotPositionAndMode: getKey.getKeyByCamelotPositionAndMode()
};
