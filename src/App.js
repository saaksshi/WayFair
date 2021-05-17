import React, { useState, useRef, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global/global";
import { theme } from "./global/theme";
import Burger from "./components/Burger/Burger";
import Menu from "./components/Menu/Menu";
import navigation from "./data/navigation.json";
import Header from "./components/Header/Header";
import { Container, HamburgerMenu, Content } from "./Layout.styled";

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const navigationTemp = JSON.parse(JSON.stringify(navigation));
  const [navData, setNavData] = useState([]);

  useOnClickOutside(node, () => setOpen(false));

  const toggleMenu = (id) => {
    navigationTemp.forEach((element) => {
      if (element.id === id) element.showChild = true;
    });
    setNavData(navigationTemp);
  };

  useEffect(() => {
    navigationTemp.forEach((element) => {
      element.showChild = false;
    });
    setNavData(navigationTemp);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container>
          <HamburgerMenu>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu
              open={open}
              setOpen={setOpen}
              id={menuId}
              navigation={navData}
              toggleMenu={toggleMenu}
            />
          </HamburgerMenu>
          <Content>
            <Header />
          </Content>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
