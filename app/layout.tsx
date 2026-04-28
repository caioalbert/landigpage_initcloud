import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'InitCloud | Consultoria Cloud & Desenvolvimento',
  description: 'Consultoria especializada em AWS, Google Cloud, Microsoft Azure e serviços de desenvolvimento. Transformamos sua infraestrutura com soluções cloud modernas.',
  keywords: ['cloud', 'AWS', 'Google Cloud', 'Azure', 'consultoria', 'desenvolvimento', 'infraestrutura'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable}`}>
        {children}
        <script src="/script.js"></script>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
