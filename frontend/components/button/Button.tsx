import { ReactNode } from 'react';
import styles from './Button.module.css';

export const Button = (props:ButtonProps) => {
    return (<button onClick={props.onClick} className={styles.Button}>
        {props.children}
        </button>)
}

type ButtonProps = { children: ReactNode,onClick:() =>void}