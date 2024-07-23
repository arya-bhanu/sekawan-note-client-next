import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import GlobalProvider from '@/providers/global-provider';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={clsx(inter.className, 'bg-red-500')}>
				<GlobalProvider>{children}</GlobalProvider>
			</body>
		</html>
	);
}
