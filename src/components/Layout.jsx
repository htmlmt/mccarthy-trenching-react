import { Fragment } from 'react'
import Image from 'next/future/image'
import Link from 'next/link'

import { AudioPlayer } from '@/components/player/AudioPlayer'
import playsThePiano from '@/images/plays-the-piano.jpeg'

function Header() {
	const navigation = [
		{ name: 'News', href: '#' },
		{ name: 'Shows', href: '#' },
		{ name: 'Albums', href: '#' },
		{ name: 'Video', href: '#' },
	]

	return (
		<header className="bg-slate-100 lg:ml-112 xl:ml-120">
			<nav className="lg:px-8" aria-label="Top">
				<div className="py-4 lg:max-w-4xl ">
					<div className="mx-auto flex flex-wrap justify-center space-x-6 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:justify-start lg:px-0">
						{navigation.map((link) => (
							<a
								key={link.name}
								href={link.href}
								className="text-base font-medium text-slate-900 hover:text-slate-700"
							>
								{link.name}
							</a>
						))}
					</div>
				</div>
			</nav>
		</header>
	)
}

function TinyWaveFormIcon({ colors = [], ...props }) {
	return (
		<svg aria-hidden="true" viewBox="0 0 10 10" {...props}>
			<path
				d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
				className={colors[0]}
			/>
			<path
				d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
				className={colors[1]}
			/>
		</svg>
	)
}

function AboutSection(props) {
	return (
		<section {...props}>
			<h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
				<TinyWaveFormIcon
					colors={['fill-green-300', 'fill-blue-300']}
					className="h-2.5 w-2.5"
				/>
				<span className="ml-2.5">Credits</span>
			</h2>
			<p className="mt-2 text-base leading-7 text-slate-700">
				Dan McCarthy: piano and singing
				<br />
				James Maakestad: upright bass and singing
			</p>
			<p className="mt-2 text-base leading-7 text-slate-700">
				Recorded at home by Ben Brodin on April 14, 2012. Mixed by Ben at ARC
				Studios in Omaha, Nebr.
			</p>
			<p className="mt-2 text-base leading-7 text-slate-700">All analog.</p>
		</section>
	)
}

export function Layout({ children }) {
	let albums = [
		'Perfect Game',
		'More Like It',
		'Plays the Piano',
		'Fresh Blood',
	]

	return (
		<>
			<Header />
			<header className="bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120">
				<div className="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:py-12 lg:px-8 xl:px-12">
					<div className="relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl">
						<Image
							className="w-full"
							src={playsThePiano}
							alt=""
							sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
							priority
						/>
						<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl" />
					</div>
					<AboutSection className="mt-12 hidden lg:block" />
				</div>
			</header>
			<main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
				<div className="relative">{children}</div>
			</main>
			<footer className="border-t border-slate-200 bg-slate-50 py-10 pb-40 sm:py-16 sm:pb-32 lg:hidden">
				<div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
					<AboutSection />
				</div>
			</footer>
			<div className="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120">
				<AudioPlayer />
			</div>
		</>
	)
}
