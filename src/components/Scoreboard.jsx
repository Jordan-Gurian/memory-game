import { useState, useEffect } from 'react';

export default function Scoreboard({ currentScore, bestScore }) {

    return (
        <div>
            <p>
                Score: {currentScore}
            </p>
            <p>
                Best: {bestScore}
            </p>
        </div>
    )


}