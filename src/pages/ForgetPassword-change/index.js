import React,{useState} from 'react'
import './style.scss'

import background from '../../assets/jpg/bg-1.jpg'
import logo from '../../assets/png/logo-type.png'
import InputFeild from '../../components/Input-Feild'
import CostomButton from '../../components/Button'
import letter from '../../assets/svg/mail.svg'
import lock from '../../assets/svg/lock.svg'
import TimerCountDown from '../../components/Timer-CountDown'
const ForgetPasswordChange = () => {
    const [otpCode, setOtpCode] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(password,repassword,otpCode)
    }
    return (
    
        <div className='back'>
            <div className='white'>
            
                <div className='form'>
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
                                    <TimerCountDown/>

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
                                    <CostomButton disable={otpCode.length < 6 ||password.length< 6 || repassword.length<6} buttonText="تایید" type='submit'  />
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

export default ForgetPasswordChange
