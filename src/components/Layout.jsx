import Link from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/router'

import { AudioPlayer } from '@/components/player/AudioPlayer'

function Header() {
	const navigation = [
		{ name: 'News', href: '/' },
		{ name: 'Shows', href: '/shows' },
		{ name: 'Albums', href: '/albums' },
	]

	const router = useRouter()

	return (
		<header className="lg:ml-112 xl:ml-120">
			<nav className="lg:border-b lg:border-slate-100 lg:px-8" aria-label="Top">
				<div className="pt-4 lg:max-w-4xl ">
					<div className="mx-auto flex flex-wrap justify-center space-x-6 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:justify-start lg:px-0">
						{navigation.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className={clsx(
									'border-b-2 pb-3 text-base font-medium',
									router.pathname === link.href &&
										'border-slate-500 text-gray-900',
									router.pathname !== link.href &&
										'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
								)}
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
