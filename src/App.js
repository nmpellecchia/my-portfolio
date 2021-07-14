import './App.css';
import StarrySky from './components/background/StarrySky.js';
import GlassPanel from './components/infoDisplay/Projects';

function App() {
  return (
    <div className="App">
      <GlassPanel type="text">
        <p>Hola amigos</p>
      </GlassPanel>
      {/* BG needs to be the last element and be fixed */}
      <StarrySky />
    </div>
  );
}

export default App;
