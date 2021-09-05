import React from 'react'
import './style.scss'
const CostomButton = ({buttonText,pay,type,disable}) => {
    return (
        <div className='costom-button'>
            <button type={type} disabled={disable}
                className={`${pay===true ? 'paybtn': ''} button `}
            >{buttonText}</button>
         </div>
    )
}

export default CostomButton
