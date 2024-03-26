import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RootLayout from "./Layouts/RootLayout/RootLayout";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "@fontsource/poppins";
import "@fontsource-variable/lexend";
import { ReactFlowProvider } from "reactflow";

const theme = extendTheme({
  fonts: {
    heading: `'Lexend Variable', sans-serif`,
    body: `'Lexend Variable', sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactFlowProvider>
      <ChakraProvider theme={theme}>
        <RootLayout />
      </ChakraProvider>
    </ReactFlowProvider>
  </React.StrictMode>
);
