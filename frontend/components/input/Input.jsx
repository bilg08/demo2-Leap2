import styles from './Input.module.css'
import React from 'react'
export const Input = ({placeholder,icon,onChange,name}) => {
   
  return(
  <div className={styles.inputContainer}>
     <input placeholder={placeholder} name={name} onChange={onChange}/>
     <span style={{fontSize:`20px`}}>
        {icon}
    </span>
  </div>)
}

