import type { INodeProperties } from 'n8n-workflow';

const showOnlyForEpisodesPublish = {
	resource: ['episodes'],
	operation: ['publish'],
};

export const episodesPublishDescription: INodeProperties[] = [
	{
		displayName:
			'Publish, schedule, or revert an episode to draft (PATCH /v1/episodes/:ID/publish).',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForEpisodesPublish },
		default: '',
	},
	{
		displayName: 'Episode ID',
		name: 'episodeId',
		type: 'string',
		displayOptions: { show: showOnlyForEpisodesPublish },
		default: '',
		required: true,
		description: 'The episode ID to publish/schedule/unpublish',
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		displayOptions: { show: showOnlyForEpisodesPublish },
		default: 'published',
		options: [
			{ name: 'Published', value: 'published' },
			{ name: 'Scheduled', value: 'scheduled' },
			{ name: 'Draft', value: 'draft' },
		],
		description: 'Publishing status',
	},
	{
		displayName: 'Published At',
		name: 'publishedAt',
		type: 'string',
		displayOptions: { show: showOnlyForEpisodesPublish },
		default: '',
		description:
			'Optional date/time in your podcast time zone (only needed for scheduled/past publishing). Leave empty for “publish now”.',
	},
];
