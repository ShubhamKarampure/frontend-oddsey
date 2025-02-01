import { NavLink } from 'react-router-dom';
import classes from './navbar.module.scss';
import hamIcon from '/icons/ham.svg';
import { useState } from 'react';

export interface Props {
  title: string;
  menuItems: string[];
}

function Navbar({ menuItems }: Props) {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={classes.navbar}>
      

      <>
        <button
          onClick={() => setToggle(!toggle)}
          className={classes.hamButton}
        >
          <img src={hamIcon} alt="hamburger" />
        </button>
        <ul data-toggle={toggle}>
          {menuItems.map((item) => (
            <li key={item}>
              <NavLink
                to={`/sorting-visualizer/${item}`}
                className={({ isActive }) => (isActive ? classes.active : '')}
                onClick={() => setToggle(false)}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    </nav>
  );
}

export default Navbar;
