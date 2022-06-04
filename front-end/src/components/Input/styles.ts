import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #eff3f8;
  border: 1px solid;
  border-radius: 4px;
  border: 2px solid #a2cefa;
  padding: 16px;
  width: 438px;
  height: 46px;
  top: 331px;
  left: 141px;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #0786fb;
      border-color: #0786fb;
    `}

    ${props =>
    props.isFilled &&
    css`
      color: #0ba4fa;
    `}


    input {
    flex: 1;
    background: transparent;
    border: none;
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  margin-left: 5px;
  svg {
    margin: 0;
  }

  span {
    background-color: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
