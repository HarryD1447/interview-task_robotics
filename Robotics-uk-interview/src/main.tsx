import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RootLayout from "./Layouts/RootLayout/RootLayout";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RootLayout />
    </ChakraProvider>
  </React.StrictMode>
);
