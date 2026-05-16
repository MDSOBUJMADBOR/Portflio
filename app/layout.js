

import "./globals.css"
import { ThemeProvider } from "next-themes"
import LenisProvider from "@/components/lenis-provider"
import {  Poppins, Inter ,JetBrains_Mono,Smooch_Sans} from "next/font/google";

export const metadata = {
  title: "Sobuj Madbor | Web Developer",
  description: "I build modern, responsive websites & web applications.",
}

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400","500","600","700"]
})
const inter = Inter({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400","500","600","700"]
})
export const smooch = Smooch_Sans({
  variable: "--font-smooch",
  subsets: ["latin"],
  weight: ["400","500","600","700"]
});


const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});






export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          
          enableSystem={false}  // 🔥 avoid bug
        >
          <LenisProvider>            
            {children}
          </LenisProvider>  
        </ThemeProvider>
      </body>
    </html>
  )
}
