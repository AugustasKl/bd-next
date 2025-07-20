import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./styles/index.css";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your special day",
  description: "Your wish is our command",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.className}>
      <body>{children}</body>
    </html>
  );
}
