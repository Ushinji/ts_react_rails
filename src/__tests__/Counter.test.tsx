import * as React from 'react';
import { render } from 'react-testing-library';
import Counter from '../Counter';

describe('Counter', () => {
  it('Snapshot test', () => {
    const { asFragment } = render(<Counter />);
    expect(asFragment()).toMatchSnapshot();
  });
});
