import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import { router } from "./Router/routes";
import AuthContextProvider from "./context/AuthContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import { theme } from "./theme/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <CartContextProvider>
            <CssBaseline />
            <RouterProvider router={router} />
          </CartContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
