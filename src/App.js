// import Text from './Text.js';
// import Page from './Page.js';
import Page1 from './Page1.js';
import Page2 from './Page2.js';
import Page3 from './Page3.js';
import Page4 from './Page4.js';
import Pages12 from './Pages12.js';
import Pages34 from './Pages34.js';
import './App.css';



function App() {
  return (
    // should each page be a class (i.e. <Page1 />) or should they all be 1 class (i.e. <Page content = "" />)
    <div className="App">
      <Page1 color='black'/>
      {/* <Pages12 /> */}
      {/* <Pages34 /> */}
    </div>
  );

  const App = () => {
    const handleClick = event => {
      // 👇️ refers to the image element
      console.log(event.target);
  
      console.log('Image clicked');
    };
}
}
export default App;
