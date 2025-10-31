import "./globals.css";

export const metadata = {
  title: "Zentra",
  description: "All your finances, one smart app.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
