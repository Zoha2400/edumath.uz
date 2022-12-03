import React from 'react'
import './footer.scss';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer(props) {
  return (
    <section className='Footer'>
        <div className='footer-content container'>

            <div className={props.theme ? 'icons dayIcons' : 'icons nightIcons'}>
                <a href="#" id='tg'><TelegramIcon/></a>
                <a href="#" id='inst'> <InstagramIcon/></a> 
                <a href="#" id='tw'><TwitterIcon/></a>
            </div>

        </div>
    </section>
  )
}

export default Footer