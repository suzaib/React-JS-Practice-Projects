import React from 'react'
import { useState,useEffect } from 'react';

const CurrentTime = () => {

    //Utilising the useState Hook to store time and update it
    const [time,setTime]=useState(new Date());

    //The useEffect has empty array passed to it , therefore it only runs when the component loads for the first time
    useEffect(()=>{

        //And the interval is made that runs every seconds updating the time state
        const intervalId=setInterval(()=>{
            setTime(new Date());
        },1000)

        return ()=>{
            clearInterval(intervalId);
        }
    },[])
 
  return (
    <p className='lead'>
        This is the current time:{time.toLocaleDateString()}-{" "}
        {time.toLocaleTimeString()}
    </p>
  )
}

export default CurrentTime
