import React, { useState } from 'react'
import './style.scss'
import InputFeild from '../Input-Feild'
import CostomButton from '../Button'
import logo from '../../assets/png/logo-type.png'
import lock from '../../assets/svg/lock.svg'
import letter from '../../assets/svg/mail.svg'
const ForgetPasswordChange = () => {
    const [otpCode, setOtpCode] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(password,repassword,otpCode)
    }
    return (
        <div className='forget-password-change'>
           <div className='content'>
                    <img src={logo} alt ='logo' />
                    <h3>تایید ورود به سامانه</h3>
                <form className='login-form' onSubmit={handleSubmit}>
                <div className='input-container'>
                            <InputFeild
                                 log={true}
                                 labelText='کدتایید دریافتی از طریق پیامک را وارد کنید'
                                 type='text'
                            placeholder="کد 6 رقمی"
                                 neseccery={true}
                                 value={otpCode }
                                 handlechange={setOtpCode  }
                                 inputimg={ letter}
                                 inputalt='letter'
                        />
                    </div>
                    <div className='timer-container'>

                    </div>
                       
                        <div className='input-container'>
                            <InputFeild
                                log={true}
                                labelText='رمز عبور'
                                type='password'
                                placeholder='رمز عبور را وارد کنید'
                                neseccery={true}
                                maxlength='6'
                                value={password }
                                handlechange={setPassword }
                                inputimg={ lock}
                                inputalt='lock'
                            />
                        </div>
                        <div className='input-container'>
                            <InputFeild
                                log={true}
                                labelText='تکرار رمز ورود'
                                type='password'
                                placeholder='تکرار رمز عبور را وارد کنید '
                                neseccery={true}
                                maxlength='6'
                                value={repassword }
                                handlechange={setRepassword }
                                inputimg={ lock}
                                inputalt='lock'
                            />
                        </div>
                      
                        <div className='Button-container' >
                            <CostomButton  buttonText="تایید" type='submit'  />
                        </div>
                        
                    </form>
                    
                </div>
               
        
        </div>
    )
}

export default ForgetPasswordChange
