import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import Main from './Main';

function App() {
  return(
    <div>
      <Router>
        <Main />
      </Router>  
    </div>
  )
}

export default App;
