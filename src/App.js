import './App.css';
import NavBar from './NavBar.js';


import { 
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Page1 from './Page1.js';
import Page2 from './Page2.js';
import Pages34 from './Pages34.js';
// import Page5 from './Page5.js';

function App() {
  let component = (

    <div className="container">
        <Switch> 
          <Route path="/Page1" component={Page1} />
          {/* <Route path="/" component={} /> */}
            {/* <Route path="/Page2" component={Page2} /> */}
            <Route path="/Pages12" component={Page1} />
            <Route path="/Pages34" component={Pages34} />
            {/* <Route path="/Page5" component={Page5} /> */}
        </Switch>
    </div>

  )
  return (
    <BrowserRouter>
    <NavBar />
    {component}
    </BrowserRouter>
  )

}
export default App;




// import NavBar from './NavBar.js'
// import Page1 from './Page1.js';
// import Page2 from './Page2.js';
// import './App.css';


// function App() {
//   let component
//   switch(window.location.pathname) {
//     case "/":
//       component = <Page1 />
//       break
//     case "/Page1":
//       component = <Page1 />
//       break
//     case "/Page2":
//       component = <Page2 />
//       break 
//     case "/Page5":
//       component = <Page1 />
//       break
//   }
//   return (
//     <>
//       <NavBar />
//       {component}
//     </>
//   );
// }

// export default App;
