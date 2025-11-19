import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/hooks/useTheme";

export const metadata: Metadata = {
  title: "Zentra",
  description: "All your finances, one smart app.",
  icons: {
    icon: "/zentra-icon-color.svg",
    apple: "/zentra-icon-color.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
