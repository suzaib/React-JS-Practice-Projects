import React from 'react'

const InputCheckBox = ({defaultCondition,content,setter}) => {

  return (
    <>
    <div className="mx-4">
      <input 
      className="transform-"
      type="checkbox"
      defaultChecked={defaultCondition}
      id='numberInput' 
      onChange={()=>{
          setter((prev)=>!prev)
      }}/>
      <label
      className="font-semibold text-2xl mx-2">{content}</label>

    </div>
    </>
  )
}

export default InputCheckBox