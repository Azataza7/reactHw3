import React from 'react';

interface Props {
  number: number;
}

const lotteryBall: React.FC<Props> = ({number}) => {
  return (
    <div className="lotteryBall">
      <span className="number">{number}</span>
    </div>
  );
};

export default lotteryBall;