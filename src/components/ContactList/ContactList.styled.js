import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  margin: 0 auto;
  gap: 8px;
  font-size: 18px;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 30px 16px;
`;

export const Button = styled.button`
  border-radius: 8px;
  background-color: black;
  color: #e5e5e5;
  font-size: 14px;
  line-height: 1.5;
  border: none;
  padding: 4px 12px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #767676;
  }
`;