import { React, useState } from 'react';
import './NavBar.css';

function NavBar() {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="menu-icon" onClick={() => setShow(!show)}>
        <div className={`bar-1 ${show ? 'active' : ''}`}></div>
        <div className={`bar-2 ${show ? 'active' : ''}`}></div>
        <div className={`bar-3 ${show ? 'active' : ''}`}></div>
      </div>
      <div className="nav-list">
        {/* <a className="nav-item" href="#">
          Home
        </a>
        <a className="nav-item" href="#projects">
          Projects
        </a>
        <a className="nav-item" href="#toolbox">
          Toolbox
        </a>
        <a className="nav-item" href="#about">
          About
        </a>
        <a className="nav-item" href="#contact">
          Contact
        </a> */}
        <NavItem item="home" show={show} index={1} />
        <NavItem item="projects" show={show} index={2} />
        <NavItem item="toolbox" show={show} index={3} />
        <NavItem item="about" show={show} index={4} />
        <NavItem item="contact" show={show} index={5} />
      </div>
    </nav>
  );
}

function NavItem(props) {
  const delay = 100;

  return (
    <a
      href={`#${props.item === 'home' ? '' : props.item}`}
      className="nav-item"
      style={{
        transform: `${props.show ? 'translateX(0)' : 'translateX(100%)'}`,
        transitionDuration: '500ms',
        transitionDelay: `${delay * props.index}ms`,
      }}
    >
      {props.item.charAt(0).toUpperCase() + props.item.slice(1)}
    </a>
  );
}

export default NavBar;
