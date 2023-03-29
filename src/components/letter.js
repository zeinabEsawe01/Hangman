import React, { Component } from "react";

const Letter = (props) => {
  let letter = props.letter
  let className = props.className
  let selectLetter = props.selectLetter
  return (
    <span>
      <span onClick={()=> {
        selectLetter(props.letter)
        props.isLetterExist(props.letter)
        console.log(props.letter);
      }
    }
      className={className}>
        {letter}  </span>
    </span>
  );
};

export default Letter;