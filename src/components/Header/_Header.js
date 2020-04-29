import styled from 'styled-components';
import settings from '../../styles/base/settings';
import colors from '../../styles/base/colors';
export { Button } from '../../styles/components/Buttons';
export { StyledLink } from '../../styles/components/Link';
export const HeaderWrapper = styled.div`
  background: ${colors.dark_grey};
`;

export const HeaderTitle = styled.h1`
  color: white;
  text-decoration: none;
  h1 {
    margin: 0;
  }
`;

export const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: ${settings.xs_size} 0;
`;
