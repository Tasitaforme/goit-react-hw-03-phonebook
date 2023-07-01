import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
    gap: 8px;
    font-weight: bold;
    font-size: 18px;
`;
export const Input = styled.input`
  border-radius: 20px;
  display: block;
  border: 2px solid black;
  padding: 8px 16px;
`;

export const Button = styled.button`
  border-radius: 20px;
  background-color: black;
  color: #e5e5e5;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  padding: 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #007aff;
  }
`;