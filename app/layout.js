import '../styles/globals.css';
import MainLayoutWrapper from '@/components/layout/MainLayoutWrapper';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayoutWrapper>{children}</MainLayoutWrapper>
      </body>
    </html>
  );
}
