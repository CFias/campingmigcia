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
          <NavLink to="/subscribe" className="home-frase">
            <h4 className="home-conv">
            </h4>
          </NavLink>
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
