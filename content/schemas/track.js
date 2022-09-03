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
			name: 'videoEmbed',
			title: 'Video Embed',
			type: 'string',
		},
		{
			name: 'videoAspectWidth',
			title: 'Video Aspect Width',
			type: 'string',
		},
		{
			name: 'videoAspectHeight',
			title: 'Video Aspect Height',
			type: 'string',
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
