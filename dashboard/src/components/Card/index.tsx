import React from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import { Container } from './styles';

function Card() {
  return (
    <Container>
      <div className="bgCard">
        <button className="edit" type="button">
          <FiEdit3 size={20} color="617480" />
        </button>
        <button className="remove" type="button">
          <FiTrash size={20} color="617480" />
        </button>
      </div>
      <div className="footerCard">
        <p>Imbituba</p>
        <span>13 locais</span>
      </div>
    </Container>
  );
}

export default Card;
