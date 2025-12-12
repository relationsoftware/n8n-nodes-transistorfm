import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAnalyticsShow = {
	resource: ['analytics'],
	operation: ['show'],
};

export const analyticsShowDescription: INodeProperties[] = [
	{
		displayName: 'Get show analytics (GET /v1/analytics/:id). Dates use dd-mm-yyyy.',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForAnalyticsShow },
		default: '',
	},
	{
		displayName: 'Show ID or Slug',
		name: 'showId',
		type: 'string',
		displayOptions: { show: showOnlyForAnalyticsShow },
		default: '',
		required: true,
		description: 'Show ID or slug',
	},
	{
		displayName: 'Start Date',
		name: 'startDate',
		type: 'string',
		displayOptions: { show: showOnlyForAnalyticsShow },
		default: '',
		description: 'Optional (dd-mm-yyyy). Required if end_date is set.',
	},
	{
		displayName: 'End Date',
		name: 'endDate',
		type: 'string',
		displayOptions: { show: showOnlyForAnalyticsShow },
		default: '',
		description: 'Optional (dd-mm-yyyy). Required if start_date is set.',
	},
];
