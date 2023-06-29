import Layout from "./Layout";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.scss";

import { useEffect } from "react";

export default function App({ Component, pageProps }) {

  // useEffect(() => {
  //   const handleContextMenu = (e) => {
  //     e.preventDefault();
  //   };

  //   // Добавление слушателя события при монтировании компонента
  //   document.addEventListener("contextmenu", handleContextMenu);

  //   // Удаление слушателя события при размонтировании компонента
  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //   };
  // }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
