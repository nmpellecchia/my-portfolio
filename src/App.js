import './App.css';
import StarrySky from './components/background/StarrySky.js';
import Projects from './components/infoDisplay/Projects';
import { projects } from './components/infoDisplay/projectInstances';

function App() {
  return (
    <div className="App">
      <Projects projects={projects} />
      {/* BG needs to be the last element and be fixed */}
      <StarrySky />
    </div>
  );
}

export default App;
