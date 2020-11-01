import { getContextCanvas } from '../helpers';
import { MAP_SIZE } from '../constants';

const ctx = getContextCanvas(MAP_SIZE);

export const drawStatic = (staticObjects) => {
  staticObjects.forEach((object) => {
    const { X0, Y0, X1, Y1 } = object;
    ctx.fillStyle = '#6666ee';
    ctx.beginPath();
    ctx.moveTo(X0, Y0);
    ctx.lineTo(X1, Y1);
    ctx.stroke();
  });
};
