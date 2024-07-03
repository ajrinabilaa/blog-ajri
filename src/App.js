import React from "react";
import MainPage from "./Halaman/Main";
import CSSkonten from "./Halaman/CSSkonten";
import JSkonten from "./Halaman/JSkonten";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/CSSkonten" element={<CSSkonten />} />
            <Route path="/JSkonten" element={<JSkonten />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
