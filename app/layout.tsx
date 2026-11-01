import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DT Car Philippines | More Than Cars",
  description: "DT Car Philippines — automotive, mobility, infrastructure, project execution and travel.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: { url: "/dtc-favicon.svg", type: "image/png" },
    shortcut: "/dtc-favicon.svg",
    apple: "/dtcar-apple-logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
