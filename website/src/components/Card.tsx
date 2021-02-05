import { CardItem, CardImage } from "../styles/components/card";
const pathImg = "http://localhost:4444/";
interface ICard {
  local: string;
  name: string;
  image: string;
}

export default function Card({ name, local, image }: ICard) {
  return (
    <CardItem>
      <CardImage image={`${pathImg}${image}`} />
      <div className="description">
        <p>{name}</p>
        <span>{local} locais</span>
      </div>
    </CardItem>
  );
}
