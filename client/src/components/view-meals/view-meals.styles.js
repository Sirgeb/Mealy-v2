import styled from 'styled-components';

export const ViewMealsBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 300px;
  outline: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  height: 40px;
  background: #f5874f;
  border-bottom: 4px solid rgb(210, 79, 12);
  margin-bottom: 20px;

  @media (max-width: 700px) {
    width: 200px;
  }

  &:hover {
    cursor: pointer;
    background: #fffaf8;
    color: #f5874f;
  }
`;
