import React, { useEffect, useState } from 'react'

const TimerCountDown = () => {
    const [minutes, setMinutes] = useState(1)
    const [seconds, setSeconds] = useState(59)
    useEffect(()=>{
        let myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval)
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } 
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
              };
        });
   
    return (
        <div className='timer'>
            
            <span>{minutes}min</span><span>:</span><span>{seconds}sec</span>
        </div>
    )
}

export default TimerCountDown
