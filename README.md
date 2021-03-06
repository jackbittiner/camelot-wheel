# Camelot-Wheel ![npm downloads](https://img.shields.io/npm/dm/camelot-wheel.svg) [![npm version](https://badge.fury.io/js/camelot-wheel.svg)](https://badge.fury.io/js/camelot-wheel) [![Build Status](https://travis-ci.org/jackbittiner/camelot-wheel.svg?branch=master)](https://travis-ci.org/jackbittiner/camelot-wheel)

A package to allow for easy use of logic related the Circle of Fifths or 'Camelot Wheel'.

The Circle of Fifths shows the relationships among the twelve tones of the Chromatic Scale, their corresponding key signatures and the associated Major and Minor keys.

In lay terms: The Circle of Fifths is a music theory diagram for finding the key of a song, transposing songs to different keys, composing new songs and understanding key signatures, scales, and modes.

### Usage

#### Install

`npm i camelot-wheel`

### The Camelot Wheel

![camelot-wheel](./assets/camelot-wheel.jpg)

Now what is going on here?

- Each number represents a key as stated above.
- The outside of the wheel represents the Major mode and the inside of the wheel represents the Minor mode.
- A track's key is considered compatible with another if it's positioned next to it or opposite it.
- For example the key of C (8B) is compatible with F (7B), G (9B) and Am (8A)

# API

- getKey
- getHarmonicKeys
- getCamelotRoute

## getKey(args)

This function will return all details about the key in question. You can pass it a key name, or the camelot position (with mode) or the pitch class (with mode)

```javascript
import { getKey } from "camelot-wheel";

getKey({ name: "B" }); // ==> { name: "B", pitchClass: 11, mode: 1, camelotPosition: 1 }
```

```javascript
import { getKey } from "camelot-wheel";

getKey({ pitchClass: 0, mode: 1 }); // ==> { name: "C", pitchClass: 0, mode: 1, camelotPosition: 8 }
```

```javascript
import { getKey } from "camelot-wheel";

getKey({ camelotPosition: 8, mode: 1 }); // => { name: "C", pitchClass: 0, mode: 1, camelotPosition: 8 }
```

## getHarmonicKeys

```javascript
import { getHarmonicKeys } from "camelot-wheel";

getHarmonicKeys({ pitchClass: 0, mode: 1 });
// =>    [
//         { camelotPosition: 8, mode: 1, name: "C", pitchClass: 0 },
//         { camelotPosition: 7, mode: 1, name: "F", pitchClass: 5 },
//         { camelotPosition: 9, mode: 1, name: "G", pitchClass: 7 },
//         { camelotPosition: 8, mode: 0, name: "Am", pitchClass: 9 }
//       ]
```

```javascript
import { getHarmonicKeys } from "camelot-wheel";

getHarmonicKeys({ name: "C" });
// =>    [
//         { camelotPosition: 8, mode: 1, name: "C", pitchClass: 0 },
//         { camelotPosition: 7, mode: 1, name: "F", pitchClass: 5 },
//         { camelotPosition: 9, mode: 1, name: "G", pitchClass: 7 },
//         { camelotPosition: 8, mode: 0, name: "Am", pitchClass: 9 }
//       ]
```

```javascript
import { getHarmonicKeys } from "camelot-wheel";

getHarmonicKeys({ camelotPosition: 8, mode: 1 });
// =>    [
//         { camelotPosition: 8, mode: 1, name: "C", pitchClass: 0 },
//         { camelotPosition: 7, mode: 1, name: "F", pitchClass: 5 },
//         { camelotPosition: 9, mode: 1, name: "G", pitchClass: 7 },
//         { camelotPosition: 8, mode: 0, name: "Am", pitchClass: 9 }
//       ]
```

## getCamelotRoute(startKey, targetKey)

This function will navigate you from the startKey to the endKey as quickly as possible.

```javascript
import { getCamelotRoute } from "camelot-wheel";

getCamelotRoute({ pitchClass: 5, mode: 1 }, { pitchClass: 9, mode: 1 });
// => [
//      { name: "C", pitchClass: 0, mode: 1, camelotPosition: 8 },
//      { name: "G", pitchClass: 7, mode: 1, camelotPosition: 9 },
//      { name: "D", pitchClass: 2, mode: 1, camelotPosition: 10 }
//    ]
```

```javascript
import { getCamelotRoute } from "camelot-wheel";

getCamelotRoute(
  { camelotPosition: 7, mode: 1 },
  { camelotPosition: 11, mode: 1 }
);
// => [
//      { name: "C", pitchClass: 0, mode: 1, camelotPosition: 8 },
//      { name: "G", pitchClass: 7, mode: 1, camelotPosition: 9 },
//      { name: "D", pitchClass: 2, mode: 1, camelotPosition: 10 }
//    ]
```

```javascript
import { getCamelotRoute } from "camelot-wheel";

getCamelotRoute({ name: "F" }, { name: "A" });
// => [
//      { name: "C", pitchClass: 0, mode: 1, camelotPosition: 8 },
//      { name: "G", pitchClass: 7, mode: 1, camelotPosition: 9 },
//      { name: "D", pitchClass: 2, mode: 1, camelotPosition: 10 }
//    ]
```

```javascript
import { getCamelotRoute } from "camelot-wheel";

getCamelotRoute({ name: "F" }, { camelotPosition: 11, mode: 1 });
// => [
//      { name: "C", pitchClass: 0, mode: 1, camelotPosition: 8 },
//      { name: "G", pitchClass: 7, mode: 1, camelotPosition: 9 },
//      { name: "D", pitchClass: 2, mode: 1, camelotPosition: 10 }
//    ]
```

### Run the Tests

```
npm test
```
