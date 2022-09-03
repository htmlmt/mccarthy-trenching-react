export default {
	name: 'show',
	title: 'Show',
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
			name: 'startTime',
			title: 'Start Time',
			type: 'datetime',
		},
		{
			name: 'venue',
			title: 'Venue',
			type: 'string',
		},
		{
			name: 'link',
			title: 'Link',
			type: 'string',
		},
	],
}
