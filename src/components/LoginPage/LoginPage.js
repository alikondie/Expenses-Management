import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';
import { Button } from '../../styles/components/Buttons';
import { LoginWrapper } from './_LoginPage';
import { Box, Title, Text } from '../../styles/components/Box';
const LoginPage = ({ startLogin }) => {
  return (
    <LoginWrapper>
      <Box>
        <Title>Expense Management</Title>
        <Text>Manage your expenses with ease</Text>
        <Button onClick={startLogin} id='login'>
          Login with Google
        </Button>
      </Box>
    </LoginWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
