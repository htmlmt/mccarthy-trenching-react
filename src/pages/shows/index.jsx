import Head from 'next/head'

import groq from 'groq'
import client from '../../client'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { FormattedTime } from '@/components/FormattedTime'
import { Sidebar } from '@/components/Sidebar'

import { CalendarIcon, MapPinIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

function ShowEntry({ show }) {
	let time = new Date(show.startTime)

	return (
		<Container>
			<li key={show._id} className="relative flex space-x-6 py-6 xl:static">
				<div className="flex-auto">
					{show.link && (
						<Link
							className="text-base font-bold leading-6 text-blue-500 hover:text-blue-700 active:text-blue-900"
							href={show.link}
						>
							<h3 className="pr-10 font-semibold xl:pr-0">{show.title}</h3>
						</Link>
					)}

					{!show.link && (
						<h3 className="pr-10 text-base font-semibold text-gray-900 xl:pr-0">
							{show.title}
						</h3>
					)}

					<dl className="text-md mt-2 flex flex-col text-gray-500 xl:flex-row">
						<div className="flex items-start space-x-3">
							<dt className="mt-0.5">
								<span className="sr-only">Start time</span>

								<CalendarIcon
									aria-hidden="true"
									className="h-5 w-5 text-gray-400"
								/>
							</dt>

							<dd>
								<FormattedTime time={time} />
							</dd>
						</div>

						<div className="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
							<dt className="mt-0.5">
								<span className="sr-only">Venue</span>

								<MapPinIcon
									aria-hidden="true"
									className="h-5 w-5 text-gray-400"
								/>
							</dt>

							<dd>{show.venue}</dd>
						</div>
					</dl>
				</div>
			</li>
		</Container>
	)
}

export default function Shows({ pastShows, upcomingShows }) {
	return (
		<>
			<Head>
				<title>McCarthy Trenching - Shows</title>
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
								Shows
							</h1>
						</Container>

						{upcomingShows.length > 0 && (
							<div className="pt-10 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100 lg:pt-12">
								<Container>
									<h2 className="text-lg font-bold text-slate-900">Upcoming</h2>
								</Container>

								<div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8">
									{upcomingShows.map((show) => (
										<ShowEntry key={show._id} show={show} />
									))}
								</div>
							</div>
						)}

						{pastShows.length > 0 && (
							<div className="pt-10 lg:pt-12">
								<Container>
									<h2 className="text-lg font-bold text-slate-900">Past</h2>
								</Container>

								<ol className="divide-y divide-slate-100 sm:mt-4 lg:mt-8">
									{pastShows.map((show) => (
										<ShowEntry key={show._id} show={show} />
									))}
								</ol>
							</div>
						)}
					</div>
				</div>
			</main>

			<Footer />
		</>
	)
}

export async function getStaticProps() {
	const pastShows = await client.fetch(groq`
		*[_type == "show" && startTime < now()] | order(startTime desc)
    `)

	const upcomingShows = await client.fetch(groq`
		*[_type == "show" && startTime > now()] | order(startTime desc)
    `)

	return {
		props: {
			pastShows,
			upcomingShows,
		},
	}
}
