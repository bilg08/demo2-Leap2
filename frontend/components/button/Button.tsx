import React, { ReactNode } from 'react';
import styles from './Button.module.css';
//Bicegelel adilhan
// const Button = (props:ButtonProps) => <div>{message}</div>;
export const Button :React.FC<ButtonProps> = (props) => {
    return (
        <button onClick={props.onClick} className={styles.Button}>
        {props.children}
        </button>)
}

type ButtonProps = { children: ReactNode,onClick:() =>void}