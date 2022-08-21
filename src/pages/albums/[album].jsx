import { useMemo } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { parse } from 'rss-to-json'

import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'

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

function TrackEntry({ track }) {
	let audioPlayerData = useMemo(
		() => ({
			content: track.content,
			title: track.title,
			audio: {
				src: track.audio.src,
				type: track.audio.type,
			},
			link: `/${track.id}`,
		}),
		[track]
	)
	let player = useAudioPlayer(audioPlayerData)

	return (
		<article
			aria-labelledby={`track-${track.id}-title`}
			className="py-10 sm:py-12"
		>
			<Container>
				<div className="flex flex-col items-start">
					<h2
						id={`track-${track.id}-title`}
						className="mt-2 text-lg font-bold text-slate-900"
					>
						{track.id}. {track.title}
					</h2>

					<div className="mt-4 flex items-center gap-4">
						{track.audio.src !== '#' && (
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

						{track.audio.src !== '#' && track.content.length !== 0 && <p>/</p>}

						{track.content.length !== 0 && (
							<Link
								href={`/tracks/${track.description}`}
								className="flex items-center text-sm font-bold leading-6 text-blue-500 hover:text-blue-700 active:text-blue-900"
								aria-label={`Lyrics for ${track.title}`}
							>
								Lyrics
							</Link>
						)}
					</div>
				</div>
			</Container>
		</article>
	)
}

export default function Home({ tracks }) {
	return (
		<>
			<Head>
				<title>McCarthy Trenching - Plays the Piano</title>
				<meta name="description" content="Released Oct. 9, 2012" />
			</Head>
			<div className="pt-16 pb-12 sm:pb-4 lg:pt-12">
				<Container>
					<h1 className="text-2xl font-bold leading-7 text-slate-900">
						Plays the Piano
					</h1>
				</Container>
				<div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
					{tracks.map((track) => (
						<TrackEntry key={track.id} track={track} />
					))}
				</div>
			</div>
		</>
	)
}

export async function getStaticProps({ params }) {
	let feed = await parse(
		`https://mellifluous-pika-cc6300.netlify.app/${params.album}/index.xml`
	)

	return {
		props: {
			tracks: feed.items.map(
				({ id, title, content, description, enclosures, published }) => ({
					id,
					title: `${title}`,
					published,
					content,
					description,
					audio: enclosures.map((enclosure) => ({
						src: enclosure.url,
						type: enclosure.type,
					}))[0],
				})
			),
		},
		revalidate: 10,
	}
}

export async function getStaticPaths() {
	return {
		paths: [
			{
				params: {
					album: 'perfect-game',
				},
			},
			{
				params: {
					album: 'more-like-it',
				},
			},
			{
				params: {
					album: 'plays-the-piano',
				},
			},
			{
				params: {
					album: 'fresh-blood',
				},
			},
		],
		fallback: 'blocking',
	}
}
