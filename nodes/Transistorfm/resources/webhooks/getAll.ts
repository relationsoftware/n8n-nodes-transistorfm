import type { INodeProperties } from 'n8n-workflow';

const showOnlyForWebhooksGetAll = {
	resource: ['webhooks'],
	operation: ['getAll'],
};

export const webhooksGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Retrieve a list of webhooks (GET /v1/webhooks).',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForWebhooksGetAll },
		default: '',
	},
	{
		displayName: 'Show ID or Slug',
		name: 'showId',
		type: 'string',
		displayOptions: { show: showOnlyForWebhooksGetAll },
		default: '',
		required: true,
		description: 'Show ID or slug (show_id) to list episodes for',
	},
];
