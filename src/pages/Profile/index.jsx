import React from "react";
import "./styles.css";
import { storage } from "../../services/FirebaseConfig";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { Avatar } from "@mui/material";
import { useAuthValue } from "../../contexts/AuthContext";
import { NavLink } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";

export default function Profile() {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  const [image, setImage] = React.useState(null);
  const [url, setUrl] = React.useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const imageRef = ref(storage, "/profile");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "erro na imagem!");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="profile-container">
        {user && (
          <div className="profile-content">
            <Avatar src={url} alt="" sx={{ width: 150, height: 150 }} />
            <div className="profile-bio">
              <h2>{user.displayName}</h2>
            </div>
            <input
              className="profile-select"
              type="file"
              onChange={handleImageChange}
            />
            <button className="profile-btn" onClick={handleSubmit}>
              Alterar
            </button>
            <NavLink onClick={logout} className="nav-item">
              Sair
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
}
