import styled from 'styled-components';
import settings from '../../styles/base/settings';
import colors from '../../styles/base/colors';
export { Container } from '../../styles/components/Container';
export { Button } from '../../styles/components/Buttons';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  max-width: 30rem;
  padding: 4px;
  margin: 20px;
  > * {
    margin-bottom: ${settings.m_size};
    padding: 4px;
  }

  input,
  textarea {
    outline: none;
    > * {
      padding: ${settings.m_size} 0;
      margin: ${settings.m_size} 0;
    }
    :focus {
      background: ${colors.lightGray};
    }
  }
`;

export const TextArea = styled.textarea`
  height: 10rem;
`;
