import React from 'react';
import {
  FiAlertCircle,
  FiArrowLeft,
  FiCalendar,
  FiCamera,
  FiCoffee,
  FiEdit3,
  FiTrash,
} from 'react-icons/fi';
import MenuBar from '../../components/MenuBar';

import {
  Container,
  Header,
  Content,
  Back,
  Box1,
  Box2,
  Box3,
  Box4,
} from './styles';
import Img from '../../assets/bg-interna.png';
import CardEvent from '../../components/CardEvent';

function ProfileCity() {
  return (
    <Container>
      <MenuBar />
      <div className="content">
        <Header>
          <Back to="/list">
            <FiArrowLeft color="#A0ACB3" size={20} />
          </Back>
          <div className="content-btn">
            <div className="box-btns">
              <div className="edit">
                <FiEdit3 size={20} color="617480" />
              </div>
              <div className="remove">
                <FiTrash size={20} color="617480" />
              </div>
            </div>
            <button type="button">+ Adicionar um local</button>
          </div>
        </Header>
        <img src={Img} alt="Banner" />
        <Content>
          <Box1>
            <div className="text">
              <h1>Florianópolis</h1>

              <p>
                Capital do estado de Santa Catarina no sul do Brasil, é
                maioritariamente constituída pela Ilha de Santa Catarina, com 54
                km de comprimento.
              </p>

              <span>
                É famosa pelas suas praias, incluindo estâncias turísticas
                populares como a Praia dos Ingleses na extremidade norte da
                ilha.
              </span>
            </div>
            <div className="cardTypes">
              <div className="cardTypesInner">
                <div className="cardTypesInnerIcon">
                  <FiCamera color="#F25D27" size={30} />
                </div>
                <div className="cardTypesInnerText">
                  <p>67</p>
                  <span>Pontos Turísticos</span>
                </div>
              </div>
              <div className="cardTypesInner">
                <div className="cardTypesInnerIcon">
                  <FiCoffee color="#F25D27" size={30} />
                </div>
                <div className="cardTypesInnerText">
                  <p>20</p>
                  <span>Comida e Bebida</span>
                </div>
              </div>
              <div className="cardTypesInner">
                <div className="cardTypesInnerIcon">
                  <FiCalendar color="#F25D27" size={30} />
                </div>
                <div className="cardTypesInnerText">
                  <p>11</p>
                  <span>Eventos Organizados</span>
                </div>
              </div>
            </div>
          </Box1>
          <Box2>
            <h2>Top avaliados</h2>
            <div className="box-cards">
              <CardEvent />
              <CardEvent />
              <CardEvent />
              <CardEvent />
            </div>
          </Box2>
          <Box3>
            <div className="box-content-1">
              <button type="button">
                <FiAlertCircle color="#fff" size={20} />
                Destaque
              </button>
              <h2>Praia dos Ingleses</h2>

              <p>
                Uma parte do paraíso na terra. Frequentemente com águas claras
                em tons verdes e azuis. Um dos locais mais preferidos por
                turistas e viajantes.
              </p>
            </div>
            <div className="box-content-2" />
          </Box3>
          <Box4>
            <div className="header-filter">
              <h2>Conheça todos</h2>
              <div className="container-filter">
                <div className="active">
                  <p>Todos</p>
                </div>
                <div>
                  <p>Pontos Turísticos</p>
                </div>
                <div>
                  <p>Comida & Bebida</p>
                </div>
                <div>
                  <p>Eventos Organizados</p>
                </div>
              </div>
            </div>

            <div className="box-cards">
              <CardEvent />
              <CardEvent />
              <CardEvent />
              <CardEvent />
              <CardEvent />
              <CardEvent />
              <CardEvent />
              <CardEvent />
            </div>
          </Box4>
        </Content>
      </div>
    </Container>
  );
}

export default ProfileCity;
