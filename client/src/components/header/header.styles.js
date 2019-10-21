import styled from 'styled-components';

export const HeaderStyles = styled.div`
  display: flex;
  flex: 1;
  background: #f5874f;
  color: #ffffff;
  border-bottom: 10px solid #9dd3af;

  @media (max-width: 700px) {
    .header {
        font-size: 14px;
        margin: 5;
      }
    }

    .title {
      margin: 10px 10px;
    }

    .description {
      font-style: italic;
    }

    .date {
      display: flex;
    }
`;
