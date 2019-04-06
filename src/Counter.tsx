import * as React from 'react';

const Counter: React.FC = () => {
  const [count, SetCount] = React.useState(0);

  const handleClick = () => {
    SetCount(count + 1);
  };

  return (
    <div>
      <h1>カウンター</h1>
      <button type="button" onClick={handleClick}>
        ＋
      </button>
      <div>{count}</div>
    </div>
  );
};

export default Counter;
