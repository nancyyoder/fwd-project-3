import React from 'react';
import './App.css';
import './navBar.css';
import {Link} from "react-router-dom";



class NavBar extends React.Component {
    render() {
        return (
          <nav className='NavBar'>
            <div>
              <br />
              <ul>
              <li>
                  <Link to="/Cover">Cover</Link>
                </li>
                <li>
                  <Link to="/Page1">Poem</Link>
                </li>
                <li>
                  <Link to="/Page3">Horoscope</Link>
                </li>
                <li>
                  <Link to="/Page4">Game</Link>
                </li>
              </ul>
            </div>
            </nav>
          );
    }
}

export default NavBar;