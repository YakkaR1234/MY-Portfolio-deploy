import './Contact.css';
import theme from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import linkedin_icon from '../../assets/linkedin.logo.jpeg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/in/yashod-peiris-13a2102aa/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BpQxuLPZATK2fwv2XdOIZtw%3D%3D';
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt="theme pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>let s talk</h1>
          <p>I m currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail icon" />
              <p>yashodpeiris@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call icon" />
              <p>0766477436</p>
            </div>
            <div className="contact-detail">
              <img src={linkedin_icon} alt="LinkedIn icon" />
              <p 
                onClick={handleLinkedInClick} 
                className="linkedin-link"
              >
                Yashod Peiris
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
