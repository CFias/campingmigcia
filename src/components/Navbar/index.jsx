import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/imagens/migcia.png";
import "./styles.css";
import { useAuthValue } from "../../contexts/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";
import { Logout } from "@mui/icons-material";

export const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <>
      <header className="header-container">
        <NavLink to="/" className="header-logo-img">
          <img src={logo} alt="Logo Mig" className="logo-img" />
        </NavLink>
        <nav className="nav-container">
          <ul className="nav-content">
            <li className="nav-item-res">
              <NavLink
                to="https://www.instagram.com/mig.cia/"
                className="nav-item"
              >
                Instagram
              </NavLink>
            </li>
            <li className="nav-item-res">
              <NavLink to="about" className="nav-item">
                Sobre nós
              </NavLink>
            </li>
          </ul>
        </nav>
        {user ? (
          <div className="nav-btn">
            <ul className="nav-content">
              <li>
                <NavLink className="nav-profile-img">
                  <img
                    className="nav-profile"
                    src="https://media.licdn.com/dms/image/D4D03AQF9HZmFqoBrZg/profile-displayphoto-shrink_100_100/0/1695645600115?e=1701302400&v=beta&t=H6sc1ovst8Cw4si4r5ZkTFvyakg8HfdxNAuxzZ0_u9A"
                    alt=""
                  />
                </NavLink>
              </li>
              <li className="nav-btn-logout">
                <NavLink onClick={logout} className="nav-item">
                  Sair
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <div className="nav-btn">
            <ul className="nav-content">
              <li>
                <NavLink to="/register" className="nav-item">
                  Inscrições
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="nav-item">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};
