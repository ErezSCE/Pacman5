# QA Lead — Test Plan

**Agent**: qa-lead  
**Generated**: 2026-08-07T23:47:31.737Z

---

## Test Plan

{
  "scope": "All acceptance criteria from all user stories are covered by the test suite.",
  "unit": [
    {
      "target": "GameEngine.runLoop",
      "description": "Ensures the main loop runs at 60fps using mocked requestAnimationFrame",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 0
    },
    {
      "target": "GameEngine.render",
      "description": "Verifies maze, Pac‑Man, ghosts, dots, fruit, and HUD are drawn at correct positions each frame",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 1
    },
    {
      "target": "GameEngine.updateState",
      "description": "Checks that movement and collision updates are reflected in the rendered output",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 2
    },
    {
      "target": "GameEngine.pauseResume",
      "description": "Tests pause and resume logic does not produce visual glitches or errors",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 3
    },
    {
      "target": "InputHandler.keyboardMapping",
      "description": "Validates arrow keys and WASD are translated into correct direction commands respecting walls",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 0
    },
    {
      "target": "InputHandler.touchButtons",
      "description": "Ensures on‑screen directional button events produce correct movement commands",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 1
    },
    {
      "target": "InputHandler.swipeDetection",
      "description": "Confirms swipe gestures are recognized and mapped to direction with low latency",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 2
    },
    {
      "target": "InputHandler.pauseGuard",
      "description": "Verifies input is ignored while the game is paused and resumes after unpausing",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 3
    },
    {
      "target": "GhostAI.chaseLogic",
      "description": "Tests each ghost's chase targeting logic (chase, ambush, flank, random)",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 0
    },
    {
      "target": "GhostAI.timerSwitch",
      "description": "Checks chase/scatter timers trigger mode switches at configured intervals",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 1
    },
    {
      "target": "GhostAI.scaredState",
      "description": "Validates ghosts enter scared state, reverse direction, flash, and become edible after power pellet",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 2
    },
    {
      "target": "GhostAI.regeneration",
      "description": "Ensures eaten ghosts turn into eyes, return to house, and regenerate correctly",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 3
    },
    {
      "target": "ScoreManager.pointAllocation",
      "description": "Verifies points are added correctly for dots, pellets, ghosts, and fruit",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 0
    },
    {
      "target": "ScoreManager.extraLife",
      "description": "Awards an extra life automatically when score reaches 10,000 points",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 1
    },
    {
      "target": "ScoreManager.lifeLoss",
      "description": "Handles collision with non‑scared ghost: life decrement, death animation, Pac‑Man reset",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 2
    },
    {
      "target": "ScoreManager.levelProgression",
      "description": "Detects when all dots/pellets are cleared and starts next level with increased speed and timers",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 3
    },
    {
      "target": "AudioManager.soundEffects",
      "description": "Plays correct sound effects for dot, pellet, ghost eat, death, fruit, extra life, and siren events",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 0
    },
    {
      "target": "AudioManager.sirenLoop",
      "description": "Loops background siren and adjusts pitch/speed as level progresses",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 1
    },
    {
      "target": "AudioManager.muteToggle",
      "description": "Silences all audio instantly and restores sound when toggled back on",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 2
    },
    {
      "target": "StartScreen.render",
      "description": "Renders title, high‑score list, and Start button on initial load",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 0
    },
    {
      "target": "CountdownOverlay.sequence",
      "description": "Displays 3‑2‑1‑GO overlay before gameplay starts",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 1
    },
    {
      "target": "PauseOverlay.display",
      "description": "Shows pause overlay and freezes the game loop when pause key is pressed",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 2
    },
    {
      "target": "GameOverScreen.flow",
      "description": "Shows final score, handles high‑score entry when qualified, and provides Restart button",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 3
    },
    {
      "target": "ServiceWorker.caching",
      "description": "Caches all static assets on first visit using Workbox precache",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 0
    },
    {
      "target": "ServiceWorker.offlineServe",
      "description": "Serves cached assets when the browser is offline, allowing full gameplay",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 1
    },
    {
      "target": "ServiceWorker.updateLogic",
      "description": "Detects asset changes, updates Service Worker, and refreshes cache accordingly",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 2
    },
    {
      "target": "HighScoreStore.loadOnStartup",
      "description": "Loads top‑10 high scores from IndexedDB at application start",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 0
    },
    {
      "target": "HighScoreStore.saveNewScore",
      "description": "Saves a qualifying new high score with player initials after Game Over",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 1
    },
    {
      "target": "HighScoreStore.persistence",
      "description": "Ensures high scores persist across page reloads and browser restarts",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 2
    },
    {
      "target": "Accessibility.focusOutline",
      "description": "All menu items receive a visible focus outline when navigated via Tab/Enter",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 0
    },
    {
      "target": "ColorBlindMode.toggle",
      "description": "Swaps ghost colors to alternative palette when color‑blind mode is activated",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 1
    },
    {
      "target": "KeyboardNavigation.only",
      "description": "Confirms the entire game can be played using only keyboard input (no mouse/touch)",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 2
    },
    {
      "target": "ResponsiveLayout.scaling",
      "description": "Calculates canvas and UI scaling proportionally from 375 px to 2560 px while preserving aspect ratio",
      "framework": "Jest",
      "storyId": "US-010",
      "acIndex": 0
    },
    {
      "target": "TouchControls.visibility",
      "description": "Displays on‑screen directional buttons on touch devices with appropriate size for tapping",
      "framework": "Jest",
      "storyId": "US-010",
      "acIndex": 1
    },
    {
      "target": "SwipeGesture.reliability",
      "description": "Ensures swipe gestures are recognized consistently across common mobile browsers",
      "framework": "Jest",
      "storyId": "US-010",
      "acIndex": 2
    },
    {
      "target": "FullGameLoop.bootSequence",
      "description": "Verifies application boots, loads assets, shows Start screen, proceeds through countdown, gameplay, pause, level transitions, and Game Over without errors",
      "framework": "Jest",
      "storyId": "US-011",
      "acIndex": 0
    },
    {
      "target": "FullGameLoop.interactions",
      "description": "All interactions (input, scoring, audio, high‑score storage, offline support) function together as expected",
      "framework": "Jest",
      "storyId": "US-011",
      "acIndex": 1
    },
    {
      "target": "Build.bundleSize",
      "description": "Checks production bundle size is under 2 MB gzip",
      "framework": "Jest",
      "storyId": "US-011",
      "acIndex": 2
    }
  ],
  "integration": [
    {
      "target": "InputHandler ↔ GameEngine",
      "description": "Direction commands from InputHandler move Pac‑Man correctly and are ignored when paused",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 0
    },
    {
      "target": "InputHandler ↔ GameEngine (pause)",
      "description": "Input is blocked during pause and resumes after unpause",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 3
    },
    {
      "target": "GhostAI ↔ GameEngine",
      "description": "Ghosts move according to their AI logic and respond to chase/scatter timers",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 0
    },
    {
      "target": "GhostAI ↔ GameEngine (scared)",
      "description": "Power pellet triggers scared state, direction reversal, flashing, and vulnerability",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 2
    },
    {
      "target": "ScoreManager ↔ GameEngine collisions",
      "description": "Collisions update score, award extra lives, and handle life loss correctly",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 0
    },
    {
      "target": "ScoreManager ↔ GameEngine level end",
      "description": "Clearing all dots triggers level progression with increased ghost speed",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 3
    },
    {
      "target": "AudioManager ↔ GameEngine events",
      "description": "Game events trigger appropriate sound effects and siren behavior, respecting mute state",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 0
    },
    {
      "target": "UI flow Start → Countdown → Game → Pause → GameOver",
      "description": "Ensures UI screens transition correctly through the full game flow",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 0
    },
    {
      "target": "ServiceWorker ↔ Network",
      "description": "Caches assets on first load, serves them offline, and updates cache on asset changes",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 0
    },
    {
      "target": "HighScoreStore ↔ UI",
      "description": "High scores load on startup, new qualifying scores are saved, and persist after reload",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 0
    },
    {
      "target": "ColorBlindMode ↔ Rendering",
      "description": "Activating color‑blind mode changes ghost palette in rendered output",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 1
    },
    {
      "target": "ResponsiveLayout ↔ Resize events",
      "description": "Layout recalculates scaling on window resize across supported breakpoints",
      "framework": "Jest",
      "storyId": "US-010",
      "acIndex": 0
    },
    {
      "target": "FullGameLoop ↔ All components",
      "description": "Boot sequence integrates asset loading, engine start, UI, input, audio, persistence, and offline support",
      "framework": "Jest",
      "storyId": "US-011",
      "acIndex": 0
    }
  ],
  "e2e": [
    {
      "scenario": "Launch game, verify Start screen title, high‑score list, and Start button; press Enter to begin countdown",
      "description": "Covers US-006 ac0 and US-011 ac0 (critical path)",
      "criticalPath": true,
      "storyId": "US-006",
      "acIndex": 0
    },
    {
      "scenario": "Observe 3‑2‑1‑GO overlay then gameplay starts",
      "description": "Covers US-006 ac1 and US-001 ac2 (critical path)",
      "criticalPath": true,
      "storyId": "US-006",
      "acIndex": 1
    },
    {
      "scenario": "Play using keyboard arrows, eat a dot, verify score increments, pause with key, verify pause overlay, resume and confirm game continues",
      "description": "Covers US-002 ac0, US-001 ac3, US-004 ac0, US-006 ac2 (critical path)",
      "criticalPath": true,
      "storyId": "US-002",
      "acIndex": 0
    },
    {
      "scenario": "On mobile viewport, tap on‑screen directional buttons to move Pac‑Man",
      "description": "Covers US-002 ac1 and US-010 ac1 (critical path)",
      "criticalPath": true,
      "storyId": "US-002",
      "acIndex": 1
    },
    {
      "scenario": "Swipe left/right/up/down on mobile, verify Pac‑Man changes direction accordingly",
      "description": "Covers US-002 ac2 and US-010 ac2 (critical path)",
      "criticalPath": true,
      "storyId": "US-002",
      "acIndex": 2
    },
    {
      "scenario": "Consume a power pellet, verify ghosts turn blue, flash, become edible, and Pac‑Man can eat them for points",
      "description": "Covers US-003 ac2 and US-004 ac0 (critical path)",
      "criticalPath": true,
      "storyId": "US-003",
      "acIndex": 2
    },
    {
      "scenario": "Accumulate 10,000 points, verify an extra life is awarded",
      "description": "Covers US-004 ac1 (critical path)",
      "criticalPath": true,
      "storyId": "US-004",
      "acIndex": 1
    },
    {
      "scenario": "Collide with a non‑scared ghost, verify life loss, death animation, and Pac‑Man reset",
      "description": "Covers US-004 ac2 (critical path)",
      "criticalPath": true,
      "storyId": "US-004",
      "acIndex": 2
    },
    {
      "scenario": "Clear all dots/pellets, verify level transition with increased ghost speed",
      "description": "Covers US-004 ac3 (critical path)",
      "criticalPath": true,
      "storyId": "US-004",
      "acIndex": 3
    },
    {
      "scenario": "After Game Over with qualifying score, enter initials, restart, and confirm new high score appears on Start screen after reload",
      "description": "Covers US-008 ac1 and US-006 ac3 (critical path)",
      "criticalPath": true,
      "storyId": "US-008",
      "acIndex": 1
    },
    {
      "scenario": "Toggle mute button during gameplay, verify all audio stops, toggle back on and verify audio resumes",
      "description": "Covers US-005 ac2 (critical path)",
      "criticalPath": true,
      "storyId": "US-005",
      "acIndex": 2
    },
    {
      "scenario": "Activate color‑blind mode via settings, verify ghost colors change to alternative palette",
      "description": "Covers US-009 ac1 (critical path)",
      "criticalPath": true,
      "storyId": "US-009",
      "acIndex": 1
    },
    {
      "scenario": "Navigate menus using Tab/Enter, ensure focus outlines are visible on each item",
      "description": "Covers US-009 ac0 (critical path)",
      "criticalPath": true,
      "storyId": "US-009",
      "acIndex": 0
    },
    {
      "scenario": "Simulate offline mode (disable network), reload page, verify game loads from cache and is fully playable",
      "description": "Covers US-007 ac1 (critical path)",
      "criticalPath": true,
      "storyId": "US-007",
      "acIndex": 1
    },
    {
      "scenario": "Verify production bundle size is under 2 MB gzip using network panel metrics",
      "description": "Covers US-011 ac2 (critical path)",
      "criticalPath": true,
      "storyId": "US-011",
      "acIndex": 2
    }
  ],
  "coverageTargets": {
    "unit": 80,
    "integration": 60,
    "e2e": 100
  }
}
