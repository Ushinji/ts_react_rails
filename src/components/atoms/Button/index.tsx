import * as React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
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

const Spinner = styled.div`
  border: 2px solid #dbdbdb;
  border-radius: 290486px;
  border-right-color: transparent;
  border-top-color: transparent;
  display: block;
  position: relative;
  height: 1em;
  width: 1em;

  animation: spinAround 1s infinite linear;
  @-webkit-keyframes spinAround {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
  @keyframes spinAround {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
`;

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = props => {
  return (
    <StyledButton {...props}>
      {props.children}
      <Spinner />
    </StyledButton>
  );
};

export default Button;
