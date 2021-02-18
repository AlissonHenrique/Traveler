import React from 'react';
import Card from '../../components/Card';
import MenuBar from '../../components/MenuBar';
import { Container, Header, Content } from './styles';

function Cities() {
  return (
    <Container>
      <MenuBar />
      <div className="content">
        <Header>
          <h1>Cidades</h1>
          <button type="button">+ Adicionar um perfil</button>
        </Header>
        <Content>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Content>
      </div>
    </Container>
  );
}
export default Cities;
