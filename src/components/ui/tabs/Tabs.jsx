import {HotTitle} from '../hot-title/HotTitle';
import {Title} from '../title/Title';
import {TabsTitle} from './tabs-title/TabsTitle';
import {useState} from 'react';

import {
  StyledTabs,
  StyledTabsContent,
  StyledTabsDescription,
  StyledTabsNav,
  StyledTabsList,
  StyledTabsItem,
} from './style';

export function Tabs({tabs}) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledTabs>
      <StyledTabsContent>
        <HotTitle></HotTitle>
        <Title level={2}>Customize your Own Character</Title>
        <StyledTabsDescription>
          {tabs[activeTab].description}
        </StyledTabsDescription>
      </StyledTabsContent>
      <StyledTabsNav>
        <StyledTabsList>
          {tabs.map((tab, index) => (
            <StyledTabsItem
              $active={index === activeTab}
              key={tab.title}
              onClick={() => setActiveTab(index)}
            >
              <TabsTitle data={tab.title}></TabsTitle>
            </StyledTabsItem>
          ))}
        </StyledTabsList>
      </StyledTabsNav>
    </StyledTabs>
  );
}
