import { useState } from 'react';
import './App.css';
import EndGame from './components/endGame';
import Letters from './components/letters';
import Score from './components/score';
import Solution from './components/solution';


function App() {

  const [letterStatus , setLetterStatus] = useState({letterStatus: generateLetterStatuses()})

  function generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  function selectLetter (letter){
    let newLetterStatus = {...letterStatus.letterStatus}
    newLetterStatus[letter] = true
    setLetterStatus({letterStatus:newLetterStatus})
  }

  function increaseScore(){
    let increaseBy = 20
    setScore(score + increaseBy)
    console.log(increaseBy);
  }
  function decreaseScore(){
    let decreaseBy = 5
    setScore(score - decreaseBy)
  }
  function isLetterExist(letter){
    solution.word.includes(letter) ? increaseScore() : decreaseScore()
  }

  function done() {
    const splitedWord = solution.word.split("");
    const letters = letterStatus.letterStatus;
    let i = 0;
    splitedWord.forEach((a) => {
      letters[a] ? i++ : (i = 0)
    });
    if(splitedWord.length === i){
      return "win"
    }
    if(score < 0){
      return "lose"
    }
  }
  const [solution , setSolution] = useState({word: "CALM", hint: "your ideal mood when coding"})
  const [score , setScore] = useState(0)

  return (
    <div className="App">
      <Score score = {score}/>
      <Solution letterStatus = {letterStatus.letterStatus} solution = {solution} isLetterExist={isLetterExist}/>  
      <Letters letterStatus = {letterStatus.letterStatus} selectLetter={selectLetter} isLetterExist={isLetterExist}/>
      <EndGame done={done}/>
    </div>
  );
}

export default App;
