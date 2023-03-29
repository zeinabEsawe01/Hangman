import React, { Component } from "react";
import Letter from "./letter";

const Solution = (props) => {
  let solution = props.solution
  let splitWord = solution.word.split("")
  let letterStatus = props.letterStatus
  // let increase = props.increaseScore
  // let decrease = props.decreaseScore
  return (
    <div>
{splitWord.map((l) => letterStatus[l] ? <Letter isLetterExist={props.isLetterExist}  letter = {l}/> : <Letter  letter = {"_"} isLetterExist={props.isLetterExist}/>)}
<div>
    <em>{solution.hint}</em>
    </div>
    </div>
  );
};

export default Solution;