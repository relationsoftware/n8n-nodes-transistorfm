import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAnalyticsEpisode = {
	resource: ['analytics'],
	operation: ['episode'],
};

export const analyticsEpisodeDescription: INodeProperties[] = [
	{
		displayName:
			'Get single episode analytics (GET /v1/analytics/episodes/:ID). Dates use dd-mm-yyyy.',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForAnalyticsEpisode },
		default: '',
	},
	{
		displayName: 'Episode ID or Slug',
		name: 'episodeId',
		type: 'string',
		displayOptions: { show: showOnlyForAnalyticsEpisode },
		default: '',
		required: true,
	},
	{
		displayName: 'Start Date',
		name: 'startDate',
		type: 'string',
		displayOptions: { show: showOnlyForAnalyticsEpisode },
		default: '',
		description: 'Optional (dd-mm-yyyy). Required if end_date is set.',
	},
	{
		displayName: 'End Date',
		name: 'endDate',
		type: 'string',
		displayOptions: { show: showOnlyForAnalyticsEpisode },
		default: '',
		description: 'Optional (dd-mm-yyyy). Required if start_date is set.',
	},
];
