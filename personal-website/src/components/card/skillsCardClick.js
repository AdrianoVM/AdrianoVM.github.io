import {motion, AnimatePresence} from 'framer-motion';
import classnames from 'classnames';
import { ProgressBar } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillCardClick = props => {
    const {title, img, icon, style, starObjects, skillOpen, setSkillOpen, listId} = props;
    const [isOpen, setIsOpen] = useState(false);
    
    const isSkill = icon != null;
    useEffect(() => {
        const index = skillOpen.indexOf(listId);
        if (index == -1) {
            setIsOpen(false);
        }
    
    });

    function setOpen(){
        if (!isOpen) {
            var temp = [...skillOpen]
            if (skillOpen.length >= 1){
                temp.shift();
            }
            setSkillOpen([...temp, listId])
        } else {
            const index = skillOpen.indexOf(listId);
            if (index > -1) {
                var temp = [...skillOpen]
                temp.splice(index, 1)
                setSkillOpen(temp);
            }
        }
        setIsOpen(!isOpen);
        
    }
    return(

    <motion.div layout onClick={setOpen} className={classnames({"col-5 col-sm-5 col-md-4 col-lg-3" : !isOpen}, {"col-6 col-md-5 col-lg-4" : isOpen},"h-100 my-4")}
    transition={{ duration: 0.3, ease: "easeInOut" }}>
        <motion.div className="text-center h-100" whileHover={{ scale: [null, 1.04] }} transition={{ duration: 0.2 }}
        style={{boxShadow: '5px 5px 8px rgba(0,0,0,0.5)',
        borderRadius: 'calc(.25rem - 1px)',
        cursor: 'pointer'}}>
        {img != null && img }
        {icon != null && 
        <motion.div layout className="card-img-top icon-card" style={style}>
        
            <motion.h1 className="card-title position-absolute bottom-40 start-50 translate-middle-x col-9 col-sm-6 col-md-6" >{icon}</motion.h1>
            
            <motion.div className='position-absolute bottom-25 start-50 translate-middle-x w-100'>{starObjects}</motion.div>
            
        </motion.div>
        }
        {(isOpen)&&
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 1}}
        className="card-body px-1">
        <h5 className="card-title">{title}</h5>
        
        <motion.p className="card-text">{props.children} </motion.p>
        </motion.div>}
        </motion.div>
        
    </motion.div>
    )
};

export default SkillCardClick;