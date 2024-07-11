import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import me from '../../assets/me.jpg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={me} alt="profile_img" className='hero-img' />
        <h1>
        <span>I'am yashod,</span>
        a undergraduate student</h1>
        <p>An Entrepreneur|A Developer<br></br>Undergraduate|A React Developer</p>
        <div className="hero-action">
            <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact' >Connect with me</AnchorLink> </div>
            </div>
      
    </div>
  )
}

export default Hero
