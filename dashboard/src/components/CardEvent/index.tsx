import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FiCoffee, FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';

export default function CardEvent() {
  return (
    <Container>
      <div className="box-star">
        <AiFillStar size={20} color="#fff" />
        <p>4,7</p>
      </div>
      <div className="box-btns">
        <div className="edit">
          <FiEdit3 size={20} color="617480" />
        </div>
        <div className="remove">
          <FiTrash size={20} color="617480" />
        </div>
      </div>
      <div className="cardImg" />
      <div className="cardTitle">
        <p>Doce & Companhia</p>
      </div>
      <div className="cardDescription">
        <p>Comida e Bebida</p>
        <FiCoffee size={20} color="#F25D27" />
      </div>
    </Container>
  );
}
