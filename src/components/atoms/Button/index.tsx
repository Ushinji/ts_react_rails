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

export default Button;
