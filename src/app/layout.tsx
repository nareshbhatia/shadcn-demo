import { ThemeProvider } from '@/components/providers';
import { SiteHeader } from '@/components/site-header';
import { Toaster as DefaultToaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

/*
 * Load the fonts using next/font/google. For details, see
 * https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#with-tailwind-css
 */
// TODO: why is --font-family-sans sans variable not defined?
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-family-sans',
  display: 'swap',
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
    <html className={inter.className} lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </div>
          <DefaultToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
