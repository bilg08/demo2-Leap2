import styles from './Card.module.css';
import React from 'react';
import { ReactNode} from 'react'
export const Card = (props: CardDataType) => {

    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
} 
type CardDataType = {
    children?: JSX.Element
}