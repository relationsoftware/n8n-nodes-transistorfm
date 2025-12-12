import type { INodeProperties } from 'n8n-workflow';
import { subscribersGetAllDescription } from './getAll';
import { subscribersGetDescription } from './get';
import { subscribersCreateDescription } from './create';
import { subscribersBatchCreateDescription } from './batchCreate';
import { subscribersUpdateDescription } from './update';
import { subscribersDeleteByEmailDescription } from './deleteByEmail';
import { subscribersDeleteByIdDescription } from './deleteById';

const showOnlyForSubscribers = {
	resource: ['subscribers'],
};

export const subscribersDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showOnlyForSubscribers },
		options: [
			{
				name: 'Get All',
				value: 'getAll',
				action: 'List subscribers',
				description: 'Get a list of subscribers for a show',
				routing: {
					request: {
						method: 'GET',
						url: '/subscribers',
						qs: {
							show_id: '={{$parameter.showId}}',
							query: '={{$parameter.query || undefined}}',
							'pagination[page]': '={{$parameter.page}}',
							'pagination[per]': '={{$parameter.perPage}}',
						},
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a subscriber',
				description: 'Get a single subscriber by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/subscribers/{{$parameter.subscriberId}}',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a subscriber',
				description: 'Create a single subscriber',
				routing: {
					request: {
						method: 'POST',
						url: '/subscribers',
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/vnd.api+json',
						},
						body: '={{(() => ({ show_id: $parameter.showId, email: $parameter.email, skip_welcome_email: $parameter.skipWelcomeEmail }))()}}',
					},
				},
			},
			{
				name: 'Create Many (Batch)',
				value: 'batchCreate',
				action: 'Create subscribers in batch',
				description: 'Create multiple subscribers at once',
				routing: {
					request: {
						method: 'POST',
						url: '/subscribers/batch',
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/vnd.api+json',
						},
						body: '={{(() => { const raw = ($parameter.emails || \"\").trim(); const emails = raw.split(/\\s*[\\n,]+\\s*/).filter(Boolean); return { show_id: $parameter.showId, emails, skip_welcome_email: $parameter.skipWelcomeEmail }; })()}}',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a subscriber',
				description: 'Update a subscriber email by ID',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/subscribers/{{$parameter.subscriberId}}',
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/vnd.api+json',
						},
						// Docs describe subscriber[email]=...; sending JSON as nested object is supported by Transistor (accepts JSON bodies).
						body: '={{(() => ({ subscriber: { email: $parameter.email } }))()}}',
					},
				},
			},
			{
				name: 'Delete by Email',
				value: 'deleteByEmail',
				action: 'Delete a subscriber by email',
				description: 'Delete a subscriber by show_id + email',
				routing: {
					request: {
						method: 'DELETE',
						url: '/subscribers',
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/vnd.api+json',
						},
						body: '={{(() => ({ show_id: $parameter.showId, email: $parameter.email }))()}}',
					},
				},
			},
			{
				name: 'Delete by ID',
				value: 'deleteById',
				action: 'Delete a subscriber by ID',
				description: 'Delete a subscriber by ID',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/subscribers/{{$parameter.subscriberId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...subscribersGetAllDescription,
	...subscribersGetDescription,
	...subscribersCreateDescription,
	...subscribersBatchCreateDescription,
	...subscribersUpdateDescription,
	...subscribersDeleteByEmailDescription,
	...subscribersDeleteByIdDescription,
];
