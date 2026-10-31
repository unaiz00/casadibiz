import type { Metadata, Viewport } from 'next';
import { getSiteUrl, isPreviewDeployment } from '@/lib/site-config';
import '../styles.css';

export const metadata: Metadata = {
    metadataBase: new URL(getSiteUrl()),
    title: 'Casa Di Biz | Luxury Packaging',
    description: 'Custom luxury packaging solutions',
    robots: isPreviewDeployment()
        ? {
              index: false,
              follow: false,
              nocache: true,
              googleBot: {
                  index: false,
                  follow: false,
                  noimageindex: true,
              },
          }
        : {
              index: true,
              follow: true,
              googleBot: {
                  index: true,
                  follow: true,
                  'max-video-preview': -1,
                  'max-image-preview': 'large',
                  'max-snippet': -1,
              },
          },
};

export const viewport: Viewport = {
    themeColor: '#0F2744',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
