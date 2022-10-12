import { useState } from "react";

function Incrementor (){
    const [ number, setNumber] = useState(0)

    const increase = () => {
    setNumber((prevNum) => prevNum +1)}

    const decrease = () => {
        setNumber((prevNum) => prevNum -1)}
    
    const reset = () => {
        setNumber(0)
    }



  return (
    <div>
      <div>{number}</div>
      <button onClick={increase}>Increase number</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrease}>Decrease number</button>
      incrementor
    </div>
  );
} 

export default Incrementor