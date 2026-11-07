import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { getSiteUrl, isPreviewDeployment } from '@/lib/site-config';
import '../styles.css';
import { Analytics } from "@vercel/analytics/next";

const manrope = localFont({
    src: [
        {
            path: '../fonts/manrope/Manrope-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/manrope/Manrope-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/manrope/Manrope-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../fonts/manrope/Manrope-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
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
    colorScheme: 'light',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={manrope.variable} suppressHydrationWarning>
            <head>
                <meta name="color-scheme" content="light" />
            </head>
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
