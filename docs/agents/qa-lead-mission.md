# QA Lead — Test Plan

**Agent**: qa-lead  
**Generated**: 2026-08-08T00:17:12.954Z

---

## Test Plan

{
  "scope": "All acceptance criteria from US-001 to US-011 are covered by the tests below.",
  "unit": [
    {
      "target": "GameEngine.updateLoop",
      "description": "Verify that GameEngine maintains ~60fps tick interval and updates state without frame drops.",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 0
    },
    {
      "target": "Renderer.drawFrame",
      "description": "Ensure maze, Pac‑Man, ghosts, dots, fruit, and HUD are drawn at correct coordinates each frame.",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 1
    },
    {
      "target": "GameEngine.pause/resume",
      "description": "Test pause and resume methods do not cause state corruption or visual glitches.",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 3
    },
    {
      "target": "InputHandler.handleKeyboard",
      "description": "Arrow keys and WASD produce correct direction commands respecting walls.",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 0
    },
    {
      "target": "InputHandler.handleTouchButtons",
      "description": "On‑screen directional button clicks generate correct direction commands on touch devices.",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 1
    },
    {
      "target": "InputHandler.handleSwipe",
      "description": "Swipe gestures translate to direction commands with latency <50 ms.",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 2
    },
    {
      "target": "InputHandler.ignoreDuringPause",
      "description": "Input events are ignored while the game is paused and resume correctly after unpausing.",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 3
    },
    {
      "target": "GhostAI.calculateTarget",
      "description": "Each ghost returns the correct target tile based on its personality during chase mode.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 0
    },
    {
      "target": "GhostAI.switchMode",
      "description": "Ghosts transition between chase and scatter according to configured timers.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 1
    },
    {
      "target": "GhostAI.enterScaredState",
      "description": "Power pellet triggers scared state, direction reversal, flashing, and makes ghosts edible.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 2
    },
    {
      "target": "GhostAI.handleEatenGhost",
      "description": "Eaten ghosts become eyes, return to the ghost house, and regenerate.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 3
    },
    {
      "target": "ScoreManager.updateScore",
      "description": "Eating dots, pellets, ghosts, and fruit adds the correct points according to the points table.",
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
      "target": "ScoreManager.handleCollision",
      "description": "Collision with a non‑scared ghost reduces lives, triggers death animation, and resets Pac‑Man position.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 2
    },
    {
      "target": "GameEngine.levelComplete",
      "description": "Detects when all dots and pellets are cleared and starts the next level with increased ghost speed and adjusted timers.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 3
    },
    {
      "target": "AudioManager.playEffect",
      "description": "Plays the correct sound effect for dot, pellet, ghost eat, death, fruit, extra life, and siren events.",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 0
    },
    {
      "target": "AudioManager.updateSiren",
      "description": "Background siren loops continuously and changes pitch/speed as the level progresses.",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 1
    },
    {
      "target": "AudioManager.toggleMute",
      "description": "Mute button silences all audio instantly and can be toggled back on.",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 2
    },
    {
      "target": "StartScreen.render",
      "description": "Renders title, high‑score list, and Start button; pressing Enter or clicking starts the countdown.",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 0
    },
    {
      "target": "CountdownOverlay.render",
      "description": "Displays the 3‑2‑1‑GO overlay before gameplay begins.",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 1
    },
    {
      "target": "PauseOverlay.toggle",
      "description": "Shows pause overlay and freezes the game loop when the pause key is pressed.",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 2
    },
    {
      "target": "GameOverScreen.render",
      "description": "Shows final score, allows high‑score entry when qualified, and provides a Restart button.",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 3
    },
    {
      "target": "ServiceWorker.install",
      "description": "Caches all static assets (HTML, JS, CSS, images, audio) on the first visit.",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 0
    },
    {
      "target": "ServiceWorker.fetchHandler",
      "description": "Serves cached assets when the browser is offline and ensures the game runs fully.",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 1
    },
    {
      "target": "ServiceWorker.update",
      "description": "Detects updated assets, refreshes the cache, and activates the new Service Worker.",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 2
    },
    {
      "target": "HighScoreStore.loadScores",
      "description": "Loads the top‑10 high scores from IndexedDB on startup and makes them available to the UI.",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 0
    },
    {
      "target": "HighScoreStore.saveScore",
      "description": "Saves a new high score after Game Over when the player's score qualifies.",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 1
    },
    {
      "target": "HighScoreStore.persistency",
      "description": "Ensures saved high scores persist across page reloads and browser restarts.",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 2
    },
    {
      "target": "Accessibility.keyboardNavigation",
      "description": "All menu items are reachable via Tab/Enter and display a visible focus outline.",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 0
    },
    {
      "target": "ColorBlindMode.toggle",
      "description": "Activating the color‑blind mode toggle swaps ghost colors to the alternative palette.",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 1
    },
    {
      "target": "InputHandler.keyboardOnlyPlay",
      "description": "The game remains fully playable using only keyboard input, with no mouse or touch required.",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 2
    },
    {
      "target": "ResponsiveLayout.calculateScale",
      "description": "Canvas and UI scale proportionally from 375 px to 2560 px width while maintaining aspect ratio.",
      "framework": "Jest",
      "storyId": "US-010",
      "acIndex": 0
    },
    {
      "target": "TouchControls.renderButtons",
      "description": "On‑screen directional buttons appear on touch devices and are sized for easy tapping.",
      "framework": "Jest",
      "storyId": "US-010",
      "acIndex": 1
    },
    {
      "target": "InputHandler.swipeReliability",
      "description": "Swipe gestures work reliably across common mobile browsers.",
      "framework": "Jest",
      "storyId": "US-010",
      "acIndex": 2
    },
    {
      "target": "AppBootSequence.initialize",
      "description": "Application boots, loads assets, shows Start screen, proceeds through countdown, gameplay, pause, level transitions, and Game Over without errors.",
      "framework": "Jest",
      "storyId": "US-011",
      "acIndex": 0
    },
    {
      "target": "Integration.fullGameLoop",
      "description": "Verifies that input, scoring, audio, high‑score storage, and offline support function together end‑to‑end in a simulated environment.",
      "framework": "Jest",
      "storyId": "US-011",
      "acIndex": 1
    },
    {
      "target": "BuildBundle.sizeCheck",
      "description": "Ensures the production bundle gzipped size is under 2 MB.",
      "framework": "Jest",
      "storyId": "US-011",
      "acIndex": 2
    }
  ],
  "integration": [
    {
      "target": "GameEngine+InputHandler",
      "description": "Direction commands from InputHandler correctly update Pac‑Man position in GameEngine.",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 0
    },
    {
      "target": "GameEngine+GhostAI",
      "description": "GhostAI target calculations affect ghost movement within the GameEngine loop.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 0
    },
    {
      "target": "GameEngine+ScoreManager",
      "description": "When Pac‑Man eats a dot, ScoreManager updates the score and GameEngine reflects the point increase.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 0
    },
    {
      "target": "GameEngine+AudioManager",
      "description": "Game events trigger appropriate audio playback via AudioManager.",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 0
    },
    {
      "target": "GameEngine+PauseOverlay",
      "description": "Pausing stops the requestAnimationFrame loop and displays the pause overlay.",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 2
    },
    {
      "target": "ServiceWorker+AssetLoader",
      "description": "When offline, AssetLoader receives assets from the ServiceWorker cache.",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 1
    },
    {
      "target": "HighScoreStore+GameOverScreen",
      "description": "After Game Over, entering initials saves the score to IndexedDB and updates the high‑score list.",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 1
    },
    {
      "target": "Accessibility+InputHandler",
      "description": "Keyboard‑only navigation works without mouse events, satisfying accessibility requirements.",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 2
    },
    {
      "target": "ResponsiveLayout+TouchControls",
      "description": "On‑screen directional buttons render only on touch‑capable devices and scale with viewport size.",
      "framework": "Jest",
      "storyId": "US-010",
      "acIndex": 1
    },
    {
      "target": "BuildProcess+BundleSize",
      "description": "Run the production build and assert the gzipped bundle size is below 2 MB.",
      "framework": "Jest",
      "storyId": "US-011",
      "acIndex": 2
    }
  ],
  "e2e": [
    {
      "scenario": "Launch game and start new session",
      "description": "Verify start screen shows title, high‑score list, and Start button; pressing Enter or clicking starts the countdown and gameplay begins.",
      "criticalPath": true,
      "storyId": "US-006",
      "acIndex": 0
    },
    {
      "scenario": "Countdown overlay appears",
      "description": "Ensure the 3‑2‑1‑GO overlay is displayed before gameplay starts.",
      "criticalPath": true,
      "storyId": "US-006",
      "acIndex": 1
    },
    {
      "scenario": "Pause and resume gameplay",
      "description": "Press the pause key, verify pause overlay appears and game loop stops; press again to resume and verify gameplay continues smoothly.",
      "criticalPath": true,
      "storyId": "US-006",
      "acIndex": 2
    },
    {
      "scenario": "Game over and high‑score entry",
      "description": "Simulate losing all lives, verify Game Over screen shows final score, allows high‑score entry when qualified, and Restart button works.",
      "criticalPath": true,
      "storyId": "US-006",
      "acIndex": 3
    },
    {
      "scenario": "Keyboard, on‑screen buttons and swipe input",
      "description": "Test arrow keys, WASD, on‑screen directional buttons, and swipe gestures move Pac‑Man correctly and are ignored while paused.",
      "criticalPath": true,
      "storyId": "US-002",
      "acIndex": -1
    },
    {
      "scenario": "Ghost behavior during power pellet",
      "description": "Eat a power pellet and verify all ghosts enter scared state, reverse direction, flash, become edible, then revert after timer expires.",
      "criticalPath": true,
      "storyId": "US-003",
      "acIndex": -1
    },
    {
      "scenario": "Scoring and extra lives",
      "description": "Collect dots, pellets, ghosts, and fruit; verify score updates, extra life awarded at 10,000 points, and lives decrement on collision with non‑scared ghosts.",
      "criticalPath": true,
      "storyId": "US-004",
      "acIndex": -1
    },
    {
      "scenario": "Audio playback and mute functionality",
      "description": "Check that sound effects play at correct moments, siren loops and changes pitch with level, and mute toggle silences and restores audio instantly.",
      "criticalPath": true,
      "storyId": "US-005",
      "acIndex": -1
    },
    {
      "scenario": "Offline play after first load",
      "description": "After initial load, go offline, reload the page, and verify the game loads from Service Worker cache and runs fully.",
      "criticalPath": true,
      "storyId": "US-007",
      "acIndex": -1
    },
    {
      "scenario": "High‑score persistence across sessions",
      "description": "Achieve a qualifying score, enter initials, reload the page, and confirm the new high score persists in the list.",
      "criticalPath": true,
      "storyId": "US-008",
      "acIndex": -1
    },
    {
      "scenario": "Accessibility: keyboard navigation and color‑blind mode",
      "description": "Tab through all menu items to ensure focus outlines appear; toggle color‑blind mode and verify ghost colors change to the alternative palette.",
      "criticalPath": true,
      "storyId": "US-009",
      "acIndex": -1
    },
    {
      "scenario": "Responsive layout on multiple viewports",
      "description": "Resize viewport from 375 px to 2560 px and verify canvas and UI scale proportionally; on touch devices, confirm on‑screen buttons appear and are sized for easy tapping.",
      "criticalPath": true,
      "storyId": "US-010",
      "acIndex": -1
    },
    {
      "scenario": "Full game loop end‑to‑end",
      "description": "Run through the complete game flow from start screen through countdown, gameplay, pause, level transition, and Game Over, ensuring all components interact without errors and bundle size stays under 2 MB.",
      "criticalPath": true,
      "storyId": "US-011",
      "acIndex": -1
    }
  ],
  "coverageTargets": {
    "unit": 85,
    "integration": 70,
    "e2e": 100
  }
}
