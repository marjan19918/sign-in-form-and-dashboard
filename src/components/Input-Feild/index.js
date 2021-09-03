import React from 'react'
import './style.scss'

const InputFeild = ({labelText,log,type,placeholder,neseccery,maxlength,value,handlechange,inputimg,inputalt}) => {
    return (
        <div className='input-feild'>
            <label className='label'>{labelText}{neseccery? <sapn className='star'>&#8902;</sapn>:null}</label>
            <input
                className={`${log===true ? 'log' :'pay'} input `}
                type={type}
                maxLength={maxlength}
                value={value}
                onChange={(e) => handlechange(e.target.value)}
                placeholder={placeholder}
            ></input>
           {inputimg ==! null  ?  <img className='img' src={inputimg} alt={inputalt} /> : null }
            {/* <img className='img' src={inputimg} alt={inputalt} /> */}
            {/* <div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        </div>
    )
}

export default InputFeild
