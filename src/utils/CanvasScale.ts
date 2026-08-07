// src/utils/CanvasScale.ts
/**
 * Calculate the optimal canvas width and height to fit within the viewport
 * while preserving the desired aspect ratio.
 * Returns an object with the scaled width and height.
 */
export function calculateCanvasScale(
  viewportWidth: number,
  viewportHeight: number,
  desiredWidth: number,
  desiredHeight: number
): { width: number; height: number } {
  const viewportRatio = viewportWidth / viewportHeight;
  const desiredRatio = desiredWidth / desiredHeight;
  if (viewportRatio > desiredRatio) {
    // viewport is wider than desired, limit by height
    const height = Math.min(viewportHeight, desiredHeight);
    const width = Math.round(height * desiredRatio);
    return { width, height };
  } else {
    // viewport is taller or equal, limit by width
    const width = Math.min(viewportWidth, desiredWidth);
    const height = Math.round(width / desiredRatio);
    return { width, height };
  }
}
