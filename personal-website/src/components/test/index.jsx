import {motion} from 'framer-motion';
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

const AnimButton = ({text, linkTo}) => {
    return(
        <Link to={linkTo}>
        <Button as={motion.button}  
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.2 }}>
      {text}
      </Button>
      </Link>
    )
};



export default AnimButton;