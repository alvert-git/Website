import './nav.css'
import React, { useState } from 'react'
import {FaBars } from 'react-icons/fa'
import {RxCross2} from 'react-icons/rx'


const Nav = () => {
  const [isicon1,setIsicon1] = useState(true)
  
  const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
  const change_icon = ()=>{
    setIsicon1(!isicon1)
  }

  return (
    <div>
      <nav className = "navbar">
        <div className="title">Portfolio</div>
        <div>
            <ul className={click ? "links" : "links active"}>
              <li> <a href="#profile">Home</a></li>
             <li> <a href="#about">About</a></li>
             <li> <a href="#projects">Projects</a></li>
              <li> <a href="#contact">Contacts</a></li>
               </ul>
               
          </div>
          <div id='mobile' onClick={handleClick}>
          {isicon1 ? <FaBars onClick={change_icon} /> : <RxCross2 onClick={change_icon} />}
          
          </div>
    </nav>
    
    </div>
  )
}

export default Nav
