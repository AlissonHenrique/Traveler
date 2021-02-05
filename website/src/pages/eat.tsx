import React from "react";
import {
  ContainerHeader,
  Header,
  Back,
  BgContainer,
  Container,
} from "../styles/pages/eat";

import Image from "next/image";
import logo from "../assets/images/logo.svg";
import mapa from "../assets/images/Mapa.png";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
export default function Eat() {
  return (
    <>
      <ContainerHeader>
        <Header>
          <div className="btn-back">
            <Image alt="Logo" src={logo} width={156} height={32} />
            <Back>
              <Link href={"/list"}>
                <FiArrowLeft color="#A0ACB3" size={30} />
              </Link>
            </Back>
          </div>
        </Header>
      </ContainerHeader>
      <BgContainer />
      <Container>
        <div className="content">
          <h1>Doce & Companhia</h1>

          <p>
            O melhor lugar da cidade para você tomar um bom café. Fatias de
            tortas artesanais, bolos, lanches e biscoitos caseiros.
          </p>

          <h2>Atendimento</h2>
          <div className="linha"></div>
          <div className="box-cards-day">
            <div className="card-day">
              <p>Domingo</p>
              <span>Fechado</span>
            </div>
            <div className="card-day">
              <p>Segunda</p>
              <span>8h - 19h</span>
            </div>
            <div className="card-day">
              <p>Terça</p>
              <span>8h - 19h</span>
            </div>
            <div className="card-day">
              <p>Quarta</p>
              <span>8h - 19h</span>
            </div>
            <div className="card-day">
              <p>Quinta</p>
              <span>8h - 19h</span>
            </div>
            <div className="card-day">
              <p>Sexta</p>
              <span>8h - 19h</span>
            </div>
            <div className="card-day">
              <p>Sábado</p>
              <span>8h - 17h</span>
            </div>
          </div>
          <div className="contact">
            <button type="button">
              <FaWhatsapp size={20} />
              <p>Entrar em contato</p>
            </button>
            <div>
              <p>Telefone</p>
              <span>(47) 3598 7815</span>
            </div>
          </div>

          <div className="address">
            <div className="header-adress">
              <p>Endereço</p>
              <span>Ver no Google Maps</span>
            </div>
            <Image alt="Logo" src={mapa} width={448} height={164} />
            <p className="adress-text">
              Rua 7 de Setembro, 319 - Jardim América 89160-170
            </p>
          </div>

          <div className="relationship">
            <div className="relationship-header">
              <div className="relationship-tit">
                <p>Avaliações</p>
                <div className="med">4,5</div>
              </div>
              <div className="buttons">
                <span>Adicionar</span>
                <span>Ver todos</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
