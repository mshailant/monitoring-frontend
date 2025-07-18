import '@/app/globals.css'
import {ThemeProvider} from "@/components/theme-provider";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="es">
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}
