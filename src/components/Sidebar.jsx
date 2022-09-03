import Image from 'next/future/image'
import Link from 'next/link'

import sidebarImage from '@/images/mccarthy-trenching.jpeg'

import { AboutSection } from '@/components/AboutSection'
import { TinyWaveFormIcon } from '@/components/TinyWaveFormIcon'

function BandcampIcon(props) {
	return (
		<svg aria-hidden="true" viewBox="0 0 32 32" {...props}>
			<path d="M21.81,25.4H0L10.19,6.6h21.81l-10.19,18.8" />
		</svg>
	)
}

function SpotifyIcon(props) {
	return (
		<svg aria-hidden="true" viewBox="0 0 32 32" {...props}>
			<path d="M15.8 3a12.8 12.8 0 1 0 0 25.6 12.8 12.8 0 0 0 0-25.6Zm5.87 18.461a.8.8 0 0 1-1.097.266c-3.006-1.837-6.787-2.252-11.244-1.234a.796.796 0 1 1-.355-1.555c4.875-1.115 9.058-.635 12.432 1.427a.8.8 0 0 1 .265 1.096Zm1.565-3.485a.999.999 0 0 1-1.371.33c-3.44-2.116-8.685-2.728-12.755-1.493a1 1 0 0 1-.58-1.91c4.65-1.41 10.428-.726 14.378 1.7a1 1 0 0 1 .33 1.375l-.002-.002Zm.137-3.629c-4.127-2.45-10.933-2.675-14.871-1.478a1.196 1.196 0 1 1-.695-2.291c4.52-1.374 12.037-1.107 16.785 1.711a1.197 1.197 0 1 1-1.221 2.06" />
		</svg>
	)
}

export function Sidebar() {
	return (
		<header className="bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120">
			<div className="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:py-14 lg:px-8 xl:px-12">
				<div className="relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl">
					<Image
						alt=""
						className="w-full"
						height="320"
						priority
						sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
						src={sidebarImage}
						width="320"
					/>

					<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl" />
				</div>

				<div className="mt-10 text-center lg:mt-12 lg:text-left">
					<p className="text-xl font-bold text-slate-900">
						<Link href="/">McCarthy Trenching</Link>
					</p>
				</div>

				<AboutSection className="mt-12 hidden lg:block" />

				<section className="mt-10 lg:mt-12">
					<h2 className="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only">
						<TinyWaveFormIcon
							colors={['fill-indigo-300', 'fill-blue-300']}
							className="h-2.5 w-2.5"
						/>

						<span className="ml-2.5">Links</span>
					</h2>

					<div className="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden" />

					<ul
						role="list"
						className="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4"
					>
						{[
							[
								'Spotify',
								SpotifyIcon,
								'https://open.spotify.com/artist/1aqhDwQxCPHjPS0Ypd9O29',
							],
							[
								'Bandcamp',
								BandcampIcon,
								'https://mccarthytrenching.bandcamp.com/',
							],
						].map(([label, Icon, href]) => (
							<li key={label} className="flex">
								<Link
									aria-label={label}
									className="group flex items-center"
									href={href}
									target="_blank"
								>
									<Icon className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
									<span className="hidden sm:ml-3 sm:block">{label}</span>
								</Link>
							</li>
						))}
					</ul>
				</section>
			</div>
		</header>
	)
}
