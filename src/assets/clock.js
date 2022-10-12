import React from 'react'
import { useEffect, useState } from 'react'
//import Clock from 'react-live-clock'


function Clock(){
    
    const [clockState, setClockState] = useState()

    useEffect(()=> {
        setInterval(()=> {
            const date = new Date()
            setClockState(date.toLocaleTimeString())
        }, 1000)
    },[])



return <div>
           {clockState}            
        </div>
       
    
}

export default Clock