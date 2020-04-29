import styled from 'styled-components';
import colors from '../base/colors';
import settings from '../base/settings';
export const Button = styled.button`
  display: flex;
  border: none;
  color: white;
  border-radius: 4px;
  font-size: 1.2rem;
  background: ${colors.dark_blue};
  align-items: center;
  padding: ${settings.s_size};
  justify-content: center;
  transition: all 0.5s;
  cursor: pointer;
  :hover {
    background: ${colors.blue};
  }
  :disabled {
    background: ${colors.light_blue};
    cursor: default;
  }
`;
