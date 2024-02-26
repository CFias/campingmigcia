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
import { Avatar } from "@mui/material";

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
          <NavLink to="/events" className="nav-item">
            <DateRange />
            <p className="nav-name">Eventos</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="https://www.bibliaonline.com.br/" target="_blank" className="nav-item">
            <MenuBook />
            <p className="nav-name">Biblia</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="nav-item">
            <Person />
            <p className="nav-name">Perfil</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
