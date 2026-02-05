import "./globals.css";
import { ThemeProvider } from "@/app/_providers/ThemeProvider";
import Toaster from "@/app/_features/toast/components/Toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
