import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Chronicle',
	description: 'A modern blog app for the modern web.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
