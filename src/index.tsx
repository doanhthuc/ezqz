import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </ThemeProvider>
);
