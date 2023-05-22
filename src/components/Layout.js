import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
