import styled from 'styled-components';

export const WrapperStyles = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 10px double #9dd3af;
  border-left: 10px double #9dd3af;
  background: #fdeae0;
  padding: 0 15px;
  margin: 30px auto;

  @media (max-width: 700px) { 
    display: flex;
    flex: 1;
  }
`;
