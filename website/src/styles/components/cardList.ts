import styled from "styled-components";

interface ICardProps {
  image: string;
}
export const CardItem = styled.div`
  width: 100%;
  max-width: 254px;
  border-radius: 20px;
  margin-bottom: 32px;

  .description {
    background-color: #fff;
    padding: 24px 26px;
    border: 1.17814px solid #dce2e6;
    border-radius: 0 0 20px 20px;
    p {
      font-family: "Barlow", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: #123952;
    }
    span {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 28px;
      color: #617480;
      display: block;
    }
  }
`;
export const CardImage = styled.div<ICardProps>`
  height: 175px;
  width: 100%;
  background: url(${(props) => props.image}) no-repeat center top;
  background-size: 100%;
  border-radius: 20px 20px 0 0;
`;
