import styled from "styled-components";
import { shade } from "polished";
export const Header = styled.div`
  width: 100%;
  max-width: 1168px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  @media (max-width: 1200px) {
  }
  button {
    display: block;
    border-radius: 10px;
    width: 174px;
    height: 48px;
    background-color: #dde9f0;
    color: #115d8c;

    border: 0;

    font-family: "Heebo", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
  }
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1168px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 24px;
  .box-one {
    margin: 138px 0 0 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 350px;
    height: 480px;
    h1 {
      font-family: "Barlow", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 80px;
      line-height: 74px;
      color: #123952;
    }
    p {
      font-family: "Heebo", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 30px;
      color: #617480;
    }
    button {
      border: 0;
      width: 329px;
      height: 72px;
      background: #f25d27;
      border-radius: 10px;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
      color: #ffffff;
      transition: background-color 0.2s;
      &:hover {
        background: ${shade(0.2, "#f25d27")};
      }
    }
  }

  .box-two {
    width: 100%;
    max-width: 640px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .cl2 {
      padding: 76px 0 0 0;
    }
  }
`;
