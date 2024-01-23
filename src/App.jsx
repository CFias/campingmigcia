import "./App.css";
import { DateCard } from "./components/DateCard";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { RedesCard } from "./components/RedesCard";
import { Carousel } from "./components/Carousel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RedesCard />
        <Carousel />
        <DateCard />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
