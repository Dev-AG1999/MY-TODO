import React from 'react'
 export const Input = ({placeholder,onChange,style,value}) => {
    return (
     <input style={style} onChange= {onChange} placeholder={placeholder} value={value}/>
    )
}


