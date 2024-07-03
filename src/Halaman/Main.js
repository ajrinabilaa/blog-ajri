import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";
import ScrollToTopButton from "../components/ScrollToTopButton";

import "../styles.css";
function MainPage() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default MainPage;
