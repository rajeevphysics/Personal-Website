import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import CustomCursor from "@/components/custom-cursor"
import MobileWarning from "@/components/mobile-warning"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rajeev Persaud",
  description: "Portfolio by Rajeev Persaud",
  generator: "Designed & coded by Rajeev Persaud",
  icons: {
    icon: "favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <MobileWarning />
        <CustomCursor />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
