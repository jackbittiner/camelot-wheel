const { getHarmonicKeys } = require("../src/get-harmonic-keys");

describe("getHarmonicKeys", function() {
  describe("by pitch class and mode", function() {
    it("should return the harmonic key details from the pitch class and mode", function() {
      expect(getHarmonicKeys({ pitchClass: 0, mode: 1 })).toEqual([
        { camelotPosition: 8, mode: 1, name: "C", pitchClass: 0 },
        { camelotPosition: 7, mode: 1, name: "F", pitchClass: 5 },
        { camelotPosition: 9, mode: 1, name: "G", pitchClass: 7 },
        { camelotPosition: 8, mode: 0, name: "Am", pitchClass: 9 }
      ]);
      expect(getHarmonicKeys({ pitchClass: 4, mode: 0 })).toEqual([
        { camelotPosition: 9, mode: 0, name: "Em", pitchClass: 4 },
        { camelotPosition: 8, mode: 0, name: "Am", pitchClass: 9 },
        { camelotPosition: 10, mode: 0, name: "Bm", pitchClass: 11 },
        { camelotPosition: 9, mode: 1, name: "G", pitchClass: 7 }
      ]);
    });
  });
  describe("by camelot position", function() {
    it("should return the harmonic key details from the pitch class and mode", function() {
      expect(getHarmonicKeys({ camelotPosition: 8, mode: 1 })).toEqual([
        { camelotPosition: 8, mode: 1, name: "C", pitchClass: 0 },
        { camelotPosition: 7, mode: 1, name: "F", pitchClass: 5 },
        { camelotPosition: 9, mode: 1, name: "G", pitchClass: 7 },
        { camelotPosition: 8, mode: 0, name: "Am", pitchClass: 9 }
      ]);
      expect(getHarmonicKeys({ camelotPosition: 9, mode: 0 })).toEqual([
        { camelotPosition: 9, mode: 0, name: "Em", pitchClass: 4 },
        { camelotPosition: 8, mode: 0, name: "Am", pitchClass: 9 },
        { camelotPosition: 10, mode: 0, name: "Bm", pitchClass: 11 },
        { camelotPosition: 9, mode: 1, name: "G", pitchClass: 7 }
      ]);
    });
  });
  describe("by name", function() {
    it("should return the key details from the camelot position and mode", function() {
      expect(getHarmonicKeys({ name: "C" })).toEqual([
        { camelotPosition: 8, mode: 1, name: "C", pitchClass: 0 },
        { camelotPosition: 7, mode: 1, name: "F", pitchClass: 5 },
        { camelotPosition: 9, mode: 1, name: "G", pitchClass: 7 },
        { camelotPosition: 8, mode: 0, name: "Am", pitchClass: 9 }
      ]);
      expect(getHarmonicKeys({ name: "Em" })).toEqual([
        { camelotPosition: 9, mode: 0, name: "Em", pitchClass: 4 },
        { camelotPosition: 8, mode: 0, name: "Am", pitchClass: 9 },
        { camelotPosition: 10, mode: 0, name: "Bm", pitchClass: 11 },
        { camelotPosition: 9, mode: 1, name: "G", pitchClass: 7 }
      ]);
    });
  });
});
