import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Dr. Supriya Hajela | Best IVF & Fertility Specialist in Bhopal",
  description:
    "Dr. Supriya Hajela — Award-winning IVF Specialist & Director of Hajela Hospital, Bhopal. Offering advanced fertility, ICSI, IUI & laparoscopic treatments at a NABH-accredited centre.",
  keywords: [
    "IVF Specialist Bhopal",
    "Best IVF Doctor in Bhopal",
    "Fertility Treatment India",
    "Dr Supriya Hajela",
    "Hajela Hospital Bhopal",
    "ICSI IUI IVF Clinic Bhopal",
    "Infertility Specialist",
    "Fertility Preservation",
    "PCOS Treatment Bhopal",
  ],
  openGraph: {
    title: "Dr. Supriya Hajela | IVF & Fertility Specialist – Hajela Hospital Bhopal",
    description:
      "Award-winning IVF and Fertility Specialist with 14+ years of expertise. Offering personalized fertility care at NABH-accredited Hajela Hospital, Bhopal.",
    url: "https://www.hajelahospital.com",
    siteName: "Hajela Hospital",
    type: "website",
    locale: "en_IN",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.hajelahospital.com" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}