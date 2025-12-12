import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSubscribersGetAll = {
	resource: ['subscribers'],
	operation: ['getAll'],
};

export const subscribersGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Retrieve a list of subscribers for a private podcast (GET /v1/subscribers).',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForSubscribersGetAll },
		default: '',
	},
	{
		displayName: 'Show ID or Slug',
		name: 'showId',
		type: 'string',
		displayOptions: { show: showOnlyForSubscribersGetAll },
		default: '',
		required: true,
		description: 'Show ID or slug (show_id)',
	},
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		displayOptions: { show: showOnlyForSubscribersGetAll },
		default: '',
		description: 'Optional search query',
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		displayOptions: { show: showOnlyForSubscribersGetAll },
		default: 1,
		typeOptions: { minValue: 1 },
		description: 'Pagination page number',
	},
	{
		displayName: 'Per Page',
		name: 'perPage',
		type: 'number',
		displayOptions: { show: showOnlyForSubscribersGetAll },
		default: 10,
		typeOptions: { minValue: 1, maxValue: 100 },
		description: 'Resources per page',
	},
];
