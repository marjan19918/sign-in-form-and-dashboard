import React, { useState } from 'react'
import './style.scss'
import home from '../../assets/svg/home.svg'
import user from '../../assets/svg/whiteuser.svg'
import dollar from '../../assets/svg/dollar-symbol-on-circle.svg'
import logout from '../../assets/svg/logout.svg'
 import Modal from '../Modal/index'
 import Payment from '../Payment'
const Header = ({ open,handleOpen,profilephoto, credit }) => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [modalOpen,setModalOpen]=useState(false)
    const profileContent=[{img:home,text:'خانه'},{img:user,text:'پروفایل'},{img:logout,text:'خروج'}]
    return (
        <div className='header'>
           
             <div className='header-content' >
             <div className='credit'><span>ریال</span> <span className='credit-number'>{credit}</span> <span>اعتبار شما:</span></div>
             <div className='profile'>
                 <img onClick={()=>setToggleMenu(!toggleMenu)} className='img' src={profilephoto} alt='profile-photo' />
                 <span className='span'>افزایش اعتبار</span>
                     <img className='img' src={dollar} onClick={()=>{handleOpen(true)}}/>
                     
                     {
                         toggleMenu === true ?
                             <div className='profile-menue'>
                         {profileContent.map(profile=>{return(<div className='profile-menue-row' ><img className='img' src={profile.img} /><span> {profile.text}</span></div>)})}
                         
                     
                 </div> : null
                     }
                 
             </div>
             </div>
            
           
            
            
        </div>
    )
}

export default Header
