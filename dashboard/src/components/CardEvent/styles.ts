import styled from 'styled-components';
import ImgCard from '../../assets/imgCity.png';

export const Container = styled.div`
  width: 100%;
  max-width: 256px;
  border-radius: 20px;
  margin-bottom: 48px;
  .box-star {
    position: absolute;
    z-index: 1;
    margin-top: -16px;
    margin-left: 24px;
    background: #f25d27;
    border-radius: 10px;
    width: 56px;
    height: 83px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      color: #f5f8fa;
    }
  }
  .box-btns {
    display: flex;
    margin-right: 24px;
    float: right;
    margin-top: 16px;
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
  .cardImg {
    height: 160px;
    width: 100%;
    background: url(${ImgCard}) no-repeat center bottom;
    background-size: 100%;
    border-radius: 20px 20px 0 0;
  }
  .cardTitle {
    background-color: #fff;
    padding: 24px;
    border: 1.17814px solid #dce2e6;
    border-bottom: none;
    p {
      font-family: 'Barlow', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: #123952;
    }
  }
  .cardDescription {
    background-color: #fff;
    padding: 24px;
    border: 1.17814px solid #dce2e6;
    border-radius: 0 0 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-family: Barlow;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;

      color: #617480;
    }
  }
`;
