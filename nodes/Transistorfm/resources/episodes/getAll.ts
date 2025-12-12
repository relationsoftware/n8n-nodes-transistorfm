import type { INodeProperties } from 'n8n-workflow';

const showOnlyForEpisodesGetAll = {
	resource: ['episodes'],
	operation: ['getAll'],
};

export const episodesGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Retrieve a paginated list of episodes (GET /v1/episodes).',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForEpisodesGetAll },
		default: '',
	},
	{
		displayName: 'Show ID or Slug',
		name: 'showId',
		type: 'string',
		displayOptions: { show: showOnlyForEpisodesGetAll },
		default: '',
		required: true,
		description: 'Show ID or slug (show_id) to list episodes for',
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		displayOptions: { show: showOnlyForEpisodesGetAll },
		default: 1,
		description: 'Pagination page number',
		typeOptions: { minValue: 1 },
	},
	{
		displayName: 'Per Page',
		name: 'perPage',
		type: 'number',
		displayOptions: { show: showOnlyForEpisodesGetAll },
		default: 10,
		description: 'Resources per page',
		typeOptions: { minValue: 1, maxValue: 100 },
	},
];
