import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FENR | Connected riding for Stark electric motorcycles',
  description:
    'Live telemetry, battery insight and guarded controls for compatible Stark electric motorcycles.',
  icons: {
    icon: '/assets/favicon-rounded.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
