import React from 'react'
import './style.scss'
const CostomButton = ({buttonText,pay,type}) => {
    return (
        <div className='costom-button'>
            <button type={type}
                className={`${pay===true ? 'paybtn': ''} button `}
            >{buttonText}</button>
         </div>
    )
}

export default CostomButton
