# QA Lead — Test Plan

**Agent**: qa-lead  
**Generated**: 2026-08-08T00:07:37.365Z

---

## Test Plan

{
  "scope": "All acceptance criteria from the user stories are covered by the test items below.",
  "unit": [
    {
      "target": "GameEngine.runLoop",
      "description": "Ensures the main loop runs at approximately 60fps using requestAnimationFrame timestamps.",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 0
    },
    {
      "target": "GameEngine.pause",
      "description": "Verifies that pausing the game stops the loop without errors and can be resumed correctly.",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 3
    },
    {
      "target": "InputHandler.handleKeyboard",
      "description": "Maps Arrow keys and WASD to correct direction commands respecting walls.",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 0
    },
    {
      "target": "InputHandler.handleTouchButtons",
      "description": "Processes on‑screen button taps and emits proper direction commands on touch devices.",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 1
    },
    {
      "target": "InputHandler.handleSwipe",
      "description": "Detects swipe gestures and translates them into low‑latency direction commands.",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 2
    },
    {
      "target": "GhostAI.calculateTarget",
      "description": "Computes chase‑mode target tiles for each ghost personality (Blinky, Pinky, Inky, Clyde).",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 0
    },
    {
      "target": "GhostAI.updateModeTimers",
      "description": "Switches ghosts between chase and scatter based on configured timers.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 1
    },
    {
      "target": "GhostAI.handleScaredState",
      "description": "Puts all ghosts into scared state, reverses direction, and manages flashing timer after a power pellet is eaten.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 2
    },
    {
      "target": "GhostAI.handleEatenGhost",
      "description": "Transforms an eaten ghost into eyes, sends it back to the ghost house, and resets its state.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 3
    },
    {
      "target": "ScoreManager.updateScore",
      "description": "Adds points for dots, power pellets, ghosts, and fruit according to the points table.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 0
    },
    {
      "target": "ScoreManager.checkExtraLife",
      "description": "Awards an extra life automatically when the cumulative score reaches 10,000 points.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 1
    },
    {
      "target": "AudioManager.playSoundEffect",
      "description": "Plays the correct sound effect (dot, pellet, ghost eat, death, fruit, extra life) when triggered.",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 0
    },
    {
      "target": "AudioManager.sirenLoop",
      "description": "Loops the background siren continuously and adjusts pitch/speed as level progresses.",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 1
    },
    {
      "target": "AudioManager.toggleMute",
      "description": "Silences all audio instantly and restores playback when unmuted.",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 2
    },
    {
      "target": "HighScoreStore.loadHighScores",
      "description": "Retrieves the top‑10 high scores from IndexedDB on game startup.",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 0
    },
    {
      "target": "HighScoreStore.saveHighScore",
      "description": "Saves a qualifying high score with initials to IndexedDB after Game Over.",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 1
    },
    {
      "target": "ColorBlindMode.togglePalette",
      "description": "Switches ghost colors to the alternative color‑blind palette when the toggle is activated.",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 1
    },
    {
      "target": "ResponsiveLayout.calculateScale",
      "description": "Computes canvas scaling factor to maintain aspect ratio across viewports from 375 px to 2560 px.",
      "framework": "Jest",
      "storyId": "US-010",
      "acIndex": 0
    },
    {
      "target": "BundleSize.checkUnderLimit",
      "description": "Ensures the production bundle size is under 2 MB gzip after build.",
      "framework": "Jest",
      "storyId": "US-011",
      "acIndex": 2
    }
  ],
  "integration": [
    {
      "target": "GameEngine.renderFrame",
      "description": "Confirms that each frame draws maze, Pac‑Man, ghosts, dots, pellets, fruit, and HUD at correct canvas positions.",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 1
    },
    {
      "target": "GameEngine.updateState",
      "description": "Validates that movement and collision updates are reflected visually in real time via canvas redraws.",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 2
    },
    {
      "target": "InputHandler+GameEngine.pauseInteraction",
      "description": "Ensures input commands are ignored while the game is paused and resume correctly after unpausing.",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 3
    },
    {
      "target": "GhostAI+GameEngine.powerPellet",
      "description": "Tests that eating a power pellet triggers scared state for all ghosts, reverses their direction, and allows them to be eaten.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 2
    },
    {
      "target": "GameEngine.collisionWithGhost",
      "description": "Checks that colliding with a non‑scared ghost reduces lives, triggers death animation, and resets Pac‑Man position.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 2
    },
    {
      "target": "GameEngine.levelCompletion",
      "description": "Verifies that clearing all dots/pellets ends the level, increments level counter, and increases ghost speed/timers for the next level.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 3
    },
    {
      "target": "AudioManager+GameEvents",
      "description": "Ensures audio manager receives game events and plays corresponding sound effects and siren loops.",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 0
    },
    {
      "target": "ServiceWorker.precacheAssets",
      "description": "Validates that the service worker caches all static assets on first visit using Workbox precache manifest.",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 0
    },
    {
      "target": "ServiceWorker.updateLifecycle",
      "description": "Confirms that updating any asset triggers a service worker update and refreshes the cache appropriately.",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 2
    },
    {
      "target": "HighScoreStore.qualifyAndSave",
      "description": "Ensures that after Game Over, a qualifying score is saved and the high‑score list updates accordingly.",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 1
    },
    {
      "target": "HighScoreStore.persistenceAcrossReloads",
      "description": "Checks that high scores persist after a page reload or browser restart by reading from IndexedDB.",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 2
    },
    {
      "target": "Accessibility.keyboardNavigation",
      "description": "Verifies that all menu items are reachable via Tab/Enter and display a visible focus outline.",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 0
    },
    {
      "target": "GameEngine.fullBootSequence",
      "description": "Runs the full boot sequence (asset loading, start screen, countdown, gameplay, pause, level transition, game over) and asserts no uncaught errors occur.",
      "framework": "Jest",
      "storyId": "US-011",
      "acIndex": 0
    },
    {
      "target": "GameEngine.interactionHarmony",
      "description": "Tests that input, scoring, audio, high‑score storage, and offline support work together during a simulated play session.",
      "framework": "Jest",
      "storyId": "US-011",
      "acIndex": 1
    }
  ],
  "e2e": [
    {
      "scenario": "Start screen displays title, high‑score list, and Start button; Enter or click starts countdown",
      "description": "Validates UI elements on the Start screen and that pressing Enter or clicking Start initiates the 3‑2‑1‑GO overlay.",
      "criticalPath": true,
      "storyId": "US-006",
      "acIndex": 0
    },
    {
      "scenario": "Countdown overlay appears and transitions to gameplay",
      "description": "Ensures the 3‑2‑1‑GO overlay is shown for the correct duration before the game loop starts.",
      "criticalPath": true,
      "storyId": "US-006",
      "acIndex": 1
    },
    {
      "scenario": "Pause overlay freezes game loop and resumes correctly",
      "description": "Presses the pause key, checks that the Pause overlay appears, the game loop halts, then unpauses and verifies gameplay continues without visual glitches.",
      "criticalPath": true,
      "storyId": "US-006",
      "acIndex": 2
    },
    {
      "scenario": "Game Over screen shows final score and high‑score entry when qualified",
      "description": "Completes a level, triggers Game Over, verifies final score display, high‑score entry field appears for qualifying scores, and Restart button works.",
      "criticalPath": true,
      "storyId": "US-006",
      "acIndex": 3
    },
    {
      "scenario": "Offline play after first load",
      "description": "Loads the game, then simulates offline mode (network disabled) and confirms the game loads from Service Worker cache and runs fully.",
      "criticalPath": true,
      "storyId": "US-007",
      "acIndex": 1
    },
    {
      "scenario": "Service Worker updates when assets change",
      "description": "Updates a static asset, forces a reload, and checks that the Service Worker fetches the new version and updates the cache.",
      "criticalPath": false,
      "storyId": "US-007",
      "acIndex": 2
    },
    {
      "scenario": "High‑score persistence across sessions",
      "description": "Achieves a qualifying score, enters initials, reloads the page, and verifies the new high score appears on the Start screen.",
      "criticalPath": true,
      "storyId": "US-008",
      "acIndex": 2
    },
    {
      "scenario": "Keyboard‑only navigation and focus outlines",
      "description": "Tabs through all menu items on Start and Pause screens, ensuring each receives a visible focus outline and can be activated with Enter.",
      "criticalPath": true,
      "storyId": "US-009",
      "acIndex": 0
    },
    {
      "scenario": "Color‑blind mode toggle changes palette",
      "description": "Activates the color‑blind mode toggle and verifies ghost colors switch to the alternative palette during gameplay.",
      "criticalPath": false,
      "storyId": "US-009",
      "acIndex": 1
    },
    {
      "scenario": "Full gameplay using only keyboard input",
      "description": "Plays a short game session using only Arrow keys/WASD, confirming that movement, pause, and level transition work without mouse or touch.",
      "criticalPath": true,
      "storyId": "US-010",
      "acIndex": 2
    },
    {
      "scenario": "Responsive layout across viewports",
      "description": "Resizes the browser to multiple widths (375 px, 768 px, 1440 px, 2560 px) and checks that canvas and UI scale proportionally while maintaining aspect ratio.",
      "criticalPath": true,
      "storyId": "US-010",
      "acIndex": 0
    },
    {
      "scenario": "On‑screen directional buttons appear on touch devices",
      "description": "Emulates a touch device, verifies that on‑screen directional buttons are displayed and are sized for easy tapping.",
      "criticalPath": false,
      "storyId": "US-010",
      "acIndex": 1
    },
    {
      "scenario": "Swipe gestures control Pac‑Man on mobile",
      "description": "Performs swipe gestures on a simulated mobile viewport and confirms Pac‑Man changes direction with low latency.",
      "criticalPath": true,
      "storyId": "US-010",
      "acIndex": 2
    },
    {
      "scenario": "End‑to‑end game flow without errors",
      "description": "Runs through the complete game flow: asset loading, start screen, countdown, gameplay, pause, level transition, and Game Over, asserting no console errors and correct UI transitions.",
      "criticalPath": true,
      "storyId": "US-011",
      "acIndex": 0
    },
    {
      "scenario": "All interactions function together in a play session",
      "description": "During a single playthrough, verifies input handling, scoring updates, audio playback, high‑score storage, and offline support all operate cohesively.",
      "criticalPath": true,
      "storyId": "US-011",
      "acIndex": 1
    }
  ],
  "coverageTargets": {
    "unit": 85,
    "integration": 70,
    "e2e": 100
  }
}
