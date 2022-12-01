// import Text from './Text.js';
// import Page from './Page.js';

// import Page3 from './Page3.js';
// import Page4 from './Page4.js';
import './App.css';
import { 
  BrowserRouter,
  Switch,
  Route,
  // Link
   } from "react-router-dom";


import Page1 from './Page1.js';
import Page2 from './Page2.js';

function App() {
  return(
    <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route path="/Page1" component={Page1} />
                    <Route path="/Page2" component={Page2} />
                </Switch>
            </div>
       </BrowserRouter>
  );
}

export default App;
