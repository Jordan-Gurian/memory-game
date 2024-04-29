import { useState, useEffect } from 'react';

export default function Card({ url }) {

    // Defining API Key in file is VERY bad, but allowed here only

    return (
        <div>
            <img
                src={url}
            />
        </div>
    )
}