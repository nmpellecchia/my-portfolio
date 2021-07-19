import './App.css';
import StarrySky from './components/background/StarrySky.js';
import Projects from './components/infoDisplay/Projects';
import { projects } from './components/infoDisplay/projectInstances';
import Toolbox from './components/infoDisplay/Toolbox';

function App() {
  return (
    <div className="App">
      {/* <h1 className="big-title">Projects</h1>
      <Projects projects={projects} />
      <h1 className="big-title">ToolBox</h1>
      <Toolbox /> */}
      {/* BG needs to be the last element and be fixed */}
      <StarrySky />
    </div>
  );
}

export default App;
