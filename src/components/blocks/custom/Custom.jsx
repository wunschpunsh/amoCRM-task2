import {Container} from '../../layout/container/Container';
import {Tabs} from '../../ui/tabs/Tabs';

import {
  StyledCustom,
  StyledCustomWrapper,
  StyledCustomImgWrapper,
  StyledCustomImg,
  StyledCustomContent,
} from './style';

import customImg from '../../../images/promo/promo-2.png';
import hero1 from '../../../images/hero/hero-1.png';
import hero2 from '../../../images/hero/hero-2.png';
import hero3 from '../../../images/hero/hero-3.png';

const tabsData = [
  {
    title: `${hero1}`,
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.',
  },
  {
    title: `${hero2}`,
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  },
  {
    title: `${hero3}`,
    description:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem',
  },
];

export function Custom() {
  return (
    <StyledCustom>
      <Container>
        <StyledCustomWrapper>
          <StyledCustomImgWrapper>
            <StyledCustomImg
              src={customImg}
              alt='персонаж игры'
              width={596}
              height={695}
            ></StyledCustomImg>
          </StyledCustomImgWrapper>
          <StyledCustomContent>
            <Tabs tabs={tabsData}></Tabs>
          </StyledCustomContent>
        </StyledCustomWrapper>
      </Container>
    </StyledCustom>
  );
}
