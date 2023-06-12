import Head from "next/head";

import { Inter } from "next/font/google";
import WelcomeHeader from "../components/welcome/WelcomeHeader";
import WelcomeYourTest from "../components/welcome/WelcomeYourTest";
import WelcomePractice from "../components/welcome/WelcomePractice";

const inter = Inter({ subsets: ["latin"] });

export default function Welcome() {
  return (
    <>
      <WelcomeHeader />
      <WelcomeYourTest />
      <WelcomePractice />
    </>
  );
}
