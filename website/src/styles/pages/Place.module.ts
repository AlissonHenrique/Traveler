import styled from "styled-components";
import bgEat from "../../assets/images/bgEat.png";
import { shade } from "polished";
export const ContainerHeader = styled.div`
  background: #fff;
  border-bottom: 1px solid #dce2e6;
`;
export const Header = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  p {
    font-family: "Barlow", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;

    color: #a0acb3;
  }
  button {
    display: block;
    border-radius: 10px;
    width: 174px;
    height: 48px;
    background-color: #dde9f0;
    color: #115d8c;

    border: 0;

    font-family: Heebo, Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
  }
  .btn-back {
    display: flex;
    align-items: center;
  }
`;

export const Back = styled.div`
  border-radius: 10px;
  border: 1px solid #dce2e6;
  width: 40px;
  height: 40px;
  margin-left: 34px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BgContainer = styled.div`
  background: url(${bgEat}) no-repeat;
  background-size: cover;
  width: 682px;
  height: 821px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 64px 0;
  .content {
    width: 450px;
    h1 {
      font-family: "Barlow", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 54px;
      line-height: 54px;
      color: #123952;
    }

    p {
      font-family: "Heebo", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 30px;
      color: #617480;
      margin: 32px 0 80px 0;
    }
    h2 {
      font-family: "Barlow", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 34px;
      color: #123952;
    }
    .linha {
      width: 100%;
      height: 1px;
      background: #dce2e6;
      margin: 16px 0 32px 0;
    }
    .box-cards-day {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      .card-day {
        width: 104px;
        height: 84px;
        background: #fff;
        border: 1px solid #dce2e6;
        border-radius: 8px;
        padding: 16px;
        margin: 0 8px 8px 0;
        p {
          font-family: "Barlow", sans-serif;
          font-weight: 400;
          font-style: normal;
          font-size: 16px;
          line-height: 26px;
          margin: 0;
          color: #123952;
        }
        span {
          font-family: "Barlow", sans-serif;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 26px;
          color: #123952;
        }
      }
    }
    .contact {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 43px 0 83px 0;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        width: 225px;
        height: 48px;
        background: #51b853;
        border: 0;
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        margin-right: 32px;

        p {
          color: #fff;
          margin-left: 12px;
        }
        transition: background-color 0.2s;
        &:hover {
          background: ${shade(0.03, "#449C47")};
        }
      }
      p {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #617480;
        margin: 0;
      }
      span {
        font-family: Barlow;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        color: #123952;
      }
    }
    .address {
      .header-adress {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 16px;
        border-bottom: 1px solid #dce2e6;
        margin-bottom: 32px;
        p {
          font-family: Barlow;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 34px;
          margin: 0;
          color: #123952;
        }
        span {
          font-family: Heebo;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;

          text-align: right;

          color: #a0acb3;
        }
      }
      p.adress-text {
        font-family: Heebo;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;

        color: #617480;
      }
    }

    .relationship {
      .relationship-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;

        border-bottom: 1px solid #dce2e6;
        padding-bottom: 16px;
        margin-bottom: 32px;
        .relationship-tit {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 200px;
          .med {
            display: flex;
            justify-content: space-between;
            padding-top: 5px;

            span {
              font-family: Barlow;
              font-style: normal;
              font-weight: 600;
              font-size: 20px;
              line-height: 20px;
              color: #f25d27;
              display: block;
              margin-left: 12px;
            }
          }
        }
        .buttons {
          display: flex;
          justify-content: space-between;
          width: 140px;
          cursor: pointer;
        }
        p {
          margin: 0;
          font-family: Barlow;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 34px;
          color: #123952;
        }
        span {
          font-family: Heebo;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
          text-align: right;
          color: #a0acb3;
        }
      }
    }
    .box-comment {
      display: grid;
      grid-template-columns: 64px 1fr;
      grid-gap: 16px;
      .box-img {
      }
      .content-card {
        p {
          margin: 0;
          font-family: Heebo;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 26px;
          color: #617480;
        }
        border-bottom: 1px solid #dce2e6;
        padding-bottom: 24px;
        margin-bottom: 24px;
        .content-title {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
          p {
            margin: 0;
            font-family: Barlow;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 26px;
            color: #617480;
          }
        }
      }
    }
  }
`;
