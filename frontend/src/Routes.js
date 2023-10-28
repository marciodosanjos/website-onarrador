import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import CategoryPage from "./pages/CategoryPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CategoryPage />} path="/:category" />
        <Route element={<ArticlePage />} path="/:category/:slug" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
