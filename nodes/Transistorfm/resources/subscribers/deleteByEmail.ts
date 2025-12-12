import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSubscribersDeleteByEmail = {
	resource: ['subscribers'],
	operation: ['deleteByEmail'],
};

export const subscribersDeleteByEmailDescription: INodeProperties[] = [
	{
		displayName: 'Delete a subscriber by email (DELETE /v1/subscribers).',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForSubscribersDeleteByEmail },
		default: '',
	},
	{
		displayName: 'Show ID or Slug',
		name: 'showId',
		type: 'string',
		displayOptions: { show: showOnlyForSubscribersDeleteByEmail },
		default: '',
		required: true,
		description: 'Show ID or slug (show_id)',
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		displayOptions: { show: showOnlyForSubscribersDeleteByEmail },
		default: '',
		required: true,
		description: 'Subscriber email address to delete',
	},
];
