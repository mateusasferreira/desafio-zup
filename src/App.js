import { GlobalStyle } from "./globalStyle";
import styled, { ThemeProvider } from "styled-components";

import AppHeader from "./components/header/Header";
import Hero from "./components/hero/Hero";

export const Container = styled.div`
  background: #0c3455;
  width: 100vw;
  min-height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={{
      standardFont: 'MontSerrat',
      altFont: 'Acme'
    }}>
      <Container>
        <GlobalStyle />
        <AppHeader />
        <Hero/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
