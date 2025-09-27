import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ange Buhendwa - Software & Electronics Engineer | Portfolio",
  description: "Software & Electronics Engineer specializing in backend development with Spring Boot, Node.js, and modern web technologies. Currently training at the-gym Rwanda's intensive software development program.",
  keywords: ["Software Engineer", "Electronics Engineer", "Backend Developer", "Spring Boot", "Node.js", "React", "TypeScript", "Rwanda", "the-gym Rwanda"],
  authors: [{ name: "Ange Buhendwa" }],
  creator: "Ange Buhendwa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ange.is-a.dev",
    title: "Ange Buhendwa - Software & Electronics Engineer",
    description: "Software & Electronics Engineer specializing in backend development with Spring Boot, Node.js, and modern web technologies.",
    siteName: "Ange Buhendwa Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ange Buhendwa - Software & Electronics Engineer",
    description: "Software & Electronics Engineer specializing in backend development with Spring Boot, Node.js, and modern web technologies.",
    creator: "@angebhd",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem={true}
          storageKey="theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}