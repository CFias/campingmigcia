import { CheckCircle, Delete, Edit } from "@mui/icons-material";
import React from "react";
import "./styles.css";
import { useAuthValue } from "../../contexts/AuthContext";

export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const { user } = useAuthValue();
  const [newTitle, setNewTitle] = React.useState(todo.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };

  return (
    <>
      {user && (
        <div className="todo-container">
          <div className="todo-content">
            <input
              key={user.uid}
              type="text"
              value={todo.title === "" ? newTitle : todo.title}
              className="todo-list"
              onChange={handleChange}
            />
            {user.uid === todo.cod && (
              <div className="todo-btn">
                <button
                  className="btn-complete"
                  onClick={() => toggleComplete(todo)}
                >
                  <CheckCircle className="todo-icon" />
                </button>
                <button
                  className="btn-edit"
                  onClick={() => handleEdit(todo, newTitle)}
                >
                  <Edit className="todo-icon" />
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(todo.id)}
                >
                  <Delete className="todo-icon" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
