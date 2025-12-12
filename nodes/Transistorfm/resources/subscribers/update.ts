import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSubscribersUpdate = {
	resource: ['subscribers'],
	operation: ['update'],
};

export const subscribersUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Update a subscriber (PATCH /v1/subscribers/:ID).',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForSubscribersUpdate },
		default: '',
	},
	{
		displayName: 'Subscriber ID',
		name: 'subscriberId',
		type: 'string',
		displayOptions: { show: showOnlyForSubscribersUpdate },
		default: '',
		required: true,
		description: 'Subscriber ID to update',
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		displayOptions: { show: showOnlyForSubscribersUpdate },
		default: '',
		required: true,
		description: "Subscriber's new email address",
	},
];
