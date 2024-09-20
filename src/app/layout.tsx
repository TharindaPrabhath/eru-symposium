import type { Metadata } from "next";
import { Alumni_Sans, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

const alumniSans = Alumni_Sans({
  subsets: ["latin"],
  variable: "--font-alumni-sans",
  weight: ["600", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600", "800"],
});

export const metadata: Metadata = {
  title: "ERU Symposium 2024",
  description:
    "ERU Symposium, organized by Faculty of Engineering, University of Moratuwa, provides a platform for researchers to showcase their latest research and innovations. The symposium brings academics, industry professionals, and students together for knowledge sharing and future collaboration.",
  generator: "Next.js",
  applicationName: "ERU Symposium 2024",
  referrer: "origin",
  keywords: [
    "ERU Symposium",
    "Engineering Research Unit",
    "University of Moratuwa",
    "Research Symposium",
    "Research Conference",
    "Research Exhibition",
    "Research Innovation",
    "Research Collaboration",
    "Research Networking",
    "Research Publication",
    "Abstract Submission",
    "Paper Submission",
    "Research Paper",
    "ERU",
    "Symposium",
    "Research",
    "Innovation",
    "Moratuwa",
    "Sri Lanka",
  ],
  // icons: {
  //   icon: "/favicon-32x32.png",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  //   other: {
  //     rel: "apple-touch-icon-precomposed",
  //     url: "/apple-touch-icon.png",
  //   },
  // },
  authors: [{ name: "Tharinda Anurajeewa", url: "https://tharinda.me" }],
  creator: "Tharinda Anurajeewa",
  publisher: "University of Moratuwa",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://eru-symposium.uom.lk"),
  openGraph: {
    title: `ERU Symposium 2024`,
    description:
      "ERU Symposium, organized by Faculty of Engineering, University of Moratuwa, provides a platform for researchers to showcase their latest research and innovations. The symposium brings academics, industry professionals, and students together for knowledge sharing and future collaboration.",
    url: "https://eru-symposium.uom.lk",
    siteName: `ERU Symposium 2024`,
    images: [
      {
        url: "https://res.cloudinary.com/drifly/image/upload/v1726825553/eru-symposium.uom.lk/group-photo_daswtz.jpg", // Must be an absolute URL
        alt: "ERU Symposium 2024",
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/drifly/image/upload/v1726825553/eru-symposium.uom.lk/group-photo_daswtz.jpg", // Must be an absolute URL
        alt: "ERU Symposium 2024",
        width: 1800,
        height: 1600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `ERU Symposium 2024`,
    description:
      "ERU Symposium, organized by Faculty of Engineering, University of Moratuwa, provides a platform for researchers to showcase their latest research and innovations. The symposium brings academics, industry professionals, and students together for knowledge sharing and future collaboration.",
    siteId: "1402211444603723777",
    creator: "@tharinda__",
    creatorId: "1402211444603723777",
    images: [
      {
        url: "https://res.cloudinary.com/drifly/image/upload/v1726825553/eru-symposium.uom.lk/group-photo_daswtz.jpg",
        alt: "ERU Symposium 2024",
      },
    ], // Must be an absolute URL
  },
  appLinks: {
    web: {
      url: "https://eru-symposium.uom.lk",
      should_fallback: true,
    },
  },
  bookmarks: ["https://eru-symposium.uom.lk"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${alumniSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-DJJRXRWE3Q" />
      </body>
    </html>
  );
}
