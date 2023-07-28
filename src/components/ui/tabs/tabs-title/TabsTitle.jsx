import {StyledTabsTitle, StyledTabsImg} from './style';

export function TabsTitle({data}) {
  return (
    <StyledTabsTitle>
      <StyledTabsImg src={data}></StyledTabsImg>
    </StyledTabsTitle>
  );
}
