import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/styles/GlobalStyles";
import { theme } from "@/styles/theme";
import PortfolioPage from "@/pages/PortfolioPage";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PortfolioPage />
    </ThemeProvider>
  );
};

export default App;
