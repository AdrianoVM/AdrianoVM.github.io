import 'bootstrap/dist/css/bootstrap.min.css'
import { adri } from '../images';
import React from 'react';
import TimelineEducation from '../components/timelines/timelineEducation';
import { Link } from 'react-router-dom';
import { faArrowAltCircleRight, faArrowLeftLong, faDiceD6, faFileAlt, faMedal, faStar, faUserGraduate, faNewspaper, faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavButton from '../components/nav/button';
import { HashLink } from 'react-router-hash-link';
import Interests from '../components/interests';
import Publications from '../components/publications/publications';
import TimelineWork from '../components/timelines/timelineWork';


const Home = () => {
  return (
    <div className="container-fluid mt-2">
      <div className="row flex-xl-nowrap justify-content-center">

        <main className="col-lg-11 col-xl-9 col-xxl-8 py-md-3 text-center" role="main">
        
          <h1 className="display-1 hello pb-5 link-target" id="intro">Hello there, <br/> Welcome to my website! </h1>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-6 col-md-3">
                <img src={adri} alt="Portrait of Adriano Viegas Milani" className="img-fluid float-start rounded"/>
              </div>
              <div className="col-6 col-md-2"><FontAwesomeIcon icon={faArrowLeftLong}/> This is me.</div>
              <div className="col-12 col-md-7 text-start">
                <p className="my-3 m-md-3">
                  My name is <b>Adriano Viegas Milani</b>,
                  and this is my website.
                  It is separated in 3 parts: <br/> Overview (this page), <Link to="projects">Projects</Link>, and <Link to="skills">Skills</Link>. <br/>
                  I just finished my Master in Computer Science at EPFL in Switzerland, and I am curently looking for work! <br/>
                  In this page you can find my work experience, education, achievements, and interests below.
                  
                </p>
              </div>
            </div>
          </div>
        

          <h2 className="link-target" id="work"><FontAwesomeIcon icon={faBriefcase}/> Work Experience</h2>

          <TimelineWork></TimelineWork>
                  
          <h2 className="link-target" id="education"><FontAwesomeIcon icon={faUserGraduate}/> Education</h2>



          <TimelineEducation></TimelineEducation>

          <h2 className='link-target' id="publications"><FontAwesomeIcon icon={faNewspaper}/> Publications</h2>
          <Publications></Publications>

          {/* <h2 className="link-target" id="achievements"><FontAwesomeIcon icon={faMedal}/> Achievements</h2>

          <div className="position-relative overflow-hidden p-3 p-md-4 my-3 m-md-3 text-center grey-bg">
            <p className="lead"><FontAwesomeIcon icon={faStar}/> Best demo/poster award for <HashLink to="/projects#forest-savr">Forest SaVR</HashLink> at the 2020 GI VR/AR Workshop in Trier, Germany. <FontAwesomeIcon icon={faStar}/></p>
          </div>
          <div className="position-relative overflow-hidden p-3 p-md-4 my-3 m-md-3 text-center grey-bg">
            <p className="lead"><FontAwesomeIcon icon={faStar}/> 3rd worldwide on the first round of logic challenge <a href="https://www.algorea.org/">Algoréa</a> in 2018 <FontAwesomeIcon icon={faStar}/></p>
          </div> */}


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
          {/* <p className="my-3 m-md-3"><FontAwesomeIcon icon={faTools}/> This part is not complete yet. <FontAwesomeIcon icon={faTools}/></p> */}

          <Interests></Interests>

        </main>
      </div>
    </div>
  );
};
  
export default Home;