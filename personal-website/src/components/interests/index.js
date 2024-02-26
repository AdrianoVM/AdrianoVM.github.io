import {motion, AnimatePresence} from 'framer-motion';
import { initialTabs as tabs } from "./tabs";
import { useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Interests = props => {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const MIcon = motion(FontAwesomeIcon);
    return(

        <div className="window">
          <Row className="interests justify-content-around">
            {tabs.map((item) => (
              <Col xs={3} lg={1}
                key={item.label}
                className={item === selectedTab ? "tab-holder selected" : "tab-holder"}
                onClick={() => setSelectedTab(item)}>
                    <motion.div className="tabs" style={{background: item.color}}>
                    <MIcon icon={item.icon}/>
                <AnimatePresence mode="wait">
                {item === selectedTab ? (
                    <motion.div className="underline" layoutId="underline" key={selectedTab ? selectedTab.icon : "empty"}
                    >
                    <MIcon icon={item.icon} style={{color: item.color}}/>
                    </motion.div>
                ) : null}
                </AnimatePresence>
              </motion.div></Col>
            ))}
          </Row>
        <div style={{height : "4rem"}}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h4>{selectedTab ? selectedTab.label : "many things"}</h4>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    )
};

export default Interests;