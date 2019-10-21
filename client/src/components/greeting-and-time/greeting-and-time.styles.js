import styled from 'styled-components';

export const GreetingAndTimeStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5874f;
  border-bottom: 5px solid #9dd3af;
  height: 80px;
  color: #ffffff;


  @media (max-width: 700px) { 
    .info {
      width: auto;
    }
  }

  .greeting {
    padding: 10px;
  }

  .time {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    height: 25px;
    width: 100px;
    margin-right: 10px;
    color: #f5874f;
    background: #fffaf8;
    border-bottom: 3px solid #fcd9c8;
    font-weight: bold;
    font-size: 14px;
  }

  .time:hover {
    pointer-events: none;
  }

  @media (max-width: 700px) { 
    .greeting {
      font-size: 14px;
    }

    .time { 
      font-size: 14px;
    }
  }
`;

