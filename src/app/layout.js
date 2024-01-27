import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IPSC",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    {/* <link href="https://fonts.googleapis.com/css2?family=NTR&family=Orbitron:wght@500&family=Poppins:ital,wght@0,200;1,100&display=swap" rel="stylesheet" /> */}
    <link href="https://fonts.googleapis.com/css2?family=NTR&family=Old+Standard+TT&family=Orbitron:wght@500&family=Poppins:ital,wght@0,200;1,100&display=swap" rel="stylesheet"></link>
    </head>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar /> 
              {children}
              <Footer /> 
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
