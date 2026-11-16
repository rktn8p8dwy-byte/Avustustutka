import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Avustustutka – avustusten hakemisen apuna',
  description:
    'Selkeä työtila avustusten etsimiseen, hakemusten valmisteluun ja määräaikojen seurantaan.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  );
}
