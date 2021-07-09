import './App.css';
import StarrySky from './components/background/StarrySky.js';

function App() {
  return (
    <div className="App">
      <p>A</p>
      {/* BG needs to be the last element and be fixed */}
      <StarrySky />
    </div>
  );
}

export default App;
