// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import MobileRoutes from "./src/mobile/MobileRoutes";
import DesktopRoutes from "./src/desktop/DesktopRoutes";
import CustomCursor from "./CustomCursor";
import LogoLoading from "./src/LoadingPage/LogoLoading/LogoLoading"; // Correct import path
import { Provider } from "react-redux";
import store from "./redux/store/store";
// import ChatBot from "./ChatBot/ChatBot";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches ||
      window.location.search.includes("forceMobileView")
  );

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <CustomCursor />
        {/* <ChatBot /> */}
        {/* Conditional rendering based on the loading state */}
        {isLoading ? <LogoLoading /> : null}
        {/* {isMobile ? <MobileRoutes /> : <DesktopRoutes />} */}
        {isMobile ? <DesktopRoutes /> : <DesktopRoutes />}
      </BrowserRouter>
    </Provider>
  );
};

export default App;
