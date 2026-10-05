import type { Metadata } from 'next';
import '../styles.css';

export const metadata: Metadata = {
    metadataBase: new URL('https://casadibiz.com'),
    title: 'Casa Di Biz | Luxury Packaging',
    description: 'Custom luxury packaging solutions',
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
