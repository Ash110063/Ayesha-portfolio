import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import { SITE } from "@/data/site";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-host",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} — Creative Portfolio`,
  description: `${SITE.role}. Designing experiences that solve real problems.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${hostGrotesk.variable} antialiased`}>
      <body className="bg-black font-sans text-white">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-[var(--color-accent)] focus:px-3 focus:py-2 focus:text-black">
          Skip to content
        </a>
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
