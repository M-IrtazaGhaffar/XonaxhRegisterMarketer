import React from "react";
import theme from "./theme/custom";
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};
export default App;
