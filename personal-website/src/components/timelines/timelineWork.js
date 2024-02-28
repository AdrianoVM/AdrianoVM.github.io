
import Row from "./timeline";
import Card from '../card';

import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';

const TimelineWork = () => {
  let i = 0;
  return(
      <div>
        {/* <div className="row justify-content-center">
          <div className="vl col-1 mb-3 future" style={{ height: 5 }} ></div>
          <div className="col-11 d-md-none"></div>
        </div> */}

        <Row color="future" nb={i++} content={
          <Card title={"Maybe You"} date={"2024-"} color={"future"} percent={"Software Engineer"}>
          Anything that enhances users experience.
         </Card>
        }/>

        <Row color="logitech" nb={i++} content={
          <Card title={"Logitech"} date={"2023-2024"} color={"logitech"} percent={"Engineering Intern"} >
          Designing, prototyping and evaluating possible interaction techniques for 3D displays.
          More information in the future in the Projects tab.
          <br/>
          <span className="badge rounded-pill text-bg-primary m-2">Unity</span>
          <span className="badge rounded-pill text-bg-primary m-2">C#</span>
          <span className="badge rounded-pill text-bg-primary m-2">Python</span> <br/>
          
        </Card>
        }/>

        <Row color="epfl" nb={i++} content={
          <Card title={"EPFL"} date={"Spring 2023"} color={"epfl"} percent={"VR Assistant"} >
          Preparing headsets for the VR course given by Dr. Boulic. Assisting and Guiding Students on their VR Game projects
          <br/>
          <span className="badge rounded-pill text-bg-primary m-2">Unity</span>
          <span className="badge rounded-pill text-bg-primary m-2">C#</span>
          
        </Card>
        }/>
        
        <Row color="unilu" nb={i++} content={
          <Card title={"University of Luxembourg"} date={"Summer 2021"} color={"unilu"} percent={"Summer Intern"} >
          Working on version 0.4 of Forest SaVR.
          More details in the <HashLink to="/projects#forest-savr3">project page <FontAwesomeIcon icon={faArrowAltCircleRight}/></HashLink>
          <br/>
          <span className="badge rounded-pill text-bg-primary m-2">Unity</span>
          <span className="badge rounded-pill text-bg-primary m-2">C#</span>
        </Card>
        }/>
        
        <Row color="ses" nb={i++} content={
          <Card title={"SES Satellites"} date={"July 2018"} color={"ses"} percent={"Summer Intern"} >
          Satellite data analysis using VBA.
          <br/>
          <span className="badge rounded-pill text-bg-primary m-2">Excel</span>
          <span className="badge rounded-pill text-bg-primary m-2">VBA</span>
        </Card>
        }/>
        
        <div className="row justify-content-center">
          <div className="vl col-1 mt-1 ses" style={{ height: 5 }} ></div>
          <div className="col-11 d-md-none"></div>
        </div>

      </div>
  )
};


export default TimelineWork;