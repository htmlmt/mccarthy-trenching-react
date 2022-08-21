import { useMemo } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { parse } from 'rss-to-json'

import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'
import { PlayButton } from '@/components/player/PlayButton'

export default function Track({ track }) {
	let audioPlayerData = useMemo(
		() => ({
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
		<>
			<Head>
				<title>{`${track.title} - Plays the Piano`}</title>
				<meta name="description" content={track.description} />
			</Head>

			<article className="py-16">
				<Container>
					<Link
						href="/albums/plays-the-piano"
						className="mb-12 inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
					>
						Back to &quot;Plays the Piano&quot;
					</Link>

					<header className="flex flex-col">
						<div className="flex items-center gap-6">
							<PlayButton player={player} size="large" />
							<div className="flex flex-col">
								<h1 className="text-4xl font-bold text-slate-900">
									{track.title}
								</h1>
							</div>
						</div>
					</header>
					<hr className="my-12 border-gray-200" />
					<div
						className="prose prose-slate mt-14 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2:nth-of-type(3n)]:before:bg-violet-200"
						dangerouslySetInnerHTML={{ __html: track.content }}
					/>
				</Container>
			</article>
		</>
	)
}

export async function getStaticProps({ params }) {
	let feed = await parse(
		'https://mellifluous-pika-cc6300.netlify.app/plays-the-piano/index.xml'
	)
	let track = feed.items
		.map(({ id, title, description, content, enclosures, published }) => ({
			id: id.toString(),
			title: `${title}`,
			description,
			content,
			published,
			audio: enclosures.map((enclosure) => ({
				src: enclosure.url,
				type: enclosure.type,
			}))[0],
		}))
		.find(({ description }) => description === params.track)

	if (!track) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			track,
		},
		revalidate: 10,
	}
}

export async function getStaticPaths() {
	let feed = await parse(
		'https://mellifluous-pika-cc6300.netlify.app/plays-the-piano/index.xml'
	)

	return {
		paths: feed.items.map(({ description }) => ({
			params: {
				track: description,
			},
		})),
		fallback: 'blocking',
	}
}
