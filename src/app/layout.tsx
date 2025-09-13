// import type { Metadata } from "next";
// import { Inter } from 'next/font/google'
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: "Cardtonic Krea AI",
//   description: "Krea AI",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const [darkMode, setDarkMode] = useState(false);
//   return (
//     <html lang="en">
//        <body className={inter.className} className={darkMode ? "dark" : ""}>{children}</body>
//       {/* <body */}
//         {/* className={`${geistSans.variable} ${geistMono.variable} antialiased`} */}
//       {/* > */}
//         {/* {children} */}
//       {/* </body> */}
//     </html>
//   );
// }
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./ThemeProvider";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cardtonic Krea AI",
  description: "Krea AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* ✅ Wrap everything in client ThemeProvider */}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
