import "./globals.css";
import ThemeProvider from "../components/providers/ThemeProvider";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--background)] text-[var(--text-primary)] antialiased">
        <ThemeProvider>
          {/* Header sits globally at the top */}
          <Header />
          
          {/* Main tag holds your dynamic page routes and handles structural min-height */}
          <main className="min-h-screen">
            {children}
          </main>
          
          {/* Footer sits globally at the bottom */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}