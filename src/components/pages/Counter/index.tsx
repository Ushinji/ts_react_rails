import * as React from 'react';
import styled from 'styled-components';
import Button from '@/components/atoms/Button';
import useBool from '@/modules/useBool';

const Container = styled.div`
  background-color: white;
  box-shadow: 0px 0px 4px rgba(51, 23, 20, 0.2);
  padding: 16px;
  width: 340px;
  border-radius: 4px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

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
    <Container>
      <Title>
        カウンター：
        {count}
      </Title>
      <Button type="button" onClick={handleClick} submitting={submitting}>
        Count up
      </Button>
    </Container>
  );
};

export default Counter;
