
import Row from "./timeline";
import Card from '../card';

const TimelineWork = () => {
  return(
      <div>
        <Row color="epfl" nb={4} content={
          <Card title={"Maybe You"} date={"2024-"} color={"epfl"} percent={0}>
          Master in Computer Science. Specialization in Signals Images and Interfaces.
         </Card>
        }/>

        <Row color="logitech" nb={3} content={
          <Card title={"Logitech"} date={"2023-2024"} color={"logitech"} percent={0} >
            <h3>Engineering Intern</h3>
          Designing, prototyping and evaluating possible interaction techniques for 3D displays.
          <br/>
          <div className="badge rounded-pill text-bg-primary m-2">Unity</div>
          <div className="badge rounded-pill text-bg-primary m-2">C#</div>
          <div className="badge rounded-pill text-bg-primary m-2">Python</div> <br/>
          
        </Card>
        }/>
        
        <Row color="unilu" nb={2} content={
          <Card title={"University of Luxembourg"} date={"2018-2021"} color={"unilu"} percent={100} >
          Bachelor in Computer Science, average of 17.8/20.
        </Card>
        }/>
        
        <Row color="ses" nb={1} content={
          <Card title={"SES Satellites"} date={"Summer 2018"} color={"ses"} percent={0} >
          French High School of Luxembourg.<br/> Scientific section with specialization in mathematics. <br/>
          Baccalauréat mention Très bien
          <br/>
          <div className="badge rounded-pill text-bg-primary m-2">Excel</div>
          <div className="badge rounded-pill text-bg-primary m-2">VBA</div>
        </Card>
        }/>
        
        <div className="row justify-content-center">
          <div className="vl col-1 mt-1 vauban" style={{ height: 5 }} ></div>
          <div className="col-11 d-md-none"></div>
        </div>

      </div>
  )
};


export default TimelineWork;