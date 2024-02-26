
import Row from "./timeline";
import Card from '../card';

const TimelineEducation = () => {
  return(
      <div>
        <Row color="epfl" nb={4} content={
          <Card title={"EPFL"} date={"2021-2024"} color={"epfl"} percent={100}>
          Master in Computer Science. Specialization in Signals Images and Interfaces.
         </Card>
        }/>

        <div className="row justify-content-center">
            <div className="vl col-1 unilu" style={{height: '5rem'}}></div>
            <div className="col-11 d-md-none"></div>
        </div>
        <Row color="kyoto" nb={3} content={
          <Card title={"Kyoto University"} date={"2020-2020"} color={"kyoto"} percent={100} >
          Mobility semester in spring 2020.<br/> All grades between A and A+ (85-100).
        </Card>
        }/>
        
        <Row color="unilu" nb={2} content={
          <Card title={"University of Luxembourg"} date={"2018-2021"} color={"unilu"} percent={100} >
          Bachelor in Computer Science, average of 17.8/20.
        </Card>
        }/>
        
        <Row color="vauban" nb={1} content={
          <Card title={"Vauban"} date={"2003-2018"} color={"vauban"} percent={100} >
          French High School of Luxembourg.<br/> Scientific section with specialization in mathematics. <br/>
          Baccalauréat mention Très bien
        </Card>
        }/>
        
        <div className="row justify-content-center">
          <div className="vl col-1 mt-1 vauban" style={{ height: 5 }} ></div>
          <div className="col-11 d-md-none"></div>
        </div>

      </div>
  )
};


export default TimelineEducation;