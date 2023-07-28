import {Container} from '../../layout/container/Container';
import {HotTitle} from '../../ui/hot-title/HotTitle';
import {Title} from '../../ui/title/Title';
import {Button} from '../../ui/button/Button';
import {NewsCard} from '../../ui/news-card/NewsCard';

import {
  StyledNews,
  StyledNewsHeader,
  StyledNewsHeaderText,
  StyledNewsContent,
  StyledNewsList,
  StyledNewsItem,
  StyledNewsLink,
} from './style';

import imgNews1 from '../../../images/news/news-1.png';
import imgNews2 from '../../../images/news/news-2.png';
import imgNews3 from '../../../images/news/news-3.png';
import imgNews4 from '../../../images/news/news-4.png';
import imgNews5 from '../../../images/news/news-5.png';

const newsData = [
  {
    img: `${imgNews1}`,
    date: 'April 2, 2021',
    title: 'Esports Group teams up with the Indianapolis Colts',
  },
  {
    img: `${imgNews2}`,
    date: 'April 2, 2021',
    title: 'NAVI reveals s1mple fifth anniversary',
  },
  {
    img: `${imgNews3}`,
    date: 'April 2, 2021',
    title: 'A1esports Shares new picture',
  },
  {
    img: `${imgNews4}`,
    date: 'April 2, 2021',
    title: 'T1 unveil partnership with Razer',
  },
  {
    img: `${imgNews5}`,
    date: 'April 2, 2021',
    title: 'RX secures content partnership with',
  },
];

export function News() {
  return (
    <StyledNews>
      <Container>
        <StyledNewsHeader>
          <StyledNewsHeaderText>
            <HotTitle></HotTitle>
            <Title level={2}>
              Latest News &<br /> Articles
            </Title>
          </StyledNewsHeaderText>
          <Button>Read More</Button>
        </StyledNewsHeader>
        <StyledNewsContent>
          <StyledNewsList>
            {newsData.map((item, index) => (
              <StyledNewsItem key={item.img} $big={!index}>
                <StyledNewsLink>
                  <NewsCard
                    $big={!index}
                    src={item.img}
                    date={item.date}
                    title={item.title}
                  ></NewsCard>
                </StyledNewsLink>
              </StyledNewsItem>
            ))}
          </StyledNewsList>
        </StyledNewsContent>
      </Container>
    </StyledNews>
  );
}
