import {useState} from 'react';
import './App.css';
import Ball from './Ball/lotteryBall';

const App = () => {
  const [balls, setBalls] = useState([
    {number: 5}, {number: 11}, {number: 16},
    {number: 23}, {number: 32},
  ]);

  const getRandomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

  const changeNumber = () => {
    const listRandomNumbers: number[] = [];
    let minNumber = 5;
    let maxNumber = 36;

    while (listRandomNumbers.length < balls.length) {
      const randomNumber: number = getRandomNumber(maxNumber, minNumber);
      if (!listRandomNumbers.includes(randomNumber)) {
        listRandomNumbers.push(randomNumber);
      }
    }

    const sortedNumbers = [...listRandomNumbers].sort((a: number, b: number) => a - b);

    setBalls([
      {number: sortedNumbers[0]}, {number: sortedNumbers[1]}, {number: sortedNumbers[2]},
      {number: sortedNumbers[3]}, {number: sortedNumbers[4]},
    ]);
  };

  return (
    <div className="App">
      <div className="lotteryBallContainer">
        {balls.map((ball, index) => (
          <Ball key={index} number={ball.number}/>
        ))}
      </div>

      <div className="buttonBox">
        <button onClick={changeNumber}>New numbers</button>
      </div>
    </div>
  );
};

export default App;
