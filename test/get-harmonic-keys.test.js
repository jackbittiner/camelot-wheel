const getHarmonicKeys = require("../src/get-harmonic-keys");

describe("getHarmonicKeys", function() {
  describe("getHarmonicKeysByPitchClassAndMode", function() {
    it("should return the harmonic key details from the pitch class and mode", function() {
      const getHarmonicKeysByPitchClassAndMode =
        getHarmonicKeys.getHarmonicKeysByPitchClassAndMode;
      expect(getHarmonicKeysByPitchClassAndMode(0, 1)).toEqual([
        { camelotPosition: 8, mode: 1, name: "C", pitchClass: 0 },
        { camelotPosition: 7, mode: 1, name: "F", pitchClass: 5 },
        { camelotPosition: 9, mode: 1, name: "G", pitchClass: 7 },
        { camelotPosition: 8, mode: 0, name: "Am", pitchClass: 9 }
      ]);
      expect(getHarmonicKeysByPitchClassAndMode(4, 0)).toEqual([
        { camelotPosition: 9, mode: 0, name: "Em", pitchClass: 4 },
        { camelotPosition: 8, mode: 0, name: "Am", pitchClass: 9 },
        { camelotPosition: 10, mode: 0, name: "Bm", pitchClass: 11 },
        { camelotPosition: 9, mode: 1, name: "G", pitchClass: 7 }
      ]);
    });
  });
  describe("getHarmonicKeysByName", function() {
    it("should return the harmonic key details from the pitch class and mode", function() {
      const getHarmonicKeysByCamelotPositionAndMode =
        getHarmonicKeys.getHarmonicKeysByCamelotPositionAndMode;
      expect(getHarmonicKeysByCamelotPositionAndMode(8, 1)).toEqual([
        { camelotPosition: 8, mode: 1, name: "C", pitchClass: 0 },
        { camelotPosition: 7, mode: 1, name: "F", pitchClass: 5 },
        { camelotPosition: 9, mode: 1, name: "G", pitchClass: 7 },
        { camelotPosition: 8, mode: 0, name: "Am", pitchClass: 9 }
      ]);
      expect(getHarmonicKeysByCamelotPositionAndMode(9, 0)).toEqual([
        { camelotPosition: 9, mode: 0, name: "Em", pitchClass: 4 },
        { camelotPosition: 8, mode: 0, name: "Am", pitchClass: 9 },
        { camelotPosition: 10, mode: 0, name: "Bm", pitchClass: 11 },
        { camelotPosition: 9, mode: 1, name: "G", pitchClass: 7 }
      ]);
    });
  });
  describe("getHarmonicKeysByCamelotPositionAndMode", function() {
    it("should return the key details from the camelot position and mode", function() {
      const getHarmonicKeysByName = getHarmonicKeys.getHarmonicKeysByName;
      expect(getHarmonicKeysByName("C")).toEqual([
        { camelotPosition: 8, mode: 1, name: "C", pitchClass: 0 },
        { camelotPosition: 7, mode: 1, name: "F", pitchClass: 5 },
        { camelotPosition: 9, mode: 1, name: "G", pitchClass: 7 },
        { camelotPosition: 8, mode: 0, name: "Am", pitchClass: 9 }
      ]);
      expect(getHarmonicKeysByName("Em")).toEqual([
        { camelotPosition: 9, mode: 0, name: "Em", pitchClass: 4 },
        { camelotPosition: 8, mode: 0, name: "Am", pitchClass: 9 },
        { camelotPosition: 10, mode: 0, name: "Bm", pitchClass: 11 },
        { camelotPosition: 9, mode: 1, name: "G", pitchClass: 7 }
      ]);
    });
  });
});
