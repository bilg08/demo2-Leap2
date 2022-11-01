import React from 'react';
export const Card = (props: CardDataType) => {
    const {children} = props;
    
    return (
        <div className="p-6 max-w-md bg-white rounded-lg border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700">
            {children}    
        </div>
    )
} 
type CardDataType = {
    children?: JSX.Element|JSX.Element[],
}