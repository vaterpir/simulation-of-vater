import { drawParticle } from './drawParticles';
import { drawStatic } from './drawStatic';
import drawClear from './drawClear';

export default (particles, lines) => {
  drawClear();
  drawStatic(lines);
  drawParticle(particles);
};
