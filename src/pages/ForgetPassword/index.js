import React,{useState} from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import background from '../../assets/jpg/bg-1.jpg'
import logo from '../../assets/png/logo-type.png'
import InputFeild from '../../components/Input-Feild'
import CostomButton from '../../components/Button'
import mobile from '../../assets/svg/smartphone.svg'
import user from '../../assets/svg/user.svg'

const ForgetPassword = () => {
    const [acountName, setAcountName] = useState('')
    const [phoneNumber,setPhoneNumber]=useState('')
  const handleSubmit =(e)=>{e.preventDefault();
      console.log(acountName,phoneNumber)
  }
    return (
    
        <div className='back'>
            <div className='white'>
            
                <div className='form'>
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
                     
                    <p className='text-p'> بازگشت به<Link className='purple ' to='/' >صفحه ورود </Link></p> 
                     </div>
                     <div className='Button-container' >
                         <CostomButton  buttonText='در یافت کد تایید' type='submit'  />
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

export default ForgetPassword
