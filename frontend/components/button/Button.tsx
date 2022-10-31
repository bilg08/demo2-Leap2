import { ReactNode } from 'react';
import styles from './Button.module.css';

export const Button = (props: { children: ReactNode }) => {
    return (<button className={styles.Button}>
        {props.children}
        </button>)
}
