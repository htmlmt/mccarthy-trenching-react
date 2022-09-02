export default {
	name: 'album',
	title: 'Album',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'artwork',
			title: 'Artwork',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'releaseDate',
			title: 'Release Date',
			type: 'date',
		},
		{
			name: 'about',
			title: 'About',
			type: 'blockContent',
		},
		{
			name: 'credits',
			title: 'Credits',
			type: 'blockContent',
		},
		{
			name: 'tracks',
			title: 'Tracks',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [
						{
							type: 'track',
						},
					],
				},
			],
		},
	],
}
