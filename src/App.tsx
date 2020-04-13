import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from './routes'

import GlobalContext from './context/Global/Global.context'

function App() {
  
  return (
    <GlobalContext.Provider value={{}}>
      <Router>
        { Routes() }
      </Router>
    </GlobalContext.Provider>
  );
}

export default App; 
