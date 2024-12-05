import "@/src/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "../lib/Provider";
import { siteConfig } from "@/src/config/site";
import { poppins } from "@/src/config/fonts";
import ScrollToTop from "../components/UI/ScrollToTop/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          poppins.className
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          {children}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
