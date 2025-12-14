import type { INodeProperties } from 'n8n-workflow';

const showOnlyForShowsUpdate = {
	resource: ['shows'],
	operation: ['update'],
};

export const showsUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Update a show by ID. Only the fields you set below will be sent.',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForShowsUpdate },
		default: '',
	},
	{
		displayName: 'Show ID',
		name: 'showId',
		type: 'string',
		displayOptions: { show: showOnlyForShowsUpdate },
		default: '',
		required: true,
		description: 'The show ID (or slug) to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		displayOptions: { show: showOnlyForShowsUpdate },
		default: {},
		placeholder: 'Add field',
		options: [
			{
				displayName: 'Author',
				name: 'author',
				type: 'string',
				default: '',
				description: 'Podcast author',
			},
			{
				displayName: 'Category',
				name: 'category',
				type: 'string',
				default: '',
				description: 'Primary category',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Explicit',
				name: 'explicit',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				type: 'string',
				default: '',
				description: 'Comma-separated list of keywords',
			},
			{
				displayName: 'Language',
				name: 'language',
				type: 'string',
				default: '',
				description: 'Podcast spoken language (e.g. en, de, fr)',
			},
			{
				displayName: 'Secondary Category',
				name: 'secondaryCategory',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Show Type',
				name: 'showType',
				type: 'options',
				default: 'episodic',
				options: [
					{ name: 'Episodic', value: 'episodic' },
					{ name: 'Serial', value: 'serial' },
				],
				description: 'Publishing type',
			},
			{
				displayName: 'Time Zone',
				name: 'timeZone',
				type: 'string',
				default: '',
				description: 'Publishing time zone (as shown in Transistor docs)',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Website',
				name: 'website',
				type: 'string',
				default: '',
			},
		],
	},
];
