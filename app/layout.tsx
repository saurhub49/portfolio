import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import ActiveSectionContextProvider from '@/context/ActiveSectionContext';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ThemeContextProvider from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saurabh | Portfolio',
  description: 'Full Stack Developer',
  icons: {
    icon: ['/favicons/favicon.ico'],
    apple: ['/favicons/apple-touch-icon.png'],
    shortcut: ['/favicons/apple-touch-icon.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-screen dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>

        <div className='bg-[#dbd7fb] absolute top-[-6rem] -z-10 right-[11rem] h-[50rem] w-[40rem] rounded-full blur-[10rem] sm:w-[80rem] dark:bg-[#676394]'></div>
        <div className='bg-[#fbe2e3] absolute top-[-1rem] -z-10 left-[-35rem] h-[50rem] w-[60rem] rounded-full blur-[10rem] sm:w-[65rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#946263]'></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Navbar />
            {children}
            <Footer />
            <Toaster position='top-right' />
            <ScrollToTop />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}