// import Text from './Text.js';
// import Page from './Page.js';
import Page1 from './Page1.js';
import Page2 from './Page2.js';
import './App.css';


function App() {
  return (
    // should each page be a class (i.e. <Page1 />) or should they all be 1 class (i.e. <Page content = "" />)
    <div className="App">
      <Page1 color='black' />
      <Page2 color='black' />
      
    </div>
  );
}

export default App;
