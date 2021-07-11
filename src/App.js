import './App.css';
import StarrySky from './components/background/StarrySky.js';
import GlassPanel from './components/windows/GlassPanel';

function App() {
  return (
    <div className="App">
      <GlassPanel></GlassPanel>
      {/* <p>A</p> */}
      {/* BG needs to be the last element and be fixed */}
      <StarrySky />
    </div>
  );
}

export default App;
