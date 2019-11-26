const getKey = require("../src/get-key");

describe("getKey", function() {
  describe("getKeyByPitchClassAndMode", function() {
    it("should return the key details from the pitch class and mode", function() {
      const getKeyByPitchClassAndMode = getKey.getKeyByPitchClassAndMode;
      expect(getKeyByPitchClassAndMode(0, 1)).toEqual({
        camelotPosition: 8,
        mode: 1,
        name: "C",
        pitchClass: 0
      });
      expect(getKeyByPitchClassAndMode(4, 0)).toEqual({
        camelotPosition: 9,
        mode: 0,
        name: "Em",
        pitchClass: 4
      });
    });
  });
});
