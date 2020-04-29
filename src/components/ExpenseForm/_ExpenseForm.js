import styled from 'styled-components';
import settings from '../../styles/base/settings';
export { Container } from '../../styles/components/Container';
export { Button } from '../../styles/components/Buttons';
export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin: 20px;
  > * {
    margin-bottom: ${settings.m_size};
  }
`;
