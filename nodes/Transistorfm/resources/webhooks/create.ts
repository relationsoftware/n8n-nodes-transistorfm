import type { INodeProperties } from 'n8n-workflow';

const showOnlyForWebhooksCreate = {
	resource: ['webhooks'],
	operation: ['create'],
};

export const webhooksCreateDescription: INodeProperties[] = [
	{
		displayName: 'Create a webhook (POST /v1/webhooks).',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForWebhooksCreate },
		default: '',
	},
	{
		displayName: 'Target URL',
		name: 'targetUrl',
		type: 'string',
		displayOptions: { show: showOnlyForWebhooksCreate },
		default: '',
		required: true,
		description: 'The URL that will receive webhook POST requests',
	},
];
