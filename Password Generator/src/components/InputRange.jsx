import React from 'react'

const InputRange = ({value,setLength}) => {
  return (
    <>
    <div
    className="relative bottom-1 mx-2"
    style={{minWidth:"320px"}}>
      <input 
      className="cursor-pointer"
      type="range"
      min={6}
      max={20}
      value={value}
      onChange={(e)=>{setLength(e.target.value)}}/>
      <label
      className="text-3xl px-4">Length : {value}</label>
    </div>
    </>
  )
}

export default InputRange