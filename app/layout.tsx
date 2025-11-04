import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import CustomCursor from "@/components/custom-cursor"
import MobileWarning from "@/components/mobile-warning"
import LoadingBar from "@/components/loading-bar"
import SmoothScroll from "@/components/smoothscroll"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rajeev Persaud",
  description: "Portfolio by Rajeev Persaud",
  generator: "Ifk",
  icons: {
    icon: "/favicon.svg",
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
        <LoadingBar />
        <MobileWarning />
        <CustomCursor />
        <SmoothScroll>
          <Suspense fallback={null}>{children}</Suspense>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
