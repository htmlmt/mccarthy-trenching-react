import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html className="bg-white antialiased" lang="en">
			<Head>
				<link
					crossOrigin="anonymous"
					href="https://cdn.fontshare.com"
					rel="preconnect"
				/>
				<link
					href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap"
					rel="stylesheet"
				/>
				<link href="https://fonts.googleapis.com" rel="preconnect" />
				<link crossOrigin href="https://fonts.gstatic.com" rel="preconnect" />
				<link
					href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
