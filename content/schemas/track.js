export default {
	name: 'track',
	type: 'document',
	title: 'Track',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
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
			name: 'lyrics',
			title: 'Lyrics',
			type: 'blockContent',
		},
		{
			name: 'file',
			title: 'File',
			type: 'file',
		},
		{
			name: 'album',
			type: 'reference',
			to: [
				{
					type: 'album',
				},
			],
		},
	],
}
