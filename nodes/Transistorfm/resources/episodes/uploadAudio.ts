import type { INodeProperties } from 'n8n-workflow';

const showOnlyForEpisodesUploadAudio = {
	resource: ['episodes'],
	operation: ['uploadAudio'],
};

export const episodesUploadAudioDescription: INodeProperties[] = [
	{
		displayName:
			'Uploads the audio file to the pre-signed upload_url (HTTP PUT). Use upload_url and content_type from “Authorize Upload”.',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: showOnlyForEpisodesUploadAudio },
		default: '',
	},
	{
		displayName: 'Upload URL',
		name: 'uploadUrl',
		type: 'string',
		displayOptions: { show: showOnlyForEpisodesUploadAudio },
		default: '',
		required: true,
		description: 'The upload_url returned by Authorize Upload',
	},
	{
		displayName: 'Content Type',
		name: 'contentType',
		type: 'string',
		displayOptions: { show: showOnlyForEpisodesUploadAudio },
		default: 'audio/mpeg',
		required: true,
		description: 'The content_type returned by Authorize Upload (e.g. audio/mpeg)',
	},
	{
		displayName: 'Binary Property',
		name: 'binaryPropertyName',
		type: 'string',
		displayOptions: { show: showOnlyForEpisodesUploadAudio },
		default: 'data',
		required: true,
		description: 'Name of the binary property that contains the audio file (e.g. data)',
	},
];
