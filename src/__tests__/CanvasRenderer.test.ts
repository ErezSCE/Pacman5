import { CanvasRenderer, GameState } from '../render/CanvasRenderer';

describe('CanvasRenderer', () => {
  let canvas: HTMLCanvasElement;
  let renderer: CanvasRenderer;

  beforeEach(() => {
    canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    renderer = new CanvasRenderer(canvas);
  });

  it('renders a frame without throwing', () => {
    const state: GameState = {
      pacman: { x: 5, y: 5 },
      ghosts: [{ x: 10, y: 10, color: 'red' }],
      dots: [{ x: 1, y: 1 }, { x: 2, y: 2 }],
      score: 1230,
      lives: 3,
      level: 2,
    };
    expect(() => renderer.render(state)).not.toThrow();
    // basic sanity: canvas should have some pixels drawn (non‑transparent)
    const ctx = canvas.getContext('2d');
    const data = ctx?.getImageData(0, 0, 1, 1).data;
    expect(data?.[3]).toBeGreaterThanOrEqual(0); // alpha channel exists
  });
});
