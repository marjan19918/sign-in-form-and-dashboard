import React, { useState } from 'react'
import './style.scss'
import back from '../../assets/svg/undo.svg'
import user from '../../assets/svg/whiteuser.svg'
import home from '../../assets/svg/home.svg'
import dashboard from '../../assets/svg/dashboard.svg'
import boxes from '../../assets/svg/youtube.svg'
import logo from '../../assets/png/logo-type.png'
import purple from '../../assets/jpg/dashboard-compact.jpg'
const Sidebar = ({ handlepack,pack,profilephoto, profilename,firstTab,sedondTab,thirdTab }) => {
    const [packSwitch ,setPackSwitch]=useState(false)
    return (
        <div className={`${packSwitch===true ? 'side-pack' :'sidebar' }`}>
            <div className='side-top'>
                <div className='logo-cont'>
                    <img onClick={() => { setPackSwitch(!packSwitch);handlepack(!pack)}} className='img' src={purple} />
                    <span className={`${packSwitch === true ? 'pack' : 'logo-txt'}`}>نویسا</span>
                </div>
                <div  className={` ${packSwitch===true ? 'pack' : 'pack-switch' }`}>
                    <div className='rectangle'></div>
                    <div className='square'></div>
                </div>
               
            </div>
            <div className='side-content'>
                <div className={`${firstTab===true ? 'active':''} side-menu `}>
                    <div className='profile-photo'>
                        <img className='img' src={profilephoto} />
                    </div>
                    <div className= {` ${packSwitch===true ? 'pack' : 'profile-content' }`}>
                        <span className='span'>{profilename}</span>
                        <div className='profile-icon-cont'>
                        <img className='profile-icon' src={back} />
                        <img className='profile-icon' src={user}/>
                        <img className='profile-icon' src={home} />
                        </div>
                       
                    </div>
                </div>
                <div className={`${sedondTab===true ? 'active':''} side-menu `}><img className='img' src={dashboard}/><span className={` ${packSwitch===true ? 'pack' : 'span' }`}>داشبورد</span></div>
                <div className={`${thirdTab===true ? 'active':''} side-menu `}> <img className='img' src={boxes}/><span className={` ${packSwitch===true ? 'pack' : 'span' }`}>بسته های نویسا</span></div>
            </div>
            
        </div>
    )
}

export default Sidebar
