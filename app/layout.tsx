import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import ActiveSectionContextProvider from '@/context/ActiveSectionContext';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saurabh | Portfolio',
  description: 'Full Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-screen`}>

        <div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[40rem] w-[40rem] rounded-full blur-[10rem] sm:w-[80rem]'></div>
        <div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[40rem] w-[60rem] rounded-full blur-[10rem] sm:w-[80rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>

        <ActiveSectionContextProvider>
          <Navbar />
          {children}

          <Toaster position='top-right' />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
};
