import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NeonCursor from "./Components/effects/NeonCursor";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ----------- ✅ SEO META DATA -----------
export const metadata = {
  metadataBase: new URL("https://lenmuel-delrosario.vercel.app"),
  title: "Lenmuel Del Rosario | Shopify Expert / React / Wordpress",
  description:
    `I'm Lenmuel Del Rosario, 
    Senior Software Engineer with a strong background in building scalable eCommerce and SaaS solutions, 
    specializing in Shopify Plus, modern JavaScript frameworks, and AI-driven integrations.`,
  keywords: [
    "Lenmuel Del Rosario",
    "Lenmuel Del Rosario",
    "JavaScript",
    "Portfolio Website",
  ],
  authors: [{ name: "Lenmuel Del Rosario" }],
  creator: "Lenmuel Del Rosario",
  publisher: "Lenmuel Del Rosario",
  openGraph: {
    type: "website",
    url: "https://lenmuel-delrosario.vercel.app",
    title: "Lenmuel Del Rosario | e-Commerce Developer & UI Designer",
    description:
      "Modern web developer crafting responsive and interactive digital experiences. Explore my portfolio and work samples.",
    siteName: "Lenmuel Del Rosario",
    images: [
      {
        url: "/images/about_person.jpg", // <-- make this image (1200x630)
        width: 1200,
        height: 630,
        alt: "Lenmuel Del Rosario Portfolio Preview",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Lenmuel Del Rosario | e-Commerce Developer & UI Designer",
  //   description:
  //     "Modern e-Commerce developer building interactive and elegant web apps. Check out my projects and portfolio.",
  //   images: ["/images/about_person.jpg"],
  //   creator: "@sakayet", // optional if you have a Twitter handle
  // },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://lenmuel-delrosario.vercel.app",
  },
  verification: {
    google: "FNRGUUHYELWtCxS81dqo2oyip-Dym9m6ZMOiWqiiR-A", // your GSC code
  },
};
// ---------------------------------------

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          minHeight: "100vh",
          position: "relative",
          backgroundColor: "#000",
        }}
      >
        <NeonCursor />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
      </body>
    </html>
  );
}
