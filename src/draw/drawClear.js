import { getContextCanvas } from '../helpers';
import { MAP_SIZE } from '../constants';

const ctx = getContextCanvas(MAP_SIZE);

export default () => {
  ctx.fillStyle = '#eee';
  ctx.fillRect(0, 0, MAP_SIZE, MAP_SIZE);
};
