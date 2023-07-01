import React from 'react' 
import './Profile.css'
import image from '../../Assets/1.png'
import pdf from '../../Assets/CV.pdf'
import {AiFillInstagram , AiFillGithub  , AiFillLinkedin , AiFillFacebook} from 'react-icons/ai'

const Profile = () => {
  return (
    <>
      <div className='content'>
      <div className='text'>

      <h3>Hello I'm</h3>
      <h1>Albert Belbase</h1>
      <h2 className='post'>Frontend Developer</h2>
      <br/>
      <p>
As a frontend developer, I specialize in creating captivating and user-friendly interfaces for websites and applications. 
With a strong command of HTML, CSS, JavaScript, and Frameworks like React .


      </p>
      </div>
      <img className='Image' src = {image}  alt='Picture'/>
      
      <div className='buttons'>

      <div className='button' >
        <button className='CV' onClick={()=>{window.open(pdf)}}>Download CV</button>
        <a href="#Contacts">
        <button className='CV'>Contact Me</button>
        </a>
      </div>

      <div className='SocialMedia'>
     <a href="https://www.facebook.com/albert.belbase.12/" target='_blank'><AiFillFacebook className='icon'/></a>
     <a href="https://www.instagram.com/albertbelbase12/" target='_blank'><AiFillInstagram className='icon'/></a>
     <a href="https://github.com/alvert-git" target='_blank'><AiFillGithub className='icon'/></a>
     <a href="https://www.linkedin.com/in/albert-belbase-a8a666281/" target='_blank'>  <AiFillLinkedin className='icon'/></a> 
      
      </div>
      </div>
      </div>
    </>
  )
}

export default Profile
