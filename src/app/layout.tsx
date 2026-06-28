import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const SITE_DESCRIPTION =
  "Frames by Frady builds clean, professional websites and growth systems for local service businesses that want to look trustworthy, get found, and turn visitors into calls or quote requests.";

export const metadata: Metadata = {
  metadataBase: new URL("https://framesbyfrady.com"),
  title: {
    default: "Frames by Frady | Clean Websites for Local Businesses",
    template: "%s | Frames by Frady",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "local business website design",
    "websites for contractors",
    "lawncare website",
    "home services website",
    "restaurant website",
    "small business web design",
    "Google Business Profile help",
    "local SEO",
  ],
  openGraph: {
    type: "website",
    siteName: "Frames by Frady",
    url: "https://framesbyfrady.com",
    title: "Frames by Frady | Clean Websites for Local Businesses",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Frames by Frady | Clean Websites for Local Businesses",
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#070B14] text-[#F3F5F8] antialiased">
        {children}
      </body>
    </html>
  );
}
