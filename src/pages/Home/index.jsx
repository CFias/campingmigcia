import React from "react";
import { Feed } from "../../components/Feed";
import { Footer } from "../../components/Footer";
import "./styles.css";

export default function Home() {
  return (
    <div className="home">
      <Feed />
      <Footer />
    </div>
  );
}
