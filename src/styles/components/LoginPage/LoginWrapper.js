import styled from 'styled-components';
import colors from '../../base/colors';

import bg from './bg.jpg';

export const LoginWrapper = styled.div`
  background-color: #cccccc; /* Used if the image is unavailable */ /* You must set a specified height */
  background-image: url(${bg});
  background-position: center; /* Center the image */
  background-repeat: repeat; /* Do not repeat the image */
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
