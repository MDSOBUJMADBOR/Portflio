// import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
// import LenisProvider from "@/components/lenis-provider"

// export const metadata = {
//   title: "Sobuj Madbor | Web Developer",
//   description: "I build modern, responsive websites & web applications.",
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body>
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           <LenisProvider>
//             {children}
//           </LenisProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }

// import "./globals.css"
// import { ThemeProvider } from "next-themes"
// import LenisProvider from "@/components/lenis-provider"

// export const metadata = {
//   title: "Sobuj Madbor | Web Developer",
//   description: "I build modern, responsive websites & web applications.",
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="dark"   // 🔥 change this
//           enableSystem={false}  // 🔥 optional but recommended
//         >
//           <LenisProvider>
//             {children}
//           </LenisProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }

import "./globals.css"
import { ThemeProvider } from "next-themes"
import LenisProvider from "@/components/lenis-provider"

export const metadata = {
  title: "Sobuj Madbor | Web Developer",
  description: "I build modern, responsive websites & web applications.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"   // 🔥 important
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
