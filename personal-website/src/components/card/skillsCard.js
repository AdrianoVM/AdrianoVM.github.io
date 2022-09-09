import {motion, AnimatePresence} from 'framer-motion';
import classnames from 'classnames';
import { ProgressBar } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import SkillCardClick from './skillsCardClick';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillCard = props => {
    const {title, img, icon, style, stars, skillOpen, setSkillOpen, listId, width} = props;
    const MIcon = motion(FontAwesomeIcon);
    const isSkill = icon != null;
    const starObjects = Array.from({length: stars}, (item, index) => 
    <MIcon icon={faStar} className={"star"} key={index}/>
    );

    useEffect(() => {
        const index = skillOpen.indexOf(listId);
        if (index == -1) {
            
        }
    
    });


    if (width > 992) {
        return(
        <motion.div layout className={"col-5 col-sm-3 h-100 mb-3"} transition={{ duration: 0.5, type:"spring" }}>
        <motion.div className="card text-center h-100" whileHover={{ scale: [null, 1.04] }} transition={{ duration: 0.2 }}>
        {img != null && img }
        {isSkill && 
        <motion.div layout="position" className="card-img-top icon-card" style={style}>
            <motion.h1 className="card-title position-absolute top-50 start-50 translate-middle" >{icon}</motion.h1>
        </motion.div>
        }
        <motion.div className="card-body">
        <h5 className="card-title">{title}</h5>
        {isSkill && 
        <div>{starObjects}</div>
        
        }
        <motion.p className="card-text mt-3">{props.children} </motion.p>
        </motion.div>
        </motion.div>
        
    </motion.div>
        )
    } else {
        return(<SkillCardClick title={title} img={img} icon={icon} style={style} 
        starObjects={starObjects} skillOpen={skillOpen} setSkillOpen={setSkillOpen} listId={listId}>
            {props.children}
        </SkillCardClick>)
    }
};


export default SkillCard;