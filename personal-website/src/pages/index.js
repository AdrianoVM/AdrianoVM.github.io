import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Card from '../components/card';
import Timeline from '../components/card/timeline';
// import MyEval from 'fontawesome.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { fas } from 'fontawesome.macro'

const Home = () => {
  return (
    <div className="container-fluid mt-2">
      <div className="row flex-xl-nowrap justify-content-center">

        <main className="col-lg-11 col-xl-9 col-xxl-8 py-md-3 text-center" role="main">
        
          <h1 className="display-1 hello pb-5 link-target" id="intro">Hello there, <br/> Welcome to my website! </h1>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-5 col-md-2">
                <img src="images/adriano.png" alt="Picture of Adriano Viegas Milani" className="img-fluid float-start"/>
              </div>
              <div className="col-5 col-md-2"><i className="fas fa-long-arrow-alt-left"></i> This is me.</div>
              <div className="col-12 col-md-8 text-start">
                <p className="my-3 m-md-3">
                <fontawesome icon={fas('square')}/>
                  My name is <b>Adriano Viegas Milani</b>,
                  and this is my website.
                  It is separated in 3 parts: <br/> Overview (this page), <a href="projects.html">Projects</a>, and <a href="skills.html">Skills</a>. <br/>
                  I’m currently in the 1st year of the Master in Computer Science at EPFL in Switzerland.
                  In this page you can find my education, achievements, and interests below.
                  
                </p>
              </div>
            </div>
          </div>
        

                  
          <h2 className="link-target" id="education"><i className="fas fa-user-graduate"></i> Education</h2>



          <Timeline></Timeline>

          

          <h2 className="link-target" id="achievements"><i className="fas fa-medal"></i> Achievements</h2>

          <div className="position-relative overflow-hidden p-3 p-md-5 my-3 m-md-3 text-center bg-light">
            <p className="lead"><i className="fas fa-star"></i> Best demo/poster award for <a href="projects.html#forest-savr">Forest SaVR</a> at the 2020 GI VR/AR Workshop in Trier, Germany. <i className="fas fa-star"></i></p>
          </div>
          <div className="position-relative overflow-hidden p-3 p-md-5 my-3 m-md-3 text-center bg-light">
            <p className="lead"><i className="fas fa-star"></i> 3rd worldwide on the first round of logic challenge <a href="https://www.algorea.org/">Algoréa</a> in 2018 <i className="fas fa-star"></i></p>
          </div>


          <h2 className="link-target" id="sp"><i className="far fa-file-alt"></i> Skills and Projects</h2>

          <p className="my-3 m-md-3">
            <a className="btn btn-outline-secondary mx-2" href="skills.html">See Skills <i className="fas fa-arrow-alt-circle-right"></i></a>
            <a className="btn btn-outline-secondary mx-2" href="projects.html">See Projects <i className="fas fa-arrow-alt-circle-right"></i></a>
          </p>


          <h2 className="link-target" id="interests"><i className="fas fa-dice-d6"></i> Interests</h2>
          <p className="my-3 m-md-3"><i className="fas fa-tools"></i> This part is not complete yet. <i className="fas fa-tools"></i></p>
          My interests include Virtual reality, AI, Machine learning, Computer vision, Video Games and Serious games.
          

        </main>
      </div>
    </div>
  );
};
  
export default Home;