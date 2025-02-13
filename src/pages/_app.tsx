import 'material-icons/iconfont/material-icons.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { twMerge } from 'tailwind-merge';

const pretendard = localFont({
	src: '../assets/fonts/PretendardVariable.woff2',
	display: 'swap',
	weight: '45 920',
	variable: '--font-pretendard'
});

export default function App({ Component, pageProps }: AppProps) {
	const mainClassName = twMerge(pretendard.variable, 'font-pretendard');

	return (
		<main className={mainClassName}>
			<Component {...pageProps} />
		</main>
	);
}
