import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task Genius",
  description: "Create a Task Genius Website which is basically a Task Management Website. User can manage his or her task through this website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="lemonade">
      <body className={inter.className}>
        <Navbar />
        <div className="max-w-7xl w-full mx-auto">
          {children}
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
