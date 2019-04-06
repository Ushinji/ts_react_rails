import * as React from 'react';
import { render } from 'react-testing-library';
import Button from '..';

describe('atoms/Button', () => {
  it('Snapshot test', () => {
    const handleClick = () => {};
    const { asFragment } = render(
      <Button onClick={handleClick}>TEST_BUTTON</Button>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
