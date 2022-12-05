import { NavLink } from 'react-router-dom';
import React from 'react'
import '../math.scss';


function MathMenuitem(props) {
  

  const setActive = ({isActive}) => isActive ? 'active-math-link linkMathMenu' : 'linkMathMenu';

  return (
    <NavLink className={setActive} to={'/Math' + props.link}>
      <p className='m-item' key={props.key}>{props.theme}</p>
    </NavLink>
  )
}

export default MathMenuitem