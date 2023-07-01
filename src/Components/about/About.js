import './About.css'
import React from 'react'
import image from '../../Assets/3.png'
import {FaAward , FaGraduationCap} from 'react-icons/fa'
import {GiBrain} from 'react-icons/gi'

const About = () => {
  return (
    <>
    <br />
    <br />
    <div className='all_content'>
    <h1 className='first'>About Me</h1>
    <div className='img'>
        <img src={image} alt="Profile Picture"  className='photo'/>
    </div>

    <div className='achievements'>

    <div className='experience  container' >
        <FaAward/>
        <h1>Experience</h1>
         <p>Fresher</p>
        <h3>Frontend Development</h3>
     </div>
     <div className="education container">
        <FaGraduationCap/>
        <h1>Education</h1>
        <p>Bachelor Of Computer Application (BCA)</p>
        <p>Currently Studing</p>
        <h3>Bachelor Degree</h3>
     </div>
     <div className='skills container'>
        <GiBrain/>
        <h1>Skills</h1>
        <li>Html : Intermediate</li>
        <li>Css : Intermediate</li>
        <li>JaveScript : Intermediate</li>
        <li>React : Intermediate</li>
        <li>Communication</li>
        <li>Team work</li>
     </div>

    </div>
    <br />
    <div className='more'>
        <p>Hello! I'm Albert Belbase, an aspiring front-end developer who is passionate about creating beautiful and user-friendly websites. While I may be a fresher with no professional experience yet, 
          I am equipped with a solid foundation in HTML, CSS, and JavaScript. </p>
        <p>Beyond my technical skills, I possess excellent communication and teamwork abilities. I believe in the power of effective collaboration and value the ideas and perspectives of others.
           I am a fast learner and thrive in environments that encourage continuous improvement.</p>
    </div>
    {/* <div className='talk'>
    <button className='chat'>Let's Talk</button>
    </div> */}

    </div>
    </>
  )
}

export default About
