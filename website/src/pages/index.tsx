import { Header, Container } from "../styles/pages/Index.module";
import Card from "../components/Card";
import Image from "next/image";
import logo from "../assets/images/logo.svg";
import Link from "next/link";
import random from "../util/random.js";
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
export default function Home({ cities }: CitiesProps) {
  return (
    <>
      <Header>
        <Image alt="Logo" src={logo} className="logo" width={156} height={32} />

        <button type="button">Acesso restrito</button>
      </Header>
      <Container>
        <div className="box-one">
          <h1>Viva uma grande aventura</h1>
          <p>
            Descubra locais incríveis para se visitar em cidades maravilhosas de
            Santa Catarina.
          </p>
          <Link href="/list">
            <button type="button">Descobrir todos os lugares</button>
          </Link>
        </div>
        <div className="box-two">
          <div className="cl1">
            {cities.slice(0, 2).map((city) => {
              return (
                <Card
                  name={city.name}
                  image={city.image}
                  local="98"
                  key={city.id}
                />
              );
            })}
          </div>
          <div className="cl2">
            {cities.slice(3, 5).map((city) => {
              return (
                <Card
                  name={city.name}
                  image={city.image}
                  local="98"
                  key={city.id}
                />
              );
            })}
          </div>
        </div>
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
