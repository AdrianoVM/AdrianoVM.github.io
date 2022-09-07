import React from 'react';
import englishFlag from '../images/Flag_of_the_United_Kingdom.svg'
import { faGlobeAmericas, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SkillCard from '../components/card/skillsCard';

const Skills = () => {
    return (
      <div className="container-fluid mt-2">
      <div className="row flex-xl-nowrap justify-content-center">
      <main className="col-lg-11 col-xl-9 col-xxl-8 py-md-3 ps-xl-5 text-center" role="main">
        <h1 className="display-1 hello pb-5" id="intro">Skills</h1>
        <p className="my-3 m-md-3">
            Here is an unordered list of my skills, it is separated in two parts: <br/>
            <a href="#languages"><b>Languages</b></a> and <a href="#tools"><b>Technologies</b></a>,
            which include programming languages, front-end tools, and any other tool which might be of interest.
        </p>
        <h2 className="link-target" id="languages"><FontAwesomeIcon icon={faGlobeAmericas}/> Languages</h2>
        <div className="row row-cols-sm-2 row-cols-lg-3" >
        <div className="mb-4">
        <SkillCard title={"English"} img={<img src={englishFlag} className="card-img-top" alt="Flag of the United Kingdom"/>}>
        Proficiency: Bilingual <br/> TOEFL iBT score of 110 (November 2020), Cambridge English level 3 C2 certificate (2018).
        </SkillCard>
        </div>
        </div>
      
        <h2 className="link-target" id="tools"> <FontAwesomeIcon icon={faToolbox}/> Technologies</h2>
      
      
      </main>
      </div>
      </div>
    );
  };
    
  export default Skills;