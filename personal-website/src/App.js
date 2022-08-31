import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

import { Nav, Button, Alert, Breadcrumb, Card } from 'react-bootstrap'

function App() {
  return (

    
    <div className="App">
      <header className="App-header">
      <Nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">AVM</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="projects.html">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="skills.html">Skills</a>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
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
        <Button>Test Button</Button>
        
      </header>
    </div>
  );
}

export default App;
