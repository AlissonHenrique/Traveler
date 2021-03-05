import styled from "styled-components";
export const ContainerHeader = styled.div`
  background: #fff;
  border-bottom: 1px solid #dce2e6;
`;
export const Header = styled.div`
  width: 100%;
  max-width: 1168px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;

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
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1168px;
  padding: 0 24px;
  margin: 0 auto;
`;

export const ContainerFillter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 0;
  h1 {
    font-family: "Barlow", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 46px;
    color: #123952;
  }
  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dce2e6;
    width: 275px;
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
        font-family: "Roboto", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 26px;
        color: #123952;
      }
      border-bottom: 2px solid #f25d27;
    }
  }
`;
export const ContainerCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
export const Search = styled.div`
  display: flex;
  align-items: center;
  width: 416px;
  height: 48px;
  background: #f5f8fa;
  border: 1px solid #dce2e6;
  border-radius: 10px;
  padding: 14px 16px;
  input {
    flex: 1;
    padding: 0 0 0 20px;
    box-sizing: border-box;
    border: 0;
    background: #f5f8fa;
    color: #123952;
    font-family: "Heebo", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    ::placeholder {
      color: #a0acb3;
      font-family: "Heebo", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;
    }
  }
`;
export const NoSearch = styled.div`
  width: 250px;
  margin: calc(10%) auto 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    margin-top: 32px;
    font-family: Heebo;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    color: #617480;
  }
`;
