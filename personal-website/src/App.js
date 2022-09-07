import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import {motion} from 'framer-motion';
import NavB from './components/nav';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages';
import Projects from './pages/projects';
import Skills from './pages/skills';
import FootBar from './components/nav/footBar';
import ScrollToTop from './components/nav/scrollToTop';

function App() {
  const [expandedNav, setExpanded] = useState(false);
  return (

    <Router>
    <ScrollToTop/>
    <div className="App">

      <NavB expanded={expandedNav} setExpanded={setExpanded}></NavB>
      <div onClick={() => setExpanded(false)}>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/skills" element={<Skills />}/>
      </Routes>
      <FootBar/>
      </div>
    </div>
    </Router>

    
  );
}

export default App;
