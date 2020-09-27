import React from "react";
import { AppProps } from "next/app";

// Context
import AppContext from "../src/context/AppContext";

// Bootstrap Css
import "bootstrap/dist/css/bootstrap.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  );
};

export default MyApp;
