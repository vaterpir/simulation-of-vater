import { getContextCanvas } from '../helpers';
import { MAP_SIZE } from '../constants';

const ctx = getContextCanvas(MAP_SIZE);

export const drawParticle = (particles = []) => {
  particles.forEach(({ X, Y, R }) => {
    ctx.fillStyle = '#6666ee';
    ctx.beginPath();
    ctx.arc(X, Y, R, 0, Math.PI * 2, true); // Outer circle
    ctx.fill();
  });
};
