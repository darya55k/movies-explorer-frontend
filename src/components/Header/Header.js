import { Link } from 'react-router-dom';
import logo from '../../images/logoeader-logo.svg';
import Navigation from "../Navigation/Navigation";
import './Header.css'

function Header(props) {
    return (
        <section className={props.loggedIn ? 'header header_type_white' : 'header'}>
          <Link to="/">
            <img className="header__logo" alt="Лого" src={logo}/>
            </Link>
            <Navigation loggedIn={props.loggedIn}/>
        </section>
    )
}

export default Header;