import Accordion from 'react-bootstrap/Accordion';
import { HashLink } from 'react-router-hash-link';
import { faArrowAltCircleRight, faVrCardboard, faTree, faToolbox, faStar, faMouse, faCube, faPen, faFingerprint, faBookOpen, faImage} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Publications() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><b><FontAwesomeIcon icon={faBookOpen}/> Entangled Gazes: Reconstituting the Stereoscopic Box Set with LLMs and Virtual Reality <FontAwesomeIcon icon={faImage}/></b></Accordion.Header>
        <Accordion.Body>
          Published in the SIGGRAPH Asia 2025 Art Papers.<br/>

          More details in <a href={"https://epfl-emplus.github.io/EntangledGazes/"}>the paper website <FontAwesomeIcon icon={faArrowAltCircleRight}/></a><br/><br/>
          <b>Abstract:</b><br/>
          This paper presents a computational framework for critically reinterpreting colonial-era stereoscopic box sets.
          Using James Ricalton's China through the Stereoscope (1901) as a case study, we deconstruct its linear narrative using NLP methods for thematic modeling, semantic mapping, and colonial language identification.
          This analysis informs two complementary artworks in a large-scale 360° VR environment that enables three-dimensional viewing of stereoscopic photographs.
          Cross Eyed offers a guided experience, using the thematic models as lenses for inquiry and visually distinguishing identified rhetoric.
          Latent Cartographies, in contrast, empowers users to freely navigate the archive’s raw semantic space, fostering diverse modes of experiential engagement with contested heritage.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><b><FontAwesomeIcon icon={faVrCardboard}/> Forest SaVR: A Virtual-Reality Serious Game to Raise Awareness of Deforestation <FontAwesomeIcon icon={faTree}/></b></Accordion.Header>
        <Accordion.Body>
          Published as a chapter in the 2025 "Engineering Educational Games for a Sustainable Society" <br/>

          More details in <HashLink to="/projects#forest-savr3">project page <FontAwesomeIcon icon={faArrowAltCircleRight}/></HashLink><br/><br/>
          <b>Abstract:</b><br/>
          Deforestation is significantly shaping the climate and contributing to global warming. However, the issue often is perceived as abstract or geographically distant and thus hard to relate to.
          Forest SaVR is a virtual reality (VR) serious game project responding to the growing disconnect between environmental awareness and proactive behavioral changes.
          By immersing users in realistic forest environments, Forest SaVR engages them in witnessing the progressive deterioration of a forest, from pristine conditions to deforested and degraded states, while offering interactive opportunities to mitigate these outcomes.
          Central research questions include the following: How can VR enhance environmental awareness through immersive and interactive experiences? Can challenge-based serious games influence user behavior and foster greater environmental responsibility?
          Forest SaVR integrates these inquiries by combining task-based and experiential learning. Players are guided through objective-driven activities, enhanced by techniques like flash-forwards and points of interest (POIs) that visualize the impact of human action.
          Users transition from observers to active participants, undertaking tasks such as extinguishing fires, planting trees, stopping illegal logging, or addressing forest pests.
          These tasks symbolize real-world conservation efforts and help raise awareness of deforestation and its broader environmental impacts, including climate change.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><b><FontAwesomeIcon icon={faToolbox}/> Cybersickness Assessment Framework(TestBed): Towards a Standardization of Experiments <FontAwesomeIcon icon={faVrCardboard}/></b></Accordion.Header>
        <Accordion.Body>
          Published in arXiv e-prints in 2025 <br/>

          <b>Abstract:</b><br/>
          Investigating cybersickness (CS) in virtual reality (VR) often requires significant resources to create the VR environment and manage other experiment-related aspects.
          Additionally, slight differences in VR content across studies can lead to conflicting results. To address these challenges, we propose a standardized assessment framework to facilitate cybersickness research.
          The main goal is to enable consistent and comparable CS-related experiments. By establishing this common foundation, researchers can better evaluate and compare the impact of various factors on cybersickness.
          We provide a comprehensive explanation of the conceptual designs, detail the technical implementation, and offer instructions for using the proposed framework.
          Lastly, we conclude by discussing the limitations and potential avenues for future development.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><b><FontAwesomeIcon icon={faMouse}/> Comparison of Mouse, 6DoF Controller and Pen Interactions on a Glasses-Free 3D Display <FontAwesomeIcon icon={faCube}/></b></Accordion.Header>
        <Accordion.Body>
        Published in the 2024 IEEE GEM Conference on Gaming, Entertainment and Media. No link Available yet. <br/>
        
        More details in <HashLink to="/projects#3dinteractions">project page <FontAwesomeIcon icon={faArrowAltCircleRight}/></HashLink><br/><br/>
        <b>Abstract:</b><br/>
        3D displays are becoming available to mainstream consumers, offering the ability to view and interact with 3D content without wearing AR/VR glasses.
        This paper reports the findings of a user study that compares the performance of a range of different input devices for 3D creation tasks on a 3D display.
        The first-time use performance of a mouse, a tracked 6DoF controller, and a pen on a graphics tablet (without display) are evaluated in an office setting for a series of 3D sketching, painting and docking tasks.
        The main finding is that the three input modalities provide similar levels of precision, but for 3D sketching and docking, the 6DoF controller has significantly shorter execution times, fewer interactions, and is more enjoyable than other devices, at the cost of increased fatigue.
        For surface painting and regular UI interaction, the mouse is more accurate, without any speed differences.
        Many participants reported the graphics tablet pen as being confusing or frustrating to use, frequently resulting in longer task times and more errors.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header><b><FontAwesomeIcon icon={faFingerprint}/> Comparison of XR Game Controller Trigger Input Versus Isometric Thumb and Index Finger Pressure Input on a Stylus <FontAwesomeIcon icon={faPen}/></b></Accordion.Header>
        <Accordion.Body>
        Published in the 2024 IEEE GEM Conference on Gaming, Entertainment and Media. No link Available yet. <br/>
        
        More details in <HashLink to="/projects#pressure">project page <FontAwesomeIcon icon={faArrowAltCircleRight}/></HashLink><br/><br/>
        <b>Abstract:</b><br/>
        Pressure sensitive inputs are an important feature for many XR design and creativity applications.
        This is typically accomplished using the trigger input on the default platform 6DoF controller.
        This paper reports the findings of a pilot user study that compares the performance of the default platform 6DoF controller trigger with an isometric force sensor integrated into the barrel of a prototype stylus device.
        The force sensor on the prototype stylus is activated with either the thumb or the index finger.
        The result of the 12-person pilot study shows that mean throughput of stylus index finger interactions is higher than the stylus thumb usage and default controller trigger usage;
        These differences were not statistically significant, showcasing that both stylus inputs have no major disadvantage compared to the standard that is the controller.
        Subjectively, stylus index finger pressure control was the preferred interaction technique for most participants.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header><b><FontAwesomeIcon icon={faVrCardboard}/> Cybersickness Assessment Framework <FontAwesomeIcon icon={faToolbox}/></b></Accordion.Header>
        <Accordion.Body>
          Published in the 2023 IEEE Conference on Virtual Reality and 3D User Interfaces. Available <a href='https://ieeexplore.ieee.org/abstract/document/10108853'>here</a>.<br/>
          More details in <HashLink to="/projects#csaf">project page <FontAwesomeIcon icon={faArrowAltCircleRight}/></HashLink><br/><br/>
          <b>Abstract:</b><br/>
          Studies of cybersickness (CS) often require a significant investment in creating the primary VR environment and other experiment-related features.
          In addition, minor differences in VR content in independent studies may lead to opposite results.
          This motivates us to introduce a standardized CS assessment framework to facilitate the development of CS-related experiments.
          This paper describes the concept of the framework, the current progress of the technical implementation, and future goals.

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header><b><FontAwesomeIcon icon={faTree}/> Forest SaVR <FontAwesomeIcon icon={faVrCardboard}/></b></Accordion.Header>
        <Accordion.Body>
        Published in the 2020 GI VR / AR Workshop, Gesellschaft für Informatik. Available <a href='https://dl.gi.de/server/api/core/bitstreams/43625e2e-995c-439f-a85b-ed29fffed164/content'>here</a>. <br/>
        <FontAwesomeIcon icon={faStar}/> Best demo/poster award at the conference !
        More details in <HashLink to="/projects#forest-savr">project page <FontAwesomeIcon icon={faArrowAltCircleRight}/></HashLink><br/><br/>
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