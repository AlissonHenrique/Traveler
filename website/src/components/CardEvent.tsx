import { CardItem } from "../styles/components/cardEvent";
import { AiFillStar } from "react-icons/ai";
import { FiCalendar, FiCoffee, FiCamera, FiArrowLeft } from "react-icons/fi";
export default function CardEvent() {
  return (
    <CardItem>
      <div className="box-star">
        <AiFillStar size={20} color="#fff" />
        <p>4,7</p>
      </div>
      <div className="cardImg"></div>
      <div className="cardTitle">
        <p>Doce & Companhia</p>
      </div>
      <div className="cardDescription">
        <p>Comida e Bebida</p>
        <FiCoffee size={20} color="#F25D27" />
      </div>
    </CardItem>
  );
}
