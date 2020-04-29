import styled from 'styled-components';
import settings from '../base/settings';
export const Box = styled.div`
  background-color: rgba(
    200,
    200,
    200,
    0.7
  ); /* Used if the image is unavailable */ /* You must set a specified height */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  border-radius: 3px;
  padding: 1rem 1rem 3rem 1rem;
`;

export const Title = styled.h1`
  margin: 0 0 ${settings.m_size} 0;
  line-height: 1;
  color: #111111;
`;

export const Text = styled.p`
  margin: 0 0 ${settings.m_size} 0;
  font-size: 1.3rem;
  word-break: break-all;
  color: #111111;
`;
