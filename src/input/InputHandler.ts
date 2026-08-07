// src/input/InputHandler.ts
/**
 * Simple InputHandler that normalises direction commands.
 * For the purpose of this repository we expose a singleton with a
 * `lastDirection` property that can be inspected in tests.
 */
export type Direction = 'up' | 'down' | 'left' | 'right';

class InputHandler {
  public lastDirection: Direction | null = null;

  /** Called by UI components or gesture detectors */
  public handleDirection(dir: Direction) {
    this.lastDirection = dir;
    // In a full implementation this would forward to GameEngine.
  }

  /** Reset after consumption */
  public clear() {
    this.lastDirection = null;
  }
}

export const inputHandler = new InputHandler();
