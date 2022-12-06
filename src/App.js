import './App.css';
import NavBar from './NavBar.js';
import React from 'react';


import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Cover from './Cover.js';
import Page1 from './Page1.js';
import Page3 from './Page3.js';
import Page4 from './Page4.js';


function App() {
  let element = (

    <div className="container">
        <Routes> 
          <Route path="/Cover" element={<Cover />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page3" element={<Page3 />} />
          <Route path="/Page4" element={<Page4 />} />
        </Routes>
    </div>

  )
  return (
    <BrowserRouter>
    <NavBar />
    {element}
    </BrowserRouter>
  )

}
export default App;
