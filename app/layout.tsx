import type { Metadata } from "next";
import "@fontsource-variable/sora";
import "@fontsource-variable/dm-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "FiveCore Technologies | Building Digital Solutions Together",
  description:
    "FiveCore Technologies is a team of developers building web applications and digital solutions tailored to your needs. Send us an inquiry.",
};

const themeScript = `
  try {
    var t = localStorage.getItem("theme");
    if (t === "dark" || (!t && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}