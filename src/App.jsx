import "./App.css";
import { DateCard } from "./components/DateCard";
import { Navbar } from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <DateCard />
      </BrowserRouter>
    </>
  );
}

export default App;
