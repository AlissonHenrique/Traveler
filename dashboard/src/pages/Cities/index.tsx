import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/addprofilecity">
            <button type="button">+ Adicionar um perfil</button>
          </Link>
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
