import React from "react";
import { Carousel } from "../../components/Carousel";
import { Footer } from "../../components/Footer";
import About from "../About";
import "./styles.css";

export default function Home() {
  return (
    <div className="home-container">
      <Carousel />
      <About />
      <Footer />
    </div>
  );
}
