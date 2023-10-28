import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from './pages/HomePage';
import CategoryPage from "./pages/CategoryPage";
import ArticlePage from "./pages/ArticlePage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<CategoryPage />} path="/:category" />
        <Route element={<ArticlePage />} path="/:category/:slug" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
