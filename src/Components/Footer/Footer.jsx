import './Footer.css'

import yashod from '../../assets/Yashod.png'


const Footer = () => {
  return (
    <div id='footer' className='Footer'>
      <div className="footertop">
        <div className="footer-top-left">
            <img src={yashod} alt="" />
            
        </div>

        </div>
        <hr/>
            <div className="footer-bootom">
                <p className="footer-bottom-left">2024 Yashod.All right are resverd</p>
                
      </div>
    </div>
  )
}

export default Footer
