import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Shutdown Insurance — Business Continuity Coverage',
  description: 'Insurance that covers lost revenue when payment processors like Stripe suddenly terminate your account. Includes legal support and fast claims.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f3e7a830-d6eb-47d2-91b3-71e605e03d0b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
