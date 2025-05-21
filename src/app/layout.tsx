import React from "react";
import "./globals.css";
import Providers from '@/app/сomponents/providers';
import {Plus_Jakarta_Sans} from 'next/font/google';

const font = Plus_Jakarta_Sans({subsets:['latin']});

const RootLayout = ({
children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
        <body className={font.className}>
        <Providers>{children}</Providers>
        </body>
        </html>
    );
};

export default RootLayout;
