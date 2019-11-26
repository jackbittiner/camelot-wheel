//Major Keys

const C = { name: "C", pitchClass: 0, mode: 1, camelotPosition: 8 };
const Db = { name: "Db", pitchClass: 1, mode: 1, camelotPosition: 3 };
const D = { name: "D", pitchClass: 2, mode: 1, camelotPosition: 10 };
const Eb = { name: "Eb", pitchClass: 3, mode: 1, camelotPosition: 5 };
const E = { name: "E", pitchClass: 4, mode: 1, camelotPosition: 12 };
const F = { name: "F", pitchClass: 5, mode: 1, camelotPosition: 7 };
const Gb = { name: "Gb", pitchClass: 6, mode: 1, camelotPosition: 2 };
const G = { name: "G", pitchClass: 7, mode: 1, camelotPosition: 9 };
const Ab = { name: "Ab", pitchClass: 8, mode: 1, camelotPosition: 4 };
const A = { name: "A", pitchClass: 9, mode: 1, camelotPosition: 11 };
const Bb = { name: "Bb", pitchClass: 10, mode: 1, camelotPosition: 6 };
const B = { name: "B", pitchClass: 11, mode: 1, camelotPosition: 1 };

//Minor pitchClasss

const Cm = { name: "Cm", pitchClass: 0, mode: 0, camelotPosition: 5 };
const Dbm = { name: "Dbm", pitchClass: 1, mode: 0, camelotPosition: 12 };
const Dm = { name: "Dm", pitchClass: 2, mode: 0, camelotPosition: 7 };
const Ebm = { name: "Ebm", pitchClass: 3, mode: 0, camelotPosition: 2 };
const Em = { name: "Em", pitchClass: 4, mode: 0, camelotPosition: 9 };
const Fm = { name: "Fm", pitchClass: 5, mode: 0, camelotPosition: 4 };
const Gbm = { name: "Gbm", pitchClass: 6, mode: 0, camelotPosition: 11 };
const Gm = { name: "Gm", pitchClass: 7, mode: 0, camelotPosition: 6 };
const Abm = { name: "Abm", pitchClass: 8, mode: 0, camelotPosition: 1 };
const Am = { name: "Am", pitchClass: 9, mode: 0, camelotPosition: 8 };
const Bbm = { name: "Bbm", pitchClass: 10, mode: 0, camelotPosition: 3 };
const Bm = { name: "Bm", pitchClass: 11, mode: 0, camelotPosition: 10 };

const allKeys = [
  C,
  Db,
  D,
  Eb,
  E,
  F,
  Gb,
  G,
  Ab,
  A,
  Bb,
  B,
  Cm,
  Dbm,
  Dm,
  Ebm,
  Em,
  Fm,
  Gbm,
  Gm,
  Abm,
  Am,
  Bbm,
  Bm
];

const harmonicKeys = {
  Ab: [Ab, Db, Eb, Fm],
  A: [A, D, E, Gbm],
  Bb: [Bb, Eb, F, Gm],
  B: [B, E, Gb, Abm],
  C: [C, F, G, Am],
  Db: [Db, Gb, Ab, Bbm],
  D: [D, G, A, Bm],
  Eb: [Eb, Ab, Bb, Cm],
  E: [E, A, B, Dbm],
  F: [F, Bb, C, Dm],
  Gb: [Gb, B, Db, Ebm],
  G: [G, C, D, Em],

  Abm: [Abm, Dbm, Ebm, B],
  Am: [Am, Dm, Em, C],
  Bbm: [Bbm, Ebm, Fm, Db],
  Bm: [Bm, Em, Gbm, D],
  Cm: [Cm, Fm, Gm, Eb],
  Dbm: [Dbm, Gbm, Abm, E],
  Dm: [Dm, Gm, Am, F],
  Ebm: [Ebm, Abm, Bbm, Gb],
  Em: [Em, Am, Bm, G],
  Fm: [Fm, Bbm, Cm, Ab],
  Gbm: [Gbm, Bm, Dbm, A],
  Gm: [Gm, Cm, Dm, Bb]
};

module.exports = {
  allKeys,
  harmonicKeys
};
