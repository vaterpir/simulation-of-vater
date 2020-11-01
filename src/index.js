import './style.scss';
import { Static, Particle } from './classObjects';
import { TIME_FRAME } from './constants';
import draw from './draw/draw';
import movement from './move/movement';
import { pow, sqrt } from './helpers';

const state = {
  mouseDown: {
    X0: 0,
    Y0: 0,
  },
  particles: [],
  lines: [],
};

const initialNewState = () => {
  state.particles.forEach((particle) => {
    const { X, Y, R } = particle;
    state.lines.forEach((line) => {
      const { A, B, C } = line;
      const distance = (A * X + B * Y + C) / sqrt(pow(A) + pow(B)) - R;
      particle.sides[line.key] = distance > 0;
    });
  });
};

const animation = () => {
  const { particles, lines } = state;
  movement(particles, lines);

  draw(state.particles, state.lines);
  state.time = state.time + TIME_FRAME;
  requestAnimationFrame(() => animation());
};
animation();

addEventListener('mousedown', (event) => {
  if (event.target.id === 'canvas') {
    const X0 = event.offsetX == undefined ? event.layerX : event.offsetX;
    const Y0 = event.offsetY == undefined ? event.layerY : event.offsetY;
    state.mouseDown = { X0, Y0 };
  }
});

addEventListener('mouseup', (event) => {
  if (event.target.id === 'canvas') {
    const X1 = event.offsetX == undefined ? event.layerX : event.offsetX;
    const Y1 = event.offsetY == undefined ? event.layerY : event.offsetY;
    const { X0, Y0 } = state.mouseDown;
    if (X0 !== X1 || Y0 !== Y1) {
      // drag&drop
      const newStatic = new Static(X0, Y0, X1, Y1, `${X0}_${Y0}`);
      state.lines = [...state.lines, newStatic];
      initialNewState();
    } else {
      // click
      const newParticle = new Particle(X0, Y0, state.particles.length);
      state.particles = [...state.particles, newParticle];
      initialNewState();
    }
  }
});

/* addEventListener('click', (event) => {
  if (event.target.id === 'canvas') {
    const x = event.offsetX == undefined ? event.layerX : event.offsetX;
    const y = event.offsetY == undefined ? event.layerY : event.offsetY;

    const setNewParticleSides = state.staticObjects.reduce(
      (sides, staticObject) => {
        return {
          ...sides,
          [staticObject.key]: getSideDictance(x, y, staticObject).side < 0,
        };
      },
      {}
    );

    state.particles = [
      ...state.particles,
      new Particle(x, y, state.particles.length, setNewParticleSides),
    ];
  }
}); */

/*
  state.particles = moveParticles(state.particles, state.staticObjects);
  drawCanvas(state.particles, state.staticObjects);
*/
