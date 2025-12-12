import type { INodeProperties } from 'n8n-workflow';

const showOnlyForEpisodesUpdate = {
	resource: ['episodes'],
	operation: ['update'],
};

export const episodesUpdateDescription: INodeProperties[] = [
	{
		displayName:
			'Update an episode (PATCH /v1/episodes/:ID). Only the fields you set will be sent.',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForEpisodesUpdate },
		default: '',
	},
	{
		displayName: 'Episode ID',
		name: 'episodeId',
		type: 'string',
		displayOptions: { show: showOnlyForEpisodesUpdate },
		default: '',
		required: true,
		description: 'The episode ID to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		displayOptions: { show: showOnlyForEpisodesUpdate },
		default: {},
		placeholder: 'Add field',
		options: [
			{ displayName: 'Title', name: 'title', type: 'string', default: '' },
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Longer description (may contain HTML)',
			},
			{
				displayName: 'Audio URL',
				name: 'audioUrl',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Transcript Text',
				name: 'transcriptText',
				type: 'string',
				default: '',
			},
			{ displayName: 'Author', name: 'author', type: 'string', default: '' },
			{ displayName: 'Explicit', name: 'explicit', type: 'boolean', default: false },
			{ displayName: 'Image URL', name: 'imageUrl', type: 'string', default: '' },
			{
				displayName: 'Keywords',
				name: 'keywords',
				type: 'string',
				default: '',
				description: 'Comma-separated keywords',
			},
			{
				displayName: 'Number',
				name: 'number',
				type: 'number',
				default: 0,
				typeOptions: { minValue: 0 },
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: 'full',
				options: [
					{ name: 'Full', value: 'full' },
					{ name: 'Trailer', value: 'trailer' },
					{ name: 'Bonus', value: 'bonus' },
				],
			},
			{ displayName: 'Alternate URL', name: 'alternateUrl', type: 'string', default: '' },
			{ displayName: 'Video URL', name: 'videoUrl', type: 'string', default: '' },
			{
				displayName: 'Email Notifications Override',
				name: 'emailNotifications',
				type: 'boolean',
				default: false,
			},
		],
	},
];
