import {motion} from 'framer-motion';
import classnames from 'classnames';
import { ProgressBar } from 'react-bootstrap';

const Card = ({title, date, color, percent, text}) => {
    return(

    <div className="card text-center h-100">
        <div className={classnames('card-img-top icon-card', color)} >
        <h1 className="card-title position-absolute top-50 start-50 translate-middle text-white pb-2" >{title}</h1>
        </div>
            
        <div className="card-body">
        <h5 className="card-title">{date}</h5>
            <ProgressBar animated variant="success" now={percent}/>
        
        <p className="card-text">{text}</p>
        </div>
    </div>
    )
};



export default Card;