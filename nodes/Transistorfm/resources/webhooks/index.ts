import type { INodeProperties } from 'n8n-workflow';
import { webhooksGetAllDescription } from './getAll';
import { webhooksCreateDescription } from './create';
import { webhooksDeleteDescription } from './delete';

const showOnlyForWebhooks = {
	resource: ['webhooks'],
};

export const webhooksDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showOnlyForWebhooks },
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get webhooks',
				description: 'Get many webhooks',
				routing: {
					request: {
						method: 'GET',
						url: '/webhooks',
						qs: {
							show_id: '={{$parameter.showId}}',
						},
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a webhook',
				description: 'Create a webhook',
				routing: {
					request: {
						method: 'POST',
						url: '/webhooks',
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/vnd.api+json',
						},
						body: '={{(() => ({ webhook: { event_name: $parameter.eventName, show_id: $parameter.showId, url: $parameter.url } }))()}}',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a webhook',
				description: 'Delete a webhook by ID',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/webhooks/{{$parameter.webhookId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...webhooksGetAllDescription,
	...webhooksCreateDescription,
	...webhooksDeleteDescription,
];
