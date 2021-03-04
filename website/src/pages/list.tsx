import {
  Header,
  ContainerHeader,
  Container,
  ContainerFillter,
  ContainerCard,
  Search,
  NoSearch,
} from "../styles/pages/List.module";
import { GetServerSideProps } from "next";
import logo from "../assets/images/logo.svg";
import emoji from "../assets/images/emoji.png";
import Image from "next/image";

import { FiSearch } from "react-icons/fi";
import CardList from "../components/CardList";
import random from "../util/random";
import { useCallback, useState } from "react";

interface ICities {
  id: string;
  name: string;
  description: string;
  image: string;
}
interface CitiesProps {
  cities: ICities[];
}
export default function List({ cities }: CitiesProps) {
  const [order, setOrder] = useState(cities);
  const [activeTab, setActiveTab] = useState("tab-1");

  const [search, setSearch] = useState("");

  function handleOrderAz(tab) {
    const sortedList = [...order].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setOrder(sortedList);
    setActiveTab(tab);
  }
  function handleAll(tab) {
    setOrder([...cities]);
    setActiveTab(tab);
  }
  function handleMoreAccess(tab) {
    setActiveTab(tab);
  }
  const handleSearch = useCallback(
    async (e) => {
      setSearch(e.target.value);

      if (search.length !== 1) {
        const filterPlace = [...cities].filter((list) => {
          return list.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });

        setOrder(filterPlace);
      } else {
        setOrder(cities);
      }
    },
    [search]
  );

  return (
    <>
      <ContainerHeader>
        <Header>
          <Image alt="Logo" src={logo} width={156} height={32} />
          <Search>
            <FiSearch size={20} color="#f25d27" />
            <input
              type="text"
              placeholder="Qual cidade você procura?"
              value={search}
              onChange={handleSearch}
            />
          </Search>
          <button type="button">Acesso restrito</button>
        </Header>
      </ContainerHeader>
      <Container>
        {order.length !== 0 ? (
          <ContainerFillter>
            <h1>Selecione uma cidade</h1>
            <div className="filter">
              <div
                className={"tab-1" === activeTab ? " active" : ""}
                onClick={() => handleAll("tab-1")}
              >
                <p>Todas</p>
              </div>
              <div
                className={"tab-2" === activeTab ? " active" : ""}
                onClick={() => handleMoreAccess("tab-2")}
              >
                <p>Mais acessadas</p>
              </div>
              <div
                className={"tab-3" === activeTab ? " active" : ""}
                onClick={() => handleOrderAz("tab-3")}
              >
                <p>A - Z</p>
              </div>
            </div>
          </ContainerFillter>
        ) : null}
        <ContainerCard>
          {order.length !== 0 ? (
            order.map((city) => {
              return (
                <CardList
                  id={city.id}
                  name={city.name}
                  image={city.image}
                  local="98"
                  key={city.id}
                />
              );
            })
          ) : (
            <>
              <NoSearch>
                <img src={emoji} alt="Emoji" />
                <p>
                  Sem resultados.
                  <br />
                  Tente uma nova busca
                </p>
              </NoSearch>
            </>
          )}
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
