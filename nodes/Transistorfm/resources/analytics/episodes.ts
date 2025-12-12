import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAnalyticsEpisodes = {
	resource: ['analytics'],
	operation: ['episodes'],
};

export const analyticsEpisodesDescription: INodeProperties[] = [
	{
		displayName: 'Get all episode analytics for a show (GET /v1/analytics/:id/episodes). Dates use dd-mm-yyyy.',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForAnalyticsEpisodes },
		default: '',
	},
	{
		displayName: 'Show ID or Slug',
		name: 'showId',
		type: 'string',
		displayOptions: { show: showOnlyForAnalyticsEpisodes },
		default: '',
		required: true,
		description: 'Show ID or slug',
	},
	{
		displayName: 'Start Date',
		name: 'startDate',
		type: 'string',
		displayOptions: { show: showOnlyForAnalyticsEpisodes },
		default: '',
		description: 'Optional (dd-mm-yyyy). Required if end_date is set.',
	},
	{
		displayName: 'End Date',
		name: 'endDate',
		type: 'string',
		displayOptions: { show: showOnlyForAnalyticsEpisodes },
		default: '',
		description: 'Optional (dd-mm-yyyy). Required if start_date is set.',
	},
];
