//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (letters) => {
  const transformedLetters = {};

  for (const key in letters) {
    letters[key].map((letter) => {
      transformedLetters[letter.toLowerCase()] = Number(key);
    });
  }

  return transformedLetters;
};
