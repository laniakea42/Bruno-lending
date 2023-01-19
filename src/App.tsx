import { useState } from "react";
import reactLogo from "./assets/react.svg";
import IndexComponent from "./components/index";
import { baseTheme } from "./styles/theme";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "./theme.fix";
const theme = {
  colors: {
    primary: "#C3630A",
    secondary: "#B5CFDD",
    "text-color": "#3E3B2D",
  },
};

function App() {
  return (
    <ThemeProvider theme={{ theme }}>
      <GlobalStyle />
      <IndexComponent />
    </ThemeProvider>
  );
}

export default App;
