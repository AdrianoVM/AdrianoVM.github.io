
import Card from '.';

const Timeline = ({text, linkTo}) => {
    return(
        <div>
        <div className="row justify-content-center">

            <div className="vl col-1 order-1 order-md-2 epfl"></div>
            <div className="d-none d-md-block col-md-5 order-md-1"></div>
            <div className="col-11 col-md-5 order-2 order-md-3">
              <div className="mb-4">
                <Card title={"EPFL"} date={"2021-2023"} color={"epfl"} percent={80}>
                 Master in Computer Science. Specialization in Signals Images and Interfaces.
                </Card>
              </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="vl col-1 unilu" style={{height: '5rem'}}></div>
            <div className="col-11 d-md-none"></div>
        </div>

        <div className="row justify-content-center">
            <div className="vl col-1 order-md-1 kyoto"></div>
            <div className="d-none d-md-block col-md-5 order-md-2"></div>
            <div className="col-11 col-md-5">
              <div className="mb-4">
              <Card title={"Kyoto University"} date={"2020-2020"} color={"kyoto"} percent={100} >
                Mobility semester in spring 2020.<br/> All grades between A and A+ (85-100).
              </Card>
              </div>
            </div>
        </div>
          
        <div className="row justify-content-center">

            <div className="vl col-1 order-1 order-md-2 unilu"></div>
            <div className="d-none d-md-block col-md-5 order-md-1"></div>
            <div className="col-11 col-md-5 order-2 order-md-3">
              <div className="mb-4">
              <Card title={"University of Luxembourg"} date={"2018-2021"} color={"unilu"} percent={100} >
                Bachelor in Computer Science, average of 17.8/20.
              </Card>
              </div>
            </div>
        </div>

        <div className="row justify-content-center">

            <div className="vl col-1 order-md-1 vauban"></div>
            <div className="d-none d-md-block col-md-5 order-md-2"></div>
            <div className="col-11 col-md-5">
              <div className="mb-4">
              <Card title={"Vauban"} date={"2003-2018"} color={"vauban"} percent={100} >
                French High School of Luxembourg.<br/> Scientific section with specialization in mathematics. <br/>
                Baccalauréat mention Très bien
              </Card>
              </div>
            </div>
            
          </div>
          <div className="row justify-content-center">
            <div className="vl col-1 mt-1 vauban" style={{ height: 5 }} ></div>
            <div className="col-11 d-md-none"></div>
          </div>

        </div>
    )
};



export default Timeline;