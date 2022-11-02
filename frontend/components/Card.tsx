import React from 'react';
export const Card = (props: CardDataType) => {
    const {children} = props;
    
    return (
        <div className="p-6 max-w-md bg-white rounded-lg border border-gray-200 shadow-2xl">
            {children}    
        </div>
    )
} 
type CardDataType = {
    children?: JSX.Element|JSX.Element[],
}