import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { getSiteUrl, isPreviewDeployment } from '@/lib/site-config';
import '../styles.css';
import { Analytics } from "@vercel/analytics/next"

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-manrope',
    display: 'swap',
});

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
        <html lang="en" className={manrope.variable}>
            <body>{children}
                <Analytics />
            </body>
        </html>
    );
}
