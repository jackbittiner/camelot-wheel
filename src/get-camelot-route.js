const keyModule = require("./get-key");
const getKey = keyModule.getKey;

const getCamelotRoute = (startKey, targetKey) => {
  const beginningPosition = getKey(startKey);

  const endPosition = getKey(targetKey);

  if (withinReachOfTarget(beginningPosition, endPosition)) return [];

  const shouldGoClockwise = goClockwise(
    beginningPosition.camelotPosition,
    endPosition.camelotPosition
  );

  let nextPosition = changeCamelotNumber(
    beginningPosition.camelotPosition,
    shouldGoClockwise
  );

  let nextKey = getKey({
    camelotPosition: nextPosition,
    mode: beginningPosition.mode
  });

  let keysOnRoute = [];

  while (!withinReachOfTarget(nextKey, endPosition)) {
    keysOnRoute.push(nextKey);
    nextPosition = changeCamelotNumber(nextPosition, shouldGoClockwise);
    nextKey = getKey({
      camelotPosition: nextPosition,
      mode: nextKey.mode
    });
  }

  keysOnRoute.push(nextKey);
  return keysOnRoute;
};

const withinReachOfTargetSameMode = (beginningPosition, endPosition) => {
  return (
    beginningPosition.pitchClass === endPosition.pitchClass ||
    beginningPosition.camelotPosition === endPosition.camelotPosition + 1 ||
    beginningPosition.camelotPosition === endPosition.camelotPosition - 1
  );
};

const withinReachOfTargetDifferentMode = (beginningPosition, endPosition) => {
  return beginningPosition.camelotPosition === endPosition.camelotPosition;
};

const withinReachOfTarget = (beginningPosition, endPosition) => {
  if (beginningPosition.mode === endPosition.mode) {
    return withinReachOfTargetSameMode(beginningPosition, endPosition);
  }

  return withinReachOfTargetDifferentMode(beginningPosition, endPosition);
};

const changeCamelotNumber = (number, isClockwise) => {
  if (isClockwise) {
    return number === 12 ? 1 : number + 1;
  } else {
    return number === 1 ? 12 : number - 1;
  }
};

const goClockwise = (startPosition, endPosition) => {
  if (startPosition <= endPosition) {
    return startPosition + 6 >= endPosition;
  }

  if (startPosition >= endPosition) {
    return startPosition - 6 >= endPosition;
  }
};

module.exports = {
  getCamelotRoute
};
