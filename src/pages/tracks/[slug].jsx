import { useMemo } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/future/image'

import groq from 'groq'
import client from '../../client'

import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'
import { PlayButton } from '@/components/player/PlayButton'
import { PortableText } from '@portabletext/react'

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

function AboutSection({ album }) {
	const components = {
		block: {
			normal: ({ children }) => (
				<p className="mt-2 text-base leading-7 text-slate-700">{children}</p>
			),
			h2: ({ children }) => (
				<h2 className="mt-2 text-lg font-bold text-slate-900">{children}</h2>
			),
		},
	}

	return (
		<div>
			{album.credits && (
				<section className="mt-12">
					<h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
						<TinyWaveFormIcon
							colors={['fill-green-300', 'fill-blue-300']}
							className="h-2.5 w-2.5"
						/>

						<span className="ml-2.5">Credits</span>
					</h2>

					<PortableText value={album.credits} components={components} />
				</section>
			)}

			{album.notes && (
				<section className="mt-12">
					<h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
						<TinyWaveFormIcon
							colors={['fill-blue-300', 'fill-green-300']}
							className="h-2.5 w-2.5"
						/>

						<span className="ml-2.5">Notes</span>
					</h2>

					<PortableText value={album.notes} components={components} />
				</section>
			)}
		</div>
	)
}

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

export default function Track({ track }) {
	let audioPlayerData = useMemo(
		() => ({
			title: track.title,
			audio: {
				src: track.trackUrl,
			},
		}),
		[track]
	)
	let player = useAudioPlayer(audioPlayerData)

	return (
		<>
			<Head>
				<title>{`${track.title} - ${track.album.title}`}</title>
				<meta
					name="description"
					content={`Released ${new Date(track.album.releaseDate).toLocaleString(
						'en-US',
						{
							timeZone: 'UTC',
							year: 'numeric',
							month: 'short',
							day: 'numeric',
						}
					)}`}
				/>
			</Head>

			<header className="bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120">
				<div className="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:py-14 lg:px-8 xl:px-12">
					<div className="relative mx-auto block w-48 overflow-hidden rounded-sm bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 lg:w-auto">
						<Image
							alt=""
							className="w-full"
							height="320"
							priority
							sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
							src={`${track.album.artwork}`}
							width="320"
						/>

						<div className="absolute inset-0 rounded-sm ring-1 ring-inset ring-black/10" />
					</div>

					{(track.album.spotifyLink || track.album.bandcampLink) && (
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
								{track.album.spotifyLink && (
									<li key="spotify" className="flex">
										<Link
											aria-label={`${track.album.title} on Spotify`}
											className="group flex items-center"
											href={track.album.spotifyLink}
											target="_blank"
										>
											<SpotifyIcon className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
											<span className="hidden sm:ml-3 sm:block">Spotify</span>
										</Link>
									</li>
								)}

								{track.album.bandcampLink && (
									<li key="bandcamp" className="flex">
										<Link
											aria-label={`${track.album.title} on Bandcamp`}
											className="group flex items-center"
											href={track.album.bandcampLink}
											target="_blank"
										>
											<BandcampIcon className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
											<span className="hidden sm:ml-3 sm:block">Bandcamp</span>
										</Link>
									</li>
								)}
							</ul>
						</section>
					)}

					<div className="hidden lg:block">
						<AboutSection className="mt-12" album={track.album} />
					</div>
				</div>
			</header>

			<main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
				<div className="relative">
					<article className="pt-16 pb-12 sm:pb-4 lg:pt-12">
						<Container>
							<Link
								href={`/albums/${track.album.slug.current}`}
								className="mb-12 inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
							>
								Back to "{track.album.title}"
							</Link>

							<header className="flex flex-col">
								<div className="flex items-center gap-6">
									{track.trackUrl && (
										<PlayButton player={player} size="large" />
									)}

									<div className="flex flex-col">
										<h1 className="text-4xl font-bold text-slate-900">
											{track.title}
										</h1>
									</div>
								</div>
							</header>

							<hr className="my-12 border-gray-200" />

							<div className="prose prose-slate mt-14 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2:nth-of-type(3n)]:before:bg-violet-200">
								<PortableText value={track.lyrics} />
							</div>
						</Container>
					</article>
				</div>
			</main>

			<footer className="border-t border-slate-200 bg-slate-50 py-10 pb-40 sm:py-16 sm:pb-32 lg:hidden">
				<div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
					<AboutSection album={track.album} />
				</div>
			</footer>
		</>
	)
}

const trackQuery = groq`
	*[_type == "track" && slug.current == $slug][0]{
		album-> {
			"artwork": artwork.asset->url,
			bandcampLink,
			credits,
			notes,
			slug,
			spotifyLink,
			title,
		},
		lyrics,
		title,
		"trackUrl": file.asset->url,
	}
`

export async function getStaticProps(context) {
	const { slug = '' } = context.params
	const track = await client.fetch(trackQuery, { slug })

	if (!track) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			track,
		},
	}
}

export async function getStaticPaths() {
	const paths = await client.fetch(
		groq`*[_type == "track" && defined(slug.current)][].slug.current`
	)

	return {
		paths: paths.map((slug) => ({ params: { slug } })),
		fallback: false,
	}
}
