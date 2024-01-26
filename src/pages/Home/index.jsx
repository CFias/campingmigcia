import React from "react";
import { Carousel } from "../../components/Carousel";
import { Footer } from "../../components/Footer";
import "./styles.css";

export default function Home() {
  return (
    <div className="home">
      <Carousel />
      <Footer />
    </div>
  );
}
