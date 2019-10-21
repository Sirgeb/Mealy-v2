import styled from 'styled-components';

export const TellMeWhatToEatStyles = styled.div`
  display: flex;
  flex: 1;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin-top: 20px;
    background:#f5874f;
    border: none;
    border-bottom: 5px solid rgb(210, 79, 12);
    height: 100px;
    color:#ffffff;
    font-size: 35px;
    font-weight: bold;
    border-radius: 5px;
    outline: none;
  }
  
  @media (max-width: 700px) {
    button {
      font-size: 24px;
    }
  
    button img {
      height: 30px;
      width: 30px;
    }
  }
  
  button:hover {
    cursor: pointer;
  }
  
  button img {
    height: 40px;
    width: 40px;
    margin-bottom: 10px;
  }
`;