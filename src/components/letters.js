import React, { Component } from "react";
import Letter from "./letter";

const Letters = (props) => {
  let letterStatus = props.letterStatus
  let letterArr = Object.keys(letterStatus)
  let selectLetter = props.selectLetter
  return (
    <div>
      <div>Available Letters</div>
      <span>
      {letterArr.map((l) => letterStatus[l] ? 
        
      <Letter selectLetter={selectLetter} className="cross" letter = {l} isLetterExist={props.isLetterExist}/>
       : <Letter className="false" letter={l} selectLetter={selectLetter} isLetterExist={props.isLetterExist}/> )}
    </span>
    </div>
  );
};

export default Letters;