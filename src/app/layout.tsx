import { Rajdhani } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-rajdhani",
});

export const metadata = {
  title: "Berto - Portfolio",
  description: "Bartolomeus Yudantoro portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} antialiased text-black`}>
        {children}
      </body>
    </html>
  );
}
