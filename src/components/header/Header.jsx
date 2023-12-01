import React from 'react'
import './header.css'
import CTA from './CTA'
import nobg from '../../assets/nobg.png'
import dp2 from "../../assets/shagufta2-removebg-preview.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
       <h5>Hello I'm</h5> 
       <h1>SHAGUFTA Z</h1>
       <h5 className="text-light">Aspiring Fullstack Developer</h5>
       <CTA/>
       <HeaderSocials/>
       <div className="me">
          <img className="image" src={dp2} alt="me" />
       </div>

       <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header