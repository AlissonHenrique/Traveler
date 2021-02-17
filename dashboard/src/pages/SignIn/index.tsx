import React from 'react';
import MenuBar from '../../components/MenuBar';

import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <MenuBar />
      <div className="img" />
      <div className="containerLolgin">
        <h1>Fazer login</h1>
      </div>
    </Container>
  );
};

export default SignIn;
