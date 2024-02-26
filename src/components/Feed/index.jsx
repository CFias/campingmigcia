import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { useAuthValue } from "../../contexts/AuthContext";
import { PersonAdd } from "@mui/icons-material";
import { Login, Logout } from "@mui/icons-material";
import CardBible from "../CardBible";
import CardAcampOne from "../CardAcampOne";
import Crud from "../Crud";
import Todo from "../Todo";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../services/FirebaseConfig";
import { useAuthentication } from "../../hooks/useAuthentication";

export const Feed = () => {
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
      <section className="home-container">
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
              <div className="nav-login-register">
                <NavLink className="nav-item-login" to="/login">
                  <Login className="nav-login" />
                  <span className="nav-p">Login</span>
                </NavLink>
                <NavLink to="/register" className="nav-item-register">
                  <PersonAdd className="nav-register" />
                  Cadastre-se
                </NavLink>
              </div>
            )}
          </div>
          <div className="home-frase">
            <h4 className="home-conv">
              <a className="home-link" href="/subscribe">
                Inscreva-se
              </a>{" "}
              e vamos viver o extraordinário
            </h4>
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
          <CardBible />
          <CardAcampOne />
        </div>
      </section>
    </>
  );
};
