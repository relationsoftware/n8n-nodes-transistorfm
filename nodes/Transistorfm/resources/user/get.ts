import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUserGet = {
	operation: ['get'],
	resource: ['user'],
};

export const userGetDescription: INodeProperties[] = [
	{
		displayName: 'Notice',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForUserGet },
		default:
			'This operation returns the authenticated user (GET /v1). No parameters are required.',
	},
];