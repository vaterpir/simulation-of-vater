import { Particle } from '../classObjects';
import { findCrossObjects } from '../helpers';

export default (x, y, count = 0, sides) => {
  const particle = new Particle(x, y, count, sides);
  return particle;
};
