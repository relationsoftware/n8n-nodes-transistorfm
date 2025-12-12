import type { INodeProperties } from 'n8n-workflow';
import { analyticsShowDescription } from './show';
import { analyticsEpisodesDescription } from './episodes';
import { analyticsEpisodeDescription } from './episode';

const showOnlyForAnalytics = {
	resource: ['analytics'],
};

export const analyticsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showOnlyForAnalytics },
		options: [
			{
				name: 'Get Show Analytics',
				value: 'show',
				action: 'Get show analytics',
				description: 'Downloads per day for a show',
				routing: {
					request: {
						method: 'GET',
						url: '=/analytics/{{$parameter.showId}}',
						qs: {
							start_date: '={{$parameter.startDate || undefined}}',
							end_date: '={{$parameter.endDate || undefined}}',
						},
					},
				},
			},
			{
				name: 'Get All Episode Analytics',
				value: 'episodes',
				action: 'Get all episode analytics',
				description: 'Downloads per day for all episodes of a show',
				routing: {
					request: {
						method: 'GET',
						url: '=/analytics/{{$parameter.showId}}/episodes',
						qs: {
							start_date: '={{$parameter.startDate || undefined}}',
							end_date: '={{$parameter.endDate || undefined}}',
						},
					},
				},
			},
			{
				name: 'Get Single Episode Analytics',
				value: 'episode',
				action: 'Get single episode analytics',
				description: 'Downloads per day for a single episode',
				routing: {
					request: {
						method: 'GET',
						url: '=/analytics/episodes/{{$parameter.episodeId}}',
						qs: {
							start_date: '={{$parameter.startDate || undefined}}',
							end_date: '={{$parameter.endDate || undefined}}',
						},
					},
				},
			},
		],
		default: 'show',
	},
	...analyticsShowDescription,
	...analyticsEpisodesDescription,
	...analyticsEpisodeDescription,
];
