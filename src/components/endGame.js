import React, { Component } from 'react';
 
const EndGame = (props) =>{
   
    return(
    <div>
        {props.done() === "win" ? <div>CONGRATAULTIONS</div>
        :  props.done() === "lose" ? <div>Game Over</div> : null}
</div>
    )    
}

export default EndGame
