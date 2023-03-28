import React from "react";

//Global Style
import GlobalStyle from "./components/globalStyle";

//Roteamento
import { Route, Routes } from "react-router-dom";

// Components
import AboutUs from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./components/PortfolioDetail";
import ContactMe from "./pages/ContactMe";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;
