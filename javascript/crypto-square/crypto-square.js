//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function removePunctuation(text) {
  const characters = text.split("");
  const alphanumericRegex = /[a-z0-9]/i;

  const alphanumerics = characters.filter((char) =>
    alphanumericRegex.test(char)
  );

  return alphanumerics.join("");
}

function getColumnsAndRowsFrom(n) {
  let columns = 1;
  let rows = 1;

  while (columns * rows < n) {
    columns += 1;

    if (columns * rows < n) {
      rows += 1;
    }
  }

  return [columns, rows];
}

export class Crypto {
  constructor(text) {
    this.text = text;
  }

  get ciphertext() {
    const cleanedText = removePunctuation(this.text.trim().toLowerCase());

    const [columns, rows] = getColumnsAndRowsFrom(cleanedText.length);

    const cleanedTextArr = cleanedText.split("");

    let textByColumns = {};

    let i = 1;

    cleanedTextArr.map((char) => {
      if (!textByColumns[i]) {
        textByColumns[i] = [char];
      } else {
        textByColumns[i] = [...textByColumns[i], char];
      }

      if (i % columns === 0) {
        i = 1;
      } else {
        i += 1;
      }
    });

    let ciphedText = "";

    let j = 0;

    for (const key in textByColumns) {
      while (textByColumns[key].length < rows) {
        textByColumns[key] = [...textByColumns[key], " "];
      }

      textByColumns[key].map((char, index) => {
        if (index % rows === 0 && j !== 0) {
          ciphedText = ciphedText + " ";
        }
        ciphedText += char;
      });

      j += 1;
    }

    return ciphedText;
  }
}
