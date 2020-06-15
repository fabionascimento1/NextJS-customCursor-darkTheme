import React, { useEffect, useRef } from "react";
import Link from "next/link";

import { Container, Flex } from "../styles/layout";
import { HeaderNav, Logo, Menu } from "../styles/headerStyles";

import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../../context/globalContext";
//Custom Hook
import useElementPosition from "../../hooks/useElementPosition";

const Header = ({
  onCursor,
  setHamburgerPosition,
  setToggleMenu,
  toggleMenu,
}) => {
  const dispatch = useGlobalDispatchContext();
  const { theme } = useGlobalStateContext();
  const hamburger = useRef(null);
  const position = useElementPosition(hamburger);

  const menuHover = () => {
    onCursor("locked");
    setHamburgerPosition({ x: position.x, y: position.y + 72 });
  };

  const toggleTheme = () => {
    if (theme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" });
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" });
    }
  };

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Link href="/">
              <a>FÁBI</a>
            </Link>
            <span
              onClick={toggleTheme}
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
            ></span>
            {/* <Link href="/">
              <a>N</a>
            </Link> */}
          </Logo>
          <Menu
            onClick={() => setToggleMenu(!toggleMenu)}
            ref={hamburger}
            onMouseEnter={menuHover}
            onMouseLeave={onCursor}
          >
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  );
};

export default Header;
