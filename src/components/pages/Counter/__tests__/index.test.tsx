import * as React from 'react';
import { render } from 'react-testing-library';
import Counter from '..';

describe('pages/Counter', () => {
  it('Snapshot test', () => {
    const { asFragment } = render(<Counter />);
    expect(asFragment()).toMatchSnapshot();
  });
});
