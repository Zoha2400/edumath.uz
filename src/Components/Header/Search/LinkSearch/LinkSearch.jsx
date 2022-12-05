import { NavLink } from 'react-router-dom';
import React from 'react'
import '../../header.scss';


function LinkSearch(props) {
  

  const setActive = ({isActive}) => isActive ? 'linkSearch linkSearchMenu' : 'linkSearchMenu';

  function closeWin(){
    props.inpSearch.value = '';
    props.blockSearch.style.display = 'none'; 
}   

  return (
    <NavLink onClick={closeWin} className={setActive} key={props.key} to={'/Math' + props.link}>
      <div className='msearch-item-wrapper'>
        <div className='msearch-item'>
            <span>{props.theme}</span>
            <p className='link-item'>{'/Math' + props.link}</p>
        </div>
      </div>
    </NavLink>
  )
}

export default LinkSearch