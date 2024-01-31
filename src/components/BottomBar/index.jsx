import React from "react";
import "./styles.css";
import {
  AddBox,
  ContactMail,
  Contacts,
  DateRange,
  Home,
  Info,
  MenuBook,
  Person,
  Share,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function BottomBar() {
  return (
    <nav className="nav-bottom-container">
      <ul className="nav-item-content">
        <li>
          <NavLink to="/redes" className="nav-item">
            <Share />
            <p className="nav-name">Redes</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-item">
            <Contacts />
            <p className="nav-name">Contatos</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cults" className="nav-item">
            <DateRange />
            <p className="nav-name">Cultos</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="https://www.bibliaonline.com.br/" className="nav-item">
            <MenuBook />
            <p className="nav-name">Biblia</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-item">
            <Info />
            <p className="nav-name">Sobre</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
