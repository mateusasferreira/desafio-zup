import { GlobalStyle } from "./globalStyle";
import styled, { ThemeProvider } from "styled-components";

import AppHeader from "./components/header/Header";

export const Container = styled.div`
  background: #0c3455;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={{standardFont: 'MontSerrat'}}>
      <Container>
        <GlobalStyle />
        <AppHeader />
      </Container>
    </ThemeProvider>
  );
}

export default App;
