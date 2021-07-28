import { React, useState } from 'react';
import './NavBar.css';

function NavBar() {
  const [show, setShow] = useState(false);
  const items = ['home', 'projects', 'toolbox', 'about', 'contact'];
  return (
    <nav>
      <div className="menu-icon" onClick={() => setShow(!show)}>
        <div className={`bar-1 ${show ? 'active' : ''}`}></div>
        <div className={`bar-2 ${show ? 'active' : ''}`}></div>
        <div className={`bar-3 ${show ? 'active' : ''}`}></div>
      </div>
      <div
        className="nav-list"
        onClick={() => setShow(!show)}
        style={{
          transform: `${show ? 'translateX(0)' : 'translateX(100%)'}`,
        }}
      >
        {items.map((item, index) => {
          return <NavItem item={item} index={index} show={show} key={index} />;
        })}
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
