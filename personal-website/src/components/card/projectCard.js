import {motion} from 'framer-motion';
import classnames from 'classnames';

const ProjectCard = props => {
    const {title, id, subtitle, media, extra} = props;
    return(

    <div className="position-relative overflow-hidden p-3 p-md-5 my-3 m-md-3 text-center grey-bg rounded">
        <div className="col-md-10 mx-auto my-5">
          <h1 className="display-4 fw-normal link-target" id={id} >{title}</h1>
          <p className="lead">{subtitle}</p>
          <p className="text-start">
             {props.children}
            </p>
          <div>
            {media}
          </div>
          {extra}
        </div>
    </div>
    )
};



export default ProjectCard;