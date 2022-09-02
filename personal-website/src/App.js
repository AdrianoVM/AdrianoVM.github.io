import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { Nav, Button, Alert, Breadcrumb, Card } from 'react-bootstrap'

import {motion} from 'framer-motion';
import AnimButton from './components/test'
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

function App() {
  return (

    <Router>
    <div className="App">
      <header className="App-header">
      
        <Card className='mb-3' style={{color: "#000"}}>
          <Card.Img />
          <Card.Body>
            <Card.Title>
              Card Example
            </Card.Title>
            <Card.Text>
              This is an example me learning
            </Card.Text>
            <Button variant='primary'>Read More</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item active>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test2</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant='success'>This is a butan</Alert>
        <Button as={motion.button}  
        whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.2 }}>
      Test Buttons
      </Button>
      <AnimButton text={"mhh"} linkTo={"/projects"}/>
        
      </header>
      <NavB></NavB>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/skills" element={<Skills />}/>
      </Routes>
    </div>
    </Router>

    
  );
}

export default App;
