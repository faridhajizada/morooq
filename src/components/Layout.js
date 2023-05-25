import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main> {children}</main>
      <Footer />
    </>
  );
}

export default Layout;
