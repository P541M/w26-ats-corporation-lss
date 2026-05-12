import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ATS Corporation — W26 Work Term Report",
  description: "Toolset Software Developer Co-op Work Term Report — ATS Life Sciences Systems",
  authors: [{ name: "Psalm Eleazar Videna" }],
  keywords: ["ATS", "work term", "co-op", "software developer", "Life Sciences Systems", "University of Guelph"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
