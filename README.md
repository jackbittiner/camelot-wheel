# Camelot-Wheel [![npm version](https://badge.fury.io/js/camelot-wheel.svg)](https://badge.fury.io/js/camelot-wheel)

A package to allow for easy use of logic related the Circle of Fifths or 'Camelot Wheel'.

The Circle of Fifths shows the relationships among the twelve tones of the Chromatic Scale, their corresponding key signatures and the associated Major and Minor keys.

In lay terms: The Circle of Fifths is a music theory diagram for finding the key of a song, transposing songs to different keys, composing new songs and understanding key signatures, scales, and modes.

### Usage

#### Install

`npm i camelot-wheel`

### The Camelot Wheel

![camelot-wheel](./assets/camelotwheel.png)

Now what is going on here?

- Each number represents a key as stated above.
- The outside of the wheel represents the Major mode and the inside of the wheel represents the Minor mode.
- A track's key is considered compatible with another if it's positioned next to it or opposite it.
- For example the key of C (1d) is compatible with F (12d), G (2d) and Am (1m)

### API

- getKeyByName
- getKeyByPitchClassAndMode
- getKeyByCamelotPositionAndMode
- getHarmonicKeysByPitchClassAndMode
- getHarmonicKeysByName
- getCamelotRoute

It's easy to use Camelot-Wheel APIs to navigate the circle of fifths, get keys by position in the camelot wheel, get keys by pitch class and mode, get harmonically related keys, and get a suggested route through harmonically related keys, from key A to key B.

##### getKeyByName(name)

```javascript
import { getKeyByName } from 'camelot-wheel';

getKeyByName('B'); // ==> { name: "B", pitchClass: 11, mode: 1, camelotPosition: 1 }
getKeyByName('Fm'); // ==> { name: "Fm", pitchClass: 5, mode: 0, camelotPosition: 4 }
```

##### getKeyByPitchClassAndMode(pitchClass, mode)

```javascript
import { getKgetKeyByPitchClassAndModeeyByName } from 'camelot-wheel';

getKeyByPitchClassAndMode(0, 1); // ==> { name: "C", pitchClass: 0, mode: 1, camelotPosition: 8 }
getKeyByPitchClassAndMode(0, 0); // ==> { name: "Cm", pitchClass: 0, mode: 0, camelotPosition: 5 }
```

##### getKeyByCamelotPositionAndMode(camelotPosition, mode)

```javascript
import { getKeyByCamelotPositionAndMode } from 'camelot-wheel';

getKeyByCamelotPositionAndMode(8, 1); // => { name: "C", pitchClass: 0, mode: 1, camelotPosition: 8 }
```

##### getHarmonicKeysByPitchClassAndMode(pitchClass, mode)

```javascript
import { getHarmonicKeysByPitchClassAndMode } from 'camelot-wheel';

getHarmonicKeysByPitchClassAndMode(0, 1);
// =>    [
//         { camelotPosition: 8, mode: 1, name: "C", pitchClass: 0 },
//         { camelotPosition: 7, mode: 1, name: "F", pitchClass: 5 },
//         { camelotPosition: 9, mode: 1, name: "G", pitchClass: 7 },
//         { camelotPosition: 8, mode: 0, name: "Am", pitchClass: 9 }
//       ]
```

##### getHarmonicKeysByName(name)

```javascript
import { getHarmonicKeysByName } from 'camelot-wheel';

getHarmonicKeysByName('C');
// =>    [
//         { camelotPosition: 8, mode: 1, name: "C", pitchClass: 0 },
//         { camelotPosition: 7, mode: 1, name: "F", pitchClass: 5 },
//         { camelotPosition: 9, mode: 1, name: "G", pitchClass: 7 },
//         { camelotPosition: 8, mode: 0, name: "Am", pitchClass: 9 }
//       ]
```

##### getCamelotRoute(startKey, targetKey)

```javascript
import { getCamelotRoute } from 'camelot-wheel';

getCamelotRoute({ pitchClass: 5, mode: 1 }, { pitchClass: 9, mode: 1 });
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
