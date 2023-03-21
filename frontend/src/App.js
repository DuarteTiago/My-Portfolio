import React from "react";

//Global Style
import GlobalStyle from "./components/globalStyle";

// Components
import AboutUs from "./pages/Home";

function App() {
  return (
    <div>
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
