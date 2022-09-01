import { createClient } from 'next-sanity'

export default createClient({
	projectId: 'm7r206cj',
	dataset: 'production',
	apiVersion: '2022-08-31',
	useCdn: false,
})
