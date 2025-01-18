import '../styles/globals.css';

import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

// Set up the Inter font with a variable for custom CSS usage
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
