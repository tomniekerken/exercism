//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
  let steps = 0;

  if (number <= 0) {
    throw new Error("Only positive numbers are allowed");
  }

  if (number === 1) {
    return steps;
  }

  for (let i = 0; number !== 1; i++) {
    if (number % 2 === 0) {
      number = number / 2;
    } else {
      number = 3 * number + 1;
    }

    steps += 1;
  }

  return steps;
};
