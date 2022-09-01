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
		<section className="mt-12 hidden lg:block">
			<h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
				<TinyWaveFormIcon
					colors={['fill-green-300', 'fill-blue-300']}
					className="h-2.5 w-2.5"
				/>

				<span className="ml-2.5">Credits</span>
			</h2>

			<PortableText value={album.credits} components={components} />
		</section>
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
				{/* <meta name="description" content={track.description} /> */}
			</Head>

			<header className="bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120">
				<div className="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:py-12 lg:px-8 xl:px-12">
					<div className="relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl">
						<Image
							alt=""
							className="w-full"
							height="320"
							priority
							sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
							src={`${track.album.artwork}`}
							width="320"
						/>

						<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl" />
					</div>

					<AboutSection className="mt-12 hidden lg:block" album={track.album} />
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
		</>
	)
}

const trackQuery = groq`
	*[_type == "track" && slug.current == $slug][0]{
		album-> {
			"artwork": artwork.asset->url,
			credits,
			slug,
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
		fallback: true,
	}
}
