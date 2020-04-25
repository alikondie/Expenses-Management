import styled from 'styled-components';
import colors from '../../base/colors';
import settings from '../../base/settings';
export const Button = styled.button`
  display: flex;
  border: none;
  font-size: 1.2rem;
  background: #aaaaaa;
  align-items: center;
  padding: ${settings.s_size};
  justify-content: center;
  cursor: pointer;
  :hover {
    background: #dddddd;
  }
  :disabled {
    background: #222222;
    cursor: default;
  }
`;
