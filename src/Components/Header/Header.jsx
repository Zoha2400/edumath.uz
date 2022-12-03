import {React} from 'react'
import './header.scss'
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from "react-router-dom";
import Search from './Search/Search';


function Header(props) {

  return (
    <section className='Header'>
        <div className='header-content container'>

            <Link to="/">
                <p className='Brand'>Edu<span>Math</span>.com</p>
            </Link>
            
           <Search forImportArrs={props.forImportArrs} />

            <div className='menu'>
                
                <div className={props.theme ? 'theme btnThemeDay' : 'theme btnThemeNight'} onClick={() => {props.theme ? props.setTheme(false) : props.setTheme(true)}}>
                    {props.theme ? <LightModeIcon/> : <NightsStayIcon/>}
                </div>

                <NavLink to="/Math">
                    <p className='menuItem'>
                        <span>Математика</span>
                    </p>
                </NavLink>
                <NavLink to="/DTM2022">
                    <p className='menuItem'>
                        <span>DTM 2022</span>
                    </p>
                </NavLink>
            </div>
                
        </div>
    </section>
  )
}

export default Header