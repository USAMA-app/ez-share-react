import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer: React.FC = () => (
  <footer>
    <div>
    <img src='user.png' alt='' className='user_i'/>EasyShare by  <a href="https://github.com/USAMA-app">Osama Alam</a>
    </div>
     <div>
     
      <img src='softcube.jpg' alt='' className='soft_cube'/><a href="https://thesoftcube.com/">For More Info Visit Our Organization</a>
    </div> 
  </footer>
)

export default Footer
