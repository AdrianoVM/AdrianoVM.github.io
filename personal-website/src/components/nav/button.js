import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import {motion} from 'framer-motion';


const NavButton = props => {
    const {linkTo} = props;
    return(
            <NavLink to={linkTo} className="mx-2">
              <Button variant="outline-secondary" as={motion.button}  
                whileHover={{ scale: [null, 1.15, 1.1] }}
                transition={{ duration: 0.2 }}>
                {props.children}
              </Button>
            </NavLink>
    )};

export default NavButton;