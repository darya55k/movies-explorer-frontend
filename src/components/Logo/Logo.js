import { Link } from 'react-router-dom';
import './Logo.css';

import logo from '../../images/logoeader-logo.svg';

function Logo() {
  return (
    <Link to="/">
      <img className="logo" alt="Логотип сайта" src={logo} />
    </Link>
  );
}

export default Logo;
