import React from 'react'
import './math.scss';
import Droby from './math-content/mathThemes/Droby';

import { Link, Routes, Route, useLocation, useParams, Outlet} from 'react-router-dom';
import ScheduleMath from './schedule/Schedule';

function Math(props) {

  // const basicMath = [
  //   ['Дроби','/droby'],
  //   ['Производные','/diff'],
  //   ['Функции','/functions']
  // ]

  // const mathAnalysis = [
  //   ['Дроби','/droby'],
  //   ['Производные','/diff'],
  //   ['Функции','/functions']
  // ]

  return (
    <section className='Math'>
        <div className='container math-wrapper'>


        <div className='container-of-schedule'>
          <ScheduleMath nameSchedule={"Школьная программа"} nameArr={props.forImportArrs[0]}/>
          <ScheduleMath nameSchedule={"Математический анализ"} nameArr={props.forImportArrs[1]}/>
        </div> 

        <MathContent/>

        </div>
    </section>
  )
}


function MathContent() {
  return(
    <div className='math-content'>
      <div className='math-text'>
        <Outlet/>
      </div>
    </div>
  )
}


export default Math