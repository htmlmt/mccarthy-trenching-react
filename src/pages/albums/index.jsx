import Head from 'next/head'
import Image from 'next/future/image'
import Link from 'next/link'

import groq from 'groq'
import client from '../../client'

import albumsImage from '@/images/mccarthy-trenching-albums.jpeg'
import { Container } from '@/components/Container'

function AlbumEntry({ album }) {
	return (
		<article
			aria-labelledby={`album-${album.id}-title`}
			className="py-10 sm:py-12"
		>
			<Container>
				<div className="flex flex-col items-start">
					<Link href={`/albums/${album.slug.current}`}>
						<h2
							id={`album-${album._id}-title`}
							className="mt-2 text-lg font-bold text-slate-900"
						>
							{album.title}
						</h2>

						<div className="mt-4"></div>
					</Link>
				</div>
			</Container>
		</article>
	)
}

export default function Albums({ albums }) {
	return (
		<>
			<Head>
				<title>McCarthy Trenching - Albums</title>
				<meta name="description" content="Description" />
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
							src={albumsImage}
							width="320"
						/>

						<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl" />
					</div>
				</div>
			</header>

			<main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
				<div className="relative">
					<div className="pt-16 pb-12 sm:pb-4 lg:pt-12">
						<Container>
							<h1 className="text-2xl font-bold leading-7 text-slate-900">
								Albums
							</h1>
						</Container>

						<div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
							{albums.map((album) => (
								<AlbumEntry key={album._id} album={album} />
							))}
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export async function getStaticProps() {
	const albums = await client.fetch(groq`
		*[_type == "album" && releaseDate < now()] | order(releaseDate desc)
    `)

	return {
		props: {
			albums,
		},
	}
}
