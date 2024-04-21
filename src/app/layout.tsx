import { ThemeProvider } from '@/components/providers';
import { SiteHeader } from '@/components/site-header';
import { Toaster as SonnerToaster } from '@/components/ui/sonner';
import { Toaster as DefaultToaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { Inter, Roboto_Mono as RobotoMono } from 'next/font/google';
import './globals.css';

/*
 * Load the fonts using next/font/google. For details, see
 * https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#with-tailwind-css
 */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
const robotoMono = RobotoMono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: 'Shadcn Demo',
  description: 'Shadcn Demo',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      className={`${inter.variable} ${robotoMono.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </div>
          <DefaultToaster />
          <SonnerToaster expand richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
