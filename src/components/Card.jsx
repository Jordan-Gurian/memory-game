import { useState, useEffect } from 'react';

export default function Card({ id, url, handleClick }) {
    
    return (
        <img
            id={id}
            className={'card'}
            src={url}
            onClick={() => handleClick(id)}
            width={'400px'}
        />
    )
}