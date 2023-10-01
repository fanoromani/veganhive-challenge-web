import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { BuzzPage } from "./pages/BuzzPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/buzz/:id" element={<BuzzPage />} />
    </Routes>
  );
}
