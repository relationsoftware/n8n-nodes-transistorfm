import type { INodeProperties } from 'n8n-workflow';
import { userGetDescription } from './get';

const showOnlyForUsers = {
	resource: ['user'],
};

export const userDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForUsers,
		},
		options: [
			{
				name: 'Get Me',
				value: 'getMe',
				action: 'Get authenticated user',
				description: 'Get the authenticated user (account) for the provided API key',
				routing: {
					request: {
						method: 'GET',
						// baseURL is https://api.transistor.fm/v1, so "/" maps to GET /v1
						url: '/',
					},
				},
			},
		],
		default: 'getMe',
	},
	...userGetDescription,
];
