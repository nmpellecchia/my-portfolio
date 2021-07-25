import './App.css';
import StarrySky from './components/background/StarrySky.js';
import Projects from './components/infoDisplay/Projects';
import { projects } from './components/infoDisplay/projectInstances';
import Toolbox from './components/infoDisplay/Toolbox';
import Contact from './components/contact/Contact';
import AboutMe from './components/infoDisplay/About';
import MyName from './components/name/Name';

function App() {
  return (
    <div className="App">
      <MyName />
      {/* <h1 className="big-title">Projects</h1>
      <Projects projects={projects} />
      <h1 className="big-title">ToolBox</h1>
      <Toolbox />
      <h1 className="big-title">About me</h1>
      <AboutMe />
      <Contact /> */}
      {/* BG needs to be the last element and pos. fixed */}
      <StarrySky />
    </div>
  );
}

export default App;
