import classes from './navbar.module.scss';

export interface Props {
  title: string;
}

function Navbar() {
  return (
    <nav className={classes.navbar}>
      {/* <Title title={title} /> */}
    </nav>
  );
}

export default Navbar;
