import Stage from './components/Stage';
import { useState } from 'react';

const App: React.FC = () => {

  const [started, setStarted] = useState(false);
if (!started) {
  return (
  <div className="start-screen">
        <h1>DATLUJ.cz</h1>
        <p>Stiskni Start a pojď na to! </p>
        <button className="start-btn" onClick={() => setStarted(true)}>
          Start
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Datlování aneb Datluj.cz</h1>
      <Stage />
    </div>
  );
};

export default App;