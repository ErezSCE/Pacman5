# QA Lead — Test Plan

**Agent**: qa-lead  
**Generated**: 2026-08-08T00:14:23.451Z

---

## Test Plan

{
  "scope": "All acceptance criteria are covered by the test suite.",
  "unit": [
    {
      "target": "GameEngine.frameLoop",
      "description": "Ensures the game loop runs at ~60fps using requestAnimationFrame and maintains target frame duration.",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 0
    },
    {
      "target": "GameEngine.render",
      "description": "Verifies maze, Pac‑Man, ghosts, dots, pellets, fruit, and HUD are drawn at correct canvas coordinates each frame based on game state.",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 1
    },
    {
      "target": "GameEngine.updateState",
      "description": "Checks that movement and collision updates are reflected in the rendered positions in real time.",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 2
    },
    {
      "target": "GameEngine.pauseResume",
      "description": "Tests that pausing stops the loop without errors and resuming continues correctly with no visual glitches.",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 3
    },
    {
      "target": "InputHandler.keyboardMapping",
      "description": "Validates arrow keys and WASD are translated into correct direction commands respecting walls.",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 0
    },
    {
      "target": "InputHandler.touchButtons",
      "description": "Ensures on‑screen directional buttons emit proper direction commands on touch devices.",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 1
    },
    {
      "target": "InputHandler.swipeDetection",
      "description": "Confirms swipe gestures are recognized and converted to direction commands with low latency.",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 2
    },
    {
      "target": "InputHandler.pauseGuard",
      "description": "Verifies that input events are ignored while the game is paused and resume after unpausing.",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 3
    },
    {
      "target": "GhostAI.chaseLogic",
      "description": "Tests each ghost's targeting algorithm (chase, ambush, flank, random) produces expected target tiles.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 0
    },
    {
      "target": "GhostAI.timerTransitions",
      "description": "Checks that ghosts switch between chase and scatter modes according to configured timers.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 1
    },
    {
      "target": "GhostAI.scaredState",
      "description": "Ensures ghosts enter scared state, reverse direction, flash, and become edible after a power pellet is eaten.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 2
    },
    {
      "target": "GhostAI.eyesRegeneration",
      "description": "Validates that eaten ghosts turn into eyes, return to the ghost house, and regenerate correctly.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 3
    },
    {
      "target": "ScoreManager.pointAllocation",
      "description": "Verifies points are added correctly for dots, pellets, ghosts, and fruit according to the points table.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 0
    },
    {
      "target": "ScoreManager.extraLife",
      "description": "Tests that an extra life is awarded automatically when the cumulative score reaches 10,000 points.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 1
    },
    {
      "target": "ScoreManager.lifeLoss",
      "description": "Ensures colliding with a non‑scared ghost decrements lives, triggers death animation, and resets Pac‑Man position.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 2
    },
    {
      "target": "ScoreManager.levelProgression",
      "description": "Checks that clearing all dots/pellets ends the level, starts the next level, and increases ghost speed/timers.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 3
    },
    {
      "target": "AudioManager.soundTriggers",
      "description": "Confirms that dot, pellet, ghost‑eat, death, fruit, extra‑life, and siren sounds play at the correct moments.",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 0
    },
    {
      "target": "AudioManager.sirenLoop",
      "description": "Validates the background siren loops continuously and its pitch/speed changes as the level progresses.",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 1
    },
    {
      "target": "AudioManager.muteToggle",
      "description": "Ensures the mute button silences all audio instantly and can be toggled back on.",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 2
    },
    {
      "target": "StartScreen.render",
      "description": "Checks that the title, high‑score list, and Start button are displayed on the start screen.",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 0
    },
    {
      "target": "CountdownOverlay.sequence",
      "description": "Verifies the 3‑2‑1‑GO overlay appears in correct order before gameplay begins.",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 1
    },
    {
      "target": "PauseOverlay.display",
      "description": "Ensures the pause overlay appears when the pause key is pressed and freezes the game loop.",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 2
    },
    {
      "target": "GameOverScreen.flow",
      "description": "Validates that the Game Over screen shows final score, allows high‑score entry when qualified, and provides a Restart button.",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 3
    },
    {
      "target": "ServiceWorker.precache",
      "description": "Tests that the Service Worker precaches all static assets (HTML, JS, CSS, images, audio) on first visit.",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 0
    },
    {
      "target": "ServiceWorker.offlineFetch",
      "description": "Ensures that when the browser is offline, fetch requests are served from the cache and the game runs fully.",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 1
    },
    {
      "target": "ServiceWorker.updateHandling",
      "description": "Verifies that updating any asset triggers a Service Worker update and refreshes the cache accordingly.",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 2
    },
    {
      "target": "HighScoreStore.loadOnStartup",
      "description": "Checks that high scores are loaded from IndexedDB on startup and displayed on the Start screen.",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 0
    },
    {
      "target": "HighScoreStore.saveNewScore",
      "description": "Ensures a qualifying score can be saved with player initials after Game Over.",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 1
    },
    {
      "target": "HighScoreStore.persistence",
      "description": "Validates that saved high scores persist across page reloads and browser restarts.",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 2
    },
    {
      "target": "Accessibility.keyboardNavigation",
      "description": "Confirms all menu items are reachable via Tab/Enter and display a visible focus outline.",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 0
    },
    {
      "target": "Accessibility.colorBlindToggle",
      "description": "Ensures activating the color‑blind mode swaps ghost colors to the alternative palette.",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 1
    },
    {
      "target": "Accessibility.keyboardOnlyPlay",
      "description": "Verifies the game remains fully playable using only keyboard input (no mouse or touch).",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 2
    },
    {
      "target": "ResponsiveLayout.scaling",
      "description": "Tests that canvas and UI scale proportionally from 375 px to 2560 px while maintaining aspect ratio.",
      "framework": "Jest",
      "storyId": "US-010",
      "acIndex": 0
    },
    {
      "target": "TouchControls.visibility",
      "description": "Ensures on‑screen directional buttons appear on touch devices and are sized for easy tapping.",
      "framework": "Jest",
      "storyId": "US-010",
      "acIndex": 1
    },
    {
      "target": "SwipeGestures.reliability",
      "description": "Validates swipe gestures work reliably across common mobile browsers.",
      "framework": "Jest",
      "storyId": "US-010",
      "acIndex": 2
    },
    {
      "target": "FullGameLoop.bootSequence",
      "description": "Checks that the application boots, loads assets, shows Start screen, proceeds through countdown, gameplay, pause, level transitions, and Game Over without errors.",
      "framework": "Jest",
      "storyId": "US-011",
      "acIndex": 0
    },
    {
      "target": "ComponentWiring.integration",
      "description": "Ensures input, scoring, audio, high‑score storage, and offline support function together end‑to‑end during a play session.",
      "framework": "Jest",
      "storyId": "US-011",
      "acIndex": 1
    },
    {
      "target": "BundleSize.check",
      "description": "Verifies the production bundle size is under 2 MB (gzip).",
      "framework": "Jest",
      "storyId": "US-011",
      "acIndex": 2
    }
  ],
  "integration": [
    {
      "target": "InputHandler ↔ GameEngine",
      "description": "Integration test that keyboard/WASD input moves Pac‑Man correctly within the game loop.",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 0
    },
    {
      "target": "TouchButtons ↔ GameEngine",
      "description": "Ensures on‑screen button taps result in correct Pac‑Man direction changes during gameplay.",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 1
    },
    {
      "target": "Swipe ↔ GameEngine",
      "description": "Validates swipe gestures are translated into direction commands that affect Pac‑Man movement.",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 2
    },
    {
      "target": "GameEngine ↔ GhostAI (chase/scatter)",
      "description": "Tests that ghosts follow chase/scatter timers and update targets accordingly within the main loop.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 1
    },
    {
      "target": "GameEngine ↔ GhostAI (scared)",
      "description": "Verifies that after a power pellet, ghosts enter scared state, reverse direction, and become edible.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 2
    },
    {
      "target": "GameEngine ↔ ScoreManager",
      "description": "Checks that eating dots, pellets, ghosts, and fruit updates the score correctly in real time.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 0
    },
    {
      "target": "ScoreManager ↔ ExtraLifeLogic",
      "description": "Ensures an extra life is awarded when score reaches 10,000 points.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 1
    },
    {
      "target": "GameEngine ↔ AudioManager",
      "description": "Confirms that game events (dot, pellet, ghost eat, death, fruit, extra life, siren) trigger the appropriate sound effects.",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 0
    },
    {
      "target": "AudioManager ↔ MuteToggle",
      "description": "Validates that toggling mute silences all ongoing and future audio playback.",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 2
    },
    {
      "target": "HighScoreStore ↔ IndexedDB",
      "description": "Integration test for loading, saving, and persisting high scores using IndexedDB across sessions.",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 0
    },
    {
      "target": "ServiceWorker ↔ Cache",
      "description": "Ensures assets are cached on first visit, served offline, and updated correctly when a new version is deployed.",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 0
    },
    {
      "target": "StartScreen → Countdown → GameScreen Flow",
      "description": "Verifies the UI flow from Start button click to countdown overlay to active gameplay starts without errors.",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 0
    },
    {
      "target": "PauseOverlay ↔ GameEngine",
      "description": "Tests that activating the pause overlay freezes the game loop and unpausing resumes it correctly.",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 2
    },
    {
      "target": "GameOverScreen ↔ Restart",
      "description": "Ensures the Restart button resets the game state and returns to the Start screen.",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 3
    },
    {
      "target": "ColorBlindToggle ↔ GhostRendering",
      "description": "Checks that toggling color‑blind mode swaps ghost sprite colors throughout gameplay.",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 1
    },
    {
      "target": "ResponsiveLayout ↔ ViewportChanges",
      "description": "Validates that changing viewport size triggers proper canvas scaling and UI layout adjustments.",
      "framework": "Jest",
      "storyId": "US-010",
      "acIndex": 0
    },
    {
      "target": "FullBootAndPlay Integration",
      "description": "End‑to‑end integration test that the entire application boots, loads assets, runs a short gameplay segment, and reaches Game Over without runtime errors.",
      "framework": "Jest",
      "storyId": "US-011",
      "acIndex": 0
    }
  ],
  "e2e": [
    {
      "scenario": "Start game, verify countdown, play with keyboard, pause/resume, and observe score updates",
      "description": "Automates the full game start flow, ensures countdown appears, Pac‑Man moves with arrow keys, pause overlay works, and score increments as dots are eaten.",
      "criticalPath": true,
      "storyId": "US-011",
      "acIndex": 0
    },
    {
      "scenario": "Touch device: use on‑screen directional buttons to move Pac‑Man",
      "description": "Simulates a touch device, taps on-screen buttons, and verifies Pac‑Man changes direction accordingly.",
      "criticalPath": true,
      "storyId": "US-002",
      "acIndex": 1
    },
    {
      "scenario": "Swipe gesture controls Pac‑Man direction",
      "description": "Performs swipe gestures on a mobile viewport and checks that Pac‑Man follows the swiped direction with low latency.",
      "criticalPath": true,
      "storyId": "US-002",
      "acIndex": 2
    },
    {
      "scenario": "Power pellet triggers scared ghosts that can be eaten and return as eyes",
      "description": "Eats a power pellet, confirms ghosts turn blue, are edible, and after being eaten they become eyes and return to the ghost house.",
      "criticalPath": true,
      "storyId": "US-003",
      "acIndex": 2
    },
    {
      "scenario": "Score reaches 10,000 points and extra life is awarded",
      "description": "Collects enough points to exceed 10,000, then verifies an extra life indicator appears on the HUD.",
      "criticalPath": true,
      "storyId": "US-004",
      "acIndex": 1
    },
    {
      "scenario": "Mute button silences all audio and can be toggled back on",
      "description": "Clicks the mute toggle, confirms no audio is audible during gameplay, then re‑enables sound and verifies audio resumes.",
      "criticalPath": true,
      "storyId": "US-005",
      "acIndex": 2
    },
    {
      "scenario": "High‑score entry persists after reload",
      "description": "After Game Over with a qualifying score, enters initials, saves, reloads the page, and checks the new score appears in the high‑score list.",
      "criticalPath": true,
      "storyId": "US-008",
      "acIndex": 1
    },
    {
      "scenario": "Offline play after initial load",
      "description": "Loads the game once online to populate the cache, then switches the browser to offline mode, reloads, and verifies the game starts and is playable.",
      "criticalPath": true,
      "storyId": "US-007",
      "acIndex": 1
    },
    {
      "scenario": "Activate color‑blind mode and verify ghost colors change",
      "description": "Toggles the color‑blind palette via the UI and checks that ghost sprites use the alternative colors throughout the level.",
      "criticalPath": true,
      "storyId": "US-009",
      "acIndex": 1
    },
    {
      "scenario": "Responsive layout across multiple viewports",
      "description": "Runs the game in three viewport sizes (375x667, 1280x720, 2560x1440) and asserts the canvas maintains aspect ratio and UI elements remain accessible.",
      "criticalPath": true,
      "storyId": "US-010",
      "acIndex": 0
    },
    {
      "scenario": "Keyboard navigation of menus with focus outlines",
      "description": "Uses Tab/Enter to navigate Start screen menu items and verifies a visible focus outline appears on each focused element.",
      "criticalPath": true,
      "storyId": "US-009",
      "acIndex": 0
    },
    {
      "scenario": "Game over flow with restart button",
      "description": "Lets the player lose all lives, confirms Game Over screen appears, clicks Restart, and verifies the game returns to the Start screen ready for a new session.",
      "criticalPath": true,
      "storyId": "US-006",
      "acIndex": 3
    }
  ],
  "coverageTargets": {
    "unit": 85,
    "integration": 70,
    "e2e": 100
  }
}
