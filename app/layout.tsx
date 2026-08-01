import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import CustomCursor from '@/components/CustomCursor'
import './globals.css'

const geist = Geist({ 
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['100', '300', '400', '500', '700', '800', '900'],
})

const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
})

// export const metadata: Metadata = {
//   metadataBase: new URL('https://saad-portfolio.vercel.app'), // Aapka apna deployment name
//   title: 'Frontend & Wordpress Specilist Portfolio | Saad Ali',
//   description: 'High-quality frontend & Wordpress portfolio showcasing web apps, websites, and design projects. Built with Next.js, React, and modern web technologies.',
//   keywords: ['frontend developer', 'portfolio', 'web development', 'react', 'next.js', "Wordpress", "WooCommerce", "Elementor", "Elementor Pro", "Wordpress Bugs", "Wordpress Issues"],
//   authors: [{ name: 'Manahil Mustafa' }],
//   creator: 'Saad Ali',
//   generator: 'Next.js',
  
//   // 👇 Browser Tab Logo (Favicon)
//   icons: {
//     icon: '/fav-icon.png',         // Standard icon
//     shortcut: '/fav-icon.png',     // Shortcut icon
//     apple: '/fav-icon.png',        // Apple devices ke liye
//   },

//   openGraph: {
//     type: 'website',
//     url: 'https://yourportfolio.com',
//     title: 'Frontend & Wordpress Specialist Portfolio',
//     description: 'Explore my latest web projects and services',
//     siteName: 'Portfolio',
//     images: [
//       {
//         url: '/wordpress.png', // Jab link share karein to ye image dikhegi
//         width: 1200,
//         height: 630,
//         alt: 'Saad Ali Portfolio Preview',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Saad Ali - Frontend & Wordpress Specialist Portfolio',
//     description: 'High-quality web development portfolio',
//     creator: '@saadAli',
//     images: ['/wordpress.png'],
//   },
// }

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground cursor-none`}>
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}