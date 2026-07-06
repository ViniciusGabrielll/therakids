import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./containers/Welcome";
import Flores from "./containers/Flores";
import DomPedroI from "./containers/DomPedroI";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Welcome />} />
        <Route path="/unidades/flores" element={<Flores />} />
        <Route path="/unidades/dom-pedro-i" element={<DomPedroI />} />
      </Routes>
    </BrowserRouter>
  );
}