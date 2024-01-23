import "./App.css";
import { DateCard } from "./components/DateCard";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { RedesCard } from "./components/RedesCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RedesCard />
        <DateCard />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
