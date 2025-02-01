import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import classes from './title.module.scss';



function Title() {
  return (
    <div className={classes.title}>
      <Link to="/" className={classes.home}>
        <ArrowLeft size={24} />
      </Link>
      <div className={classes.logoContainer}>
        <img src="public/images/logo.png" alt="Logo" className="max-w-full h-max" />
      </div>
    </div>
  );
}

export default Title;
