import React from 'react'

const Button = ({text}) => {
  return (
    <button
    className="text-3xl font-semibold text-white bg-red-700 rounded-lg px-3 pt-1 pb-1.5">{text}</button>
  )
}

export default Button