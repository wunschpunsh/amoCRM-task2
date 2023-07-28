import styled, {css} from 'styled-components';
import {UL} from '../../reset-elements/ul';

const StyledNews = styled.section`
  padding: 130px 0;

  background-color: ${({theme}) => theme.colors.secondaryBgColor};

  @media ${({theme}) => theme.device.mobile} {
    padding: 100px 0;
  }
`;

const StyledNewsHeader = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 64px;

  @media ${({theme}) => theme.device.mobile} {
    flex-wrap: wrap;

    button {
      margin-top: 10px;
    }
  }

  & h2 {
    margin: 0;
  }

  & button {
    align-self: flex-end;
  }
`;
const StyledNewsHeaderText = styled.div``;

const StyledNewsContent = styled.div``;

const StyledNewsList = styled(UL)`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
  column-gap: 24px;
  row-gap: 38px;

  @media ${({theme}) => theme.device.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const StyledNewsItem = styled.li`
  &:hover {
    & div > div {
      box-shadow: 0px 0px 18px 3px rgba(255, 255, 255, 0.2);
    }
  }

  ${(props) =>
    props.$big &&
    css`
      grid-column: span 1;
      grid-row: span 2;

      width: 45vw;

      @media ${({theme}) => theme.device.mobile} {
        width: 100%;
      }
    `}
`;

const StyledNewsLink = styled.a`
  cursor: pointer;
`;

export {
  StyledNews,
  StyledNewsHeader,
  StyledNewsHeaderText,
  StyledNewsContent,
  StyledNewsList,
  StyledNewsItem,
  StyledNewsLink,
};
