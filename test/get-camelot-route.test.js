const camelotRoute = require("../src/get-camelot-route");

describe("getCamelotRoute", function() {
  const getCamelotRoute = camelotRoute.getCamelotRoute;
  describe("by pitchclass and mode", function() {
    it("should return the route from start key to end key", function() {
      const startKey = {
        pitchClass: 5,
        mode: 1
      };
      const targetKey = {
        pitchClass: 9,
        mode: 1
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([
        { name: "C", pitchClass: 0, mode: 1, camelotPosition: 8 },
        { name: "G", pitchClass: 7, mode: 1, camelotPosition: 9 },
        { name: "D", pitchClass: 2, mode: 1, camelotPosition: 10 }
      ]);
    });

    it("should wrap round the camelot wheel clockwise", function() {
      const startKey = {
        pitchClass: 4,
        mode: 1
      };
      const targetKey = {
        pitchClass: 6,
        mode: 1
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([
        { name: "B", pitchClass: 11, mode: 1, camelotPosition: 1 }
      ]);
    });

    it("should return empty array if the same key", function() {
      const startKey = {
        pitchClass: 3,
        mode: 1
      };
      const targetKey = {
        pitchClass: 3,
        mode: 1
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([]);
    });
    it("should return empty array if target key is immediately after startKey", function() {
      const startKey = {
        pitchClass: 3,
        mode: 1
      };
      const targetKey = {
        pitchClass: 10,
        mode: 1
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([]);
    });

    it("should return the route from start key to end key anticlockwise if closer", function() {
      const startKey = {
        pitchClass: 9,
        mode: 1
      };
      const targetKey = {
        pitchClass: 0,
        mode: 1
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([
        { name: "D", pitchClass: 2, mode: 1, camelotPosition: 10 },
        { name: "G", pitchClass: 7, mode: 1, camelotPosition: 9 }
      ]);
    });

    it("should wrap round the camelot wheel anticlockwise", function() {
      const startKey = {
        pitchClass: 6,
        mode: 1
      };
      const targetKey = {
        pitchClass: 9,
        mode: 1
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([
        { name: "B", pitchClass: 11, mode: 1, camelotPosition: 1 },
        { name: "E", pitchClass: 4, mode: 1, camelotPosition: 12 }
      ]);
    });

    it("should return empty array if start key is immediately after targetKey", function() {
      const startKey = {
        pitchClass: 10,
        mode: 1
      };

      const targetKey = {
        pitchClass: 3,
        mode: 1
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([]);
    });

    it("should go round to the camelot number if in a different mode", function() {
      const startKey = {
        pitchClass: 2,
        mode: 1
      };

      const targetKey = {
        pitchClass: 3,
        mode: 0
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([
        { name: "A", pitchClass: 9, mode: 1, camelotPosition: 11 },
        { name: "E", pitchClass: 4, mode: 1, camelotPosition: 12 },
        { name: "B", pitchClass: 11, mode: 1, camelotPosition: 1 },
        { name: "Gb", pitchClass: 6, mode: 1, camelotPosition: 2 }
      ]);
    });

    it("should go round the camelot wheel anticlockwise in a different mode", function() {
      const startKey = { pitchClass: 3, mode: 0 };

      const targetKey = {
        pitchClass: 2,
        mode: 1
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([
        { name: "Abm", pitchClass: 8, mode: 0, camelotPosition: 1 },
        { name: "Dbm", pitchClass: 1, mode: 0, camelotPosition: 12 },
        { name: "Gbm", pitchClass: 6, mode: 0, camelotPosition: 11 },
        { name: "Bm", pitchClass: 11, mode: 0, camelotPosition: 10 }
      ]);
    });
  });
  describe("by name", function() {
    it("should return the route from start key to end key", function() {
      const startKey = {
        name: "F"
      };
      const targetKey = {
        name: "A"
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([
        { name: "C", pitchClass: 0, mode: 1, camelotPosition: 8 },
        { name: "G", pitchClass: 7, mode: 1, camelotPosition: 9 },
        { name: "D", pitchClass: 2, mode: 1, camelotPosition: 10 }
      ]);
    });

    it("should wrap round the camelot wheel clockwise", function() {
      const startKey = {
        name: "E"
      };
      const targetKey = {
        name: "Gb"
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([
        { name: "B", pitchClass: 11, mode: 1, camelotPosition: 1 }
      ]);
    });

    it("should return empty array if the same key", function() {
      const startKey = {
        name: "A"
      };
      const targetKey = {
        name: "A"
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([]);
    });
    it("should return empty array if target key is immediately after startKey", function() {
      const startKey = {
        name: "Eb"
      };
      const targetKey = {
        name: "Bb"
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([]);
    });

    it("should return the route from start key to end key anticlockwise if closer", function() {
      const startKey = {
        name: "A"
      };
      const targetKey = {
        name: "C"
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([
        { name: "D", pitchClass: 2, mode: 1, camelotPosition: 10 },
        { name: "G", pitchClass: 7, mode: 1, camelotPosition: 9 }
      ]);
    });

    it("should wrap round the camelot wheel anticlockwise", function() {
      const startKey = {
        name: "Gb"
      };
      const targetKey = {
        name: "A"
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([
        { name: "B", pitchClass: 11, mode: 1, camelotPosition: 1 },
        { name: "E", pitchClass: 4, mode: 1, camelotPosition: 12 }
      ]);
    });

    it("should return empty array if start key is immediately after targetKey", function() {
      const startKey = {
        name: "Bb"
      };

      const targetKey = {
        name: "Eb"
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([]);
    });

    it("should go round to the camelot number if in a different mode", function() {
      const startKey = {
        name: "D"
      };

      const targetKey = {
        name: "Ebm"
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([
        { name: "A", pitchClass: 9, mode: 1, camelotPosition: 11 },
        { name: "E", pitchClass: 4, mode: 1, camelotPosition: 12 },
        { name: "B", pitchClass: 11, mode: 1, camelotPosition: 1 },
        { name: "Gb", pitchClass: 6, mode: 1, camelotPosition: 2 }
      ]);
    });

    it("should go round the camelot wheel anticlockwise in a different mode", function() {
      const startKey = { name: "Ebm" };

      const targetKey = {
        name: "D"
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([
        { name: "Abm", pitchClass: 8, mode: 0, camelotPosition: 1 },
        { name: "Dbm", pitchClass: 1, mode: 0, camelotPosition: 12 },
        { name: "Gbm", pitchClass: 6, mode: 0, camelotPosition: 11 },
        { name: "Bm", pitchClass: 11, mode: 0, camelotPosition: 10 }
      ]);
    });
  });
  describe("by camelot position and mode", function() {
    it("should return the route from start key to end key", function() {
      const startKey = {
        mode: 1,
        camelotPosition: 7
      };
      const targetKey = {
        mode: 1,
        camelotPosition: 11
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([
        { name: "C", pitchClass: 0, mode: 1, camelotPosition: 8 },
        { name: "G", pitchClass: 7, mode: 1, camelotPosition: 9 },
        { name: "D", pitchClass: 2, mode: 1, camelotPosition: 10 }
      ]);
    });

    it("should wrap round the camelot wheel clockwise", function() {
      const startKey = { mode: 1, camelotPosition: 12 };
      const targetKey = { mode: 1, camelotPosition: 2 };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([
        { name: "B", pitchClass: 11, mode: 1, camelotPosition: 1 }
      ]);
    });

    it("should return empty array if the same key", function() {
      const startKey = {
        mode: 1,
        camelotPosition: 11
      };
      const targetKey = {
        mode: 1,
        camelotPosition: 11
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([]);
    });
    it("should return empty array if target key is immediately after startKey", function() {
      const startKey = {
        mode: 1,
        camelotPosition: 5
      };
      const targetKey = {
        mode: 1,
        camelotPosition: 6
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([]);
    });

    it("should return the route from start key to end key anticlockwise if closer", function() {
      const startKey = {
        mode: 1,
        camelotPosition: 11
      };
      const targetKey = {
        mode: 1,
        camelotPosition: 8
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([
        { name: "D", pitchClass: 2, mode: 1, camelotPosition: 10 },
        { name: "G", pitchClass: 7, mode: 1, camelotPosition: 9 }
      ]);
    });

    it("should wrap round the camelot wheel anticlockwise", function() {
      const startKey = {
        mode: 1,
        camelotPosition: 2
      };
      const targetKey = {
        mode: 1,
        camelotPosition: 11
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([
        { name: "B", pitchClass: 11, mode: 1, camelotPosition: 1 },
        { name: "E", pitchClass: 4, mode: 1, camelotPosition: 12 }
      ]);
    });

    it("should return empty array if start key is immediately after targetKey", function() {
      const startKey = {
        mode: 1,
        camelotPosition: 6
      };

      const targetKey = {
        mode: 1,
        camelotPosition: 5
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([]);
    });

    it("should go round to the camelot number if in a different mode", function() {
      const startKey = {
        mode: 1,
        camelotPosition: 10
      };

      const targetKey = {
        mode: 0,
        camelotPosition: 2
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([
        { name: "A", pitchClass: 9, mode: 1, camelotPosition: 11 },
        { name: "E", pitchClass: 4, mode: 1, camelotPosition: 12 },
        { name: "B", pitchClass: 11, mode: 1, camelotPosition: 1 },
        { name: "Gb", pitchClass: 6, mode: 1, camelotPosition: 2 }
      ]);
    });

    it("should go round the camelot wheel anticlockwise in a different mode", function() {
      const startKey = { mode: 0, camelotPosition: 2 };

      const targetKey = {
        mode: 1,
        camelotPosition: 10
      };

      expect(getCamelotRoute(startKey, targetKey)).toEqual([
        { name: "Abm", pitchClass: 8, mode: 0, camelotPosition: 1 },
        { name: "Dbm", pitchClass: 1, mode: 0, camelotPosition: 12 },
        { name: "Gbm", pitchClass: 6, mode: 0, camelotPosition: 11 },
        { name: "Bm", pitchClass: 11, mode: 0, camelotPosition: 10 }
      ]);
    });
  });
});
