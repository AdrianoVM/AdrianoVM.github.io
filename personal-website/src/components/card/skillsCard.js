import {motion} from 'framer-motion';
import classnames from 'classnames';
import { ProgressBar } from 'react-bootstrap';

const SkillCard = props => {
    const {title, img, icon, style, percent} = props;
    return(

    <motion.div className="card text-center h-100" whileHover={{ scale: [null, 1.04] }} transition={{ duration: 0.2 }}>
        {img != null && img}
        {icon != null && 
        <div className="card-img-top icon-card" style={style}>
            <h1 className="card-title position-absolute top-50 start-50 translate-middle" >{icon}</h1>
        </div>
        }
            
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {icon != null && 
        <ProgressBar striped variant="success" now={percent}/>
        }
        <p className="card-text">{props.children} </p>
        </div>
    </motion.div>
    )
};



export default SkillCard;