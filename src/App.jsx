import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import React, { useEffect, useState } from "react";
import { useAuthentication } from "./hooks/useAuthentication";
import { onAuthStateChanged } from "firebase/auth";
import { AuthProvider } from "./contexts/AuthContext";
import logo from "./assets/imagens/migcia.png";
import Profile from "./pages/Profile";
import Redes from "./pages/Redes";
import Contact from "./pages/Contact";
import Cults from "./pages/Cults";
import About from "./pages/About";
import BottomBar from "./components/BottomBar";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return (
      <div className="loading">
        <img className="loading-img" src={logo} alt="" />
        <p className="loading-p">CARREGANDO</p>
      </div>
    );
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/register"
              element={!user ? <Register /> : <Navigate to="/" />}
            />
            <Route
              path="/profile"
              element={user ? <Profile /> : <Navigate to="/" />}
            />
            <Route path="/redes" element={<Redes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cults" element={<Cults />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <BottomBar />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
