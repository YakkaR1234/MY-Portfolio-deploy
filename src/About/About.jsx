import './About.css'
import theme_pattern from ".././assets/theme_pattern.svg"
import me from '.././assets/me.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
        <div className="about-left">
            <img src={me} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I attend University Bedfordshire as an Undergraduate.<br></br>studying a degree in software and computer science.</p>
                <p>Additinally doing a  bissuns through Social medias</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>reactjs</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>nodejs</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"30%"}}/></div>

            </div>

        </div>
        </div>

        <div className="about-achievments">
            <div className="about-achievment">
                <h1>2</h1>
                <p>Years of Experience</p>
            </div>
            <hr/>

            <div className="about-achievment">
                <h1>8+</h1>
                <p>Projects Completed</p>
            </div>
            <hr/>

            <div className="about-achievment">
                <h1>8+</h1>
                <p>Happy Clients</p>
            </div>
            
        </div>
      
    </div>
  )
}

export default About
