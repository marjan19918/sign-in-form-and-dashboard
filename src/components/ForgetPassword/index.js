import React, { useState } from 'react'
import './style.scss'
import user from '../../assets/svg/user.svg'
import InputFeild from '../Input-Feild'
import logo from '../../assets/png/logo-type.png'
import CostomButton from '../Button'
import mobile from '../../assets/svg/smartphone.svg'
const ForgetPassword = () => {
    const [acountName, setAcountName] = useState('')
    const [phoneNumber,setPhoneNumber]=useState('')
  const handleSubmit =(e)=>{e.preventDefault();
      console.log(acountName,phoneNumber)
  }
    return (
        <div className='forget-password'>
        <div className='content'>
                 <img src={logo} alt ='logo' />
                 <h3>فراموشی رمز عبور</h3>
             <form className='login-form' onSubmit={handleSubmit}>
             <div className='input-container'>
                         <InputFeild
                              log={true}
                              labelText='نام کاربری'
                              type='text'
                              placeholder='نام کاربری خود را وارد کنید'
                              neseccery={true}
                         
                              value={acountName }
                              handlechange={setAcountName  }
                              inputimg={ user}
                              inputalt='user'
                     />
                     </div>
                     <div className='input-container'>
                         <InputFeild
                              log={true}
                              labelText='ایمیل یا شماره همراه'
                              type='text'
                              placeholder='ایمیل یا شماره همراه  خود را وارد کنید'
                              neseccery={true}
                         
                              value={phoneNumber }
                              handlechange={setPhoneNumber }
                              inputimg={ mobile}
                              inputalt='mobile'
                         />
                     </div>
                     
                     <div className='text-container'>
                     
                    <p className='text-p'> بازگشت به<span className='purple '>صفحه ورود </span></p> 
                     </div>
                     <div className='Button-container' >
                         <CostomButton  buttonText='در یافت کد تایید' type='submit'  />
                     </div>
                     
                 </form>
                 
             </div>
            
     
     </div>
    )
}

export default ForgetPassword
