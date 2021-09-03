import React,{useState} from 'react'
import './style.scss'

import background from '../../assets/jpg/bg-1.jpg'
import logo from '../../assets/png/logo-type.png'
import InputFeild from '../../components/Input-Feild'
import CostomButton from '../../components/Button'
import mobile from '../../assets/svg/smartphone.svg'
import lock from '../../assets/svg/lock.svg'
import { Link } from 'react-router-dom'
const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    async function handleSubmit(e) {
       e.preventDefault();
       console.log(phoneNumber)
        let data = await fetch(`https://accounting.persianspeech.com/account/login?username=${phoneNumber}&password=${password}`)
       
       console.log(data)
   }
    
    return (
    // <Router>
        <div className='back'>
            <div className='white'>
            
                <div className='form'>
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
                        <p className='text-p'>اگر در سامانه عضو نیستید<Link className='purple' to='/register'>ثبت نام </Link>کنید</p>
                        <Link to='forget-password'><span className='purple '>فراموشی رمز عبور</span></Link>
                        </div>
                                <div className='Button-container' >
                                    <Link to=''>
                                    <CostomButton  buttonText='ورود' type='submit'  /> 
                                    </Link>
                            {/* <CostomButton  buttonText='ورود' type='submit'  /> */}
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
    // </Router>
       
    )
}

export default Login
