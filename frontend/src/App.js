import React from "react";

//Global Style
import GlobalStyle from "./components/globalStyle";

//Roteamento
import { Route, Routes } from "react-router-dom";

//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

//Components
import AboutUs from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./components/PortfolioDetail";
import ContactMe from "./pages/ContactMe";
import Nav from "./components/Nav";

function App() {
  library.add(fab, fas);
  return (
    <div>
      <GlobalStyle />
      <Nav />

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;
