import {motion} from 'framer-motion';
import classnames from 'classnames';
import { ProgressBar } from 'react-bootstrap';

const Card = props => {
    const {title, date, color, percent} = props;
    return(

    <motion.div className="card text-center h-100" id={title} 
    whileHover={{ scale: [null, 1.04] }} transition={{ duration: 0.2 }}>
        <div className={classnames('card-img-top icon-card', color)} >
        <h1 className="card-title text-white pb-2 card-icon-title" >{title}</h1>
        </div>
            
        <div className="card-body">
        <h5 className="card-title">{date}</h5>
            {Number.isFinite(percent) ? 
            percent > 0 ? <ProgressBar striped animated={percent < 100 } variant="success" now={percent}/> : null
            : 
            <h4 className='alert alert-success'>{percent}</h4>
            }

        
        <p className="card-text">{props.children} </p>
        </div>
    </motion.div>
    )
};



export default Card;