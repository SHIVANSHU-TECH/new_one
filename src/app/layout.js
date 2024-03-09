"use client";
import { useRouter } from "next/navigation"; // Corrected import path
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import LoginPage from "./login/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IPSC",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  const route = useRouter(); // Use the useRouter hook to get the current route
  const isLoginPage = route.pathname === '/login'; // Check if the current route is the login page

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=NTR&family=Old+Standard+TT&family=Orbitron:wght@500&family=Poppins:ital,wght@0,200;1,100&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
            {!isLoginPage && <Navbar />} {/* Conditionally render Navbar */}
              {children}
              {!isLoginPage && <Footer />} {/* Conditionally render Footer */}
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
