import {Container} from '../../layout/container/Container';
import {HotTitle} from '../../ui/hot-title/HotTitle';
import {Title} from '../../ui/title/Title';
import {StyledUnderline} from '../../ui/underline/style';
import {Button} from '../../ui/button/Button';

import {
  StyledPromo,
  StyledPromoContent,
  StyledPromoDescription,
  StyledPromoInterface,
  StyledPromoWrapper,
  StyledPromoImgWrapper,
  StyledPromoImg,
} from './style';

import promoImg from '../../../images/promo/promo-1.png';

export function Promo() {
  return (
    <StyledPromo>
      <Container>
        <StyledPromoWrapper>
          <StyledPromoContent>
            <HotTitle></HotTitle>
            <Title level={1}>
              Unleash the Next <StyledUnderline>Generation</StyledUnderline> of
              Gaming
            </Title>
            <StyledPromoDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis,
              <br />
              nec donec in morbi pulvinar. Enim non pulvinar neque.
            </StyledPromoDescription>
            <StyledPromoInterface>
              <Button>Explore More</Button>
              <Button $secondary>View our team</Button>
            </StyledPromoInterface>
          </StyledPromoContent>
          <StyledPromoImgWrapper>
            <StyledPromoImg
              src={promoImg}
              alt='игровые персонажи'
              width={660}
              height={518}
            ></StyledPromoImg>
          </StyledPromoImgWrapper>
        </StyledPromoWrapper>
      </Container>
    </StyledPromo>
  );
}
