import * as React from 'react';
import Button from '@/components/atoms/Button';
import useBool from '@/modules/useBool';

const Counter: React.FC = () => {
  const [submitting, startSubmit, finishSubmit] = useBool(false);
  const [count, SetCount] = React.useState(0);

  const handleClick = () => {
    startSubmit();
    setTimeout(() => {
      SetCount(count + 1);
      finishSubmit();
    }, 1000);
  };

  return (
    <div>
      <h1>カウンター</h1>
      <Button type="button" onClick={handleClick} submitting={submitting}>
        ＋カウントアップする
      </Button>
      <div>{count}</div>
    </div>
  );
};

export default Counter;
