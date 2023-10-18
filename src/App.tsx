import {useState} from 'react';
import './App.css';
import Ball from './Ball/lotteryBall';

const App = () => {
  const [balls, setBalls] = useState([
    {number: 5}, {number: 11}, {number: 16},
    {number: 23}, {number: 32},
  ]);

  const changeNumber = () => {

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
