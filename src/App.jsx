import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AboutUs from "./pages/AboutUs";
import CardPage from "./pages/CardPage/CardPage";
import Help from "./pages/Help";
import NCardItem from "./components/Card/NCardItem";
import ToggleColorMode from "./providers/CustomThemeProvider";
import CardPaginationPage from "./pages/CardPaginationPage/CardPaginationPage";

function App() {
  return (
    <div className="App">
      <ToggleColorMode>
        <MainLayout>
          <Routes>
            <Route path="/news" element={<CardPage />} />
            <Route path="/pagination" element={<CardPaginationPage />} />

            <Route path="/news/:id" element={<NCardItem />} />

            <Route path="/help" element={<Help />} />
            <Route path="/aboutUs" element={<AboutUs />} />

            <Route path="*" element={<Navigate to="/news" />} />
          </Routes>
        </MainLayout>
      </ToggleColorMode>
    </div>
  );
}

export default App;
