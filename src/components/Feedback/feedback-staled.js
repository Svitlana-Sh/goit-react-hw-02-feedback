import styled from 'styled-components';

export const SectionTitleStyled = styled.h2`
  font-family: 'Gill Sans', sans-serif;
  font-size: 32px;
  margin: 35px;
  margin-bottom: 40px;
`;

export const FeedbackBtnPoll = styled.button`
  font-family: 'Gill Sans', sans-serif;
  font-size: 16px;
  padding: 10px;
  min-width: 100px;
  margin-bottom: 20px;
  text-transform: capitalize;
  border: 1px solid #289591;
  border-radius: 15px 15px 15px 0;
  box-shadow: 4px -4px rgba(40, 149, 145, 0.6);
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &:hover,
  &:focus {
    outline: none;
    border: 1px solid #00000094;
    background-color: ${props => {
      switch (props.name) {
        case 'good':
          return '#0ac829';
        case 'neutural':
          return '#f7f53e';
        case 'bad':
          return '#ec7e83';
        default:
          return 'inherit';
      }
    }};
  }

  &:active {
    box-shadow: 0 5px rgba(40, 149, 145, 0.6);
    transform: translateY(4px);
    background-color: ${props => {
      switch (props.name) {
        case 'good':
          return '#258e36';
        case 'neutural':
          return '#b6b540';
        case 'bad':
          return '#c86a6e';
        default:
          return 'inherit';
      }
    }};
  }
`;

export const MessageAlart = styled.p`
  font-family: fantasy;
  color: #487f7f;
  font-size: 18px;
`;

export const MessageTotal = styled.p`
  font-family: 'Gill Sans', sans-serif;
  color: #487f7f;
  font-size: 24px;
`;
