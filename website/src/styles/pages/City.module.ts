import styled from "styled-components";
import ImgBoxDestaque from "../../assets/images/bgDestaque.png";
interface IBannerProps {
  image: string;
}
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
export const ContainerBanner = styled.div<IBannerProps>`
  width: 100%;
  height: 340px;
  background: url(${(props) => props.image}) no-repeat center top;
  background-size: 100%;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;
export const Box1 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 0 0 0;
  .text {
    width: 100%;
    max-width: 506px;

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

      color: #123952;
      margin-top: 40px;
    }
    span {
      font-family: "Heebo", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;
      color: #617480;
      display: block;
      margin-top: 32px;
    }
  }
  .cardTypes {
    display: flex;
    justify-content: space-between;
    width: 512px;
    .cardTypesInner {
      width: 160px;
      background: #fff;
      border: 1px solid #dce2e6;
      border-radius: 20px;
      .cardTypesInnerIcon {
        padding: 32px;
        border-bottom: 1px solid #dce2e6;
      }
      .cardTypesInnerText {
        padding: 32px;
        p {
          font-family: "Barlow", sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 40px;
          line-height: 40px;
          color: #123952;
        }
        span {
          font-family: "Heebo", sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 22px;
          color: #617480;
          display: block;
          margin-top: 16px;
        }
      }
    }
  }
`;
export const Box2 = styled.div`
  margin: 120px 0 32px 0;

  h2 {
    font-family: "Barlow", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 46px;

    color: #123952;
    margin-bottom: 48px;
  }
  .box-cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const Box3 = styled.div`
  background: #fff;
  border-radius: 16px;
  border: 1px solid #dce2e6;
  display: flex;
  align-items: center;
  .box-content-1 {
    padding: 46px 64px;
    width: 100%;
    max-width: 560px;
    button {
      border: 0;
      width: 120px;
      height: 32px;
      background: #f25d27;
      border-radius: 100px;
      font-family: "Barlow", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 16px;
      margin-bottom: 32px;
    }
    h2 {
      font-family: "Barlow", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 36px;
      color: #123952;
      margin-bottom: 16px;
    }
    p {
      font-family: "Heebo", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;
      color: #617480;
    }
  }
  .box-content-2 {
    background: url(${ImgBoxDestaque}) no-repeat center;
    background-size: 100%;
    height: 286px;
    width: 560px;
  }
`;
export const Box4 = styled.div`
  margin-top: 80px;
  .header-filter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      font-family: "Barlow", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 46px;
      color: #123952;
    }

    .container-filter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #dce2e6;
      width: 540px;

      cursor: pointer;

      p {
        padding: 0 0 10px 0;
        font-family: "Roboto", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #617480;
      }
      .active {
        p {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 26px;
          color: #123952;
        }
        border-bottom: 2px solid #f25d27;
      }
    }
  }
  .box-cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 44px 0;
  }
`;
