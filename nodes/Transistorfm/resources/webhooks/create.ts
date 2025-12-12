import type { INodeProperties } from 'n8n-workflow';

const showOnlyForWebhooksCreate = {
	resource: ['webhooks'],
	operation: ['create'],
};

export const webhooksCreateDescription: INodeProperties[] = [
	{
		displayName: 'Subscribe to a webhook (POST /v1/webhooks).',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForWebhooksCreate },
		default: '',
	},
	{
		displayName: 'Event Name',
		name: 'eventName',
		type: 'options',
		displayOptions: { show: showOnlyForWebhooksCreate },
		default: 'episode_created',
		required: true,
		options: [
			{
				name: 'episode_created',
				value: 'episode_created',
			},
		],
		description: 'Webhook event name',
	},
	{
		displayName: 'Show ID or Slug',
		name: 'showId',
		type: 'string',
		displayOptions: { show: showOnlyForWebhooksCreate },
		default: '',
		required: true,
		description: 'Show ID or slug (show_id)',
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		displayOptions: { show: showOnlyForWebhooksCreate },
		default: '',
		required: true,
		description: 'Target URL for webhook delivery',
	},
];