import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global/global";
import { theme } from "./global/theme";
import Burger from "./components/Burger/Burger";
import Menu from "./components/Menu/Menu";
import navigation from "./data/navigation.json";
import Header from "./components/Header/Header";
import { Container, HamburgerMenu, Content } from "./Layout.styled";

function App() {
  const [open, setOpen] = useState(false);
  const navigationTemp = Object.create(navigation);
  const [navData, setNavData] = useState([]);

  const toggleMenu = (id) => {
    navigationTemp.forEach((element) => {
      if (element.id === id) element.showChild = !element.showChild;
      else element.showChild = false;
    });
    setNavData(navigationTemp);
  };

  const resetNavData = () => {
    navigationTemp.forEach((element) => {
      element.showChild = false;
    });
  };

  useEffect(() => {
    resetNavData();
    setNavData(navigationTemp);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container>
          <HamburgerMenu open={open}>
            <Burger open={open} setOpen={setOpen} />
            <Menu
              open={open}
              setOpen={setOpen}
              navigation={navData}
              toggleMenu={toggleMenu}
            />
          </HamburgerMenu>
          <Content open={open}>
            <Header />
          </Content>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
