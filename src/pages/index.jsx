import Head from 'next/head'

import groq from 'groq'
import client from '../client'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { FormattedDate } from '@/components/FormattedDate'
import { PortableText } from '@portabletext/react'
import { Sidebar } from '@/components/Sidebar'

function PostEntry({ post }) {
	let date = new Date(post.publishTime)

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
		<article
			aria-labelledby={`post-${post._id}-title`}
			className="py-10 sm:py-12"
		>
			<Container>
				<div className="flex flex-col items-start">
					<h2
						id={`post-${post._id}-title`}
						className="mt-2 text-lg font-bold text-slate-900"
					>
						{post.title}
					</h2>

					<FormattedDate
						date={date}
						className="order-first font-mono text-sm leading-7 text-slate-500"
					/>

					<div className="mt-4">
						<PortableText value={post.body} components={components} />
					</div>
				</div>
			</Container>
		</article>
	)
}

export default function Home({ posts }) {
	return (
		<>
			<Head>
				<title>McCarthy Trenching - News</title>
				<meta
					name="description"
					content="Folk band from Omaha, with Dan McCarthy on guitar or piano, James Maakestad on upright bass and Kevin Donahue on drums."
				/>
			</Head>

			<Sidebar />

			<main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
				<div className="relative">
					<div className="pt-16 pb-12 sm:pb-4 lg:pt-12">
						<Container>
							<h1 className="text-2xl font-bold leading-7 text-slate-900">
								News
							</h1>
						</Container>

						<div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
							{posts.map((post) => (
								<PostEntry key={post._id} post={post} />
							))}
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</>
	)
}

export async function getStaticProps() {
	const posts = await client.fetch(groq`
		*[_type == "post" && publishTime < now()] | order(publishTime desc)
    `)

	return {
		props: {
			posts,
		},
	}
}
