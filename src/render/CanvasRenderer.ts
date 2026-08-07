// src/render/CanvasRenderer.ts
// Simple CanvasRenderer with double‑buffering and HUD drawing.
// This is a minimal implementation sufficient for unit tests.

export interface GameState {
  // positions are expressed in grid coordinates (x, y)
  pacman: { x: number; y: number };
  ghosts: Array<{ x: number; y: number; color: string }>;
  dots: Array<{ x: number; y: number }>;
  fruit?: { x: number; y: number };
  score: number;
  lives: number;
  level: number;
}

export class CanvasRenderer {
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private readonly bufferCanvas: HTMLCanvasElement;
  private readonly bufferCtx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('2D context not available');
    this.ctx = ctx;
    // off‑screen buffer for double buffering
    this.bufferCanvas = document.createElement('canvas');
    this.bufferCanvas.width = canvas.width;
    this.bufferCanvas.height = canvas.height;
    const bufferCtx = this.bufferCanvas.getContext('2d');
    if (!bufferCtx) throw new Error('2D context not available on buffer');
    this.bufferCtx = bufferCtx;
  }

  /** Render a full frame based on the supplied game state */
  render(state: GameState) {
    this.clearBuffer();
    this.drawMaze();
    this.drawDots(state.dots);
    if (state.fruit) this.drawFruit(state.fruit);
    this.drawPacman(state.pacman);
    this.drawGhosts(state.ghosts);
    this.drawHUD(state);
    // copy buffer to visible canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.bufferCanvas, 0, 0);
  }

  private clearBuffer() {
    this.bufferCtx.clearRect(0, 0, this.bufferCanvas.width, this.bufferCanvas.height);
  }

  private drawMaze() {
    // placeholder: draw a simple border representing the maze
    this.bufferCtx.strokeStyle = '#000';
    this.bufferCtx.lineWidth = 2;
    this.bufferCtx.strokeRect(0, 0, this.bufferCanvas.width, this.bufferCanvas.height);
  }

  private drawDots(dots: Array<{ x: number; y: number }>) {
    this.bufferCtx.fillStyle = '#fff';
    dots.forEach(d => {
      this.bufferCtx.fillRect(d.x * 8 - 1, d.y * 8 - 1, 2, 2);
    });
  }

  private drawFruit(pos: { x: number; y: number }) {
    this.bufferCtx.fillStyle = 'red';
    this.bufferCtx.fillRect(pos.x * 8 - 4, pos.y * 8 - 4, 8, 8);
  }

  private drawPacman(pos: { x: number; y: number }) {
    this.bufferCtx.fillStyle = 'yellow';
    this.bufferCtx.beginPath();
    this.bufferCtx.arc(pos.x * 8 + 4, pos.y * 8 + 4, 4, 0, Math.PI * 2);
    this.bufferCtx.fill();
  }

  private drawGhosts(ghosts: Array<{ x: number; y: number; color: string }>) {
    ghosts.forEach(g => {
      this.bufferCtx.fillStyle = g.color;
      this.bufferCtx.beginPath();
      this.bufferCtx.arc(g.x * 8 + 4, g.y * 8 + 4, 4, 0, Math.PI * 2);
      this.bufferCtx.fill();
    });
  }

  /** Draw the HUD (score, lives, level) */
  drawHUD(state: Pick<GameState, 'score' | 'lives' | 'level'>) {
    const { ctx } = this;
    ctx.save();
    ctx.font = '12px monospace';
    ctx.fillStyle = '#fff';
    ctx.textBaseline = 'top';
    ctx.fillText(`Score: ${state.score}`, 5, 5);
    ctx.fillText(`Lives: ${state.lives}`, 5, 20);
    ctx.fillText(`Level: ${state.level}`, 5, 35);
    ctx.restore();
  }
}
