import React from 'react';
import './navStyles.css';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // const navStyle = {
        //     boxSizing: 'border-box',
        //     width: '100%',
        //     height: '7%',
        //     margin: '0px',
        //     backgroundColor: 'green',
        //     color: 'white',
        //     display: 'flex',
        //     justifyContent: 'space-between',
        //     alignItems: 'center',
        //     gap: '2rem',
        //     padding: '0 1rem',
            
        // }

        // const siteTitle = {
        //     color: 'inherit',
        //     fontSize: '3rem',
        //     textDecoration: 'none',
        // }

        // const aStyles = {
        //     color: 'inherit',
        //     fontSize: '2rem',
        //     textDecoration: 'none',
            
        // }

        // const ulStyles = {
        //     padding: '0px',
        //     margin: '0px',
        //     listStyle: 'none',
        //     display: 'flex',
        //     gap: '1rem',
        // }

        return(
            <nav className='nav'>
                <a href="/">Home</a>
                <ul>
                    <li>
                        <a href="/Page1" className='active'>Poem</a>
                    </li>
                    <li>
                        <a href="/Page2">Horoscope</a>
                    </li>
                    <li>
                        <a href="/Page5">Spread</a>
                    </li>
                </ul>
            </nav>
        )
    }
}


// import { NavLink as Link } from 'react-router-dom';
// // import {
// //     Nav,
// //     NavLink,
// //     Bars,
// //     NavMenu,
// //     NavBtn,
// //     NavBtnLink,
// //   } from './NavbarElements';

//   export default class NavBar extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     render() {
//         const navBarStyles = {
//             width: '100%',
//             height: '6%',
//             display: 'flex',
//             justifyContent: 'space-between',
//             background: 'pink'
//         }

//         const navMenuStyles ={

//         }

//         const navLinkStyles ={

//         }

//         return (
//             <div classname='NavBar' style={navBarStyles}>
//                 <div classname='NavMenu' style={navMenuStyles}>
//                     <div classname="NavLink" style={navLinkStyles}>

//                     </div>
//                 </div>
//             </div>
//         )
//     }

//   }