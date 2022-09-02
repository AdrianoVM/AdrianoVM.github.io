import {motion} from 'framer-motion';
import classnames from 'classnames';
import { ProgressBar } from 'react-bootstrap';

const Card = props => {
    const {title, date, color, percent} = props;
    return(

    <div className="card text-center h-100">
        <div className={classnames('card-img-top icon-card', color)} >
        <h1 className="card-title position-absolute top-50 start-50 translate-middle text-white pb-2" >{title}</h1>
        </div>
            
        <div className="card-body">
        <h5 className="card-title">{date}</h5>
            <ProgressBar striped animated={percent < 100 } variant="success" now={percent}/>
        
        <p className="card-text">{props.children} </p>
        </div>
    </div>
    )
};



export default Card;