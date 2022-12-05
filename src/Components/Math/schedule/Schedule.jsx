import React from 'react'
import '../math.scss';
import MathMenuitem from '../mathMenuitem/MathMenuitem';

function ScheduleMath(props) {

  let items = props.nameArr.map((i) => {
    return(
      <MathMenuitem link={i[1]} theme={i[0]} key={i[2]}/>
    )
  });

  return (

    <section>
        <p className='nameSchedule'>{props.nameSchedule}</p>

        <div className='scheduleMatht'>
          <div className='scheduleMatht-wrapper'>
            {items}
          </div>
      </div>     
    </section>

  )
}

export default ScheduleMath