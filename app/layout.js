import Logo from '@/app/_components/Logo';
import Navigation from '@/app/_components/Navigation';
import { Josefin_Sans } from 'next/font/google';
import '@/app/_styles/globals.css';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description: "Luxrious cabin hotel, located in the heart of the Italian Dolomites, Surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>
          {children}
        </main>
        <footer>Wild Oasis Copyright</footer>
      </body>
    </html>
  );
};
