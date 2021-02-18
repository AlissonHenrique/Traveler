import styled from 'styled-components';
import Img from '../../assets/img-4.png';

export const Container = styled.div`
  width: 256px;
  background: url(${Img}) no-repeat;
  border-radius: 16px 16px 0px 0px;

  .bgCard {
    padding: 16px;
    height: 160px;
    display: flex;
    justify-content: flex-end;

    button {
      background: #ffffff;
      border: 1px solid #dce2e6;
      box-sizing: border-box;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      &.edit {
        border-radius: 10px 0px 0px 10px;
        margin-right: 4px;
      }
      &.remove {
        border: 1px solid #dce2e6;
        box-sizing: border-box;
        border-radius: 0px 10px 10px 0px;
      }
    }
  }
  .footerCard {
    background-color: #fff;
    border: 1px solid #dce2e6;
    box-sizing: border-box;
    border-radius: 0 0 16px 16px;
    padding: 24px;

    p {
      font-family: Barlow;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: #123952;
    }
    span {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 28px;
      color: #617480;
    }
  }
`;
