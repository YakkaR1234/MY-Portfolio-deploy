import './MyWork.css'
import theme from '../../assets/theme_pattern.svg'
import mywork from '../../assets/mywork_data'
import showmore from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest work</h1>
            <img src={theme} alt="" />
        </div>
        <div className="mywork-container">
            {mywork.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={showmore} alt="" />
        </div>
    </div>
  )
}

export default MyWork
