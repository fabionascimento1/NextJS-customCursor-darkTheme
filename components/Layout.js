import React, { useState } from "react";
import ThemeProvider from "./ThemeProvider";
import Header from "./Layout/Header";

import CustomCursor from "./customCursor";

import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext";

export function Layout({ children }) {
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles, currentTheme } = useGlobalStateContext();

  const [hamburgerPosition, setHamburgerPosition] = useState({
    x: 0,
    y: 0,
  });

  const [toggleMenu, setToggleMenu] = useState(false);

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  return (
    <ThemeProvider>
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
