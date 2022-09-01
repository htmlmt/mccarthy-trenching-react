import Link from 'next/link'

import { AudioPlayer } from '@/components/player/AudioPlayer'

function Header() {
	const navigation = [
		{ name: 'News', href: '/' },
		{ name: 'Shows', href: '/shows' },
		{ name: 'Albums', href: '/albums' },
	]

	return (
		<header className="lg:ml-112 xl:ml-120">
			<nav className="lg:border-b lg:border-slate-100 lg:px-8" aria-label="Top">
				<div className="py-4 lg:max-w-4xl ">
					<div className="mx-auto flex flex-wrap justify-center space-x-6 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:justify-start lg:px-0">
						{navigation.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="text-base font-medium text-slate-900 hover:text-slate-700"
							>
								{link.name}
							</Link>
						))}
					</div>
				</div>
			</nav>
		</header>
	)
}

export function Layout({ children }) {
	return (
		<>
			<Header />

			{children}

			<div className="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120">
				<AudioPlayer />
			</div>
		</>
	)
}
