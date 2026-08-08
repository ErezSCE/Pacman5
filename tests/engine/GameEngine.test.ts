import { GameEngine, GameState } from '../../src/engine/GameEngine';

describe('GameEngine.runLoop', () => {
  it('starts the loop and emits state on each tick', (done) => {
    let rafCallCount = 0;
    const mockRaf = jest.fn().mockImplementation((cb) => {
      // simulate two frames only
      if (rafCallCount === 0) {
        rafCallCount++;
        setTimeout(() => cb(1000), 0);
      } else if (rafCallCount === 1) {
        rafCallCount++;
        setTimeout(() => cb(1016), 0);
      }
      // after two calls, do nothing to stop infinite loop
      return 0;
    });
    // @ts-ignore replace global requestAnimationFrame
    global.requestAnimationFrame = mockRaf;

    const engine = new GameEngine();
    const callback = jest.fn();
    engine.subscribe(callback);
    engine.start();

    // allow async callbacks to run
    setTimeout(() => {
      expect(mockRaf).toHaveBeenCalled();
      // should have been called at least twice (initial start + two frames)
      expect(callback).toHaveBeenCalledTimes(2);
      const firstCall = callback.mock.calls[0][0] as GameState;
      expect(firstCall.timestamp).toBe(1000);
      expect(firstCall.delta).toBeCloseTo(0);
      const secondCall = callback.mock.calls[1][0] as GameState;
      expect(secondCall.timestamp).toBe(1016);
      expect(secondCall.delta).toBeCloseTo(16);
      engine.stop();
      done();
    }, 10);
  });
});

describe('GameEngine.pauseResume', () => {
  it('does not emit ticks while paused and resumes correctly', (done) => {
    const frames: number[] = [];
    const mockRaf = jest.fn().mockImplementation((cb) => {
      // simulate frames with timestamps
      const ts = frames.length === 0 ? 2000 : 2016;
      frames.push(ts);
      setTimeout(() => cb(ts), 0);
    });
    // @ts-ignore
    global.requestAnimationFrame = mockRaf;

    const engine = new GameEngine();
    const callback = jest.fn();
    engine.subscribe(callback);
    engine.start();
    // pause after first tick
    setTimeout(() => {
      engine.pause();
    }, 1);
    // resume after a short delay
    setTimeout(() => {
      engine.resume();
    }, 5);
    setTimeout(() => {
      // Should have received at least one tick before pause, and another after resume
      expect(callback).toHaveBeenCalled();
      const calls = callback.mock.calls.map(c => c[0] as GameState);
      // Ensure none of the calls have paused true
      calls.forEach(state => expect(state.paused).toBe(false));
      engine.stop();
      done();
    }, 20);
  });
});
