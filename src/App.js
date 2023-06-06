import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Utils/theme";
import "../src/css/assets/style.css";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainNavigation from "./Components/MainNavigation";
import { AuthWrapper } from "./context/auth";
import loader from "../src/assets/loader.gif";
import { CartWrapper } from "./context/cart";
import Header from "./Components/Header/Headers";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<></>}>
        <BrowserRouter>
          <AuthWrapper>
            <CartWrapper>
              <div className="loader-wrapper">
                <img src={loader} alt="loader" />
              </div>
              <div className="wrapper">
                <Header />
                <main>
                  <MainNavigation />
                </main>
                <Footer />
              </div>
              <ToastContainer />
            </CartWrapper>
          </AuthWrapper>
        </BrowserRouter>
      </React.Suspense>
    </ThemeProvider>
  );
};

export default App;