import React from "react";

//Global Style
import GlobalStyle from "./components/globalStyle";

//Roteamento
import { Route, Routes, useLocation } from "react-router-dom";

//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

//Components
import AboutUs from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Nav from "./components/Nav";
import Admin from "./pages/Admin";

function App() {
  const location = useLocation();
  library.add(fab, fas);
  return (
    <div>
      <GlobalStyle />
      {location.pathname !== "/admin" && <Nav />}

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/portfolio/:slug" element={<Portfolio />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
