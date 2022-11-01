import styles from './Card.module.css';
import React from 'react';
import { Button } from '../index';
export const Card = (props: CardDataType) => {
    const { data } = props;

    return (
        <div>
            <h1>{data.advertisingHeader}</h1>
            <h3>Захиалагч:{data.owner.name}</h3>
            <p>{data.detail}</p>
            <Button onClick={() => console.log()}>Хийх</Button>
        </div>
    )
} 
type CardDataType = {
    data: {
        id: String,
        photo: String,
        detail: String,
        advertisingHeader: String,
        owner: {
            name:String
        }
    }|any
}