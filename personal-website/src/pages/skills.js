import React, {useState, useEffect} from 'react';
import englishFlag from '../images/Flag_of_the_United_Kingdom.svg'
import frenchFlag from '../images/Flag_of_France.svg'
import brazilianFlag from '../images/Flag_of_Brazil.svg'
import italianFlag from '../images/Flag_of_Italy.svg'
import latexLogo from '../images/LaTeX_logo.svg'
import { faGlobeAmericas, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faPython, faUnity, faHtml5, faCss3Alt, faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SkillCard from '../components/card/skillsCard';
import { Row } from 'react-bootstrap';
import {LayoutGroup, motion} from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

const Skills = () => {
  const [skillOpen, setSkillOpen] = useState(new Array());
  //Window size to render the skillCards differently
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const MIcon = motion(FontAwesomeIcon)
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };}, []);
  
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
        <LayoutGroup>
        <Row className='justify-content-evenly align-items-center'>
          <SkillCard title={"English"} skillOpen={skillOpen} setSkillOpen={setSkillOpen} listId={"lang-en"} width={windowSize.innerWidth}
          img={<motion.img layout src={englishFlag} className="card-flag" alt="Flag of the United Kingdom"/>}>
          <b>Proficiency: Bilingual</b> <br/> TOEFL iBT score of 110 (November 2020), Cambridge English level 3 C2 certificate (2018).
          </SkillCard>
          <SkillCard title={"French"} skillOpen={skillOpen} setSkillOpen={setSkillOpen} listId={"lang-fr"} width={windowSize.innerWidth}
          img={<motion.img layout src={frenchFlag} className="card-flag" alt="Flag of France"/>}>
          <b>Proficiency: Native</b> <br/> Studied in a French school, this is the language I have the most control over.
          </SkillCard>
          <div className="w-100 d-none d-sm-block d-lg-none"></div>
          <SkillCard title={"Portuguese"} skillOpen={skillOpen} setSkillOpen={setSkillOpen} listId={"lang-br"} width={windowSize.innerWidth}
          img={<motion.img layout src={brazilianFlag} className="card-flag" alt="Flag of Brazil"/>}>
          <b>Proficiency: Native</b> <br/> I am Brazilian.
          </SkillCard>
          <SkillCard title={"Italian"} skillOpen={skillOpen} setSkillOpen={setSkillOpen} listId={"lang-it"} width={windowSize.innerWidth}
          img={<motion.img layout src={italianFlag} className="card-flag" alt="Flag of Italy"/>}>
          <b>Proficiency: Elementary</b> <br/> Learned for 3 years in school, also my second nationality.
          </SkillCard>
        </Row>
      
        
        
        <motion.h2 layout="position" className="link-target" id="tools"> <FontAwesomeIcon icon={faToolbox}/> Technologies</motion.h2>

        <Row className='justify-content-evenly justify-content-md-center align-items-center'>
        <SkillCard title={"Python"} skillOpen={skillOpen} setSkillOpen={setSkillOpen} listId={"skill-py"} width={windowSize.innerWidth}
          icon={<MIcon icon={faPython}/>} style={{backgroundColor: '#306998'}} stars={3}>
          Learned through many courses at the University of Luxembourg.
        </SkillCard>
        <SkillCard title={"Unity"} skillOpen={skillOpen} setSkillOpen={setSkillOpen} listId={"skill-unity"} width={windowSize.innerWidth}
          icon={<MIcon icon={faUnity}/>} style={{backgroundColor: '#dddddd'}} stars={3}>
          Learned through the <HashLink to="/projects#forest-savr">Forest SaVR</HashLink> and <HashLink to="/projects/#hunger-slayer">Hunger Slayer</HashLink> projects.
        </SkillCard>
        <SkillCard title={"C-Sharp"} skillOpen={skillOpen} setSkillOpen={setSkillOpen} listId={"skill-CSharp"} width={windowSize.innerWidth}
          icon={"C#"} style={{backgroundColor: '#1E9E25'}} stars={3}>
          Learned through Unity with the <HashLink to="/projects#forest-savr">Forest SaVR</HashLink> and <HashLink to="/projects/#hunger-slayer">Hunger Slayer</HashLink> projects.
        </SkillCard>
        <div className="w-100 d-none d-lg-block"></div>
        <SkillCard title={"HTML & CSS"} skillOpen={skillOpen} setSkillOpen={setSkillOpen} listId={"skill-html"} width={windowSize.innerWidth}
          icon={<motion.div><nobr><MIcon icon={faHtml5}/> & <MIcon icon={faCss3Alt}/></nobr></motion.div>} style={{backgroundColor: '#E44D26'}} stars={3}>
          Learned through the <HashLink to="/projects#bsp1">Visual Representation of Legal Concepts</HashLink>, <HashLink to="/projects#proof-guide">Proof Guide</HashLink> projects, and when building this website.
        </SkillCard>
        <SkillCard title={"Bootstrap"} skillOpen={skillOpen} setSkillOpen={setSkillOpen} listId={"skill-boot"} width={windowSize.innerWidth}
          icon={<MIcon icon={faBootstrap}/>} style={{backgroundColor: '#7255AF'}} stars={3}>
          Learned mainly through the <HashLink to="/projects#proof-guide">Proof Guide</HashLink> project and when building this website.
        </SkillCard>
        <SkillCard title={"React"} skillOpen={skillOpen} setSkillOpen={setSkillOpen} listId={"skill-react"} width={windowSize.innerWidth}
          icon={<MIcon icon={faReact}/>} style={{backgroundColor: '#61dafb'}} stars={2}>
          Learned when rebuilding this website.
        </SkillCard>
        <div className="w-100 d-none d-lg-block"></div>
        <SkillCard title={"LaTeX"} skillOpen={skillOpen} setSkillOpen={setSkillOpen} listId={"skill-latex"} width={windowSize.innerWidth}
          icon={<motion.img layout src={latexLogo} className="img-fluid col-9" alt="Logo of Latex"/>} style={{backgroundColor: '#407D7F'}} stars={2}>
          Learned through all bachelor semester projects, when writing the reports, and many other courses.
        </SkillCard>
        </Row>
        </LayoutGroup>
      </main>
      </div>
      </div>
    );
  };
    
//Also for window size
function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}
  export default Skills;