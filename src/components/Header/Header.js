import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../../actions/auth';
import {
  HeaderWrapper,
  HeaderTitle,
  HeaderContent,
  Button,
  StyledLink,
} from './_Header';
import { Container } from '../../styles/components/Container';

export const Header = ({ startLogout }) => (
  <HeaderWrapper>
    <Container>
      <HeaderContent>
        <StyledLink to='/dashboard'>
          <HeaderTitle>Expensify</HeaderTitle>
        </StyledLink>
        <Button onClick={startLogout}>Logout</Button>
      </HeaderContent>
    </Container>
  </HeaderWrapper>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
