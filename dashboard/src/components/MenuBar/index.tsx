import React from 'react';

import { AiOutlinePoweroff } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import {
  Container,
  BsCursorTop,
  BsCursorBottom,
  IconMenu,
  IconMenu2,
  IconMenu3,
} from './styles';

function MenuBar() {
  return (
    <Container>
      <div className="box1">
        <BsCursorTop size={22} />
        <BsCursorBottom size={22} />
      </div>
      <div className="box2">
        <NavLink activeClassName="active" to="/cities">
          <IconMenu className="unactive" size={22} />
        </NavLink>
        <NavLink activeClassName="active" to="/categories">
          <IconMenu2 className="unactive" size={22} />
        </NavLink>
        <NavLink activeClassName="active" to="/comments">
          <IconMenu3 className="unactive" size={22} />
        </NavLink>
      </div>
      <div className="box3">
        <AiOutlinePoweroff size={22} color="#fff" />{' '}
      </div>
    </Container>
  );
}

export default MenuBar;
