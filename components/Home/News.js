import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import Section from '../Section';
import Button from '../Button';
import LinkButton from '../LinkButton';

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor fncjjkvbodnvkmv dknvkdsmc ckpdmc incididunt ut labore et dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor fncjjkvbodnvkmv dknvkdsmc ckpdmc incididunt ut labore et dolor`;

export const StyledNews = styled(Section)`
  > div {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem 2rem;

    @media screen and (max-width: 900px) {
      grid-template-rows: repeat(4, auto);
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const InfoCard = styled(Card)`
  padding: 3rem 1.5rem;
  grid-row: 1 / 4;

  p {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 900px) {
  }
`;

export const Post = styled(Card)`
  padding: 1.5rem;
  display: flex;
  min-height: 175px;
  height: auto;
  position: relative;

  img {
    object-fit: cover;
    width: 35%;
    height: 100%;
  }

  > div {
    flex: 1;
    overflow: hidden;
    margin-left: 1.5rem;
    p {
      font-size: 16px;
      position: relative;
      span {
        text-overflow: ellipsis;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    img {
      width: 100%;
      height: 150px;
      margin-bottom: 1rem;
    }

    > div {
      margin-left: 0;
    }
  }
`;

const News = ({ infoBox, lang }) => {
  return (
    <StyledNews>
      <InfoCard>
        <h1>{infoBox.title}</h1>
        <p>{infoBox.text}</p>
        <LinkButton primary external href={`/${lang}/news`}>
          {infoBox.button_label}
        </LinkButton>
      </InfoCard>
      <Post>
        <img src="https://scontent.xx.fbcdn.net/v/t1.0-0/p180x540/58375032_1303716409802650_8860665179738734592_o.jpg?_nc_cat=111&_nc_ht=scontent.xx&oh=15d688e5e81ade5c7bf5111957eeccf1&oe=5D7190AA" />
        <div>
          <small>2019-03-20</small>
          <p>
            {'Det nya styrelsen som ska leda aktiviteter på Restad Gård, hoppas för dem många framgångar ✌️The new steering group that will lead activities in Restad Gård, hope for them many successes ✌️'.slice(
              0,
              170
            )}{' '}
            ...
            <a href="#">read more</a>
          </p>
        </div>
      </Post>
      <Post>
        <img src="https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/58382565_1300081406832817_485350013325541376_o.jpg?_nc_cat=107&_nc_ht=scontent.xx&oh=b338fab8290cb82b86c54cab46f1b315&oe=5D3F3508" />
        <div>
          <small>2019-03-11</small>
          <p>
            <span>
              {'Glad Påsk till er alla vänner! Hoppas för er en trevlig helg. Happy Easter to all friends! Hope for you a nice weekend.'.slice(
                0,
                170
              )}{' '}
              ...{' '}
            </span>
            <a href="#">read more</a>
          </p>
        </div>
      </Post>
      <Post>
        <img src="https://external.xx.fbcdn.net/safe_image.php?d=AQB5JZRmD6Co26yZ&url=https%3A%2F%2F8sidor.se%2Fwp-content%2Fuploads%2F2019%2F04%2F190412_folkvimmel.jpg&_nc_hash=AQDDnyWBoYPrsmTV" />
        <div>
          <small>2019-02-29</small>
          <p>
            <span>
              {"A new research show that refugees are starting to think like Swedes. It's probably gonna take many years before we think just like it. But the important thing is that most people have begun to approach our ideas, says the researcher Bi Puranen to Sweden's radio.".slice(
                0,
                170
              )}{' '}
              ...{' '}
            </span>
            <a href="#">read more</a>
          </p>
        </div>
      </Post>
    </StyledNews>
  );
};

export default News;
