import * as React from 'react';
import Button from '@/components/atoms/Button';

const Counter: React.FC = () => {
  const [count, SetCount] = React.useState(0);

  const handleClick = () => {
    SetCount(count + 1);
  };

  return (
    <div>
      <h1>カウンター</h1>
      <Button type="button" onClick={handleClick}>
        ＋カウントアップする
      </Button>
      <div>{count}</div>
    </div>
  );
};

export default Counter;
