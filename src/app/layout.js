import { Poppins, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MotionWrapper from "@/components/MotionWrapper";
import Header from "@/components/Header";
import TopLeftImg from "@/components/TopLeftImg";
import Transition from "@/components/Transition";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${poppins.variable} antialiased page bg-site text-white bg-cover bg-no-repeat font-sora relative`}
      >
        <TopLeftImg />
        <Navbar />
        <Header />
        <MotionWrapper>
          <Transition />
          <main className="h-full w-full">{children}</main>
        </MotionWrapper>
      </body>
    </html>
  );
};

export default RootLayout;