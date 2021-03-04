import { FiArrowLeft } from "react-icons/fi";
import { IoAlertCircleOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {
  ContainerHeader,
  Header,
  Back,
  BgContainer,
  Container,
} from "../../styles/pages/Place.module";
import {
  ContainerModal,
  ContentModal,
  ContainerModalAdd,
} from "../../styles/components/ModalDepoiments.module";
import { CgCloseR } from "react-icons/cg";
import { BiComment } from "react-icons/bi";

const pathImg = "http://localhost:4444/";

import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logo.svg";
import mapa from "../../assets/images/Mapa.png";
import user from "../../assets/images/user.png";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import Modal from "react-modal";

export default function Place({ depoiments }: DepoimentsProps) {
  const customStyles = {
    overlay: {
      background: "rgba(18,57,82,0.6) ",
    },

    content: {
      width: "736px",
      height: "660px",
      left: "0",
      right: "0",
      margin: "0 auto",
      background: "#f5f8fa",
      borderRadius: "20px",
      opacity: "unset",
      padding: "0",
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenAdd, setIsOpenAdd] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  function openModalAdd() {
    setIsOpenAdd(true);
  }

  function closeModalAdd() {
    setIsOpenAdd(false);
  }
  return (
    <>
      <ContainerHeader>
        <Header>
          <div className="btn-back">
            <Image alt="Logo" src={logo} width={156} height={32} />
            <Back>
              <Link href="/list">
                <>
                  <FiArrowLeft color="#A0ACB3" size={30} />
                </>
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
                <div className="med">
                  <AiFillStar size={20} color="#F25D27" />
                  <span> 4,5</span>
                </div>
              </div>
              <div className="buttons">
                <span onClick={openModalAdd}>Adicionar</span>
                <span onClick={openModal}>Ver todos</span>
              </div>
            </div>
          </div>

          <div className="box-comment">
            <div className="box-img">
              <Image alt="Logo" src={user} width={64} height={64} />
            </div>
            <div className="content-card">
              <div className="content-title">
                <p>Maria Eduarda</p>
                <div className="stars">
                  <AiFillStar size={20} color="#F25D27" />
                  <AiFillStar size={20} color="#F25D27" />
                  <AiFillStar size={20} color="#F25D27" />
                  <AiFillStar size={20} color="#F25D27" />
                  <AiOutlineStar size={20} color="#F25D27" />
                </div>
              </div>
              <p className="description">
                Grande variedade de bolos, cucas, tortas e algumas opções de
                salgados.
              </p>
            </div>
          </div>
          <div className="box-comment">
            <div className="box-img">
              <Image alt="Logo" src={user} width={64} height={64} />
            </div>
            <div className="content-card">
              <div className="content-title">
                <p>Maria Eduarda</p>
                <div className="stars">
                  <AiFillStar size={20} color="#F25D27" />
                  <AiFillStar size={20} color="#F25D27" />
                  <AiFillStar size={20} color="#F25D27" />
                  <AiFillStar size={20} color="#F25D27" />
                  <AiOutlineStar size={20} color="#F25D27" />
                </div>
              </div>
              <p className="description">
                Grande variedade de bolos, cucas, tortas e algumas opções de
                salgados.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <ContainerModal>
          <div className="header-modal">
            <div className="content-box-1">
              <p>Nota 4,5</p>
              <div className="comment">
                <BiComment size={24} color="#A0ACB3" />
                <span>{depoiments.length} comentarios</span>
              </div>
            </div>
            <div className="content-box-2">
              <p className="add">Adicionar avaliação</p>
              <CgCloseR
                size={40}
                color="#A0ACB3"
                className="close"
                onClick={closeModal}
              />
            </div>
          </div>
          <ContentModal>
            {depoiments.map((depo) => {
              return (
                <div className="card" key={depo.id}>
                  <div>
                    <img
                      alt="Logo"
                      src={`${pathImg}${depo.avatar}`}
                      className="img"
                    />
                  </div>
                  <div className="descripition">
                    <p>{depo.name}</p>
                    <span>{depo.description}</span>
                    <div className="stars">
                      <AiFillStar size={20} color="#F25D27" />
                      <AiFillStar size={20} color="#F25D27" />
                      <AiFillStar size={20} color="#F25D27" />
                      <AiFillStar size={20} color="#F25D27" />
                      <AiOutlineStar size={20} color="#F25D27" />
                    </div>
                  </div>
                </div>
              );
            })}
          </ContentModal>
          <div className="risco"></div>
        </ContainerModal>
      </Modal>

      <Modal
        isOpen={modalIsOpenAdd}
        onRequestClose={closeModalAdd}
        style={customStyles}
        ariaHideApp={false}
      >
        <ContainerModalAdd>
          <div className="header-modal-add">
            <p>Adicionar avaliação</p>
            <CgCloseR
              size={40}
              color="#A0ACB3"
              className="close"
              onClick={closeModalAdd}
            />
          </div>
          <div className="content-modal">
            <textarea>Escreva aqui</textarea>
            <div className="content-stars">
              <p> Sua nota de 1a 5</p>
              <div className="content-icons">
                <div className="box-icon">
                  <AiOutlineStar size={20} color="#A0ACB3" />
                </div>
                <div className="box-icon">
                  <AiOutlineStar size={20} color="#A0ACB3" />
                </div>
                <div className="box-icon">
                  <AiOutlineStar size={20} color="#A0ACB3" />
                </div>
                <div className="box-icon">
                  <AiOutlineStar size={20} color="#A0ACB3" />
                </div>
                <div className="box-icon">
                  <AiOutlineStar size={20} color="#A0ACB3" />
                </div>
              </div>
            </div>
            <div className="content-footer">
              <div className="alert">
                <div>
                  <IoAlertCircleOutline size={32} color="#F25D27" />
                </div>
                <p>Sua avaliação será analisada para poder ser publicada.</p>
              </div>
              <button type="button">Enviar avaliação</button>
            </div>
          </div>
        </ContainerModalAdd>
      </Modal>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:4444/depositions");
  const depoiments = await response.json();

  return {
    props: {
      depoiments,
    },
  };
};
interface Idepositions {
  id: number;
  name: string;
  description: string;
  avatar: string;
}

interface DepoimentsProps {
  depoiments: Idepositions[];
}
