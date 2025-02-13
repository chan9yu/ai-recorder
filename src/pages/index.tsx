import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
});

export default function HomePage() {
	return (
		<div className={`${geistSans.variable} ${geistMono.variable}`}>
			<div className="w-screen h-screen flex items-center justify-center">Hello World!</div>
		</div>
	);
}
