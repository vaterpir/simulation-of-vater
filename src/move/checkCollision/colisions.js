import { MAP_SIZE } from '../../constants';
import { getMinMax, getSideDictance } from '../../helpers';

export const testCollisionCanvas = (x, y, size) => {
  const newX =
    x + size > MAP_SIZE ? MAP_SIZE - size : x - size < 0 ? 0 + size : x;
  const newY =
    y + size > MAP_SIZE ? MAP_SIZE - size : y - size < 0 ? 0 + size : y;
  return { x: newX, y: newY };
};

export const testCollisionObject = (x, y, staticObjects, size, particle) => {
  let newY;
  const stop = staticObjects.some((object) => {
    const { xMin, xMax } = getMinMax(object);
    const { x0, y0, x1, y1 } = object;
    const grad = 90 - Math.atan((y1 - y0) / (x1 - x0)) * 57.295;
    (y0 - y1) * x + (x1 - x0) * y;
    const ty = ((-1 * (y0 - y1)) / (x1 - x0)) * x - (x0 * y1 - x1 * y0);

    newY = size / Math.sin(grad) + ty - size - 10;

    const { side, distance } = getSideDictance(x, y, object);
    return (
      (distance < size || particle.sides[object.key] === side > 0) &&
      x > xMax &&
      x < xMin
    );
  });
  return { stop, newY };
};
