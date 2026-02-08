import type { AppProps } from 'next/app';
import { Lato } from 'next/font/google';
import '../styles/globals.css';

const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={lato.variable}>
      <Component {...pageProps} />
    </div>
  );
}
