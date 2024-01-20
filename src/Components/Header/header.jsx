import './header.css'
import logo from '../../assets/images/logo.png'
// import line from '../../assets/images/hrline.png'
import mainimg from '../../assets/images/Frame 3.png'
const Header =(()=>{
    return(
        <>
             <div className="header-con">
                <div className='head'>
                   <div className='head-img'>
                     <img src={logo} alt='logo' className='logo'/>
                   </div>
                        
                         <hr className='head-hr'/>
                   
                    
                </div>
                <div className='mainimage'>
                      <img src={mainimg} alt='mainimg'/>
                </div>
             </div> 
        </>
    )
})
export default Header