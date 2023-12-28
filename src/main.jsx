import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { CartProvider } from 'react-use-cart';
import { ThemeProvider } from "./Components/GlobalComponents/ThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        {/* <CartProvider> */}
          <App />
        {/* </CartProvider> */}
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
