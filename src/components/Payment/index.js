import React, { useState } from 'react'
import logo from '../../assets/png/logo-type.png'
import InputFeild from '../Input-Feild'
import CostomButton from '../Button'
import './style.scss'
const Payment = ({handleOpen}) => {
    const [credit,setCredit]=useState('')
    return (
        <div className='payment'>
            <div className='close-cont'>
            <span className='close' onClick={()=>handleOpen(false)}>&#x2715;</span>
            </div>
           
            <div className='credit-pay'>
            <img src={logo}/>
                <span className='nevisa'>نویسا</span>
                <div className='ruler'></div>
                <div className='input-cont'>
                <InputFeild
                    placeholder=' مبلغ شارژ را وارد کنید'
                    neseccery={true}
                    type='text'
                    labelText='مبلغ شارژ'
                    value={credit}
                    handlechange={setCredit}
                    
                />
                </div>
              

                <div className='btn-cont'>
                <CostomButton pay={true} buttonText=" پرداخت الکترونیکی" />
                </div>
                
            </div>
           
            
        </div>
    )
}

export default Payment
