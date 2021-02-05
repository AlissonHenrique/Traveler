import {
  Header,
  ContainerHeader,
  Container,
  ContainerFillter,
  ContainerCard,
} from "../styles/pages/lista";
import logo from "../assets/images/logo.svg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import random from "../util/random";
import { GetServerSideProps } from "next";

interface ICities {
  id: number;
  name: string;
  description: string;
  image: string;
}
interface CitiesProps {
  cities: ICities[];
}
export default function List({ cities }: CitiesProps) {
  return (
    <>
      <ContainerHeader>
        <Header>
          <Image alt="Logo" src={logo} width={156} height={32} />
          <input type="text" placeholder="Qual cidade você procura?" />
          <button type="button">Acesso restrito</button>
        </Header>
      </ContainerHeader>
      <Container>
        <ContainerFillter>
          <h1>Selecione uma cidade</h1>
          <div className="filter">
            <div className="active">
              <p>Todas</p>
            </div>
            <div>
              <p>Mais acessadas</p>
            </div>
            <div>
              <p>A - Z</p>
            </div>
          </div>
        </ContainerFillter>
        <ContainerCard>
          {cities.map((city) => {
            return (
              <CardList
                name={city.name}
                image={city.image}
                local="98"
                key={city.id}
              />
            );
          })}
        </ContainerCard>
      </Container>
    </>
  );
}
export const getServerSideProps: GetServerSideProps<CitiesProps> = async () => {
  const response = await fetch("http://localhost:4444/city");
  const cities = await response.json();
  random(cities);
  return {
    props: {
      cities,
    },
  };
};
