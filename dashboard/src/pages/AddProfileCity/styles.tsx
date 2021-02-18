import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  .content {
    width: calc(100vw - 96px);
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

  p {
    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #a0acb3;
  }

  .content-btn {
    display: flex;
    width: 50px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    color: #617480;
  }
`;
export const Content = styled.div`
  padding: 48px 112px;
`;
export const BoxWhite = styled.div`
  width: 800px;
  background: #ffffff;
  border: 1px solid #dce2e6;
  box-sizing: border-box;
  border-radius: 16px;
  margin: 0 auto;
  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 40px 64px;
    border-bottom: 1px solid #dce2e6;
    background: linear-gradient(
      90deg,
      #f5fff5 0%,
      rgba(220, 245, 221, 0) 62.99%
    );
    border-radius: 15px 15px 0px 0px;

    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 34px;
      color: #51b853;
    }
    .box-number {
      width: 64px;
      height: 64px;
      background: #51b853;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 40px;
      p {
        font-family: Barlow;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 34px;
        text-align: center;

        color: #ffffff;
      }
    }
  }
  .content {
    padding: 64px 48px;
    width: 100%;
    h2 {
      font-family: Barlow;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 30px;
      color: #123952;
    }
    .risco {
      width: 100%;
      height: 1px;
      background: #dce2e6;
      margin: 16px 0 24px 0;
    }
    form {
      .input-block {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
        label {
          font-family: Heebo;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 22px;
          color: #617480;
          margin-bottom: 10px;
        }
        input {
          height: 56px;
          background: #f5f8fa;
          border: 1px solid #dce2e6;
          box-sizing: border-box;
          border-radius: 10px;
          padding: 16px 24px;
        }
        textarea {
          height: 202px;
          background: #f5f8fa;
          border: 1px solid #dce2e6;
          box-sizing: border-box;
          border-radius: 10px;
          padding: 16px 24px;
        }
        input,
        textarea {
          font-family: Heebo;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 26px;

          color: #123952;
        }

        .new-image {
          width: 100%;
          height: 160px;
          background: #f5f8fa;
          border: 2px dashed #dce2e6;
          border-radius: 16px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #f25d27;
          font-size: 16px;
        }
        .images-container {
          input[type='file'] {
            display: none;
          }
        }
      }
    }
    .content-button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top:48px;
      .content-icon {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-family: Heebo;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 22px;
          color: #617480;
          margin-left: 24px;
        }
      }
      button {
        width: 125px;
        height: 48px;

        background: #115d8c;
        border-radius: 10px;
        border: 0;
        color: #ffffff; &:hover {
      background: ${lighten(0.03, '#115d8c')};
    }
  }
      }
    }
  }
`;
