import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { BuzzPage } from "./pages/BuzzPage";
import { LoginPage } from "./pages/LoginPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/:username" element={<HomePage />} />
      <Route path="/buzz/:id" element={<BuzzPage />} />
    </Routes>
  );
}
