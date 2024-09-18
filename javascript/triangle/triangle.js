//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    [this.a, this.b, this.c] = sides;
  }

  get isValidTriangle() {
    if (
      this.a + this.b < this.c ||
      this.b + this.c < this.a ||
      this.a + this.c < this.b
    ) {
      return false;
    }

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      return false;
    }

    if (!this.a || !this.b || !this.c) {
      return false;
    }

    return true;
  }

  get isEquilateral() {
    if (!this.isValidTriangle) {
      return false;
    }

    return this.a === this.b && this.a === this.c && this.b === this.c;
  }

  get isIsosceles() {
    if (!this.isValidTriangle) {
      return false;
    }

    return this.a === this.b || this.b === this.c || this.c === this.a;
  }

  get isScalene() {
    if (!this.isValidTriangle) {
      return false;
    }

    return this.a !== this.b && this.a !== this.c && this.b !== this.c;
  }
}
