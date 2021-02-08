import styled from "styled-components";
import { darken } from "polished";
export const ContainerModal = styled.div`
  .header-modal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
    border-bottom: 1px solid #dce2e6;
    background: #fff;
    border-radius: 20px 20px 0 0;
    .content-box-1 {
      width: 280px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .content-box-2 {
      width: 185px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .close {
        cursor: pointer;
      }
    }
    p {
      font-family: Barlow;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;

      color: #f25d27;
    }
    .comment {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      span {
        font-family: Barlow;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
        color: #617480;
        display: block;
        margin-left: 16px;
      }
    }
    p.add {
      font-family: Heebo;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;

      text-align: right;

      color: #617480;
    }
  }
  .risco {
    width: 89%;
    height: 1px;
    background: #d7e0e6;
    margin: 0 auto;
  }
`;
export const ContentModal = styled.div`
  height: 524px;
  background: #f5f8fa;
  padding: 32px 40px;
  overflow: auto;
  margin-right: 40px;
  &::-webkit-scrollbar-track {
    background-color: #d7e0e6;
  }
  &::-webkit-scrollbar {
    width: 6px;
    background: #d7e0e6;
  }
  &::-webkit-scrollbar-thumb {
    background: #115d8c;
    border-radius: 20px;
  }

  .card {
    display: flex;
    justify-content: flex-start;

    .descripition {
      margin-left: 24px;
      border-bottom: 1px solid #dce2e6;
      padding-bottom: 24px;
      margin-bottom: 24px;
      p {
        font-family: Barlow;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 26px;
        margin-bottom: 8px;
        color: #617480;
      }
      span {
        font-family: Heebo;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        display: block;
        color: #617480;
        margin-bottom: 8px;
      }
    }
  }
`;

export const ContainerModalAdd = styled.div`
  .header-modal-add {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 30px 40px;
    border-bottom: 1px solid #dce2e6;

    p {
      font-family: Barlow;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;

      color: #115d8c;
    }
  }
  .content-modal {
    padding: 40px;

    .content-stars {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;
      p {
        font-family: Heebo;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: #f25d27;
      }
      .content-icons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 10px;

        .box-icon {
          width: 104px;
          height: 48px;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #dce2e6;
          border-right: unset;
          &:nth-child(1) {
            border-radius: 10px 0px 0px 10px;
          }
          &:nth-last-child(1) {
            border-radius: 0px 10px 10px 0px;
            border-right: 1px solid #dce2e6;
          }
        }
      }
    }
    .content-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 40px;
      .alert {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 245px;
        p {
          font-family: Heebo;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 22px;
          color: #617480;
          margin-left: 24px;
          display: block;
        }
      }
      button {
        width: 181px;
        height: 48px;
        left: 867px;
        top: 586px;
        background: #51b853;
        border-radius: 10px;
        border: 0;
        font-family: Heebo;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: #ffffff;
        &:hover {
          background: ${darken(0.03, "#449C47")};
        }
      }
    }
  }
`;
