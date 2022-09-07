import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import {motion} from 'framer-motion';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FootBar = () => {
    return(
      <footer className="grey-bg text-center p-2 p-md-4 mt-5">
      <p>
        Contact: &nbsp; <FontAwesomeIcon icon={faLinkedin}/> <a href="https://www.linkedin.com/in/adriano-viegas-milani" target="_blank" className="pe-3">LinkedIn</a>
        <FontAwesomeIcon icon={faEnvelope}/> <a href="mailto:a.viegasmilani@gmail.com" target="_blank" className="pe-3">Email</a>
      </p>
      
    </footer>
    )};

export default FootBar;