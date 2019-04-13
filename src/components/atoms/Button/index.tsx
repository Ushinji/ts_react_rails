import * as React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  font-size: 18px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  background-color: #3173dc;
  color: #ffffff;
  padding: 8px 16px;
  width: 100%;

  &:hover {
    text-decoration: none;
    color: #ffffff;
    background-color: #266cda;
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

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  submitting?: boolean;
}

const Button: React.FC<Props> = ({ submitting = false, ...props }) => {
  return (
    <StyledButton {...props}>
      {submitting ? <Spinner /> : props.children}
    </StyledButton>
  );
};

export default Button;
