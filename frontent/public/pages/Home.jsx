import { NavBar } from '../../component/NavBar'
import { Button } from './button/Button'
import './Home.css'


import img from '../../public/img.jpeg'
import { AboutMe } from '../../component/aboutme/AboutMe';
import { MyWork } from '../../component/MyWork';
import { Contact } from '../../component/contact/Contact';
import { useEffect, useState } from 'react';


export function Home() {
  const [login,setlogin]=useState(null)

  useEffect(()=>{
    setlogin(localStorage.getItem('userId'))
  },[])
  return (

    <header>
      <div className='navdiv' id="home">
        <h1 className='name'>Shafna Saleem</h1>


        <NavBar />
        <a href="#mywork">
        <Button text={"CONTACT WITH ME"}  />
        </a>

      </div>
      <div className='imagediv'><br /><br /><br />
        <img className='img' src={img}></img><br />
        <h1 class="hero-title">Hello! I'm <span>Shafna Saleem</span></h1>
        <p class="hero-description">
          I'm a passionate <span class="highlight">MERN Stack Developer</span> turning ideas into interactive web applications.
          I love building <strong>scalable</strong> and <strong>user-friendly</strong> digital solutions.
        </p>


      </div><br /><br /><br /><br /><br />
      <div id="about">
        <AboutMe />
      </div>
      <div id="mywork">
        <MyWork />
      </div>
      <div id="contact">
        <Contact />
    
      </div>


    </header>


  )

}