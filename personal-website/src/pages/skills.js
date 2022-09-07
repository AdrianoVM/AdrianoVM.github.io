import React from 'react';
import englishFlag from '../images/Flag_of_the_United_Kingdom.svg'
import frenchFlag from '../images/Flag_of_France.svg'
import brazilianFlag from '../images/Flag_of_Brazil.svg'
import italianFlag from '../images/Flag_of_Italy.svg'
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
        <div className="row row-cols-sm-2 row-cols-lg-4" >
          <div className="mb-4">
          <SkillCard title={"English"} img={<img src={englishFlag} className="card-img-top" alt="Flag of the United Kingdom"/>}>
          Proficiency: Bilingual <br/> TOEFL iBT score of 110 (November 2020), Cambridge English level 3 C2 certificate (2018).
          </SkillCard>
          </div>
          <div className="mb-4">
          <SkillCard title={"French"} img={<img src={frenchFlag} className="card-img-top" alt="Flag of France"/>}>
          Proficiency: Native <br/> Studied in a French school, this is the language I have the most control over.
          </SkillCard>
          </div>
          <div className="mb-4">
          <SkillCard title={"Portuguese"} img={<img src={brazilianFlag} className="card-img-top" alt="Flag of Brazil"/>}>
          Proficiency: Native <br/> I am Brazilian.
          </SkillCard>
          </div>
          <div className="mb-4">
          <SkillCard title={"Italian"} img={<img src={italianFlag} className="card-img-top" alt="Flag of Italy"/>}>
          Proficiency: Elementary <br/> Learned for 3 years in school, also my second nationality.
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