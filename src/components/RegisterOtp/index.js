import React, { useState } from 'react'
import './style.scss'
import letter from '../../assets/svg/mail.svg'
import InputFeild from '../Input-Feild'
import CostomButton from '../Button'
import logo from '../../assets/png/logo-type.png'
import TimerCountDown from '../Timer-CountDown'
const RegisterOtp = () => {
    const [otpCode, setOtpCode] = useState('')
    const handleSubmit=(e)=>{e.preventDefault();
     console.log(otpCode)}
    return (
        <div className='register-otp'>
        <div className='content'>
                 <img src={logo} alt ='logo' />
                 <h3>تایید ورود به سامانه</h3>
             <form className='login-form' onSubmit={handleSubmit}>
             
                     <div className='input-container'>
                         <InputFeild
                             log={true}
                             labelText='کد دریافتی از طریق پیامک را وارد کنید'
                             type='text'
                             placeholder='کد 6 رقمی'
                             neseccery={true}
                             maxlength='6'
                             value={otpCode }
                             handlechange={setOtpCode }
                             inputimg={ letter}
                             inputalt='letter'
                         />
                     </div>
                     <div className='timer-container'>
                     <TimerCountDown />
                     </div>
                     <div className='Button-container' >
                         <CostomButton  buttonText="تایید" type='submit'  />
                     </div>
                     
                 </form>
                 
             </div>
            
     
     </div>
    )
}

export default RegisterOtp
