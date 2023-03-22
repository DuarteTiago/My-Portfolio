import React from "react";

//Global Style
import GlobalStyle from "./components/globalStyle";

//Roteamento
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import AboutUs from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
