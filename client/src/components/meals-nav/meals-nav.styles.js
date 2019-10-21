import styled from 'styled-components';

export const MealsNavStyles = styled.div`
  display: flex;
  justify-content: center; 

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    outline: none;
    border: none;
    height: 40px;
    color:#ffffff;
    background:#f5874f;
    border-bottom: 4px solid rgb(210, 79, 12);
  }
  
  button:hover {
    cursor: pointer;
    background: #fffaf8;
    color: #f5874f;
  }

  .breakfast {
    background: ${props => props.currentList === "Breakfast" && "#fffaf8"};
    color: ${props => props.currentList === "Breakfast" && "#f5874f"};
  }

  .lunch {
    background: ${props => props.currentList === "Lunch" && "#fffaf8"};
    color: ${props => props.currentList === "Lunch" && "#f5874f"};
  }

  .dinner {
    background: ${props => props.currentList === "Dinner" && "#fffaf8"};
    color: ${props => props.currentList === "Dinner" && "#f5874f"};
  }

  .supper {
    background: ${props => props.currentList === "Supper" && "#fffaf8"};
    color: ${props => props.currentList === "Supper" && "#f5874f"};
  }
`;
  