import NavBar from './NavBar.js'
import Page1 from './Page1.js';
import Page2 from './Page2.js';
import './App.css';


function App() {
  let component
  switch(window.location.pathname) {
    case "/":
      component = <Page1 />
      break
    case "/Page1":
      component = <Page1 />
      break
    case "/Page2":
      component = <Page2 />
      break 
    case "/Page5":
      component = <Page1 />
      break
  }
  return (
    <>
      <NavBar />
      {component}
    </>
  );
}

export default App;
