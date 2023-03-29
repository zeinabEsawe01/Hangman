import React, { Component } from 'react';
 
const Score = (props) =>{
    let score = props.score
    return(
        <div>
        {score > 80 ? <div className='high-score'>Your score is: {score}</div> 
        : score > 50 ? <div className='medium-score'>Your score is: {score}</div>
    :<div className='low-score'>Your score is: {score}</div>}
</div>
    )    
}

export default Score
