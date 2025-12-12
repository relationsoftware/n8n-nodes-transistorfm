import type { INodeProperties } from 'n8n-workflow';

const showOnlyForWebhooksDelete = {
	resource: ['webhooks'],
	operation: ['delete'],
};

export const webhooksDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Delete a webhook by ID (DELETE /v1/webhooks/:id).',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForWebhooksDelete },
		default: '',
	},
	{
		displayName: 'Webhook ID',
		name: 'webhookId',
		type: 'string',
		displayOptions: { show: showOnlyForWebhooksDelete },
		default: '',
		required: true,
		description: 'The webhook ID to delete',
	},
];
