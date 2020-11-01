import { pow, sqrt } from '../helpers';

export default (particles, lines) => {
  particles.forEach((particle) => {
    const { X, Y, R } = particle;
    lines.forEach((line) => {
      const { A, B, C } = line;
      const distance = (A * X + B * Y + C) / sqrt(pow(A) + pow(B)) - R;
      particle.sides[line.key] = distance;
    });
  });
};

/*
  const speedY = speed + G * timeFall;
  const newPositionY =
    yPos + 0.025 * ((pow(speedY, 2) + pow(speed, 2)) / (2 * G));
  const newPositionX = xPos;
  const newtimeFall = timeFall + TIME_FRAME;
*/
