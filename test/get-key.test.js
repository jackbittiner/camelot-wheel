const getKey = require('../src/get-key');

describe('getKey', function() {
  describe('getKeyByPitchClassAndMode', function() {
    it('should return the key details from the pitch class and mode', function() {
      const getKeyByPitchClassAndMode = getKey.getKeyByPitchClassAndMode;
      expect(getKeyByPitchClassAndMode(0, 1)).toEqual({
        camelotPosition: 8,
        mode: 1,
        name: 'C',
        pitchClass: 0
      });
      expect(getKeyByPitchClassAndMode(4, 0)).toEqual({
        camelotPosition: 9,
        mode: 0,
        name: 'Em',
        pitchClass: 4
      });
    });
  });
  describe('getKeyByCamelotPositionAndMode', function() {
    it('should return the key details from the pitch class and mode', function() {
      const getKeyByCamelotPositionAndMode =
        getKey.getKeyByCamelotPositionAndMode;
      expect(getKeyByCamelotPositionAndMode(1, 1)).toEqual({
        name: 'B',
        pitchClass: 11,
        mode: 1,
        camelotPosition: 1
      });
      expect(getKeyByCamelotPositionAndMode(4, 0)).toEqual({
        name: 'Fm',
        pitchClass: 5,
        mode: 0,
        camelotPosition: 4
      });
    });
  });

  describe('getKeyByName', function() {
    it('should return the key details when given a keys name', function() {
      const getKeyByName = getKey.getKeyByName;
      expect(getKeyByName('C')).toEqual({
        camelotPosition: 8,
        mode: 1,
        name: 'C',
        pitchClass: 0
      });
      expect(getKeyByName('Em')).toEqual({
        camelotPosition: 9,
        mode: 0,
        name: 'Em',
        pitchClass: 4
      });
    });
  });
});
