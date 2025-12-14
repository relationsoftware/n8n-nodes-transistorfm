import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSubscribersBatchCreate = {
	resource: ['subscribers'],
	operation: ['batchCreate'],
};

export const subscribersBatchCreateDescription: INodeProperties[] = [
	{
		displayName: 'Create multiple subscribers (POST /v1/subscribers/batch).',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForSubscribersBatchCreate },
		default: '',
	},
	{
		displayName: 'Show ID or Slug',
		name: 'showId',
		type: 'string',
		displayOptions: { show: showOnlyForSubscribersBatchCreate },
		default: '',
		required: true,
		description: 'Show ID or slug (show_id)',
	},
	{
		displayName: 'Emails',
		name: 'emails',
		type: 'string',
		typeOptions: { rows: 6 },
		displayOptions: { show: showOnlyForSubscribersBatchCreate },
		default: '',
		required: true,
		description: 'One email per line (or comma-separated)',
	},
	{
		displayName: 'Skip Welcome Email',
		name: 'skipWelcomeEmail',
		type: 'boolean',
		displayOptions: { show: showOnlyForSubscribersBatchCreate },
		default: false,
		description: 'Whether to skip sending the instructional emails',
	},
];
