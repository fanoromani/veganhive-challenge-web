import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PostPage } from "./pages/PostPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post/" element={<PostPage />} />
    </Routes>
  );
}
