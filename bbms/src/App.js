import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import index from './components/index';
import dashboard from './components/dashboard';
import faq from './components/faq';
import feedback from './components/feedback';
import aboutus from './components/aboutus';
import Footer from './components/footer';

import './pages/styles.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Use a React.Fragment to wrap your routes */}
        <React.Fragment>
          {/* <div className="App"> */}
            {/* <Navigation /> */}
  
            <Route path="/" element={<dashboard />} />
            <Route path="/faq" element={<faq />} />
            <Route path="/feedback" element={<feedback />} />
            <Route path="/aboutus" element={<aboutus />} />
            
            
          {/* </div> */}
        </React.Fragment>
      </Routes>
    </Router>
  );
}

export default App;
