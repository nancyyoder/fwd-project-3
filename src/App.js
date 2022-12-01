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
import Pages12 from './Pages12.js';
import Pages34 from './Pages34.js';


function App() {
  return(
    <BrowserRouter>
            <div className="container">
                <Switch> 
                    <Route path="/Page1" component={Page1} />
                    <Route path="/Page2" component={Page2} />
                    <Route path="/Pages12" component={Pages12} />
                    <Route path="/Pages34" component={Pages34} />
                </Switch>
            </div>
       </BrowserRouter>
  );
}

export default App;
