import Accordion from 'react-bootstrap/Accordion';
import { HashLink } from 'react-router-hash-link';
import { faArrowAltCircleRight, faVrCardboard, faTree, faToolbox} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Publications() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><b><FontAwesomeIcon icon={faVrCardboard}/> Cybersickness Assessment Framework <FontAwesomeIcon icon={faToolbox}/></b></Accordion.Header>
        <Accordion.Body>
          Published in the 2023 IEEE Conference on Virtual Reality and 3D User Interfaces. Available <a href='https://ieeexplore.ieee.org/abstract/document/10108853'>here</a>. More details in <HashLink to="/projects#csaf">project page <FontAwesomeIcon icon={faArrowAltCircleRight}/></HashLink><br/><br/>
          <b>Abstract:</b><br/>
          Studies of cybersickness (CS) often require a significant investment in creating the primary VR environment and other experiment-related features.
          In addition, minor differences in VR content in independent studies may lead to opposite results.
          This motivates us to introduce a standardized CS assessment framework to facilitate the development of CS-related experiments.
          This paper describes the concept of the framework, the current progress of the technical implementation, and future goals.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><b><FontAwesomeIcon icon={faVrCardboard}/> Forest SaVR <FontAwesomeIcon icon={faTree}/></b></Accordion.Header>
        <Accordion.Body>
        Published in the 2020 GI VR / AR Workshop, Gesellschaft für Informatik. Available <a href='https://dl.gi.de/server/api/core/bitstreams/43625e2e-995c-439f-a85b-ed29fffed164/content'>here</a>. More details in <HashLink to="/projects#forest-savr">project page <FontAwesomeIcon icon={faArrowAltCircleRight}/></HashLink><br/><br/>
        <b>Abstract:</b><br/>
        Deforestation is a serious issue affecting climate and contributing to global warming.
        This demonstration presents Forest SaVR, an interactive virtual-reality application where users can explore a realistic forest environment,
         to immersively experience the various stages and effects of deforestation
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Publications;