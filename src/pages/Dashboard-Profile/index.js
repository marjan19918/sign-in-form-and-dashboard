import React, { useState } from 'react'
import './style.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'
import home from '../../assets/svg/home-blue.svg'
import photo from '../../assets/jpg/Basic_Ui_68.jpg'
import Modal from '../../components/Modal'
import Payment from '../../components/Payment'
const DashboardProfile = () => {
    const [pack, setpack] = useState(false)
     const [open,setOpen]=useState(false)
    return (
        <div className='dashboard-profile'>
            <div className={`${pack===true ? 'pack' :'expand'} sidebar-container `}>
                <Sidebar profilephoto={photo} sedondTab={true} profilename='میلاد اقاسی' pack={pack} handlepack={setpack}/>
            </div>
            
            <div className={`${pack === true ? 'pack-dashbord' : 'expand-dashboard'} ${open === true ? 'openmodal' : ''} dashboard-content `}>
                {open === true ? <div><Modal><Payment handleOpen={setOpen} /></Modal></div> : null}
                    <Header  handleOpen={setOpen} credit='6800' profilephoto={photo} className='header' />
                <div className='content'>
                    <div className='content-row'>
                    <span className='bold item'>پروفایل</span>
                        <div className='item wall'></div>
                        <img className='item home' src={home} />
                        <span className='item more'>&#x276C;</span>
                        <span className='item gray'>پروفایل </span>
                    </div>
                    <div className='profile'>
                        <div className='inner-profile'>مشخصات کاربری</div>
                        <div className='inner-profile'>سرویس فعال </div>
                        <div className='inner-profile'>تاریخچه تراکنش</div>
                    </div>
                        
                    </div>
                    <Footer className='footer' />
                </div>
            
        </div>
    )
}

export default DashboardProfile
