import { Geist, Geist_Mono } from "next/font/google"
import { Nunito } from "next/font/google";
import type { Metadata } from "next";
import { Header } from "@/components/shared/header";

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

// const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const nunito = Nunito({
	subsets: ["cyrillic"],
	variable: "--font-nunito",
	weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Maxi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
   <html lang='en'>
			<body className={cn("min-h-screen bg-background antialiased", nunito.className)}>
				<main className='min-h-screen'>
					<Header />
					{children}
				</main>
			</body>
		</html>
  )
}
