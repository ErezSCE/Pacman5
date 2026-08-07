import React from 'react';

interface StartScreenProps {
  onStart: () => void;
  highScores?: Array<{ initials: string; score: number }>;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart, highScores }) => {
  return (
    <div className="start-screen" style={styles.container}>
      <h1 style={styles.title}>Pac‑Man 5</h1>
      {highScores && highScores.length > 0 && (
        <div style={styles.highScoreBox}>
          <h2>High Scores</h2>
          <ol>
            {highScores.slice(0, 5).map((hs, idx) => (
              <li key={idx}>
                {hs.initials}: {hs.score}
              </li>
            ))}
          </ol>
        </div>
      )}
      <button onClick={onStart} style={styles.startButton}>
        Start Game
      </button>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: 'sans-serif',
  },
  title: {
    fontSize: '4rem',
    marginBottom: '2rem',
  },
  highScoreBox: {
    marginBottom: '2rem',
    textAlign: 'center',
  },
  startButton: {
    padding: '1rem 2rem',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
};
