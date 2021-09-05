import React,{useState} from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import background from '../../assets/jpg/bg-1.jpg'
import logo from '../../assets/png/logo-type.png'
import InputFeild from '../../components/Input-Feild'
import CostomButton from '../../components/Button'
import mobile from '../../assets/svg/smartphone.svg'
import lock from '../../assets/svg/lock.svg'
import user from '../../assets/svg/user.svg'
import box from '../../assets/svg/empty-checkbox.svg'
import check from '../../assets/svg/check.svg'
const Register = () => {
    const [acountName, setAcountName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const [checks,setChecks]=useState(false)
    async function handleSubmit(e) {
       e.preventDefault();
      
        // const data = await fetch(`https://cors-anywhere.herokuapp.com/
        //  https://accounting.persianspeech.com/account/signup/email?username=${acountName}&phone=${phoneNumber}&password=${password}&password_confirmation=${repassword}`
        //     )
        const datas = fetch('https://cors-anywhere.herokuapp.com/https://accounting.persianspeech.com/account/signup/email',
            {
                //  credentials: 'include',
            method: 'post',
            //     headers: {
            //         // Access_Control_Allow_Origin: "*",
            //     // 'Content-Type': 'text/plain'
            // //    Accept: 'application/json',
            //    'Content-Type': 'application/json'
            // },
            body: JSON.stringify({
              username: acountName,
              phone:phoneNumber,
                password: password,
              password_confirmation:repassword
            })
          })
    const  hy = await datas
      console.log(hy)
 }
    return (
    
        <div className='back'>
            <div className='white'>
            
                <div className='form'>
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
                       <p className='text-p'>ایا پیش از این ثبت نام کرده اید؟<Link to='/' className='purple '>صفحه ورود</Link></p> 
                        </div>
                        <div className='Button-container' >
                            <CostomButton disable={password.length<6|| repassword.length<6 || acountName.length<8 ||phoneNumber.length<11 }  buttonText='ورود' type='submit'  />
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

export default Register
