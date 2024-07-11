import React from 'react'
import './Contact.css'
import theme from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import loction_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>lets talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" />
                    <p>yashodpeiris@gmail.com</p>

                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <p>0766477436</p>
                    
                </div>
                <div className="contact-detail">
                    <img src={loction_icon} alt="" />
                    <p>Panadura,Sri Lanka</p>
                </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Contact
