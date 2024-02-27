import React from "react";
import "./styles.css";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../contexts/AuthContext";
import Todo from "../../components/Todo";
import Crud from "../../components/Crud";
import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
import { db } from "../../services/FirebaseConfig";

export default function Interation() {
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
    <div className="interation-container container">
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
    </div>
  );
}
