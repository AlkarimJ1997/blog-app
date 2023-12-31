import './globals.css';
import { Nunito } from 'next/font/google';
import { Navbar } from '@/components';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
	title: 'Blogify',
	description: 'A modern blog app for the modern web.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={nunito.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
