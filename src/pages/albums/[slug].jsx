import { useMemo } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/future/image'

import groq from 'groq'
import client from '../../client'

import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'
import { PortableText } from '@portabletext/react'

function PlayPauseIcon({ playing, ...props }) {
	return (
		<svg aria-hidden="true" viewBox="0 0 10 10" fill="none" {...props}>
			{playing ? (
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M1.496 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2.68a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H1.496Zm5.82 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H8.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7.316Z"
				/>
			) : (
				<path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z" />
			)}
		</svg>
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

function TrackEntry({ track, number }) {
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
		<article
			aria-labelledby={`track-${track._id}-title`}
			className="py-10 sm:py-12"
		>
			<Container>
				<div className="flex flex-col items-start">
					<h2
						id={`track-${track._id}-title`}
						className="mt-2 text-lg font-bold text-slate-900"
					>
						{number}. {track.title}
					</h2>

					<div className="mt-4 flex items-center gap-4">
						{track.trackUrl && (
							<button
								type="button"
								onClick={() => player.toggle()}
								className="flex items-center text-sm font-bold leading-6 text-blue-500 hover:text-blue-700 active:text-blue-900"
								aria-label={`${player.playing ? 'Pause' : 'Play'} track ${
									track.title
								}`}
							>
								<PlayPauseIcon
									playing={player.playing}
									className="h-2.5 w-2.5 fill-current"
								/>
								<span className="ml-3" aria-hidden="true">
									Listen
								</span>
							</button>
						)}

						{track.trackUrl && track.lyrics && <p>/</p>}

						{track.lyrics && (
							<Link
								href={`/tracks/${track.slug.current}`}
								className="text-sm font-bold leading-6 text-blue-500 hover:text-blue-700 active:text-blue-900"
								aria-label={`Lyrics for ${track.title}`}
							>
								Lyrics {track.videoEmbed && <span>(with Video)</span>}
							</Link>
						)}
					</div>
				</div>
			</Container>
		</article>
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

export default function Album({ album, tracks }) {
	return (
		<>
			<Head>
				<title>McCarthy Trenching - {album.title}</title>
				<meta
					name="description"
					content={`Released ${new Date(album.releaseDate).toLocaleString(
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
							src={`${album.artwork}`}
							width="320"
						/>

						<div className="absolute inset-0 rounded-sm ring-1 ring-inset ring-black/10" />
					</div>

					{(album.spotifyLink || album.bandcampLink) && (
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
								{album.spotifyLink && (
									<li key="spotify" className="flex">
										<Link
											aria-label={`${album.title} on Spotify`}
											className="group flex items-center"
											href={album.spotifyLink}
											target="_blank"
										>
											<SpotifyIcon className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
											<span className="hidden sm:ml-3 sm:block">Spotify</span>
										</Link>
									</li>
								)}

								{album.bandcampLink && (
									<li key="bandcamp" className="flex">
										<Link
											aria-label={`${album.title} on Bandcamp`}
											className="group flex items-center"
											href={album.bandcampLink}
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
						<AboutSection className="mt-12" album={album} />
					</div>
				</div>
			</header>

			<main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
				<div className="relative">
					<div className="pt-16 pb-12 sm:pb-4 lg:pt-12">
						<Container>
							<h1 className="text-2xl font-bold leading-7 text-slate-900">
								{album.title}
							</h1>
						</Container>

						{album.tracks && (
							<div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
								{album.tracks.map((track, index) => (
									<TrackEntry
										key={track._id}
										track={track}
										number={index + 1}
									/>
								))}
							</div>
						)}
					</div>
				</div>
			</main>

			<footer className="border-t border-slate-200 bg-slate-50 py-10 pb-40 sm:py-16 sm:pb-32 lg:hidden">
				<div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
					<AboutSection album={album} />
				</div>
			</footer>
		</>
	)
}

const albumQuery = groq`
	*[_type == "album" && slug.current == $slug][0]{
		"artwork": artwork.asset->url,
		bandcampLink,
		credits,
		notes,
		releaseDate,
		spotifyLink,
		title,
		tracks[]-> {
			lyrics,
			slug,
			title,
			"trackUrl": file.asset->url,
			videoEmbed,
		},
	}
`

export async function getStaticProps(context) {
	const { slug = '' } = context.params
	const album = await client.fetch(albumQuery, { slug })

	return {
		props: {
			album,
		},
	}
}

export async function getStaticPaths() {
	const paths = await client.fetch(
		groq`*[_type == "album" && defined(slug.current)][].slug.current`
	)

	return {
		paths: paths.map((slug) => ({ params: { slug } })),
		fallback: false,
	}
}
