import React from 'react'

export const Button = ({title,onClick,style}) => {
  return (
   <button style={style}onClick={onClick}>
    {title}
    </button>
  )
}
