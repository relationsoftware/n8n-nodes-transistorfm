import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { userDescription } from './resources/user';
import { showsDescription } from './resources/shows';
import { episodesDescription } from './resources/episodes';

export class Transistorfm implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Transistor.fm',
		name: 'transistorfm',
		icon: { light: 'file:transistor-fm.svg', dark: 'file:transistor-fm.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Transistor.fm API',
		defaults: {
			name: 'Transistorfm',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'transistorfmApi', required: true }],
		requestDefaults: {
			baseURL: 'https://api.transistor.fm/v1',
			headers: {
				Accept: 'application/vnd.api+json',
				'Content-Type': 'application/vnd.api+json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'User',
						value: 'user',
					},
					{
						name: 'Shows',
						value: 'shows',
					},
					{
						name: 'Episodes',
						value: 'episodes',
					},
				],
				default: 'user',
			},
			...userDescription,
			...showsDescription,
			...episodesDescription,
		],
	};
}
