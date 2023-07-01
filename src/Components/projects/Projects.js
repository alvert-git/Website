import React from 'react'
import './Projects.css'
import image from '../../Assets/4.png'
import image2 from '../../Assets/5.png'
import {AiFillGithub} from 'react-icons/ai'

const Projects = () => {
  return (
    <>
    <h1 className='topic'>My Projects</h1>
    <div class="all-card">
  <div class="card">
    <div class="card-img">
      <h2 className='name'>SI Calculator</h2>
      <img className='img_profile' src={image}/>
    </div>
    <div class="card-text"><p>This is a Simple Interest Calculator which takes three value and calculate the result and display answer . This was created using React library.</p></div>
    <div class="read-more">
    <a href="https://github.com/alvert-git/Simple-Interest-Calculator" target='_blank'>
      <button className='button_project'><AiFillGithub/>  Code</button>
      </a>
      <a href="https://alvert-git.github.io/Simple-Interest-Calculator/" target='_blank'>
    <button className='button_project'>Live Demo</button>
    </a>
    </div>
  </div>
  <div class="card">
    <div class="card-img">
      <h2 className='name'>Todo App</h2>
      <img className='img_profile' src={image2}/>
    </div>
    <div class="card-text"><p>This is a Todo App which adds items and has a button to delete item.This project was created using React library</p></div>
    <div class="read-more">
    <a href="https://github.com/alvert-git/Todo-App" target='_blank'>
    <button className='button_project'><AiFillGithub/>  Code</button>
    </a>
    <a href="https://alvert-git.github.io/Todo-App/" target='_blank'>

    <button className='button_project'>Live Demo</button>
    </a>
    
    </div>
  </div>
</div>
    </>
  )
}

export default Projects
