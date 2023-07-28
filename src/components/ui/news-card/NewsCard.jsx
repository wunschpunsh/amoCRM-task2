import {Title} from '../title/Title';

import {
  StyledNewsCard,
  StyledNewsCardImgWrapper,
  StyledNewsCardImg,
  StyledNewsCardDate,
} from './style';

export function NewsCard({src, date, title, $big}) {
  return (
    <StyledNewsCard>
      <StyledNewsCardImgWrapper $big={$big}>
        <StyledNewsCardImg src={src}></StyledNewsCardImg>
      </StyledNewsCardImgWrapper>
      <StyledNewsCardDate $big={$big}>{date}</StyledNewsCardDate>
      <Title level={3} $big={$big}>
        {title}
      </Title>
    </StyledNewsCard>
  );
}
