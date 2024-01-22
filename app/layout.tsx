import type { Metadata } from "next"
import "./globals.css"
import { youngSerif } from "@/utils/fonts"

export const metadata: Metadata = {
  title: "Recipe Page",
  description: "A Challenge from Frontend Mentor!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${youngSerif.className} flex min-h-screen flex-col items-center justify-center bg-neutral-eggshell`}
      >
        {children}
      </body>
    </html>
  )
}
