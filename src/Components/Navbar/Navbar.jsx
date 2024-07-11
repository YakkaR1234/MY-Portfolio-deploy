import React, { useRef, useState } from 'react';
import './Navbar.css'
import {Link} from 'react-scroll';
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_icon from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import yashod from '../../assets/Yashod.png'


const Navbar = () => {

  const[menu,setMenu] =useState("home");

  const menuReft=useRef();

  const openMenu=()=>{
    menuReft.current.style.right="0"
  }
  const closeMenu=()=>{
    menuReft.current.style.right="-350px"
  }

  return (
    <div className='navbar'>
      <div className="logo">
        <img src={yashod} alt="logo"/></div>
        
        <img src={menu_icon} alt="" onClick={openMenu}  className='nav-mob-open'/>
        <ul ref={menuReft} className="nav-menu">
          <img src={menu_close}  onClick={closeMenu} alt="" className='menu-mob-close' />
            <li> <AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink> {menu==="home"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>

        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink> </div>
      
    </div>
  )
}

export default Navbar
