import {Link} from 'react-router-dom';
import Hero from './Hero';
import logo from '../assets/images/logo.png';

const Header = () => {
  const showMenu = () => {
    document.getElementById ('navLinks').style.right = '0';
  };

  const hideMenu = () => {
    document.getElementById ('navLinks').style.right = '-200px';
  };

  return (
    <header>
      <nav>
        <a className="logo" href="/">
          <img src alt="Clg Logo" />
        </a>
        <h1>SUBHASH INTER COLLEGE</h1>
        <div className="nav-links" id="navLinks">
          <i className="fa fa-times" onClick={hideMenu} />
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/Courses">COURSES</Link>
            </li>
            <li>
              <Link to="/About">ABOUT</Link>
            </li>
            <li>
              <Link to="/Contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <i className="fa fa-bars" onClick={showMenu} />
      </nav>
      <Hero />
    </header>
  );
};

export default Header;