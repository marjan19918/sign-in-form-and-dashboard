import React, { useState } from 'react'
import './style.scss'
import logo from '../../assets/png/logo-type.png'
import InputFeild from '../Input-Feild'
import CostomButton from '../Button'
import mobile from '../../assets/svg/smartphone.svg'
import lock from '../../assets/svg/lock.svg'
const LoginForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit=(e)=>{e.preventDefault();
     console.log(phoneNumber,password)}
    return (
        <div className='login'>
           <div className='content'>
                    <img src={logo} alt ='logo' />
                    <h3>ورود به سامانه</h3>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <div className='input-container'>
                            <InputFeild
                                 log={true}
                                 labelText='ایمیل یا شماره همراه'
                                 type='text'
                                 placeholder='ایمیل یا شماره همراه را وارد کنید'
                                 neseccery={true}
                            
                                 value={phoneNumber }
                                 handlechange={setPhoneNumber }
                                 inputimg={ mobile}
                                 inputalt='mobile'
                            />
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
                        <div className='text-container'>
                        <p className='text-p'>اگر در سامانه عضو نیستید<span className='purple'>ثبت نام </span>کنید</p>
                        <span className='purple '>فراموشی رمز عبور</span>
                        </div>
                        <div className='Button-container' >
                            <CostomButton  buttonText='ورود' type='submit'  />
                        </div>
                        
                    </form>
                    
                </div> 
        </div>
    )
}

export default LoginForm

