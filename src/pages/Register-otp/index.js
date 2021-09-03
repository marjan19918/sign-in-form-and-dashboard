import React,{useState} from 'react'
import './style.scss'

import background from '../../assets/jpg/bg-1.jpg'
import logo from '../../assets/png/logo-type.png'
import InputFeild from '../../components/Input-Feild'
import CostomButton from '../../components/Button'
import letter from '../../assets/svg/mail.svg'
const RegisterOtp = () => {
    const [otpCode, setOtpCode] = useState('')
    const handleSubmit=(e)=>{e.preventDefault();
     console.log(otpCode)}
    return (
    
        <div className='back'>
            <div className='white'>
            
                <div className='form'>
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
                     
                     </div>
                     <div className='Button-container' >
                         <CostomButton  buttonText="تایید" type='submit'  />
                     </div>
                     
                 </form>
                 
             </div>
            
     
     </div>
                
                    </div>
            
                <div className='picture'>
                  <img className='background' src={background} alt='background'/>

                </div>
            </div>
            

            
        </div>
    
       
    )
}

export default RegisterOtp
