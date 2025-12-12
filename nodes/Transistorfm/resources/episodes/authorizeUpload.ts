import type { INodeProperties } from 'n8n-workflow';

const showOnlyForEpisodesAuthorizeUpload = {
	resource: ['episodes'],
	operation: ['authorizeUpload'],
};

export const episodesAuthorizeUploadDescription: INodeProperties[] = [
	{
		displayName:
			'Authorize a URL for uploading a local audio file (GET /v1/episodes/authorize_upload).',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForEpisodesAuthorizeUpload },
		default: '',
	},
	{
		displayName: 'Filename',
		name: 'filename',
		type: 'string',
		displayOptions: { show: showOnlyForEpisodesAuthorizeUpload },
		default: '',
		required: true,
		description: 'Filename of the audio file you wish to upload (e.g. Episode1.mp3)',
	},
];
