import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';
import ImgBoxDestaque from '../../assets/bgDestaque.png';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  .content {
    width: calc(100vw - 96px);
    img {
      width: calc(100vw - 96px);
    }
  }
`;
export const Header = styled.div`
  width: calc(100vw - 96px);
  height: 96px;
  border-bottom: 1px solid #dce2e6;
  background: #fff;
  padding: 0 112px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 46px;
    color: #123952;
  }
  button {
    width: 214px;
    height: 48px;
    background: #51b853;
    border-radius: 10px;
    border: none;
    color: #fff;
    &:hover {
      background: ${darken(0.03, '#51b853')};
    }
  }
  .content-btn {
    display: flex;

    .box-btns {
      display: flex;
      margin-right: 24px;
      .edit {
        background: #ffffff;
        border: 1px solid #dce2e6;
        box-sizing: border-box;
        border-radius: 10px 0px 0px 10px;
        height: 48px;
        width: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 4px;
        cursor: pointer;
      }
      .remove {
        background: #ffffff;
        border: 1px solid #dce2e6;
        box-sizing: border-box;
        border-radius: 0px 10px 10px 0px;
        height: 48px;
        width: 48px;
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const Back = styled(Link)`
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
export const Content = styled.div`
  padding: 80px 112px;
`;

export const Box1 = styled.div`
  display: flex;
  justify-content: space-between;

  .text {
    width: 100%;
    max-width: 506px;

    h1 {
      font-family: 'Barlow', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 54px;
      line-height: 54px;
      color: #123952;
    }

    p {
      font-family: 'Heebo', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 30px;

      color: #123952;
      margin-top: 40px;
    }
    span {
      font-family: 'Heebo', sans-serif;
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
          font-family: 'Barlow', sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 40px;
          line-height: 40px;
          color: #123952;
        }
        span {
          font-family: 'Heebo', sans-serif;
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
    font-family: 'Barlow', sans-serif;
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
  justify-content: space-between;
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
      font-family: 'Barlow', sans-serif;
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
      font-family: 'Barlow', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 36px;
      color: #123952;
      margin-bottom: 16px;
    }
    p {
      font-family: 'Heebo', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;
      color: #617480;
    }
  }
  .box-content-2 {
    background: url(${ImgBoxDestaque}) no-repeat right;
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
      font-family: 'Barlow', sans-serif;
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
        font-family: 'Roboto', sans-serif;
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
