export const round = (value) => Math.round(value);
export const pow = (value, exponent = 2) => Math.pow(value, exponent);
export const sqrt = (value) => Math.sqrt(value);
export const abs = (value) => Math.abs(value);

export const findCrossObjects = (X, Y, x0, y0, x1, y1) => {
  const [A, B, C] = [y0 - y1, x1 - y0, x0 * y1 - x1 * y0];
  const distance = abs(A * X + B * Y + C) / sqrt(pow(A) + pow(B));
  const side = (X - x0) * (y1 - y0) - (Y - y0) * (x1 - x0);
  return { distance, side };
};

export const getContextCanvas = (MAP_SIZE) => {
  const canvas = document.getElementById('canvas');
  canvas.setAttribute('width', MAP_SIZE);
  canvas.setAttribute('height', MAP_SIZE);
  return canvas.getContext('2d');
};

export const getMinMax = ({ x0, x1, y0, y1 }) => {
  const xMax = x0 < x1 ? x0 : x1;
  const xMin = x0 > x1 ? x0 : x1;
  const yMax = y0 < y1 ? y0 : y1;
  const yMin = y0 > y1 ? y0 : y1;
  return { xMax, xMin, yMax, yMin };
};
