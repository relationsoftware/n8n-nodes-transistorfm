import type { INodeProperties } from 'n8n-workflow';

const showOnlyForEpisodesGet = {
	resource: ['episodes'],
	operation: ['get'],
};

export const episodesGetDescription: INodeProperties[] = [
	{
		displayName: 'Retrieve a single episode by ID (GET /v1/episodes/:id).',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForEpisodesGet },
		default: '',
	},
	{
		displayName: 'Episode ID',
		name: 'episodeId',
		type: 'string',
		displayOptions: { show: showOnlyForEpisodesGet },
		default: '',
		required: true,
		description: 'The episode ID to retrieve',
	},
];
