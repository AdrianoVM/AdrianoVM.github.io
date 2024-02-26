
import classnames from 'classnames';

export default function Row({content, color, nb}) {
  let lineOrder;
  let cardOrder;
  let emptyOrder;
  if (nb%2 === 0) {
    emptyOrder = "order-md-1";
    lineOrder = "order-md-2";
    cardOrder = "order-md-3";
  } else {
    cardOrder = "order-md-1";
    lineOrder = "order-md-2";
    emptyOrder = "order-md-3";
  }
  return(
    <div className="row justify-content-center">

      <div className={classnames("vl col-1 order-1", color, lineOrder)}></div>
      <div className={classnames("d-none d-md-block col-md-5", emptyOrder)}></div>
      <div className={classnames("col-11 col-md-5 order-2", cardOrder)}>
        <div className="mb-4">
          {content}
        </div>
      </div>
    </div>
  )
} 
