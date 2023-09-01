import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

export const PosterContainer = styled.div`
  max-width: 200px;
  margin-right: 20px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const MovieInfoContainer = styled.div`
  flex: 1;

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 18px;
    margin-top: 20px;
  }

  p {
    font-size: 16px;
  }

  span {
    margin-right: 10px;
    font-size: 14px;
    background-color: #eee;
    padding: 5px 10px;
    border-radius: 5px;
  }
`;

export const AdditionalInfoContainer = styled.div`
  margin-top: 20px;
  h3 {
    font-size: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin-top: 10px;
  }

  li {
    font-size: 16px;
    margin-bottom: 12px;
  }

  a {
    color: #0077cc;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
