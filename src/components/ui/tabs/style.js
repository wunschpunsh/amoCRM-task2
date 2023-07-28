import styled, {css} from 'styled-components';
import {P} from '../../reset-elements/p';
import {UL} from '../../reset-elements/ul';

const StyledTabs = styled.div``;
const StyledTabsNav = styled.nav``;
const StyledTabsList = styled(UL)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;
`;
const StyledTabsItem = styled.li`
  border-radius: 20px;

  ${(props) =>
    props.$active &&
    css`
      outline: 11px solid #3b3d46;
    `}
`;
const StyledTabsContent = styled.div``;

const StyledTabsDescription = styled(P)`
  font-size: 20px;
  line-height: 30px;

  margin-bottom: 54px;

  color: rgba(223, 223, 223, 0.8);
`;

export {
  StyledTabs,
  StyledTabsNav,
  StyledTabsList,
  StyledTabsItem,
  StyledTabsContent,
  StyledTabsDescription,
};
