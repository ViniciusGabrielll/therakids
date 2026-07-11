import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./containers/Welcome";
import UnitPage from "./containers/UnitPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Welcome />} />
        <Route path="/unidades/:slug" element={<UnitPage />} />
      </Routes>
    </BrowserRouter>
  );
}