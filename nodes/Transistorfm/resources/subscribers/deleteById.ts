import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSubscribersDeleteById = {
	resource: ['subscribers'],
	operation: ['deleteById'],
};

export const subscribersDeleteByIdDescription: INodeProperties[] = [
	{
		displayName: 'Delete a subscriber by ID (DELETE /v1/subscribers/:id).',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForSubscribersDeleteById },
		default: '',
	},
	{
		displayName: 'Subscriber ID',
		name: 'subscriberId',
		type: 'string',
		displayOptions: { show: showOnlyForSubscribersDeleteById },
		default: '',
		required: true,
		description: 'Subscriber ID to delete',
	},
];
