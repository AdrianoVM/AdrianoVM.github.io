import {motion} from 'framer-motion';
import classnames from 'classnames';
import { ProgressBar } from 'react-bootstrap';

const Card = props => {
    const {title, date, color, percent} = props;
    return(

    <motion.div className="card text-center h-100" id={title} 
    whileHover={{ scale: [null, 1.04] }} transition={{ duration: 0.2 }}>
        <div className={classnames('card-img-top icon-card', color)} >
        <h1 className="card-title position-absolute top-50 start-50 translate-middle text-white pb-2" >{title}</h1>
        </div>
            
        <div className="card-body">
        <h5 className="card-title">{date}</h5>
            {percent > 0 ? <ProgressBar striped animated={percent < 100 } variant="success" now={percent}/> : null}
        
        <p className="card-text">{props.children} </p>
        </div>
    </motion.div>
    )
};



export default Card;