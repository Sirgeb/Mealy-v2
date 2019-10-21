import styled from 'styled-components';

export const ListOfMealsStyles = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #fffaf8;

  .meal {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-size: 14px;
  }
  
  .meal button{
    display: flex;
  }
  
  .meal button:hover{
    cursor: pointer;
  }

  .empty-list {
    text-align: center;
    font-size: 14px;
    font-style: italic;
    padding: 10px;
  }
`;
