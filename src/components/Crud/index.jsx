import React from "react";
import { db } from "../../services/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useAuthValue } from "../../contexts/AuthContext";
import "./styles.css";

export default function Crud() {
  const { user } = useAuthValue();
  const cod = user.uid;

  const [title, setTitle] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        cod,
        title,
        completed: false,
      });
      setTitle("");
    }
  };

  return (
    <>
      {user && (
        <form onSubmit={handleSubmit} className="comment-container">
          <h2 className="comment-txt">
            Shalom, <span className="comment-span">{user.displayName}!</span> O
            que você quer no segundo acampamento{" "}
            <span className="comment-name">EXTRAORDINÁRIOS</span> ?
          </h2>
          <div className="in-container">
            <input
              className="comment-in"
              type="text"
              placeholder="Envie a sua recomendação"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="btn-container">
            <button className="comment-btn">Comentar</button>
          </div>
          <h3 className="comment-sol">Alô, liderança! O povo quer:</h3>
        </form>
      )}
    </>
  );
}
