import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	IconFile,
} from 'n8n-workflow';

export class TransistorfmApi implements ICredentialType {
	name = 'transistorfmApi';
	displayName = 'Transistor.fm API';
	icon = 'file:../nodes/Transistorfm/transistor-fm.svg'as IconFile;

	// Link to your community node's README
	documentationUrl = 'https://github.com/org/-transistorfm?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'x-api-key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.transistor.fm/v1',
			url: '/',
		},
	};
}
