import React from 'react';
import './App.css';
import './navBar.css';
import { 
    BrowserRouter,
    Switch,
    Route,
    Link,
    // Link
     } from "react-router-dom";
      
import Page1 from './Page1.js';
import Page2 from './Page2.js';
import Pages34 from './Pages34.js';
import Page5 from './Page5.js';



class NavBar extends React.Component {
    render() {
        return (
          <nav className='NavBar'>
            <div>
              <br />
              <ul>
              <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Page1">Poem</Link>
                </li>
                <li>
                  <Link to="/Pages34">Horoscope</Link>
                </li>
                <li>
                  <Link to="/Page5">Game</Link>
                </li>
              </ul>
            </div>
            </nav>
          );
    }
}

export default NavBar;


// import React from 'react';
// import './navStyles.css';

// export default class NavBar extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return(
//             <nav className='nav'>
//                 <a href="/">Home</a>
//                 <ul>
//                     <li>
//                         <a href="/Page1" className='active'>Poem</a>
//                     </li>
//                     <li>
//                         <a href="/Page2">Horoscope</a>
//                     </li>
//                     <li>
//                         <a href="/Page5">Spread</a>
//                     </li>
//                 </ul>
//             </nav>
//         )
//     }
// }