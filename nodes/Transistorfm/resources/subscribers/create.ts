import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSubscribersCreate = {
	resource: ['subscribers'],
	operation: ['create'],
};

export const subscribersCreateDescription: INodeProperties[] = [
	{
		displayName: 'Create a single subscriber.',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForSubscribersCreate },
		default: '',
	},
	{
		displayName: 'Show ID or Slug',
		name: 'showId',
		type: 'string',
		displayOptions: { show: showOnlyForSubscribersCreate },
		default: '',
		required: true,
		description: 'Show ID or slug (show_id)',
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		displayOptions: { show: showOnlyForSubscribersCreate },
		default: '',
		required: true,
		description: 'Subscriber email address',
	},
	{
		displayName: 'Skip Welcome Email',
		name: 'skipWelcomeEmail',
		type: 'boolean',
		displayOptions: { show: showOnlyForSubscribersCreate },
		default: false,
		description: 'Whether to skip sending the instructional email',
	},
];
