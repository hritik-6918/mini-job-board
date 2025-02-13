import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mini Job Board",
  description: "A simple job board application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              Mini Job Board
            </Link>
            <div className="space-x-4">
              <Link href="/candidate/jobs" className="hover:text-gray-300">
                Find Jobs
              </Link>
              <Link href="/company/jobs" className="hover:text-gray-300">
                Post Jobs
              </Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}

