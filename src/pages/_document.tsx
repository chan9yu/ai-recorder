import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="ko">
			<Head />
			<body className="max-w-screen-sm mx-auto antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
