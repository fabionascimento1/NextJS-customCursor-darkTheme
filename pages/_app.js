import React from "react";

import { GlobalContext } from "../context/globalContext";

import ThemeProvider from "../components/ThemeProvider";

function App({ Component, children }) {
  return (
    <GlobalContext>
      <ThemeProvider>
        <Component {...children} />
      </ThemeProvider>
    </GlobalContext>
  );
}

export default App;
