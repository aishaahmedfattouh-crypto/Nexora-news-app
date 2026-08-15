import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import SavedStories from "./pages/SavedStories/SavedStories";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Categories */}
        <Route
          path="/category/:category"
          element={
            <div className="container section">
              Category
            </div>
          }
        />

        {/* Article */}
        <Route
          path="/article/:id"
          element={
            <div className="container section">
              Article
            </div>
          }
        />

        {/* Search */}
        <Route
          path="/search"
          element={
            <div className="container section">
              Search
            </div>
          }
        />

        {/* Saved Stories */}
        <Route
          path="/saved"
          element={<SavedStories />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="container section">
              404 — Page not found
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;