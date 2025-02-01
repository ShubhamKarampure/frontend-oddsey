import AppTour from '@pathFinder/components/app-tour/app-tour';
import CellInfo from '@pathFinder/components/cell-info/cell-info';
import classes from './navbar.module.scss';

export interface Props {
  title: string;
  children?: React.ReactNode;
}

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.left}>
        <AppTour />
      </div>
      <CellInfo />
    </nav>
  );
}

export default Navbar;
