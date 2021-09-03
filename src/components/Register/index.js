import React, { useState } from 'react'
import './style.scss'
import logo from '../../assets/png/logo-type.png'
import InputFeild from '../Input-Feild'
import CostomButton from '../Button'
import mobile from '../../assets/svg/smartphone.svg'
import lock from '../../assets/svg/lock.svg'
import user from '../../assets/svg/user.svg'
import check from '../../assets/svg/check.svg'
import box from '../../assets/svg/empty-checkbox.svg'
const Register = () => {
    const [acountName, setAcountName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const [checks,setChecks]=useState(false)
     const handleSubmit=(e)=>{e.preventDefault();console.log(acountName,password,repassword,phoneNumber)}
    return (
        <div className='register'>
           <div className='content'>
                    <img src={logo} alt ='logo' />
                    <h3>ثبت نام در سامانه</h3>
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
                        <div className='input-container'>
                            <InputFeild
                                log={true}
                                labelText='رمز عبور'
                                type='password'
                                placeholder='رمز عبور را وارد کنید'
                                neseccery={true}
                                maxlength='6'
                                value={repassword }
                                handlechange={setRepassword }
                                inputimg={ lock}
                                inputalt='lock'
                            />
                        </div>
                        <div className='text-container'>
                        <p className='text-p'>قوانین نویسا را می پذیرم</p>{checks===false ? <img className='check' src={box} alt ='box' onClick={()=>setChecks(true)}></img> :<img className='check' src={check}/>}
                       <p className='text-p'>ایا پیش از این ثبت نام کرده اید؟<span className='purple '>صفحه ورود</span></p> 
                        </div>
                        <div className='Button-container' >
                            <CostomButton  buttonText='ورود' type='submit'  />
                        </div>
                        
                    </form>
                    
                </div>
               
        
        </div>
    )
}

export default Register
