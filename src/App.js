import React from 'react';

import './App.css';
import './mediaqueries.css'
import Nav from './Components/nav/Nav';
import Profile from './Components/profile/Profile';
import About from './Components/about/About';
import Projects from './Components/projects/Projects';
import Contact from './Components/contact/Contact';



function App() {
  return (
    <div className="App">
      
      <Nav/>

      <Profile/>
      <About/>
      <Projects/>
      <Contact/>
      
     
    </div>
  );
}

export default App;
