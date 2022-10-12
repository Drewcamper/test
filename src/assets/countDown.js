import { useState, useEffect } from "react";

function CountDown () {
    
    const [number, setNumber] = useState(0)

   
    useEffect(() => {
      const interval = setInterval(() => {
        for(let i = 10; i>0; i--){
                setNumber(number-1)
            }

      },1000)
      if(number<=0){setNumber(10)}
    
      return () => {
        clearInterval(interval)
      }
    },[number])
    

return  <div>
            {number} countDown

        </div>
    
}

export default CountDown