import styled from 'styled-components';
import settings from '../../styles/base/settings';
import { Link } from 'react-router-dom';
export { StyledLink } from '../../styles/components/Link';
export const Expense = styled.div`
  border-style: solid;
  border-width: 1px;
  color: black;
  border-color: rgba(205, 205, 205);
  max-width: 45rem;
  background: linear-gradient(90deg, rgba(255, 255, 255), rgba(245, 245, 245));
  padding: 0 ${settings.s_size};
  transition: 0.3s;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(235, 235, 235),
      rgba(255, 255, 255)
    );
    cursor: pointer;
  }
`;

export const Title = styled.h3`
  text-decoration: none !important;
  font-size: 700;
`;
