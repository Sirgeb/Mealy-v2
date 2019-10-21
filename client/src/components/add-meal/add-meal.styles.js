import styled from 'styled-components';

export const AddMealStyles = styled.div`
  .hint {
    display: flex;
    justify-content: center;
    font-style: italic;
    font-size: 14px;
    margin-bottom: 5px;
    margin-top: 10px;
  }

  .add-meal-form form {
    display: flex;
    flex: 1;
    margin: 0 30px 20px 30px;
  }

  .meal-categories {
    display: flex;
    outline: none;
    border: none;
    height: 50px;
    background: #fffaf8;
    flex: 1;
    border-bottom: 5px solid #9dd3af;
  }

  input[type=text] {
    display: flex;
    background: #fffaf8;
    outline: none;
    border: none;
    border-bottom: 5px solid #9dd3af;
    flex: 4;
  }

  .add-meal-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    font-size: 14px;
    outline: none;
    border: none;
    border-bottom: 5px solid #9dd3af;
  }

  @media (max-width: 700px) {
    .add-meal-form form {
      flex-direction: column; 
    }
    .meal-categories {
      height: 50px;
      padding: 5px;
      border-bottom: none;
    }
    input[type=text] {
      height: 50px;
      padding: 10px;
      border-bottom: none;
    }
    .add-meal-btn {
      border-bottom: none;
      padding: 10px;
    }
  }

  .add-meal-btn:hover {
    cursor: pointer;
    background: #f5874f;
    color: #ffffff;
  }
`
