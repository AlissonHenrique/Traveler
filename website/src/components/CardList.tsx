import Link from "next/link";
import React from "react";
import { CardItem, CardImage } from "../styles/components/CardList.module";
import regex from "../util/formatUrl";
const pathImg = "http://localhost:4444/";
interface ICard {
  local: string;
  name: string;
  image: string;
  id: string;
}

export default function CardList({ name, local, image, id }: ICard) {
  return (
    <Link href={`/place/${regex(name)}/${id}`}>
      <CardItem>
        <CardImage image={`${pathImg}${image}`} />
        <div className="description">
          <p>{name}</p>
          <span>{local} locais</span>
        </div>
      </CardItem>
    </Link>
  );
}
