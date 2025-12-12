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
];
