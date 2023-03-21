import React from "react";

//Global Style
import GlobalStyle from "./components/globalStyle";

//Roteamento
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import AboutUs from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
