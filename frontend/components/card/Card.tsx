import styles from './Card.module.css';
import React from 'react';
import { ReactNode} from 'react'
export const Card = (props: CardDataType) => {
    const {children} = props;
    
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
} 
type CardDataType = {
    children?: JSX.Element|JSX.Element[],
}