import Head from 'next/head'
import Image from 'next/future/image'

import groq from 'groq'
import client from '../../client'

import showsImage from '@/images/mccarthy-trenching-shows.jpeg'
import { Container } from '@/components/Container'
import { FormattedDate } from '@/components/FormattedDate'
import { PortableText } from '@portabletext/react'

function ShowEntry({ show }) {
	let date = new Date(show.startTime)

	return (
		<article
			aria-labelledby={`show-${show.id}-title`}
			className="py-10 sm:py-12"
		>
			<Container>
				<div className="flex flex-col items-start">
					<h2
						id={`show-${show.id}-title`}
						className="mt-2 text-lg font-bold text-slate-900"
					>
						{show.title}
					</h2>

					<FormattedDate
						date={date}
						className="order-first font-mono text-sm leading-7 text-slate-500"
					/>

					<p className="mt-1 text-base leading-7 text-slate-700">
						{show.venue}
					</p>
				</div>
			</Container>
		</article>
	)
}

export default function Shows({ shows }) {
	return (
		<>
			<Head>
				<title>Shows</title>
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
							src={showsImage}
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
								Shows
							</h1>
						</Container>
						<div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
							{shows.map((show) => (
								<ShowEntry key={show._id} show={show} />
							))}
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export async function getStaticProps() {
	const shows = await client.fetch(groq`
		*[_type == "show" && startTime > now()] | order(startTime desc)
    `)

	return {
		props: {
			shows,
		},
	}
}
