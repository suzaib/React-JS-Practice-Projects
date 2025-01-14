import React from 'react'
import { useState,useEffect } from 'react';

const CurrentTime = () => {

    //Storing time as state
    const [time,setTime]=useState(new Date());

    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setTime(new Date());
        },1000)

        return ()=>{
            clearInterval(intervalId);
        }
    },[])
 
  return (
    <p className='text'>
        This is the current time:{time.toLocaleDateString()}-{" "}
        {time.toLocaleTimeString()}
    </p>
  )
}

export default CurrentTime