
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Poppins, PT_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'eletriczbrasil Showcase',
  description: 'The best products for your setup.',
};

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-headline',
});

const fontPTSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            window.tikTokPixelId = "690fbff5d137addb94f475e9";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel-tiktok.js");
            document.head.appendChild(a);
          `}
        </Script>
      </head>
      <body className={cn("font-body antialiased", fontPoppins.variable, fontPTSans.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
