import styles from './Input.module.css'
import React, { Dispatch, SetStateAction } from 'react'
type InputComponentsPropsType = {
  placeholder: String | any,
  icon: React.ReactElement,
  onchange?: Dispatch<SetStateAction<object>>|any,
  name:any,
  userInput?:object|any
}
export const Input = ({placeholder,icon,onchange,name,userInput}:InputComponentsPropsType) => {
  return(
  <div className={styles.inputContainer}>
     <input name={name} placeholder={placeholder} onChange={e=>onchange({...userInput,[e.target.name]:e.target.value})}/>
     <span style={{fontSize:`20px`}}>
        {icon}
    </span>
  </div>)
}

