import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
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
`;
export const Content = styled.div`
  padding: 48px 112px;
`;
