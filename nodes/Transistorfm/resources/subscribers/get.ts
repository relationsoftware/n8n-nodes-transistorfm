import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSubscribersGet = {
	resource: ['subscribers'],
	operation: ['get'],
};

export const subscribersGetDescription: INodeProperties[] = [
	{
		displayName: 'Retrieve a single subscriber by ID (GET /v1/subscribers/:id).',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForSubscribersGet },
		default: '',
	},
	{
		displayName: 'Subscriber ID',
		name: 'subscriberId',
		type: 'string',
		displayOptions: { show: showOnlyForSubscribersGet },
		default: '',
		required: true,
		description: 'Subscriber ID to retrieve',
	},
];
