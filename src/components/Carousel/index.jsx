import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { useAuthValue } from "../../contexts/AuthContext";
import { Instagram, WhatsApp } from "@mui/icons-material";
import About from "../About";
import CardAcampOne from "../CardAcampOne";
import Crud from "../Crud";
import Todo from "../Todo";
import { Login, Logout } from "@mui/icons-material";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "../../services/FirebaseConfig";
import { useAuthentication } from "../../hooks/useAuthentication";

export const Carousel = () => {
  const { logout } = useAuthentication();
  const { user } = useAuthValue();

  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <div className="nav-mobile">
            {user && (
              <span className="nav-user-mob">Olá, {user.displayName}</span>
            )}
            {user ? (
              <NavLink className="nav-item-icon" onClick={logout}>
                <Logout className="nav-item-mobile" />
                <span className="nav-p">Sair</span>
              </NavLink>
            ) : (
              <NavLink className="nav-item-icon" to="/login">
                <Login className="nav-item-mobile" />
                <span className="nav-p">Login</span>
              </NavLink>
            )}
          </div>
          <div className="home-frase">
            <h2 className="frase">SEGUNDO ACAMPAMENTO</h2>
            <h1 className="home-name">EXTRAORDINÁRIOS CIA</h1>
          </div>
          <div className="home-date">
            <p className="date">DIAS 17, 18 E 19 DE MAIO!</p>
          </div>
          <div className="btn-redes">
            {!user && (
              <NavLink to="/register" className="home-btn">
                INSCREVA-SE
              </NavLink>
            )}
            <div className="redes">
              <NavLink
                to="https://www.instagram.com/extraordinarioscia/"
                className="nav-rede"
              >
                <Instagram />
              </NavLink>
              <NavLink
                to="https://api.whatsapp.com/send?phone=+5571%209631-0768&text=Acamp+Mig+Cia"
                className="nav-rede"
              >
                <WhatsApp />
              </NavLink>
            </div>
          </div>
          <div className="home-comment">
            {user && <Crud />}
            <div className="todo-container">
              {todos.map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  toggleComplete={toggleComplete}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              ))}
            </div>
          </div>
          <About />
          <CardAcampOne />
        </div>
      </div>
    </>
  );
};
