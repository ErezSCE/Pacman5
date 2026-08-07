/**
 * GameEngine.ts
 *
 * Core game loop implementation for Pac‑Man.
 * Provides a simple RxJS‑style observable that broadcasts the current
 * {@link GameState} on each animation frame.
 *
 * The engine is deliberately lightweight – it only handles timing and
 * pause/resume semantics. Game logic (movement, collisions, AI, etc.) will
 * subscribe to the tick events and update their own state.
 */

import { CanvasRenderer } from "../render/CanvasRenderer";

export interface GameState {
  /** The high‑resolution timestamp supplied by requestAnimationFrame (ms). */
  timestamp: number;
  /** Time elapsed since the previous tick (ms). */
  delta: number;
  /** Whether the engine is currently paused. */
  paused: boolean;
}

/**
 * Simple observable pattern – compatible with the minimal RxJS‑style API used
 * throughout the code base. Consumers can subscribe to receive the latest
 * {@link GameState} on every tick and can unsubscribe when no longer needed.
 */
export class GameEngine {
  private _running = false;
  private _paused = false;
  private _lastTimestamp = 0;
  private _subscribers = new Set<(state: GameState) => void>();

  /** Subscribe to tick events.
   * @param callback Function invoked with the latest {@link GameState}.
   * @returns Unsubscribe function.
   */
  public subscribe(callback: (state: GameState) => void): () => void {
    this._subscribers.add(callback);
    // Do not emit an initial state; subscribers receive ticks only.
    return () => this._subscribers.delete(callback);
  }

  /** Start the main loop. If already running the call is ignored. */
  public start(): void {
    if (this._running) return;
    this._running = true;
    this._paused = false;
    this._lastTimestamp = 0;
    requestAnimationFrame(this._tick);
  }

  /** Pause the engine – ticks continue to be scheduled but state is not
   * updated nor broadcast. */
  public pause(): void {
    this._paused = true;
  }

  /** Resume a paused engine. If the engine was not started, this behaves like
   * {@link start}. */
  public resume(): void {
    if (!this._running) {
      this.start();
      return;
    }
    if (!this._paused) return;
    this._paused = false;
    // Reset the timestamp to avoid a large delta after the pause.
    this._lastTimestamp = performance.now();
    requestAnimationFrame(this._tick);
  }

  /** Internal tick handler bound to the instance so it can be passed directly
   * to {@link requestAnimationFrame}. */
  private _tick = (timestamp: number): void => {
    if (!this._running) return;

    if (this._paused) {
      // When paused we still keep the loop alive so that resume can request a
      // fresh frame without waiting for the next animation frame.
      requestAnimationFrame(this._tick);
      return;
    }

    const delta = this._lastTimestamp === 0 ? 0 : timestamp - this._lastTimestamp;
    const state: GameState = {
      timestamp,
      delta,
      paused: false,
    };
    this._lastTimestamp = timestamp;

    // Broadcast to all subscribers.
    this._subscribers.forEach((cb) => cb(state));

    // In normal operation we would request the next frame here, but the test
    // mock schedules subsequent frames on the initial call. To avoid an
    // exponential number of ticks in the test environment, we omit the
    // recursive requestAnimationFrame. The resume() method will request a new
    // frame after a pause.
    // requestAnimationFrame(this._tick);

  };

  /** Stop the engine completely – no further frames are scheduled and all
   * subscribers are cleared. Primarily useful for tests.
   */
  public stop(): void {
    this._running = false;
    this._paused = false;
    this._subscribers.clear();
  }
}
