import * as React from 'react';

const useBool = (initialValue: boolean): [boolean, () => void, () => void] => {
  const [bool, setBool] = React.useState(initialValue);
  const setTrue = React.useCallback(() => {
    setBool(true);
  }, [setBool]);
  const setFalse = React.useCallback(() => {
    setBool(false);
  }, [setBool]);
  return [bool, setTrue, setFalse];
};

export default useBool;
