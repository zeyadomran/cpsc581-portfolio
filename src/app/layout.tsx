import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

const ibmPlex = IBM_Plex_Sans({
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Zeyad Omran :: CPSC 581',
	description: 'Portfolio website for CPSC 581 F23',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={ibmPlex.className}>{children}</body>
		</html>
	);
}
