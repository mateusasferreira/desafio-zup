import { GlobalStyle } from "./globalStyle";
import styled, { ThemeProvider } from "styled-components";

import AppHeader from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Trails from "./components/trails/Trails";
import Modal from "./components/modal/Modal";

import { ModalContextProvider } from "./contexts/modalContext";
import { SubsContextProvider } from "./contexts/subscriptionsContext";

export const Container = styled.div`
  background: #0c3455;
  width: 100%;
  min-height: 100vh;
`;

function App() {
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
          <Container>
              <GlobalStyle />
              <AppHeader />
              <Hero />
              <Trails />
              <Modal />
          </Container>
        </SubsContextProvider>
      </ModalContextProvider>
    </ThemeProvider>
  );
}

export default App;
