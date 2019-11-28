const keyModule = require("../src/get-key");
const getKey = keyModule.getKey;

describe("getKey", function() {
  describe("By Pitch Class And Mode", function() {
    it("should return the key details from the pitch class and mode", function() {
      expect(getKey({ pitchClass: 0, mode: 1 })).toEqual({
        camelotPosition: 8,
        mode: 1,
        name: "C",
        pitchClass: 0
      });
      expect(getKey({ pitchClass: 4, mode: 0 })).toEqual({
        camelotPosition: 9,
        mode: 0,
        name: "Em",
        pitchClass: 4
      });
    });
  });
  describe("By Camelot Position And Mode", function() {
    it("should return the key details from the camelot position and mode", function() {
      expect(getKey({ camelotPosition: 1, mode: 1 })).toEqual({
        name: "B",
        pitchClass: 11,
        mode: 1,
        camelotPosition: 1
      });
      expect(getKey({ camelotPosition: 4, mode: 0 })).toEqual({
        name: "Fm",
        pitchClass: 5,
        mode: 0,
        camelotPosition: 4
      });
    });
  });

  describe("get Key By Name", function() {
    it("should return the key details when given a keys name", function() {
      expect(getKey({ name: "C" })).toEqual({
        camelotPosition: 8,
        mode: 1,
        name: "C",
        pitchClass: 0
      });
      expect(getKey({ name: "Em" })).toEqual({
        camelotPosition: 9,
        mode: 0,
        name: "Em",
        pitchClass: 4
      });
    });
  });
});
