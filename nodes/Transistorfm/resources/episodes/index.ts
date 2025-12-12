import type { INodeProperties } from 'n8n-workflow';
import { episodesGetAllDescription } from './getAll';
import { episodesGetDescription } from './get';
import { episodesAuthorizeUploadDescription } from './authorizeUpload';
import { episodesCreateDescription } from './create';
import { episodesUpdateDescription } from './update';
import { episodesPublishDescription } from './publish';
import { episodesUploadAudioDescription } from './uploadAudio';

const showOnlyForEpisodes = {
	resource: ['episodes'],
};

export const episodesDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showOnlyForEpisodes },
		options: [
			{
				name: 'Get All',
				value: 'getAll',
				action: 'Get episodes',
				description: 'Get episodes for a show',
				routing: {
					request: {
						method: 'GET',
						url: '/episodes',
						qs: {
							show_id: '={{$parameter.showId}}',
							'pagination[page]': '={{$parameter.page}}',
							'pagination[per]': '={{$parameter.perPage}}',
						},
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get an episode',
				description: 'Get a single episode by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/episodes/{{$parameter.episodeId}}',
					},
				},
			},
			{
				name: 'Authorize Upload',
				value: 'authorizeUpload',
				action: 'Authorize audio upload',
				description: 'Get a pre-signed upload URL for an audio file',
				routing: {
					request: {
						method: 'GET',
						url: '/episodes/authorize_upload',
						qs: {
							filename: '={{$parameter.filename}}',
						},
					},
				},
			},
			{
				name: 'Upload Audio (PUT)',
				value: 'uploadAudio',
				action: 'Upload audio file',
				description: 'Upload binary audio data to the pre-signed upload_url',
				routing: {
					request: {
						// IMPORTANT: This is not the Transistor API baseURL.
						// We must call the pre-signed S3 URL directly.
						method: 'PUT',
						url: '={{$parameter.uploadUrl}}',
						headers: {
							'Content-Type': '={{$parameter.contentType}}',
						},
						// Tell n8n to send binary data as the request body
						sendBinaryData: true,
						binaryPropertyName: '={{$parameter.binaryPropertyName}}',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create an episode',
				description: 'Create a new draft episode',
				routing: {
					request: {
						method: 'POST',
						url: '/episodes',
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/vnd.api+json',
						},
						body: '={{(() => { const f = $parameter.episodeFields || {}; const episode = { show_id: $parameter.showId }; if (f.title) episode.title = f.title; if (f.summary) episode.summary = f.summary; if (f.description) episode.description = f.description; if (f.audioUrl) episode.audio_url = f.audioUrl; if (f.transcriptText) episode.transcript_text = f.transcriptText; if (f.author) episode.author = f.author; if (typeof f.explicit === "boolean") episode.explicit = f.explicit; if (f.imageUrl) episode.image_url = f.imageUrl; if (f.keywords) episode.keywords = f.keywords; if (typeof f.season === "number") episode.season = f.season; if (typeof f.number === "number") episode.number = f.number; if (f.type) episode.type = f.type; if (f.alternateUrl) episode.alternate_url = f.alternateUrl; if (f.videoUrl) episode.video_url = f.videoUrl; if (typeof f.emailNotifications === "boolean") episode.email_notifications = f.emailNotifications; return { episode }; })()}}',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update an episode',
				description: 'Update an episode by ID',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/episodes/{{$parameter.episodeId}}',
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/vnd.api+json',
						},
						body: '={{(() => { const f = $parameter.updateFields || {}; const episode = {}; if (f.title) episode.title = f.title; if (f.description) episode.description = f.description; if (f.audioUrl) episode.audio_url = f.audioUrl; if (f.transcriptText) episode.transcript_text = f.transcriptText; if (f.author) episode.author = f.author; if (typeof f.explicit === "boolean") episode.explicit = f.explicit; if (f.imageUrl) episode.image_url = f.imageUrl; if (f.keywords) episode.keywords = f.keywords; if (typeof f.number === "number") episode.number = f.number; if (f.type) episode.type = f.type; if (f.alternateUrl) episode.alternate_url = f.alternateUrl; if (f.videoUrl) episode.video_url = f.videoUrl; if (typeof f.emailNotifications === "boolean") episode.email_notifications = f.emailNotifications; return { episode }; })()}}',
					},
				},
			},
			{
				name: 'Publish / Schedule / Unpublish',
				value: 'publish',
				action: 'Publish, schedule, or unpublish',
				description: 'Set episode publishing status',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/episodes/{{$parameter.episodeId}}/publish',
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/vnd.api+json',
						},
						body: '={{(() => { const episode = { status: $parameter.status }; if ($parameter.publishedAt) episode.published_at = $parameter.publishedAt; return { episode }; })()}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...episodesGetAllDescription,
	...episodesGetDescription,
	...episodesAuthorizeUploadDescription,
	...episodesUploadAudioDescription,
	...episodesCreateDescription,
	...episodesUpdateDescription,
	...episodesPublishDescription,
];
