import "./App.css";
import { DateCard } from "./components/DateCard";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <DateCard />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
