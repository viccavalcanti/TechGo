import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.button`
  background: #0ba4fa;
  height: 46px;
  border-radius: 16px;
  border: 0;
  padding: 3px, 8px, 3px, 8px;
  width: 435px;
  color: #eee;
  margin-top: 25px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.1, '#4169E1')};
  }
`;
