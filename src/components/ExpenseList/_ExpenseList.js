import styled from 'styled-components';
import settings from '../../styles/base/settings';
import colors from '../../styles/base/colors';
export const Title = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: rgba(205, 205, 205);
  max-width: 45rem;
  background: linear-gradient(90deg, rgba(255, 255, 255), rgba(245, 245, 245));
  padding: 0 ${settings.s_size};
  margin: ${settings.xs_size} 0;
`;
