import React from 'react'
import './about.css'
import dp from '../../assets/dp.png'
import shadp from '../../assets/shagufta.PNG'

const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={shadp} alt="About_Image" />
        </div>
      </div>
      <div className="about__content">
        <p>
        I'm Bangalore based software engineer, working @ <span style={{fontSize:"18px", fontWeight:"bold"}}>Processridge</span>.<br></br>
        <br></br>
        Ex-software engineer @ <span style={{fontSize:"18px", fontWeight:"bold"}}>LTIMindtree</span>, aspiring to be a fullstack dev<br></br>
        <br></br>
        I possess expertise in <b>HTML, CSS, JavaScript,</b> and <b>React</b>.<br></br>
        Intermediate knowledge in <b>MongoDB</b>. <br></br>
        <br></br>
        I have interviewed freshers and reviewed their production code.<br></br>
        Engaged with team to deliver optimized code.<br></br>
        <br></br>
        In my free time, I enjoy DIY projects, building games using <b>Unity</b> and build project with <b>different technologies</b>.<br></br>
        <br></br>
        #Quick Learner😎
        </p>
       <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>

    </div>
    </section>
  )
}

export default About