import {
  Header,
  ContainerHeader,
  Back,
  ContainerBanner,
  Container,
  Box1,
  Box2,
  Box3,
  Box4,
} from "../../styles/pages/City.module";
import {
  FiCalendar,
  FiCoffee,
  FiCamera,
  FiArrowLeft,
  FiAlertCircle,
} from "react-icons/fi";
import logo from "../../assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CardEvent from "../../components/CardEvent";
import { GetServerSideProps } from "next";
interface ICities {
  name: string;
  description: string;
  image: string;
}
interface CitiesProps {
  cities: ICities;
}
const pathImg = "http://localhost:4444/";
export default function Cidade({ cities }: CitiesProps) {
  return (
    <>
      <ContainerHeader>
        <Header>
          <div className="btn-back">
            <Image alt="Logo" src={logo} width={156} height={32} />

            <Link href={"/list"}>
              <Back>
                <FiArrowLeft color="#A0ACB3" size={30} />
              </Back>
            </Link>
          </div>
          <p>Cidade</p>
          <button type="button">Acesso restrito</button>
        </Header>
      </ContainerHeader>
      <ContainerBanner image={`${pathImg}${cities.image}`} />

      <Container>
        <Box1>
          <div className="text">
            <h1>{cities.name}</h1>

            <p>{cities.description}</p>

            <span>
              É famosa pelas suas praias, incluindo estâncias turísticas
              populares como a Praia dos Ingleses na extremidade norte da ilha.
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
              Uma parte do paraíso na terra. Frequentemente com águas claras em
              tons verdes e azuis. Um dos locais mais preferidos por turistas e
              viajantes.
            </p>
          </div>
          <div className="box-content-2"></div>
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
      </Container>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params;

  const response = await fetch(
    `http://localhost:4444/cities/${String(slug[1])}`
  );

  const cities = await response.json();

  return {
    props: {
      cities,
    },
  };
};
