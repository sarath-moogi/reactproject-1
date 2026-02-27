import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import ButtonsDemo from "../pages/ButtonsDemo";
import CardsDemo from "../pages/CardsDemo";
import TablesDemo from "../pages/TablesDemo";

function AppRoutes() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/buttons">Buttons</Link>
        <Link to="/cards">Cards</Link>
        <Link to="/tables">Tables</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buttons" element={<ButtonsDemo />} />
        <Route path="/cards" element={<CardsDemo />} />
        <Route path="/tables" element={<TablesDemo />} />
      </Routes>
    </>
  );
}

export default AppRoutes;