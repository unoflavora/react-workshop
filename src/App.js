import { useState } from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import toped from './assets/toped.png';
import './styles.css';

function App() {
  const [surprise, setSurprise] = useState(false);
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={surprise ? 250 : 0}
        onConfettiComplete={(confetti) => {
          setSurprise(false);
          confetti.reset();
        }}
      />
      <div className="container">
        <div className="image">
          <img src={toped} alt="toped" />
        </div>
        <h1 className="title">Hello! Welcome to Tokopedia DevCamp 2022</h1>
        <button type="button" disabled={surprise} className="button" onClick={() => setSurprise(!surprise)}>
          Click For a Surprise
        </button>
      </div>
    </>
  );
}

export default App;
