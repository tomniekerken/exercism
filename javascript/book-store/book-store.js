//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const existsInArray = (arr, item) => {
  return arr.find((val) => val === item);
};

const hasKeyWithLength = (obj, length) => {
  let hasLength = false;

  for (const key in obj) {
    if (obj[key].length === length) {
      hasLength = true;
    }
  }

  return hasLength;
};

const getKeyWithLength = (obj, length) => {
  let hasLength = false;

  for (const key in obj) {
    if (obj[key].length === length) {
      hasLength = true;
    }
  }

  return hasLength;
};

const cost = (books) => {
  let price = 0;
  const bookCost = 800;

  const sortedBooks = [...books].sort((a, b) => a - b);

  const discountGroups = {};

  let dgIndex = 0;

  sortedBooks.map((book, i) => {
    if (i === 0) {
      discountGroups[dgIndex] = [book];
    }

    if (i !== 0) {
      do {
        // Discount group doesnt exist yet, create new and insert book
        if (!discountGroups[dgIndex]) {
          discountGroups[dgIndex] = [book];
          break;
        }

        if (!existsInArray(discountGroups[dgIndex], book)) {
          // Book is not in array && length is < 4 -> insert
          if (discountGroups[dgIndex].length < 4) {
            discountGroups[dgIndex] = [...discountGroups[dgIndex], book];
            break;
          } else {
            if (sortedBooks.length === i + 1) {
              // use any valid group of 4 where it does not exist
              let discountGroupKey = null;

              for (const key in discountGroups) {
                if (!existsInArray(discountGroups[key], book)) {
                  discountGroupKey = key;
                }
              }

              if (discountGroupKey) {
                discountGroups[discountGroupKey] = [
                  ...discountGroups[discountGroupKey],
                  book,
                ];
                break;
              }
            }
          }

          /* if (discountGroups[dgIndex].length === 4) {
            // Sind wir an letzter Position &&
            // Existiert ein Array mit length 3 &&
            // Hat dieser Array dieses Buch noch nicht

            if (discountGroups.length === i + 1) {
              for (const key in discountGroups) {
                if (discountGroups[key].length === 3) {
                  if (!discountGroups[key].find((val) => val === book)) {
                    discountGroups[dgIndex] = [
                      ...discountGroups[dgIndex],
                      book,
                    ];
                    break;
                  }
                }
              }
            }
          } */
        }

        dgIndex += 1;
      } while (true);
    }

    dgIndex = 0;
  });

  for (const key in discountGroups) {
    switch (discountGroups[key].length) {
      case 1:
        price += bookCost;
        break;
      case 2:
        price += bookCost * 0.95 * 2;
        break;
      case 3:
        price += bookCost * 0.9 * 3;
        break;
      case 4:
        price += bookCost * 0.8 * 4;
        break;
      case 4:
        price += bookCost * 0.8 * 4;
        break;
      case 5:
        price += bookCost * 0.75 * 5;
        break;
    }
  }

  console.log(discountGroups);

  return price;
};

/* console.log(
  "Expected: 10240",
  cost([1, 1, 2, 2, 3, 3, 4, 5, 1, 1, 2, 2, 3, 3, 4, 5])
);

console.log("Expected: 8120", cost([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3]));

console.log("Expected: 7520", cost([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 1, 2])); */
console.log(cost([1, 1, 2, 3, 4, 4, 5, 5]));
