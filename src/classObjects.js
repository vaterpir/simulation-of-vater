export class Static {
  constructor(x0, y0, x1, y1, key = 'no_key') {
    this.X0 = x0;
    this.Y0 = y0;
    this.X1 = x1;
    this.Y1 = y1;
    this.A = y0 - y1;
    this.B = x1 - x0;
    this.C = x0 * y1 - x1 * y0;
    this.key = key;
  }
}

export class Particle {
  constructor(x, y, count = 0) {
    this.X = x;
    this.Y = y;
    this.R = 5;
    this.timeFall = 0;
    this.count = count;
    this.sides = [];
  }
}
