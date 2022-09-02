import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Timeline from '../components/card/timeline';

import { faArrowAltCircleRight, faArrowLeftLong, faDiceD6, faFileAlt, faMedal, faStar, faTools, faUserGraduate  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavButton from '../components/nav/button';


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
              <div className="col-5 col-md-2"><FontAwesomeIcon icon={faArrowLeftLong}/> This is me.</div>
              <div className="col-12 col-md-8 text-start">
                <p className="my-3 m-md-3">
                  My name is <b>Adriano Viegas Milani</b>,
                  and this is my website.
                  It is separated in 3 parts: <br/> Overview (this page), <a href="projects.html">Projects</a>, and <a href="skills.html">Skills</a>. <br/>
                  I’m currently in the 1st year of the Master in Computer Science at EPFL in Switzerland.
                  In this page you can find my education, achievements, and interests below.
                  
                </p>
              </div>
            </div>
          </div>
        

                  
          <h2 className="link-target" id="education"><FontAwesomeIcon icon={faUserGraduate}/> Education</h2>



          <Timeline></Timeline>

          

          <h2 className="link-target" id="achievements"><FontAwesomeIcon icon={faMedal}/> Achievements</h2>

          <div className="position-relative overflow-hidden p-3 p-md-5 my-3 m-md-3 text-center bg-light">
            <p className="lead"><FontAwesomeIcon icon={faStar}/> Best demo/poster award for <a href="projects.html#forest-savr">Forest SaVR</a> at the 2020 GI VR/AR Workshop in Trier, Germany. <FontAwesomeIcon icon={faStar}/></p>
          </div>
          <div className="position-relative overflow-hidden p-3 p-md-5 my-3 m-md-3 text-center bg-light">
            <p className="lead"><FontAwesomeIcon icon={faStar}/> 3rd worldwide on the first round of logic challenge <a href="https://www.algorea.org/">Algoréa</a> in 2018 <FontAwesomeIcon icon={faStar}/></p>
          </div>


          <h2 className="link-target" id="sp"><FontAwesomeIcon icon={faFileAlt}/> Skills and Projects</h2>

          <p className="my-3 m-md-3">
            <NavButton linkTo={"/skills"}>
              See Skills <FontAwesomeIcon icon={faArrowAltCircleRight}/>
            </NavButton>
            <NavButton linkTo={"/projects"}>
              See Projects <FontAwesomeIcon icon={faArrowAltCircleRight}/>
            </NavButton>
          </p>


          <h2 className="link-target" id="interests"><FontAwesomeIcon icon={faDiceD6}/> Interests</h2>
          <p className="my-3 m-md-3"><FontAwesomeIcon icon={faTools}/> This part is not complete yet. <FontAwesomeIcon icon={faTools}/></p>
          My interests include Virtual reality, AI, Machine learning, Computer vision, Video Games and Serious games.
          

        </main>
      </div>
    </div>
  );
};
  
export default Home;