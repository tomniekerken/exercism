//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isEvenlyDivisable = (n) => {
  return n - Math.floor(n) === 0;
};

export const isLeap = (year) => {
  return (
    isEvenlyDivisable(year / 4) &&
    (!isEvenlyDivisable(year / 100) || isEvenlyDivisable(year / 400))
  );
};
