import { GlobalStyle } from "./globalStyle";
import styled, { ThemeProvider } from "styled-components";

import AppHeader from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Trails from "./components/trails/Trails";
import Modal from "./components/modal/Modal";

import { ModalContextProvider, useModal } from "./contexts/modalContext";
import { SubsContextProvider } from "./contexts/subscriptionsContext";

export const Container = styled.div`
  background: #0c3455;
  width: 100%;
  min-height: 100vh;
`;

function App() {

  const {modalIsOpen} = useModal()

  return (
    <ThemeProvider
      theme={{
        standardFont: "MontSerrat",
        altFont: "Acme",
        primaryColor: "#0C3455",
        highlightColor: "#8DC63F",
      }}
    >
      <ModalContextProvider>
        <SubsContextProvider>
          <Container aria-hidden={modalIsOpen}>
              <GlobalStyle />
              <AppHeader />
              <Hero />
              <Trails />
          </Container>
          <Modal />
        </SubsContextProvider>
      </ModalContextProvider>
    </ThemeProvider>
  );
}

export default App;
