import Head from 'next/head'
import Image from 'next/future/image'
import Link from 'next/link'

import groq from 'groq'
import client from '../../client'

import { AboutSection } from '@/components/AboutSection'
import { Container } from '@/components/Container'
import { Sidebar } from '@/components/Sidebar'

function AlbumEntry({ album }) {
	return (
		<article aria-labelledby={`album-${album.id}-title`}>
			<div className="flex flex-col items-start">
				<Link className="w-full" href={`/albums/${album.slug.current}`}>
					<div class="relative mx-auto block w-full overflow-hidden rounded-sm bg-slate-200 shadow-md shadow-slate-200">
						<Image
							alt=""
							className="w-full"
							height="320"
							priority
							sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
							src={album.artwork}
							width="320"
						/>

						<div className="absolute inset-0 rounded-sm ring-1 ring-inset ring-black/10" />
					</div>

					<h2
						id={`album-${album._id}-title`}
						className="mt-2 text-lg font-bold text-slate-900"
					>
						{album.title}
					</h2>

					<div className="mt-4"></div>
				</Link>
			</div>
		</article>
	)
}

export default function Albums({ albums }) {
	return (
		<>
			<Head>
				<title>McCarthy Trenching - Albums</title>
				<meta
					name="description"
					content="Folk band from Omaha, with Dan McCarthy on guitar or piano and James Maakestad on upright bass."
				/>
			</Head>

			<Sidebar />

			<main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
				<div className="relative">
					<div className="pt-16 pb-12 sm:pb-4 lg:pt-12">
						<Container>
							<h1 className="text-2xl font-bold leading-7 text-slate-900">
								Albums
							</h1>
						</Container>

						<div className="sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
							<Container>
								<div className="grid grid-cols-2 gap-4 py-10 sm:grid-cols-3 sm:py-12">
									{albums.map((album) => (
										<AlbumEntry key={album._id} album={album} />
									))}
								</div>
							</Container>
						</div>
					</div>
				</div>
			</main>

			<footer className="border-t border-slate-200 bg-slate-50 py-10 pb-40 sm:py-16 sm:pb-32 lg:hidden">
				<div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
					<AboutSection />
				</div>
			</footer>
		</>
	)
}

export async function getStaticProps() {
	const albums = await client.fetch(groq`
		*[_type == "album" && releaseDate < now()] | order(releaseDate desc) {
			"artwork": artwork.asset->url,
			releaseDate,
			slug,
			title,
		}
    `)

	return {
		props: {
			albums,
		},
	}
}
