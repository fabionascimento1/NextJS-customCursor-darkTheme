import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/globalStyles";

import Header from "./Layout/Header";
import CustomCursor from "./customCursor";

import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext";

export default function DarkModThemeProvider({ children }) {
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles, theme } = useGlobalStateContext();

  const [hamburgerPosition, setHamburgerPosition] = useState({
    x: 0,
    y: 0,
  });

  const darkTheme = {
    background: "#0e0e0e",
    text: "#fff",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  };

  const lightTheme = {
    background: "#fff",
    text: "#0e0e0e",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <CustomCursor toggleMenu={toggleMenu} />
      <Header
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        hamburgerPosition={hamburgerPosition}
        setHamburgerPosition={setHamburgerPosition}
      />
      {children}
    </ThemeProvider>
  );
}
