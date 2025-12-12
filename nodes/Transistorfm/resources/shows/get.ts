import type { INodeProperties } from 'n8n-workflow';

const showOnlyForShowsGet = {
	resource: ['shows'],
	operation: ['get'],
};

export const showsGetDescription: INodeProperties[] = [
	{
		displayName: 'Get a single show by its ID.',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForShowsGet },
		default: '',
	},
	{
		displayName: 'Show ID',
		name: 'showId',
		type: 'string',
		displayOptions: { show: showOnlyForShowsGet },
		default: '',
		required: true,
		description: 'The show ID to retrieve',
	},
];
