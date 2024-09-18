//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Input: matrix = "1"
// Get Rows: rows[0] = 1

export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  get rows() {
    let rows = this.matrix.split("\n");

    const rowEntries = rows.map((row) => {
      const numbersInRowAsString = row.split(" ").map(Number);

      const numbersInRow = numbersInRowAsString.map((numberInRow) => {
        return +numberInRow;
      });

      return numbersInRow;
    });

    return rowEntries;
  }

  get columns() {
    let columns = [];

    for (let i = 0; i < this.rows[0].length; i++) {
      columns.push([]);

      this.rows.map((row) => {
        columns[i].push(row[i]);
      });
    }

    return columns;
  }
}
