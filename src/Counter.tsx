import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  font-size: 18px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  background-color: #337ab7;
  color: #ffffff;

  &:hover {
    text-decoration: none;
    color: #ffffff;
    background-color: #286090;
    cursor: pointer;
  }
`;

const Counter: React.FC = () => {
  const [count, SetCount] = React.useState(0);

  const handleClick = () => {
    SetCount(count + 1);
  };

  return (
    <div>
      <h1>カウンター</h1>
      <Button type="button" onClick={handleClick}>
        ＋
      </Button>
      <div>{count}</div>
    </div>
  );
};

export default Counter;
